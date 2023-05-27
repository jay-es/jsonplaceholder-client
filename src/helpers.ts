import type { Todo } from "./types";

type Item = Todo;
const BASE_URL = "https://jsonplaceholder.typicode.com";

export const get = (path: string) =>
  fetch(`${BASE_URL}/${path}`).then((res) => res.json());

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

export type CreatePayload<T extends Item> = Omit<T, "id">;
export const create = (path: string, payload: CreatePayload<Item>) =>
  mutate("POST", path, payload);

export type UpdatePayload<T extends Item> = T | Omit<T, "id">;
export const update = (path: string, payload: UpdatePayload<Item>) =>
  mutate("PUT", path, payload);

export type PatchPayload<T extends Item> = Partial<T>;
export const patch = (path: string, payload: PatchPayload<Item>) =>
  mutate("PATCH", path, payload);

export const del = (path: string) =>
  fetch(`${BASE_URL}/${path}`, { method: "DELETE" }).then((res) => res.json());
