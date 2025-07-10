import axios from "axios";
import { Types } from "mongoose";

export type Order = {
  _id?: Types.ObjectId;
  orderName: string[];
  orderQuantity: string[];
  orderPrice: string[];
  street: string;
  city: string;
  barangay: string;
  province: string;
  total: string;
  recipientName: string;
  recipientContact: string;
  createdAt: string;
  __v?: number;
};

export async function getOrders() {
  try {
    let res = await axios.get(
      "https://tech-commerce-expressserver.onrender.com/api/account/getOrders"
    );
    return res.data.orders;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("Status: ", error.response?.status);
      console.log("Message: ", error.response?.data);
    }
  }
}

export async function getUserOrders() {
  try {
    const res = await axios.get(
      "https://tech-commerce-expressserver.onrender.com/api/account/getUserOrder",
      {
        withCredentials: true,
      }
    );

    return {
      success: true,
      orders: res.data.orders,
    };
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.log("Status: ", error.response?.status);
      console.log("Message: ", error.response?.data?.error || error.message);
      return {
        success: false,
        error: error.response?.data?.error || "Failed to fetch orders",
      };
    }
    return {
      success: false,
      error: "Unexpected error occurred",
    };
  }
}
