import { Heading, chakra } from "@chakra-ui/react";
import { ValidateInput, Button } from "../../components";
import { useForm } from "react-hook-form";
import { authenticationFormStyle } from "../../styles";


const ForgotPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	return (
		<chakra.form sx={authenticationFormStyle}>
			<Heading>به کوئرا تسک منیجر خوش برگشتی {":)"} </Heading>
			<ValidateInput
				type="email"
				lable="ایمیل"
				// TODO: errors={}
				// TODO: register={}
				errors={errors}
				register={register}
			/>
			<VStack spacing={"2"}>
				<ValidateInput
					type="password"
					lable="رمز عبور"
					// TODO: errors={}
					// TODO: register={}
					errors={errors}
					register={register}
				/>
				<Box textAlign={"right"}>
					<Link href="/auth/forgot" fontSize="sm">
						رمز عبور را فراموش کرده‌ای؟
					</Link>
				</Box>
			</VStack>
			<VStack spacing={"2"}>
				<Button
					// TODO: set state for isActive={false} prop
					isActive={false}
					// TODO: set type for button
					onClick={() => {}}
					fullWidth={true}
				>
					ورود
				</Button>
				<Box>
					ثبت‌نام نکرده‌ای؟ <Link href="/auth/register">ثبت‌نام</Link>
				</Box>
			</VStack>
		</chakra.form>
	);
};

export default ForgotPage;
