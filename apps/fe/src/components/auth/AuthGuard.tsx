'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store/store';
import { PUBLIC_PATHS } from "./AuthConfig";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const currentAccount = useSelector((state: RootState) => state.currentAccount);

  useEffect(() => {
    // currentAccount.username が存在しない場合、未認証とみなす
    const isAuthenticated = !!currentAccount.username;

    // 現在のパスが公開パスかどうかをチェック
    const isPublicPage = PUBLIC_PATHS.includes(pathname);

    // 未認証かつ公開ページでない場合、ログインページにリダイレクト
    if (!isAuthenticated && !isPublicPage) {
      router.push('/login');
    }
  }, [currentAccount, pathname, router]);

  // 認証済み、または公開ページの場合は子コンポーネントをそのまま表示
  return <>{children}</>;
}
