import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";

export const metadata: Metadata = {
  title: "Expansion",
  description:
    "Expand your vocabulary with expansion, a thesaurus app powered by the Thesaurus API. Type a word and search for its synonyms. Synonyms are colour-co-ordinated.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="Expand your vocabulary with expansion, a thesaurus app powered by the Thesaurus API. Type a word and search for its synonyms. Synonyms are colour-coordinated."
          />
          <meta property="og:title" content="Expansion" />
          <meta
            property="og:description"
            content="Expand your vocabulary with Expansion, a thesaurus app powered by the Thesaurus API."
          />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="URL_TO_YOUR_IMAGE" />
        </Head>
        <body className="font-body">{children}</body>
      </html>
    </>
  );
}
