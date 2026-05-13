import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../sanityClient";
import { Link } from "react-router-dom";

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default function ProductCard({ book }) {
  console.log("title:", book.title, "isBundle:", book.isBundle);
  const {
    title,
    slug,
    shortDescription,
    cover,
    price,
    available,
    year,
    isBundle,
  } = book;

  return (
    <Link
      to={`/diktboker/${slug}`}
      className="group relative flex flex-col h-full max-w-[320px] bg-white text-black rounded-md overflow-hidden shadow-lg border hover:border-rose/20 hover:bg-palepink border-gray-200 hover:shadow-xl transition-all duration-300 poppins-regular"
    >
      {!available && (
        <span className="absolute top-3 left-3 bg-gray-800/80 text-white text-xs px-2 py-1 rounded-md z-10">
          Kommer snart
        </span>
      )}

      <div className="relative w-full overflow-hidden">
        {cover ? (
          <img
            src={urlFor(cover).width(600).auto("format").url()}
            alt={cover.alt || title}
            loading="lazy"
            className="h-72 w-full object-cover  transform group-hover:scale-105 transition duration-500"
          />
        ) : (
          <div className="h-72 w-full bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
            Ingen forside
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70 via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
      </div>

      <div className="flex flex-col flex-grow p-5">
        <h2 className="text-xl poppins-bold text-rose mb-2 leading-snug group-hover:text-rosedark transition">
          {title}
        </h2>

        {year && (
          <p className="text-sm text-gray-400 tracking-wide uppercase mb-2">
            {year}
          </p>
        )}

        {shortDescription && (
          <p className=" text-base text-black leading-relaxed flex-grow">
            {shortDescription}
          </p>
        )}

        {isBundle && (
          <span className="pt-3 md:pt-4  max-w-[236px] text-rose  text-base  rounded-full ">
            Her får du tak i <b>Dans På Roser</b>
          </span>
        )}

        <div className="mt-auto pt-4 flex justify-between items-center">
          {price ? (
            <span className=" poppins-medium text-rose text-lg">
              {price} kr
            </span>
          ) : (
            <span className="text-gray-400 text-sm">Utsolgt</span>
          )}

          <span className="btn-small btn-base poppins-medium">Se mer</span>
        </div>
      </div>
    </Link>
  );
}
