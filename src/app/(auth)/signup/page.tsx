"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";

type SignUpForm = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: "JOB_SEEKER" | "RECRUITER";
};

export default function SignUpPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<SignUpForm>({
    defaultValues: {
      role: "JOB_SEEKER",
    },
  });

  const password = watch("password");

  const onSubmit = async (data: SignUpForm) => {
    console.log(data);
    const { error } = await authClient.signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,

      // additional field
      role: data.role,

      callbackURL: "/",
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Account created successfully.");
    router.push("/");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 dark:bg-gray-900">
      <div className="w-full max-w-md rounded-xl bg-white p-4 shadow-lg dark:bg-gray-200">
        <h1 className="mb-2 text-center text-3xl font-bold dark:text-black">
          Create Account
        </h1>

        <p className="mb-4 text-center text-gray-500 dark:text-black">
          Sign up to continue
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          <div>
            <label className="mb-2 block dark:text-black">Name</label>

            <input
              className="w-full rounded-lg border p-3 dark:text-black"
              placeholder="John Doe"
              {...register("name", {
                required: "Name is required",
              })}
            />

            <p className="text-sm text-red-500">{errors.name?.message}</p>
          </div>

          <div>
            <label className="mb-2 block dark:text-black">Email</label>

            <input
              type="email"
              className="w-full rounded-lg border p-3 dark:text-black"
              placeholder="john@gmail.com"
              {...register("email", {
                required: "Email is required",
              })}
            />

            <p className="text-sm text-red-500">{errors.email?.message}</p>
          </div>

          <div>
            <label className="mb-2 block dark:text-black">Role</label>

            <select
              className="w-full rounded-lg border p-3 dark:text-black"
              {...register("role")}
            >
              <option value="seeker" className="dark:text-black">
                Job Seeker
              </option>

              <option value="recruiter" className="dark:text-black">
                Recruiter
              </option>
            </select>
          </div>

          <div>
            <label className="mb-2 block dark:text-black">Password</label>

            <input
              type="password"
              className="w-full rounded-lg border p-3 dark:text-black"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Minimum 8 characters",
                },
              })}
            />

            <p className="text-sm text-red-500">{errors.password?.message}</p>
          </div>

          <div>
            <label className="mb-2 block dark:text-black">
              Confirm Password
            </label>

            <input
              type="password"
              className="w-full rounded-lg border p-3 dark:text-black"
              {...register("confirmPassword", {
                required: "Confirm password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />

            <p className="text-sm text-red-500">
              {errors.confirmPassword?.message}
            </p>
          </div>

          <button
            disabled={isSubmitting}
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white dark:text-black"
          >
            {isSubmitting ? "Creating..." : "Sign Up"}
          </button>
        </form>

        <p className="mt-6 text-center dark:text-black">
          Already have an account?{" "}
          <Link href="/signin" className="text-blue-600 font-semibold">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
