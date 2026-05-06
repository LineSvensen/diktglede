import { useState, useEffect } from "react";
import { client } from "../../sanityClient";
import ReviewCarousel from "../../Components/ReviewCarousel";
import Loader from "../../Components/Loader/loader";

export default function Kundeomtaler() {
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const query = `*[_type == "testimonial"] | order(date desc) {
      author,
      quote,
      visible,
      date
    }`;

    client
      .fetch(query)
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Feil ved henting av anmeldelser:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl text-rose font-bold mb-12 text-center">
          Kundeomtaler
        </h1>
        <section className="mb-20 ">
          <ReviewCarousel reviews={reviews} autoPlayInterval={5000} />
        </section>

        {/* Gjestebok-seksjon */}
        <section>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <iframe
              src="https://pub16.bravenet.com/guestbook/1300776276/"
              className="w-full h-[2500px] lg:h-[2000px] border-0"
              title="Gjestebok"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals"
            />
          </div>
        </section>
        {/* Karusell-seksjon */}
      </div>
    </div>
  );
}

// import { useState, useEffect } from "react";
// import { client } from "../../sanityClient";

// import ReviewCarousel from "../../Components/ReviewCarousel";
// import Loader from "../../Components/Loader/loader";

// export default function Kundeomtaler() {
//   const [loading, setLoading] = useState(true);
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     const query = `*[_type == "testimonial"] | order(date desc) {
//       author,
//       quote,
//       visible,
//       date
//     }`;

//     client
//       .fetch(query)
//       .then((data) => {
//         setReviews(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Feil ved henting av anmeldelser:", error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <Loader text="Laster inn siden..." />;
//   }

//   return (
//     <div>
//       <h1 className="text-3xl text-rose font-bold mb-4 text-center pt-4">
//         Kundeomtaler
//       </h1>

//       <ReviewCarousel reviews={reviews} autoPlayInterval={5000} />

//       <iframe
//         src="https://pub16.bravenet.com/guestbook/1300776276/"
//         className="w-full h-[700px] border-0"
//         title="Kundeomtaler"
//       />
//     </div>
//   );
// }
