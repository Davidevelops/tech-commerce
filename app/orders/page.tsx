"use client";

import { useEffect, useState } from "react";
import { getUserOrders, Order } from "@/lib/getOrders";

export default function MyOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const userOrders = async () => {
      try {
        let res = await getUserOrders();
        setOrders(res.orders);
      } catch (error) {
        console.log(error);
      }
    };
    userOrders();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Orders</h1>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="grid gap-4">
          {orders.map((order) => (
            <div
              key={order._id?.toString()}
              className="p-4 bg-white shadow rounded-lg"
            >
              <p className="font-semibold text-gray-800">
                Order ID: {order._id?.toString()}
              </p>
              <p className="text-sm text-gray-600">
                Date: {new Date(order.createdAt).toLocaleString()}
              </p>
              <p className="text-sm text-gray-600">Total: ₱{order.total}</p>

              <div className="mt-3">
                <h2 className="font-medium text-gray-700 mb-1">Items:</h2>
                <ul className="text-sm space-y-1">
                  {order.orderName.map((name, i) => (
                    <li key={i}>
                      • {name} × {order.orderQuantity[i]} — ₱
                      {order.orderPrice[i]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
