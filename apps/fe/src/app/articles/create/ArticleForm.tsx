import {
  Button,
  Center,
  Field,
  HStack,
  Icon,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { type ArticleValues, schema } from "./schema";

export default function ArticleForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ArticleValues>({
    resolver: yupResolver(schema),
  });

  const onError = (err: unknown) => console.log("Validation Errors:", err);
  const onSubmit = (data: ArticleValues) => console.log("Submitted Data:", data);

  return (
    <Center>
      <HStack align="start" p="xl">
        <Icon as={FaUser} size="2xl" m="xl" />
        <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
          <VStack m="xl">
            <Field.Root m="xl">
              <Textarea
                placeholder="今何してる？"
                size="xl"
                {...register("content")}
              />
              {errors["content"] && (
                <Text color="fontColor.error" textStyle="xs">
                  {errors["content"]?.message}
                </Text>
              )}
            </Field.Root>

            <Button type="submit" w="l" borderRadius="m" m="xl">
              投稿
            </Button>
          </VStack>

        </form>
      </HStack>
    </Center>
  )
}
