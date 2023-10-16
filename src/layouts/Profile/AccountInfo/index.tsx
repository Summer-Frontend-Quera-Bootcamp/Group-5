import { Box, Button, Heading, VStack, chakra } from "@chakra-ui/react";
import { FC, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { ValidateInput } from "../../../components";
import { useAppSelector } from "../../../hooks";
import { AXIOS } from "../../../utils/functions/AXIOS";

const AccountInfo: FC = () => {
	const { accent } = useAppSelector((state) => state.theme);
	const [passwordMatch, setPasswordMatch] = useState(true);
	const user = useAppSelector((state) => state.user);
	const {
		handleSubmit,
		formState: { errors },
		register,
	} = useForm();

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		let reqBody;
		let passReqBody;
		if (data.old_password && data.new_password) {
			if (data.new_password !== data.new_password_repeat) {
				setPasswordMatch(false);
				return;
			}
			setPasswordMatch(true);

			passReqBody = {
				old_password: data.old_password,
				new_password: data.new_password,
				new_password1: data.new_password_repeat,
			};
		}
		reqBody = {
			username: data.username || user.username,
			email: data.email || user.email,
			first_name: user.first_name,
			last_name: user.last_name,
			phone_number: user.phone_number,
			thumbnail: user.thumbnail,
		};
		AXIOS.patch(`/accounts/${user.user_id}/`, reqBody)
			.then((res) => console.log(res))
			.catch((err) => console.error(err));
		AXIOS.put("/accounts/change-password/", passReqBody);
	};

	return (
		<VStack align="start">
			<Heading fontSize="31px" mb="lg">
				اطلاعات فردی
			</Heading>
			<chakra.form
				onSubmit={handleSubmit(onSubmit)}
				w="350px"
				display="flex"
				flexDir="column"
				gap="sm"
			>
				<ValidateInput
					errors={errors}
					register={register}
					label="ایمیل"
					name="email"
					type="text"
					placeholder={user.email}
				/>
				<ValidateInput
					errors={errors}
					register={register}
					label="نام کاربری"
					name="username"
					type="text"
					placeholder={user.first_name}
				/>
				{[
					{ label: "رمز عبور فعلی", name: "old_password" },
					{ label: "رمز عبور جدید", name: "new_password" },
					{ label: "تکرار رمز عبور جدید", name: "new_password_repeat" },
				].map((item) => (
					<ValidateInput
						errors={errors}
						register={register}
						label={item.label}
						name={item.name}
						type="password"
					/>
				))}
				{!passwordMatch && <Box color="red">تکرار رمز عبور صحیح نیست</Box>}
				<Button type="submit" colorScheme={accent} mt="lg">
					ثبت تغییرات
				</Button>
			</chakra.form>
		</VStack>
	);
};

export default AccountInfo;
