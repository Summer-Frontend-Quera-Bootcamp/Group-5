import  EmailInput  from "./EmailInput";
import  TextInput  from "./TextInput";
import  PasswordInput  from "./PasswordInput";

type TInputType= 'password' | 'text' | 'email'
interface IInputProps {
    type:TInputType
	label: string;
	register: any;
	errors: any;
	page?: string;
    placeholder?: string;
}

const ValidateInput = ({
    type,
    label,
    register,
    errors,
    page,
    placeholder
    }:IInputProps):JSX.Element => {
        
    {switch (type) {
        case "text":
            return (
            <TextInput 
            errors={errors} 
            register={register} 
            label={label} 
            placeholder={placeholder} 
            />)

        case "email":
            return (
            <EmailInput 
            errors={errors} 
            register={register} 
            label={label} 
            placeholder={placeholder}
            />)

        case "password":
            return (
            <PasswordInput 
            errors={errors}  
            register={register} 
            label={label} 
            page={page} 
            placeholder={placeholder}
            />)
            
    }}
}
 
export default ValidateInput;