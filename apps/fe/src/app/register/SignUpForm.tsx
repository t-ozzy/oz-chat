import {
  Button,
  Card,
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
    <Center h="100vh">
      <Card.Root w="formWidth">
        <Fieldset.Root>
          <Card.Body>
            <Stack>
              <Center>
                <Fieldset.Legend fontWeight="bold" fontSize="xl" color="fontColor.main" m="m">
                  アカウント登録
                </Fieldset.Legend>
              </Center>
              <Center>
                <Fieldset.HelperText mb="m">
                  新しいアカウントを作成してSNSを始めましょう
                </Fieldset.HelperText>
              </Center>
            </Stack>

            <Fieldset.Content>
              {FormFieldArray.map((field) => {
                const { component: Component, label, ...rest } = field;
                return (
                  <Field.Root key={field.name} mt="xs">
                    <Field.Label>{label}</Field.Label>
                    <Component {...rest} />
                  </Field.Root>
                );
              })}
            </Fieldset.Content>

          </Card.Body>
          <Card.Footer>
            <Button type="submit" w="full" borderRadius="m">
              アカウント作成
            </Button>
          </Card.Footer>
        </Fieldset.Root>
      </Card.Root>
    </Center >
  );
}

export default SignUpForm;
