import { z } from "zod";

export const Todo = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  completed: z.boolean(),
});
export type Todo = z.infer<typeof Todo>;
