import {
	Avatar,
	Box,
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	HStack,
	Heading,
	Input,
	Text,
	VStack,
	chakra,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { ValidateInput } from "../../../components";
import { useAppSelector } from "../../../hooks";
import { AXIOS } from "../../../utils/functions/AXIOS";
import ThumbnailInput from "./ThumbnailInput";

const PersonalInfo: FC = () => {
	const { accent } = useAppSelector((state) => state.theme);
	const [thumbnail, setThumbnail] = useState();
	const user = useAppSelector((state) => state.user);
	const {
		handleSubmit,
		formState: { errors },
		register,
	} = useForm();

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		const reqBody = {
			username: user.username,
			email: user.email,
			first_name: data.first_name || user.first_name,
			last_name: data.last_name || user.last_name,
			phone_number: data.phone_number || user.phone_number,
			thumbnail: thumbnail || user.thumbnail,
		};
		let formData = new FormData();
		for (const x in reqBody) {
			formData.append(x, reqBody[x as keyof typeof reqBody]);
		}
		AXIOS.patch(`/accounts/${user.user_id}/`, formData)
			.then((res) => console.log(res))
			.catch((err) => console.error(err));
	};

	const handleFileChange = (file: any) => {
		setThumbnail(file);
	};

	return (
		<VStack align="start">
			<Heading fontSize="31px" mb="32px">
				اطلاعات فردی
			</Heading>
			<chakra.form
				onSubmit={handleSubmit(onSubmit)}
				display="flex"
				flexDir="column"
				gap="lg"
				alignItems="start"
			>
				<Box>
					<HStack gap="sm">
						<Avatar name={user.username} size="xl" src={user.thumbnail} />
						<Box>
							<ThumbnailInput onChange={handleFileChange} />
							<Text fontSize="xs" color="#8A8989" mt="sm">
								این تصویر برای عموم قابل نمایش است.
							</Text>
						</Box>
					</HStack>
				</Box>
				<Box w="350px" display="flex" flexDir="column" gap="sm">
					<ValidateInput
						errors={errors}
						register={register}
						label="نام"
						name="first_name"
						type="text"
						placeholder={user.first_name}
					/>
					<ValidateInput
						errors={errors}
						register={register}
						label="نام خانوادگی"
						name="last_name"
						type="text"
						placeholder={user.last_name}
					/>
					<FormControl isInvalid={!!errors["phone_number"]}>
						<FormLabel>شماره موبایل</FormLabel>
						<Input
							type="tel"
							{...register("phone_number", {
								required: false,
								pattern: {
									value: /^09\d{9}$/,
									message: "شماره تلفن صحیح نیست",
								},
							})}
							placeholder={user.phone_number}
						/>
						<FormErrorMessage>
							{(errors["phone_number"]?.message as string) || null}
						</FormErrorMessage>
					</FormControl>
					<Button type="submit" colorScheme={accent} mt="lg">
						ثبت تغییرات
					</Button>
				</Box>
			</chakra.form>
		</VStack>
	);
};

export default PersonalInfo;
