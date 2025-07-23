export type Post = {
  id: number;
  name: string;
  post: string;
  postTime: Date;
};

export type DBPost = Omit<Post, "postTime"> & { postTime: string };
