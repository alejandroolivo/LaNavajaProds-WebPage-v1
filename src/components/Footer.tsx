import Link from 'next/link';
import { Instagram, Github, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} La Navaja Producciones. Todos los derechos reservados.
            </p>
             <p className="text-xs text-muted-foreground/80">
              Hecho con ♥ en Murcia y Cartagena.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
             <div className="flex items-center gap-2">
               <Button asChild variant="ghost" size="icon" aria-label="Instagram de La Navaja Producciones">
                 <Link href="https://www.instagram.com/lanavajaproducciones/" target="_blank" rel="noopener noreferrer">
                   <Instagram className="h-5 w-5" />
                 </Link>
               </Button>
               <Button asChild variant="ghost" size="icon" aria-label="Perfil X de La Navaja Producciones">
                 <Link href="https://x.com/lanavajaproduc" target="_blank" rel="noopener noreferrer">
                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current">
                        <title>X</title>
                        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 7.184L18.901 1.153zm-1.61 19.931h2.648L3.25 2.22h-2.8l16.061 18.864z"/>
                    </svg>
                 </Link>
               </Button>
               <Button asChild variant="ghost" size="icon" aria-label="Repositorio en GitHub">
                 <Link href="https://github.com/alejandroolivo/LaNavajaProds-WebPage-v1/" target="_blank" rel="noopener noreferrer">
                   <Github className="h-5 w-5" />
                 </Link>
               </Button>
             </div>
             <Button asChild variant="outline">
                <Link href="https://lanavajaproducciones.mailchimpsites.com/" target="_blank" rel="noopener noreferrer">
                    <Mail className="mr-2 h-4 w-4" />
                    Suscríbete a la lista de correo
                </Link>
             </Button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
