import { chakra } from "@chakra-ui/react";
const ChatIcon = (props: Props) => {
	return (
		<chakra.svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M12.0001 3.99683C7.02802 3.99683 2.99634 7.35691 2.99634 11.497C3.07149 13.9954 4.44934 16.2719 6.62785 17.4972C6.41145 18.0853 6.11055 18.6387 5.73462 19.14C5.52713 19.4429 5.53226 19.8436 5.74744 20.1411C5.96263 20.4386 6.34149 20.569 6.69418 20.4668C7.89701 20.1166 9.02916 19.5583 10.0393 18.8173C10.6858 18.9385 11.3423 18.9987 12.0001 18.9973C16.9722 18.9973 21.0038 15.6372 21.0038 11.497C21.0038 7.35692 16.9722 3.99683 12.0001 3.99683Z"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M8.99878 9.99923H15.0013"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M8.99878 13.0007H12"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</chakra.svg>
	);
};

export default ChatIcon;
