import type { Todo } from "./types";

type Item = Todo;
type Id = number | string;
const BASE_URL = "https://jsonplaceholder.typicode.com";

// GET
const get = (path: string) =>
  fetch(`${BASE_URL}/${path}`).then((res) => res.json());

export const getTodos = (): Promise<Todo[]> => get(`todos`);
export const getTodo = (todoId: Id): Promise<Todo> => get(`todos/${todoId}`);

const mutate = (
  method: "POST" | "PUT" | "PATCH",
  path: string,
  payload: Record<string, unknown>
) =>
  fetch(`${BASE_URL}/${path}`, {
    method,
    body: JSON.stringify(payload),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  }).then((res) => res.json());

// POST
type CreatePayload<T extends Item> = Omit<T, "id">;
const create = (path: string, payload: CreatePayload<Item>) =>
  mutate("POST", path, payload);

export const createTodo = (payload: CreatePayload<Todo>): Promise<Todo> =>
  create(`todos`, payload);

// PUT
type UpdatePayload<T extends Item> = T | Omit<T, "id">;
const update = (path: string, payload: UpdatePayload<Item>) =>
  mutate("PUT", path, payload);

export const updateTodo = (
  todoId: Id,
  payload: UpdatePayload<Todo>
): Promise<Todo> => update(`todos/${todoId}`, payload);

// PATCH
type PatchPayload<T extends Item> = Partial<T>;
const patch = (path: string, payload: PatchPayload<Item>) =>
  mutate("PATCH", path, payload);

export const patchTodo = (
  todoId: Id,
  payload: PatchPayload<Todo>
): Promise<Todo> => patch(`todos/${todoId}`, payload);

// DELETE
const del = (path: string) =>
  fetch(`${BASE_URL}/${path}`, { method: "DELETE" }).then((res) => res.json());

export const deleteTodo = (todoId: Id): Promise<Todo> => del(`todos/${todoId}`);
