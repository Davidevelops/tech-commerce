"use server";
import axios from "axios";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
export const signUp = async (_: any, formData: FormData) => {
  const firstName = formData.get("firstName")?.toString() || "";
  const lastName = formData.get("lastName")?.toString() || "";
  const middleName = formData.get("middleName")?.toString() || "";
  const email = formData.get("email")?.toString() || "";
  const password = formData.get("password")?.toString() || "";
  try {
    const res = await axios.post(
      "https://tech-commerce-expressserver.onrender.com/api/account/signUp",
      {
        firstName,
        lastName,
        middleName,
        email,
        password,
      }
    );

    //payload
    const userId = res.data.user._id;
    const token = jwt.sign(
      {
        id: userId,
        role: "user",
        firstName: res.data.user.firstName,
        lastName: res.data.user.lastName,
      },
      process.env.SECRET_KEY as string
    );

    const cookie = await cookies();
    cookie.set("jwt", token, {
      httpOnly: true,
      maxAge: 3 * 24 * 60 * 60,
      sameSite: "lax",
    });

    return { success: true, errors: {} };
  } catch (error: any) {
    if (error.response?.data?.errors) {
      return {
        success: false,
        errors: error.response?.data?.errors,
      };
    }
  }
  return {
    success: false,
    errors: "An error occured. Try again later.",
  };
};

export const logIn = async (_: any, formData: FormData) => {
  const email = formData.get("email")?.toString() || "";
  const password = formData.get("password")?.toString() || "";
  try {
    const res = await axios.post(
      "https://tech-commerce-expressserver.onrender.com/api/account/logIn",
      {
        email,
        password,
      }
    );

    //payload
    const user = res.data.account;
    const token = jwt.sign(
      {
        id: user._id,
        role: "user",
        firstName: user.firstName,
        lastName: user.lastName,
      },
      process.env.SECRET_KEY as string
    );

    const cookie = await cookies();
    cookie.set("jwt", token, {
      httpOnly: true,
      maxAge: 3 * 24 * 60 * 60,
      sameSite: "lax",
    });

    return { success: true, errors: {}, redirect: "/cart" };
  } catch (error: any) {
    if (error.response?.data?.errors) {
      return {
        success: false,
        errors: error.response?.data?.errors,
      };
    }
    return {
      success: false,
      errors: "Something went wrong. Try Again.",
    };
  }
};
export const logOut = async () => {
  const cookie = await cookies();
  cookie.set("jwt", "", {
    httpOnly: true,
    maxAge: 0,
    sameSite: "lax",
  });

  return { success: true, errorrs: {} };
};
