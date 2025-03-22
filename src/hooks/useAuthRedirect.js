"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useAuthStore from "@/app/store/authStore";

const useAuthRedirect = (id) => {
  const router = useRouter();
  const { isLoggedIn, initializeAuth } = useAuthStore();
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  useEffect(() => {
    // Initialize authentication and wait for completion
    initializeAuth();
    setIsAuthChecked(true);
  }, []);

  useEffect(() => {
    if (isAuthChecked) {
      const userId = localStorage.getItem("userId");

      console.log("isLoggedIn:", isLoggedIn, "userId:", userId);

      // Redirect if not logged in or if userId mismatch
      if (!isLoggedIn || userId != id) {
        router.push("/login");
      }
    }
  }, [id, isLoggedIn, isAuthChecked, router]);
};

export default useAuthRedirect;
