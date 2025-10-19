import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../sanityClient";
import { Link } from "react-router-dom";

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default function ProductCard({ book }) {
  const { title, slug, shortDescription, cover, price, available, year } = book;

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg border-2  hover:border-rose/20 cursor-pointer hover:bg-babypink border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col">
      {/* Badge for unavailable books */}
      {!available && (
        <span className="absolute top-3 left-3 bg-gray-800/80 text-white text-xs px-2 py-1 rounded-md z-10">
          Kommer snart
        </span>
      )}

      {/* Cover image */}
      <div className="relative w-full overflow-hidden">
        {cover ? (
          <img
            src={urlFor(cover).width(600).url()}
            alt={cover.alt || title}
            className="h-72 w-full object-cover transform group-hover:scale-105 transition duration-500"
          />
        ) : (
          <div className="h-72 w-full bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
            Ingen forside
          </div>
        )}

        {/* Soft gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-5">
        <h2 className="text-lg font-semibold text-[#d63772] mb-1 leading-snug group-hover:text-[#ae295a] transition">
          {title}
        </h2>

        {year && (
          <p className="text-xs text-gray-400 tracking-wide uppercase mb-2">
            {year}
          </p>
        )}

        {shortDescription && (
          <p className="text-gray-600 text-sm leading-relaxed flex-grow">
            {shortDescription}
          </p>
        )}

        {/* Footer */}
        <div className="mt-5 flex justify-between items-center">
          {price ? (
            <span className="text-[#d63772] font-medium">{price} kr</span>
          ) : (
            <span className="text-gray-400 text-sm">Utsolgt</span>
          )}

          <Link
            to={`/diktboker/${slug}`}
            className="text-sm text-white bg-[#d63772] hover:bg-[#ae295a] py-2 px-5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Se mer
          </Link>
        </div>
      </div>
    </div>
  );
}
