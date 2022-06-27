import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRestaurant } from "../../models/IRstaurant";

interface IndexState {
    displayedRestaurant: IRestaurant | null;
}

const initialState: IndexState = {
    displayedRestaurant: localStorage.getItem("displayedRestaurant") ? JSON.parse(localStorage.getItem("displayedRestaurant") || "") : null
}

export const indexSlice = createSlice({
    name: "index",
    initialState,
    reducers: {
        displayMenu(state, action: PayloadAction<IRestaurant>) {
            state.displayedRestaurant = action.payload;
            localStorage.setItem("displayedRestaurant", JSON.stringify(state.displayedRestaurant));
        }
    }
});

export const { displayMenu } = indexSlice.actions;

export default indexSlice.reducer;