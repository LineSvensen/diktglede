import { useState } from "react";

import vidOne from "../../assets/maritleseropp.mp4";

import herlighed from "../../assets/herlighed.jpg";
import nydiktsamling from "../../assets/nydiktsamling.jpg";
import sterkiblad from "../../assets/sterkiblad.jpg";
import engleriblad from "../../assets/engleriblad.jpg";
import detlillebarnetavis from "../../assets/detlillebarnetavis.jpg";
import spaniablad from "../../assets/spaniablad.jpg";
import spaniablad2 from "../../assets/spaniablad2.jpg";
import spaniautstilling from "../../assets/spaniautstilling.jpg";

import postergirl from "../../assets/postergirl.jpg";
import avis1 from "../../assets/avis1.jpg";
import avis2 from "../../assets/avis2.jpg";
import jegkannoeblad from "../../assets/jegkannoeblad.jpg";
import boktreff from "../../assets/boktreff.jpg";
import spaniablad3 from "../../assets/spaniablad3.jpg";
import lansering1 from "../../assets/lansering1.jpg";
import lansering2 from "../../assets/lansering2.jpg";

import utstillingasker from "../../assets/utstillingasker.jpg";
import utstillingasker2 from "../../assets/utstillingasker2.jpg";
import baremarit1 from "../../assets/baremarit1.jpg";
import spaniautstilling2 from "../../assets/spaniautstilling2.jpg";
import spaniautstilling3 from "../../assets/spaniautstilling3.jpg";
import spaniautstilling4 from "../../assets/spaniautstilling4.jpg";
import spaniautstilling5 from "../../assets/spaniautstilling5.jpg";
import spaniautstilling7 from "../../assets/spaniautstilling7.jpg";

import spaniautstilling8 from "../../assets/spaniautstilling8.jpg";
import spaniautstilling9 from "../../assets/spaniautstilling9.jpg";
import utstillingkirke1 from "../../assets/utstillingkirke1.jpg";
import diktkveld1 from "../../assets/diktkveld1.jpg";
import diktkveld11 from "../../assets/diktkveld11.jpg";
import diktkveld111 from "../../assets/diktkveld111.jpg";

import diktkveld1111 from "../../assets/diktkveld1111.jpg";
import diktkveld11111 from "../../assets/diktkveld11111.jpg";
import nybokpapir from "../../assets/nybokpapir.jpg";
import lanseringvennskap from "../../assets/lanseringvennskap.jpg";
import gaamedmegblad from "../../assets/gaamedmegblad.jpg";
import medsorgblad from "../../assets/medsorgblad.jpg";
import gaamedmegblad2 from "../../assets/gaamedmegblad2.jpg";

const galleryImages = [
  { src: spaniautstilling, alt: "spania-utstilling" },
  { src: spaniablad, alt: "spania-blad" },
  { src: spaniablad2, alt: "spania-blad" },
  { src: spaniautstilling2, alt: "spania-utstilling" },
  { src: spaniautstilling3, alt: "spania-utstilling" },
  { src: spaniautstilling4, alt: "spania-utstilling" },
  { src: spaniautstilling5, alt: "spania-utstilling" },
  { src: spaniautstilling7, alt: "spania-utstilling" },
  { src: spaniautstilling8, alt: "spania-utstilling" },
  { src: spaniautstilling9, alt: "spania-utstilling" },
];

export default function Presse() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="mx-auto p-4 sm:p-8 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Presse</h1>
      <p className="text-gray-700">hmm</p>
      <video controls className="w-full max-w-[500px]">
        <source src={vidOne} type="video/mp4" />
      </video>

      <div className="flex flex-col items-center w-full max-w-7xl">
        <h2 className="p-4 font-poppins font-bold text-2xl mt-4">
          Spania utstilling
        </h2>

        {/* Cover image */}
        {/* <img
          src={spaniautstilling9}
          alt="spania-utstilling cover"
          className="w-full max-h-[400px] object-cover rounded-xl mb-4"
        /> */}

        <div className="masonry w-full">
          {galleryImages.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={img.alt}
              onClick={() => setSelectedImg(img)}
              className="w-full rounded-xl mb-3 break-inside-avoid cursor-pointer hover:opacity-90 transition-opacity"
            />
          ))}
        </div>
      </div>
      {selectedImg && (
        <div
          onClick={() => setSelectedImg(null)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImg(null);
            }}
            className="absolute top-2 sm:top-8 right-6 sm:right-16 text-white text-5xl leading-none hover:text-gray-300 transition-colors cursor-pointer"
          >
            x
          </button>
          <img
            src={selectedImg.src}
            alt={selectedImg.alt}
            className="max-w-full max-h-full rounded-xl object-contain"
          ></img>
        </div>
      )}
    </div>
  );
}
