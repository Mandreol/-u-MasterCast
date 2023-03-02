import { createSlice } from "@reduxjs/toolkit";
export const cardDeckSlice = createSlice({
	name: "cardDeck",
	initialState: "",
	reducers: {
		setValue: (state, action) => {
			return action.payload;
		},
	},
});

export const { setValue } = cardDeckSlice.actions;

export default cardDeckSlice.reducer;
