"use client"
import { useState } from "react";
import BookDetailModal from "./BookDetailModal";

type Props = {
  book: {
    skuId: string;
    title: string;
    price: number;
    mrp: number;
    images: string[];
    slug: string;
    listing: string;
    stock: number;
    amazonLink?: string;
  };
};

export default function ProductCard({ book }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article className="bg-white border border-slate-200 rounded-xl md:rounded-2xl hover:shadow-md transition flex flex-col overflow-hidden h-full">

        {/* Image */}
        <div className="h-36 md:h-56 bg-slate-50 flex items-center justify-center p-2 md:p-4">
          <img
            src={book.images?.[0]}
            alt={book.title}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        {/* Content */}
        <div className="p-3 md:p-5 flex flex-col flex-1">

          <h3 className="text-sm md:text-lg text-slate-900 font-semibold leading-snug line-clamp-2 min-h-[40px] md:min-h-[52px]">
            {book.title}
          </h3>

          <p className="text-xs md:text-sm text-slate-500 mt-1 line-clamp-2">
            {book.listing}
          </p>

          {/* Price */}
          <div className="mt-2 md:mt-3 flex items-center gap-2">
            <span className="text-base md:text-xl font-bold text-slate-900">
              ₹{book.price}
            </span>
            <span className="text-xs md:text-sm line-through text-slate-400">
              ₹{book.mrp}
            </span>
          </div>

          {/* CTA */}
          <div className="mt-auto pt-3 md:pt-4 flex flex-col gap-2">

            {/* Primary CTA */}
            <button
              onClick={() => alert("Order flow")}
              className="bg-slate-900 text-white py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-semibold hover:bg-slate-800 transition"
            >
              Order
            </button>

            {/* Secondary CTA */}
            <button
              onClick={() => setOpen(true)}
              className="border border-slate-300 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-medium hover:bg-slate-100 transition"
            >
              Details
            </button>

          </div>

        </div>
      </article>

      {open && (
        <BookDetailModal book={book} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
