import { describe, expect, it } from "vitest";

import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  patchUser,
  deleteUser,
} from "./users";
import { User } from "../validators";

describe.concurrent("Users", () => {
  it("getUsers", async () => {
    const res = await getUsers();

    expect(Array.isArray(res)).toBeTruthy();
    expect(res).toHaveLength(10);
    expect(res.every((v) => User.parse(v))).toBeTruthy();
  });

  describe("getUser", () => {
    it("ok", async () => {
      const res = await getUser(1);

      expect(User.parse(res)).toBeTruthy();
    });

    it("404", async () => {
      expect(getUser(9999)).rejects.toThrowError("Not Found");
    });
  });

  it("createUser", async () => {
    const res = await createUser({
      name: "John Doe",
      username: "jdoe",
      email: "john@example.com",
      address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: { lat: "", lng: "" },
      },
      phone: "0-00-000-0000",
      website: "",
      company: {
        name: "",
        catchPhrase: "",
        bs: "",
      },
    });

    expect(User.parse(res)).toBeTruthy();
  });

  it("updateUser", async () => {
    const res = await updateUser(1, {
      id: 1,
      name: "John Doe",
      username: "jdoe",
      email: "john@example.com",
      address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: { lat: "", lng: "" },
      },
      phone: "0-00-000-0000",
      website: "",
      company: {
        name: "",
        catchPhrase: "",
        bs: "",
      },
    });

    expect(User.parse(res)).toBeTruthy();
  });

  it("patchUser", async () => {
    const res = await patchUser(1, {
      username: "jdoe",
    });

    expect(User.parse(res)).toBeTruthy();
  });

  it("deleteUser", async () => {
    const res = await deleteUser(1);

    expect(res).toStrictEqual({});
  });
});
