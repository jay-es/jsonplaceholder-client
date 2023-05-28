import type { Album, Comment, Photo, Post, Todo } from "../types";
import { getNested } from "../helpers";

export const getAlbumPhotos = getNested<Photo>("albums", "photos");
export const getPostComments = getNested<Comment>("posts", "comments");
export const getUserAlbums = getNested<Album>("users", "albums");
export const getUserPosts = getNested<Post>("users", "posts");
export const getUserTodos = getNested<Todo>("users", "todos");
