import { Box, Center, VStack } from '@chakra-ui/react';
import SideBarContent from './SideBarContent';
import { FaHome, FaUser, FaPencilAlt } from 'react-icons/fa';

const menuItems = [
  { href: '/articles', label: 'ホーム', icon: FaHome },
  { href: '/profile', label: 'プロフィール', icon: FaUser },
  { href: '/articles/create', label: '記事投稿', icon: FaPencilAlt },
];

export default function SideBar() {
  return (
    <Box w="15vw" h="100vh" p={4} background="background.sideBar">
      <Center>
        <VStack as="nav" spacing={4} align="stretch">
          {menuItems.map((item) => (
            <SideBarContent href={item.href} label={item.label} icon={item.icon} key={item.href} />
          ))}
        </VStack>
      </Center>
    </Box>
  );
}
