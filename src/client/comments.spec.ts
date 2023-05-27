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
  it("getComments", async () => {
    const res = await getComments();

    expect(Array.isArray(res)).toBeTruthy();
    expect(res.every((v) => Comment.parse(v))).toBeTruthy();
  });

  it("getComment", async () => {
    const res = await getComment(1);

    expect(Comment.parse(res)).toBeTruthy();
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
