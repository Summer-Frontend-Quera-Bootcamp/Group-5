import EmailInput from "./EmailInput";
import TextInput from "./TextInput";
import PasswordInput from "./PasswordInput";

type TInputType = "password" | "text" | "email";
interface IInputProps {
	type: TInputType;
	label: string;
	register: any;
	errors: any;
	page?: string;
	placeholder?: string;
	name: string;
	formHelper?: boolean;
}

const ValidateInput = ({
	type,
	label,
	register,
	errors,
	page,
	placeholder,
	name,
	formHelper,
}: IInputProps): JSX.Element => {
	{
		switch (type) {
			case "text":
				return (
					<TextInput
						errors={errors}
						register={register}
						label={label}
						placeholder={placeholder}
						name={name}
					/>
				);

			case "email":
				return (
					<EmailInput
						errors={errors}
						register={register}
						label={label}
						placeholder={placeholder}
						name={name}
					/>
				);

			case "password":
				return (
					<PasswordInput
						errors={errors}
						register={register}
						label={label}
						page={page}
						placeholder={placeholder}
						name={name}
						formHelper={formHelper}
					/>
				);
		}
	}
};

export default ValidateInput;
