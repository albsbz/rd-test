import styles from "./SearchField.module.css";

const SearchField = ({ setSearchFilter }) => {
  return (
    <div className={styles.wrapper}>
      <input
        placeholder="Filter dishes..."
        onChange={(e) => {
          return setSearchFilter(e.target.value.toLowerCase());
        }}
        type="text"
      />
    </div>
  );
};

export default SearchField;
