import type { Album } from "../types";
import { getAll, getOne, create, update, patch, del } from "../helpers";

export const getAlbums = getAll<Album>("albums");
export const getAlbum = getOne<Album>("albums");
export const createAlbum = create<Album>("albums");
export const updateAlbum = update<Album>("albums");
export const patchAlbum = patch<Album>("albums");
export const deleteAlbum = del("albums");
