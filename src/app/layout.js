import "./globals.css";

export const metadata = {
  title: "Glen Elric — Data Science Engineer",
  description:
    "Computer Science & Data Science student specializing in machine learning, data analytics, and AI-powered applications. Building intelligent systems through code and data.",
  keywords: [
    "Glen Elric",
    "Data Science",
    "Machine Learning",
    "Portfolio",
    "AI",
    "Full Stack Developer",
    "AI/ML Engineer"
  ],
  openGraph: {
    title: "Glen Elric -Data Science Engineer",
    description:
      "Computer Science & Data Science student building intelligent systems through code and data.",
    url: "https://www.glenelric.space",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/mascot.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
