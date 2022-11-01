import { apiSlice } from "../../app/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: { ...credentials },
      }),
    }),

    register: builder.mutation({
      query: (credentials) => ({
        url: "/auth/register",
        method: "POST",
        body: { ...credentials },
      }),
    }),

    verifyEmail: builder.mutation({
      query: (credentials) => ({
        url: "/auth/verify-email",
        method: "POST",
        body: { ...credentials },
      }),
    }),

    forgotPassword: builder.mutation({
      query: (credentials) => ({
        url: "/auth/forgot-password",
        method: "POST",
        body: { ...credentials },
      }),
    }),

    resetPassword: builder.mutation({
      query: (credentials) => ({
        url: "/auth/reset-password",
        method: "POST",
        body: { ...credentials },
      }),
    }),

    passwordResetConfirm: builder.mutation({
      query: (credentials) => ({
        url: "/auth/password-reset-confirm",
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useVerifyEmailMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  usePasswordResetConfirmMutation,
} = authApiSlice;
