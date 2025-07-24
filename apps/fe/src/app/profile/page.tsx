import {
  Avatar,
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import UserInfo from "./components/UserInfo";

export default function Profile() {
  return (
    <Box
      borderColor="border"
      backgroundColor="background.default"
      width="fit-content"
      p={6}
    >
      <UserInfo />
    </Box>
  );
}
