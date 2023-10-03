import {
	Input,
	FormLabel,
	FormControl,
	FormErrorMessage,
	FormHelperText,
	InputGroup,
	InputRightElement,
	Box,
	Flex,
	Spacer,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import Link from "../../Input/Link";

interface IInputProps {
	label: string;
	register: any;
	errors: any;
	page?: string;
	placeholder?: string;
}

const PasswordInput = ({
	label,
	register,
	errors,
	page,
	placeholder,
}: IInputProps): JSX.Element => {
	const [show, setShow] = useState(false);
	const handleClick = () => setShow(!show);

	return (
		<>
			<FormControl isInvalid={errors.password}>
				<Flex>
					<Box>
						<FormLabel>{label}</FormLabel>
					</Box>
					<Spacer />
					{page === "login" && (
						<Box textAlign={"right"}>
							<Link href="/auth/forgot" fontSize="sm">
								رمز عبور را فراموش کرده‌ای؟
							</Link>
						</Box>
					)}
				</Flex>
				<InputGroup>
					<Input
						type={show ? "text" : "password"}
						placeholder={placeholder}
						focusBorderColor={errors.password ? "tomato" : "lime"}
						{...register("password", {
							minLength: {
								value: 8,
								message: "باید حداقل شامل 8 کاراکتر باشد",
							},
							maxLength: {
								value: 20,
								message: "باید حداکثر شامل 20 کاراکتر باشد",
							},
							pattern: {
								value:
									/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d\w\W]{8,}$/,
								message: "ایمیل وارد شده معتبر نیست",
							},
						})}
					></Input>
					<InputRightElement width="4.5rem">
						<button type="button" onClick={handleClick}>
							{show ? <ViewOffIcon /> : <ViewIcon />}
						</button>
					</InputRightElement>
				</InputGroup>
				{errors.password ? (
					<FormErrorMessage>{errors.password?.message}</FormErrorMessage>
				) : (
					<FormHelperText>
						رمز باید بین 8 تا 20 کاراکتر(حرف کوچک و بزرگ ، عدد و کاراکتر خاص)
						باشد
					</FormHelperText>
				)}
			</FormControl>
		</>
	);
};

export default PasswordInput;
