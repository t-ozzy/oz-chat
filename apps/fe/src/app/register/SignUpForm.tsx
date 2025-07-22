import {
  Button,
  Card,
  Center,
  Field,
  Fieldset,
  Input,
  Text,
  Textarea,
  Stack,
} from "@chakra-ui/react"
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from "yup";

const schema = yup.object({
  username: yup.string().
    label("名前").
    required("名前は必須です").
    min(2),
  email: yup.string().
    label("メールアドレス").
    required("メールアドレスは必須です").
    email("有効なメールアドレスを入力してください"),
  password: yup.string().
    label("パスワード").
    required("パスワードは必須です").
    min(6, "パスワードは6文字以上で入力してください").
    max(16, "パスワードは16文字以内で入力してください"),
  message: yup.string().
    label("自己紹介").
    required("自己紹介は必須です").
    max(200, "自己紹介は200文字以内で入力してください"),
});

type FormValues = yup.InferType<typeof schema>;
type FieldName = keyof FormValues;

const FormFields = [
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

function SignUpForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onError = (err: unknown) => console.log("Validation Errors:", err);
  const onSubmit = (data: FormValues) => console.log("Submitted Data:", data);

  return (
    <Center h="100vh">
      <Card.Root w="md">
        <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
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
                {FormFields.map((field) => {
                  const { component: Component, label, ...rest } = field;
                  const fieldName = field.name as FieldName;
                  return (
                    <Field.Root key={fieldName} mt="xs">
                      <Field.Label>{label}</Field.Label>
                      <Component {...rest} {...register(fieldName)} />
                      {errors[fieldName] && (
                        <Text color="red.500" textStyle="xs">
                          {errors[fieldName]?.message}
                        </Text>
                      )}
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
        </form>
      </Card.Root>
    </Center >
  );
}

export default SignUpForm;
