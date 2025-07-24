import * as yup from "yup";

export const schema = yup.object({
  content: yup
    .string()
    .required("投稿内容は必須です")
    .min(2, "投稿内容は2文字以上で入力してください")
    .max(1000, "投稿内容は1000文字以内で入力してください")
});

export type ArticleValues = yup.InferType<typeof schema>;
