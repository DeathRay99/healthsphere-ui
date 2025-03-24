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

  const role = localStorage.getItem("role");

  useEffect(() => {
    if (isAuthChecked) {

      if (!isLoggedIn) {
        alert("please login to view this resource....");
        router.push("/login");
        return;
      }

      if (!id) return;

      const userId = localStorage.getItem("userId");

      if (role==="ADMIN") {
        alert("Access denied, redirecting to admin panel !!!!");
        router.push("/adminView");
        return;
      }
      if (userId != id) {
        alert("not authorized to view this resource, redirecting to home page....");
        router.push("/");
        return;
      }
      
    }
  }, [id, isLoggedIn, isAuthChecked, router, role]);
};

export default useAuthRedirect;
