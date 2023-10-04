import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

const SearchIput = (): JSX.Element => {
	return (
		<>
			<InputGroup my="10px" px={1} borderRadius="4px">
				<InputLeftElement pointerEvents="none">
					<SearchIcon w="15px" h="15px" color="BlackAlpha.50" />
				</InputLeftElement>
				<Input
					focusBorderColor="whiteAlpha.600"
					border="none"
					type="search"
					placeholder="جستجو کنید"
				/>
			</InputGroup>
		</>
	);
};

export default SearchIput;
