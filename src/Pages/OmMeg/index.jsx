import { useEffect, useState } from "react";
import { client, urlFor } from "../../sanityClient";
// import bildeMarit from "../../assets/maritnybok.jpeg";
// import { SanityClient } from "@sanity/client";

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
        },
        moreBio,
        imageTwo{
          asset,
          alt
        },
        bioThree,
        imageThree{
          asset,
          alt
        },
        bioFour,
        imageFour{
          asset,
          alt
        },
        bioFive,
        imageFive{
          asset,
          alt
        }
        }`,
      )
      .then((data) => setAboutMe(data))
      .catch(console.error);
  }, []);

  if (!aboutMe) return <p>Laster...</p>;
  const clean = (text) =>
    text?.replace(/[\u00A0\u2000-\u200B\u202F\u205F\u3000]/g, " ")?.trim();

  const sections = [
    { bio: clean(aboutMe.bio), image: aboutMe.image },
    { bio: clean(aboutMe.moreBio), image: aboutMe.imageTwo },
    { bio: clean(aboutMe.bioThree), image: aboutMe.imageThree },
    { bio: clean(aboutMe.bioFour), image: aboutMe.imageFour },
    { bio: clean(aboutMe.bioFive), image: aboutMe.imageFive },
  ];

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-8">
      <h1 className="text-3xl font-bold text-[#d63772] mb-8 text-center lg:text-left lg:pl-8">
        Om Marit
      </h1>
      <div className="flex flex-col gap-16">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row gap-12 justify-center items-center text-center lg:text-left ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {section.bio && (
              <p className="text-black px-8 whitespace-normal [overflow-wrap:anywhere] lg:w-1/2">
                {section.bio}
              </p>
            )}
            {section.image && (
              <img
                src={urlFor(section.image).width(500).url()}
                alt={section.image.alt || "Marit"}
                className="rounded-lg sm:w-1/2"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
