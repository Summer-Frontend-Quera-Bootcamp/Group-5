import { ValidateInput, Button } from "../../components";
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
		<Form onSubmit={handleSubmit(onSubmit)} title="بازیابی رمز عبور">
			<ValidateInput
				type="password"
				label="رمز عبور جدید را وارد کنید"
				errors={errors}
				register={register}
			/>
			<Button isActive={false} onClick={() => null} fullWidth>
				تغییر رمز عبور
			</Button>
		</Form>
	);
};

export default ForgotPage;
