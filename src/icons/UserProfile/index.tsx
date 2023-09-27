import { chakra } from "@chakra-ui/react";
const UserProfileIcon = (props: Props) => {
	return (
		<chakra.svg
			width="20"
			height="21"
			viewBox="0 0 20 21"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M12.5 4.83337C13.9167 6.25004 13.9167 8.50004 12.5 9.83337C11.0833 11.1667 8.83333 11.25 7.49999 9.83337C6.16666 8.41671 6.08333 6.16671 7.49999 4.83337C8.91666 3.50004 11.0833 3.50004 12.5 4.83337"
				stroke="currentColor"
				stroke-width="1.25"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M3.33337 17.1667C3.33337 15.0834 5.00004 13.4167 7.08337 13.4167H9.25004"
				stroke="currentColor"
				stroke-width="1.25"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M14.5833 17.5834V13.4167"
				stroke="currentColor"
				stroke-width="1.25"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M12.5 15.4999H16.6667"
				stroke="currentColor"
				stroke-width="1.25"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</chakra.svg>
	);
};

export default UserProfileIcon;
