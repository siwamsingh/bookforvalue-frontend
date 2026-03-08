import booksData from "@/data/books.json";
import { notFound } from "next/navigation";
import BookClient from "./BookClient";
import type { Metadata } from "next";

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

const books: Book[] = booksData;

export async function generateStaticParams() {
  return books.map((book) => ({
    slug: book.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const book = books.find((b) => b.slug === slug);

  if (!book) return {};

  const image = book.images?.[0].image_url || "/book-placeholder.png";

  return {
    title: `${book.title} | BookForValue`,
    description: book.listing,
    alternates: {
      canonical: `https://bookforvalue.com/books/${book.slug}`,
    },

    openGraph: {
      title: book.title,
      description: book.listing,
      url: `https://bookforvalue.com/books/${book.slug}`,
      siteName: "BookForValue",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
        },
      ],
      locale: "en_IN",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: book.title,
      description: book.listing,
      images: [image],
    },
  };
}

export default async function BookPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const book = books.find((b) => b.slug === slug);

  if (!book) return notFound();

  return <BookClient book={book} books={books} />;
}
