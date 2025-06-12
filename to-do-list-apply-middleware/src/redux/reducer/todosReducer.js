import {
  TODOS_SET_TODO,
  TODOS_ADD_TODO,
  TODOS_TOGGLE_TODO,
  TODOS_DELETE_TODO,
  TODOS_UPDATE_TODO,
} from "../actionTypes";

const initialState = [];
export const API = "http://localhost:5000/todos";

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case TODOS_SET_TODO:
      return action.payload;
    case TODOS_ADD_TODO:
      return [...state, action.payload];
    case TODOS_TOGGLE_TODO:
      return state.map((todo) => {
        return todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo;
      });

    case TODOS_DELETE_TODO:
      return state.filter((todo) => {
        return todo.id !== action.payload;
      });
    case TODOS_UPDATE_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );

    default:
      return state;
  }
}

export const setTodos = (todos) => ({
  type: TODOS_SET_TODO,
  payload: todos,
});

export const addTodo = (todo) => ({
  type: TODOS_ADD_TODO,
  payload: todo,
});

export const toggleTodo = (id) => ({
  type: TODOS_TOGGLE_TODO,
  payload: id,
});

export const deleteTodo = (id) => ({
  type: TODOS_DELETE_TODO,
  payload: id,
});

export const updateTodo = (todo) => ({
  type: TODOS_UPDATE_TODO,
  payload: todo,
});

export const fetchTodos = () => async (dispatch) => {
  const res = await fetch(API);
  const data = await res.json();
  dispatch(setTodos(data));
};

export const addTodoAsync = (text) => async (dispatch) => {
  const res = await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      task: text,
      completed: false,
      date: new Date().toLocaleDateString(),
      description: "description for todo task",
    }),
  });
  const data = await res.json();
  dispatch(addTodo(data));
};

export const deleteTodoAsync = (id) => async (dispatch) => {
  await fetch(`${API}/${id}`, {
    method: "DELETE",
  });
  dispatch(deleteTodo(id));
};

export const toggleTodoAsync = (todo) => async (dispatch) => {
  await fetch(`${API}/${todo.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed: !todo.completed }),
  });
  dispatch(toggleTodo(todo.id));
};
export const updateTodoAsync = (id, updatedTodo) => async (dispatch) => {
  const res = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedTodo),
  });
  const data = await res.json();
  dispatch(updateTodo(data));
};
