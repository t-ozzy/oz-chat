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
import { updateCurrentAccountInfo } from "@/store/features/account/currentAccountSlice";
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
  const accounts = useSelector((state: RootState) => state.accounts);
  const router = useRouter();

  const onError = useCallback(
    (err: unknown) => console.log("Validation Errors:", err),
    [],
  );
  const onSubmit = useCallback(
    (data: FormValues) => {
      const account = accounts.find(
        (account) =>
          account.email === data.email && account.password === data.password,
      );
      if (!account) {
        setError("root.serverError", {
          type: "manual",
          message: "メールアドレスまたはパスワードが正しくありません",
        });
        return;
      }

      dispatch(updateCurrentAccountInfo(account));
      router.push("/posts");
    },
    [router, accounts, dispatch, setError],
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
                    ログイン
                  </Fieldset.Legend>
                </Center>
                <Center>
                  <Fieldset.HelperText mb="m" fontSize="s">
                    アカウントにログインしてください
                  </Fieldset.HelperText>
                </Center>
                {errors.root?.serverError && (
                  <Text color="fontColor.error" textStyle="xs">
                    {errors.root.serverError.message}
                  </Text>
                )}
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
                  ログイン
                </Button>
                <Link
                  href="/register"
                  as={NextLink}
                  fontSize="sm"
                  p="2"
                  borderRadius="m"
                  _hover={{ textDecoration: "none", bg: "gray.100" }}
                  w="full"
                  justifyContent="center"
                >
                  アカウントをお持ちでない方はこちら
                </Link>
              </VStack>
            </Card.Footer>
          </Fieldset.Root>
        </form>
      </Card.Root>
    </Center>
  );
}
