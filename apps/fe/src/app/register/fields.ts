import { Input, Textarea } from "@chakra-ui/react";
import type { FormField } from "./type";

export const FormFields: FormField[] = [
  {
    name: "username",
    label: "名前",
    placeholder: "田中太郎",
    type: "text",
    component: Input,
  },
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
    placeholder: "••••••••",
    type: "password",
    component: Input,
  },
  {
    name: "message",
    label: "自己紹介",
    placeholder: "自己紹介を入力してください...",
    component: Textarea,
  },
];
