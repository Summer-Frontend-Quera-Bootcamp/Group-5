import { chakra } from "@chakra-ui/react";
const CloseIcon = (props: Props) => {
	return (
		<chakra.svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M6.6665 6.66663L13.3332 13.3333"
				stroke="currentColor"
				stroke-width="1.25"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M13.3332 6.66663L6.6665 13.3333"
				stroke="currentColor"
				stroke-width="1.25"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</chakra.svg>
	);
};

export default CloseIcon;
