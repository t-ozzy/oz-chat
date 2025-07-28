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
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { FormFields } from "./fields";
import { type FormValues, schema } from "./schema";

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });
  const router = useRouter();

  const onError = useCallback(
    (err: unknown) => console.log("Validation Errors:", err),
    [],
  );
  const onSubmit = useCallback(
    (data: FormValues) => {
      console.log("data: ", data);
      router.push("/posts");
    },
    [router],
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
                  <Fieldset.HelperText mb="m">
                    アカウントにログインしてください
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
                ログイン
              </Button>
            </Card.Footer>
          </Fieldset.Root>
        </form>
      </Card.Root>
    </Center>
  );
}
