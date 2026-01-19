import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { postApiAuthLogoutMutation } from "../sdk/@tanstack/react-query.gen";

export const useLogout = () => {
  const navigate = useNavigate();

  return useMutation({
    ...postApiAuthLogoutMutation(),

    onSuccess: () => {
      // Clear auth data
      localStorage.clear();

      // Redirect to login
      navigate("/login", { replace: true });
    },

    onError: (error: any) => {
      console.error("Logout failed", error);
      // Still logout on frontend (failsafe)
      localStorage.clear();
      navigate("/login", { replace: true });
    },
  });
};
