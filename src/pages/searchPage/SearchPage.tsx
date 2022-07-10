import { FC, useEffect } from "react";
import List from "../../components/list/List";
import { Loader } from "../../components/loader/Loader";
import { MenuCard } from "../../components/menuCard/menuCard";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { useGetAllMenusQuery } from "../../services/DeliveryService";
import { clearSearch, filterData, setData } from "../../store/reducers/SearchSlice";

export const SearchPage: FC = () => {
    const { data } = useGetAllMenusQuery("");
    const dispatch = useAppDispatch();
    const { searchResult, isLoading, isError } = useAppSelector(state => state.search)

    useEffect(() => {
        dispatch(setData(data));
        dispatch(filterData());
        return () => {
            dispatch(clearSearch())
        }
    }, [data, dispatch])

    return (
        <div className="container">
            <section className="menu">
                <div className="section-heading">
                    <h2 className="section-title restaurant-title">Search results</h2>
                </div>
                <div className="cards cards-menu">
                    {isLoading && <Loader />}
                    {isError && <p className="error-message">Nothing found</p>}
                    {searchResult.length ?
                        <List
                            items={searchResult}
                            renderItem={(dish) => <MenuCard dish={dish} key={dish.id} />} />
                        :
                        null
                    }
                </div>
            </section>
        </div>
    )
}