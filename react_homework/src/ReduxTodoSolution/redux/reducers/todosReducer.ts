import { Todo } from "../../types/TodoType";
import {
  TODOS_ADD_TODO,
  TODOS_DELETE_TODO,
  TODOS_TOGGLE_TODO,
  TODOS_SET_TODOS,
} from "../actionTypes";
import { AppDispatch } from "../store";
import { endLoadingAction, startLoadingAction } from "./loadingReducer";

const TODOS_API_URL = import.meta.env.VITE_TODOS_API_URL;

type TodoActionType =
  | typeof TODOS_ADD_TODO
  | typeof TODOS_DELETE_TODO
  | typeof TODOS_TOGGLE_TODO
  | typeof TODOS_SET_TODOS;

export interface TodoAction<T> {
  type: TodoActionType;
  payload: T;
}

export type AddTodoAction = TodoAction<Todo>;
export type DeleteTodoAction = TodoAction<string>;
export type ToggleTodoAction = TodoAction<string>;
export type SetTodosAction = TodoAction<Todo[]>;

export type TodosState = Todo[];

const initialState = [] as TodosState;

export default function todosReducer(
  state = initialState,
  action: TodoAction<any>
): TodosState {
  switch (action.type) {
    case TODOS_SET_TODOS:
      return action.payload;
    case TODOS_ADD_TODO:
      return [...state, action.payload];
    case TODOS_DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case TODOS_TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
}

export const addTodoAction = (todo: Todo): AddTodoAction => ({
  type: TODOS_ADD_TODO,
  payload: todo,
});

export const deleteTodoAction = (id: string): DeleteTodoAction => ({
  type: TODOS_DELETE_TODO,
  payload: id,
});

export const toggleTodoAction = (id: string): ToggleTodoAction => ({
  type: TODOS_TOGGLE_TODO,
  payload: id,
});

export const setTodosAction = (todos: Todo[]): SetTodosAction => ({
  type: TODOS_SET_TODOS,
  payload: todos,
});

export const fetchTodosAsync = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(startLoadingAction());
    const response = await fetch(TODOS_API_URL);
    const todos = await response.json();
    dispatch({ type: TODOS_SET_TODOS, payload: todos });
  } catch (error) {
    console.error(error);
  } finally {
    dispatch(endLoadingAction());
  }
};

export const addTodoAsync = (text: string) => async (dispatch: AppDispatch) => {
  const response = await fetch(TODOS_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text, completed: false }),
  });
  const todo = await response.json();
  dispatch(addTodoAction(todo));
};

export const deleteTodoAsync =
  (id: string) => async (dispatch: AppDispatch) => {
    await fetch(`${TODOS_API_URL}/${id}`, { method: "DELETE" });
    dispatch(deleteTodoAction(id));
  };

export const toggleTodoAsync =
  (id: string, isCompleted: boolean) => async (dispatch: AppDispatch) => {
    const response = await fetch(`${TODOS_API_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: !isCompleted }),
    });
    const todo = await response.json();
    dispatch(toggleTodoAction(todo.id));
  };
