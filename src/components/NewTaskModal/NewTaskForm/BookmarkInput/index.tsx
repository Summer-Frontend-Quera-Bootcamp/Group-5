import {
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

	const handleTagSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.stopPropagation();
		e.preventDefault();
		console.log(e.currentTarget.tag);
	};

	return (
		<Menu>
			<MenuButton as={Button} sx={taskDetailButtonStyle}>
				<BookmarkIcon w="32px" h="32px" />
			</MenuButton>
			<MenuList pt="0">
				<chakra.form onSubmit={handleTagSubmit}>
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
				</chakra.form>
				{tags &&
					tags
						.filter((item) => (searchValue ? item.includes(searchValue) : item))
						.map((tag) => {
							return <Bookmark option={tag} />;
						})}
			</MenuList>
		</Menu>
	);
};

export default BookmarkInput;

