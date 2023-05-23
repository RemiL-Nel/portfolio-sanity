import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@sanity/client";

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: true,
  apiVersion: "2021-10-21",
  token: process.env.SANITY_API_TOKEN,
};

const client = createClient(config);

export default async function fetchSocials(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const socials = await client
      .fetch(`*[_type == "social"]`)
      .then((res) => res);

    return res.status(200).json({ socials });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error" });
  }
}
