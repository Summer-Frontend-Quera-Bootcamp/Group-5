import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { chakraTheme } from "./theme";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ChakraProvider theme={chakraTheme}>
			<Provider store={store}>
				<App />
			</Provider>
		</ChakraProvider>
	</React.StrictMode>
);
