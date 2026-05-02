import { useState, useEffect } from "react";
import Loader from "../../Components/Loader/loader";
import HeroCarousel from "../../Components/HeroCarousel";
import ProductCard from "../../Components/ProductCard";
import { client } from "../../sanityClient";
import rose from "../../assets/rose-d.png";
import roseTwo from "../../assets/rose-e.png";
import roseThree from "../../assets/rose-g.png";

export default function Hjem() {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await client.fetch(`
      *[_type == "book" && available == true] | order(year desc)[0...50] {
        _id,
        title,
        "slug": slug.current,
        shortDescription,
        price,
        year,
        isBundle,
        cover,
        available
      }
    `);
      setBooks(data);
    };
    fetchBooks();
  }, []);

  if (loading) return <Loader text="Laster inn siden..." />;

  return (
    <div className="max-w-7xl mx-auto p-4 mb-8">
      <div className="relative">
        <img
          src={roseThree}
          alt="rose"
          className="
      pointer-events-none
      absolute top-0 right-0 z-20
      w-[50px]  translate-x-3 sm:w-[140px] lg:w-[116px]
      -translate-y-3 sm:translate-x-9 md:translate-x-8
      object-contain
    "
        />

        {/* Bottom-left corner */}
        <img
          src={roseTwo}
          alt="rose"
          className="
      pointer-events-none
      absolute bottom-0 left-0 z-20
      w-[50px] sm:w-[70px] lg:w-[120px] xl:w-[140px]
      translate-y-3 sm:translate-y-5 -translate-x-3  lg:-translate-x-8
      object-contain
    "
        />
        <HeroCarousel />
      </div>
      <div className="flex justify-center flex-col items-center">
        <h2 className="text-xl sm:text-2xl poppins-regular text-[#d63772] mt-6 lg:mb-6 lg:mt-10">
          Alle diktbøkene
        </h2>

        {/* Section for featured diktbøker */}
        <section className="mt-4">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 poppins-regular ">
            {books.map((book) => (
              <ProductCard key={book._id} book={book} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
