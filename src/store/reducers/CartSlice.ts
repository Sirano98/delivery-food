import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMenu, IMenuInCart } from "../../models/IMenu";

interface CartSate {
    cartItems: IMenuInCart[];
    cartTotalPrice: number
}

const initialState: CartSate = {
    cartItems: [],
    cartTotalPrice: 0
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<IMenu>) {
            const itemIndex = findItemIndex(state, action.payload.id);

            if (itemIndex >= 0) {
                state.cartItems[itemIndex].quantity += 1;
                state.cartItems[itemIndex].totalPrice += state.cartItems[itemIndex].price;
            } else {
                const newItem = { ...action.payload, quantity: 1, totalPrice: action.payload.price };
                state.cartItems.push(newItem);
            }
        },
        removeFromCart(state, action: PayloadAction<IMenu>) {
            state.cartItems = filterItems(state, action.payload.id);
        },
        decreaseCart(state, action: PayloadAction<IMenu>) {
            const itemIndex = findItemIndex(state, action.payload.id);

            if (state.cartItems[itemIndex].quantity > 1) {
                state.cartItems[itemIndex].quantity -= 1;
                state.cartItems[itemIndex].totalPrice -= action.payload.price;
            } else {
                state.cartItems = filterItems(state, action.payload.id);
            }
        },
        clearCart(state) {
            state.cartItems = [];
        },
        calcTotalPrice(state) {
            state.cartTotalPrice = state.cartItems.reduce((cartTotal, { totalPrice }) => {
                return cartTotal += totalPrice;
            }, 0)
        }
    }
});

const findItemIndex = (state: CartSate, id: string): number => {
    return state.cartItems.findIndex(
        (item) => item.id === id
    )
};

const filterItems = (state: CartSate, id: string): IMenuInCart[] => {
    return state.cartItems.filter((item) => item.id !== id)
};

export const { addToCart, removeFromCart, decreaseCart, clearCart, calcTotalPrice } = cartSlice.actions;

export default cartSlice.reducer;