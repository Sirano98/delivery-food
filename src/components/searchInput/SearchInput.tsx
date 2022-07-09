import { FC, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hooks";
import { setSearchQuery } from "../../store/reducers/SearchSlice";

export const SearchInput: FC = () => {
    const [search, setSearch] = useState("");
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(setSearchQuery(search));
        navigate("search-results");
    }

    return (
        <form
            className="search"
            onSubmit={e => handleSearch(e)}
            autoComplete="off">

            <label className="search-label">
                <button type="submit" className="search-button"></button>
                <input
                    type="search"
                    name="search"
                    className="input input-search"
                    placeholder="Search for dishes"
                    value={search} onChange={(e) => setSearch(e.target.value)} />
            </label>

        </form>
    )
}