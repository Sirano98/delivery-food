import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IMenu } from "../models/IMenu";
import { IRestaurant } from "../models/IRstaurant";

export const deliveryApi = createApi({
    reducerPath: "deliveryApi",
    tagTypes: ["Restaurants", "Menu"],
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/db/" }),
    endpoints: build => ({
        getRestaurants: build.query<IRestaurant[], unknown>({
            query: () => "partners.json",
            providesTags: ["Restaurants"]
        }),
        getMenu: build.query<IMenu[], string>({
            query: (menu: string) => menu,
            providesTags: ["Menu"]
        })
    })
});

export const { useGetRestaurantsQuery, useGetMenuQuery } = deliveryApi;