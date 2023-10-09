import { Box, VStack } from "@chakra-ui/react";
import { ValidateInput, Button, Link } from "../../components";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Form from "../../components/Form";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { AXIOS } from "../../utils/functions/AXIOS";
import { setUser } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ForgotPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const navigate = useNavigate();
	const user = useAppSelector((state) => state.user);
	const dispatch = useAppDispatch();

	useEffect(() => {
		AXIOS.get("/accounts/").then((res) => console.log(res.data));
	}, []);

	const handleAuthentication = (data: any) => {
		localStorage.setItem("token", data.access);
		AXIOS.defaults.headers.common.Authorization = `Bearer ${data.access}`;
		dispatch(
			setUser({
				firstname: data.firstname,
				lastname: data.firstname,
				email: data.email,
				token: data.access,
				loggedIn: true,
			})
		);
	};

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		AXIOS.post("/accounts/login/", {
			username: "yashar_hd",
			password: data.loginPassword,
		})
			.then((res) => {
				handleAuthentication(res.data);
				navigate("/dashboard");
			})
			.catch((err) => console.log(err.message));
	};

	return (
		<Form
			onSubmit={handleSubmit(onSubmit)}
			title="به کوئرا تسک منیجر خوش برگشتی :) "
		>
			<ValidateInput
				type="email"
				label="ایمیل"
				errors={errors}
				register={register}
				name="loginEmail"
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
