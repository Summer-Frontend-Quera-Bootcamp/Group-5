import { Heading, chakra } from "@chakra-ui/react";
import { ValidateInput, Button } from "../../components";
import { useForm } from "react-hook-form";
import { authenticationFormStyle } from "../../styles";

const ForgotPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data:any) => console.log(data)

	return (
		<chakra.form sx={authenticationFormStyle} onSubmit={handleSubmit(onSubmit)}>
			<Heading>ثبت‌نام در کوئرا تسک منیجر</Heading>
			<ValidateInput
				type="text"
				lable="نام کاربری"
				errors={errors}
				register={register}
			/>
			<ValidateInput
				type="email"
				lable="ایمیل"
				errors={errors}
				register={register}
			/>
			<ValidateInput
				type="password"
				lable="رمز عبور"
				errors={errors}
				register={register}
			/>
			<Button
				// TODO: set state for isActive={false} prop
				isActive={false}
				// TODO: set type for button
				onClick={() => {}}
				fullWidth={true}
			>
				ثبت‌نام
			</Button>
		</chakra.form>
	);
};

export default ForgotPage;
