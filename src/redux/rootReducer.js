const INITIAL_STATE = {
	elementHovered: false,
};

export const rootReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case "ELEMENT_HOVER":
			return {
				...state,
				elementHovered: true,
			};
		default:
			return state;
	}
};
