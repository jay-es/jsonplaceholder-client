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

  describe("getTodo", () => {
    it("ok", async () => {
      const res = await getTodo(1);

      expect(Todo.parse(res)).toBeTruthy();
    });

    it("404", async () => {
      expect(getTodo(9999)).rejects.toThrowError("Not Found");
    });
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
