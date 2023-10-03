import { BaseSyntheticEvent, ReactNode } from "react";
import { authenticationFormStyle } from "./style";
import { Heading, VStack, chakra } from "@chakra-ui/react";

interface IFormProps {
	// onSubmit: (
	// 	e?: BaseSyntheticEvent<object, any, any> | undefined
	// ) => Promise<void>;
	onSubmit: any;
	title: string;
	children: ReactNode;
}

const Form = ({ onSubmit, title, children }: IFormProps) => {
	return (
		<chakra.form sx={authenticationFormStyle} onSubmit={onSubmit}>
			<Heading fontSize="32px" fontWeight="extrabold">
				{title}
			</Heading>
			<VStack alignItems="stretch" spacing="md">
				{children}
			</VStack>
		</chakra.form>
	);
};

export default Form;
