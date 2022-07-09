import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IUser } from "../../models/IUser";

interface UserState {
    userData: IUser;
    loginError: string;
    passwordError: string;
}

const initialState: UserState = {
    userData: {
        email: null,
        id: null,
        token: null
    },
    loginError: "",
    passwordError: ""
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login(state, action: PayloadAction<IUser>) {
            state.userData.email = action.payload.email;
            state.userData.id = action.payload.id;
            state.userData.token = action.payload.token;
        },
        logout(state) {
            state.userData.email = null;
            state.userData.id = null;
            state.userData.token = null;
        },
        handleLoginError(state, action: PayloadAction<string | null>) {

            switch (action.payload) {
                case "":
                    state.loginError = "This field can't be empty";
                    break;

                case "auth/invalid-email":
                    state.loginError = "Incorrect email";
                    break;

                case "auth/user-not-found":
                    state.loginError = "Wrong email";
                    break;

                case "auth/too-many-requests":
                    state.loginError = "Try again later for security reasons";
                    break;

                case "auth/email-already-in-use":
                    state.loginError = "Email already in use";
                    break;

                case "auth/wrong-password":
                    break;

                default:
                    const regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if (action.payload && !regExp.test(action.payload)) {
                        state.loginError = "Incorrect email";
                    } else {
                        state.loginError = "";
                    }
                    break;
            }
        },
        handlePasswordError(state, action: PayloadAction<string | null>) {

            switch (action.payload) {
                case "":
                    state.passwordError = "Password length at least 8 symbols";
                    break;

                case "auth/weak-password":
                    state.passwordError = "Password length at least 8 symbols";
                    break;

                case "auth/wrong-password":
                    state.passwordError = "Wrong password";
                    break;

                default:
                    if (action.payload && action.payload?.length < 8) {
                        state.passwordError = "Password length at least 8 symbols";
                    } else {
                        state.passwordError = "";
                    }
                    break;
            }
        }
    }
})

export const { login, logout, handleLoginError, handlePasswordError } = userSlice.actions;

export default userSlice.reducer;