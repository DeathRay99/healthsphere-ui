"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useAuthStore from "@/app/store/authStore";

const useAdminRedirect = () => {
  const router = useRouter();
  const { isLoggedIn, initializeAuth } = useAuthStore();
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  useEffect(() => {
    // Initialize authentication and wait for completion
    initializeAuth();
    setIsAuthChecked(true);
  }, []);

  const role = localStorage.getItem("role");

  useEffect(() => {
    if (isAuthChecked) {

      // Redirect if not logged in or if userId mismatch
      if (!isLoggedIn) {
        router.push("/login");
        return;
      }

      if (role!=="ADMIN") {
        alert("Access denied, you are not an admin !!!!");
        router.push("/");
        return;
      }
      
    }
  }, [role, isLoggedIn, isAuthChecked, router]);
};

export default useAdminRedirect;
