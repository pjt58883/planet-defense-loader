import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Planet Defense — Hex Planet Tower Defense" },
      {
        name: "description",
        content:
          "Defend a rotating hex planet: build turrets, hold the line against incoming waves, and survive the motherships.",
      },
      { property: "og:title", content: "Planet Defense — Hex Planet Tower Defense" },
      {
        property: "og:description",
        content:
          "Build turrets on a rotating hex planet and survive escalating waves in this 3D tower defense.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  // dvh, not vh: 100vh overflows the visible viewport behind mobile
  // browser toolbars and would clip the game's bottom build bar
  return (
    <main className="h-dvh w-screen overflow-hidden bg-background">
      <h1 className="sr-only">Planet Defense</h1>
      <iframe
        src="/game.html"
        title="Planet Defense game"
        className="h-full w-full border-0"
        allow="fullscreen"
      />
    </main>
  );
}
