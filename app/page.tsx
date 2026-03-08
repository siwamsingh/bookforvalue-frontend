import HeroCarousel from "@/components/common/HeroCarsole";
import BookCategoriesSection from "@/sections/BookCategoriesSection";
import Features from "@/sections/Features";
import GitaPressSection from "@/sections/ViewBooks";
import HowItWorks from "@/sections/HowItWorks";

import Hero1 from "@/assets/HeroCarsole/hero1.png";
import Hero2 from "@/assets/HeroCarsole/hero2.png";
import Hero3 from "@/assets/HeroCarsole/hero3.png";
import Hero4 from "@/assets/HeroCarsole/hero4.png";

import BooksData from "@/data/books.json";
import Footer from "@/components/common/Footer";

export default function BookForValueLanding() {
  const images = [Hero1, Hero2, Hero3, Hero4];

  const popularSlugs = [
    "r-bhaktaml-with-bhaktisabodhini-k-by-r-priydsaj-orlanguage-hindi-orsize-large-orcode-2066",
    "all-books-and-handicrafts-vishnu-sahastranam-stotram-gita-press-code-1801-by-gita-press-gorakhpur",
    "gita-press-gorakhpur-shrimadbhagvadgita-with-hindi-commentary-bold-fonts-along-with-medium-size-book-covercode-502",
    "shri-shiv-maha-puran-part-1-and-2combo-pack-sachitra-mool-sanskrit-shloka-hindi-vyakhya-sahit-gita-press",
    "mahabharat-part-1-6-in-hindi-by-gita-press-gorakhpur-new-edition",
  ];

  const popularBooks = BooksData.filter((book) =>
    popularSlugs.includes(book.slug)
  );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <HeroCarousel images={images} />

      <GitaPressSection
        id="geetapressbooks"
        title="Gita Press Books Collection"
        description="Collection of most popular spiritual books by Geeta Press"
        books={popularBooks}
      />

      <BookCategoriesSection />
      <Features />
      <HowItWorks />
    </main>
  );
}