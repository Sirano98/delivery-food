import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { deliveryApi } from '../services/DeliveryService';
import userSlice from './reducers/UserSlice';
import cartSlice from './reducers/CartSlice';
import indexSlice from './reducers/IndexSlice';

export const store = configureStore({
    reducer: {
        [deliveryApi.reducerPath]: deliveryApi.reducer,
        index: indexSlice,
        user: userSlice,
        cart: cartSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(deliveryApi.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
