import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

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
          <Link
            href="/blomster-dekor"
            className={`mx-2 ${router.pathname === '/blomster-dekor' ? 'underline' : 'hover:underline'}`}
          >
            Blomster & Dekor
          </Link>
          <Link
            href="/kaker"
            className={`mx-2 ${router.pathname === '/kaker' ? 'underline' : 'hover:underline'}`}
          >
            Kaker
          </Link>
          <Link
            href="/makroner-cupcakes"
            className={`mx-2 ${router.pathname === '/makroner-cupcakes' ? 'underline' : 'hover:underline'}`}
          >
            Makroner & Cupcakes
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
