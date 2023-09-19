import React, { ReactNode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

function ChakraRTLProvider({ children }: { children?: ReactNode }) {
	const theme = extendTheme({ direction: "rtl" });
	return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ChakraRTLProvider>
			<App />
		</ChakraRTLProvider>
	</React.StrictMode>
);

