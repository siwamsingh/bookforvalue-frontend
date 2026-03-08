import booksData from "@/data/books.json";
import PublisherClient from "./PublisherClient";
import { notFound } from "next/navigation";

type Book = {
  slug: string;
  title: string;
  listing: string;
  price: number;
  mrp: number;
  stock: number;
  publisher?: string;
  amazonLink?: string;
  images?: { image_url: string; is_default: boolean; }[];
};

const books: Book[] = booksData;

function slugifyPublisher(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export async function generateStaticParams() {
  const publishers = Array.from(
    new Set(books.map((b) => b.publisher).filter(Boolean)),
  );

  return publishers.map((publisher) => ({
    publisher: slugifyPublisher(publisher!),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ publisher: string }>;
}) {
  const { publisher } = await params;

  const publisherBooks = books.filter(
    (b) => slugifyPublisher(b.publisher || "") === publisher,
  );

  if (!publisherBooks.length) return {};

  const publisherName = publisherBooks[0].publisher;

  return {
    title: `${publisherName} Books | BookForValue`,
    description: `Browse all books published by ${publisherName}. Buy authentic editions at the best price.`,
    openGraph: {
      title: `${publisherName} Books`,
      description: `Browse books from ${publisherName}.`,
      type: "website",
      url: `https://bookforvalue.com/publisher/${publisher}`,
    },
    alternates: {
      canonical: `https://bookforvalue.com/publisher/${publisher}`,
    },
  };
}

export default async function PublisherPage({
  params,
}: {
  params: Promise<{ publisher: string }>;
}) {
  const { publisher } = await params;

  const publisherBooks = books.filter(
    (b) => slugifyPublisher(b.publisher || "") === publisher,
  );

  if (!publisherBooks.length) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-400 text-lg font-medium text-center">
          Publisher not found or no books available.
        </p>
      </div>
    );
  }

  const publisherName = publisherBooks[0].publisher;

  return (
    <PublisherClient books={publisherBooks} publisherName={publisherName!} />
  );
}
