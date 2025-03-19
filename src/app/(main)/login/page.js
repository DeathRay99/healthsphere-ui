"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useAuthStore from "../../store/authStore";
import Link from "next/link";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", passwordHash: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuthStore();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:9090/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        credentials: "include", // Include session cookies
      });

      const data = await response.json();

      if (response.ok) {
        // localStorage.setItem("username", data.username);
        // localStorage.setItem("userId", data.userId);
        // localStorage.setItem("role", data.role);
        login(data);
        setFormData({ username: "", passwordHash: "" });
        alert("Login successful!");
        router.push("/");
      } else {
        setError(data.error);
      }
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-semibold text-center mb-4">Login</h2>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-2"
            required
          />
          <input
            type="password"
            name="passwordHash"
            placeholder="Password"
            value={formData.passwordHash}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-2"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          <p className="text-center mt-0.5"> <Link href="/signup" className=" text-blue-500 text-sm underline  ">
          Dont have an Account? Sign Up </Link></p>
           
        </form>
      </div>
    </div>
  );
};

export default Login;
