import Image from 'next/image';
import { Poppins, Plus_Jakarta_Sans } from 'next/font/google';
import Navigation from '@/components/molecul/Navigation/Navigation';
import HeaderNavbar from '@/components/organism/Header/HeaderNavbar';

const jakarta_sans = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
});

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between  md:px-16 md:py-10 lg:px-24   ${jakarta_sans.className}`}
    >
      <HeaderNavbar />
    </main>
  );
}
