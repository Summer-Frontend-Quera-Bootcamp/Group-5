import { Box, VStack } from "@chakra-ui/react";
import { ValidateInput, Button, Link } from "../../components";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Form from "../../components/Form";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { loginAPI } from "../../services/api";
import { switchLoggedIn } from "../../features/userSlice";

const ForgotPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const navigate = useNavigate();
	let { loggedIn } = useAppSelector((state) => state.user);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (loggedIn) {
			navigate("/dashboard");
		}
	}, [loggedIn]);

	const handleAuthentication = (data: any) => {
		localStorage.setItem("token", data.access);
		localStorage.setItem("refresh", data.refresh);
		localStorage.setItem("email", data.email);
		localStorage.setItem("username", data.username);
		localStorage.setItem("id", data.user_id);
	};

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		loginAPI({
			username: data.loginName,
			password: data.loginPassword,
		})
			.then((res) => {
				handleAuthentication(res.data);
				dispatch(switchLoggedIn());
			})
			.catch((err) => console.log(err.message));
	};

	return (
		<Form
			onSubmit={handleSubmit(onSubmit)}
			title="به کوئرا تسک منیجر خوش برگشتی :) "
		>
			<ValidateInput
				type="text"
				label="نام کاربری"
				errors={errors}
				register={register}
				name="loginName"
			/>
			<ValidateInput
				type="password"
				label="رمز عبور"
				errors={errors}
				register={register}
				page="login"
				name="loginPassword"
				formHelper={true}
			/>
			<VStack spacing="md">
				<Button isActive={true} type="submit" fullWidth={true}>
					ورود
				</Button>
				<Box>
					ثبت‌نام نکرده‌ای؟ <Link href="/auth/register">ثبت‌نام</Link>
				</Box>
			</VStack>
		</Form>
	);
};

export default ForgotPage;
