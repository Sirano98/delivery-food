import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface AuthState {
    login: string | null
}

const initialState: AuthState = {
    login: localStorage.getItem("login") ? JSON.parse(localStorage.getItem("login") || "") : null
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        createLogin(state, action: PayloadAction<string>) {
            state.login = action.payload;
            localStorage.setItem("login", JSON.stringify(state.login))
        },
        deleteLogin(state) {
            state.login = null;
            localStorage.removeItem("login")
        }
    }
})

export const { createLogin, deleteLogin } = authSlice.actions;

export default authSlice.reducer;