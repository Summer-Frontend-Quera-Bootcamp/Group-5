import { chakra } from "@chakra-ui/react";
const LinkIcon = (props: Props) => {
	return (
		<chakra.svg
			width="26"
			height="26"
			viewBox="0 0 26 26"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M10.9995 14.0004L11.9529 14.9538C12.7034 15.7043 13.7212 16.1259 14.7826 16.1259C15.8439 16.1259 16.8618 15.7043 17.6123 14.9538L20.6445 11.9215C22.4575 10.1084 22.4575 7.16893 20.6445 5.35579V5.35579C18.8314 3.54286 15.8919 3.54286 14.0788 5.35579L13.1914 6.24416"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M15.0008 10.9992L14.0474 10.0458C13.297 9.29529 12.2791 8.87366 11.2177 8.87366C10.1564 8.87366 9.13852 9.29529 8.38806 10.0458L5.35579 13.0781C3.54286 14.8912 3.54286 17.8307 5.35579 19.6438V19.6438C7.16893 21.4567 10.1084 21.4567 11.9215 19.6438L12.8089 18.7554"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</chakra.svg>
	);
};

export default LinkIcon;
