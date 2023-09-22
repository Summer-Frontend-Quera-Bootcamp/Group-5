import {
    Input,
    FormLabel,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    Button,
    InputGroup,
    InputRightElement,
    Box,
    Flex,
    Spacer
    } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "../../components";

type TinputType= 'password' | 'text' | 'email'
interface IInputProps{
    type:TinputType;
    lable:string;
    register:any;
    errors:any;
    page?:string;
}

const ValidateInput=({type,lable,register,errors,page}:IInputProps):JSX.Element=>{
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    {switch (type) {
        case 'text':
            return(
                <>
                <FormControl isInvalid={errors.name}>
                    <FormLabel>{lable}</FormLabel>
                    <Input 
                    type={type} 
                    focusBorderColor={errors.name?'tomato':'lime'}
                    {...register('name',{
                        minLength:{
                            value:5,
                            message:'این فیلد باید حداقل 5 کاراکتر داشته باشد'
                        },
                        maxLength:{
                            value:30,
                            message:'این فیلد باید حداکثر 30 کاراکتر داشته باشد'
                        }
                    })}>
                    </Input>
                    <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
                </FormControl>
                </>
            )

            case 'email':
                return(
                    <>
                    <FormControl isInvalid={errors.email}>
                    <FormLabel>{lable}</FormLabel>
                    <Input 
                    type={type} 
                    focusBorderColor={errors.email?'tomato':'lime'}
                    {...register('email',{
                        pattern: {
                          value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3})$/,
                          message: 'ایمیل وارد شده معتبر نیست'
                        }
                      })}>
                    </Input>
                    <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
                    </FormControl>
                    </>
                )

            case 'password':
                return(
                    <>
                    <FormControl isInvalid={errors.password}>
                    <Flex>
                        <Box><FormLabel>{lable}</FormLabel></Box>
                        <Spacer/>
                        {page==='login' && 
                        <Box textAlign={"right"}>
                        <Link href="/auth/forgot" fontSize="sm">
                            رمز عبور را فراموش کرده‌ای؟
                        </Link>
                        </Box>
                        }
                    </Flex>
                    <InputGroup >
                    <Input 
                    type={show ? 'text' : type} 
                    focusBorderColor={errors.password?'tomato':'lime'} 
                    {...register('password',{
                        minLength:{
                            value:8,
                            message:'باید حداقل شامل 8 کاراکتر باشد'
                        },
                        maxLength:{
                            value:20,
                            message:'باید حداکثر شامل 20 کاراکتر باشد'
                        },
                        pattern: {
                          value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d\w\W]{8,}$/,
                          message: 'ایمیل وارد شده معتبر نیست'
                        }
                      })}>
                    </Input>
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleClick} >
                            {show ? 'مخفی' : 'نمایش'}
                        </Button>
                    </InputRightElement>
                    </InputGroup>
                    {errors.password?<FormErrorMessage>{errors.password?.message}</FormErrorMessage>
                    :<FormHelperText>
                        رمز باید بین 8 تا 20 کاراکتر(حرف کوچک و بزرگ ، عدد و کاراکتر خاص) باشد
                        </FormHelperText>}
                    
                    </FormControl>
                    </>
                )
    }}
}
export default ValidateInput