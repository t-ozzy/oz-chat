"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { PUBLIC_PATHS } from "./AuthConfig";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const currentAccount = useSelector(
    (state: RootState) => state.currentAccount,
  );
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  useEffect(() => {
    const isAuthenticated = !!currentAccount.username;
    const isPublicPage = PUBLIC_PATHS.includes(pathname);

    if (!isAuthenticated && !isPublicPage) {
      router.push("/login");
    } else {
      setIsAuthChecked(true);
    }
  }, [currentAccount, pathname, router]);

  // 認証チェックが完了しており、認証済みか公開ページの場合のみ子要素を表示
  if (isAuthChecked) {
    return <>{children}</>;
  }
}
