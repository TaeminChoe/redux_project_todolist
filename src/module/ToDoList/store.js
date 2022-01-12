import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
import { createLogger } from "redux-logger";

const logger = createLogger();

export const store = configureStore({
	reducer: reducers,
	middleware: [logger],
});
