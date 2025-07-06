import { persist } from "zustand/middleware";
import { create } from "zustand";

export type cartItem = {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
};

export type cartState = {
  cart: cartItem[];
  addToCart: (item: Omit<cartItem, "quantity">) => void;
  removeFromCart: (_id: string) => void;
  clearCart: () => void;
  incrementItem: (_id: string) => void;
  decrementItem: (_id: string) => void;
};

export const useCartStore = create<cartState>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (item) => {
        const existing = get().cart.find((i) => i._id === item._id);
        if (existing) {
          set({
            cart: get().cart.map((i) =>
              i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          });
        } else {
          set({ cart: [...get().cart, { ...item, quantity: 1 }] });
        }
      },
      removeFromCart: (_id) => {
        set({ cart: get().cart.filter((i) => i._id !== _id) });
      },
      clearCart: () => {
        set({ cart: [] });
      },
      incrementItem: (_id) => {
        set({
          cart: get().cart.map((i) =>
            i._id === _id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        });
      },
      decrementItem: (_id) => {
        set({
          cart: get().cart.map((i) =>
            i._id === _id ? { ...i, quantity: i.quantity - 1 } : i
          ),
        });
      },
    }),
    { name: "cart-storage" }
  )
);
