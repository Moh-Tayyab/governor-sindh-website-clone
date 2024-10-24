import './globals.css';

export const metadata = {
  title: 'Governor Sindh Website Clone',
  description: 'Next.js and Tailwind CSS example',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
