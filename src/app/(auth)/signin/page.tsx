"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";

type SignInForm = {
  email: string;
  password: string;
};

export default function SignInPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInForm>();

  const onSubmit = async (data: SignInForm) => {
    const { error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      callbackURL: "/",
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Login successful!");
    router.push("/");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4 dark:bg-gray-900">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg dark:bg-gray-200">
        <h1 className="mb-2 text-center text-3xl font-bold dark:text-black">
          Welcome Back
        </h1>

        <p className="mb-8 text-center text-gray-500 dark:text-black">
          Sign in to your account
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email */}
          <div>
            <label className="mb-2 block font-medium dark:text-black">
              Email
            </label>

            <input
              type="email"
              placeholder="john@gmail.com"
              className="w-full rounded-lg border p-3 outline-none focus:border-blue-500 dark:text-black"
              {...register("email", {
                required: "Email is required",
              })}
            />

            <p className="mt-1 text-sm text-red-500">{errors.email?.message}</p>
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block font-medium dark:text-black">
              Password
            </label>

            <input
              type="password"
              placeholder="********"
              className="w-full rounded-lg border p-3 outline-none focus:border-blue-500 dark:text-black"
              {...register("password", {
                required: "Password is required",
              })}
            />

            <p className="mt-1 text-sm text-red-500">
              {errors.password?.message}
            </p>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-60"
          >
            {isSubmitting ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600 dark:text-black">
          Do not have an account?{" "}
          <Link
            href="/signup"
            className="font-semibold text-blue-600 hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
