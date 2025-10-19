import { useState, useEffect } from "react";
import Loader from "../../Components/Loader/loader";
import HeroCarousel from "../../Components/HeroCarousel";
import ProductCard from "../../Components/ProductCard";
import { client } from "../../sanityClient";

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
        *[_type == "book" && available == true] | order(year desc)[0...6] {
          title,
          "slug": slug.current,
          shortDescription,
          price,
          year,
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
    <div className="max-w-7xl mx-auto p-4">
      <HeroCarousel />

      {/* Section for featured diktbøker */}
      <section className="mt-10">
        <h2 className="text-2xl poppins-regular text-[#d63772] mb-6">
          Alle diktbøkene
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 poppins-regular">
          {books.map((book) => (
            <ProductCard key={book.slug} book={book} />
          ))}
        </div>
      </section>
    </div>
  );
}
