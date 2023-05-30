import { describe, expect, it } from "vitest";

import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  patchPost,
  deletePost,
} from "./posts";
import { Post } from "../validators";

describe.concurrent("Posts", () => {
  it("getPosts", async () => {
    const res = await getPosts();

    expect(Array.isArray(res)).toBeTruthy();
    expect(res).toHaveLength(100);
    expect(res.every((v) => Post.parse(v))).toBeTruthy();
  });

  describe("getPost", () => {
    it("ok", async () => {
      const res = await getPost(1);

      expect(Post.parse(res)).toBeTruthy();
    });

    it("404", async () => {
      expect(getPost(9999)).rejects.toThrowError("Not Found");
    });
  });

  it("createPost", async () => {
    const res = await createPost({
      userId: 7,
      title: "Lorem ipsum",
      body: "...",
    });

    expect(Post.parse(res)).toBeTruthy();
  });

  it("updatePost", async () => {
    const res = await updatePost(1, {
      id: 1,
      userId: 7,
      title: "Lorem ipsum",
      body: "...",
    });

    expect(Post.parse(res)).toBeTruthy();
  });

  it("patchPost", async () => {
    const res = await patchPost(1, {
      title: "Lorem ipsum",
    });

    expect(Post.parse(res)).toBeTruthy();
  });

  it("deletePost", async () => {
    const res = await deletePost(1);

    expect(res).toStrictEqual({});
  });
});
