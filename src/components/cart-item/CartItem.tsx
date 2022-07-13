import { FC } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { IMenuInCart } from "../../models/IMenu";
import { addToCart, decreaseCart, removeFromCart } from "../../store/reducers/CartSlice";

interface CartItemProps {
    dish: IMenuInCart
};

export const CartItem: FC<CartItemProps> = ({ dish }) => {
    const dispatch = useAppDispatch();
    const { name, quantity, totalPrice } = dish;

    const handelCartActions = (actionCreator: Function) => {
        dispatch(actionCreator(dish))
    };

    return (
        <div className="food-row">
            <span className="food-name">{name}</span>
            <strong className="food-price">{totalPrice} $</strong>
            <div className="food-counter">
                <button className="counter-button" onClick={() => handelCartActions(decreaseCart)}>-</button>
                <span className="counter">{quantity}</span>
                <button className="counter-button" onClick={() => handelCartActions(addToCart)}>+</button>
                <button className="counter-button counter-button-delete" onClick={() => handelCartActions(removeFromCart)}>
                    <span className="counter-button-delete-svg"></span>
                </button>
            </div>
        </div>
    )
}