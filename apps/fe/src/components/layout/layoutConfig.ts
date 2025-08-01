export type LayoutConfig = {
  match: (pathname: string) => boolean;
  showHeader: boolean;
  showSidebar: boolean;
};

export const showLayoutConfigs: LayoutConfig[] = [
  {
    match: (pathname) => pathname === "/posts",
    showHeader: true,
    showSidebar: true,
  },
  {
    match: (pathname) => pathname === "/profile",
    showHeader: true,
    showSidebar: true,
  },
  {
    match: (pathname) => pathname === "/posts/create",
    showHeader: true,
    showSidebar: true,
  },
  {
    match: (pathname) => pathname === "/search",
    showHeader: true,
    showSidebar: true,
  },
  {
    match: (pathname) => /^\/posts\/[^/]+$/.test(pathname),
    showHeader: true,
    showSidebar: true,
  },
];

export function getLayoutConfig(pathname: string): LayoutConfig {
  const found = showLayoutConfigs.find((config) => config.match(pathname));
  if (!found) {
    return {
      match: () => false,
      showHeader: false,
      showSidebar: false,
    };
  }
  return found;
}
