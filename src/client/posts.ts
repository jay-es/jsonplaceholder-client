import type { Id, Post } from "../types";
import { get, create, update, patch, del } from "../helpers";
import type { CreatePayload, UpdatePayload, PatchPayload } from "../helpers";

export const getPosts = (): Promise<Post[]> => get(`posts`);
export const getPost = (postId: Id): Promise<Post> => get(`posts/${postId}`);

export const createPost = (payload: CreatePayload<Post>): Promise<Post> =>
  create(`posts`, payload);

export const updatePost = (
  postId: Id,
  payload: UpdatePayload<Post>
): Promise<Post> => update(`posts/${postId}`, payload);

export const patchPost = (
  postId: Id,
  payload: PatchPayload<Post>
): Promise<Post> => patch(`posts/${postId}`, payload);

export const deletePost = (postId: Id): Promise<Post> => del(`posts/${postId}`);
