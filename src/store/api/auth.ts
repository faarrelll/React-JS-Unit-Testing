import { BaseInterface, User } from "@/lib/interfaces";
import { baseApi } from "./api";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        body: data,
      }),
    }),
    signIn: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
      onQueryStarted: async (_args, { queryFulfilled }) => {
        try {
          const result = await queryFulfilled;
          localStorage.setItem("token", result.data.data.token);
        } catch (error) {
          console.log(error);
        }
      },
    }),
    getMe: builder.query<BaseInterface<User>, void>({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation, useGetMeQuery } = authApi;
