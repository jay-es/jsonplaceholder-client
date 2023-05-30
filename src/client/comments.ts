import type { Comment } from "../types";
import { getList, getOne, create, update, patch, del } from "../helpers";

export const getComments = getList<Comment>("comments");
export const getComment = getOne<Comment>("comments");
export const createComment = create<Comment>("comments");
export const updateComment = update<Comment>("comments");
export const patchComment = patch<Comment>("comments");
export const deleteComment = del("comments");
