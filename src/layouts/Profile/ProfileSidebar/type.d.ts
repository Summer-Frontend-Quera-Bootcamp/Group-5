interface IProfileSidebarProps {
	selectedPage: "personal" | "account" | "settings";
	handleClick: Dispatch<SetStateAction<"personal" | "account" | "settings">>;
}
