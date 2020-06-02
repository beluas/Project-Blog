import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./rootReducer";

export const generateStore = () => {
	const store = createStore(rootReducer, applyMiddleware(logger));

	return store;
};
