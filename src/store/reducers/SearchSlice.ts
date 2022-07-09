import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMenu } from "../../models/IMenu";

interface InitialData {
    [key: string]: IMenu[]
}

interface SearchState {
    searchQuery: string;
    data: InitialData | null;
    searchResult: IMenu[];
    isLoading: boolean;
    isError: boolean;
}

const initialState: SearchState = {
    searchQuery: "",
    data: null,
    searchResult: [],
    isLoading: true,
    isError: false
}

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setData(state, action: PayloadAction<InitialData>) {
            state.data = action.payload;
        },
        setSearchQuery(state, action: PayloadAction<string>) {
            state.searchQuery = action.payload;
        },
        filterData(state) {

            state.isLoading = true;
            state.isError = false;

            if (state.searchQuery) {
                for (let key in state.data) {

                    state.data[key].forEach((elem: IMenu) => {

                        if (elem.name.toLocaleLowerCase().includes(state.searchQuery.toLocaleLowerCase())) {
                            state.searchResult.push(elem);
                        }

                    });

                }
                state.isLoading = false;
                state.isError = false;

            } else {
                state.searchResult = [];
                state.isLoading = false;
                state.isError = true;
            }

        },
        clearSearch(state) {
            state.searchResult = [];
        }
    }
})

export const { setData, setSearchQuery, filterData, clearSearch } = searchSlice.actions;

export default searchSlice.reducer;