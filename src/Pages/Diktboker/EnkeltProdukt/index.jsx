import { useParams, Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { client } from "../../../sanityClient";
import Loader from "../../../Components/Loader/loader";
import BackButton from "../../../Components/BackButton";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { TiChevronLeft } from "react-icons/ti";
import { PiArrowCircleLeft } from "react-icons/pi";

import { PiShootingStarBold } from "react-icons/pi";
{
  /* <PiShootingStarBold /> håp */
}
import { FaRegSadTear } from "react-icons/fa";
{
  /* <FaRegSadTear /> */
}
import { TbCoffin } from "react-icons/tb";
{
  /* <TbCoffin /> */
}
import { LuBaby } from "react-icons/lu";
{
  /* <LuBaby /> */
}
import { RiHeartsLine } from "react-icons/ri";
{
  /* <RiHeartsLine /> */
}
import { FaChild } from "react-icons/fa";
{
  /* <FaChild /> */
}
import { PiHandsPraying } from "react-icons/pi";
{
  /* <PiHandsPraying /> */
}
import { LuHandHeart } from "react-icons/lu";
{
  /* <LuHandHeart /> */
}
import { LiaHandshake } from "react-icons/lia";
{
  /* <LiaHandshake /> */
}
import { MdOutlineRocketLaunch } from "react-icons/md";
{
  /* <MdOutlineRocketLaunch /> */
} // motivation
import { LuDog } from "react-icons/lu";
{
  /* <LuDog /> */
}

import { PiButterflyBold } from "react-icons/pi";

export default function EnkeltProdukt() {
  const { slug } = useParams();
  const [book, setBook] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  const occasionMap = {
    hope: { label: "Håp", icon: PiShootingStarBold },
    grief: { label: "Sorg", icon: FaRegSadTear },
    death: { label: "Død", icon: TbCoffin },
    baby: { label: "Baby", icon: LuBaby },
    love: { label: "Forelskelse", icon: RiHeartsLine },
    confirmation: { label: "Å bli voksen", icon: FaChild },
    thankful: { label: "Takknemlighet", icon: PiHandsPraying },
    comfort: { label: "Trøst", icon: LuHandHeart },
    friendship: { label: "Vennskap", icon: LiaHandshake },
    motivation: { label: "Motivasjon", icon: MdOutlineRocketLaunch },
    pets: { label: "Kjæledyr", icon: LuDog },
    spread: { label: "Å spre glede", icon: PiButterflyBold },
  };

  useEffect(() => {
    const fetchBook = async () => {
      const query = `*[_type == "book" && slug.current == $slug][0]{
  title,
  isBundle,
  shortDescription,
  longDescription,
  poem,
  year,
  occasions,
  price,
  available,
  "cover": cover.asset->url,
  reviews[]{
    author,
    quote
  },
  "gallery": gallery[]{
  "url": asset->url,
  "alt": alt
},
}`;

      try {
        const data = await client.fetch(query, { slug });
        setTimeout(() => setBook(data), 250);
      } catch (error) {
        console.error("Kunne ikke hente bok:", error);
        setBook(null);
      }
    };

    fetchBook();
  }, [slug]);

  const allImages = useMemo(() => {
    if (!book) return [];
    const coverUrl = book.cover;
    const galleryUrls = (book.gallery || [])
      .map((img) => img?.url)
      .filter(Boolean);
    const images = [coverUrl, ...galleryUrls].filter(Boolean);
    return [...new Set(images)];
  }, [book]);

  useEffect(() => {
    setSelectedImage(0);
  }, [slug]);

  if (!book) return <Loader text="Laster inn bok..." />;

  const activeImage = allImages[selectedImage] || book.cover;
  const isBundle = book?.isBundle;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7c2d1] via-white to-[#ffffff] text-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* <Link
          to="/"
          className="bg-white/40 py-2 px-4 rounded-lg shadow inline-flex items-center gap-2 text-base  text-[#d63772] hover:text-pink-800 transition-colors mb-8 "
        >
          <span className="text-2xl text-center">
            <PiArrowCircleLeft />
          </span>
          Til forsiden
        </Link> */}

        <BackButton />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-7 items-start">
          <section className="lg:col-span-6 xl:col-span-7">
            <div className="lg:sticky lg:top-8">
              <div className="rounded-lg backdrop-blur overflow-hidden">
                <div className="sm:h-[500px] flex items-center justify-center ">
                  {activeImage ? (
                    <img
                      src={activeImage}
                      alt={book.title}
                      className="max-h-full max-w-full object-contain rounded-lg"
                    />
                  ) : (
                    <div className="text-zinc-400 text-sm">
                      Ingen bilde tilgjengelig
                    </div>
                  )}
                </div>
              </div>

              {allImages.length > 1 && (
                <div className="mt-4 lg:mt-6">
                  <div className="flex gap-2 overflow-x-auto pb-2 justify-center flex-wrap">
                    {allImages.map((img, idx) => (
                      <button
                        key={`${img}-${idx}`}
                        type="button"
                        onClick={() => setSelectedImage(idx)}
                        className={`relative cursor-pointer h-20 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-300 ${
                          selectedImage === idx
                            ? "border-pink-700"
                            : "border-transparent hover:border-pink-400"
                        }`}
                        aria-label={`Vis bilde ${idx + 1}`}
                      >
                        <img
                          src={img}
                          alt={`Galleri ${idx + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>

          <section className="lg:col-span-6 xl:col-span-5">
            <div className="max-w-7xl">
              {/* <div className="inline-flex items-center rounded-full border border-[#e8ddd3] bg-[#fff8f2] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[#9a6b4f] mb-5">
                {isBundle ? "Bokpakke" : "Diktbok"}
              </div> */}

              <h1 className="text-3xl sm:text-4xl lg:text-5xl pb-4 poppins-bold text-blackdark">
                {book.title}
              </h1>

              {!isBundle && book.year && (
                <div className=" inline-flex items-center rounded-full font-medium pb-2 text-lg  uppercase tracking-[0.18em] text-rose ">
                  <p className=" ">Utgivelsesår: {book.year}</p>
                </div>
              )}

              <div className="mt-2 flex  flex-wrap gap-6">
                {book.price && (
                  <div className="flex flex-row text-center items-center   rounded-lg    py-3   ">
                    <p className="text-base uppercase tracking-[0.18em] text-gray"></p>
                    <Link
                      to="/kontakt"
                      className="btn-base btn-large poppins-medium "
                    >
                      Kontakt og bestill nå
                    </Link>
                    <p className="text-xl sm:text-2xl font-medium text-black pl-4  ">
                      {book.price},- kr
                    </p>
                  </div>
                )}
                {/* <a
                  href="mailto:maritsvensen@gmail.com"
                  className="hover:bg-rosedark bg-rose text-lg text-white shadow-lg rounded-lg py-2 px-7 text-center flex justify-center items-center font-poppins transition"
                >
                  Bestill nå
                </a> */}
              </div>

              <div className="mt-5 rounded-lg border border-zinc-200/80 bg-white/90 p-6 sm:p-8 shadow-[0_18px_45px_rgba(0,0,0,0.06)]">
                <h2 className="text-base uppercase tracking-[0.2em] text-gray mb-4">
                  Kort beskrivelse
                </h2>

                <div className="prose prose-zinc max-w-none poppins-regular">
                  <p className="text-[1.02rem] leading-8 text-black whitespace-pre-line m-0">
                    {book.shortDescription || "Beskrivelse kommer snart."}
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-lg border border-zinc-200/80 bg-white/90 p-6 sm:p-8 shadow-[0_18px_45px_rgba(0,0,0,0.06)]">
                <p className="text-base uppercase tracking-[0.2em] text-gray mb-4">
                  Tema i diktene
                </p>

                {book.occasions?.length > 0 ? (
                  <div className="flex flex-wrap gap-3 poppins-regular">
                    {book.occasions.map((item) => {
                      const entry = occasionMap[item];
                      if (!entry) return null;
                      const Icon = entry.icon;

                      return (
                        <div
                          key={item}
                          className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-black"
                        >
                          <Icon className="text-[#d63772] text-lg" />
                          <span>{entry.label}</span>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <p className="text-[1rem] leading-7 text-gray m-0  font-poppins">
                    ... kommer snart!
                  </p>
                )}
              </div>
            </div>
          </section>

          <div
            className={`lg:col-span-12 grid grid-cols-1 ${
              !isBundle ? "lg:grid-cols-2" : ""
            } gap-6 w-full`}
          >
            <section className="w-full">
              <div className="rounded-lg border border-zinc-200/80 bg-white/90 p-6 sm:p-8 shadow-[0_18px_45px_rgba(0,0,0,0.06)]">
                <h3 className="text-lg uppercase tracking-[0.2em] text-gray mb-4">
                  {isBundle ? "Om pakken og bøkene" : "Om boken"}
                </h3>

                <div className="prose prose-zinc max-w-none">
                  <p className="text-base leading-8 text-black whitespace-pre-line m-0 poppins-regular">
                    {book.longDescription || "Beskrivelse kommer snart."}
                  </p>
                </div>
              </div>
            </section>

            {!isBundle && (
              <section className="w-full text-center">
                <div className="rounded-lg border border-zinc-200/80 bg-white/90 p-6 sm:p-8 shadow-[0_18px_45px_rgba(0,0,0,0.06)]">
                  <p className="text-lg uppercase tracking-[0.2em] text-gray mb-8  font-poppins">
                    Dikt fra boken
                  </p>

                  <div className="prose prose-zinc max-w-none poppins-regular">
                    <p className="text-[1.02rem] leading-8 text-black whitespace-pre-line m-0">
                      {book.poem || "Dikt kommer snart."}
                    </p>
                  </div>
                </div>
              </section>
            )}
          </div>
          {book.reviews?.length > 0 && (
            <section className="lg:col-span-12">
              <div className="rounded-lg border border-zinc-200/80 bg-white/90 p-6 sm:p-8 shadow-[0_18px_45px_rgba(0,0,0,0.06)]">
                <p className="text-[16px] uppercase tracking-[0.2em] text-gray mb-6">
                  Kundeanmeldelser
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 poppins-regular">
                  {book.reviews.map((review, index) => (
                    <div
                      key={`${review.author}-${index}`}
                      className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"
                    >
                      <p className="text-base leading-7 text-black italic">
                        “{review.quote}”
                      </p>
                      <p className="mt-4 text-sm poppins-bold text-rose">
                        – {review.author}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
