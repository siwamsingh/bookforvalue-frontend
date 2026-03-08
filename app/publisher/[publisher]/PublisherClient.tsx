"use client";

import { useState, useMemo } from "react";
import ProductCard from "@/components/ProductCard";

type Book = {
  slug: string;
  title: string;
  listing: string;
  price: number;
  mrp: number;
  stock: number;
  publisher?: string;
  amazonLink?: string;
  images?: string[];
};

export default function PublisherClient({
  books,
  publisherName,
}: {
  books: Book[];
  publisherName: string;
}) {
  const [search, setSearch] = useState("");

  const filteredBooks = useMemo(() => {
    if (!search) return books;

    return books.filter((book) =>
      (book.title + book.listing).toLowerCase().includes(search.toLowerCase()),
    );
  }, [search, books]);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
          {publisherName} Books
        </h1>

        <p className="text-slate-500 mt-2 text-sm md:text-base max-w-2xl">
          Explore authentic publications from <b>{publisherName}</b>. Find
          spiritual, educational and classical literature at the best price.
        </p>

        {/* SEARCH */}
        <div className="mt-6 max-w-md">
          <input
            type="text"
            placeholder={`Search ${publisherName} books...`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              border border-slate-300
              rounded-lg
              px-4 py-2.5
              text-sm
              focus:outline-none
              focus:ring-2
              focus:ring-slate-900
            "
          />
        </div>

        <p className="text-xs text-slate-400 mt-2">
          {filteredBooks.length} books found
        </p>
      </div>

      {/* BOOK GRID */}
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
        {filteredBooks.map((book, i) => (
          <ProductCard
            key={`${book.slug}-${i}`}
            book={{
              skuId: "",
              title: book.title,
              price: book.price,
              mrp: book.mrp,
              images: book.images || [],
              slug: book.slug,
              listing: book.listing,
              stock: book.stock,
              amazonLink: book.amazonLink,
            }}
          />
        ))}
      </div>
    </div>
  );
}
