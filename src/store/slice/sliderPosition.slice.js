import { createSlice } from "@reduxjs/toolkit";
export const sliderPositionSlice = createSlice({
	name: "sliderPosition",
	initialState: "",
	reducers: {
		setPosition: (state, action) => {
			return action.payload;
		},
	},
});

export const { setPosition } = sliderPositionSlice.actions;

export default sliderPositionSlice.reducer;
