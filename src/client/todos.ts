import type { Id, Todo } from "../types";
import { get, create, update, patch, del } from "../helpers";
import type { CreatePayload, UpdatePayload, PatchPayload } from "../helpers";

export const getTodos = (): Promise<Todo[]> => get(`todos`);
export const getTodo = (todoId: Id): Promise<Todo> => get(`todos/${todoId}`);

export const createTodo = (payload: CreatePayload<Todo>): Promise<Todo> =>
  create(`todos`, payload);

export const updateTodo = (
  todoId: Id,
  payload: UpdatePayload<Todo>
): Promise<Todo> => update(`todos/${todoId}`, payload);

export const patchTodo = (
  todoId: Id,
  payload: PatchPayload<Todo>
): Promise<Todo> => patch(`todos/${todoId}`, payload);

export const deleteTodo = (todoId: Id): Promise<Todo> => del(`todos/${todoId}`);
