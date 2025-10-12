import { useEffect, useState } from "react";
import { client, urlFor } from "../../sanityClient";
import { Link } from "react-router-dom";

export default function Diktboker() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await client.fetch(`*[_type == "book"] | order(year desc) {
        _id,
        title,
        slug,
        shortDescription,
        year,
        price,
        "coverUrl": cover.asset->url
      }`);
      setBooks(data);
    };
    fetchBooks();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">Diktbøker</h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <Link
            key={book._id}
            to={`/diktboker/${book.slug.current}`} 
            className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden block"
          >
            {book.coverUrl && (
              <img
                src={urlFor(book.coverUrl).width(500).url()}
                alt={book.title}
                className="w-full h-64 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{book.title}</h2>
              <p className="text-gray-600 text-sm mb-3">{book.shortDescription}</p>
              <p className="text-gray-800 font-medium">
                {book.price ? `${book.price} kr` : ""}
              </p>
              {book.year && (
                <p className="text-gray-500 text-sm">Utgitt: {book.year}</p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
