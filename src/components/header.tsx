
import Link from 'next/link';
import Image from 'next/image';
import { Newspaper, BookImage, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-card border-b border-border shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          <div className="hidden md:flex md:w-1/3 justify-start">
            <Link href="/" className="text-primary hover:text-accent transition-colors">
              <span className="text-xl font-bold whitespace-nowrap">La Navaja Producciones</span>
            </Link>
          </div>
          
          <div className="md:hidden flex items-center justify-start w-1/4">
             <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[250px] sm:w-[300px]">
                <div className="flex justify-center mb-8">
                    <Link href="/">
                      <Image 
                        src="/logo.png"
                        alt="La Navaja Producciones Logo"
                        width={80}
                        height={80}
                      />
                    </Link>
                </div>
                <nav className="flex flex-col space-y-6">
                  <Link href="/" className="flex items-center space-x-3 text-xl text-foreground hover:text-accent transition-colors">
                    <Newspaper className="w-6 h-6" />
                    <span>Noticias</span>
                  </Link>
                  <Link href="/fanzine" className="flex items-center space-x-3 text-xl text-foreground hover:text-accent transition-colors">
                    <BookImage className="w-6 h-6" />
                    <span>Fanzine</span>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          <div className="flex justify-center w-1/2 md:w-1/3">
            <Link href="/" className="text-primary hover:text-accent transition-colors">
              <Image 
                src="/logo.png"
                alt="La Navaja Producciones Logo"
                width={80}
                height={80}
              />
            </Link>
          </div>
          
          <nav className="hidden md:flex md:w-1/3 justify-end items-center space-x-6">
            <Link href="/" className="flex items-center space-x-2 text-foreground hover:text-accent transition-colors">
              <Newspaper className="w-5 h-5" />
              <span>Noticias</span>
            </Link>
            <Link href="/fanzine" className="flex items-center space-x-2 text-foreground hover:text-accent transition-colors">
              <BookImage className="w-5 h-5" />
              <span>Fanzine</span>
            </Link>
          </nav>

          <div className="md:hidden w-1/4"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
