import type { Todo } from "../types";
import { getAll, getOne, create, update, patch, del } from "../helpers";

export const getTodos = getAll<Todo>("todos");
export const getTodo = getOne<Todo>("todos");
export const createTodo = create<Todo>("todos");
export const updateTodo = update<Todo>("todos");
export const patchTodo = patch<Todo>("todos");
export const deleteTodo = del("todos");
