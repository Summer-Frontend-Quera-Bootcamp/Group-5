// import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
// import { Outlet, useLocation, useNavigate } from "react-router-dom";
// import { Button,List } from "../../components";
// import {
// 	authenticationFormLayoutStyle,
// 	backgroundGradientStyle,
// 	headingStyle,
// } from "./style";

// const AuthenticationLayout = () => {
// 	const location = useLocation();
// 	const navigate = useNavigate();

// 	const getHeaderHelper = () => {
// 		const [text, path, buttonText] =
// 			location.pathname === "/auth/login"
// 				? ["ثبت‌نام نکرده ای؟", "/auth/register", "ثبت‌نام"]
// 				: ["قبلا ثبت‌نام کرده‌ای؟", "/auth/login", "ورود"];

// 		return (
// 			<>
// 				<Text>{text}</Text>
// 				<Button isActive={true} onClick={() => navigate(path)}>
// 					{buttonText}
// 				</Button>
// 			</>
// 		);
// 	};

// 	return (
// 		<Container maxW={"container.xl"}>
// 			<Flex align="center" justifyContent="space-between" mt="lg">
// 				<Heading sx={headingStyle}>کوئرا تسک منیجر</Heading>
// 				<Flex align="center" gap="sm">
// 					{getHeaderHelper()}
// 				</Flex>
// 			</Flex>
// 			<Box sx={authenticationFormLayoutStyle}>
// 				<Outlet />
// 			</Box>


// 			<Box sx={backgroundGradientStyle} />

// 		</Container>



// 	);

// };

// export default AuthenticationLayout;
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Button, List } from "../../components";
import {
  authenticationFormLayoutStyle,
  backgroundGradientStyle,
  headingStyle,
} from "./style";
import { FlagIcon, JustifyRightIcon } from "../../icons";

const AuthenticationLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getHeaderHelper = () => {
    const [text, path, buttonText] =
      location.pathname === "/auth/login"
        ? ["ثبت‌نام نکرده ای؟", "/auth/register", "ثبت‌نام"]
        : ["قبلا ثبت‌نام کرده‌ای؟", "/auth/login", "ورود"];

    return (
      <>
        <Text>{text}</Text>
        <Button isActive={true} onClick={() => navigate(path)}>
          {buttonText}
        </Button>
      </>
    );
  };

  const listData = [
    {
      title: "",
      deadline: new Date("7 4"),
      priority: <FlagIcon color='red' w='20px' h='20px'/>,
      description:<JustifyRightIcon color='gray'  w='20px' h='20px'/>,
    },


       {
      title: "الهه",
      deadline: new Date("8 4"),
      priority: <FlagIcon color='red' w='20px' h='20px'/>,
      description:<JustifyRightIcon color='gray'  w='20px' h='20px'/>
    },
    {
	title: "الهه",
	deadline: new Date("8 4"),
	priority: <FlagIcon color='red' w='20px' h='20px'/>,
	description:<JustifyRightIcon color='gray'  w='20px' h='20px'/>
       },
  ];

  return (
    <Container maxW={"container.xl"}>
      <Flex align="center" justifyContent="space-between" mt="lg">
        <Heading sx={headingStyle}>کوئرا تسک منیجر</Heading>
        <Flex align="center" gap="sm">
          {getHeaderHelper()}
        </Flex>
      </Flex>
      <Box sx={authenticationFormLayoutStyle}>
        <Outlet />
      </Box>

      <Box sx={backgroundGradientStyle} />
      <List listData={listData} /> {/* Pass listData as a prop */}
          </Container>
  );
};

export default AuthenticationLayout;
