import { useMutation } from "@tanstack/react-query";
import { postApiAuthLoginMutation } from "../sdk/@tanstack/react-query.gen";

export const useLogin = () => {

  return useMutation({
    ...postApiAuthLoginMutation(),

    onSuccess: (response: any) => {
      // 1. Store tokens
      localStorage.setItem("accessToken", response.accessToken);
      localStorage.setItem("refreshToken", response.refreshToken);
      localStorage.setItem("userRole", response.userRole);
      localStorage.setItem("userId", String(response.userId));
    },
    onError: (error: any) => {
      console.error("Login failed", error.response?.data);
    },
  });
};
