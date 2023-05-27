export type Id = number | string;

export type Album = {
  userId: number;
  id: number;
  title: string;
};

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
