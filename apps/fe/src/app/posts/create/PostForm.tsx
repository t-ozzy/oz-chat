"use client";
import {
  Button,
  Center,
  Field,
  HStack,
  Icon,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { POST_MAX_LENGTH } from "@/app/posts/const";
import { addPost } from "@/store/features/post/postSlice";
import type { RootState } from "@/store/store";
import { type PostFormInput, schema } from "./schema";

export default function PostForm() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PostFormInput>({
    resolver: yupResolver(schema),
    mode: "onChange", // 入力中にバリデーションを実行
  });
  const postState = useSelector((state: RootState) => state.post);
  const account = useSelector((state: RootState) => state.account);

  const contentValue = watch("content") || "";
  const isOverLimit = contentValue.length > POST_MAX_LENGTH;
  const router = useRouter();

  const onError = useCallback(
    (err: unknown) => console.log("Validation Errors:", err),
    [],
  );
  const onSubmit = useCallback(
    (data: PostFormInput) => {
      dispatch(addPost({ name: account.username, post: data.content }));
      router.push("/posts");
    },
    [dispatch, account.username, router],
  );

  useEffect(() => {
    console.log("Posts Data:", postState);
  }, [postState]);

  return (
    <Center>
      <HStack align="start" p="xl">
        <Icon as={FaUser} size="2xl" m="xl" />
        <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
          <VStack m="xl">
            <Field.Root m="xl">
              <Textarea
                placeholder="今何してる？"
                size="xl"
                {...register("content")}
              />
              {errors.content && (
                <Text color="fontColor.error" textStyle="xs">
                  {errors.content?.message}
                </Text>
              )}
            </Field.Root>
            <Text
              fontSize="sm"
              color={isOverLimit ? "fontColor.error" : "fontColor.sub"}
              ml="auto"
            >
              {contentValue.length} / {POST_MAX_LENGTH} 文字
            </Text>

            <Button type="submit" w="l" borderRadius="m" m="xl">
              投稿
            </Button>
          </VStack>
        </form>
      </HStack>
    </Center>
  );
}
