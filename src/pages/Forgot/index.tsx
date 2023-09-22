import { Heading, Text, chakra } from "@chakra-ui/react";
import { ValidateInput, Button } from "../../components";
import { useForm } from "react-hook-form";
import { authenticationFormStyle } from "../../styles";

const ForgotPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data: any) => console.log(data);
	return (
		<chakra.form sx={authenticationFormStyle} onSubmit={handleSubmit(onSubmit)}>
			<Heading>فراموشی رمز عبور</Heading>
			// TODO: change onSubmit
			{true ? (
				<>
					<ValidateInput
						type="email"
						lable="ایمیل"
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
						دریافت ایمیل بازیابی رمز عبور
					</Button>
				</>
			) : (
				<>
					<Text>
						لینک بازیابی رمز عبور برای شما ایمیل شد. لطفا ایمیل خود را بررسی
						کنید.
					</Text>
				</>
			)}
		</chakra.form>
	);
};

export default ForgotPage;
