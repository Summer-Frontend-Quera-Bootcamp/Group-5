import { chakra } from "@chakra-ui/react";
const CheckmarkSquareIcon = (props: Props) => {
	return (
		<chakra.svg
			width="16"
			height="17"
			viewBox="0 0 16 17"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M10.137 7.24133L7.46759 9.90911L5.86279 8.30911"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<rect
				x="1.99756"
				y="2.4975"
				width="12.005"
				height="12.005"
				rx="3.33333"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</chakra.svg>
	);
};

export default CheckmarkSquareIcon;
