import type { Id, Album } from "../types";
import { get, create, update, patch, del } from "../helpers";
import type { CreatePayload, UpdatePayload, PatchPayload } from "../helpers";

export const getAlbums = (): Promise<Album[]> => get(`albums`);
export const getAlbum = (albumId: Id): Promise<Album> =>
  get(`albums/${albumId}`);

export const createAlbum = (payload: CreatePayload<Album>): Promise<Album> =>
  create(`albums`, payload);

export const updateAlbum = (
  albumId: Id,
  payload: UpdatePayload<Album>
): Promise<Album> => update(`albums/${albumId}`, payload);

export const patchAlbum = (
  albumId: Id,
  payload: PatchPayload<Album>
): Promise<Album> => patch(`albums/${albumId}`, payload);

export const deleteAlbum = (albumId: Id): Promise<Album> =>
  del(`albums/${albumId}`);
