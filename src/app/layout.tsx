import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'], variable: '--font-sans'});
const calistoga = Calistoga({ subsets: ['latin'], variable: '--font-serif', weight: ['400']});

export const metadata: Metadata = {
  title: "FarisFebrian - Fullstack Web Developer | Portfolio",
  description: "I'm Faris Febrian, a Fullstack Web Developer specializing in backend and frontend technologies like React JS, TypeScript, and Next.js. Explore my projects and work with me on your next freelance project.",
  keywords: [
    "developer", "freelance", "fullstack", "portfolio", "backend", "React JS", "TypeScript", "web developer", "software engineer", "Next.js", "Prisma ORM", "MySQL", "Curaweda", "PT Curaweda"
  ],
  authors: [
    {
      name: "Faris Febrian",
      url: "https://farisfebrian.vercel.app"  // Optional: add a URL to your profile or portfolio
    }
  ],
  openGraph: {
    title: "FarisFebrian - Fullstack Web Developer",
    description: "Explore the portfolio of Faris Febrian, a skilled Fullstack Web Developer with expertise in React JS, TypeScript, and backend development.",
    images: ["https://gcdnb.pbrd.co/images/QRpmLlvFFEcl.png?o=1"], // Array of image URLs
    url: "https://farisfebrian.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    site: "https://farisfebrian.vercel.app",
    title: "FarisFebrian - Fullstack Web Developer",
    description: "Explore my projects and services as a Fullstack Web Developer specializing in React JS, TypeScript, and backend development.",
    images: ["https://gcdnb.pbrd.co/images/QRpmLlvFFEcl.png?o=1"], // Array of image URLs
  }
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />  {/* Encourage search engines to index the site */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />  {/* Mobile optimization */}
      </head>
      <body className={twMerge(inter.variable, calistoga.variable, "bg-gray-900 text-white antialiased font-sans")}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
