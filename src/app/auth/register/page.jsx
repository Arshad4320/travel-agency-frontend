"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const [serverError, setServerError] = useState("");

  const onSubmit = async (data) => {
    setServerError("");
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        setServerError(result.message || "Registration failed");
        return;
      }

      alert("User registered successfully ✅");
      reset();
    } catch (err) {
      console.error(err);
      setServerError("something went wrong,please try again!");
    }
  };

  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-lg p-4.5">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800 text-center">
          Create account
        </h2>

        {serverError && (
          <div className="mb-4 text-sm text-red-700 bg-red-100 p-3 rounded-md">
            {serverError}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Name */}
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            {...register("name", { required: "name is required" })}
            placeholder="Your full name"
            className={`w-full px-4 py-2 rounded-lg border ${
              errors.name ? "border-red-400" : "border-gray-200"
            } focus:outline-none focus:ring-2 focus:ring-indigo-200 mb-2`}
          />
          {errors.name && (
            <p className="text-xs text-red-600 mb-2">{errors.name.message}</p>
          )}

          {/* Phone */}
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="text"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{11}$/,
                message: "please enter valid phone no. ",
              },
            })}
            placeholder="01XXXXXXXXX"
            className={`w-full px-4 py-2 rounded-lg border ${
              errors.phone ? "border-red-400" : "border-gray-200"
            } focus:outline-none focus:ring-2 focus:ring-indigo-200 mb-2`}
          />
          {errors.phone && (
            <p className="text-xs text-red-600 mb-2">{errors.phone.message}</p>
          )}

          {/* Email */}
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "please enter valid email",
              },
            })}
            placeholder="you@example.com"
            className={`w-full px-4 py-2 rounded-lg border ${
              errors.email ? "border-red-400" : "border-gray-200"
            } focus:outline-none focus:ring-2 focus:ring-indigo-200 mb-2`}
          />
          {errors.email && (
            <p className="text-xs text-red-600 mb-2">{errors.email.message}</p>
          )}

          {/* Address */}
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            {...register("address")}
            placeholder="Your address"
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-200 mb-2"
          />

          {/* Role */}
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Role
          </label>
          <select
            {...register("role")}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-200 mb-2"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          {/* Password */}
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            {...register("password", {
              required: "password is required",
              minLength: {
                value: 6,
                message: "minimum 6 creacters",
              },
            })}
            placeholder="******"
            className={`w-full px-4 py-2 rounded-lg border ${
              errors.password ? "border-red-400" : "border-gray-200"
            } focus:outline-none focus:ring-2 focus:ring-indigo-200 mb-2`}
          />
          {errors.password && (
            <p className="text-xs text-red-600 mb-2">
              {errors.password.message}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 mt-4 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-semibold shadow hover:brightness-95 disabled:opacity-60"
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </form>

        <div className="mt-6 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link href={"/auth/login"} className="text-indigo-600 font-medium">
            please login
          </Link>
        </div>
      </div>
    </div>
  );
}
