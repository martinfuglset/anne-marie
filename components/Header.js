import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  const spacing = 'mx-2'; // Define your spacing variable here

  // Helper function to handle active link styling
  const getLinkClass = (path) => 
    `${spacing} ${router.pathname === path ? 'underline' : 'hover:underline'}`;

  return (
    <header className="py-5">
      <div className="container mx-auto text-center">
        <Link href="/">
          <Image
            src="/ANNEMARIE.svg"
            alt="Anne Marie Logo"
            width={250}
            height={62.5}
            className="mx-auto cursor-pointer"
          />
        </Link>
        <nav className="mt-5">
          <Link href="/blomster-dekor" className={getLinkClass('/blomster-dekor')}>
            Blomster & Dekor
          </Link>
          <Link href="/kaker" className={getLinkClass('/kaker')}>
            Kaker
          </Link>
          <Link href="/makroner-cupcakes" className={getLinkClass('/makroner-cupcakes')}>
            Makroner & Cupcakes
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
