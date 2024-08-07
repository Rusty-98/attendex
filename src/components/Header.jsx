import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-gray-100 p-4 py-3 shadow-md absolute top-0 left-0 w-full rounded-b-lg">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">Rusty</h1>
        <nav className="flex space-x-4">
          <a href="https://github.com/Rusty-98" target="_blank" rel="noopener noreferrer" className="text-gray-400">
            <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M12 .5C5.8.5.5 5.8.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6 0-.3 0-1.1 0-2.2-3.2.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1 1.8 2.7 1.3 3.3 1 .1-.7.4-1.3.7-1.6-2.5-.3-5.2-1.3-5.2-5.8 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.4.1-2.9 0 0 1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.5.2 2.6.1 2.9.8.9 1.2 2 1.2 3.3 0 4.5-2.7 5.5-5.2 5.8.4.3.8 1 .8 2 0 1.5 0 2.7 0 3.1 0 .3.2.7.8.6A10.9 10.9 0 0 0 23.5 12c0-6.2-5.3-11.5-11.5-11.5z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/rustygenius_98/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <Image src="/instagram.svg" alt="Instagram" width={24} height={24} />
          </a>
          <a href="https://www.linkedin.com/in/sumit-singh-developer/" target="_blank" rel="noopener noreferrer">
            <Image src="/linkedin.svg" alt="Instagram" width={24} height={24} />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
