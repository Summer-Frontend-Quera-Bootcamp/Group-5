import React, {ReactNode} from 'react';
import { Button as ChakraButton, Flex } from '@chakra-ui/react';

interface IButton  {
  isActive: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  fullWidth?: boolean;
} 

const Button = ({
  isActive,
  onClick,
  children,
  fullWidth = false,//for use in other forms
  ...restProps
}: IButton) => {
  return (
    <Flex
      direction="row"
      justifyContent="center"
      alignItems="center"
      width={fullWidth ? '100%' : undefined}
    >
      <ChakraButton
        colorScheme="teal"
        size="md"
        _hover={{
          background: '#006c6c',
          color: 'white',
        }}
        margin="auto"
        onClick={onClick}
        disabled={!isActive}
        {...restProps}
        width={fullWidth ? '100%' : undefined}
      >
        {children}
      </ChakraButton>
    </Flex>
  );
};

export default Button;
