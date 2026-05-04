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
    <div className="max-w-5xl mx-auto p-4 sm:p-8 poppins-regular">
      {/* First section - stands out */}
      <div className="flex flex-col lg:flex-row gap-12 justify-center items-center text-center lg:text-left mb-16">
        <div>
          <h1 className="text-4xl poppins-bold text-rose pb-2 mb-4 lg:pl-8">
            Om Marit
          </h1>
          <p className="text-black px-8 text-lg poppins-regular whitespace-normal [overflow-wrap:anywhere]">
            {sections[0].bio}
          </p>
        </div>
        {sections[0].image && (
          <img
            src={urlFor(sections[0].image).width(500).url()}
            alt={sections[0].image.alt || "Marit"}
            className="rounded-lg sm:w-1/2"
          />
        )}
      </div>

      {/* Remaining 4 sections */}
      <div className="flex flex-col gap-16">
        {sections.slice(1).map((section, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row gap-12 justify-center items-center text-center lg:text-left ${
              index % 2 === 0 ? "lg:flex-row-reverse" : ""
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
