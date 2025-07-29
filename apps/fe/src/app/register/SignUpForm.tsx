import {
  Button,
  Card,
  Center,
  Field,
  Fieldset,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateAccountInfo } from "@/store/features/account/accountSlice";
import { addUser } from "@/store/features/account/users/usersSlice";
import type { RootState } from "@/store/store";
import { FormFields } from "./const";
import { type FormValues, schema } from "./schema";

export default function SignUpForm() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });
  const usersState = useSelector((state: RootState) => state.users);
  const router = useRouter();

  const onError = useCallback(
    (err: unknown) => console.log("Validation Errors:", err),
    [],
  );
  const onSubmit = useCallback(
    (data: FormValues) => {
      let isDuplicate = false;
      if (usersState.users.find((user) => user.username === data.username)) {
        setError("username", {
          type: "manual",
          message: "すでに使用されているユーザー名です",
        });
        isDuplicate = true;
      }

      if (usersState.users.find((user) => user.email === data.email)) {
        setError("email", {
          type: "manual",
          message: "このメールアドレスは既に使用されています",
        });
        isDuplicate = true;
      }

      if (isDuplicate) {
        return;
      }

      dispatch(updateAccountInfo(data));
      dispatch(addUser(data));
      router.push("/posts");
    },
    [dispatch, router, usersState.users, setError],
  );

  return (
    <Center h="100vh">
      <Card.Root w="md">
        <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
          <Fieldset.Root>
            <Card.Body>
              <VStack>
                <Center>
                  <Fieldset.Legend
                    fontWeight="bold"
                    fontSize="xl"
                    color="fontColor.main"
                    m="m"
                  >
                    アカウント登録
                  </Fieldset.Legend>
                </Center>
                <Center>
                  <Fieldset.HelperText mb="m">
                    新しいアカウントを作成してoz chatを始めましょう
                  </Fieldset.HelperText>
                </Center>
              </VStack>

              <Fieldset.Content>
                {FormFields.map((field) => {
                  const { component: Component, label, ...rest } = field;
                  const fieldName = field.name;
                  return (
                    <Field.Root key={fieldName} mt="xs">
                      <Field.Label>{label}</Field.Label>
                      <Component {...rest} {...register(fieldName)} />
                      {errors[fieldName] && (
                        <Text color="fontColor.error" textStyle="xs">
                          {errors[fieldName]?.message}
                        </Text>
                      )}
                    </Field.Root>
                  );
                })}
              </Fieldset.Content>
            </Card.Body>

            <Card.Footer>
              <VStack w="full">
                <Button type="submit" w="full" borderRadius="m">
                  アカウント作成
                </Button>
                <Link
                  href="/login"
                  as={NextLink}
                  fontSize="sm"
                  p="2"
                  borderRadius="m"
                  _hover={{ textDecoration: "none", bg: "gray.100" }}
                  w="full"
                  justifyContent="center"
                >
                  すでにアカウントをお持ちの方はこちら
                </Link>
              </VStack>
            </Card.Footer>
          </Fieldset.Root>
        </form>
      </Card.Root>
    </Center>
  );
}
