import * as yup from "yup";

export const ARTICLE_MAX_LENGTH = 280;

export const schema = yup.object({
  content: yup
    .string()
    .required("投稿内容は必須です")
    .max(280, `投稿内容は${ARTICLE_MAX_LENGTH}文字以内で入力してください`)
});

export type ArticleValues = yup.InferType<typeof schema>;
