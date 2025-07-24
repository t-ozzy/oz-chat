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
    context: "ホーム",
    match: (pathname) => pathname === "/home",
  },
  {
    context: "登録画面",
    match: (pathname) => pathname === "/register",
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
    context: "記事一覧",
    match: (pathname) => pathname === "/articles",
  },
];
