import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { client, urlFor } from "../../../sanityClient";
import Loader from "../../../Components/Loader/loader";

export default function EnkeltProdukt() {
  const { slug } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      const query = `*[_type == "book" && slug.current == $slug][0]{
      title,
      longDescription,
      year,
      price,
      "cover": cover.asset->url,
      "gallery": gallery[].asset->url
    }`;
      const data = await client.fetch(query, { slug });

      // optional fade delay (looks smoother)
      setTimeout(() => setBook(data), 300);
    };
    fetchBook();
  }, [slug]);

  if (!book) return <Loader text="Laster inn bok..." />;

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <Link
        to="/diktboker"
        className="text-blue-600 hover:underline mb-4 inline-block"
      >
        ← Tilbake til oversikt
      </Link>

      <h1 className="text-3xl font-bold mb-3">{book.title}</h1>

      {book.year && (
        <p className="text-gray-500 mb-2">Utgivelsesår: {book.year}</p>
      )}
      {book.price && (
        <p className="text-lg font-medium mb-6">{book.price} kr</p>
      )}

      {book.cover && (
        <img
          src={urlFor(book.cover).width(700).url()}
          alt={book.title}
          className="w-full rounded-xl mb-6 shadow"
        />
      )}

      {book.gallery && book.gallery.length > 0 && (
        <div className="flex gap-3 overflow-x-auto pb-4">
          {book.gallery.map((img, idx) => (
            <img
              key={idx}
              src={urlFor(img).width(250).url()}
              alt={`Galleri ${idx + 1}`}
              className="h-48 rounded-lg object-cover shadow"
            />
          ))}
        </div>
      )}

      <p className="text-gray-700 leading-relaxed whitespace-pre-line mt-6">
        {book.longDescription}
      </p>
    </div>
  );
}
