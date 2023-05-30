import type { Post } from "../types";
import { getList, getOne, create, update, patch, del } from "../helpers";

export const getPosts = getList<Post>("posts");
export const getPost = getOne<Post>("posts");
export const createPost = create<Post>("posts");
export const updatePost = update<Post>("posts");
export const patchPost = patch<Post>("posts");
export const deletePost = del("posts");
