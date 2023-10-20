import { extendTheme } from "@chakra-ui/react";

const theme = {
	direction: "rtl",
	colors: {
		"gray-secondary": "#F1F3F5",
		"gray-primary": "#868E96",
		"gray-darker": "#343A40",
		"red-secondary": "#FFE3E3",
		"red-primary": "#FA5252",
		"pink-secondary": "#FFDEEB",
		"pink-primary": "#E64980",
		"grape-secondary": "#ecebff",
		"grape-primary": "#BE4BDB",
		"purple-secondary": "#E5DBFF",
		"purple-primary": "#7950F2",
		"indigo-secondary": "#DBE4FF",
		"indigo-primary": "#4C6EF5",
		"blue-secondary": "#D0EBFF",
		"blue-primary": "#228BE6",
		"cyan-secondary": "#C5F6FA",
		"cyan-primary": "#15AABF",
		"teal-secondary": "#C3FAE8",
		"teal-primary": "#12B886",
		"brand-secondary": "#C2F7FA",
		"brand-primary": "#208D8E",
		"green-secondary": "#D3F9D8",
		"green-primary": "#40C057",
		"lime-secondary": "#E9FAC8",
		"lime-primary": "#82C91E",
		"yellow-secondary": "#FFF3BF",
		"yellow-primary": "#FAB005",
		"orange-secondary": "#FFE8CC",
		"orange-primary": "#FD7E14",
	},
	fonts: {
		heading: "Yekan",
		body: "Yekan",
	},
	fontSizes: {
		"heading-lg": "32px",
		"heading-md": "28px",
		"heading-sm": "24px",
		"heading-xs": "20px",
		"body-xl": "24px",
		"body-lg": "20px",
		"body-md": "16px",
		"body-sm": "14px",
		"body-xs": "12px",
	},
	space: {
		xs: "8px",
		sm: "16px",
		md: "24px",
		lg: "32px",
		xl: "40px",
	},
};

const chakraTheme = extendTheme(theme);

export { chakraTheme, theme };
