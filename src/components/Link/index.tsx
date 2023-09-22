import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  color?: string;
  fontSize?: string;
}

const Link: React.FC<LinkProps> = ({ href, children, color = 'teal.500', fontSize }) => {
  const linkStyles = {
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: fontSize || 'inherit', // Use the provided fontSize or default to 'inherit'
  };

  return (
    <ChakraLink
      as={RouterLink}
      href={href}
      color={color}
      colorScheme="teal.500"
      style={linkStyles}
    >
      {children}
    </ChakraLink>
  );
};

export default Link;