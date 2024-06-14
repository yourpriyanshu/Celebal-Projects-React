import { useContext } from "react";
import { TodoItemsContext } from "../Store/Todo-Item-Store";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = () => {
  const { todoItems, filter, sort } = useContext(TodoItemsContext);

  const filteredItems = todoItems.filter((item) => {
    if (filter === "completed") return item.completed;
    if (filter === "incomplete") return !item.completed;
    return true;
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sort === "dueDateAsc") return new Date(a.dueDate) - new Date(b.dueDate);
    if (sort === "dueDateDesc")
      return new Date(b.dueDate) - new Date(a.dueDate);
    return 0;
  });

  return (
    <div className={styles.itemsContainer}>
      {sortedItems.map((item) => (
        <TodoItem
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
          completed={item.completed}
        />
      ))}
    </div>
  );
};

export default TodoItems;
