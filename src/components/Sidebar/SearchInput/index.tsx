import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Dispatch, FC, SetStateAction } from "react";

interface ISearchIput {
	value: string;
	onChange: Dispatch<SetStateAction<string>>;
}

const SearchIput: FC<ISearchIput> = ({ onChange, value }): JSX.Element => {
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
					value={value}
					onChange={(e) => onChange(e.target.value)}
				/>
			</InputGroup>
		</>
	);
};

export default SearchIput;
