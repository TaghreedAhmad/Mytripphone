import { createFileRoute, redirect } from "@tanstack/react-router";

// The campaign lives at /lost-phone; the bare root forwards there.
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "الجوال الضايع | MyTrip" },
      { name: "description", content: "MyTrip: رحلتك كلها في مكان واحد." },
      { property: "og:title", content: "الجوال الضايع | MyTrip" },
      { property: "og:description", content: "MyTrip: رحلتك كلها في مكان واحد." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  beforeLoad: () => {
    throw redirect({ to: "/lost-phone" });
  },
});
