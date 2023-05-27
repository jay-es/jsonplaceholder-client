import { z } from "zod";
import type * as Types from "./types";

export const Album = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
}) satisfies z.ZodType<Types.Album>;

export const Comment = z.object({
  postId: z.number(),
  id: z.number(),
  name: z.string(),
  email: z.string(),
  body: z.string(),
}) satisfies z.ZodType<Types.Comment>;

export const Photo = z.object({
  albumId: z.number(),
  id: z.number(),
  title: z.string(),
  url: z.string(),
  thumbnailUrl: z.string(),
}) satisfies z.ZodType<Types.Photo>;

export const Post = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  body: z.string(),
}) satisfies z.ZodType<Types.Post>;

export const Todo = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  completed: z.boolean(),
}) satisfies z.ZodType<Types.Todo>;

export const User = z.object({
  id: z.number(),
  name: z.string(),
  username: z.string(),
  email: z.string(),
  address: z.object({
    street: z.string(),
    suite: z.string(),
    city: z.string(),
    zipcode: z.string(),
    geo: z.object({
      lat: z.string(),
      lng: z.string(),
    }),
  }),
  phone: z.string(),
  website: z.string(),
  company: z.object({
    name: z.string(),
    catchPhrase: z.string(),
    bs: z.string(),
  }),
}) satisfies z.ZodType<Types.User>;
