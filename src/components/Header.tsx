import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <Link href="/">
      <div className="flex border-solid border-b border-gray-300 bg-white">
        <Image
          src="/image1.png"
          alt="Logo"
          className="flex space-betwen ml-14 m-5 small:ml-16  cursor-pointer"
          width={100}
          height={100}
          priority
        />
        <h1 className="flex items-center justify-center md:ml-[10%] sm:ml-[0%] small:text-2xl md:text-4xl">
          Киновтопку
        </h1>
      </div>
    </Link>
  );
};

export default Header;
