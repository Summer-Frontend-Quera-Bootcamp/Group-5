import { Box, VStack } from "@chakra-ui/react";
import { ValidateInput, Button, Link } from "../../components";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Form from "../../components/Form";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { loginAPI } from "../../services/api";
import { setUser, switchLoggedIn } from "../../features/userSlice";
import { AXIOS } from "../../utils/functions/AXIOS";

const LoginPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const navigate = useNavigate();
	let user = useAppSelector((state) => state.user);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (user.loggedIn) {
			navigate("/dashboard");
		}
	}, [user.loggedIn]);

	const handleAuthentication = (data: any) => {
		localStorage.setItem("access", data.access);
		localStorage.setItem("refresh", data.refresh);
		AXIOS.defaults.headers.common.Authorization = `Bearer ${data.access}`;
		dispatch(setUser(data));
		localStorage.setItem(
			"user",
			JSON.stringify({
				user_id: data.user_id,
				username: data.username,
				email: data.email,
				first_name: data.first_name,
				last_name: data.last_name,
				phone_number: data.phone_number,
				thumbnail: data.thumbnail,
			})
		);
	};

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		loginAPI({
			username: data.loginName,
			password: data.loginPassword,
		})
			.then((res) => {
				handleAuthentication(res.data);
				dispatch(switchLoggedIn(true));
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

export default LoginPage;
