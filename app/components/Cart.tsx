"use client";
import { useCartStore } from "@/lib/cartStore";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useActionState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
    <div className="container mx-auto px-4 py-8 w-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Your Shopping Cart</h1>
        {cart.length > 0 && (
          <Button variant="outline" onClick={clearCart}>
            Clear All
          </Button>
        )}
      </div>
      <div className="flex gap-3  justify-between">
        {cart.length === 0 ? (
          <div className="text-center py-12 space-y-4">
            <p className="text-muted-foreground">Your cart is empty</p>
            <Button onClick={() => router.push("/")}>Continue Shopping</Button>
          </div>
        ) : (
          <>
            <div className="rounded-md border overflow-x-auto w-full">
              <Table className="min-w-full">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[120px]">Product</TableHead>
                    <TableHead className="w-[200px]">Name</TableHead>
                    {/* <TableHead className="w-[150px]">Description</TableHead> */}
                    <TableHead className="text-center w-[100px]">
                      Price
                    </TableHead>
                    <TableHead className="text-center w-[150px]">
                      Quantity
                    </TableHead>
                    <TableHead className="text-center w-[100px]">
                      Total
                    </TableHead>
                    <TableHead className="text-center w-[100px]">
                      Action
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cart.map((item) => (
                    <TableRow key={item._id}>
                      <TableCell>
                        <div className="relative aspect-square w-16">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="rounded-md object-cover"
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <p className="font-medium line-clamp-1">{item.name}</p>
                      </TableCell>
                      {/* <TableCell>
                        <p className="text-sm text-muted-foreground truncate w-[700px]">
                          {item.description}
                        </p>
                      </TableCell> */}
                      <TableCell className="text-center">
                        ₱{item.price.toFixed(2)}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center justify-center gap-2">
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
                      </TableCell>
                      <TableCell className="text-right">
                        ₱{(item.price * item.quantity).toFixed(2)}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-500 hover:text-red-600"
                          onClick={() => removeFromCart(item._id)}
                        >
                          Remove
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <form className="border p-4 rounded w-[40%]" action={formAction}>
              <div className="w-full max-w-md space-y-4">
                <h1 className="text-2xl font-bold">Order Summary</h1>

                {/* Hidden product inputs */}
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

                {/* ✅ Recipient Details */}
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

                {/* Address Section */}
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

                {/* Totals and Submit */}
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
          </>
        )}
      </div>
    </div>
  );
}
