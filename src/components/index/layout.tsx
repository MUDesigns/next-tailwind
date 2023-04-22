import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const closeNav = () => setIsNavOpen(false);

  return (
    <div className="bg-primary text-text min-h-screen flex flex-col">
      <Head>
        <title>Matthew Nyce - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-secondary flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <button
            className="text-2xl text-text hover:text-primary focus:outline-none self-start"
            onClick={toggleNav}
            aria-label={isNavOpen ? "Close menu" : "Open menu"}
          >
            ☰
          </button>
          <Image
            src="/images/logo.png"
            alt="Matthew Nyce"
            width={150}
            height={100}
            className="ml-4"
          />
        </div>
        <a
          href="/documents/Matthew-Nyce.pdf"
          target="_blank"
          className="text-text hover:text-primary focus:outline-none"
        >
          Resume
        </a>
      </header>

      <div
        className={`fixed inset-0 bg-black bg-opacity-75 z-50 transition-opacity ${
          isNavOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeNav}
      ></div>

      <nav
        className={`fixed top-0 left-0 h-screen bg-secondary w-64 p-6 overflow-y-auto z-50 transition-transform ${
          isNavOpen ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
      >
        <button
          className="text-2xl text-text hover:text-primary focus:outline-none"
          onClick={toggleNav}
          aria-label="Close menu"
        >
          &times;
        </button>
        <ul className="mt-8">
          <li className="mb-6">
            <Link href="/">
              <span className="text-2xl font-bold hover:text-primary cursor-pointer">
                Home
              </span>
            </Link>
          </li>
          <li className="mb-6">
            <Link href="/about">
              <span className="text-2xl font-bold hover:text-primary cursor-pointer">
                About
              </span>
            </Link>
          </li>
          <li className="mb-6">
            <Link href="/projects">
              <span className="text-2xl font-bold hover:text-primary cursor-pointer">
                Projects
              </span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span className="text-2xl font-bold hover:text-primary cursor-pointer">
                Contact
              </span>
            </Link>
          </li>
        </ul>
      </nav>

      <main className="flex-1 p-0 m-0">{children}</main>

      <footer className="bg-secondary py-8">
        <div className="container mx-auto text-center">
          <p>&copy; Matthew Nyce 2023</p>
          <div>
            Logo created by{" "}
            <a href="https://www.designevo.com/" title="Free Online Logo Maker">
              DesignEvo logo maker
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
