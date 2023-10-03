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
}

const EmailInput = ({
	label,
	register,
	errors,
	placeholder,
}: IInputProps): JSX.Element => {
    return (
        <>
            <FormControl isInvalid={errors.email}>
                <FormLabel>{label}</FormLabel>
                <Input
                    type="email"
                    placeholder={placeholder}
                    focusBorderColor={errors.email && "tomato"}
                    {...register("email", {
                        pattern: {
                            value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3})$/,
                            message: "ایمیل وارد شده معتبر نیست",
                        },
                    })}
                ></Input>
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>
        </>
    );
}
 
export default EmailInput;