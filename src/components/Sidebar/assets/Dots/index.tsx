import { chakra } from "@chakra-ui/react";
const DotsIcon = (props: Props) => {
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
				d="M15.4191 10C15.4191 10.2302 15.2325 10.4168 15.0023 10.4168C14.7721 10.4168 14.5854 10.2302 14.5854 10C14.5854 9.76979 14.7721 9.58316 15.0023 9.58316C15.2325 9.58316 15.4191 9.76979 15.4191 10"
				stroke="currentColor"
				stroke-width="1.25"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M10.4172 10C10.4172 10.2302 10.2306 10.4168 10.0003 10.4168C9.77012 10.4168 9.5835 10.2302 9.5835 10C9.5835 9.76979 9.77012 9.58316 10.0003 9.58316C10.2306 9.58316 10.4172 9.76979 10.4172 10"
				stroke="currentColor"
				stroke-width="1.25"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M5.41474 10C5.41474 10.2302 5.22811 10.4168 4.99789 10.4168C4.76768 10.4168 4.58105 10.2302 4.58105 10C4.58105 9.76979 4.76768 9.58316 4.99789 9.58316C5.22811 9.58316 5.41474 9.76979 5.41474 10"
				stroke="currentColor"
				stroke-width="1.25"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</chakra.svg>
	);
};

export default DotsIcon;
