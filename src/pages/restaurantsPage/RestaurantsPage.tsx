import { FC } from "react";
import { Error } from "../../components/error/Error";
import List from "../../components/list/List";
import { Loader } from "../../components/loader/Loader";
import { RestaurantCard } from "../../components/restaurantCard/RestaurantCard";
import { SearchInput } from "../../components/searchInput/SearchInput";
import Slider from "../../components/slider/Slider";
import { useGetRestaurantsQuery } from "../../services/DeliveryService";

export const RestauransPage: FC = () => {
    const { data: restaurants, isLoading, isError } = useGetRestaurantsQuery("");

    return (
        <div className="container">
            <Slider />
            <section className="restaurants">
                <div className="section-heading">
                    <h2 className="section-title">Restaurants</h2>
                    <SearchInput />
                </div>
                <div className="cards cards-restaurants">
                    {isLoading && <Loader />}
                    {isError && <Error />}
                    {restaurants && <List
                        items={restaurants}
                        renderItem={(restaurant) => <RestaurantCard restaurant={restaurant} key={restaurant.name} />} />
                    }
                </div>
            </section>
        </div>
    )
}