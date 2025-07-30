import * as yup from "yup";

export const schema = yup.object({
  email: yup
    .string()
    .label("メールアドレス")
    .required("メールアドレスは必須です")
    .email("有効なメールアドレスを入力してください"),
  password: yup
    .string()
    .label("パスワード")
    .required("パスワードは必須です")
    .min(6, "パスワードは6文字以上で入力してください")
    .max(16, "パスワードは16文字以内で入力してください"),
});

export type FormValues = yup.InferType<typeof schema>;
