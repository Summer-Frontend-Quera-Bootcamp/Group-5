import { chakra } from "@chakra-ui/react";
const FlagIcon = (props: Props) => {
	return (
		<chakra.svg
			width="30"
			height="30"
			viewBox="0 0 30 30"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M6.42134 26.0294V5.11035"
				stroke="currentColor"
				stroke-width="2.3897"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M23.5786 17.4754V5.19604"
				stroke="currentColor"
				stroke-width="2.3897"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M6.42139 17.451C6.42139 17.451 7.49369 16.5601 10.7106 16.5601C13.9275 16.5601 16.0721 18.6765 19.289 18.6765C22.5059 18.6765 23.5782 17.4792 23.5782 17.4792"
				stroke="currentColor"
				stroke-width="2.3897"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M6.42139 5.11286C6.42139 5.11286 7.49369 3.9707 10.7106 3.9707C13.9275 3.9707 16.0721 6.08712 19.289 6.08712C22.5059 6.08712 23.5782 5.19619 23.5782 5.19619"
				stroke="currentColor"
				stroke-width="2.3897"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</chakra.svg>
	);
};

export default FlagIcon;
