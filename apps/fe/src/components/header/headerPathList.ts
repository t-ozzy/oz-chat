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
    match: (pathname) => pathname === "/article/create",
  },
  {
    context: "< 戻る",
    match: (pathname) => /^\/articles\/\d+$/.test(pathname),
    link: "/articles",
  },
  {
    context: "ホーム",
    match: (pathname) => pathname === "/articles",
  },
];
