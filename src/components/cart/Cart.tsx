import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { calcTotalPrice, clearCart } from "../../store/reducers/CartSlice";
import { CartItem } from "../cart-item/CartItem";
import List from "../list/List";

export const Cart: FC = () => {
    const { cartItems, cartTotalPrice } = useAppSelector(state => state.cart);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(calcTotalPrice())
    }, [cartItems, dispatch])

    return (
        <div className="modal modal-cart" onClick={() => navigate(-1)}>
            <div className="modal-dialog" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h3 className="modal-title">Cart</h3>
                    <button className="close" onClick={() => navigate(-1)}>&times;</button>
                </div>

                <div className="modal-body">
                    {cartItems.length ? <List
                        items={cartItems}
                        renderItem={(dish) => <CartItem dish={dish} key={dish.id} />} />
                        :
                        <p>The cart is empty</p>}
                </div>

                <div className="modal-footer">
                    <span className="modal-pricetag">{cartTotalPrice} $</span>
                    <div className="footer-buttons">
                        <button className="button button-primary">Checkout</button>
                        <button className="button clear-cart" onClick={() => dispatch(clearCart())}>Clear all</button>
                    </div>
                </div>

            </div>

        </div>
    )
}