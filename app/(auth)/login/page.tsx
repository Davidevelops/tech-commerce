"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { logIn } from "@/lib/authentication";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [state, formAction] = useActionState(logIn, {
    success: false,
    errors: {},
  });

  useEffect(() => {
    if (state?.success && state.redirect) {
      router.push(state.redirect);
    }
  }, [state, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md space-y-8 p-8 bg-white rounded-xl shadow-sm">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back</h1>
          <p className="mt-2 text-gray-600">Sign in to your account</p>
        </div>

        <form action={formAction} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="email" className="sr-only">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Email address"
                className="px-4 py-3"
              />
              {state.errors?.email && (
                <p className="mt-1 text-sm text-red-500">
                  {state.errors.email}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="password" className="sr-only">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Password"
                className="px-4 py-3"
              />
              {state.errors?.password && (
                <p className="mt-1 text-sm text-red-500">
                  {state.errors.password}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <Button
              type="submit"
              className="w-full py-3 px-4 bg-black hover:bg-gray-800 transition-colors"
            >
              Sign in
            </Button>

            <p className="text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="font-medium text-black hover:underline hover:text-gray-800 transition-colors"
              >
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
