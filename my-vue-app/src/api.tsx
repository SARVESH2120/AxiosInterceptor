import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";;
import axios from "axios";
import { AxiosInstance } from "axios";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api", fetchFn: axiosInstance }),
  endpoints: (builder) => ({
    getUsers: builder.query<any, void>({
      query: () => "/users",
    }),
  }),
});

export const { useGetUsersQuery } = api;

export default api;
