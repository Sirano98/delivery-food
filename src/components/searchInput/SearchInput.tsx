import { FC, FormEvent, useState } from "react";
import { IRestaurant } from "../../models/IRstaurant";

interface SearchInputProps {
    restaurants: IRestaurant[] | null;
}

export const SearchInput: FC<SearchInputProps> = ({ restaurants }) => {
    const [value, setValue] = useState("");

    const search = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <form className="search" onSubmit={e => search(e)}>
            <label className="search-label">
                <button type="submit" className="search-button"></button>
                <input
                    type="text"
                    className="input input-search"
                    placeholder="Search for dishes"
                    value={value} onChange={(e) => setValue(e.target.value)} />
            </label>
        </form>
    )
}