import { useState, useEffect } from "react";
import { client } from "../../sanityClient";
import ReviewCarousel from "../../Components/ReviewCarousel";
import Loader from "../../Components/Loader/loader";

export default function Kundeomtaler() {
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

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

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch("/api/guestbook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        message,
      }),
    });

    setName("");
    setMessage("");

    alert("Hilsen sendt!");
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl text-rose font-bold mb-12 text-center">
          Gjestebok
        </h1>

        <section className="mb-20">
          <ReviewCarousel reviews={reviews} autoPlayInterval={5000} />
        </section>

        {/* NY GJESTEBOK */}
        <section className="max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-lg p-8 space-y-4"
          >
            <input
              type="text"
              placeholder="Navn"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-lg p-3"
              required
            />

            <textarea
              placeholder="Skriv en hilsen"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border rounded-lg p-3 min-h-[150px]"
              required
            />

            <button
              type="submit"
              className="bg-rose text-white px-6 py-3 rounded-lg"
            >
              Send hilsen
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

//FØR MED BRAVENET GUESTBBOOK
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
//     return <Loader />;
//   }

//   return (
//     <div className="min-h-screen ">
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         <h1 className="text-4xl text-rose font-bold mb-12 text-center">
//           Gjestebok
//         </h1>
//         <section className="mb-20 ">
//           <ReviewCarousel reviews={reviews} autoPlayInterval={5000} />
//         </section>

//         {/* Gjestebok-seksjon */}
//         <section>
//           <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
//             <iframe
//               src="https://pub16.bravenet.com/guestbook/1300776276/"
//               className="w-full h-[2500px] lg:h-[2000px] border-0"
//               title="Gjestebok"
//               sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals"
//             />
//           </div>
//         </section>
//         {/* Karusell-seksjon */}
//       </div>
//     </div>
//   );
// }
