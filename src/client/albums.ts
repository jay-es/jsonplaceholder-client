import type { Album } from "../types";
import { getList, getOne, create, update, patch, del } from "../helpers";

export const getAlbums = getList<Album>("albums");
export const getAlbum = getOne<Album>("albums");
export const createAlbum = create<Album>("albums");
export const updateAlbum = update<Album>("albums");
export const patchAlbum = patch<Album>("albums");
export const deleteAlbum = del("albums");
