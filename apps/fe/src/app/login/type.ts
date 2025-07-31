import type { Input } from "@chakra-ui/react";

export type NameField = "email" | "password";

export type FormField = {
  name: NameField;
  label: string;
  placeholder: string;
  type?: string;
  component: typeof Input;
};
