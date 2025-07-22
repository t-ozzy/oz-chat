import {
  Button,
  Center,
  Field,
  Fieldset,
  Input,
  Textarea,
  Stack,
} from "@chakra-ui/react"

function SignUpForm() {
  const FormFieldArray = [
    {
      name: "name",
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
      placeholder: "password123",
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

  return (
    <Fieldset.Root>
      <Stack>
        <Center>
          <Fieldset.Legend>アカウント登録</Fieldset.Legend>
        </Center>
        <Center>
          <Fieldset.HelperText>
            新しいアカウントを作成してSNSを始めましょう
          </Fieldset.HelperText>
        </Center>
      </Stack>

      <Fieldset.Content>
        {FormFieldArray.map((field) => {
          const { component: Component, label, ...rest } = field;
          return (
            <Field.Root key={field.name}>
              <Field.Label>{label}</Field.Label>
              <Component {...rest} />
            </Field.Root>
          );
        })}
      </Fieldset.Content>

      <Button type="submit">
        アカウント作成
      </Button>
    </Fieldset.Root>
  );
}

export default SignUpForm;
