
import Link from 'next/link';
import Image from 'next/image';
import { Newspaper, BookImage } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-card border-b border-border shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          <div className="w-1/3 flex justify-start">
            <Link href="/" className="text-primary hover:text-accent transition-colors">
              <span className="text-xl font-bold whitespace-nowrap">La Navaja Producciones</span>
            </Link>
          </div>

          <div className="w-1/3 flex justify-center">
            <Link href="/" className="text-primary hover:text-accent transition-colors">
              <Image 
                src="/logo.png"
                alt="La Navaja Producciones Logo"
                width={128}
                height={128}
              />
            </Link>
          </div>

          <nav className="w-1/3 flex justify-end items-center space-x-6">
            <Link href="/" className="flex items-center space-x-2 text-foreground hover:text-accent transition-colors">
              <Newspaper className="w-5 h-5" />
              <span>Noticias</span>
            </Link>
            <Link href="/fanzine" className="flex items-center space-x-2 text-foreground hover:text-accent transition-colors">
              <BookImage className="w-5 h-5" />
              <span>Fanzine</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
