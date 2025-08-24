import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "Leaf.io — Finance you’ll actually keep",
  description: "Lumi helps you build money habits you love.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
