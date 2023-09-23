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
			<Heading>بازیابی رمز عبور</Heading>
			<ValidateInput
				type="password"
				label="رمز عبور جدید را وارد کنید"
				errors={errors}
				register={register}
			/>
			<Button isActive={false} onClick={() => null} fullWidth>
				تغییر رمز عبور
			</Button>
		</chakra.form>
	);
};

export default ForgotPage;
