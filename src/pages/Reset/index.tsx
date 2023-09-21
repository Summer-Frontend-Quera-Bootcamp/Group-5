import { Heading, chakra } from "@chakra-ui/react";
import { ValidateInput } from "../../components";
import MyComponent from "../../components/‌Button";
import { useForm } from "react-hook-form";

const authenticationFormStyle = {
	display: "flex",
	flexDir: "column",
	gap: "32px",
	bg: "white",
	shadow: "0px 50px 100px -20px #32325D40, 0px 30px 60px -30px #0000004D",
	width: "640px",
	borderRadius: "20px",
	p: "24px",
	textAlign: "center",
};

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
			<MyComponent
				// TODO: set state for isActive={false} prop
				isActive={false}
				// TODO: set type for button
				onClick={() => {}}
				fullWidth={true}
			>
				تغییر رمز عبور
			</MyComponent>
		</chakra.form>
	);
};

export default ForgotPage;
