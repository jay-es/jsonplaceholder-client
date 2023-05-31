import type { Todo } from "../types";
import { getList, getOne, create, update, patch, del } from "../helpers";

export const getTodos = getList<Todo>("todos");
export const getTodo = getOne<Todo>("todos");
export const createTodo = create<Todo>("todos");
export const updateTodo = update<Todo>("todos");
export const patchTodo = patch<Todo>("todos");
export const deleteTodo = del("todos");
