import { useContext, useState } from "react";
import { TodoItemsContext } from "../Store/Todo-Item-Store";

function AddTodo() {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [error, setError] = useState("");
  const { addNewItem } = useContext(TodoItemsContext);

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    if (todoName.trim() === "") {
      setError("Task name is required.");
      return;
    }
    if (dueDate.trim() === "") {
      setError("Due date is required.");
      return;
    }
    addNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
    setError("");
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter todo here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default AddTodo;
