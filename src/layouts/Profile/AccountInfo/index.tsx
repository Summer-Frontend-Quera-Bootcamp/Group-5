import {
	Button,
	FormControl,
	FormLabel,
	Heading,
	Input,
	VStack,
	chakra,
} from "@chakra-ui/react";
import { FC } from "react";
import { useAppSelector } from "../../../hooks";

const AccountInfo: FC = () => {
	const { accent } = useAppSelector((state) => state.theme);
	return (
		<VStack align="start">
			<Heading fontSize="31px" mb="lg">
				اطلاعات فردی
			</Heading>
			<chakra.form w="350px" display="flex" flexDir="column" gap="sm">
				<FormControl>
					<FormLabel>ایمیل</FormLabel>
					<Input type="email" />
				</FormControl>
				<FormControl>
					<FormLabel>نام کاربری</FormLabel>
					<Input type="text" />
				</FormControl>
				<FormControl>
					<FormLabel>رمز عبور فعلی</FormLabel>
					<Input type="password" />
				</FormControl>
				<FormControl>
					<FormLabel>رمز عبور جدید</FormLabel>
					<Input type="password" />
				</FormControl>
				<FormControl>
					<FormLabel>تکرار رمز عبور جدید</FormLabel>
					<Input type="password" />
				</FormControl>
				<Button colorScheme={accent} mt="lg">
					ثبت تغییرات
				</Button>
			</chakra.form>
		</VStack>
	);
};

export default AccountInfo;
