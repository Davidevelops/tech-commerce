"use client";
import { useCartStore } from "@/lib/cartStore";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useActionState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import { submitOrder } from "@/lib/order";
import { toast } from "sonner";

export default function Cart() {
  const cart = useCartStore((state) => state.cart);
  const increaseQuantity = useCartStore((state) => state.incrementItem);
  const decreaseQuantity = useCartStore((state) => state.decrementItem);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const [state, formAction] = useActionState(submitOrder, undefined);
  const router = useRouter();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  useEffect(() => {
    if (state) {
      toast.success("Order placed successfully.", {
        style: {
          backgroundColor: "#6F2DBD",
          color: "white",
        },
      });

      setTimeout(() => {
        router.push("/");
      }, 1000);
      setTimeout(() => {
        clearCart();
      }, 2000);
    }
  }, [state]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-xl md:text-2xl font-bold">Your Shopping Cart</h1>
        {cart.length > 0 && (
          <Button
            variant="outline"
            onClick={clearCart}
            size="sm"
            className="text-xs md:text-sm"
          >
            Clear All
          </Button>
        )}
      </div>

      {cart.length === 0 ? (
        <div className="text-center py-12 space-y-4">
          <p className="text-muted-foreground">Your cart is empty</p>
          <Button onClick={() => router.push("/")}>Continue Shopping</Button>
        </div>
      ) : (
        <div className="flex justify-center flex-col lg:flex-row gap-6">
          <div className=" space-y-4">
            {cart.map((item) => (
              <div key={item._id} className="border rounded-lg p-4">
                <div className="flex gap-4">
                  <div className="flex items-center w-20 me-5">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={250}
                      height={300}
                      className="rounded-md object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">
                      ₱{item.price.toFixed(2)}
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() => decreaseQuantity(item._id)}
                      >
                        -
                      </Button>
                      <Input
                        className="w-12 text-center"
                        value={item.quantity}
                        readOnly
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() => increaseQuantity(item._id)}
                      >
                        +
                      </Button>
                    </div>

                    <div className="flex justify-between items-center mt-2">
                      <p className="font-medium">
                        ₱{(item.price * item.quantity).toFixed(2)}
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-500 hover:text-red-600"
                        onClick={() => removeFromCart(item._id)}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <form
            className="border p-4 rounded w-full lg:w-[40%] lg:min-w-[400px]"
            action={formAction}
          >
            <div className="space-y-4">
              <h1 className="text-xl md:text-2xl font-bold">Order Summary</h1>

              {cart.map((item, index) => (
                <div key={index}>
                  <Input
                    name="orderName"
                    value={item.name}
                    readOnly
                    type="hidden"
                  />
                  <Input
                    name="orderQuantity"
                    value={item.quantity}
                    readOnly
                    type="hidden"
                  />
                  <Input
                    name="orderPrice"
                    value={item.price}
                    readOnly
                    type="hidden"
                  />
                </div>
              ))}

              <div className="space-y-3">
                <h1 className="text-muted-foreground">Recipient Details</h1>

                <div className="grid gap-1">
                  <Label htmlFor="recipientName">Name</Label>
                  <Input
                    id="recipientName"
                    name="recipientName"
                    placeholder="e.g. Juan Dela Cruz"
                    required
                  />
                </div>

                <div className="grid gap-1">
                  <Label htmlFor="recipientContact">Contact Number</Label>
                  <Input
                    id="recipientContact"
                    name="recipientContact"
                    placeholder="e.g. 09171234567"
                    required
                    type="tel"
                  />
                </div>
              </div>

              <div className="address space-y-3">
                <h1 className="text-muted-foreground">Address</h1>

                <div className="grid gap-2">
                  <div className="grid gap-1">
                    <Label htmlFor="street">Street</Label>
                    <Input
                      id="street"
                      name="street"
                      placeholder="e.g. 123 Luna St."
                      required
                    />
                  </div>

                  <div className="grid gap-1">
                    <Label htmlFor="barangay">Barangay</Label>
                    <Input
                      id="barangay"
                      name="barangay"
                      placeholder="e.g. Barangay Malinis"
                      required
                    />
                  </div>

                  <div className="grid gap-1">
                    <Label htmlFor="city">Municipality/City</Label>
                    <Input
                      id="city"
                      name="city"
                      placeholder="e.g. Quezon City"
                      required
                    />
                  </div>

                  <div className="grid gap-1">
                    <Label htmlFor="province">Province</Label>
                    <Input
                      id="province"
                      name="province"
                      placeholder="e.g. Metro Manila"
                      required
                    />
                  </div>
                </div>
              </div>

              <Input type="hidden" name="total" value={total} />

              <div className="flex justify-between text-lg">
                <span className="text-muted-foreground">Items</span>
                <span className="font-medium">{cart.length}</span>
              </div>
              <div className="flex justify-between text-lg">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">₱{total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg">
                <span className="text-muted-foreground">Shipping</span>
                <span className="font-medium">Free</span>
              </div>
              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>₱{total.toFixed(2)}</span>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Place Order
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
