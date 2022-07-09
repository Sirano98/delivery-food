import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IMenu } from "../models/IMenu";
import { IRestaurant } from "../models/IRstaurant";

const url = process.env.REACT_APP_DB_URL;

export const deliveryApi = createApi({
    reducerPath: "deliveryApi",
    tagTypes: ["Restaurants", "Menu"],
    baseQuery: fetchBaseQuery({ baseUrl: url }),
    endpoints: build => ({
        getRestaurants: build.query<IRestaurant[], unknown>({
            query: () => "partners.json",
            providesTags: ["Restaurants"]
        }),
        getMenu: build.query<IMenu[], string>({
            query: (menu: string) => `menus/${menu}`,
            providesTags: ["Menu"]
        }),
        getAllMenus: build.query({
            query: () => "menus.json"
        })
    })
});

export const { useGetRestaurantsQuery, useGetMenuQuery, useGetAllMenusQuery } = deliveryApi;