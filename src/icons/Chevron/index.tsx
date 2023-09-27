import { chakra } from "@chakra-ui/react";
const ChevronIcon = (props: Props) => {
	return (
		<chakra.svg
			width="24"
			height="25"
			viewBox="0 0 24 25"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M10 16.5L14 12.5L10 8.5"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</chakra.svg>
	);
};

export default ChevronIcon;
