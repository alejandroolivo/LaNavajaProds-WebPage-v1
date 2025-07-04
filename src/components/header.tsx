import Link from 'next/link';
import { Newspaper, BookImage, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-card border-b border-border shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          
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
                <SheetTitle className="sr-only">Menú Principal</SheetTitle>
                <div className="flex justify-center mb-8">
                    <Link href="/">
                      <svg
                        width={40}
                        height={40}
                        viewBox="0 0 100 100"
                        className="text-primary"
                        aria-label="La Navaja Producciones Logo"
                      >
                        <path
                          fill="currentColor"
                          d="M20 0 V 100 H 35 V 40 L 65 100 H 80 V 0 H 65 V 60 L 35 0 H 20 Z"
                        />
                      </svg>
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
               <svg
                width={180}
                height={90}
                viewBox="0 0 100 50"
                className="text-primary"
                aria-label="La Navaja Producciones Logo"
              >
                <path
                  fill="currentColor"
                  d="M25 0 V 50 H 35 V 20 L 65 50 H 75 V 0 H 65 V 30 L 35 0 H 25 Z"
                />
              </svg>
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
