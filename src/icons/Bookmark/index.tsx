import { chakra } from "@chakra-ui/react";
const BookmarkIcon = (props: Props) => {
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
				d="M11.5251 12.7273C11.7008 12.903 11.7008 13.1877 11.5251 13.3634C11.3495 13.539 11.0647 13.539 10.8891 13.3634C10.7134 13.1877 10.7134 12.903 10.8891 12.7273C11.0647 12.5517 11.3495 12.5517 11.5251 12.7273"
				stroke="currentColor"
				stroke-width="1.83824"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M14.6445 8.00261L23.4803 16.8384C24.4264 17.7845 24.4264 19.3188 23.4803 20.2649L18.4264 25.3188C17.4803 26.2649 15.946 26.2649 14.9999 25.3188L6.16411 16.483C5.93739 16.2563 5.80872 15.9475 5.80872 15.6264V8.85923C5.80872 8.19011 6.35161 7.64722 7.02073 7.64722H13.7891C14.1102 7.64722 14.4178 7.77467 14.6445 8.00261V8.00261Z"
				stroke="currentColor"
				stroke-width="1.83824"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M24.1911 12.5491L16.2181 4.67781C15.7585 4.22438 15.1409 3.9707 14.4963 3.9707H9.48523"
				stroke="currentColor"
				stroke-width="1.83824"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</chakra.svg>
	);
};

export default BookmarkIcon;
