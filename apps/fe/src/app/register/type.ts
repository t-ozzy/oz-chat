import type { Input, Textarea } from "@chakra-ui/react";

export type NameField = "username" | "email" | "password" | "message";

export type Component = typeof Input | typeof Textarea;

export type FormField = {
  name: NameField;
  label: string;
  placeholder: string;
  type?: string;
  component: Component;
};
