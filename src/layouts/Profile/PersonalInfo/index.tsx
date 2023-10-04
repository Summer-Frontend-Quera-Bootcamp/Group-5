import {
	Avatar,
	Box,
	Button,
	FormControl,
	FormLabel,
	HStack,
	Heading,
	Input,
	Text,
	VStack,
	chakra,
} from "@chakra-ui/react";
import { FC } from "react";
import { buttonStyle } from "./style";

const PersonalInfo: FC = () => {
	return (
		<VStack align="start">
			<Heading fontSize="31px" mb="32px">
				اطلاعات فردی
			</Heading>
			<VStack gap="lg" align="start">
				<Box>
					<HStack gap="sm">
						<Avatar name="nima youshij" size="xl" />
						<Box>
							<Button variant="outline" colorScheme="teal" sx={buttonStyle}>
								ویرایش تصویر پروفایل
							</Button>
							<Text fontSize="xs" color="#8A8989" mt="sm">
								این تصویر برای عموم قابل نمایش است.
							</Text>
						</Box>
					</HStack>
				</Box>
				<chakra.form w="350px" display="flex" flexDir="column" gap="sm">
					<FormControl>
						<FormLabel>نام</FormLabel>
						<Input type="text" />
					</FormControl>
					<FormControl>
						<FormLabel>نام خانوادگی</FormLabel>
						<Input type="text" />
					</FormControl>
					<FormControl>
						<FormLabel>شماره موبایل</FormLabel>
						<Input type="tel" />
					</FormControl>
					<Button colorScheme="teal" mt="lg">
						ثبت تغییرات
					</Button>
				</chakra.form>
			</VStack>
		</VStack>
	);
};

export default PersonalInfo;
