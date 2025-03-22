"use client";
import UserProfile from "@/components/UserProfile";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import useAuthStore from "@/app/store/authStore";
import useAuthRedirect from "@/hooks/useAuthRedirect";

function Profile() {
  const router = useRouter();
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const { isLoggedIn, initializeAuth } = useAuthStore();

  useAuthRedirect(id);

  useEffect(() => {
    const fetchUser = async () => {
      if (isLoggedIn && localStorage.getItem("userId") == id) {
        try {
          const response = await fetch(`http://localhost:9090/api/users/${id}`);
          const data = await response.json();

          if (response.ok) {
            console.log(data);
            setUser(data);
          } else {
            alert(data.err);
          }
        } catch (e) {
          console.log("something went wrong", e.message);
        }
      }
    };
    fetchUser();
  }, [id,isLoggedIn]);

  return user ? (
    <UserProfile userData={user} />
  ) : (
    <div className="flex justify-center p-12">User not found</div>
  );
}

export default Profile;
