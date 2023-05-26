import type { Todo } from "./validators";

type Id = number | string;
const BASE_URL = "https://jsonplaceholder.typicode.com";

// GET
const get = (path: string) =>
  fetch(`${BASE_URL}/${path}`).then((res) => res.json());

export const getTodos = (): Promise<Todo[]> => get(`todos`);
export const getTodo = (todoId: Id): Promise<Todo> => get(`todos/${todoId}`);
