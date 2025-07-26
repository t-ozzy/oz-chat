"use client";

import { RootState } from "@/store/store";
import { Center, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const router = useRouter();
  const accountState = useSelector((state: RootState) => state.account);

  useEffect(() => {
    if (accountState.username === "") {
      router.push("/register");
    } else {
      router.push("/posts");
    }
  }, [accountState, router]);

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
