"use client";
import {
  Avatar,
  Button,
  Center,
  Field,
  HStack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { type KeyboardEvent, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { defaultImgUrl, POST_MAX_LENGTH } from "@/app/posts/const";
import { addPost } from "@/store/features/post/postSlice";
import type { RootState } from "@/store/store";
import { type PostFormInput, schema } from "./schema";

export default function PostForm() {
  const dispatch = useDispatch();
  const { register, handleSubmit, watch } = useForm<PostFormInput>({
    resolver: yupResolver(schema),
    mode: "onChange", // 入力中にバリデーションを実行
  });
  const postState = useSelector((state: RootState) => state.post);
  const accountState = useSelector((state: RootState) => state.account);

  const contentValue = watch("content") || "";
  const isOverLimit = contentValue.length > POST_MAX_LENGTH;
  const router = useRouter();

  const onError = useCallback(
    (err: unknown) => console.log("Validation Errors:", err),
    [],
  );
  const onSubmit = useCallback(
    (data: PostFormInput) => {
      dispatch(addPost({ name: accountState.username, post: data.content }));
      router.push("/posts");
    },
    [dispatch, accountState.username, router],
  );

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && event.ctrlKey) {
      event.preventDefault();
      handleSubmit(onSubmit, onError)();
    }
  };

  useEffect(() => {
    console.log("Posts Data:", postState);
  }, [postState]);

  return (
    <Center>
      <HStack align="start" p="xl" mt="xl">
        <Avatar.Root colorPalette="gray" size="2xl" mt="20px">
          <Avatar.Fallback name="O Z" />
          <Avatar.Image src={defaultImgUrl} />
        </Avatar.Root>

        <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
          <VStack m="xl">
            <Field.Root m="xl">
              <Textarea
                placeholder="今何してる？"
                size="xl"
                w="20vw"
                minW="250px"
                maxW="450px"
                h="200px"
                borderRadius="l"
                focusRingColor="fontColor.main"
                {...register("content")}
                onKeyDown={handleKeyDown}
              />
            </Field.Root>
            <Text
              fontSize="sm"
              color={isOverLimit ? "fontColor.error" : "gray.400"}
              ml="auto"
            >
              {contentValue.length} / {POST_MAX_LENGTH} 文字
            </Text>

            <Button
              type="submit"
              w="100px"
              borderRadius="m"
              m="xl"
              bg={
                contentValue.length && contentValue.length <= POST_MAX_LENGTH
                  ? "fontColor.main"
                  : "fontColor.lightGray"
              }
              color="white"
            >
              投稿
            </Button>
          </VStack>
        </form>
      </HStack>
    </Center>
  );
}
