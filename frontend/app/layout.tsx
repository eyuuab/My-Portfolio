import './globals.css';

export const metadata = {
  title: "My Portfolio",
  description: "A portfolio built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Add Header and Footer here if needed */}
        {children}
      </body>
    </html>
  );
}
