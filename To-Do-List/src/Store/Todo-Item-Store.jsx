import { createContext, useReducer, useEffect } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
  toggleItemCompletion: () => {},
  setFilter: () => {},
  setSort: () => {},
});

const initialState = {
  todoItems: JSON.parse(localStorage.getItem("todoItems")) || [],
  filter: "all",
  sort: "none",
};

const todoItemsReducer = (state, action) => {
  let newTodoItems = state.todoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...newTodoItems,
      {
        name: action.payload.itemName,
        dueDate: action.payload.itemDueDate,
        completed: false,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = newTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  } else if (action.type === "TOGGLE_COMPLETION") {
    newTodoItems = newTodoItems.map((item) =>
      item.name === action.payload.itemName
        ? { ...item, completed: !item.completed }
        : item
    );
  } else if (action.type === "SET_FILTER") {
    return { ...state, filter: action.payload.filter };
  } else if (action.type === "SET_SORT") {
    return { ...state, sort: action.payload.sort };
  }

  return { ...state, todoItems: newTodoItems };
};

const TodoItemsContextProvider = ({ children }) => {
  const [state, dispatchTodoItems] = useReducer(todoItemsReducer, initialState);

  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(state.todoItems));
  }, [state.todoItems]);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };

  const toggleItemCompletion = (todoItemName) => {
    const toggleCompletionAction = {
      type: "TOGGLE_COMPLETION",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItems(toggleCompletionAction);
  };

  const setFilter = (filter) => {
    dispatchTodoItems({ type: "SET_FILTER", payload: { filter } });
  };

  const setSort = (sort) => {
    dispatchTodoItems({ type: "SET_SORT", payload: { sort } });
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: state.todoItems,
        addNewItem,
        deleteItem,
        toggleItemCompletion,
        setFilter,
        setSort,
        filter: state.filter,
        sort: state.sort,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
