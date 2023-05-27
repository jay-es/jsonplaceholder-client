import { describe, expect, it } from "vitest";

import {
  getTodos,
  getTodo,
  createTodo,
  updateTodo,
  patchTodo,
  deleteTodo,
} from "./todos";
import { Todo } from "../validators";

describe.concurrent("Todos", () => {
  it("getTodos", async () => {
    const res = await getTodos();

    expect(Array.isArray(res)).toBeTruthy();
    expect(res.every((v) => Todo.parse(v))).toBeTruthy();
  });

  it("getTodo", async () => {
    const res = await getTodo(1);

    expect(Todo.parse(res)).toBeTruthy();
  });

  it("createTodo", async () => {
    const res = await createTodo({
      userId: 7,
      title: "Lorem ipsum",
      completed: false,
    });

    expect(Todo.parse(res)).toBeTruthy();
  });

  it("updateTodo", async () => {
    const res = await updateTodo(1, {
      id: 1,
      userId: 7,
      title: "Lorem ipsum",
      completed: false,
    });

    expect(Todo.parse(res)).toBeTruthy();
  });

  it("patchTodo", async () => {
    const res = await patchTodo(1, {
      title: "Lorem ipsum",
    });

    expect(Todo.parse(res)).toBeTruthy();
  });

  it("deleteTodo", async () => {
    const res = await deleteTodo(1);

    expect(res).toStrictEqual({});
  });
});
