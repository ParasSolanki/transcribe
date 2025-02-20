import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { DefaultCatchBoundary } from "~/components/default-catch-boundary";
import { NotFound } from "~/components/not-found";
import globalCss from "~/styles/global.css?url";
import * as React from "react";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Transcribe",
      },
      {
        name: "description",
        content: "Transcribe App",
      },
      {
        name: "keywords",
        content: "Transcribe App",
      },
      {
        name: "og:title",
        content: "Transcribe App",
      },
      {
        name: "og:description",
        content: "Transcribe App",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Transcribe App",
      },
      {
        name: "twitter:description",
        content: "Transcribe App",
      },
    ],
    links: [
      { rel: "stylesheet", href: globalCss },
      {
        rel: "preload",
        as: "font",
        type: "font/woff2",
        href: "/fonts/IBMPlexMono-Regular.woff2",
        crossOrigin: "anonymous",
      },
      {
        rel: "preload",
        as: "font",
        type: "font/woff2",
        href: "/fonts/IBMPlexMono-Medium.woff2",
        crossOrigin: "anonymous",
      },
      {
        rel: "preload",
        as: "font",
        type: "font/woff2",
        href: "/fonts/IBMPlexMono-SemiBold.woff2",
        crossOrigin: "anonymous",
      },
      {
        rel: "preload",
        as: "font",
        type: "font/woff2",
        href: "/fonts/IBMPlexMono-Bold.woff2",
        crossOrigin: "anonymous",
      },
    ],
    scripts: [
      {
        crossOrigin: "anonymous",
        src: "//unpkg.com/react-scan/dist/auto.global.js",
      },
    ],
  }),
  component: RootComponent,
  errorComponent: (props) => {
    return (
      <RootDocument>
        <DefaultCatchBoundary {...props} />
      </RootDocument>
    );
  },
  notFoundComponent: () => <NotFound />,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-background text-foreground antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  );
}
