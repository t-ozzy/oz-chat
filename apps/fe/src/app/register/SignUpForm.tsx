import {
  Button,
  Card,
  Center,
  Field,
  Fieldset,
  Text,
  VStack,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateAccountInfo } from "@/store/features/account/accountSlice";
import type { RootState } from "@/store/store";
import { FormFields } from "./fields";
import { type FormValues, schema } from "./schema";

export default function SignUpForm() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });
  const accountState = useSelector((state: RootState) => state.account);
  const router = useRouter();

  const onError = useCallback(
    (err: unknown) => console.log("Validation Errors:", err),
    [],
  );
  const onSubmit = useCallback(
    (data: FormValues) => {
      dispatch(updateAccountInfo(data));
      router.push("/posts");
    },
    [dispatch, router],
  );

  useEffect(() => {
    console.log("Current Account State:", accountState);
  }, [accountState]);

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
              <Button type="submit" w="full" borderRadius="m">
                アカウント作成
              </Button>
            </Card.Footer>
          </Fieldset.Root>
        </form>
      </Card.Root>
    </Center>
  );
}
