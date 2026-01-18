import useLocalStorage from "../hooks/useLocalStorage.jsx";

const favoriteDishesKey = "favoriteDishes";

const useFavoriteDishes = (dishes) => {
  const [favoriteDishes, setFavoriteDishes] = useLocalStorage(
    favoriteDishesKey,
    [],
  );

  const handleFavoriteDishes = (dishId) => {
    if (!favoriteDishes.find((dish) => dish.idMeal === dishId)) {
      const dishToAdd = dishes.find((dish) => dish.idMeal === dishId);
      setFavoriteDishes([...favoriteDishes, dishToAdd]);
      return;
    }
    setFavoriteDishes(favoriteDishes.filter((dish) => dish.idMeal !== dishId));
  };

  return [handleFavoriteDishes, favoriteDishes];
};

export default useFavoriteDishes;
