import { BaseSyntheticEvent, ReactNode } from "react";
import { authenticationFormStyle } from "./style";
import { Heading, chakra } from "@chakra-ui/react";

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
			<Heading>{title}</Heading>
			{children}
		</chakra.form>
	);
};

export default Form;
