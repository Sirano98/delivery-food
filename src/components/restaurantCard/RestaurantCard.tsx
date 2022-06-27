import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hooks";
import { IRestaurant } from "../../models/IRstaurant";
import { displayMenu } from "../../store/reducers/IndexSlice";

interface RestaurantCardProps {
    restaurant: IRestaurant
}

export const RestaurantCard: FC<RestaurantCardProps> = ({ restaurant }) => {
    const { image, kitchen, name, price, stars, time_of_delivery } = restaurant;
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleDisplayMenu = (restaurant: IRestaurant) => {
        navigate("menu");
        dispatch(displayMenu(restaurant))
    }

    return (
        <div className="card card-restaurant" onClick={() => handleDisplayMenu(restaurant)}>
            <img src={image} alt="restaurant" className="card-image" />
            <div className="card-text">
                <div className="card-heading">
                    <h3 className="card-title">{name}</h3>
                    <span className="card-tag tag">{time_of_delivery} min</span>
                </div>
                <div className="card-info">
                    <div className="rating">
                        {stars}
                    </div>
                    <div className="price">{price} $</div>
                    <div className="category">{kitchen}</div>
                </div>
            </div>
        </div>
    )
}