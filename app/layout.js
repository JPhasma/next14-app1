import './globals.css';

export const metadata = {
  title: 'App1',
  description: 'From NextJS 14 Udemy course by Mohamed Hajji',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>Header
        {children}
        Footer
      </body>
    </html>
  );
}
