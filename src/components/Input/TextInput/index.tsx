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

const TextInput = ({
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
					type="text"
					placeholder={placeholder}
					focusBorderColor={errors[name] && "tomato"}
					{...register(name, {
						minLength: {
							value: 3,
							message: "این فیلد باید حداقل 3 کاراکتر داشته باشد",
						},
						maxLength: {
							value: 30,
							message: "این فیلد باید حداکثر 30 کاراکتر داشته باشد",
						},
					})}
				></Input>
				<FormErrorMessage>{errors[name]?.message}</FormErrorMessage>
			</FormControl>
		</>
	);
};

export default TextInput;
