import type { Dispatch } from "@reduxjs/toolkit";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import type { IconType } from "react-icons";
import { FaHome, FaPencilAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { clearCurrentAccountInfo } from "@/store/features/account/currentAccountSlice";

export type SideBarNavItem = {
  href: string;
  label: string;
  icon: IconType;
  onClick: (router: AppRouterInstance, dispatch: Dispatch) => void;
  color?: string;
};

const sideBarNavItems: SideBarNavItem[] = [
  {
    href: "/posts",
    label: "ホーム",
    icon: FaHome,
    onClick: (router) => router.push("/posts"),
  },
  {
    href: "/profile",
    label: "プロフィール",
    icon: FaUser,
    onClick: (router) => router.push("/profile"),
  },
  {
    href: "/posts/create",
    label: "記事投稿",
    icon: FaPencilAlt,
    onClick: (router) => router.push("/posts/create"),
  },
  {
    href: "/login",
    label: "ログアウト",
    icon: FaSignOutAlt,
    onClick: (router, dispatch) => {
      dispatch(clearCurrentAccountInfo());
      router.push("/login");
    },
    color: "red.500",
  },
];

export default sideBarNavItems;
