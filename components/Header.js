import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  return (
    <header className="py-4">
      <div className="container mx-auto text-center">
        <Link href="/">
          <Image
            src="/ANNEMARIE.svg"
            alt="Anne Marie Logo"
            width={200}
            height={50}
            className="mx-auto cursor-pointer"
          />
        </Link>
        <nav className="mt-4">
          <Link
            href="/blomster-dekor"
            className={`mx-4 ${router.pathname === '/blomster-dekor' ? 'underline' : 'hover:underline'}`}
          >
            Blomster & Dekor
          </Link>
          <Link
            href="/kaker"
            className={`mx-4 ${router.pathname === '/kaker' ? 'underline' : 'hover:underline'}`}
          >
            Kaker
          </Link>
          <Link
            href="/makroner-cupcakes"
            className={`mx-4 ${router.pathname === '/makroner-cupcakes' ? 'underline' : 'hover:underline'}`}
          >
            Makroner & Cupcakes
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
