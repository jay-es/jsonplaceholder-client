import type { Album, Post, Todo } from "./types";

type Id = number | string;
type Item = Album | Post | Todo;
type ItemName = "albums" | "posts" | "todos";
const BASE_URL = "https://jsonplaceholder.typicode.com";

const get = (path: string) =>
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

export const getAll =
  <T extends Item>(name: ItemName) =>
  (): Promise<T[]> =>
    get(name);

export const getOne =
  <T extends Item>(name: ItemName) =>
  (id: Id): Promise<T> =>
    get(`${name}/${id}`);

export const create =
  <T extends Item>(name: ItemName) =>
  (payload: Omit<T, "id">): Promise<T> =>
    mutate("POST", name, payload);

export const update =
  <T extends Item>(name: ItemName) =>
  (id: Id, payload: T | Omit<T, "id">): Promise<T> =>
    mutate("PUT", `${name}/${id}`, payload);

export const patch =
  <T extends Item>(name: ItemName) =>
  (id: Id, payload: Partial<T>): Promise<T> =>
    mutate("PATCH", `${name}/${id}`, payload);

export const del =
  (name: ItemName) =>
  (id: Id): Promise<Record<string, never>> =>
    fetch(`${BASE_URL}/${name}/${id}`, { method: "DELETE" }).then((res) =>
      res.json()
    );
