import { createContext, useReducer, useEffect } from "react";

type Todo = {
  id: number;
  text: string;
};

type Action =
  | { type: "SET_TODOS"; payload: Todo[] }
  | { type: "ADD_TODO"; payload: Todo }
  | { type: "UPDATE_TODO"; payload: Todo }
  | { type: "DELETE_TODO"; payload: number };

const TodoContext = createContext<any>(null);

function reducer(state: Todo[], action: Action): Todo[] {
  switch (action.type) {
    case "SET_TODOS":
      return action.payload;
    case "ADD_TODO":
      return [...state, action.payload];
    case "UPDATE_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

export const TodoProvider = ({ children }: any) => {
  const [todos, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((data: Todo[]) => {
        dispatch({ type: "SET_TODOS", payload: data });
      });
  }, []);

  const addTodo = async (text: string) => {
    const newTodo = { text };
    const res = await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    });
    const data: Todo = await res.json();
    dispatch({ type: "ADD_TODO", payload: data });
  };

  const updateTodo = async (todo: Todo) => {
    await fetch(`http://localhost:3000/todos/${todo.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    });
    dispatch({ type: "UPDATE_TODO", payload: todo });
  };

  const deleteTodo = async (id: number) => {
    await fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE",
    });
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  return (
    <TodoContext.Provider
      value={{ todos, dispatch, addTodo, updateTodo, deleteTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
