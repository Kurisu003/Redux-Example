import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { album } from "../Types/types";

// createAPI has a baseUrl (address of Server) and endpoints (i.e. /users /todos etc.)
export const apiSlice = createApi({
    reducerPath: "albums",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com/",
    }),
    endpoints(builder) {
        return {
            // gets an album array as first parameter and either a number or nothing as second
            // number could be used to specify things like amount of albums to get 
            fetchAlbums: builder.query<album[], number | void>({
                query() {
                    return `/albums`;
                },
            }),
        };
    },
});

export const { useFetchAlbumsQuery } = apiSlice;