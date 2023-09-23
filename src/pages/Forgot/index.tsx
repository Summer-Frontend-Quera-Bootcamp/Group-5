import { Text } from "@chakra-ui/react";
import { ValidateInput, Button } from "../../components";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import Form from "../../components/Form";

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
		<Form onSubmit={handleSubmit(onSubmit)} title="فراموشی رمز عبور">
			{showForm ? renderFormContent() : renderEmailSentMessage()}
		</Form>
	);
};

export default ForgotPage;
