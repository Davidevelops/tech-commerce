"use client";

import { useEffect, useState } from "react";
import { getUserOrders, Order } from "@/lib/getOrders";

export default function MyOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userOrders = async () => {
      try {
        let res = await getUserOrders();
        setOrders(res.orders);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    userOrders();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
        My Orders
      </h1>

      {isLoading ? (
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="animate-pulse bg-gray-100 rounded-xl p-4 h-32"
            ></div>
          ))}
        </div>
      ) : orders.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            You haven't placed any orders yet
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order._id?.toString()}
              className="border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-3">
                <span className="text-sm bg-purple-500 text-white px-3 py-1 rounded-full">
                  {new Date(order.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>

              <div className="mb-4">
                <ul className="divide-y divide-gray-100">
                  {order.orderName.map((name, i) => (
                    <li key={i} className="py-3 flex justify-between">
                      <div>
                        <span className="font-medium text-gray-800">
                          {name}
                        </span>
                        <span className="text-gray-500 text-sm ml-2">
                          × {order.orderQuantity[i]}
                        </span>
                      </div>
                      <span className="text-gray-700">
                        ₱{order.orderPrice[i]}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                <p className="text-sm text-gray-500">
                  {order.orderName.length} item
                  {order.orderName.length !== 1 ? "s" : ""}
                </p>
                <p className="font-medium text-lg text-gray-900">
                  Total: ₱{order.total}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
