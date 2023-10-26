import { HStack, Tag } from "@chakra-ui/react";
import { FC } from "react";
import BookmarkSetting from "./BookmarkSetting";

const Bookmark: FC<{ option: string }> = ({ option }) => {
	return (
		<HStack bg="unset" w="full" justify="space-between" ps="xs">
			<Tag borderRadius="full">{option}</Tag>
			<BookmarkSetting />
		</HStack>
	);
};

export default Bookmark;
