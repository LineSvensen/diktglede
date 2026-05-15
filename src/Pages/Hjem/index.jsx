import { useState, useEffect } from "react";
import Loader from "../../Components/Loader/loader";
import HeroCarousel from "../../Components/HeroCarousel";
import roseTwo from "../../assets/rose-e.webp";
import roseThree from "../../assets/rose-g.webp";
import BookList from "../../Components/BookList";

export default function Hjem() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [minTimePassed, setMinTimePassed] = useState(false);

  const loading = !pageLoaded || !minTimePassed;

  useEffect(() => {
    const timer = setTimeout(() => {
      setMinTimePassed(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleLoad = () => {
      setPageLoaded(true);
    };

    if (document.readyState === "complete") {
      setPageLoaded(true);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      {loading && <Loader />}

      <div className="max-w-7xl mx-auto p-4 mb-8">
        <div className="relative">
          <img
            src={roseThree}
            alt="rose"
            className="
              pointer-events-none
              absolute top-0 right-0 z-20
              w-[50px] translate-x-3 sm:w-[140px] lg:w-[116px]
              -translate-y-3 sm:translate-x-9 md:translate-x-8
              object-contain
            "
          />

          <img
            src={roseTwo}
            alt="rose"
            className="
              pointer-events-none
              absolute bottom-0 left-0 z-20
              w-[50px] sm:w-[70px] lg:w-[120px] xl:w-[140px]
              translate-y-3 sm:translate-y-5 -translate-x-3 lg:-translate-x-8
              object-contain
            "
          />

          <HeroCarousel />
        </div>

        <div className="flex justify-center flex-col items-center">
          <h2 className="text-xl sm:text-2xl poppins-regular text-[#d63772] mt-6 lg:mb-6 lg:mt-10">
            Alle diktbøkene
          </h2>

          <section className="mt-4 w-full">
            <BookList />
          </section>
        </div>
      </div>
    </>
  );
}

// import { useState, useEffect } from "react";
// import Loader from "../../Components/Loader/loader";
// import HeroCarousel from "../../Components/HeroCarousel";
// import ProductCard from "../../Components/ProductCard";
// import { client } from "../../sanityClient";
// import roseTwo from "../../assets/rose-e.webp";
// import roseThree from "../../assets/rose-g.webp";
// import BookList from "../../Components/BookList";

// export default function Hjem() {
//   const [dataLoaded, setDataLoaded] = useState(false);
//   const [pageLoaded, setPageLoaded] = useState(false);
//   const [minTimePassed, setMinTimePassed] = useState(false);
//   const [books, setBooks] = useState([]);

//   const loading = !dataLoaded || !pageLoaded || !minTimePassed;

//   // Minimum loader time
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setMinTimePassed(true);
//     }, 500);

//     return () => clearTimeout(timer);
//   }, []);

//   // Wait for whole page/assets to load
//   useEffect(() => {
//     const handleLoad = () => {
//       setPageLoaded(true);
//     };

//     if (document.readyState === "complete") {
//       setPageLoaded(true);
//     } else {
//       window.addEventListener("load", handleLoad);
//     }

//     return () => {
//       window.removeEventListener("load", handleLoad);
//     };
//   }, []);

//   // Fetch Sanity books
//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         const data = await client.fetch(`
//           *[_type == "book" && available == true] | order(year desc)[0...50] {
//             _id,
//             title,
//             "slug": slug.current,
//             shortDescription,
//             price,
//             year,
//             isBundle,
//             cover,
//             available
//           }
//         `);

//         setBooks(data);
//       } catch (error) {
//         console.error("Kunne ikke hente bøker:", error);
//       } finally {
//         setDataLoaded(true);
//       }
//     };

//     fetchBooks();
//   }, []);

//   return (
//     <>
//       {loading && <Loader />}

//       <div className="max-w-7xl mx-auto p-4 mb-8">
//         <div className="relative">
//           <img
//             src={roseThree}
//             alt="rose"
//             className="
//               pointer-events-none
//               absolute top-0 right-0 z-20
//               w-[50px] translate-x-3 sm:w-[140px] lg:w-[116px]
//               -translate-y-3 sm:translate-x-9 md:translate-x-8
//               object-contain
//             "
//           />

//           <img
//             src={roseTwo}
//             alt="rose"
//             className="
//               pointer-events-none
//               absolute bottom-0 left-0 z-20
//               w-[50px] sm:w-[70px] lg:w-[120px] xl:w-[140px]
//               translate-y-3 sm:translate-y-5 -translate-x-3 lg:-translate-x-8
//               object-contain
//             "
//           />

//           <HeroCarousel />
//         </div>

//         <div className="flex justify-center flex-col items-center">
//           <h2 className="text-xl sm:text-2xl poppins-regular text-[#d63772] mt-6 lg:mb-6 lg:mt-10">
//             Alle diktbøkene
//           </h2>

//           <section className="mt-4">
//             <BookList books={books} />
//           </section>
//         </div>
//       </div>
//     </>
//   );
// }
