import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "6ds9sc55", // 👈 your Project ID from sanity.io
  dataset: "production",
  apiVersion: "2025-01-01", // use a date, not "v1"
  useCdn: true,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
