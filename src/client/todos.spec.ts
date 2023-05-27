import { describe, expect, it } from "vitest";

import * as client from "./todos";
import * as validators from "../validators";

describe.concurrent("Todos", () => {
  it("getTodos", async () => {
    const res = await client.getTodos();

    expect(Array.isArray(res)).toBeTruthy();
    expect(res.every((v) => validators.Todo.parse(v))).toBeTruthy();
  });

  it("getTodo", async () => {
    const res = await client.getTodo(1);

    expect(validators.Todo.parse(res)).toBeTruthy();
  });

  it("createTodo", async () => {
    const res = await client.createTodo({
      userId: 7,
      title: "Lorem ipsum",
      completed: false,
    });

    expect(validators.Todo.parse(res)).toBeTruthy();
  });

  it("updateTodo", async () => {
    const res = await client.updateTodo(1, {
      id: 1,
      userId: 7,
      title: "Lorem ipsum",
      completed: false,
    });

    expect(validators.Todo.parse(res)).toBeTruthy();
  });

  it("patchTodo", async () => {
    const res = await client.patchTodo(1, {
      title: "Lorem ipsum",
    });

    expect(validators.Todo.parse(res)).toBeTruthy();
  });

  it("deleteTodo", async () => {
    const res = await client.deleteTodo(1);

    expect(res).toStrictEqual({});
  });
});
