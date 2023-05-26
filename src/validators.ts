import { z } from "zod";
import type * as Types from "./types";

export const Todo: z.ZodType<Types.Todo> = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  completed: z.boolean(),
});
