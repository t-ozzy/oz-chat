import type { IconType } from "react-icons";
import { FaHome, FaPencilAlt, FaUser } from "react-icons/fa";

export type SideBarNavItem = {
  href: string,
  label: string,
  icon: IconType,
};

const sideBarNavItems: SideBarNavItem[] = [
  { href: "/articles", label: "ホーム", icon: FaHome },
  { href: "/profile", label: "プロフィール", icon: FaUser },
  { href: "/articles/create", label: "記事投稿", icon: FaPencilAlt },
];

export default sideBarNavItems;
