import BlackSwanImg from "@/assets/Categories/blackswan.png"
import UpscImg from "@/assets/Categories/upsc.png"
import GitaPressImg from "@/assets/Categories/gitapress.png"
import NcertImg from "@/assets/Categories/ncert.png"
import Image from "next/image";

function BookCategoriesSection() {
  const categories = [
    // {
    //   title: "NCERT Books",
    //   img: NcertImg,
    //   desc: "Buy NCERT books for classes 6–12 covering science, maths, social studies, and languages. Essential for CBSE and competitive exam preparation.",
    // },
    {
      title: "UPSC Preparation Books",
      img: UpscImg,
      desc: "Shop UPSC books for GS, optional subjects, and current affairs used by IAS and civil services aspirants across India.",
    },
    {
      title: "Gita Press Books",
      img: GitaPressImg,
      desc: "Authentic Bhagavad Gita and spiritual books for philosophy, learning, and personal growth.",
    },
    {
      title: "Blackie & Orient Publisher Books",
      img: BlackSwanImg,
      desc: "Academic and reference books from trusted publishers used in schools and colleges across India.",
    },
  ];

  return (
    <section className="py-20 bg-white" id="categories">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Book Categories Available at BookForValue
          </h2>
          <p className="mt-4 text-slate-600 text-sm">
            Buy NCERT, UPSC, NEET, and JEE preparation books, spiritual books,
            and academic titles at affordable prices across India.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mt-14">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-md transition flex flex-col"
            >
              {/* Image wrapper for vertical centering */}
              <div className="h-44 flex items-center justify-center bg-white">
                <Image
                  src={cat.img}
                  alt={cat.title}
                  className="max-h-full w-auto object-cover"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-slate-900">
                  {cat.title}
                </h3>

                <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                  {cat.desc}
                </p>

                {/* Ghost Link CTA */}
                <div className="mt-auto flex justify-end">
                  <a className="mt-5 text-sm font-semibold text-slate-900 bg-white border border-slate-300 px-4 py-1.5 rounded-lg hover:bg-slate-100 transition">
                    Order now →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BookCategoriesSection;
