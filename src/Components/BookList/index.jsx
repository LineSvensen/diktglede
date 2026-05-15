import { useEffect, useState } from "react";
import { client } from "../../sanityClient";
import ProductCard from "../ProductCard";

function BookSkeleton() {
  return (
    <div className="h-full w-full max-w-[320px] bg-white rounded-md overflow-hidden shadow-lg border border-gray-200 animate-pulse">
      <div className="h-72 w-full bg-gray-200" />

      <div className="p-5">
        <div className="h-6 w-3/4 bg-gray-200 rounded mb-3" />
        <div className="h-4 w-1/3 bg-gray-200 rounded mb-4" />
        <div className="h-4 w-full bg-gray-200 rounded mb-2" />
        <div className="h-4 w-5/6 bg-gray-200 rounded mb-6" />

        <div className="mt-auto pt-4 flex justify-between items-center">
          <div className="h-5 w-16 bg-gray-200 rounded" />
          <div className="h-8 w-20 bg-gray-200 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default function BookList() {
  const [books, setBooks] = useState([]);
  const [loadingBooks, setLoadingBooks] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await client.fetch(`
          *[_type == "book" && available == true] | order(year desc) {
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
      } catch (error) {
        console.error("Kunne ikke hente bøker:", error);
      } finally {
        setLoadingBooks(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center poppins-regular">
      {loadingBooks
        ? Array.from({ length: 4 }).map((_, index) => (
            <BookSkeleton key={index} />
          ))
        : books.map((book) => <ProductCard key={book._id} book={book} />)}
    </div>
  );
}

// import { useEffect, useState } from "react";
// import { client } from "../../sanityClient";
// import ProductCard from "../ProductCard";

// export default function BookList() {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     client
//       .fetch(
//         `*[_type == "book"]{
//         title,
//         "slug": slug.current,
//         shortDescription,
//         cover,
//         price,
//         available,
//         year,
//         isBundle
//       }`,
//       )
//       .then((data) => setBooks(data));
//   }, []);

//   return (
//     <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
//       {books.map((book) => (
//         <ProductCard key={book.slug} book={book} />
//       ))}
//     </div>
//   );
// }
