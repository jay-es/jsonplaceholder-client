import type { Photo } from "../types";
import { getList, getOne, create, update, patch, del } from "../helpers";

export const getPhotos = getList<Photo>("photos");
export const getPhoto = getOne<Photo>("photos");
export const createPhoto = create<Photo>("photos");
export const updatePhoto = update<Photo>("photos");
export const patchPhoto = patch<Photo>("photos");
export const deletePhoto = del("photos");
