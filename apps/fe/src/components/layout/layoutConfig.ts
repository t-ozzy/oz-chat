export type LayoutConfig = {
  showHeader: boolean;
  showSidebar: boolean;
};

export const layoutConfig: Record<string, LayoutConfig> = {
  "/": {
    showHeader: false,
    showSidebar: false,
  },
  "/register": {
    showHeader: false,
    showSidebar: false,
  },
  "/login": {
    showHeader: false,
    showSidebar: false,
  },
  // デフォルト設定
  default: {
    showHeader: true,
    showSidebar: true,
  },
};

export function getLayoutConfig(pathname: string): LayoutConfig {
  return layoutConfig[pathname] || layoutConfig.default;
}
