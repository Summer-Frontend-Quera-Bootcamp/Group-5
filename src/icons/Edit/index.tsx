import { chakra } from "@chakra-ui/react";
const EditIcon = (props: Props) => {
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
				d="M17.5816 9.19398V15.6424C17.5816 16.533 16.8602 17.2544 15.9695 17.2544H4.68485C3.79417 17.2544 3.07275 16.533 3.07275 15.6424V4.3577C3.07275 3.46702 3.79417 2.74561 4.68485 2.74561H10.3272"
				stroke="currentColor"
				stroke-width="1.20907"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M7.90918 12.4182L10.4482 12.1046C10.6264 12.0828 10.7924 12.0014 10.9198 11.8749L17.0707 5.72393C17.7518 5.04282 17.7518 3.93854 17.0707 3.25662V3.25662C16.3896 2.57551 15.2853 2.57551 14.6034 3.25662L8.50968 9.35034C8.38636 9.47366 8.30656 9.63326 8.28157 9.80656L7.90918 12.4182Z"
				stroke="currentColor"
				stroke-width="1.20907"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</chakra.svg>
	);
};

export default EditIcon;
