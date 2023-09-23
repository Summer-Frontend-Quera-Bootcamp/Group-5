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
		<Form onSubmit={handleSubmit(onSubmit)} title="ثبت‌نام در کوئرا تسک منیجر">
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
		</Form>
	);
};

export default ForgotPage;
