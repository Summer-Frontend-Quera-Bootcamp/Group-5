import { chakra } from "@chakra-ui/react";
const UserProfileCheckmarkIcon = (props: Props) => {
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
				cx="12.0001"
				cy="8.74835"
				r="4.25177"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M3.99683 20.5033C3.99683 18.0173 6.01267 16.0015 8.4987 16.0015H11.0828"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M19.0031 17.4399L16.0019 20.4412L14.2021 18.6404"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</chakra.svg>
	);
};

export default UserProfileCheckmarkIcon;
