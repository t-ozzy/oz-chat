import * as yup from "yup";

export const schema = yup.object({
  username: yup
    .string()
    .label("名前")
    .required("名前は必須です")
    .min(2, "名前は2文字以上で入力してください")
    .max(20, "名前は20文字以内で入力してください"),
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
  message: yup
    .string()
    .label("自己紹介")
    .required("自己紹介は必須です")
    .max(200, "自己紹介は200文字以内で入力してください"),
});

export type FormValues = yup.InferType<typeof schema>;
export type FieldName = keyof FormValues;
