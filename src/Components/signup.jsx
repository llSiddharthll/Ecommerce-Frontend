import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaImage } from "react-icons/fa";
import axios from "axios";

const Signup = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        re_password: "",
        first_name: "",
        last_name: "",
        profile_picture: null,
    });

    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const signupData = new FormData();
        signupData.append("username", formData.username);
        signupData.append("email", formData.email);
        signupData.append("password", formData.password);
        signupData.append("re_password", formData.re_password);
        signupData.append("first_name", formData.firstName);
        signupData.append("last_name", formData.lastName);
        if (formData.profilePicture) {
            signupData.append("profile_picture", formData.profilePicture);
        }

        axios
            .post("http://127.0.0.1:8000/auth/users/", signupData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((response) => {
                console.log(response);
                window.location.href = "/login";
            })
            .catch((error) => {
                // Extract errors and update the errors state
                if (error.response && error.response.data) {
                    const errorMessages = [];
                    for (const key in error.response.data) {
                        if (Array.isArray(error.response.data[key])) {
                            errorMessages.push(...error.response.data[key]);
                        } else {
                            errorMessages.push(error.response.data[key]);
                        }
                    }
                    setErrors(errorMessages);
                } else {
                    setErrors(["An unexpected error occurred. Please try again."]);
                }
            });
    };

    return (
        <div className="flex my-10 md:my-0 md:h-[93vh] bg-gray-100">
            {/* Left Side - Form */}
            <div className="flex flex-col justify-center items-center w-full lg:w-1/2 bg-white px-6">
                <div className="w-full px-10">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-blue-600">Create Account</h1>
                        <p className="text-gray-500 mt-2">Sign up for a new account</p>
                    </div>

                    {/* Render errors if they exist */}
                    {errors.length > 0 && (
                        <div className="error-messages">
                            <ul className="flex flex-col gap-2 mb-4">
                                {errors.map((error, index) => (
                                    <li key={index} className="text-red-500 font-semibold error-text">
                                        *{error}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Signup Form */}
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="flex flex-col md:flex-row gap-4 w-full">
                            {/* Username */}
                            <div className="relative w-full">
                                <label className="block text-gray-700 mb-2" htmlFor="username">
                                    Username
                                </label>
                                <div className="flex items-center border rounded-lg overflow-hidden">
                                    <div className="px-4 py-2 bg-gray-100">
                                        <FaUser className="text-gray-500" />
                                    </div>
                                    <input
                                        type="text"
                                        id="username"
                                        placeholder="Enter your username"
                                        value={formData.username}
                                        onChange={(e) =>
                                            setFormData({ ...formData, username: e.target.value })
                                        }
                                        className="w-full px-4 py-2 focus:outline-none rounded-r-lg focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="relative w-full">
                                <label className="block text-gray-700 mb-2" htmlFor="email">
                                    Email
                                </label>
                                <div className="flex items-center border rounded-lg overflow-hidden">
                                    <div className="px-4 py-2 bg-gray-100">
                                        <FaEnvelope className="text-gray-500" />
                                    </div>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({ ...formData, email: e.target.value })
                                        }
                                        className="w-full px-4 py-2 focus:outline-none rounded-r-lg focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 w-full">
                            {/* Password */}
                            <div className="relative w-full">
                                <label className="block text-gray-700 mb-2" htmlFor="password">
                                    Password
                                </label>
                                <div className="flex items-center border rounded-lg overflow-hidden">
                                    <div className="px-4 py-2 bg-gray-100">
                                        <FaLock className="text-gray-500" />
                                    </div>
                                    <input
                                        type="password"
                                        id="password"
                                        placeholder="Enter your password"
                                        value={formData.password}
                                        onChange={(e) =>
                                            setFormData({ ...formData, password: e.target.value })
                                        }
                                        className="w-full px-4 py-2 focus:outline-none rounded-r-lg focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                            </div>
                            {/* Confirm Password */}
                            <div className="relative w-full">
                                <label className="block text-gray-700 mb-2" htmlFor="re-password">
                                    Confirm Password
                                </label>
                                <div className="flex items-center border rounded-lg overflow-hidden">
                                    <div className="px-4 py-2 bg-gray-100">
                                        <FaLock className="text-gray-500" />
                                    </div>
                                    <input
                                        type="password"
                                        id="re_password"
                                        placeholder="Enter your password"
                                        value={formData.re_password}
                                        onChange={(e) =>
                                            setFormData({ ...formData, re_password: e.target.value })
                                        }
                                        className="w-full px-4 py-2 focus:outline-none rounded-r-lg focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 w-full">
                            {/* First Name */}
                            <div className="relative w-full">
                                <label className="block text-gray-700 mb-2" htmlFor="firstName">
                                    First Name
                                </label>
                                <div className="flex items-center border rounded-lg overflow-hidden">
                                    <div className="px-4 py-2 bg-gray-100">
                                        <FaUser className="text-gray-500" />
                                    </div>
                                    <input
                                        type="text"
                                        id="firstName"
                                        placeholder="Enter your first name"
                                        value={formData.firstName}
                                        onChange={(e) =>
                                            setFormData({ ...formData, firstName: e.target.value })
                                        }
                                        className="w-full px-4 py-2 focus:outline-none rounded-r-lg focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                            </div>


                            {/* Last Name */}
                            <div className="relative w-full">
                                <label className="block text-gray-700 mb-2" htmlFor="lastName">
                                    Last Name
                                </label>
                                <div className="flex items-center border rounded-lg overflow-hidden">
                                    <div className="px-4 py-2 bg-gray-100">
                                        <FaUser className="text-gray-500" />
                                    </div>
                                    <input
                                        type="text"
                                        id="lastName"
                                        placeholder="Enter your last name"
                                        value={formData.lastName}
                                        onChange={(e) =>
                                            setFormData({ ...formData, lastName: e.target.value })
                                        }
                                        className="w-full px-4 py-2 focus:outline-none rounded-r-lg focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Profile Picture */}
                        <div className="relative w-full">
                            <label className="block text-gray-700 mb-2" htmlFor="profilePicture">
                                Profile Picture
                            </label>
                            <div className="flex items-center border rounded-lg overflow-hidden">
                                <div className="px-4 py-2 bg-gray-100">
                                    <FaImage className="text-gray-500" />
                                </div>
                                <input
                                    type="file"
                                    id="profilePicture"
                                    accept="image/*"
                                    onChange={(e) =>
                                        setFormData({ ...formData, profilePicture: e.target.files[0] })
                                    }
                                    className="w-full border border-[#00000085] px-4 focus:outline-none rounded-r-lg focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 mt-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Sign Up
                        </button>
                    </form>

                    {/* Bottom Section */}
                    <div className="text-center mt-6">
                        <p className="text-sm text-gray-600">
                            Already have an account?{" "}
                            <a href="/login" className="text-blue-500 hover:text-blue-700">
                                Log in
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Side - Illustration */}
            <div className="hidden lg:flex items-center justify-center w-1/2 bg-blue-600">
                <img src="login.png" alt="Illustration" className="w-3/4 h-auto" />
            </div>
        </div>
    );
};

export default Signup;
