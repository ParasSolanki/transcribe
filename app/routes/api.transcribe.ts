import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { createAPIFileRoute } from "@tanstack/start/api";
import { env } from "~/env";
import { smoothStream, streamText } from "ai";

const google = createGoogleGenerativeAI({
  apiKey: env.GOOGLE_GEMINI_API_KEY,
});

const model = google("gemini-2.0-flash-001");

const YOUTUBE_API_BASE_URL = "https://www.googleapis.com";

export const APIRoute = createAPIFileRoute("/api/transcribe")({
  POST: async ({ request }) => {
    const payload = await request.json();

    if (!payload.url) {
      return new Response("URL is required", { status: 400 });
    }

    const { url } = payload;

    if (!url.includes("youtube.com")) {
      return new Response("Invalid URL", { status: 400 });
    }

    const ytUrl = new URL(url);
    const videoId = ytUrl.searchParams.get("v");

    if (!videoId) {
      return new Response("Invalid URL", { status: 400 });
    }

    const yUrl = new URL("/youtube/v3/videos", YOUTUBE_API_BASE_URL);
    yUrl.searchParams.set("part", "snippet");
    yUrl.searchParams.set("id", videoId);
    yUrl.searchParams.set("key", env.YOUTUBE_API_KEY);

    const response = await fetch(yUrl.toString());

    if (!response.ok) {
      return new Response("Failed to fetch video details", { status: 500 });
    }

    const data = await response.json();

    const cUrl = new URL("/youtube/v3/captions", YOUTUBE_API_BASE_URL);
    cUrl.searchParams.set("part", "snippet");
    cUrl.searchParams.set("videoId", videoId);
    cUrl.searchParams.set("key", env.YOUTUBE_API_KEY);

    console.log(cUrl.toString());

    const cResponse = await fetch(cUrl.toString(), {});

    if (!cResponse.ok) {
      return new Response("Failed to fetch video details", { status: 500 });
    }

    if (!cResponse.ok) {
      return new Response("Failed to fetch video details", { status: 500 });
    }

    const title = data.items[0].snippet.title ?? "";
    const description = data.items[0].snippet.description ?? "";

    const tags = data.items[0].snippet.tags ?? [];

    // const result = await streamText({
    //   model,
    //   prompt: `You are an AI assistant that transcribes youtube videos.

    //   Your task is to transcribe the following youtube video: ${url}

    //   Please follow these guidelines:

    //   - Return the youtube video title and transcript in clean, readable markdown format with timestamps in seconds in brackets.
    //   - Answer in English.
    //   - Aim for clean, readable markdown.
    //   - Do not include any other text than the transcript.

    //   Output:

    //   ## Title
    //   ${url}
    //   \`\`\`markdown

    //   \`\`\`
    //   `,
    // });
    const result = await streamText({
      model,
      experimental_transform: smoothStream(),
      system: `You are an AI assistant that genarates youtube videos chapters.

      Your task is to genarate chapters for the given youtube video url.
      
      Please follow these guidelines:

      - Return the youtube video title and chapters in clean, readable markdown format with timestamps in seconds in brackets.
      - Answer in English.
      - Aim for clean, readable markdown.
      - Do not include same chapter name twice.
      `,
      messages: [
        {
          role: "system",
          content: `
            Here is the title of the youtube video: ${title}
            Here is the description of the youtube video: ${description}
            Here are the tags of the youtube video: ${tags.join(", ")}
          `,
        },
        {
          role: "user",
          content: `Your task is to genarate chapters for the following youtube video: ${url}

  
      Output:
      
      ## Title
      ${url}
      \`\`\`markdown
  
      \`\`\`
        `,
        },
      ],
    });

    return new Response(result.textStream, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  },
});
