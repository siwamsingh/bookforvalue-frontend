"use client";

import ProductCard from "@/components/ProductCard";

interface BookSectionProps {
  id?: string;
  title: string;
  description?: string;
  books: any[]; // ideally create a Book type
}

export default function BookSection({
  id,
  title,
  description,
  books,
}: BookSectionProps) {
  return (
    <section className="py-14 md:py-20 bg-white" id={id}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Heading */}
        <header className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900">
            {title}
          </h2>

          {description && (
            <p className="mt-3 md:mt-4 text-slate-600 text-xs md:text-sm">
              {description}
            </p>
          )}
        </header>

        {/* Grid */}
        <div
          className="
            mt-10 md:mt-14
            grid
            grid-cols-2
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-5
            gap-3 md:gap-8
            items-stretch
          "
        >
          {books.map((book) => (
            <ProductCard key={book.skuId} book={book} />
          ))}
        </div>

      </div>
    </section>
  );
}
