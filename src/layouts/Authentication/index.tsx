import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import MyComponent from "../../components/‌Button";

const AuthenticationLayout = () => {
	return (
		<Container
			maxW={[
				"container.sm",
				"container.sm",
				"container.md",
				"container.lg",
				"container.xl",
				"1536px",
			]}
		>
			<Flex align="center" justifyContent="space-between" mt="l">
				<Heading
					bgGradient="linear(to-r, #06846F, #54BEE8)"
					bgClip="text"
					fill="transparent"
					display="inline-block"
					py="2"
				>
					کوئرا تسک منیجر
				</Heading>
				<Flex align="center" gap="s">
					<Text fontWeight="semibold">ثبت نام نکرده ای؟</Text>
					<MyComponent
					disabled={true}
					onclick ={function(){}}
					
					>ثبت نام
					</MyComponent>
				</Flex>
			</Flex>
			<Box pos="fixed" inset="0" zIndex="-1" display="grid" placeItems="center">
				<Outlet />
			</Box>
			<Box
				w="200%"
				h="100%"
				zIndex="-2"
				bgGradient="linear(to-l, #06846F, #54BEE8)"
				pos="fixed"
				bottom="0"
				transform="translateX(50%)"
				clipPath="polygon(100% 100%, -20% 100%, 120% 10%)"
			/>
		</Container>
	);
};

export default AuthenticationLayout;
