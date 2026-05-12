import { useEffect, useState } from "react";
import { client, urlFor } from "../../sanityClient";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoClose } from "react-icons/io5";

export default function Handmade() {
  const [items, setItems] = useState([]);

  const [popup, setPopup] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "handmade"][0]{
          item[]{
            title,
            description,
            price,
            images[]{ asset }
          }
        }`,
      )
      .then((data) => {
        if (data?.item) setItems(data.item);
      });
  }, []);

  if (!items.length) return <p className="text-center mt-12">Laster...</p>;

  const closePopup = () => setPopup(null);

  const popupPrev = (e) => {
    e.stopPropagation();
    setPopup((p) => ({
      ...p,
      index: (p.index - 1 + p.images.length) % p.images.length,
    }));
  };

  const popupNext = (e) => {
    e.stopPropagation();
    setPopup((p) => ({ ...p, index: (p.index + 1) % p.images.length }));
  };

  return (
    <div className="mx-auto p-4 sm:p-8 flex flex-col items-center bg-antiquePink min-h-screen poppins-regular">
      <h1 className="text-3xl sm:text-4xl font-bold poppins-bold text-rose mb-4">
        Diktgaver
      </h1>
      <p className="text-center pb-8 lg:max-w-1/2">
        Håndlagde ting med dikt på - alt laget av Marit. Mange av tingene er
        gjenbruk av treverk som har fått nye liv. Diktene er fra Marits bøker.
        Kontakt Marit dersom du ønsker å bestille ❤️
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl items-start">
        {items.map((item, i) => (
          <ProductCard
            key={i}
            item={item}
            onImageClick={(images, index) => setPopup({ images, index })}
          />
        ))}
      </div>

      {/* POPUP */}
      {popup && (
        <div
          onClick={closePopup}
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              closePopup();
            }}
            className="absolute bg-black/20 rounded-full top-4 sm:top-8 right-6 sm:right-16 text-white text-5xl leading-none hover:text-gray-300 transition-colors cursor-pointer"
          >
            <IoClose />
          </button>

          <img
            src={urlFor(popup.images[popup.index]).url()}
            alt=""
            className="max-w-full max-h-full rounded-xl object-contain"
          />

          {popup.images.length > 1 && (
            <>
              <button
                onClick={popupPrev}
                className="absolute cursor-pointer lg:left-60 left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-white/40 text-white text-3xl rounded-full w-10 h-10 flex items-center justify-center transition-colors"
              >
                <IoIosArrowBack />
              </button>
              <button
                onClick={popupNext}
                className="absolute  cursor-pointer lg:right-60 right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-white/40 text-white text-3xl rounded-full w-10 h-10 flex items-center justify-center transition-colors"
              >
                <IoIosArrowForward />
              </button>

              {/* Dots */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {popup.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setPopup((p) => ({ ...p, index: idx }));
                    }}
                    className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-colors ${
                      idx === popup.index ? "bg-white" : "bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

// NOT POPUP

function ProductCard({ item, onImageClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = item.images || [];
  const hasMultiple = images.length > 1;

  const prev = (e) => {
    e.stopPropagation();
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  };

  const next = (e) => {
    e.stopPropagation();
    setCurrentIndex((i) => (i + 1) % images.length);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
      {/* Fixed-size image area */}
      <div className="relative w-full h-100 bg-white p-2 flex-shrink-0 ">
        {images.length > 0 ? (
          <>
            <img
              src={urlFor(images[currentIndex]).width(600).url()}
              alt={item.title || ""}
              onClick={() => onImageClick(images, currentIndex)}
              className="w-full h-full object-contain  cursor-pointer hover:opacity-95 transition-opacity"
            />

            {hasMultiple && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 cursor-pointer hover:bg-black text-white rounded-full w-8 h-8 flex items-center justify-center shadow transition-colors"
                >
                  <IoIosArrowBack />
                </button>
                <button
                  onClick={next}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 cursor-pointer hover:bg-black text-white rounded-full w-8 h-8 flex items-center justify-center shadow transition-colors"
                >
                  <IoIosArrowForward />
                </button>

                {/* Dots */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 ">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentIndex(idx);
                      }}
                      className={`w-2 h-2 rounded-full cursor-pointer transition-colors  ${
                        idx === currentIndex ? "bg-white" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-300 text-sm">
            Ingen bilde
          </div>
        )}
      </div>

      {/* Card info — fixed height so cards stay uniform */}
      <div className="p-4 flex flex-col gap-2 h-36">
        <h2 className="text-lg font-semibold poppins-bold text-gray-800 line-clamp-1">
          {item.title}
        </h2>
        {item.description && (
          <p className="text-sm text-gray-600 line-clamp-3">
            {item.description}
          </p>
        )}
        {item.price != null && (
          <p className="text-rose font-bold text-lg mt-auto">
            kr {item.price},-
          </p>
        )}
      </div>
    </div>
  );
}
