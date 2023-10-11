import { Text } from "@chakra-ui/react";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Button, ValidateInput } from "../../components";
import Form from "../../components/Form";
import { AXIOS } from "../../utils/functions/AXIOS";

const ForgotPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [showForm, setShowForm] = useState<boolean>(true);

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		AXIOS.post("/accounts/reset-password/", {
			email: data.forgetEmail,
		})
			.then((res) => {
				console.log(res.data);
				setShowForm(false);
			})
			.catch((err) => {
				console.error(err);
			});
	};

	const renderFormContent = () => (
		<>
			<ValidateInput
				type="email"
				label="ایمیل"
				errors={errors}
				register={register}
				name="forgetEmail"
			/>
			<Button isActive={true} type="submit" fullWidth={true}>
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
