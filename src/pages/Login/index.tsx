import { Box, Heading, VStack, chakra } from "@chakra-ui/react";
import { ValidateInput, Button, Link } from "../../components";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { authenticationFormStyle } from "../../styles";

const ForgotPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);

	return (
		<chakra.form sx={authenticationFormStyle} onSubmit={handleSubmit(onSubmit)}>
			<Heading>به کوئرا تسک منیجر خوش برگشتی {":)"} </Heading>
			<ValidateInput
				type="email"
				label="ایمیل"
				errors={errors}
				register={register}
			/>
			<ValidateInput
				type="password"
				label="رمز عبور"
				errors={errors}
				register={register}
				page="login"
			/>
			<VStack>
				<Button isActive={false} onClick={() => {}} fullWidth={true}>
					ورود
				</Button>
				<Box>
					ثبت‌نام نکرده‌ای؟ <Link href="/auth/register">ثبت‌نام</Link>
				</Box>
			</VStack>
		</chakra.form>
	);
};

export default ForgotPage;
