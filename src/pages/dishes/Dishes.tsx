import { FC } from "react";
import List from "../../components/list/List";
import { Loader } from "../../components/loader/Loader";
import { MenuCard } from "../../components/menuCard/menuCard";
import { useAppSelector } from "../../hooks/hooks";
import { useGetMenuQuery } from "../../services/DeliveryService";

export const Dishes: FC = () => {
    const displayedRestaurant = useAppSelector(state => state.index.displayedRestaurant);
    const { data: menu, isLoading } = useGetMenuQuery(displayedRestaurant?.products || "");

    return (
        <div className="container">
            <section className="menu">
                <div className="section-heading">
                    <h2 className="section-title restaurant-title">{displayedRestaurant?.name}</h2>
                    <div className="card-info">
                        <div className="rating">
                            {displayedRestaurant?.stars}
                        </div>
                        <div className="price">from {displayedRestaurant?.price} $</div>
                        <div className="category">{displayedRestaurant?.kitchen}</div>
                    </div>
                </div>
                <div className="cards cards-menu">
                    {isLoading && <Loader />}
                    {menu && <List
                        items={menu}
                        renderItem={(dish) => <MenuCard dish={dish} key={dish.id} />} />}
                </div>
            </section>
        </div>
    )
}