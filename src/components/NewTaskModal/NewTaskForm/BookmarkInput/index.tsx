import {
	Box,
	Button,
	Input,
	InputGroup,
	InputLeftElement,
	Menu,
	MenuButton,
	MenuList,
	chakra,
} from "@chakra-ui/react";
import { FC, FormEventHandler, useState } from "react";
import { BookmarkIcon, SearchIcon } from "../../../../icons";
import { taskDetailButtonStyle } from "../style";
import Bookmark from "./Bookmark";

interface IBookmarkInputProps {}

const BookmarkInput: FC<IBookmarkInputProps> = ({}) => {
	const [searchValue, setSearchValue] = useState("");
	const tags = ["درس", "کار", "پروژه"];

	return (
		<Menu>
			<MenuButton as={Button} sx={taskDetailButtonStyle}>
				<BookmarkIcon w="32px" h="32px" />
			</MenuButton>
			<MenuList pt="0">
				<Box>
					<InputGroup>
						<InputLeftElement pointerEvents="none">
							<SearchIcon w="24px" h="24px" />
						</InputLeftElement>
						<Input
							variant="flushed"
							type="search"
							placeholder="جست و جو یا ساختن تگ"
							value={searchValue}
							onChange={(e) => setSearchValue(e.target.value)}
							name="tag"
						/>
					</InputGroup>
				</Box>
				{tags &&
					tags
						.filter((item) => (searchValue ? item.includes(searchValue) : item))
						.map((tag) => {
							return <Bookmark key={tag} option={tag} />;
						})}
			</MenuList>
		</Menu>
	);
};

export default BookmarkInput;
