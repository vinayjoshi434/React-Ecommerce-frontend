import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowRight";

import {
  removeItem,
  updateQty,
  clearCart,
} from "../../Features/Cart/CartSlice";

import { useEffect } from "react";

const Cart = () => {
  const [subtotal, setsubtotal] = useState("");
  const [carttotalqty, setcarttotalqty] = useState(1);

  const cartitems = useSelector((state) => state.items); // this holds the array

  const cartitemcount = (cartitems) => {
    const count = cartitems.reduce((acc, curr) => {
      return acc + curr?.qty;
    }, 0);
    setcarttotalqty(count);
  };

  const subtotalcal = (cartitems) => {
    const final = cartitems.reduce((acc, curr) => {
      return acc + curr?.price * curr?.qty;
    }, 0);

    setsubtotal(final.toFixed(2));
  };

  useEffect(() => {
    subtotalcal(cartitems);
  }, [cartitems, cartitems.qty]); // this subtotalcal will run whenever there is a change in the cartitemes and and whenever there is a change in the product quantity based on which the subtotal is calculated

  useEffect(() => {
    cartitemcount(cartitems);
  }, [cartitems, cartitems.qty]);

  const dispatch = useDispatch();

  if (cartitems.length === 0) {
    return (
      <section className="mx-auto max-w-md px-4 py-20 text-center">
        <h1 className="mb-4 text-2xl font-semibold">Your Cart</h1>
        <p className="font-poppins font-medium text-gray-500">
          Looks like you haven’t added anything yet.
        </p>
        <Link to="/" className="mt-6 inline-block">
          <Button startDecorator={<KeyboardArrowLeft />}>Back to shop</Button>
        </Link>
      </section>
    );
  }

  //   return (
  //     <>
  //       {" "}
  //       <aside
  //         className={`fixed right-0 top-0 h-full w-80 max-w-full bg-white shadow-2xl
  //                 transform transition-transform duration-300 ease-out
  //                 ${open ? "translate-x-0" : "translate-x-full"} flex flex-col`}
  //       >
  //         {/* ───── Header ───── */}
  //         <header className="flex items-center justify-between p-4 border-b">
  //           <h2 className="text-lg font-semibold">Your Cart</h2>
  //           <button aria-label="Close cart">Close cart</button>
  //         </header>

  //         {/* ───── Line‑items list ───── */}
  //         <ul className="flex-1 overflow-y-auto divide-y">
  //           {cartitems.length === 0 ? (
  //             <li className="p-6 text-center text-gray-500">Cart is empty</li>
  //           ) : (
  //             cartitems.map((item) => (
  //               <li key={item.id} className="flex gap-4 p-4">
  //                 {/* thumbnail */}
  //                 <img
  //                   src={item.thumbnail}
  //                   alt={item.title}
  //                   className="w-16 h-16 rounded object-cover"
  //                 />

  //                 {/* details */}
  //                 <div className="flex-1">
  //                   <h3 className="text-sm font-medium">{item.title}</h3>
  //                   <p className="text-xs text-gray-500">₹{item.price}</p>

  //                   {/* ─ qty controls (TODO: hook these up) ─ */}
  //                   <div className="flex items-center gap-2 mt-2">
  //                     <button className="px-2 border rounded">−</button>
  //                     <span>{item.qty}</span>
  //                     <button className="px-2 border rounded">＋</button>
  //                   </div>
  //                 </div>

  //                 {/* remove button (TODO) */}
  //                 <button
  //                   className="text-red-500 text-xs self-start"
  //                   onClick={() => dispatch(removeItem)}
  //                 >
  //                   ✕
  //                 </button>
  //               </li>
  //             ))
  //           )}
  //         </ul>

  //         {/* ───── Footer / totals ───── */}
  //         {cartitems.length > 0 && (
  //           <footer className="p-4 border-t">
  //             <div className="flex justify-between font-medium">
  //               <span>Total</span>
  //               {/* TODO: compute subtotal or inject via prop */}
  //               <span>₹0.00</span>
  //             </div>

  //             <button className="w-full mt-4 bg-green-600 text-white rounded py-2">
  //               Checkout
  //             </button>
  //           </footer>
  //         )}
  //       </aside>
  //     </>
  //   );

  return (
    <section className="mx-auto max-w-3xl px-4 py-10">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-semibold">
          Your Cart : {carttotalqty} {" Items"}
        </h1>
        <Link to="/" className="sm:self-end">
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Button startDecorator={<KeyboardArrowLeft />} color="primary">
              Back to Shop
            </Button>
          </Box>
        </Link>
      </div>
      {/* Line items */}
      <ul className="divide-y">
        {cartitems.map((item) => (
          <li
            key={item.id}
            className="flex flex-col gap-4 py-6 sm:flex-row sm:items-start"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="h-40 w-full rounded object-cover sm:h-24 sm:w-24 md:h-28 md:w-28"
            />

            <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex-1">
                <h2 className="text-sm font-medium">{item.title}</h2>
                <p className="text-sm text-gray-500 mb-2">₹{item.price}</p>
              </div>
              {/* Quantity controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    dispatch(
                      updateQty({ id: item.id, qty: Math.max(1, item.qty - 1) })
                    )
                  }
                  className="w-7 h-7 border rounded"
                >
                  −
                </button>
                <span>{item.qty}</span>
                <button
                  onClick={() =>
                    dispatch(updateQty({ id: item.id, qty: item.qty + 1 }))
                  }
                  className="w-7 h-7 border rounded"
                >
                  ＋
                </button>
              </div>
            </div>

            {/* Line subtotal + remove */}
            <div className="mt-2 flex items-center justify-between sm:mt-0 sm:block">
              <span className="font-medium sm:mb-3">
                ₹{(item.price * item.qty).toFixed(2)}
              </span>
              <button
                onClick={() => dispatch(removeItem(item.id))}
                className="ml-6 text-red-600 sm:ml-0"
              >
                × Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Summary */}
      <div className="mt-10 flex flex-col gap-4 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-medium">Subtotal</p>
          <p className="text-gray-500 text-sm">
            Shipping and taxes calculated at checkout
          </p>
        </div>
        <p className="text-xl font-semibold">₹{subtotal}</p>
      </div>

      {/* Actions */}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          onClick={() => dispatch(clearCart())}
          className="border rounded px-4 py-2 text-sm"
        >
          Clear Cart
        </button>
        <button
          className="rounded bg-green-600 px-4 py-2 text-sm text-white hover:bg-green-700 sm:flex-1"
          onClick={() => /* TODO: navigate to checkout route */ null}
        >
          Checkout
        </button>
      </div>
    </section>
  );
};

export default Cart;
