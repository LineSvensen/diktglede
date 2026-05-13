import { useEffect, useState } from "react";
import { client, urlFor } from "../../sanityClient";
import Loader from "../../Components/Loader/loader";

export default function Presse() {
  const [presse, setPresse] = useState([]);
  const [selectedImg, setSelectedImg] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "presse"] | order(_createdAt desc) {
        title,
        description,
        type,
        images[]{
          asset,
          alt
        },
        videos[]{
          asset->
        }
      }`,
      )
      .then((data) => {
        console.log("data:", data);
        setPresse(data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("fetch failed:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="mx-auto p-4 sm:p-8 flex flex-col  justify-center items-center text-black bg-antiquePink pb-8 poppins-regular">
      <h1 className="text-3xl sm:text-4xl font-bold poppins-bold text-rose mb-4">
        Presse
      </h1>

      {presse.map((section, i) => (
        <div
          key={i}
          className="flex flex-col   items-center w-full max-w-7xl mb-8"
        >
          <h2 className="p-4 text-2xl mt-4 mb-2">{section.title}</h2>
          {section.description && (
            <p className="text-center mb-4 max-w-2xl">{section.description}</p>
          )}

          {section.type === "video" && (
            <div className="flex flex-col sm:flex-row gap-4">
              {section.videos?.map((vid, j) => (
                <video
                  key={j}
                  controls
                  className="w-full min-w-[300px] max-w-[800px] rounded-lg"
                >
                  <source src={vid.asset.url} type="video/mp4" />
                </video>
              ))}
            </div>
          )}

          {section.type === "bilder" && (
            <div className="masonry w-full ">
              {section.images?.map((img, j) => (
                <img
                  key={j}
                  src={urlFor(img).url()}
                  alt={img.alt || ""}
                  onClick={() => setSelectedImg(img)}
                  className="w-full rounded-xl mb-3 break-inside-avoid cursor-pointer hover:opacity-90 transition-opacity "
                />
              ))}
            </div>
          )}
        </div>
      ))}

      {selectedImg && (
        <div
          onClick={() => setSelectedImg(null)}
          className="fixed inset-0 bg-blackdark/90 flex items-center justify-center z-50 p-4"
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
            src={urlFor(selectedImg).url()}
            alt={selectedImg.alt || ""}
            className="max-w-full max-h-full rounded-xl object-contain"
          />
        </div>
      )}
    </div>
  );
}

// import { useState } from "react";
// // done
// import vidOne from "../../assets/maritleseropp.mp4";
// import vidTwo from "../../assets/marittale.mp4";

// // done
// import sterkiblad from "../../assets/sterkiblad.jpg";
// import engleriblad from "../../assets/engleriblad.jpg";
// import detlillebarnetavis from "../../assets/detlillebarnetavis.jpg";
// import spaniablad from "../../assets/spaniablad.jpg";
// import spaniablad2 from "../../assets/spaniablad2.jpg";
// import postergirl from "../../assets/postergirl.jpg";
// import avis1 from "../../assets/avis1.jpg";
// import avis2 from "../../assets/avis2.jpg";
// import jegkannoeblad from "../../assets/jegkannoeblad.jpg";
// import spaniablad3 from "../../assets/spaniablad3.jpg";
// import gaamedmegblad from "../../assets/gaamedmegblad.jpg";
// import medsorgblad from "../../assets/medsorgblad.jpg";
// import gaamedmegblad2 from "../../assets/gaamedmegblad2.jpg";
// import nydiktsamling from "../../assets/nydiktsamling.jpg";
// //done
// import herlighed from "../../assets/herlighed.jpg";
// import lansering1 from "../../assets/lansering1.jpg";
// import lansering2 from "../../assets/lansering2.jpg";
// import boktreff from "../../assets/boktreff.jpg";
// import nybokpapir from "../../assets/nybokpapir.jpg";
// import lanseringvennskap from "../../assets/lanseringvennskap.jpg";

// import baremarit1 from "../../assets/baremarit1.jpg";

// //done
// import utstillingasker from "../../assets/utstillingasker.jpg";
// import utstillingasker2 from "../../assets/utstillingasker2.jpg";
// import utstillingkirke1 from "../../assets/utstillingkirke1.jpg";

// // done
// import spaniautstilling from "../../assets/spaniautstilling.jpg";
// import spaniautstilling2 from "../../assets/spaniautstilling2.jpg";
// import spaniautstilling3 from "../../assets/spaniautstilling3.jpg";
// import spaniautstilling4 from "../../assets/spaniautstilling4.jpg";
// import spaniautstilling5 from "../../assets/spaniautstilling5.jpg";
// import spaniautstilling7 from "../../assets/spaniautstilling7.jpg";
// import spaniautstilling8 from "../../assets/spaniautstilling8.jpg";
// import spaniautstilling9 from "../../assets/spaniautstilling9.jpg";

// // done
// import diktkveld1 from "../../assets/diktkveld1.jpg";
// import diktkveld11 from "../../assets/diktkveld11.jpg";
// import diktkveld111 from "../../assets/diktkveld111.jpg";
// import diktkveld1111 from "../../assets/diktkveld1111.jpg";
// import diktkveld11111 from "../../assets/diktkveld11111.jpg";
// import diktkveld111111 from "../../assets/diktkveld111111.jpg";
// import diktkveld1111111 from "../../assets/diktkveld1111111.jpg";

// const gallerySpania = [
//   { src: spaniautstilling, alt: "spania-utstilling" },
//   { src: spaniautstilling2, alt: "spania-utstilling" },
//   { src: spaniautstilling3, alt: "spania-utstilling" },
//   { src: spaniautstilling4, alt: "spania-utstilling" },
//   { src: spaniautstilling5, alt: "spania-utstilling" },
//   { src: spaniautstilling7, alt: "spania-utstilling" },
//   { src: spaniautstilling8, alt: "spania-utstilling" },
//   { src: spaniautstilling9, alt: "spania-utstilling" },
// ];

// const galleryPaper = [
//   { src: sterkiblad, alt: "dikt-i-blad" },
//   { src: engleriblad, alt: "dikt-i-blad" },
//   { src: gaamedmegblad, alt: "dikt-i-blad" },
//   { src: detlillebarnetavis, alt: "dikt-i-blad" },
//   { src: spaniablad, alt: "dikt-i-blad" },
//   { src: spaniablad2, alt: "dikt-i-blad" },
//   { src: postergirl, alt: "dikt-i-blad" },
//   { src: medsorgblad, alt: "dikt-i-blad" },
//   { src: gaamedmegblad2, alt: "dikt-i-blad" },
//   { src: avis1, alt: "dikt-i-blad" },
//   { src: avis2, alt: "dikt-i-blad" },
//   { src: jegkannoeblad, alt: "dikt-i-blad" },
//   { src: spaniablad3, alt: "dikt-i-blad" },
//   { src: nydiktsamling, alt: "dikt-i-blad" },
// ];

// const galleryDiktkvelder = [
//   { src: diktkveld1, alt: "diktkvelder" },
//   { src: diktkveld11, alt: "diktkvelder" },
//   { src: diktkveld11111, alt: "diktkvelder" },
//   { src: diktkveld111, alt: "diktkvelder" },
//   { src: diktkveld1111111, alt: "diktkvelder" },
//   { src: diktkveld1111, alt: "diktkvelder" },
//   { src: diktkveld111111, alt: "diktkvelder" },
// ];

// const galleryUtstillinger = [
//   { src: utstillingasker, alt: "Utstillinger" },
//   { src: utstillingasker2, alt: "Utstillinger" },
//   { src: utstillingkirke1, alt: "Utstillinger" },
// ];

// const galleryLanseringer = [
//   { src: herlighed, alt: "Lanseringer" },
//   { src: lansering1, alt: "Lanseringer" },
//   { src: lansering2, alt: "Lanseringer" },
//   { src: boktreff, alt: "Lanseringer" },
//   { src: nybokpapir, alt: "Lanseringer" },
//   { src: lanseringvennskap, alt: "Lanseringer" },
// ];

// export default function Presse() {
//   const [selectedImg, setSelectedImg] = useState(null);
//   return (
//     <div className="mx-auto p-4 sm:p-8 flex flex-col justify-center items-center text-black bg-antiquePink pb-8 poppins-regular">
//       <h1 className="text-3xl sm:text-4xl font-bold poppins-bold text-rose mb-4">
//         Presse
//       </h1>

//       <div className="flex flex-col  items-center w-full max-w-7xl mb-8 ">
//         <h2 className="p-4   text-2xl mt-4">Video</h2>
//         <div className="flex flex-col sm:flex-row gap-4">
//           <video
//             controls
//             className="w-full min-w-[300px] max-w-[800px] rounded-lg"
//           >
//             <source src={vidOne} type="video/mp4" />
//           </video>
//           <video
//             controls
//             className="w-full min-w-[300px] max-w-[800px] rounded-lg"
//           >
//             <source src={vidTwo} type="video/mp4" />
//           </video>
//         </div>
//       </div>

//       <div className="flex flex-col items-center w-full max-w-7xl mb-8">
//         <h2 className="p-4  text-2xl mt-4 mb-2">
//           Avisartikler og dikt i blad
//         </h2>

//         <div className="masonry w-full">
//           {galleryPaper.map((img, i) => (
//             <img
//               key={i}
//               src={img.src}
//               alt={img.alt}
//               onClick={() => setSelectedImg(img)}
//               className="w-full rounded-xl mb-3 break-inside-avoid cursor-pointer hover:opacity-90 transition-opacity"
//             />
//           ))}
//         </div>
//       </div>

//       <div className="flex flex-col items-center w-full max-w-7xl mb-8">
//         <h2 className="p-4  text-2xl mt-4 mb-2">
//           Lanseringer
//         </h2>

//         <div className="masonry w-full">
//           {galleryLanseringer.map((img, i) => (
//             <img
//               key={i}
//               src={img.src}
//               alt={img.alt}
//               onClick={() => setSelectedImg(img)}
//               className="w-full rounded-xl mb-3 break-inside-avoid cursor-pointer hover:opacity-90 transition-opacity"
//             />
//           ))}
//         </div>
//       </div>

//       <div className="flex flex-col items-center w-full max-w-7xl mb-8">
//         <h2 className="p-4 text-2xl mt-4 mb-2">
//           Spania utstilling
//         </h2>

//         <div className="masonry w-full">
//           {gallerySpania.map((img, i) => (
//             <img
//               key={i}
//               src={img.src}
//               alt={img.alt}
//               onClick={() => setSelectedImg(img)}
//               className="w-full rounded-xl mb-3 break-inside-avoid cursor-pointer hover:opacity-90 transition-opacity"
//             />
//           ))}
//         </div>
//       </div>

//       <div className="flex flex-col items-center w-full max-w-7xl mb-8">
//         <h2 className="p-4  text-2xl mt-4 mb-2">
//           Dikt-kvelder
//         </h2>

//         <div className="masonry w-full">
//           {galleryDiktkvelder.map((img, i) => (
//             <img
//               key={i}
//               src={img.src}
//               alt={img.alt}
//               onClick={() => setSelectedImg(img)}
//               className="w-full rounded-xl mb-3 break-inside-avoid cursor-pointer hover:opacity-90 transition-opacity"
//             />
//           ))}
//         </div>
//       </div>

//       <div className="flex flex-col items-center w-full max-w-7xl">
//         <h2 className="p-4  text-2xl mt-4 mb-2">
//           Diverse utstillinger og diktlesing
//         </h2>

//         <div className="masonry w-full">
//           {galleryUtstillinger.map((img, i) => (
//             <img
//               key={i}
//               src={img.src}
//               alt={img.alt}
//               onClick={() => setSelectedImg(img)}
//               className="w-full rounded-xl mb-3 break-inside-avoid cursor-pointer hover:opacity-90 transition-opacity"
//             />
//           ))}
//         </div>
//       </div>

//       {selectedImg && (
//         <div
//           onClick={() => setSelectedImg(null)}
//           className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
//         >
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               setSelectedImg(null);
//             }}
//             className="absolute top-2 sm:top-8 right-6 sm:right-16 text-white text-5xl leading-none hover:text-gray-300 transition-colors cursor-pointer"
//           >
//             x
//           </button>
//           <img
//             src={selectedImg.src}
//             alt={selectedImg.alt}
//             className="max-w-full max-h-full rounded-xl object-contain"
//           ></img>
//         </div>
//       )}
//     </div>
//   );
// }
