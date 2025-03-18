"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation';
import useAuthStore from "../store/authStore";

const Register = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        passwordHash: "",
        confirmPassword: "",
    });
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const router = useRouter();

    const { login } = useAuthStore();

    const validateForm = () => {
        let newErrors = {};

        if (formData.username.length < 3) {
            newErrors.username = "Username must be at least 3 characters long.";
        }

        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid email format.";
        }

        if (formData.passwordHash.length < 8) {
            newErrors.passwordHash = "Password must be at least 8 characters.";
        }

        if (formData.passwordHash !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");

        if (!validateForm()) return;

        setLoading(true);

        try {
            const response = await fetch("http://localhost:9090/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: formData.username,
                    email: formData.email,
                    passwordHash: formData.passwordHash,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                login(data);
                alert("Registration successful! Please complete your profile.");
                setFormData({ username: "", email: "", passwordHash: "", confirmPassword: "" });
                router.push('/signup/onboarding');
            } else {
                setMessage(data.error);
            }
        } catch (err) {
            console.log(err);
            setMessage("Something went wrong! ", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
                <h2 className="text-xl font-semibold text-center mb-4">Register</h2>
                {message && <p className="text-red-500 text-sm text-center">{message}</p>}
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
                    {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border rounded mb-2"
                        required
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                    <input
                        type="password"
                        name="passwordHash"
                        placeholder="Password"
                        value={formData.passwordHash}
                        onChange={handleChange}
                        className="w-full p-2 border rounded mb-2"
                        required
                    />
                    {errors.passwordHash && <p className="text-red-500 text-sm">{errors.passwordHash}</p>}

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full p-2 border rounded mb-2"
                        required
                    />
                    {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}

                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition hover:cursor-pointer"
                        disabled={loading}
                    >
                        {loading ? "Registering..." : "Register"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
