import { describe, expect, it } from "vitest";

import {
  getPhotos,
  getPhoto,
  createPhoto,
  updatePhoto,
  patchPhoto,
  deletePhoto,
} from "./photos";
import { Photo } from "../validators";

describe.concurrent("Photos", () => {
  it("getPhotos", async () => {
    const res = await getPhotos();

    expect(Array.isArray(res)).toBeTruthy();
    expect(res).toHaveLength(5000);
    expect(res.every((v) => Photo.parse(v))).toBeTruthy();
  });

  describe("getPhoto", () => {
    it("ok", async () => {
      const res = await getPhoto(1);

      expect(Photo.parse(res)).toBeTruthy();
    });

    it("404", async () => {
      expect(getPhoto(9999)).rejects.toThrowError("Not Found");
    });
  });

  it("createPhoto", async () => {
    const res = await createPhoto({
      albumId: 7,
      title: "Lorem ipsum",
      url: "...",
      thumbnailUrl: "...",
    });

    expect(Photo.parse(res)).toBeTruthy();
  });

  it("updatePhoto", async () => {
    const res = await updatePhoto(1, {
      id: 1,
      albumId: 7,
      title: "Lorem ipsum",
      url: "...",
      thumbnailUrl: "...",
    });

    expect(Photo.parse(res)).toBeTruthy();
  });

  it("patchPhoto", async () => {
    const res = await patchPhoto(1, {
      title: "Lorem ipsum",
    });

    expect(Photo.parse(res)).toBeTruthy();
  });

  it("deletePhoto", async () => {
    const res = await deletePhoto(1);

    expect(res).toStrictEqual({});
  });
});
