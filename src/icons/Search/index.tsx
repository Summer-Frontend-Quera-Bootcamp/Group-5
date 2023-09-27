import { chakra } from "@chakra-ui/react";
const SearchIcon = (props: Props) => {
	return (
		<chakra.svg
			width="24"
			height="25"
			viewBox="0 0 24 25"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<circle
				cx="11.0586"
				cy="11.5588"
				r="7.06194"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M20.0033 20.5034L16.0516 16.5518"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</chakra.svg>
	);
};

export default SearchIcon;
