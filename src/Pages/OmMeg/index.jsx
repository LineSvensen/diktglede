import { useEffect, useState } from "react";
import { client, urlFor } from "../../sanityClient";
import bildeMarit from "../../assets/maritnybok.jpeg";
import { SanityClient } from "@sanity/client";

export default function OmMeg() {
  const [aboutMe, setAboutMe] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "aboutMe"][0]{
        bio,
        image{
          asset,
          alt
          }
        }`,
      )
      .then((data) => setAboutMe(data))
      .catch(console.error);
  }, []);

  if (!aboutMe) return <p>Laster...</p>;
  const cleanBio = aboutMe.bio
    ?.replace(/[\u00A0\u2000-\u200B\u202F\u205F\u3000]/g, " ")
    ?.trim();

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-8">
      <div className="flex flex-col  lg:flex-row gap-12 justify-center items-center text-center lg:text-left">
        <div>
          <h1 className="text-3xl font-bold text-[#d63772] mb-4 pb-2 lg:pl-8">
            Om Marit
          </h1>
          <p className="text-gray-700 px-8 whitespace-normal [overflow-wrap:anywhere]">
            {cleanBio}
          </p>
        </div>
        {aboutMe.image && (
          <img
            src={urlFor(aboutMe.image).width(500).url()}
            alt={aboutMe.image.alt || "Marit"}
            className="rounded-lg sm:w-1/2 "
          ></img>
        )}
      </div>
    </div>
  );
}
