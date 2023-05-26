import { describe, expect, it } from "vitest";

import * as client from "./client";
import * as validators from "./validators";

describe("Todos", () => {
  it("getTodos", async () => {
    const res = await client.getTodos();

    expect(Array.isArray(res)).toBeTruthy();
    expect(res.every((v) => validators.Todo.parse(v))).toBeTruthy();
  });

  it("getTodo", async () => {
    const res = await client.getTodo(1);

    expect(validators.Todo.parse(res)).toBeTruthy();
  });
});
