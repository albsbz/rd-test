import MenuItem from "../components/MenuItem/MenuItem.jsx";

import styles from "./RestaurantView.module.css";
import NavBar from "../components/NavBar/NavBar.jsx";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button/Button.jsx";
import useFavoriteDishes from "../hooks/useFavoriteDishes.jsx";

const FavoriteDishesView = () => {
  const [handleFavoriteDishes, favoriteDishes] = useFavoriteDishes([]);

  const navigate = useNavigate();

  return (
    <>
      <NavBar>
        <h1>
          <Link to="/">ReDI React Restaurant</Link>
        </h1>

        <Button onClick={() => navigate(`/favorites`)}>Favorite dishes</Button>
      </NavBar>

      <div className={styles.restaurantWrapper}>
        <div className={styles.menu}>
          {favoriteDishes.length > 0 ? (
            favoriteDishes.map((dish) => (
              <MenuItem
                dish={dish}
                key={dish.idMeal}
                handleFavoriteDishes={handleFavoriteDishes}
              />
            ))
          ) : (
            <p>No dishes found :(</p>
          )}
        </div>
      </div>
    </>
  );
};

export default FavoriteDishesView;
