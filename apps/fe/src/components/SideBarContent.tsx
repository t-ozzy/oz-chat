import { Link, Icon } from '@chakra-ui/react';
import NextLink from 'next/link';
import { IconType } from 'react-icons';

interface SideBarContentProps {
  href: string;
  label: string;
  icon: IconType;
}

export default function SideBarContent({ href, label, icon }: SideBarContentProps) {
  return (
    <Link
      as={NextLink}
      href={href}
      display="flex"
      alignItems="center"
      p={2}
      borderRadius="md"
      _hover={{
        bg: 'gray.100',
        color: 'gray.900',
      }}
    >
      <Icon as={icon} mr={2} />
      {label}
    </Link>
  );
}