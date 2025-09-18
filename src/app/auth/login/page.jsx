"use client";

import { useLoginMutation } from "@/app/redux/features/auth/authApi";
import { setUser } from "@/app/redux/features/auth/authSlice";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState("");
  const [loginUser, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    setServerError("");
    try {
      const result = await loginUser(data).unwrap();

      const token = result?.token || result?.data?.token;
      const user = result?.user || result?.data?.user;
      console.log(token, user);
      if (token && user) {
        Cookies.set("token", token, { expires: 7 });

        dispatch(
          setUser({
            id: user._id,
            name: user.name,
            role: user.role,
          })
        );

        reset();
        alert("Login successful ✅");
      } else {
        setServerError(result?.message || "Invalid response from server");
      }
    } catch (err) {
      console.error(err);
      setServerError(err?.data?.message || "Login failed. Try again!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800 text-center">
          Login
        </h2>

        {serverError && (
          <div className="mb-4 text-sm text-red-700 bg-red-100 p-3 rounded-md">
            {serverError}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Email */}
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Please enter valid email",
              },
            })}
            className={`w-full px-4 py-2 rounded-lg border ${
              errors.email ? "border-red-400" : "border-gray-200"
            } focus:outline-none focus:ring-2 focus:ring-indigo-200 mb-3`}
          />
          {errors.email && (
            <p className="text-xs text-red-600 mb-2">{errors.email.message}</p>
          )}

          {/* Password */}
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...register("password", {
                required: "Password required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className={`w-full px-4 py-2 rounded-lg border ${
                errors.password ? "border-red-400" : "border-gray-200"
              } focus:outline-none focus:ring-2 focus:ring-indigo-200 mb-1`}
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-sm px-2 py-1 rounded-md"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {errors.password && (
            <p className="text-xs text-red-600 mb-2">
              {errors.password.message}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting || isLoading}
            className="w-full mt-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-semibold shadow hover:brightness-95 disabled:opacity-60"
          >
            {isSubmitting || isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="mt-6 text-sm text-center text-gray-600">
          Are you a new user?{" "}
          <Link href={"/auth/register"} className="text-indigo-600 font-medium">
            Please create account
          </Link>
        </div>
      </div>
    </div>
  );
}
