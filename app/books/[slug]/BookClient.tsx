"use client";

import { useState, useMemo } from "react";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

type Book = {
  slug: string;
  title: string;
  listing: string;
  price: number;
  mrp: number;
  stock: number;
  publisher?: string;
  provider?: string;
  dimensions?: string;
  weight?: string;
  deliveryTime?: number;
  amazonLink?: string;
  images?: {image_url: string, is_default: boolean}[];
};

export default function BookClient({
  book,
  books,
}: {
  book: Book;
  books: Book[];
}) {
  const [active, setActive] = useState(0);
  const images = book.images || [];

  const moreBooks = useMemo(() => {
    if (!book.publisher) return [];

    return books
      .filter((b) => b.publisher === book.publisher && b.slug !== book.slug)
      .slice(0, 12);
  }, [books, book]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: book.title,
    description: book.listing,
    image: book.images?.[0].image_url,
    brand: {
      "@type": "Brand",
      name: book.publisher,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: book.price,
      availability:
        book.stock > 0
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      {/* PRODUCT SECTION */}
      <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
        {/* IMAGE SECTION */}
        <div>
          <div className="bg-slate-50 rounded-xl md:rounded-2xl p-4 md:p-6 flex justify-center items-center">
            {images.length > 0 && (
              <img
  src={images[active].image_url}
                alt={book.title}
                className="max-h-[320px] md:max-h-[450px] object-contain"
              />
            )}
          </div>

          {images.length > 1 && (
            <div className="flex gap-3 mt-4 overflow-x-auto pb-1">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`border rounded-md p-2 transition shrink-0
                    ${
                      active === i
                        ? "border-black"
                        : "border-slate-200 opacity-70 hover:opacity-100"
                    }`}
                >
                  <img
                    src={img.image_url}
                    className="h-14 w-14 md:h-16 md:w-16 object-contain"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* PRODUCT DETAILS */}
        <div className="flex flex-col">
          <h1 className="text-xl md:text-3xl font-semibold text-slate-900">
            {book.title}
          </h1>

          <p className="text-sm md:text-base text-slate-500 mt-2">
            {book.listing}
          </p>

          {/* PRICE */}
          <div className="flex items-center gap-4 mt-6">
            <span className="text-2xl md:text-3xl font-bold">
              ₹{book.price}
            </span>

            <span className="line-through text-slate-400 text-sm md:text-base">
              ₹{book.mrp}
            </span>
          </div>

          <p className="text-green-600 mt-2 text-sm">
            {book.stock > 0 ? "In Stock" : "Out of Stock"}
          </p>

          {/* META */}
          <div className="mt-6 space-y-2 text-sm text-slate-700">
            {book.publisher && (
              <p>
                <b>Publisher:</b> {book.publisher}
              </p>
            )}

            {book.provider && (
              <p>
                <b>Provider:</b> {book.provider}
              </p>
            )}

            {book.dimensions && (
              <p>
                <b>Dimensions:</b> {book.dimensions}
              </p>
            )}

            {book.weight && (
              <p>
                <b>Weight:</b> {book.weight}
              </p>
            )}

            {book.deliveryTime && (
              <p>
                <b>Delivery:</b> {book.deliveryTime} days
              </p>
            )}
          </div>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
            href={`/order/${book.slug}`}
            className="bg-slate-900 text-white p-3 md:p-4 rounded-lg text-xs md:text-sm font-semibold transition text-center"
          >
            Order Now
          </Link>

            {book.amazonLink && (
              <a
                href={book.amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="border py-3 px-6 rounded-lg text-center hover:bg-slate-100 transition"
              >
                View on Amazon
              </a>
            )}
          </div>
        </div>
      </div>

      {/* MORE FROM PUBLISHER */}
      {moreBooks.length > 0 && (
        <section className="mt-16">
          <h2 className="text-lg md:text-xl italic text-slate-700 mb-6">
            More from {book.publisher}
          </h2>

          <div
            className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-5
            xl:grid-cols-6
            gap-4 md:gap-6
          "
          >
            {moreBooks.map((b) => (
              <ProductCard
                key={b.slug}
                book={{
                  skuId: "",
                  title: b.title,
                  price: b.price,
                  mrp: b.mrp,
                  images: b.images || [],
                  slug: b.slug,
                  listing: b.listing,
                  stock: b.stock,
                  amazonLink: b.amazonLink,
                }}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
