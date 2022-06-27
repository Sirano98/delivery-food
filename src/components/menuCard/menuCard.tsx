import { FC } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { IMenu } from "../../models/IMenu";
import { addToCart } from "../../store/reducers/CartSlice";

interface MenuCardProps {
    dish: IMenu
}

export const MenuCard: FC<MenuCardProps> = ({ dish }) => {
    const dispatch = useAppDispatch();
    const { description, image, name, price } = dish;

    return (
        <div className="card">
            <img src={image} alt="dish" className="card-image" />
            <div className="card-text">
                <div className="card-heading">
                    <h3 className="card-title card-title-reg">{name}</h3>
                </div>
                <div className="card-info">
                    <div className="ingredients">
                        {description}
                    </div>
                </div>

                <div className="card-buttons">
                    <button
                        className="button button-primary button-add-cart"
                        onClick={() => dispatch(addToCart(dish))}>
                        <span className="button-card-text">Add to cart</span>
                        <span className="button-cart-svg"></span>
                    </button>
                    <strong className="card-price-bold">{price} $</strong>
                </div>
            </div>
        </div>
    )
}