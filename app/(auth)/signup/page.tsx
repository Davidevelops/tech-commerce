"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState } from "react";
import { signUp } from "@/lib/authentication";

export default function SignUp() {
  const [state, formAction] = useActionState(signUp, {
    success: false,
    errors: {},
  });

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Create account</h1>
          <p className="mt-2 text-gray-600">Get started with your journey</p>
        </div>

        <form
          action={formAction}
          className="bg-white p-8 rounded-xl shadow-sm space-y-4"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label
                htmlFor="firstName"
                className="text-sm font-medium text-gray-700"
              >
                First name
              </Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                autoComplete="given-name"
                placeholder="John"
                className="px-3 py-2"
              />
              {state.errors?.firstName && (
                <p className="text-xs text-red-500 mt-1">
                  {state.errors.firstName}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="lastName"
                className="text-sm font-medium text-gray-700"
              >
                Last name
              </Label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                autoComplete="family-name"
                placeholder="Doe"
                className="px-3 py-2"
              />
              {state.errors?.lastName && (
                <p className="text-xs text-red-500 mt-1">
                  {state.errors.lastName}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="middleName"
              className="text-sm font-medium text-gray-700"
            >
              Middle name
            </Label>
            <Input
              id="middleName"
              name="middleName"
              type="text"
              placeholder="Michael"
              className="px-3 py-2"
            />
            {state.errors?.middleName && (
              <p className="text-xs text-red-500 mt-1">
                {state.errors.middleName}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="john@example.com"
              className="px-3 py-2"
            />
            {state.errors?.email && (
              <p className="text-xs text-red-500 mt-1">{state.errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              placeholder="••••••••"
              className="px-3 py-2"
            />
            {state.errors?.password && (
              <p className="text-xs text-red-500 mt-1">
                {state.errors.password}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full py-2.5 mt-2 bg-black hover:bg-gray-800 transition-colors"
          >
            Create account
          </Button>
        </form>
      </div>
    </div>
  );
}
