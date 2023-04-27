import "@/styles/globals.scss";

import localFont from "next/font/local";

const font = localFont({
  display: "swap",
  src: [
    {
      path: "../public/assets/fonts/static/HankenGrotesk-Medium.ttf",
      weight: "500",
    },
    {
      path: "../public/assets/fonts/static/HankenGrotesk-Bold.ttf",
      weight: "700",
    },
    {
      path: "../public/assets/fonts/static/HankenGrotesk-ExtraBold.ttf",
      weight: "800",
    },
  ],
});

export const metadata = {
  description: "Frontend Mentor | Results summary component",
  title: "Frontend Mentor | Results summary component",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={font.className} lang="en">
      <head>
        <link
          href="./assets/images/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
