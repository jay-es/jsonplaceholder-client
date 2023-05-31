import { describe, expect, it } from "vitest";

import {
  getComments,
  getComment,
  createComment,
  updateComment,
  patchComment,
  deleteComment,
} from "./comments";
import { Comment } from "../validators";

describe.concurrent("Comments", () => {
  describe("getComments", () => {
    it("all", async () => {
      const res = await getComments();

      expect(Array.isArray(res)).toBeTruthy();
      expect(res).toHaveLength(500);
      expect(res.every((v) => Comment.parse(v))).toBeTruthy();
    });

    it("filter", async () => {
      const res = await getComments({ postId: 1 });

      expect(Array.isArray(res)).toBeTruthy();
      expect(res).toHaveLength(5);
      expect(res.every((v) => Comment.parse(v))).toBeTruthy();
    });
  });

  describe("getComment", () => {
    it("ok", async () => {
      const res = await getComment(1);

      expect(Comment.parse(res)).toBeTruthy();
    });

    it("404", async () => {
      expect(getComment(9999)).rejects.toThrowError("Not Found");
    });
  });

  it("createComment", async () => {
    const res = await createComment({
      postId: 7,
      name: "John Doe",
      email: "john@example.com",
      body: "Lorem ipsum",
    });

    expect(Comment.parse(res)).toBeTruthy();
  });

  it("updateComment", async () => {
    const res = await updateComment(1, {
      id: 1,
      postId: 7,
      name: "John Doe",
      email: "john@example.com",
      body: "Lorem ipsum",
    });

    expect(Comment.parse(res)).toBeTruthy();
  });

  it("patchComment", async () => {
    const res = await patchComment(1, {
      body: "Lorem ipsum",
    });

    expect(Comment.parse(res)).toBeTruthy();
  });

  it("deleteComment", async () => {
    const res = await deleteComment(1);

    expect(res).toStrictEqual({});
  });
});
