import { describe, expect, it } from "vitest";

import {
  getAlbums,
  getAlbum,
  createAlbum,
  updateAlbum,
  patchAlbum,
  deleteAlbum,
} from "./albums";
import { Album } from "../validators";

describe.concurrent("Albums", () => {
  it("getAlbums", async () => {
    const res = await getAlbums();

    expect(Array.isArray(res)).toBeTruthy();
    expect(res).toHaveLength(100);
    expect(res.every((v) => Album.parse(v))).toBeTruthy();
  });

  describe("getAlbum", () => {
    it("ok", async () => {
      const res = await getAlbum(1);

      expect(Album.parse(res)).toBeTruthy();
    });

    it("404", async () => {
      expect(getAlbum(9999)).rejects.toThrowError("Not Found");
    });
  });

  it("createAlbum", async () => {
    const res = await createAlbum({
      userId: 7,
      title: "Lorem ipsum",
    });

    expect(Album.parse(res)).toBeTruthy();
  });

  it("updateAlbum", async () => {
    const res = await updateAlbum(1, {
      id: 1,
      userId: 7,
      title: "Lorem ipsum",
    });

    expect(Album.parse(res)).toBeTruthy();
  });

  it("patchAlbum", async () => {
    const res = await patchAlbum(1, {
      title: "Lorem ipsum",
    });

    expect(Album.parse(res)).toBeTruthy();
  });

  it("deleteAlbum", async () => {
    const res = await deleteAlbum(1);

    expect(res).toStrictEqual({});
  });
});
