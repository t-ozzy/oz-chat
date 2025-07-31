import type { Dispatch } from "@reduxjs/toolkit";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import type { IconType } from "react-icons";
import {
  FaHome,
  FaPencilAlt,
  FaSearch,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { clearCurrentAccountInfo } from "@/store/features/account/currentAccountSlice";

export type SideBarNavItem = {
  href: string;
  label: string;
  icon: IconType;
  onClick: (router: AppRouterInstance, dispatch: Dispatch) => void;
  color: {
    bg: { main: string; sub: string };
    font: { main: string; sub: string };
  };
};

const sideBarNavItems: SideBarNavItem[] = [
  {
    href: "/posts",
    label: "ホーム",
    icon: FaHome,
    onClick: (router) => router.push("/posts"),
    color: {
      bg: { main: "fontColor.main", sub: "transparent" },
      font: { main: "background.default", sub: "fontColor.main" },
    },
  },
  {
    href: "/profile",
    label: "プロフィール",
    icon: FaUser,
    onClick: (router) => router.push("/profile"),
    color: {
      bg: { main: "fontColor.main", sub: "transparent" },
      font: { main: "background.default", sub: "fontColor.main" },
    },
  },
  {
    href: "/posts/create",
    label: "記事投稿",
    icon: FaPencilAlt,
    onClick: (router) => router.push("/posts/create"),
    color: {
      bg: { main: "fontColor.main", sub: "transparent" },
      font: { main: "background.default", sub: "fontColor.main" },
    },
  },
  {
    href: "/search",
    label: "検索",
    icon: FaSearch,
    onClick: (router) => router.push("/search"),
    color: {
      bg: { main: "fontColor.main", sub: "transparent" },
      font: { main: "background.default", sub: "fontColor.main" },
    },
  },
  {
    href: "/login",
    label: "ログアウト",
    icon: FaSignOutAlt,
    onClick: (router, dispatch) => {
      dispatch(clearCurrentAccountInfo());
      router.push("/login");
    },
    color: {
      bg: { main: "fontColor.main", sub: "transparent" },
      font: { main: "background.default", sub: "red.600" },
    },
  },
];

export default sideBarNavItems;
