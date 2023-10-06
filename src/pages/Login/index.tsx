import { Box, VStack } from "@chakra-ui/react";
import { ValidateInput, Button, Link } from "../../components";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Form from "../../components/Form";

const ForgotPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);

	return (
		<Form
			onSubmit={handleSubmit(onSubmit)}
			title="به کوئرا تسک منیجر خوش برگشتی :) "
		>
			<ValidateInput
				type="email"
				label="ایمیل"
				errors={errors}
				register={register}
				name="loginEmail"
			/>
			<ValidateInput
				type="password"
				label="رمز عبور"
				errors={errors}
				register={register}
				page="login"
				name="loginPassword"
				formHelper={true}
			/>
			<VStack spacing="md">
				<Button isActive={true} type="submit" fullWidth={true}>
					ورود
				</Button>
				<Box>
					ثبت‌نام نکرده‌ای؟ <Link href="/auth/register">ثبت‌نام</Link>
				</Box>
			</VStack>
		</Form>
	);
};

export default ForgotPage;
