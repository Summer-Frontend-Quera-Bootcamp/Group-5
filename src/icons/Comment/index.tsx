import { chakra } from "@chakra-ui/react";
const CommentIcon = (props: Props) => {
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
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M13.0003 4.99664C8.02826 4.99664 3.99658 8.35672 3.99658 12.4969C4.07174 14.9952 5.44959 17.2717 7.62809 18.497C7.4117 19.0851 7.11079 19.6385 6.73486 20.1398C6.52737 20.4428 6.5325 20.8434 6.74769 21.1409C6.96287 21.4385 7.34174 21.5688 7.69442 21.4666C8.89725 21.1164 10.0294 20.5581 11.0395 19.8171C11.6861 19.9383 12.3425 19.9985 13.0003 19.9971C17.9724 19.9971 22.0041 16.637 22.0041 12.4969C22.0041 8.35673 17.9724 4.99664 13.0003 4.99664Z"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M9.99902 10.9992H16.0015"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M9.99902 14.0004H13.0003"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</chakra.svg>
	);
};

export default CommentIcon;
