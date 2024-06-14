import { useContext } from "react";
import { TodoItemsContext } from "../Store/Todo-Item-Store";

const TodoItem = ({ todoName, todoDate, completed }) => {
  const { deleteItem, toggleItemCompletion } = useContext(TodoItemsContext);

  return (
    <div className={`container ${completed ? "completed" : ""}`}>
      <div className="row kg-row">
        <div className="col-1">
          <input
            type="checkbox"
            checked={completed}
            onChange={() => toggleItemCompletion(todoName)}
          />
        </div>
        <div className="col-5">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2 btn-column">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => deleteItem(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
