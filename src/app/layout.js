import "./globals.css";

export const metadata = {
  title: "NEXORA — Business intelligence, simplified",
  description: "Explore NEXORA, an interactive SaaS portfolio concept with responsive analytics, revenue charts, and clear business insights. Fictional product and sample data.",
  applicationName: "NEXORA",
  openGraph: {
    title: "NEXORA — Less noise. More clarity.",
    description: "An interactive business intelligence portfolio concept. Explore the dashboard and sample analytics.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "NEXORA — Less noise. More clarity.",
    description: "An interactive SaaS landing page and analytics portfolio concept.",
  },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
