import { Button, Flex, Switch, useColorMode } from "@chakra-ui/react";
import { FC, useRef } from "react";
import { MoonIcon, SunIcon } from "../../icons";

const DarkModeSwitch: FC = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const switchRef = useRef<HTMLInputElement>(null);
	const handleChange = () => toggleColorMode();
	const handleClick = () => switchRef.current?.click();
	return (
		<>
			<Switch hidden ref={switchRef} onChange={handleChange} />
			<Button
				w="64px"
				p="3px"
				justifyContent={colorMode === "dark" ? "end" : "start"}
				onClick={handleClick}
			>
				<Flex
					align="center"
					justify="center"
					borderRadius="5px"
					bg={colorMode === "dark" ? "#868E96" : "#fff"}
					w="30px"
					h="30px"
				>
					{colorMode === "dark" ? (
						<MoonIcon w="24px" h="24px" />
					) : (
						<SunIcon w="24px" h="24px" />
					)}
				</Flex>
			</Button>
		</>
	);
};

export default DarkModeSwitch;
