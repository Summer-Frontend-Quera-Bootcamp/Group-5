import { chakra } from "@chakra-ui/react";

const Dropdownlist = (props: Props) => {
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
				fillRule="evenodd"
				clipRule="evenodd"
				d="M2.5 10V10C2.5 5.8575 5.8575 2.5 10 2.5V2.5C14.1425 2.5 17.5 5.8575 17.5 10V10C17.5 14.1425 14.1425 17.5 10 17.5V17.5C5.8575 17.5 2.5 14.1425 2.5 10Z"
				stroke="#323232"
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>

			<path
				d="M12.5 9.16699L10 11.667L7.5 9.16699"
				stroke="#323232"
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</chakra.svg>
	);
};

export default Dropdownlist;
