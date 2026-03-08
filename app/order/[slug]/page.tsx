"use client";

import { useParams } from "next/navigation";
import books from "@/data/books.json";
import { useState } from "react";
import Image from "next/image";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function OrderPage() {
  const { slug } = useParams();
  const book = books.find((b: any) => b.slug === slug);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    addressLine1: "",
    addressLine2: "",
    state: "",
    pincode: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [confirmOpen, setConfirmOpen] = useState(false);

  if (!book) {
    return (
      <div className="max-w-xl mx-auto py-20 text-center">
        <h1 className="text-xl font-semibold">Book Not Found</h1>
      </div>
    );
  }

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const submitOrder = async () => {
    setLoading(true);
    setConfirmOpen(false);

    try {
      const res = await fetch(`${API_BASE}/api/book-request`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...form,
          bookName: book.title,
          price: book.price
        })
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(data.message);
      } else {
        setError(data.message);
      }
    } catch {
      setError("Failed to submit request.");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">

      <div className="max-w-xl mx-auto space-y-6">

        {/* PRODUCT SUMMARY */}

        <div className="bg-white border rounded-lg p-4 flex gap-4 items-center shadow-sm">

          <Image
            src={book.images?.[0]?.image_url}
            alt={book.title}
            width={60}
            height={80}
            className="object-contain border rounded"
          />

          <div className="flex-1">

            <h1 className="text-sm font-semibold leading-snug">
              {book.title}
            </h1>

            <div className="text-green-600 font-semibold mt-1">
              ₹{book.price}
            </div>

            <div className="text-xs text-gray-500 mt-1">
              Delivery in 7–10 days
            </div>

          </div>

        </div>

        {/* FORM */}

        <div className="bg-white border rounded-lg shadow-sm p-6">

          <h2 className="text-lg font-semibold">
            Delivery Details
          </h2>

          <div className="flex flex-col gap-4 mt-6">

            <input name="name" placeholder="Full Name" onChange={handleChange} className="input"/>
            <input name="phone" placeholder="Phone Number" onChange={handleChange} className="input"/>
            <input name="email" placeholder="Email Address" onChange={handleChange} className="input"/>
            <input name="addressLine1" placeholder="Address Line 1" onChange={handleChange} className="input"/>
            <input name="addressLine2" placeholder="Address Line 2" onChange={handleChange} className="input"/>

            <div className="grid grid-cols-2 gap-3">
              <input name="state" placeholder="State" onChange={handleChange} className="input"/>
              <input name="pincode" placeholder="Pincode" onChange={handleChange} className="input"/>
            </div>

            <button
              onClick={() => setConfirmOpen(true)}
              disabled={loading}
              className="w-full bg-black text-white py-3 rounded-md text-sm font-medium hover:bg-gray-800 disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Place Order"}
            </button>

          </div>

        </div>

      </div>

      {/* CONFIRM MODAL */}

      {confirmOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center px-4">

          <div className="bg-white  max-w-xl rounded-lg shadow-lg p-6 max-w-sm w-full">

            <h3 className="text-lg font-semibold mb-3">
              Confirm Order
            </h3>

            <p className="text-sm text-gray-600 mb-6">
              Please confirm that your delivery details are correct before placing the order.
            </p>

            <div className="flex justify-end gap-3">

              <button
                onClick={() => setConfirmOpen(false)}
                className="px-4 py-2 text-sm border rounded"
              >
                Cancel
              </button>

              <button
                onClick={submitOrder}
                className="px-4 py-2 text-sm bg-black text-white rounded"
              >
                Confirm Order
              </button>

            </div>

          </div>

        </div>
      )}

      {/* SUCCESS MODAL */}

      {success && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center px-4">

          <div className="bg-white rounded-lg shadow-lg p-6 max-w-xl w-full text-center">

            <h3 className="text-lg font-semibold text-green-600 mb-3">
              Order Received
            </h3>

            <p className="text-sm text-gray-600 mb-6">
              {success}
            </p>

            <button
              onClick={() => setSuccess("")}
              className="px-4 py-2 bg-black text-white rounded text-sm"
            >
              Close
            </button>

          </div>

        </div>
      )}

      {/* ERROR MODAL */}

      {error && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center px-4">

          <div className="bg-white max-w-xl rounded-lg shadow-lg p-6 max-w-sm w-full text-center">

            <h3 className="text-lg font-semibold text-red-600 mb-3">
              Something went wrong
            </h3>

            <p className="text-sm text-gray-600 mb-6">
              {error}
            </p>

            <button
              onClick={() => setError("")}
              className="px-4 py-2 bg-black text-white rounded text-sm"
            >
              Close
            </button>

          </div>

        </div>
      )}

    </main>
  );
}