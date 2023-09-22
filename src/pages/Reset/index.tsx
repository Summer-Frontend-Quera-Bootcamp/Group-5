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
	return (
		<chakra.form sx={authenticationFormStyle}>
			<Heading>بازیابی رمز عبور</Heading>
			<ValidateInput
				type="password"
				lable="رمز عبور جدید را وارد کنید"
				// TODO: errors={}
				// TODO: register={}
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
				تغییر رمز عبور
			</Button>
		</chakra.form>
	);
};

export default ForgotPage;
