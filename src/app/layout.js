import localFont from "next/font/local";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import '../styles/globals.scss'; // Tus estilos personalizados
import { ThemeProvider } from './context/ThemeContext';

const links=[{
  label:'Home',
  route:'/'
},
{
  label:'Notificaciones',
  route:'/notificaciones'
}]

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Mi aplicacion",
  description: "Aplicacion con temas dinamicos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header>
          <nav>
            <ul>
              {links.map(({label, route})=>(
                <li key={route}>
                  <Link href={route}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
