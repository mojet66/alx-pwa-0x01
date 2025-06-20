import Link from "next/link";
import Button from "../commons/Button";

const Header: React.FC = () => {
  return (
    <header className="flex items-center bg-[#171D22] px-4 md:px-16 lg:px-44 h-28 text-white">
      <div className="flex justify-between items-center w-full">
        <h2 className="font-semibold text-xl md:text-4xl">
          Cine<span className="text-[#E2D609]">Seek</span>
        </h2>
        <nav className="hidden md:flex flex-1 justify-center space-x-8">
          <Link
            href="/"
            className="px-4 md:px-8 font-semibold hover:text-[#E2D609] text-xl transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/movies"
            className="px-4 md:px-8 font-semibold hover:text-[#E2D609] text-xl transition-colors duration-300"
          >
            Movies
          </Link>
          <Link
            href="/contact"
            className="px-4 md:px-8 font-semibold hover:text-[#E2D609] text-xl transition-colors duration-300"
          >
            Contact
          </Link>
        </nav>
        <div className="md:hidden flex">
          <Button title="Sign in" />
        </div>
        <div className="hidden md:flex">
          <Button title="Sign in" />
        </div>
      </div>
    </header>
  );
};

export default Header;
