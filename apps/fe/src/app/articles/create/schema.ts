import * as yup from "yup";
import { ARTICLE_MAX_LENGTH } from "@/app/articles/const";

export const schema = yup.object({
  content: yup
    .string()
    .required("投稿内容は必須です")
    .max(
      ARTICLE_MAX_LENGTH,
      `投稿内容は${ARTICLE_MAX_LENGTH}文字以内で入力してください`,
    ),
});

export type PostFormInput = yup.InferType<typeof schema>;
