import { Heading, Text, chakra } from "@chakra-ui/react";
import { ValidateInput, Button } from "../../components";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { authenticationFormStyle } from "../../styles";
import { useState } from "react";

const ForgotPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [showForm, setShowForm] = useState<boolean>(true);

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		console.log(data);
		setShowForm(false);
	};

	const renderFormContent = () => (
		<>
			<ValidateInput
				type="email"
				label="ایمیل"
				errors={errors}
				register={register}
			/>
			<Button isActive={true} onClick={() => {}} fullWidth={true}>
				دریافت ایمیل بازیابی رمز عبور
			</Button>
		</>
	);

	const renderEmailSentMessage = () => (
		<>
			<Text>
				لینک بازیابی رمز عبور برای شما ایمیل شد. لطفا ایمیل خود را بررسی کنید.
			</Text>
		</>
	);

	return (
		<chakra.form sx={authenticationFormStyle} onSubmit={handleSubmit(onSubmit)}>
			<Heading>فراموشی رمز عبور</Heading>
			{showForm ? renderFormContent() : renderEmailSentMessage()}
		</chakra.form>
	);
};

export default ForgotPage;
