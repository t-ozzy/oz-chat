import { Input } from "@chakra-ui/react";
import type { FormField } from "./type";

export const FormFields: FormField[] = [
  {
    name: "email",
    label: "メールアドレス",
    placeholder: "example@gmail.com",
    type: "email",
    component: Input,
  },
  {
    name: "password",
    label: "パスワード",
    placeholder: "パスワードを入力",
    type: "password",
    component: Input,
  },
];
