import '@/app/globals.css'

export const metadata = {
  title: "IABOT - Robótica Educativa y Capacitaciones para Docentes",
  description: "IABOT es una empresa dedicada a la robótica educativa y a la capacitación de docentes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
