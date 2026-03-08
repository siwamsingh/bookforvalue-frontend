import Link from "next/link";

type Props = {
  book: {
    skuId: string;
    title: string;
    price: number;
    mrp: number;
    images: {image_url: string, is_default: boolean}[];
    slug: string;
    listing: string;
    stock: number;
    amazonLink?: string;
  };
};

export default function ProductCard({ book }: Props) {
  const discount = Math.round(((book.mrp - book.price) / book.mrp) * 100);

  return (
    <article className="bg-white border border-slate-200 rounded-xl md:rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col overflow-hidden h-full relative">
      {/* Discount Badge */}
      {discount > 0 && (
        <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] md:text-xs font-semibold px-2 py-1 rounded">
          {discount}% OFF
        </div>
      )}

      {/* Image */}
      <div className="h-36 md:h-56 bg-slate-50 flex items-center justify-center p-3 md:p-4">
        <img
          src={book.images?.[0].image_url}
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
        <div className="mt-2 md:mt-3 flex items-center gap-2 flex-wrap">
          <span className="text-base md:text-xl font-bold text-slate-900">
            ₹{book.price}
          </span>

          <span className="text-xs md:text-sm line-through text-slate-400">
            ₹{book.mrp}
          </span>

          {discount > 0 && (
            <span className="text-[11px] md:text-xs text-green-600 font-semibold">
              Save ₹{book.mrp - book.price}
            </span>
          )}
        </div>

        {/* CTA */}
        <div className="mt-auto pt-3 md:pt-4 flex flex-col gap-2">
          {/* Primary CTA */}
          <Link
            href={`/order/${book.slug}`}
            className="bg-slate-900 text-white py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-semibold transition text-center"
          >
            Order Now
          </Link>

          {/* Secondary CTA */}
          <Link
            href={`/books/${book.slug}`}
            className="border border-slate-300 text-center py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-medium hover:bg-slate-100 transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
