import { z } from "zod";
import type * as Types from "./types";

export const Album = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
}) satisfies z.ZodType<Types.Album>;

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
