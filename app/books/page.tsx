"use client";

import { useMemo, useState } from "react";
import books from "@/data/gitaPressBooks.json";
import ProductCard from "@/components/ProductCard";

export default function BooksPage() {
  const [search, setSearch] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [maxPrice, setMaxPrice] = useState<number | "">("");
  const [provider, setProvider] = useState("");

  // unique providers from JSON
  const providers = useMemo(() => {
    const set = new Set<string>();
    books.forEach((b: any) => b.provider && set.add(b.provider));
    return Array.from(set);
  }, []);

  // filtering logic
  const filteredBooks = useMemo(() => {
    return books.filter((book: any) => {
      const matchesSearch =
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.listing.toLowerCase().includes(search.toLowerCase());

      const matchesStock = inStockOnly ? book.stock > 0 : true;

      const matchesPrice =
        maxPrice === "" ? true : Number(book.price) <= Number(maxPrice);

      const matchesProvider =
        provider === "" ? true : book.provider === provider;

      return matchesSearch && matchesStock && matchesPrice && matchesProvider;
    });
  }, [search, inStockOnly, maxPrice, provider]);

  return (
    <section className="min-h-screen bg-white">

      {/* Top bar */}
      <div className="border-b bg-white sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex flex-col md:flex-row gap-3 md:items-center">

          {/* Search */}
          <input
            type="text"
            placeholder="Search books, Ramayan, Gita, Shiv Puran..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border border-slate-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
          />

          {/* Filters */}
          <div className="flex gap-2 flex-wrap">

            <select
              value={provider}
              onChange={(e) => setProvider(e.target.value)}
              className="border border-slate-300 rounded-lg px-3 py-2 text-sm"
            >
              <option value="">All Publishers</option>
              {providers.map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>

            <input
              type="number"
              placeholder="Max price"
              value={maxPrice}
              onChange={(e) =>
                setMaxPrice(e.target.value ? Number(e.target.value) : "")
              }
              className="w-28 border border-slate-300 rounded-lg px-3 py-2 text-sm"
            />

            <label className="flex items-center gap-2 text-sm px-2">
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={() => setInStockOnly(!inStockOnly)}
              />
              In stock
            </label>

          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">

        <p className="text-sm text-slate-500 mb-4">
          Showing {filteredBooks.length} books
        </p>

        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-5
            gap-3 md:gap-8
          "
        >
          {filteredBooks.map((book: any) => (
            <ProductCard key={book.skuId} book={book} />
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            No books found.
          </div>
        )}
      </div>
    </section>
  );
}
