import { chakra } from "@chakra-ui/react";
const SmallAddIcon = (props: Props) => {
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
				d="M10.2093 5.90796V13.7045"
				stroke="currentColor"
				stroke-width="1.20907"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M14.3773 9.80638H6.04395"
				stroke="currentColor"
				stroke-width="1.20907"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</chakra.svg>
	);
};

export default SmallAddIcon;
