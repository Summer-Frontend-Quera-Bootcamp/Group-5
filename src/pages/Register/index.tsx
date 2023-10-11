import { ValidateInput, Button } from "../../components";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Form from "../../components/Form";
import { Checkbox } from "@chakra-ui/react";
import { useState } from "react";
import { useAppSelector } from "../../hooks";
import { AXIOS } from "../../utils/functions/AXIOS";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
	const { accent } = useAppSelector((state) => state.theme);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const navigate = useNavigate();
	const [isChecked, setIsChecked] = useState(false);

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		AXIOS.post("/accounts/", {
			username: data.registerName,
			email: data.registerEmail,
			password: data.registerPassword,
		}).then((res) => {
			console.log(res.data);
			navigate("/");
		});
	};

	return (
		<Form onSubmit={handleSubmit(onSubmit)} title="ثبت‌نام در کوئرا تسک منیجر">
			<ValidateInput
				type="text"
				label="نام کاربری"
				errors={errors}
				register={register}
				name="registerName"
			/>
			<ValidateInput
				type="email"
				label="ایمیل"
				errors={errors}
				register={register}
				name="registerEmail"
			/>
			<ValidateInput
				type="password"
				label="رمز عبور"
				errors={errors}
				register={register}
				name="registerPassword"
				formHelper={true}
			/>
			<Checkbox
				colorScheme={accent}
				isChecked={isChecked}
				onChange={() => setIsChecked(!isChecked)}
			>
				قوانین و مقررات را می‌پذیرم.
			</Checkbox>
			<Button isActive={isChecked} type="submit" fullWidth={true}>
				ثبت‌نام
			</Button>
		</Form>
	);
};

export default RegisterPage;
