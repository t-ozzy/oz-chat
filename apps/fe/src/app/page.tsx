"use client";

import { Center, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";

export default function Home() {
  const router = useRouter();
  const currentAccount = useSelector(
    (state: RootState) => state.currentAccount,
  );

  useEffect(() => {
    if (currentAccount.username === "") {
      router.push("/register");
    } else {
      router.push("/posts");
    }
  }, [currentAccount.username, router]);

  return (
    <Center>
      <Stack>
        <Text color="fontColor.main" fontWeight="bold">
          oz-chat
        </Text>
      </Stack>
    </Center>
  );
}
