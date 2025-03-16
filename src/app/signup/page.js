"use client"

import { useState } from "react";

const Register = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        passwordHash: "",
    });
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            const response = await fetch("http://localhost:9090/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.text();

            if (response.ok) {
                setMessage("Registration successful! Please log in.");
                setFormData({
                    username: "",
                    email: "",
                    passwordHash: "",
                });
            } else {
                setMessage(data);
            }
        } catch (err) {
            setMessage("Something went wrong!");
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
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
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
                        className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition"
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
