import '../index.css';

export const metadata = {
  title: 'Prueba Login - Next.js',
  description: 'Sistema de Login',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}