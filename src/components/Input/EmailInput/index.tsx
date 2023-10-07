import {
	Input,
	FormLabel,
	FormControl,
	FormErrorMessage,
} from "@chakra-ui/react";

interface IInputProps {
	label: string;
	register: any;
	errors: any;
	placeholder?: string;
	name: string;
}

const EmailInput = ({
	label,
	register,
	errors,
	placeholder,
	name,
}: IInputProps): JSX.Element => {
	return (
		<>
			<FormControl isInvalid={errors[name]}>
				<FormLabel>{label}</FormLabel>
				<Input
					type="email"
					placeholder={placeholder}
					focusBorderColor={errors[name] && "tomato"}
					{...register(name, {
						pattern: {
							value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3})$/,
							message: "ایمیل وارد شده معتبر نیست",
						},
					})}
				></Input>
				<FormErrorMessage>{errors[name]?.message}</FormErrorMessage>
			</FormControl>
		</>
	);
};

export default EmailInput;
