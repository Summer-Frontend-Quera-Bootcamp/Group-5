import { ValidateInput, Button } from "../../components";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Form from "../../components/Form";
import { Checkbox } from "@chakra-ui/react";
import { useState } from "react";

const ForgotPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const [isChecked, setIsChecked] = useState(false);

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
			<Checkbox
				colorScheme="teal"
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

export default ForgotPage;
