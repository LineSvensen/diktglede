import { useState, useEffect } from "react";
import { client } from "../../sanityClient";
import ReviewCarousel from "../../Components/ReviewCarousel";
import Loader from "../../Components/Loader/loader";

export default function Kundeomtaler() {
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [guestbookMessages, setGuestbookMessages] = useState([]);
  const [sending, setSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  async function fetchGuestbookMessages() {
    const guestbookQuery = `*[_type == "guestbookMessage" && approved == true]
    | order(_createdAt desc) {
      _id,
      name,
      message,
      reply,
      _createdAt
    }`;

    try {
      const data = await client.fetch(guestbookQuery);
      setGuestbookMessages(data);
    } catch (error) {
      console.error("Feil ved henting av gjestebok:", error);
    }
  }

  useEffect(() => {
    fetchGuestbookMessages();
  }, []);

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

    setSending(true);
    setStatusMessage("");

    try {
      const response = await fetch("/api/guestbook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error("Kunne ikke sende hilsen");
      }

      setName("");
      setMessage("");

      setStatusMessage(
        "Tusen takk for hilsenen! Den vises når den er godkjent.",
      );

      await fetchGuestbookMessages();
    } catch (error) {
      console.error("Feil ved sending av hilsen:", error);
      setStatusMessage("Oi! Noe gikk galt. Prøv igjen om litt.");
    } finally {
      setSending(false);
    }
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

        <div className="mt-12 space-y-4">
          {guestbookMessages.map((item) => (
            <article key={item._id} className="rounded-xl bg-white p-5 shadow">
              <p className="text-sm text-gray-400 mb-2">
                {new Date(item._createdAt).toLocaleDateString("no-NO", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>

              <p className="mb-3">{item.message}</p>

              <p className="text-sm text-gray-500">– {item.name}</p>

              {item.reply && (
                <div className="mt-4 rounded-lg bg-pink-50 p-4">
                  <p className="text-sm font-semibold text-rose mb-1">
                    Svar fra Marit
                  </p>
                  <p>{item.reply}</p>
                </div>
              )}
            </article>
          ))}
        </div>

        <section className="max-w-2xl mx-auto mt-12">
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
              disabled={sending}
              className="bg-rose text-white px-6 py-3 rounded-lg disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {sending ? "Sender..." : "Send hilsen"}
            </button>

            {statusMessage && (
              <div className="rounded-xl bg-pink-50 border border-rose/20 px-4 py-3 text-sm text-coal">
                {statusMessage}
              </div>
            )}
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
