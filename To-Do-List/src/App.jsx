import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import "./App.css";
import WelcomeMessage from "./Components/WelcomeMessage";
import TodoItemsContextProvider from "./Store/Todo-Item-Store";
import SortFilterControls from "./Components/SortFilterControls";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <SortFilterControls />
        <WelcomeMessage />
        <div className="item-container">
          <TodoItems />
        </div>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
