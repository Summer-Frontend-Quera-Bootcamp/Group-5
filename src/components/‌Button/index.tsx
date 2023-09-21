import React, {ReactNode} from 'react';
import { Button, Flex, ButtonProps, FlexProps } from '@chakra-ui/react';

type MyComponentProps = {
  isActive: boolean;
  onClick: (event: React.MouseEvent <HTMLButtonElement>) => void;
  children: ReactNode;
  fullWidth?: boolean;
} & ButtonProps &
  FlexProps;

const MyComponent = ({
  isActive,
  onClick,
  children,
  fullWidth = false,//for use in other forms
  ...restProps
}: MyComponentProps) => {
  return (
    <Flex
      direction="row"
      justifyContent="center"
      alignItems="center"
      width={fullWidth ? '100%' : undefined}
    >
      <Button
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
      </Button>
    </Flex>
  );
};

export default MyComponent;