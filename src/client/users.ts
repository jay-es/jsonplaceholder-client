import type { User } from "../types";
import { getList, getOne, create, update, patch, del } from "../helpers";

export const getUsers = getList<User>("users");
export const getUser = getOne<User>("users");
export const createUser = create<User>("users");
export const updateUser = update<User>("users");
export const patchUser = patch<User>("users");
export const deleteUser = del("users");
