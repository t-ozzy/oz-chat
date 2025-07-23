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
    <Link as={NextLink} href={href} display="flex" alignItems="center">
      <Icon as={icon} mr={2} />
      {label}
    </Link>
  );
}