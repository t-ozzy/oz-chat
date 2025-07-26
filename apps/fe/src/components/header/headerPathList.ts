type HeaderPathItem = {
  context: string;
  match: (pathname: string) => boolean;
  link?: string;
};

export const headerPathList: HeaderPathItem[] = [
  {
    context: "プロフィール",
    match: (pathname) => pathname === "/profile",
  },
  {
    context: "投稿",
    match: (pathname) => pathname === "/posts/create",
  },
  {
    context: "< 戻る",
    match: (pathname) => /^\/posts\/[^/]+$/.test(pathname),
    link: "/posts",
  },
  {
    context: "ホーム",
    match: (pathname) => pathname === "/posts",
  },
];
