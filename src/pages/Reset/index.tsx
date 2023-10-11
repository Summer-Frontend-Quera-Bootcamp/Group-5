import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Button, ValidateInput } from "../../components";
import Form from "../../components/Form";
import { AXIOS } from "../../utils/functions/AXIOS";
import { useLocation, useNavigate } from "react-router-dom";

const ResetPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const token = useLocation().search.split("=")[1];
	const navigate = useNavigate();
	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		AXIOS.patch("/accounts/reset-password/set-password/", {
			token: token,
			password: data.newPassword,
			password1: data.repeatPassword,
		})
			.then((res) => {
				console.log(res);
				navigate("/");
			})
			.catch((err) => console.error(err));
	};

	return (
		<Form onSubmit={handleSubmit(onSubmit)} title="بازیابی رمز عبور">
			<ValidateInput
				type="password"
				label="رمز عبور جدید را وارد کنید"
				errors={errors}
				register={register}
				name="newPassword"
				// formHelper={true}
			/>
			<ValidateInput
				type="password"
				label="تکرار رمز عبور"
				errors={errors}
				register={register}
				name="repeatPassword"
				formHelper={true}
			/>
			<Button isActive={true} type="submit" fullWidth>
				تغییر رمز عبور
			</Button>
		</Form>
	);
};

export default ResetPage;
