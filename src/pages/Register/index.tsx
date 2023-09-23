import { Heading, chakra } from "@chakra-ui/react";
import { ValidateInput, Button } from "../../components";
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
			<Heading>ثبت‌نام در کوئرا تسک منیجر</Heading>
			<ValidateInput
				type="text"
				label="نام کاربری"
				errors={errors}
				register={register}
			/>
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
			/>
			<Button isActive={false} onClick={() => {}} fullWidth={true}>
				ثبت‌نام
			</Button>
		</chakra.form>
	);
};

export default ForgotPage;
