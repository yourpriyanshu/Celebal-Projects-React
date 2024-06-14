import { useContext } from "react";
import { TodoItemsContext } from "../Store/Todo-Item-Store";
import styles from "./SortFilterControls.module.css";

const SortFilterControls = () => {
  const { setFilter, setSort } = useContext(TodoItemsContext);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <div className={styles.controlsContainer}>
      <div>
        <label>Filter: </label>
        <select onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
      <div>
        <label>Sort: </label>
        <select onChange={handleSortChange}>
          <option value="none">None</option>
          <option value="dueDateAsc">Due Date Ascending</option>
          <option value="dueDateDesc">Due Date Descending</option>
        </select>
      </div>
    </div>
  );
};

export default SortFilterControls;
