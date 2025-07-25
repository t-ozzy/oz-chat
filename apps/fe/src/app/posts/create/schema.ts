import * as yup from "yup";
import { POST_MAX_LENGTH } from "@/app/posts/const";

export const schema = yup.object({
  content: yup
    .string()
    .required("投稿内容は必須です")
    .max(
      POST_MAX_LENGTH,
      `投稿内容は${POST_MAX_LENGTH}文字以内で入力してください`,
    ),
});

export type PostFormInput = yup.InferType<typeof schema>;
