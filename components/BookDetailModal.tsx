"use client";

import { useEffect, useState } from "react";

type Props = {
  book: {
    skuId: string;
    title: string;
    price: number;
    mrp: number;
    images: string[];
    listing: string;
    stock: number;
    amazonLink?: string;
    dimensions?: string;
    weight?: string;
    deliveryTime?: number;
    provider?: string;
    hsnCode?: string;
  };
  onClose: () => void;
};

export default function BookDetailModal({ book, onClose }: Props) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const images = book.images || [];

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Floating window — single scroll container */}
      <div
        className="
          relative
          bg-white
          rounded-2xl
          shadow-xl
          w-[92vw]
          max-w-5xl
          h-[90vh]
          overflow-y-auto
          flex
          flex-col md:flex-row
        "
      >

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 md:right-5 md:top-5 text-slate-400 hover:text-black text-lg"
        >
          ✕
        </button>

        {/* LEFT — Image + thumbnails */}
        <div className="md:w-1/2 w-full bg-slate-50 flex flex-col p-4 md:p-6">

          {/* Main image */}
          <div className="flex items-center justify-center">
            {images.length > 0 && (
              <img
                src={images[active]}
                alt={book.title}
                className="max-h-[40vh] md:max-h-[55vh] object-contain"
              />
            )}
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="mt-4 flex gap-3 overflow-x-auto">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`
                    h-14 w-14 rounded-md flex items-center justify-center
                    border transition shrink-0
                    ${
                      active === i
                        ? "border-slate-900 opacity-100"
                        : "border-slate-200 opacity-60 hover:opacity-100"
                    }
                  `}
                >
                  <img
                    src={img}
                    className="max-h-full max-w-full object-contain"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT — Details */}
        <div className="md:w-1/2 w-full flex flex-col p-5 md:p-8">

          <h2 className="text-xl md:text-2xl font-semibold text-slate-900 leading-snug">
            {book.title}
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            {book.listing}
          </p>

          {/* Price */}
          <div className="mt-5 flex items-center gap-3">
            <span className="text-2xl font-bold text-slate-900">
              ₹{book.price}
            </span>
            <span className="line-through text-slate-400">
              ₹{book.mrp}
            </span>
          </div>

          <p className="text-sm text-green-600 mt-1">
            {book.stock > 0 ? "In stock" : "Out of stock"}
          </p>

          {/* Book metadata */}
          <div className="mt-6 space-y-2 text-sm text-slate-600">
            <p><b>SKU:</b> {book.skuId}</p>
            {book.dimensions && <p><b>Dimensions:</b> {book.dimensions}</p>}
            {book.weight && <p><b>Weight:</b> {book.weight}</p>}
            {book.deliveryTime && (
              <p><b>Delivery:</b> {book.deliveryTime} days</p>
            )}
            {book.provider && <p><b>Provider:</b> {book.provider}</p>}
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-2">

            <button
              className="
                bg-slate-900 text-white
                py-2.5 rounded-lg
                font-medium
                text-sm
                hover:bg-black
                transition
              "
            >
              Order now
            </button>

            {book.amazonLink && (
              <a
                href={book.amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  border border-slate-300
                  py-2.5 rounded-lg
                  text-center
                  text-sm
                  font-medium
                  hover:bg-slate-100
                  transition
                "
              >
                View on Amazon
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
