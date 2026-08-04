// import './globals.css';

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   );
// }
//----------------------------------------------------------------------------------

import './globals.css';

export const metadata = {
  title: 'Shahista Inamdar| Content Strategy Specialist',
  description:
    'Portfolio of Shahista Inamdar — content strategy, social media growth, brand storytelling, and creator partnerships.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}