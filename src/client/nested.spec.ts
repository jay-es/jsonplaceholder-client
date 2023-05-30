import { describe, expect, it } from "vitest";

import {
  getAlbumPhotos,
  getPostComments,
  getUserAlbums,
  getUserPosts,
  getUserTodos,
} from "./nested";
import { Album, Comment, Photo, Post, Todo } from "../validators";

describe.concurrent("nested", () => {
  it("getAlbumPhotos", async () => {
    const res = await getAlbumPhotos(1);

    expect(Array.isArray(res)).toBeTruthy();
    expect(res).toHaveLength(50);
    expect(res.every((v) => Photo.parse(v))).toBeTruthy();
  });

  it("getPostComments", async () => {
    const res = await getPostComments(1);

    expect(Array.isArray(res)).toBeTruthy();
    expect(res).toHaveLength(5);
    expect(res.every((v) => Comment.parse(v))).toBeTruthy();
  });

  it("getUserAlbums", async () => {
    const res = await getUserAlbums(1);

    expect(Array.isArray(res)).toBeTruthy();
    expect(res).toHaveLength(10);
    expect(res.every((v) => Album.parse(v))).toBeTruthy();
  });

  it("getUserPosts", async () => {
    const res = await getUserPosts(1);

    expect(Array.isArray(res)).toBeTruthy();
    expect(res).toHaveLength(10);
    expect(res.every((v) => Post.parse(v))).toBeTruthy();
  });

  it("getUserTodos", async () => {
    const res = await getUserTodos(1);

    expect(Array.isArray(res)).toBeTruthy();
    expect(res).toHaveLength(20);
    expect(res.every((v) => Todo.parse(v))).toBeTruthy();
  });
});
