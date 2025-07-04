import Link from 'next/link';
import { Newspaper, BookImage, Menu, Users } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-card border-b border-border shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          
          <div className="hidden md:flex md:w-1/3 justify-start">
            <Link href="/about" className="text-primary hover:text-accent transition-colors">
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
                      
<svg version="1.1" viewBox="0 0 2048 2048" width="50" height="50" xmlns="http://www.w3.org/2000/svg">
                <path transform="translate(928,1039)" d="m0 0 6 1v3h3v5h3v7h2l1 8h3v5h2v2h-2v3h2l1 16-3 1v4h2v3h4v2h2v-2h3v2h12v2h5v-2h2v2h20l12 1v2h4l1-2v2h4v2l3-2h5l3 1 25 1h22v2h19v-2h2v2h31v-2h48v2h15v-2h6v2h6v-2h2v2h46v-2h2v2h2v-2h5v2h21v3h6v-3h11v3h6v-3h2v3h2v-3h2v3h12v2h61l12 1v2h2v-2h7v2h7v2h5v-2h5v2h2v-2h2v2h10v-2h2v2h171l7 1 19 1v2l27 1v3h4v-3h2v3h3v2h27v2h14l7 1 21 1v2h13l14 1v2h4l1-2v2h11v3h15v2l21 2v2l18 1v2h2v2h11l4 1v3h3v2l5 1 3 1v5h3v2h-3v4l-5 1v4l-10 1v2h-5v2l-3 1h-8l-1 4-10 1v2h-4v2h-7v2l-8 1h-18v2l-3 1-26 1v3h-7v2h-2v-2h-3v2h-15v2l-4 1h-31v2l-18 1-29 1h-52v2h-14v3h-7v-3h-4v3h-4v-5h-16v2h-2v-2h-3v2h-2v-2h-2v2h-8v-2h-2v2h-3v-2h-2v2h-15v-2h-7v2h-69v3l-38 1h-25v2h-3l-1-2h-87l-2 2v-2h-2v2h-2v-2h-2l-1 2v-2h-19v2h-2v-2h-3v2h-2v-2h-10v2h-2v-2h-4v2h-9v-2h-4v2h-31v2h-2v-2h-4l-1 2v-2h-15v2h-7v-2h-2v2h-7v-2h-3v2h-4v2h-3l-1-4h-4v2h-2v-2h-3v2h-2v-2h-3v2h-4v-2h-3v2h-10v-2h-6v2h-27v-2h-21v2h-14v2h-4v-2h-4l-1 2v-2h-2l-1 2v-2h-8v2h-68l1 8-2 11h-2v2h-3l-1 5h-2v3h-2l-1 9h-3v3h-2v2h-4v3h-2l-1 4-8 1v2h-7v2h-3v-2h-2v2l-10 1-7-1v-2h-3v-3h-2v-12h-2v-2h2v-10h-2l-1-16h-2v-8h-2v-2h-3l-1-4h-8v-2h-17v2h-22v2h-4v-2h-5v2h-2v2h-41v2h-8v-2h-7l-1 2v-2h-3v2h-6v-2h-2v2h-19v-2h-2v2h-101v-2h-2v2h-7v-2h-129v-2h-8v-2h-25l-1 2v-2h-24v-2h-5v2h-5v-2h-27l-62-1v-3h-2v3h-4v-3h-4v3h-7v-3h-9v-2h-7v2h-8v-2l-23-1v3h-3v3l-10 1v2h-5v2h-6v2h-7v2h-18v2l-5 1-1 3h-17v2h-21v-2h-6v2l-4 1-5-1-1-5h-2v-3h-4l-1-9h-3l-1-10h-3v-8h-3v-10h-2v-6h2v-2h-2v-2l-2-1v-26h2v-3h-2v-6h2v-3h-2v-2h2v-7h2v-10l1-2h2v-5h3l2-12h2l1-3h2v-2h2v-2h2l1-7 5-1 37 1v2h9v2l16 1v2h7v2h7v2l9 1v2h6v3l5-1h26v-2h15v-2l26-1v-2h4v2h3v-2h17v-2h9v-2h6v2h4v-2l55-1h24v-2h2v2h12v-2h7v2h6v-2h6v2h6v-2h16v2h4l1-2v2h4v-2h3v2h2v-2h5v2h2v-2h15v2h12v-2h12v2h3v-2h3v2h3v-2h6v2h59l69 1v2h6v-2h2v2h7v2h5v-2h5v2h4v-2h2v2h6v-2h3v2h6v-2h6v2h5v-2h17v2h25v2h2v-2h7v2h6v-2h2v2h45v-2h3v-4l3-1 1-2h3v-3h2v-2l3-3h2v-2h2v-2h2l1-5h2v-2h3v-2h2v-5l3-3 1-2 5-2 3-3h2l1-5 3-3h6v-3zm0 13v2h-3v4h-3l-1 8h-2v2h-2v2h-4v5h-2l-1 6h-3v3l-5 1v4l-4 1v4h-3v2l-7 1-1 4-4 1v2h-3v2h-12l1 5h3v12l1 5h2v23l1 8h4l1 5h2v2h7v2h2v2l7 1h10l1 2v-2h9v2h2v2h4v-2h6v2h3v8h-3v2h-12l-15 1v2h-6v2h-6v2l-5 1v2l-7 1-2 1v3h-2v4h-4v3l8 2 1 5h2v3h4v12h3v3h2v20l1 5h2v2h-2v3h9v-2l7-1 2-9h3v-2l5-1v-3h2l2-6 3-3v-4h2v-6h3l1-4h2v-7h4v-5l17-1h32l9-1v-2h2v2h2v-2h2v-3h4v-2h2v-4l5-1 1-7h2l1-2v-8h3v-3h2l1-31-1-9-5-1-1-4h-2l-1-7h-3v-3h-4v-2h-4v-2h-2v-2l-19-1h-26l-1-2v2h-5v-2h-7v-3h-5l-1-6h-2v-3h2l1-9v-20l-1-7h-2v-5h-2l-1-6zm-750 44v20l1 6h2v6h-2v2h2v2h-2v11h2v35h6v-2h3v2h3v-2h3v2h3v-2h27l15-1v-2h14v-15h-2v-3h2v-11h2v-4h-2v-5h2l1-5v-16l-9-1v-2h-2v-3h-6v-2h-10v-2h-5v-2l-6-1-1-2h-11l-1-2v2h-2v-2zm842 22v2h3v3h2v5h3l1 12h2v2h2v13h2v3h2v5l2 3h2v2h2v2l3 3h2v2h3v3h5v2l4 1h12v2h12l1 2v-2h16l1 2v-2h5v-2h7v-3h6v-3h5l2-4v-5h2l1-7h2v-16h2v-3h-2v-3h2v-5h-2v-4h2v-2h-2v-6h-27v2h-2v-2h-2v2h-5v-2l-38-1-11 1h-13l-7-1-3-1zm212 2 1 2zm5 0 1 2zm12 0v3h3v-3zm10 0v2h2l1 4v-3l4-1v-2zm15 0v2l-3 1h7l-2-1v-2zm8 0v8l1 2h3v2h-6v2l6 1 2-1 1-8v-3h-6zm21 0v2h2v4h2v-3h2v-3zm-8 2m16 0m37 0m-27 1v3h2l1 2v-5zm-59 3v4h2v-4zm74 0v2h2v-2zm-107 2v2h3v-2zm11 0v2l-3 1 5 1v-4zm74 0v2h3v-2zm7 0v2h-4v5h-5v5h-5v-3h-4v-3l-8 1v7h2v-5h4v3h4v2l9 1v-6h9l1-5-1-4zm-153-9-21 1v8h2v16h-2l-1 26v16h-2v19h50l2-1v-2h3v2h5v-2h8v2h2v-2h6v2h3v-2h2v2l10 1 5-1v-2h3v2h6v-2h3v2h2v-2h8v2h2v-2h12v2h6v-2h6l1 2v-2h2v2h4v-2h2v2h2v-2h4v2h2v-2h12v2h4v-2h5v2h2v-2h15v2h2v-2h3v2h23v-2h6v2h2v-2h3l1 2v-2h2l1 2v-2h39v2h4v-2h5v2h2v-2h36v2h2v-2h6v2h2v-2h10v2h3v-2h23v-2h2v2h7v-2h5l1 2v-2h22v2h2v-2h14v-3h2v3h2v-3h2v3h3v-3h4l1 3v-3h4l1 3v-3h2v3h7v-3h3v3h10v-3h4l1 3v-3h34l1 3v-3h24l26-1 1-3h2v2h3v-2h2v2h4v-2h20l4-1v-2h20v-2h3v2h2l2-4h7v2h2v-2h12l3-1v-2h2v2h5v-2h5v-2h9l5-1v-2h10v-2l4-1v-2h6v-2h6l2-1v-2h3v-2h7l-1-3h-9v-2h-2v-2l-18-2v-2h-13v-3l-8-1h-11v-2h-4l-1-2v2h-4v-2l-15-1h-12v-2l-36-2h-9v-2h-20v-3h-7v-2h-5v2h-3v-2l-26-1-1-2-34-2h-7l-1-2v2h-4v-2h-24v-2h-12v2h-6v-2h-6v2h-7v-2h-3v2h-34l-1-2v2h-17v2h-3v-2h-2v2h-3v-2h-31v-2h-2v2h-19v2h2v2h-5l1-4h-17v-2h-5v2h-12v-5l-1 3h-9v-3h-15v3h-2v-3h-6l-1 5h-2v-2h-4v-3h-6v3h-2v4h-5v-4h-2v5h4v9h-5v2l-2 1h2l1 8h-5v4h2v3l-2 1h2v2h2v7l1 2 4 1 1 4-10 1v2h-7v-2l-20-1h-23l-10 1v2h-17v-2h-2v2h-45v-2l-8-1v-4l-8-1v-2h-2v-2h-2v-2l-4-1v-4h-3v-4h-2v-4h-4l-1-5h-2l-1-4h-2v-2h-2v-20zm86 11-2 2h5v-2zm10 0m35 0v2h6l-2-2zm34 0 3 2 4-1zm-84 2v2h-6v1h7l2-1v-2zm22 0v2h3v-2zm3 2m19 0m-70 1v2h-2v3h2v2h2v2h5l-1-4h-4v-5zm43-1-2 1v2h3zm67 1v2h-2v5h-10v2h3v2l10 1-1-5h5v-2h-2v-5zm-74 2v3h-5v6h5v-2l2-1v-3h3v-3zm-26 3v2h4v-2zm39 0v3h2v-3zm-35 2 1 2zm6 1v3h2v-3zm43 0m3 0m8 0 4 1zm-47 1v2h2v-2zm18 0-2 3v8l2 2v-2h3v-3h-3v-3h3v-5zm23 0v5h2v-5zm-54 5v2l-2 1h8v-1h-5zm77 0v2h3v-2zm9 0v2h3v-2zm-44 2m24 0 4 1zm23 0m-48 1v3h-2v2l3 1v-6zm-7 3 1 2zm24 0v3h2v-3zm33 0 1 9 4-1 1-5h-3v-3zm-69 2m50 0v1h5v-1zm-4 1v3h4v-3zm16 0 2 1 1 2v-3zm-64 3v2h2v-2zm10 0 1 2zm54 0v3h-2v2h5l-1-5zm-67 2m14 0v3h4l-1-3zm31 0v3h2v-3zm6 0v3h4v-2zm-31 1v2h4v-2zm19 0v2h4v-2zm19 0v2h2v-2zm16 0 1 4zm6 0v2h2v2h2v-4zm-94 2v2h5v-2zm-991 19-11 1v4h-2v-2h-2v2h-8v2h-4v-2h-2v3h-12l-1 2-9 2v3h-5v2h-3v3h-5v2l-6 2-1 5-4 1v4h-2v2h15v-2h3v2h3v-2h9v-2h9v-2h9l9-1v-3h2v-2l14-1 4-1v-2l8-1 1-4h2v-4h-2v-10l-1-1z" fill="#fff"/>
                <path transform="translate(533,551)" d="m0 0h16l11 2 3-1 18 1 6 2 2 5-1 5 1 11-1 6v11l1 16v103l1 4-1 7v17l1 10-1 15 1 13v100l1 4-1 11 1 4-1 5 1 3v34l-1 6 1 7v27l1 3-1 35 1 12-1 8v22l1 5-1 4 1 8-1 7h-13l-17-1-8 1h-62l-2-1-8 1-5-1-1-6-1-13-1-21-1-7-2-27v-7l-1-3v-11l-2-16-1-11 1-6-2-8-1-14v-7l-1-6-1-16v-5l-1-1 1-7h-6l1 3 1 16-1 5v5l1 4v26l1 10-1 11 1 5v22l1 3v14l1 13-1 6 1 2v25l1 3-1 4 1 12-1 3-6 1-7-1h-39l-11 1h-13v-30l1-6-1-3v-112l-1-4 1-14v-9l-1-3v-24l1-3-1-12 1-5-1-6v-17l1-6-1-4 1-3-1-15v-7l1-7-1-9v-11-3-133l-1-6 1-4-1-25 1-5-1-7v-28h2l1-5 5-3 9-1 7 1 3-1 16 1h17l5 1h17l4 2 2 4 2 1 1 7v11l2 10v6l1 6 2 17 1 8v10l1 3v10l2 7v9l1 3-1 3 1 2 3 32 1 21 2 10v11l2 10 1 25 1 2v13l2 7v7l1 8v7l2 10v10l1 5 1 9 1 16 1 2-1 6 1 9 1 4v5l1 3v7l1 2v15l2 10v-26l1-10-1-8v-29l-1-4v-12l1-3v-17l-1-4 1-7-1-9 1-6-1-2 1-4-1-3v-15l1-2-1-6-1-16 1-2v-43l1-6-1-4v-43l-1-16 1-9-1-4 1-8-1-14 1-4-1-3 1-4-1-3 1-9-1-18 2-7 4-2 1-4 18-2zm-25 396 1 3zm1 4m-1 1 1 3z" fill="#fff"/>
                <path transform="translate(1560,550)" d="m0 0 8 1 9-1h8l2 4 5 2 2 9 1 13-1 2 1 9v14l1 6 1 18-1 4 1 7v7l1 2-1 5 1 19v7l1 10v35l1 2v17l1 17v18l2 9-1 9 1 13v7l1 8-1 7 1 13 1 7-1 5 1 4-1 8 2 10-1 11 1 18v10l1 6v26l1 4-1 7 2 17v5l-1 1 1 17 1 7-1 3 1 9v11 3 8l1 3-1 4 1 1v27l1 1-1 8 1 11 1 6v9l-6 1-2-1h-10l-11 1-12-1-3 1h-22l-7-1h-16l-2-4 1-5-1-4 1-14v-12l-1-13v-10l-1-5 1-1v-25l-1-4 1-2v-18l-1-2 1-14-1-2v-9l-1-1 1-16-1-5 2-5-2-3 1-3-1-6 1-3-1-1v-9l1-3-1-12v-9l-1-2 1-8v-7l-1-6v-15l1-8v-17l-1-1v-20l-1-3 1-4v-9l-1-14v-42l-1-3v-8l1-4 1-6-2-3 1-10-1-7v-10l1-10v-9l-2-10-3-1-1 9v18l-1 5 1 9 1 3-1 9v11l-1 8v72l-1 9 1 4v28l-1 2v16l1 7-2 18 1 4v34l-1 5v7l1 6-1 11 1 8-1 4v10l-1 4 1 3-1 3 1 9v19l-1 6v21l-1 4 1 4v12l-1 13 1 7-1 7v9l1 5v14h-16l-3-2h-9l-8-1-5 1-1-1-14-1-5 2-11-1-3 1-12-1-1-5v-7l1-3-1-11 1-11v-12l1-9 1-2-1-9 1-19 1-5v-13l1-4-1-5 1-4-1-6 1-5 1-26v-6l1-3v-17l1-3-1-9 1-2v-7l1-5-1-7 1-7v-10l1-3v-21l1-7v-23l1-17 1-3-1-4 1-11v-8l1-3v-25l2-13-1-5 1-4v-17l1-4-1-2 1-8v-13-4l2-21v-24l1-15 1-7v-17l1-6v-27l2-6 7-3h11l11-1 5 1 5-1 30-1 7 1 6-1 3 1 10-2h16z"/>
                <path transform="translate(1142,550)" d="m0 0 8 1 9-1h8l2 4 5 2 2 9 1 13-1 2 1 9v14l1 6 1 18-1 4 1 7v7l1 2-1 5 1 19v7l1 10v35l1 2v17l1 17v18l2 9-1 9 1 13v7l1 8-1 7 1 13 1 7-1 5 1 4-1 8 2 10-1 11 1 18v10l1 6v26l1 4-1 7 2 17v5l-1 1 1 17 1 7-1 3 1 9v11 3 8l1 3-1 4 1 1v27l1 1-1 8 1 11 1 4-9 2-8-1h-19l-1-1h-13l-7 1-1-1-12 1-7-2-4 1h-9l-1-4 1-12v-12l-1-13v-10l-1-5 1-1v-25l-1-4 1-2v-18l-1-2 1-14-1-2v-9l-1-1 1-16-1-5 2-5-2-3 1-3-1-6 1-3-1-1v-9l1-3-1-12v-9l-1-2 1-8v-7l-1-6v-15l1-8v-17l-1-1v-20l-1-3 1-4v-9l-1-14v-42l-1-3v-8l1-4 1-6-2-3 1-10-1-7v-10l1-10v-9l-2-10-3-1-1 9v18l-1 5 1 9 1 3-1 9v11l-1 8v72l-1 9 1 4v28l-1 2v16l1 7-2 18 1 4v34l-1 5v7l1 6-1 11 1 8-1 4v10l-1 4 1 3-1 3 1 9v19l-1 6v21l-1 4 1 4v12l-1 13 1 7-1 7v9l1 5-1 2-8-1h-11l-6-1-9 1-5-1-6 1-22-2-11 1v-2l-8 1-1-14 1-11v-12l1-9 1-2-1-9 1-19 1-5v-13l1-4-1-5 1-4-1-6 1-5 1-26v-6l1-3v-17l1-3-1-9 1-2v-7l1-5-1-7 1-7v-10l1-3v-21l1-7v-23l1-17 1-3-1-4 1-11v-8l1-3v-25l2-13-1-5 1-4v-17l1-4-1-2 1-8v-13-4l2-21v-24l1-15 1-7v-17l1-6v-27l2-6 7-3h11l11-1 5 1 5-1 30-1 7 1 6-1 3 1 10-2h16z"/>
                <path transform="translate(748,550)" d="m0 0 8 1 9-1h8l2 4 5 2 2 9 1 13-1 2 1 9v14l1 6 1 18-1 4 1 7v7l1 2-1 5 1 19v7l1 10v35l1 2v17l1 17v18l2 9-1 9 1 13v7l1 8-1 7 1 13 1 7-1 5 1 4-1 8 2 10-1 11 1 18v10l1 6v26l1 4-1 7 2 17v5l-1 1 1 17 1 7-1 3 1 9v11 3 8l1 3-1 4 1 1v27l1 1-1 8 1 6h-9l-16-2h-15l-11-1h-15l-8-1-3 1-10-1-2-3v-12l-1-13v-10l-1-5 1-1v-25l-1-4 1-2v-18l-1-2 1-14-1-2v-9l-1-1 1-16-1-5 2-5-2-3 1-3-1-6 1-3-1-1v-9l1-3-1-12v-9l-1-2 1-8v-7l-1-6v-15l1-8v-17l-1-1v-20l-1-3 1-4v-9l-1-14v-42l-1-3v-8l1-4 1-6-2-3 1-10-1-7v-10l1-10v-9l-2-10-3-1-1 9v18l-1 5 1 9 1 3-1 9v11l-1 8v72l-1 9 1 4v28l-1 2v16l1 7-2 18 1 4v34l-1 5v7l1 6-1 11 1 8-1 4v10l-1 4 1 3-1 3 1 9v19l-1 6v21l-1 4 1 4v12l-1 13 1 7-1 7-1 4-10 1-14-1h-61l-1-5 1-11v-12l1-9 1-2-1-9 1-19 1-5v-13l1-4-1-5 1-4-1-6 1-5 1-26v-6l1-3v-17l1-3-1-9 1-2v-7l1-5-1-7 1-7v-10l1-3v-21l1-7v-23l1-17 1-3-1-4 1-11v-8l1-3v-25l2-13-1-5 1-4v-17l1-4-1-2 1-8v-13-4l2-21v-24l1-15 1-7v-17l1-6v-27l2-6 7-3h11l11-1 5 1 5-1 30-1 7 1 6-1 3 1 10-2h16z"/>
                <path transform="translate(1252,552)" d="m0 0h24l7 1 3-1 31 1h16l5 1 10-1 4 1h38l3 1 6-1 5 4v12l1 5-1 5 1 12v49l-1 7 1 5-1 4 1 10-1 8 1 6-1 5 1 31-1 4v113l-2 6h2v26l-1 4 1 7v19l-1 1v6l1 1v18l-1 11v17l1 5-1 26v56l-2 9h2v31l-1 9 1 6-1 4v8l-10 1-1 1h-8l-6-2h-20l-4-1-2 1-5-1v-2l-7 1-2 1-5-1h-14l-5-3-1-2v-19l1-4v-7l-1-8v-22l1-3-1-6v-25l-1-5 1-7v-15l1-6v-9l-1-5v-35l-1-5 1-6v-35-2l-1-4 1-16v-20l-1-7v-7l1-6v-8l-1-7 1-5-1-4 1-2v-50l-1-4v-12l1-4v-38l-1-6 1-6v-11-3-13l1-6h-13l-2 1h-32l-7 1-9-1h-9l-3-1-1-7h-2v-12l2-10-1-7v-14l1-16v-6l-1-5 2-4z"/>
                <path transform="translate(990,550)" d="m0 0 9 1 5 4v2l5 1 1 8 1 1v6l-1 2v15l-1 6v10l1 4-2 11-1 31-1 5 1 5-2 8 1 3v7l-2 9 1 7-1 3-1 12 1 6-1 10-1 22-1 5v19l-1 9v6l-1 1v20l-1 3v12l-1 3 1 11-1 8-1 11 1 5-1 7-1 22-1 4v23l-2 14v12l-1 5v15l-1 2v13l-1 3v12 3l-1 19-1 3 1 8-1 10-1 4 1 4-2 12v13l-1 6 1 5-1 4v8l-2 1-2-1-20-1h-3l-2-13-1-4 1-3-3-7-2-5v-4h-2l-2-10h-3l-3-5-2-1-3-6-7-1-7 1-6 3-5 4-3-1v-20l1-7-1-21 1-5v-53l1-3-1-6 1-2v-30l1-4-1-13 1-6-1-5 1-8v-50l1-10v-30l1-2-1-12 1-8-1-8 1-2v-22l1-9-1-6 1-9-1-11 1-6v-29l1-3-1-5 1-10-1-7 1-22 1-24-1-2 1-3-1-8 2-6 5-2 10 1h18l2-1 8 1 6-1h22z"/>
                <path transform="translate(875,552)" d="m0 0 9 1 4 4v16l-1 2 1 7v12l-1 2 1 11v15l1 6-1 8 1 5 1 7-1 9v20l1 8-1 3v12l1 2v34l1 9-1 3 1 19v28l1 18-1 3 1 10-1 6 1 5v13l1 9-1 14 1 6v38l1 5-1 4v14l1 13v53l1 3-1 3 1 6-1 6 1 8-1 11 1 12-1 2-4 2-7 10-9 9-7 9-5 5-8 1-17-2h-10l-4 1-3-1-2-17 1-4-1-10v-7l-1-6 1-5-1-11-1-10v-8l-1-14v-28l-1-2v-20l-2-11-1-29v-14l-2-16 1-4-1-10-1-11 1-6-1-8-1-15 1-11-2-4v-31l-2-10v-26l-1-12-1-9 1-5-1-5v-10l-1-9-1-11 1-5-1-2-1-18v-22l-1-4v-19l-1-1v-10l-1-5v-15l-1-8v-14l2-3 12-1 4-1 6 1 2-1h10l3-1 5 1 1-1h24z"/>
                <path transform="translate(1375,1217)" d="m0 0h25l2 6v8l-1 14 1 3v29l-1 3v12l1 1v9l-1 5v31l-1 9-2 4-5 12-5 8-4 2-2 6-10 9h-2l-2 4-6 1-2 2h-5v2l-14 4-3 1h-11l-12 2-15 2-20-1-12-2-6-3v-2l-7-1-6-3-6-2-7-3-9-9-8-14v-3h-2l-4-9-4-11-1-7-2-10 1-13 1-6v-14l-1-10 1-2-1-6 1-2v-29l-1-4 1-7v-12h8l1-2 2 1h7l10-1h20l14 1 22-1 6 1 1 8v8l-1 6 1 5-1 6 1 7v19l-1 3v20l-1 6 1 9 1 8-1 3 3 4h6l5-2 1-10 1-15-1-1v-15l1-4-1-7v-19l-1-11 1-4v-9l-1-9v-6l4-1h17l8-1 6 1h21z"/>
                <path transform="translate(843,1223)" d="m0 0h15l6 3 4 1 4 6 2 1 2 10 1 1 2 18 1 5 3 11 1 4 19 1 7-2 12-7 9-3v-2l5-3 5-8 2-1 2-7 4-8 5-8 2-7 10-1 6 1v-2h4v29l-1 12-1 2v13l-1 4 1 7-2 4 1 7-1 5v8l-1 6v25l-1 4-1 17v7l-1 3 1 7-1 9-4 6-6 1h-8l-5 1-7-1-3 1-11-1h-23l-3-1-8 1-18-1h-11l-6 1-10-2-1 3h-5l-4-4-1-9 1-8-1-1v-8l-1-4-1-18 1-2-2-10v-18l-1-13-1-12v-15l-1-2v-19l-1-4-1-27 1-5z"/>
                <path transform="translate(1598,1214)" d="m0 0h17l2 3v10l-1 8 1 6 1 19v27l1 1 1 11-2 7 1 20 2 6-1 5 1 7-1 5 1 5v15l1 7v22l-2 4-3 2-15 1h-23l-9 1h-13l-26-1h-2l-2-5v-18l-1-3 1-9v-10l-1-4v-24l-1-4 1-1v-13l-1-8v-7l1-5-1-8v-28l-1-4 1-9-1-14 1-14 1-2h6l1 1h23l10 1 9-1h12l7-1z"/>
                <path transform="translate(517,1225)" d="m0 0h28l12 1 3-1 5 1 6 1 7-1 13 1 1 1v14l1 7v144l-3 9-1 1h-32l-7 1h-44l-2-1v-2h-2l-2-11v-10l-1-6v-8l-2-24-1-9-1-7 1-5-2-3v-14l-2-12-1-19-1-11v-7l-1-1-1-24-1-3 6-1h23z"/>
                <path transform="translate(1450,1214)" d="m0 0 7 1h16l7 1h14l4 1 7-1 1 5-1 26v56l-1 13v38l-1 11 1 7-2 16 1 7-4 6-9 2h-22l-10 1-2-1-7 1-4-1-6 1h-16l-9-1-3-2-1-11v-41l1-4v-25l1-3v-19l1-15v-13l1-18v-20l2-17h16l2 1 6-1z"/>
                <path transform="translate(1178,1220)" d="m0 0h21l-1 15 1 6 1 19v27l1 1 1 11-2 7 1 20 2 6-1 5 1 7-1 5 1 5v15l1 7v22l-2 4-3 2-15 1h-23l-9 1h-13l-26-1h-2l-2-5v-18l-1-3 1-9v-10l-1-4v-24l-1-4 1-1v-13l-1-8v-7l1-5-1-8v-28l-1-4 1-9-1-14v-6l6-1 17-1 9-1h23l2-1h12z"/>
                <path transform="translate(1058,1223)" d="m0 0 6 1 8-1 15 1 1 5-1 18v56l-1 13v38l-1 11 1 7-2 16 1 7-4 6-9 2h-22l-10 1-2-1-7 1-4-1-6 1h-16l-9-1-3-2-1-11v-41l1-4v-25l1-3v-19l1-15v-13l1-18v-20l2-7 5-1 9 1 8-1 6 1 14-1 13 1z"/>
                <path transform="translate(800,1228)" d="m0 0h4v7l1 6 1 19v27l1 1 1 11-2 7 1 20 2 6-1 5 1 7-1 5 1 5v15l1 7v22l-2 4-3 2-15 1h-23l-9 1h-13l-26-1h-2l-2-5v-18l-1-3 1-9v-10l-1-4v-24l-1-4 1-1v-13l-1-8v-7l1-5-1-8v-28l-1-4 1-9-1-15 6-1h12l7 1h15l2-1h26z"/>
                <path transform="translate(637,1226)" d="m0 0 7 1 2-1 8 1 9-1 2 1h10l13 2h5v74l-1 13v38l-1 11 1 7-2 16 1 7-4 6-9 2h-22l-10 1-2-1-7 1-4-1-6 1h-16l-9-1-4-3-1-21 1-4v-26l1-4v-25l1-3v-19l1-15v-13l1-18v-20l1-4 8-1 7 1z"/>
                <path transform="translate(386,1220)" d="m0 0h10l2 2 12 1 9 1h11l5 1h28l3 2-1 9 1 6v24l1 7 1 19-1 7 1 5v23l1 9v14l-1 6 1 8v12l1 8v10l-3 9-3 2-11-1-17 1-8 1-36-2-5-3v-35l-1-11 1-8v-18l-1-10v-38l1-8-1-3z"/>
                <path transform="translate(1279,985)" d="m0 0h13l5 2 1 1v8l1 2v8l-1 7 1 6-1 12 1 3v15l-1 11 1 1v13l-1 3 1 5v15l-2 4h-7l-6-1-7 1-22-1-4-1v2l-9-1h-13l-7 1-9-1h-5l-1-2 1-11-1-3 1-3-1-4v-10l1-5v-8l-1-9v-21l-1-1-3-21v-8l4-3 3-1 11-1 1-1 17-1h17l1-1h21z"/>
                <path transform="translate(1145,1436)" d="m0 0h11l12 20 10 16 1-36h10v54h-11l-12-19-10-16-1 35h-10z"/>
                <path transform="translate(742,1436)" d="m0 0h30l9 3 4 5 1 2v10l-3 6-3 3 4 4 1 2 2 15 1 4h-11l-1-2-1-12-2-5-7-2-14-1v22h-10zm10 9v15l1 1h14l7-2 2-3v-7l-4-4z"/>
                <path transform="translate(852,1436)" d="m0 0h26l9 3 8 7 3 7 1 6v8l-3 12-7 8-7 3h-30zm10 9v37h14l7-3 4-4 2-13-2-10-5-5-4-2z"/>
                <path transform="translate(1106,1435)" d="m0 0h11l9 4 5 4 5 9 1 4v15l-3 8-8 9-7 3-10 1-10-3-7-5-5-9-2-13 2-10 3-6 5-6 8-4zm5 8-9 3-4 5-2 5v15l3 6 5 5 3 1h9l5-3 4-5 2-5v-13l-4-9-6-4z"/>
                <path transform="translate(813,1435)" d="m0 0h11l9 4 5 4 5 9 1 4v15l-3 8-8 9-7 3-10 1-10-3-7-5-5-9-2-13 2-10 3-6 5-6 8-4zm5 8-9 3-4 5-2 5v15l3 6 5 5 3 1h9l5-3 4-5 2-5v-13l-4-9-6-4z"/>
                <path transform="translate(1260,1435)" d="m0 0h10l8 3 5 4 3 7v4h-10l-3-6-3-2-6-1-8 2 1 8 16 5 8 3 5 6 1 2v10l-4 6-6 4-8 2-12-1-8-4-5-7-1-8h10l3 7 5 3h11l4-3v-7l-9-4-16-5-5-6-1-3v-7l4-7 7-4z"/>
                <path transform="translate(1199,1436)" d="m0 0h39l1 1v7l-1 1h-29v13h27v9h-27l1 14 29 1v8h-40z"/>
                <path transform="translate(905,1436)" d="m0 0h10l1 39 3 5 5 2 10-1 3-3 1-3 1-39h10v41l-4 8-5 4-4 2-12 1-8-2-6-4-4-6-1-3z"/>
                <path transform="translate(692,1436)" d="m0 0h28l8 3 5 5 2 7-1 9-4 6-5 3-4 1h-19v20h-10zm10 9v16h18l4-4 1-5-2-5-3-2z"/>
                <path transform="translate(1031,1435)" d="m0 0h11l10 4 5 6 2 4v5h-10l-3-6-4-3-6-1-9 3-4 6-1 3v15l3 6 1 3 6 2h9l5-4 4-9h9l-1 9-5 8-6 4-8 2-10-1-8-4-5-5-4-7-2-13 2-10 3-6 5-6 8-4z"/>
                <path transform="translate(977,1435)" d="m0 0h11l10 4 5 6 2 4v5h-10l-3-6-4-3-6-1-9 3-4 6-1 3v15l3 6 1 3 6 2h9l5-4 4-9h9l-1 9-5 8-6 4-8 2-10-1-8-4-5-5-4-7-2-13 2-10 3-6 5-6 8-4z"/>
                <path transform="translate(1067,1436)" d="m0 0h10v54h-10z"/>
                <path transform="translate(967,1151)" d="m0 0h12l2 1v3h2l1 8-1 5h-4v2l-2 1h-10l-1-5h-2v-11h3z"/>
                <path transform="translate(1362,1128)" d="m0 0 1 2h2v2h-3l1 2v6h-3v2h-3v-2h-2v-8h5v-2h2z"/>
                <path transform="translate(1391,1135)" d="m0 0h4v2h3v3h2v2h2v2h-2v2h-2v-2h-7z"/>
                <path transform="translate(1410,1132)" d="m0 0h10v8h-8v-5h-2z"/>
                <path transform="translate(1417,1147)" d="m0 0h8v8h-3v2h-2v-2h-3z"/>
                <path transform="translate(1363,1155)" d="m0 0h5l1 4h2v4l-8 1z"/>
                <path transform="translate(1379,1149)" d="m0 0h6l1 2v6l-4 1-3-3z"/>
                <path transform="translate(1398,1151)" d="m0 0 4 1v7h-8v-4h2v-3z"/>
                <path transform="translate(1375,1130)" d="m0 0h7v7h-7z"/>
                <path transform="translate(1367,1140)" d="m0 0 1 2h3v5h-2v2h-4v-2h-2v-3h2v-2h2z"/>
                <path transform="translate(1343,1155)" d="m0 0h8v4h-3v2h-2l-1 2v-4h-4v-2h2z"/>
                <path transform="translate(1348,1135)" d="m0 0h5v5h-2v2h-5v-5h2z"/>
                <path transform="translate(1436,1137)" d="m0 0h6v5l-5 1-1-1z"/>
                <path transform="translate(1348,1146)" d="m0 0h7v3h-2v2h-5z"/>
                <path transform="translate(1430,1152)" d="m0 0h6v5h-6z"/>
                <path transform="translate(1357,1164)" d="m0 0h3v2h2v2h-2v2h-5z"/>
                <path transform="translate(1371,1152)" d="m0 0h4v6l-6-1v-2h2z"/>
                <path transform="translate(1353,1161)" d="m0 0h2l1 5-1 2h-4v-5h2z"/>
                <path transform="translate(1445,1144)" d="m0 0h6v3h-2v2h-4z"/>
                <path transform="translate(1427,1137)" d="m0 0h5v5l-3 1-2-1z"/>
                <path transform="translate(1375,1158)" d="m0 0 5 1v4h-5z"/>
                <path transform="translate(1356,1152)" d="m0 0h4v6h-4z"/>
                <path transform="translate(1403,1144)" d="m0 0h5l-1 5h-4z"/>
                <path transform="translate(1458,1134)" d="m0 0 4 1v5h-4z"/>
                <path transform="translate(1447,1132)" d="m0 0h4v2l2 1h-2v2h-4z"/>
                <path transform="translate(1350,1126)" d="m0 0h3v2h2v3h-5z"/>
                <path transform="translate(1392,1146)" d="m0 0h4l-1 5h-3l-1-4z"/>
                <path transform="translate(1499,1132)" d="m0 0h4v5h-4z"/>
                <path transform="translate(1444,1158)" d="m0 0 5 1v2h-2v2h-3z"/>
                <path transform="translate(1410,1147)" d="m0 0h3v2h2v2l-5 1z"/>
                <path transform="translate(1382,1142)" d="m0 0h4l-1 5-3-1z"/>
                <path transform="translate(1477,1131)" d="m0 0h5v3l-5 1z"/>
                <path transform="translate(1465,1146)" d="m0 0 5 1v2h-2v2h-2z"/>
                <path transform="translate(1484,1137)" d="m0 0h2l1 5-4 1z"/>
                <path transform="translate(1468,1130)" d="m0 0 3 1v3h-5v-3z"/>
                <path transform="translate(1382,1164)" d="m0 0h4v4h-4z"/>
                <path transform="translate(1406,1159)" d="m0 0h2v2h2v2l-4 1z"/>
                <path transform="translate(1403,1132)" d="m0 0h4v3h-5z"/>
                <path transform="translate(1368,1131)" d="m0 0 3 1v3l-4-1z"/>
                <path transform="translate(1394,1130)" d="m0 0h4v2h-4z"/>
                <path transform="translate(1383,1130)" d="m0 0h5v2l-5-1z"/>
                <path transform="translate(964,1146)" d="m0 0 2 1z"/>
                <path transform="translate(1180,1164)" d="m0 0"/>
                <path transform="translate(1168,1163)" d="m0 0"/>
                <path transform="translate(1522,1109)" d="m0 0"/>
                <path transform="translate(1313,1100)" d="m0 0"/>
                <path transform="translate(461,1082)" d="m0 0"/>
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
                  <Link href="/about" className="flex items-center space-x-3 text-xl text-foreground hover:text-accent transition-colors">
                    <Users className="w-6 h-6" />
                    <span>Sobre Nosotros</span>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          <div className="flex justify-center w-1/2 md:w-1/3">
            <Link href="/" className="text-primary hover:text-accent transition-colors">
               
<svg version="1.1" viewBox="0 0 2048 2048" width="90" height="90" xmlns="http://www.w3.org/2000/svg">
                <path transform="translate(928,1039)" d="m0 0 6 1v3h3v5h3v7h2l1 8h3v5h2v2h-2v3h2l1 16-3 1v4h2v3h4v2h2v-2h3v2h12v2h5v-2h2v2h20l12 1v2h4l1-2v2h4v2l3-2h5l3 1 25 1h22v2h19v-2h2v2h31v-2h48v2h15v-2h6v2h6v-2h2v2h46v-2h2v2h2v-2h5v2h21v3h6v-3h11v3h6v-3h2v3h2v-3h2v3h12v2h61l12 1v2h2v-2h7v2h7v2h5v-2h5v2h2v-2h2v2h10v-2h2v2h171l7 1 19 1v2l27 1v3h4v-3h2v3h3v2h27v2h14l7 1 21 1v2h13l14 1v2h4l1-2v2h11v3h15v2l21 2v2l18 1v2h2v2h11l4 1v3h3v2l5 1 3 1v5h3v2h-3v4l-5 1v4l-10 1v2h-5v2l-3 1h-8l-1 4-10 1v2h-4v2h-7v2l-8 1h-18v2l-3 1-26 1v3h-7v2h-2v-2h-3v2h-15v2l-4 1h-31v2l-18 1-29 1h-52v2h-14v3h-7v-3h-4v3h-4v-5h-16v2h-2v-2h-3v2h-2v-2h-2v2h-8v-2h-2v2h-3v-2h-2v2h-15v-2h-7v2h-69v3l-38 1h-25v2h-3l-1-2h-87l-2 2v-2h-2v2h-2v-2h-2l-1 2v-2h-19v2h-2v-2h-3v2h-2v-2h-10v2h-2v-2h-4v2h-9v-2h-4v2h-31v2h-2v-2h-4l-1 2v-2h-15v2h-7v-2h-2v2h-7v-2h-3v2h-4v2h-3l-1-4h-4v2h-2v-2h-3v2h-2v-2h-3v2h-4v-2h-3v2h-10v-2h-6v2h-27v-2h-21v2h-14v2h-4v-2h-4l-1 2v-2h-2l-1 2v-2h-8v2h-68l1 8-2 11h-2v2h-3l-1 5h-2v3h-2l-1 9h-3v3h-2v2h-4v3h-2l-1 4-8 1v2h-7v2h-3v-2h-2v2l-10 1-7-1v-2h-3v-3h-2v-12h-2v-2h2v-10h-2l-1-16h-2v-8h-2v-2h-3l-1-4h-8v-2h-17v2h-22v2h-4v-2h-5v2h-2v2h-41v2h-8v-2h-7l-1 2v-2h-3v2h-6v-2h-2v2h-19v-2h-2v2h-101v-2h-2v2h-7v-2h-129v-2h-8v-2h-25l-1 2v-2h-24v-2h-5v2h-5v-2h-27l-62-1v-3h-2v3h-4v-3h-4v3h-7v-3h-9v-2h-7v2h-8v-2l-23-1v3h-3v3l-10 1v2h-5v2h-6v2h-7v2h-18v2l-5 1-1 3h-17v2h-21v-2h-6v2l-4 1-5-1-1-5h-2v-3h-4l-1-9h-3l-1-10h-3v-8h-3v-10h-2v-6h2v-2h-2v-2l-2-1v-26h2v-3h-2v-6h2v-3h-2v-2h2v-7h2v-10l1-2h2v-5h3l2-12h2l1-3h2v-2h2v-2h2l1-7 5-1 37 1v2h9v2l16 1v2h7v2h7v2l9 1v2h6v3l5-1h26v-2h15v-2l26-1v-2h4v2h3v-2h17v-2h9v-2h6v2h4v-2l55-1h24v-2h2v2h12v-2h7v2h6v-2h6v2h6v-2h16v2h4l1-2v2h4v-2h3v2h2v-2h5v2h2v-2h15v2h12v-2h12v2h3v-2h3v2h3v-2h6v2h59l69 1v2h6v-2h2v2h7v2h5v-2h5v2h4v-2h2v2h6v-2h3v2h6v-2h6v2h5v-2h17v2h25v2h2v-2h7v2h6v-2h2v2h45v-2h3v-4l3-1 1-2h3v-3h2v-2l3-3h2v-2h2v-2h2l1-5h2v-2h3v-2h2v-5l3-3 1-2 5-2 3-3h2l1-5 3-3h6v-3zm0 13v2h-3v4h-3l-1 8h-2v2h-2v2h-4v5h-2l-1 6h-3v3l-5 1v4l-4 1v4h-3v2l-7 1-1 4-4 1v2h-3v2h-12l1 5h3v12l1 5h2v23l1 8h4l1 5h2v2h7v2h2v2l7 1h10l1 2v-2h9v2h2v2h4v-2h6v2h3v8h-3v2h-12l-15 1v2h-6v2h-6v2l-5 1v2l-7 1-2 1v3h-2v4h-4v3l8 2 1 5h2v3h4v12h3v3h2v20l1 5h2v2h-2v3h9v-2l7-1 2-9h3v-2l5-1v-3h2l2-6 3-3v-4h2v-6h3l1-4h2v-7h4v-5l17-1h32l9-1v-2h2v2h2v-2h2v-3h4v-2h2v-4l5-1 1-7h2l1-2v-8h3v-3h2l1-31-1-9-5-1-1-4h-2l-1-7h-3v-3h-4v-2h-4v-2h-2v-2l-19-1h-26l-1-2v2h-5v-2h-7v-3h-5l-1-6h-2v-3h2l1-9v-20l-1-7h-2v-5h-2l-1-6zm-750 44v20l1 6h2v6h-2v2h2v2h-2v11h2v35h6v-2h3v2h3v-2h3v2h3v-2h27l15-1v-2h14v-15h-2v-3h2v-11h2v-4h-2v-5h2l1-5v-16l-9-1v-2h-2v-3h-6v-2h-10v-2h-5v-2l-6-1-1-2h-11l-1-2v2h-2v-2zm842 22v2h3v3h2v5h3l1 12h2v2h2v13h2v3h2v5l2 3h2v2h2v2l3 3h2v2h3v3h5v2l4 1h12v2h12l1 2v-2h16l1 2v-2h5v-2h7v-3h6v-3h5l2-4v-5h2l1-7h2v-16h2v-3h-2v-3h2v-5h-2v-4h2v-2h-2v-6h-27v2h-2v-2h-2v2h-5v-2l-38-1-11 1h-13l-7-1-3-1zm212 2 1 2zm5 0 1 2zm12 0v3h3v-3zm10 0v2h2l1 4v-3l4-1v-2zm15 0v2l-3 1h7l-2-1v-2zm8 0v8l1 2h3v2h-6v2l6 1 2-1 1-8v-3h-6zm21 0v2h2v4h2v-3h2v-3zm-8 2m16 0m37 0m-27 1v3h2l1 2v-5zm-59 3v4h2v-4zm74 0v2h2v-2zm-107 2v2h3v-2zm11 0v2l-3 1 5 1v-4zm74 0v2h3v-2zm7 0v2h-4v5h-5v5h-5v-3h-4v-3l-8 1v7h2v-5h4v3h4v2l9 1v-6h9l1-5-1-4zm-153-9-21 1v8h2v16h-2l-1 26v16h-2v19h50l2-1v-2h3v2h5v-2h8v2h2v-2h6v2h3v-2h2v2l10 1 5-1v-2h3v2h6v-2h3v2h2v-2h8v2h2v-2h12v2h6v-2h6l1 2v-2h2v2h4v-2h2v2h2v-2h4v2h2v-2h12v2h4v-2h5v2h2v-2h15v2h2v-2h3v2h23v-2h6v2h2v-2h3l1 2v-2h2l1 2v-2h39v2h4v-2h5v2h2v-2h36v2h2v-2h6v2h2v-2h10v2h3v-2h23v-2h2v2h7v-2h5l1 2v-2h22v2h2v-2h14v-3h2v3h2v-3h2v3h3v-3h4l1 3v-3h4l1 3v-3h2v3h7v-3h3v3h10v-3h4l1 3v-3h34l1 3v-3h24l26-1 1-3h2v2h3v-2h2v2h4v-2h20l4-1v-2h20v-2h3v2h2l2-4h7v2h2v-2h12l3-1v-2h2v2h5v-2h5v-2h9l5-1v-2h10v-2l4-1v-2h6v-2h6l2-1v-2h3v-2h7l-1-3h-9v-2h-2v-2l-18-2v-2h-13v-3l-8-1h-11v-2h-4l-1-2v2h-4v-2l-15-1h-12v-2l-36-2h-9v-2h-20v-3h-7v-2h-5v2h-3v-2l-26-1-1-2-34-2h-7l-1-2v2h-4v-2h-24v-2h-12v2h-6v-2h-6v2h-7v-2h-3v2h-34l-1-2v2h-17v2h-3v-2h-2v2h-3v-2h-31v-2h-2v2h-19v2h2v2h-5l1-4h-17v-2h-5v2h-12v-5l-1 3h-9v-3h-15v3h-2v-3h-6l-1 5h-2v-2h-4v-3h-6v3h-2v4h-5v-4h-2v5h4v9h-5v2l-2 1h2l1 8h-5v4h2v3l-2 1h2v2h2v7l1 2 4 1 1 4-10 1v2h-7v-2l-20-1h-23l-10 1v2h-17v-2h-2v2h-45v-2l-8-1v-4l-8-1v-2h-2v-2h-2v-2l-4-1v-4h-3v-4h-2v-4h-4l-1-5h-2l-1-4h-2v-2h-2v-20zm86 11-2 2h5v-2zm10 0m35 0v2h6l-2-2zm34 0 3 2 4-1zm-84 2v2h-6v1h7l2-1v-2zm22 0v2h3v-2zm3 2m19 0m-70 1v2h-2v3h2v2h2v2h5l-1-4h-4v-5zm43-1-2 1v2h3zm67 1v2h-2v5h-10v2h3v2l10 1-1-5h5v-2h-2v-5zm-74 2v3h-5v6h5v-2l2-1v-3h3v-3zm-26 3v2h4v-2zm39 0v3h2v-3zm-35 2 1 2zm6 1v3h2v-3zm43 0m3 0m8 0 4 1zm-47 1v2h2v-2zm18 0-2 3v8l2 2v-2h3v-3h-3v-3h3v-5zm23 0v5h2v-5zm-54 5v2l-2 1h8v-1h-5zm77 0v2h3v-2zm9 0v2h3v-2zm-44 2m24 0 4 1zm23 0m-48 1v3h-2v2l3 1v-6zm-7 3 1 2zm24 0v3h2v-3zm33 0 1 9 4-1 1-5h-3v-3zm-69 2m50 0v1h5v-1zm-4 1v3h4v-3zm16 0 2 1 1 2v-3zm-64 3v2h2v-2zm10 0 1 2zm54 0v3h-2v2h5l-1-5zm-67 2m14 0v3h4l-1-3zm31 0v3h2v-3zm6 0v3h4v-2zm-31 1v2h4v-2zm19 0v2h4v-2zm19 0v2h2v-2zm16 0 1 4zm6 0v2h2v2h2v-4zm-94 2v2h5v-2zm-991 19-11 1v4h-2v-2h-2v2h-8v2h-4v-2h-2v3h-12l-1 2-9 2v3h-5v2h-3v3h-5v2l-6 2-1 5-4 1v4h-2v2h15v-2h3v2h3v-2h9v-2h9v-2h9l9-1v-3h2v-2l14-1 4-1v-2l8-1 1-4h2v-4h-2v-10l-1-1z" fill="#fff"/>
                <path transform="translate(533,551)" d="m0 0h16l11 2 3-1 18 1 6 2 2 5-1 5 1 11-1 6v11l1 16v103l1 4-1 7v17l1 10-1 15 1 13v100l1 4-1 11 1 4-1 5 1 3v34l-1 6 1 7v27l1 3-1 35 1 12-1 8v22l1 5-1 4 1 8-1 7h-13l-17-1-8 1h-62l-2-1-8 1-5-1-1-6-1-13-1-21-1-7-2-27v-7l-1-3v-11l-2-16-1-11 1-6-2-8-1-14v-7l-1-6-1-16v-5l-1-1 1-7h-6l1 3 1 16-1 5v5l1 4v26l1 10-1 11 1 5v22l1 3v14l1 13-1 6 1 2v25l1 3-1 4 1 12-1 3-6 1-7-1h-39l-11 1h-13v-30l1-6-1-3v-112l-1-4 1-14v-9l-1-3v-24l1-3-1-12 1-5-1-6v-17l1-6-1-4 1-3-1-15v-7l1-7-1-9v-11-3-133l-1-6 1-4-1-25 1-5-1-7v-28h2l1-5 5-3 9-1 7 1 3-1 16 1h17l5 1h17l4 2 2 4 2 1 1 7v11l2 10v6l1 6 2 17 1 8v10l1 3v10l2 7v9l1 3-1 3 1 2 3 32 1 21 2 10v11l2 10 1 25 1 2v13l2 7v7l1 8v7l2 10v10l1 5 1 9 1 16 1 2-1 6 1 9 1 4v5l1 3v7l1 2v15l2 10v-26l1-10-1-8v-29l-1-4v-12l1-3v-17l-1-4 1-7-1-9 1-6-1-2 1-4-1-3v-15l1-2-1-6-1-16 1-2v-43l1-6-1-4v-43l-1-16 1-9-1-4 1-8-1-14 1-4-1-3 1-4-1-3 1-9-1-18 2-7 4-2 1-4 18-2zm-25 396 1 3zm1 4m-1 1 1 3z" fill="#fff"/>
                <path transform="translate(1560,550)" d="m0 0 8 1 9-1h8l2 4 5 2 2 9 1 13-1 2 1 9v14l1 6 1 18-1 4 1 7v7l1 2-1 5 1 19v7l1 10v35l1 2v17l1 17v18l2 9-1 9 1 13v7l1 8-1 7 1 13 1 7-1 5 1 4-1 8 2 10-1 11 1 18v10l1 6v26l1 4-1 7 2 17v5l-1 1 1 17 1 7-1 3 1 9v11 3 8l1 3-1 4 1 1v27l1 1-1 8 1 11 1 6v9l-6 1-2-1h-10l-11 1-12-1-3 1h-22l-7-1h-16l-2-4 1-5-1-4 1-14v-12l-1-13v-10l-1-5 1-1v-25l-1-4 1-2v-18l-1-2 1-14-1-2v-9l-1-1 1-16-1-5 2-5-2-3 1-3-1-6 1-3-1-1v-9l1-3-1-12v-9l-1-2 1-8v-7l-1-6v-15l1-8v-17l-1-1v-20l-1-3 1-4v-9l-1-14v-42l-1-3v-8l1-4 1-6-2-3 1-10-1-7v-10l1-10v-9l-2-10-3-1-1 9v18l-1 5 1 9 1 3-1 9v11l-1 8v72l-1 9 1 4v28l-1 2v16l1 7-2 18 1 4v34l-1 5v7l1 6-1 11 1 8-1 4v10l-1 4 1 3-1 3 1 9v19l-1 6v21l-1 4 1 4v12l-1 13 1 7-1 7v9l1 5v14h-16l-3-2h-9l-8-1-5 1-1-1-14-1-5 2-11-1-3 1-12-1-1-5v-7l1-3-1-11 1-11v-12l1-9 1-2-1-9 1-19 1-5v-13l1-4-1-5 1-4-1-6 1-5 1-26v-6l1-3v-17l1-3-1-9 1-2v-7l1-5-1-7 1-7v-10l1-3v-21l1-7v-23l1-17 1-3-1-4 1-11v-8l1-3v-25l2-13-1-5 1-4v-17l1-4-1-2 1-8v-13-4l2-21v-24l1-15 1-7v-17l1-6v-27l2-6 7-3h11l11-1 5 1 5-1 30-1 7 1 6-1 3 1 10-2h16z"/>
                <path transform="translate(1142,550)" d="m0 0 8 1 9-1h8l2 4 5 2 2 9 1 13-1 2 1 9v14l1 6 1 18-1 4 1 7v7l1 2-1 5 1 19v7l1 10v35l1 2v17l1 17v18l2 9-1 9 1 13v7l1 8-1 7 1 13 1 7-1 5 1 4-1 8 2 10-1 11 1 18v10l1 6v26l1 4-1 7 2 17v5l-1 1 1 17 1 7-1 3 1 9v11 3 8l1 3-1 4 1 1v27l1 1-1 8 1 11 1 4-9 2-8-1h-19l-1-1h-13l-7 1-1-1-12 1-7-2-4 1h-9l-1-4 1-12v-12l-1-13v-10l-1-5 1-1v-25l-1-4 1-2v-18l-1-2 1-14-1-2v-9l-1-1 1-16-1-5 2-5-2-3 1-3-1-6 1-3-1-1v-9l1-3-1-12v-9l-1-2 1-8v-7l-1-6v-15l1-8v-17l-1-1v-20l-1-3 1-4v-9l-1-14v-42l-1-3v-8l1-4 1-6-2-3 1-10-1-7v-10l1-10v-9l-2-10-3-1-1 9v18l-1 5 1 9 1 3-1 9v11l-1 8v72l-1 9 1 4v28l-1 2v16l1 7-2 18 1 4v34l-1 5v7l1 6-1 11 1 8-1 4v10l-1 4 1 3-1 3 1 9v19l-1 6v21l-1 4 1 4v12l-1 13 1 7-1 7v9l1 5-1 2-8-1h-11l-6-1-9 1-5-1-6 1-22-2-11 1v-2l-8 1-1-14 1-11v-12l1-9 1-2-1-9 1-19 1-5v-13l1-4-1-5 1-4-1-6 1-5 1-26v-6l1-3v-17l1-3-1-9 1-2v-7l1-5-1-7 1-7v-10l1-3v-21l1-7v-23l1-17 1-3-1-4 1-11v-8l1-3v-25l2-13-1-5 1-4v-17l1-4-1-2 1-8v-13-4l2-21v-24l1-15 1-7v-17l1-6v-27l2-6 7-3h11l11-1 5 1 5-1 30-1 7 1 6-1 3 1 10-2h16z"/>
                <path transform="translate(748,550)" d="m0 0 8 1 9-1h8l2 4 5 2 2 9 1 13-1 2 1 9v14l1 6 1 18-1 4 1 7v7l1 2-1 5 1 19v7l1 10v35l1 2v17l1 17v18l2 9-1 9 1 13v7l1 8-1 7 1 13 1 7-1 5 1 4-1 8 2 10-1 11 1 18v10l1 6v26l1 4-1 7 2 17v5l-1 1 1 17 1 7-1 3 1 9v11 3 8l1 3-1 4 1 1v27l1 1-1 8 1 6h-9l-16-2h-15l-11-1h-15l-8-1-3 1-10-1-2-3v-12l-1-13v-10l-1-5 1-1v-25l-1-4 1-2v-18l-1-2 1-14-1-2v-9l-1-1 1-16-1-5 2-5-2-3 1-3-1-6 1-3-1-1v-9l1-3-1-12v-9l-1-2 1-8v-7l-1-6v-15l1-8v-17l-1-1v-20l-1-3 1-4v-9l-1-14v-42l-1-3v-8l1-4 1-6-2-3 1-10-1-7v-10l1-10v-9l-2-10-3-1-1 9v18l-1 5 1 9 1 3-1 9v11l-1 8v72l-1 9 1 4v28l-1 2v16l1 7-2 18 1 4v34l-1 5v7l1 6-1 11 1 8-1 4v10l-1 4 1 3-1 3 1 9v19l-1 6v21l-1 4 1 4v12l-1 13 1 7-1 7-1 4-10 1-14-1h-61l-1-5 1-11v-12l1-9 1-2-1-9 1-19 1-5v-13l1-4-1-5 1-4-1-6 1-5 1-26v-6l1-3v-17l1-3-1-9 1-2v-7l1-5-1-7 1-7v-10l1-3v-21l1-7v-23l1-17 1-3-1-4 1-11v-8l1-3v-25l2-13-1-5 1-4v-17l1-4-1-2 1-8v-13-4l2-21v-24l1-15 1-7v-17l1-6v-27l2-6 7-3h11l11-1 5 1 5-1 30-1 7 1 6-1 3 1 10-2h16z"/>
                <path transform="translate(1252,552)" d="m0 0h24l7 1 3-1 31 1h16l5 1 10-1 4 1h38l3 1 6-1 5 4v12l1 5-1 5 1 12v49l-1 7 1 5-1 4 1 10-1 8 1 6-1 5 1 31-1 4v113l-2 6h2v26l-1 4 1 7v19l-1 1v6l1 1v18l-1 11v17l1 5-1 26v56l-2 9h2v31l-1 9 1 6-1 4v8l-10 1-1 1h-8l-6-2h-20l-4-1-2 1-5-1v-2l-7 1-2 1-5-1h-14l-5-3-1-2v-19l1-4v-7l-1-8v-22l1-3-1-6v-25l-1-5 1-7v-15l1-6v-9l-1-5v-35l-1-5 1-6v-35-2l-1-4 1-16v-20l-1-7v-7l1-6v-8l-1-7 1-5-1-4 1-2v-50l-1-4v-12l1-4v-38l-1-6 1-6v-11-3-13l1-6h-13l-2 1h-32l-7 1-9-1h-9l-3-1-1-7h-2v-12l2-10-1-7v-14l1-16v-6l-1-5 2-4z"/>
                <path transform="translate(990,550)" d="m0 0 9 1 5 4v2l5 1 1 8 1 1v6l-1 2v15l-1 6v10l1 4-2 11-1 31-1 5 1 5-2 8 1 3v7l-2 9 1 7-1 3-1 12 1 6-1 10-1 22-1 5v19l-1 9v6l-1 1v20l-1 3v12l-1 3 1 11-1 8-1 11 1 5-1 7-1 22-1 4v23l-2 14v12l-1 5v15l-1 2v13l-1 3v12 3l-1 19-1 3 1 8-1 10-1 4 1 4-2 12v13l-1 6 1 5-1 4v8l-2 1-2-1-20-1h-3l-2-13-1-4 1-3-3-7-2-5v-4h-2l-2-10h-3l-3-5-2-1-3-6-7-1-7 1-6 3-5 4-3-1v-20l1-7-1-21 1-5v-53l1-3-1-6 1-2v-30l1-4-1-13 1-6-1-5 1-8v-50l1-10v-30l1-2-1-12 1-8-1-8 1-2v-22l1-9-1-6 1-9-1-11 1-6v-29l1-3-1-5 1-10-1-7 1-22 1-24-1-2 1-3-1-8 2-6 5-2 10 1h18l2-1 8 1 6-1h22z"/>
                <path transform="translate(875,552)" d="m0 0 9 1 4 4v16l-1 2 1 7v12l-1 2 1 11v15l1 6-1 8 1 5 1 7-1 9v20l1 8-1 3v12l1 2v34l1 9-1 3 1 19v28l1 18-1 3 1 10-1 6 1 5v13l1 9-1 14 1 6v38l1 5-1 4v14l1 13v53l1 3-1 3 1 6-1 6 1 8-1 11 1 12-1 2-4 2-7 10-9 9-7 9-5 5-8 1-17-2h-10l-4 1-3-1-2-17 1-4-1-10v-7l-1-6 1-5-1-11-1-10v-8l-1-14v-28l-1-2v-20l-2-11-1-29v-14l-2-16 1-4-1-10-1-11 1-6-1-8-1-15 1-11-2-4v-31l-2-10v-26l-1-12-1-9 1-5-1-5v-10l-1-9-1-11 1-5-1-2-1-18v-22l-1-4v-19l-1-1v-10l-1-5v-15l-1-8v-14l2-3 12-1 4-1 6 1 2-1h10l3-1 5 1 1-1h24z"/>
                <path transform="translate(1375,1217)" d="m0 0h25l2 6v8l-1 14 1 3v29l-1 3v12l1 1v9l-1 5v31l-1 9-2 4-5 12-5 8-4 2-2 6-10 9h-2l-2 4-6 1-2 2h-5v2l-14 4-3 1h-11l-12 2-15 2-20-1-12-2-6-3v-2l-7-1-6-3-6-2-7-3-9-9-8-14v-3h-2l-4-9-4-11-1-7-2-10 1-13 1-6v-14l-1-10 1-2-1-6 1-2v-29l-1-4 1-7v-12h8l1-2 2 1h7l10-1h20l14 1 22-1 6 1 1 8v8l-1 6 1 5-1 6 1 7v19l-1 3v20l-1 6 1 9 1 8-1 3 3 4h6l5-2 1-10 1-15-1-1v-15l1-4-1-7v-19l-1-11 1-4v-9l-1-9v-6l4-1h17l8-1 6 1h21z"/>
                <path transform="translate(843,1223)" d="m0 0h15l6 3 4 1 4 6 2 1 2 10 1 1 2 18 1 5 3 11 1 4 19 1 7-2 12-7 9-3v-2l5-3 5-8 2-1 2-7 4-8 5-8 2-7 10-1 6 1v-2h4v29l-1 12-1 2v13l-1 4 1 7-2 4 1 7-1 5v8l-1 6v25l-1 4-1 17v7l-1 3 1 7-1 9-4 6-6 1h-8l-5 1-7-1-3 1-11-1h-23l-3-1-8 1-18-1h-11l-6 1-10-2-1 3h-5l-4-4-1-9 1-8-1-1v-8l-1-4-1-18 1-2-2-10v-18l-1-13-1-12v-15l-1-2v-19l-1-4-1-27 1-5z"/>
                <path transform="translate(1598,1214)" d="m0 0h17l2 3v10l-1 8 1 6 1 19v27l1 1 1 11-2 7 1 20 2 6-1 5 1 7-1 5 1 5v15l1 7v22l-2 4-3 2-15 1h-23l-9 1h-13l-26-1h-2l-2-5v-18l-1-3 1-9v-10l-1-4v-24l-1-4 1-1v-13l-1-8v-7l1-5-1-8v-28l-1-4 1-9-1-14 1-14 1-2h6l1 1h23l10 1 9-1h12l7-1z"/>
                <path transform="translate(517,1225)" d="m0 0h28l12 1 3-1 5 1 6 1 7-1 13 1 1 1v14l1 7v144l-3 9-1 1h-32l-7 1h-44l-2-1v-2h-2l-2-11v-10l-1-6v-8l-2-24-1-9-1-7 1-5-2-3v-14l-2-12-1-19-1-11v-7l-1-1-1-24-1-3 6-1h23z"/>
                <path transform="translate(1450,1214)" d="m0 0 7 1h16l7 1h14l4 1 7-1 1 5-1 26v56l-1 13v38l-1 11 1 7-2 16 1 7-4 6-9 2h-22l-10 1-2-1-7 1-4-1-6 1h-16l-9-1-3-2-1-11v-41l1-4v-25l1-3v-19l1-15v-13l1-18v-20l2-17h16l2 1 6-1z"/>
                <path transform="translate(1178,1220)" d="m0 0h21l-1 15 1 6 1 19v27l1 1 1 11-2 7 1 20 2 6-1 5 1 7-1 5 1 5v15l1 7v22l-2 4-3 2-15 1h-23l-9 1h-13l-26-1h-2l-2-5v-18l-1-3 1-9v-10l-1-4v-24l-1-4 1-1v-13l-1-8v-7l1-5-1-8v-28l-1-4 1-9-1-14v-6l6-1 17-1 9-1h23l2-1h12z"/>
                <path transform="translate(1058,1223)" d="m0 0 6 1 8-1 15 1 1 5-1 18v56l-1 13v38l-1 11 1 7-2 16 1 7-4 6-9 2h-22l-10 1-2-1-7 1-4-1-6 1h-16l-9-1-3-2-1-11v-41l1-4v-25l1-3v-19l1-15v-13l1-18v-20l2-7 5-1 9 1 8-1 6 1 14-1 13 1z"/>
                <path transform="translate(800,1228)" d="m0 0h4v7l1 6 1 19v27l1 1 1 11-2 7 1 20 2 6-1 5 1 7-1 5 1 5v15l1 7v22l-2 4-3 2-15 1h-23l-9 1h-13l-26-1h-2l-2-5v-18l-1-3 1-9v-10l-1-4v-24l-1-4 1-1v-13l-1-8v-7l1-5-1-8v-28l-1-4 1-9-1-15 6-1h12l7 1h15l2-1h26z"/>
                <path transform="translate(637,1226)" d="m0 0 7 1 2-1 8 1 9-1 2 1h10l13 2h5v74l-1 13v38l-1 11 1 7-2 16 1 7-4 6-9 2h-22l-10 1-2-1-7 1-4-1-6 1h-16l-9-1-4-3-1-21 1-4v-26l1-4v-25l1-3v-19l1-15v-13l1-18v-20l1-4 8-1 7 1z"/>
                <path transform="translate(386,1220)" d="m0 0h10l2 2 12 1 9 1h11l5 1h28l3 2-1 9 1 6v24l1 7 1 19-1 7 1 5v23l1 9v14l-1 6 1 8v12l1 8v10l-3 9-3 2-11-1-17 1-8 1-36-2-5-3v-35l-1-11 1-8v-18l-1-10v-38l1-8-1-3z"/>
                <path transform="translate(1279,985)" d="m0 0h13l5 2 1 1v8l1 2v8l-1 7 1 6-1 12 1 3v15l-1 11 1 1v13l-1 3 1 5v15l-2 4h-7l-6-1-7 1-22-1-4-1v2l-9-1h-13l-7 1-9-1h-5l-1-2 1-11-1-3 1-3-1-4v-10l1-5v-8l-1-9v-21l-1-1-3-21v-8l4-3 3-1 11-1 1-1 17-1h17l1-1h21z"/>
                <path transform="translate(1145,1436)" d="m0 0h11l12 20 10 16 1-36h10v54h-11l-12-19-10-16-1 35h-10z"/>
                <path transform="translate(742,1436)" d="m0 0h30l9 3 4 5 1 2v10l-3 6-3 3 4 4 1 2 2 15 1 4h-11l-1-2-1-12-2-5-7-2-14-1v22h-10zm10 9v15l1 1h14l7-2 2-3v-7l-4-4z"/>
                <path transform="translate(852,1436)" d="m0 0h26l9 3 8 7 3 7 1 6v8l-3 12-7 8-7 3h-30zm10 9v37h14l7-3 4-4 2-13-2-10-5-5-4-2z"/>
                <path transform="translate(1106,1435)" d="m0 0h11l9 4 5 4 5 9 1 4v15l-3 8-8 9-7 3-10 1-10-3-7-5-5-9-2-13 2-10 3-6 5-6 8-4zm5 8-9 3-4 5-2 5v15l3 6 5 5 3 1h9l5-3 4-5 2-5v-13l-4-9-6-4z"/>
                <path transform="translate(813,1435)" d="m0 0h11l9 4 5 4 5 9 1 4v15l-3 8-8 9-7 3-10 1-10-3-7-5-5-9-2-13 2-10 3-6 5-6 8-4zm5 8-9 3-4 5-2 5v15l3 6 5 5 3 1h9l5-3 4-5 2-5v-13l-4-9-6-4z"/>
                <path transform="translate(1260,1435)" d="m0 0h10l8 3 5 4 3 7v4h-10l-3-6-3-2-6-1-8 2 1 8 16 5 8 3 5 6 1 2v10l-4 6-6 4-8 2-12-1-8-4-5-7-1-8h10l3 7 5 3h11l4-3v-7l-9-4-16-5-5-6-1-3v-7l4-7 7-4z"/>
                <path transform="translate(1199,1436)" d="m0 0h39l1 1v7l-1 1h-29v13h27v9h-27l1 14 29 1v8h-40z"/>
                <path transform="translate(905,1436)" d="m0 0h10l1 39 3 5 5 2 10-1 3-3 1-3 1-39h10v41l-4 8-5 4-4 2-12 1-8-2-6-4-4-6-1-3z"/>
                <path transform="translate(692,1436)" d="m0 0h28l8 3 5 5 2 7-1 9-4 6-5 3-4 1h-19v20h-10zm10 9v16h18l4-4 1-5-2-5-3-2z"/>
                <path transform="translate(1031,1435)" d="m0 0h11l10 4 5 6 2 4v5h-10l-3-6-4-3-6-1-9 3-4 6-1 3v15l3 6 1 3 6 2h9l5-4 4-9h9l-1 9-5 8-6 4-8 2-10-1-8-4-5-5-4-7-2-13 2-10 3-6 5-6 8-4z"/>
                <path transform="translate(977,1435)" d="m0 0h11l10 4 5 6 2 4v5h-10l-3-6-4-3-6-1-9 3-4 6-1 3v15l3 6 1 3 6 2h9l5-4 4-9h9l-1 9-5 8-6 4-8 2-10-1-8-4-5-5-4-7-2-13 2-10 3-6 5-6 8-4z"/>
                <path transform="translate(1067,1436)" d="m0 0h10v54h-10z"/>
                <path transform="translate(967,1151)" d="m0 0h12l2 1v3h2l1 8-1 5h-4v2l-2 1h-10l-1-5h-2v-11h3z"/>
                <path transform="translate(1362,1128)" d="m0 0 1 2h2v2h-3l1 2v6h-3v2h-3v-2h-2v-8h5v-2h2z"/>
                <path transform="translate(1391,1135)" d="m0 0h4v2h3v3h2v2h2v2h-2v2h-2v-2h-7z"/>
                <path transform="translate(1410,1132)" d="m0 0h10v8h-8v-5h-2z"/>
                <path transform="translate(1417,1147)" d="m0 0h8v8h-3v2h-2v-2h-3z"/>
                <path transform="translate(1363,1155)" d="m0 0h5l1 4h2v4l-8 1z"/>
                <path transform="translate(1379,1149)" d="m0 0h6l1 2v6l-4 1-3-3z"/>
                <path transform="translate(1398,1151)" d="m0 0 4 1v7h-8v-4h2v-3z"/>
                <path transform="translate(1375,1130)" d="m0 0h7v7h-7z"/>
                <path transform="translate(1367,1140)" d="m0 0 1 2h3v5h-2v2h-4v-2h-2v-3h2v-2h2z"/>
                <path transform="translate(1343,1155)" d="m0 0h8v4h-3v2h-2l-1 2v-4h-4v-2h2z"/>
                <path transform="translate(1348,1135)" d="m0 0h5v5h-2v2h-5v-5h2z"/>
                <path transform="translate(1436,1137)" d="m0 0h6v5l-5 1-1-1z"/>
                <path transform="translate(1348,1146)" d="m0 0h7v3h-2v2h-5z"/>
                <path transform="translate(1430,1152)" d="m0 0h6v5h-6z"/>
                <path transform="translate(1357,1164)" d="m0 0h3v2h2v2h-2v2h-5z"/>
                <path transform="translate(1371,1152)" d="m0 0h4v6l-6-1v-2h2z"/>
                <path transform="translate(1353,1161)" d="m0 0h2l1 5-1 2h-4v-5h2z"/>
                <path transform="translate(1445,1144)" d="m0 0h6v3h-2v2h-4z"/>
                <path transform="translate(1427,1137)" d="m0 0h5v5l-3 1-2-1z"/>
                <path transform="translate(1375,1158)" d="m0 0 5 1v4h-5z"/>
                <path transform="translate(1356,1152)" d="m0 0h4v6h-4z"/>
                <path transform="translate(1403,1144)" d="m0 0h5l-1 5h-4z"/>
                <path transform="translate(1458,1134)" d="m0 0 4 1v5h-4z"/>
                <path transform="translate(1447,1132)" d="m0 0h4v2l2 1h-2v2h-4z"/>
                <path transform="translate(1350,1126)" d="m0 0h3v2h2v3h-5z"/>
                <path transform="translate(1392,1146)" d="m0 0h4l-1 5h-3l-1-4z"/>
                <path transform="translate(1499,1132)" d="m0 0h4v5h-4z"/>
                <path transform="translate(1444,1158)" d="m0 0 5 1v2h-2v2h-3z"/>
                <path transform="translate(1410,1147)" d="m0 0h3v2h2v2l-5 1z"/>
                <path transform="translate(1382,1142)" d="m0 0h4l-1 5-3-1z"/>
                <path transform="translate(1477,1131)" d="m0 0h5v3l-5 1z"/>
                <path transform="translate(1465,1146)" d="m0 0 5 1v2h-2v2h-2z"/>
                <path transform="translate(1484,1137)" d="m0 0h2l1 5-4 1z"/>
                <path transform="translate(1468,1130)" d="m0 0 3 1v3h-5v-3z"/>
                <path transform="translate(1382,1164)" d="m0 0h4v4h-4z"/>
                <path transform="translate(1406,1159)" d="m0 0h2v2h2v2l-4 1z"/>
                <path transform="translate(1403,1132)" d="m0 0h4v3h-5z"/>
                <path transform="translate(1368,1131)" d="m0 0 3 1v3l-4-1z"/>
                <path transform="translate(1394,1130)" d="m0 0h4v2h-4z"/>
                <path transform="translate(1383,1130)" d="m0 0h5v2l-5-1z"/>
                <path transform="translate(964,1146)" d="m0 0 2 1z"/>
                <path transform="translate(1180,1164)" d="m0 0"/>
                <path transform="translate(1168,1163)" d="m0 0"/>
                <path transform="translate(1522,1109)" d="m0 0"/>
                <path transform="translate(1313,1100)" d="m0 0"/>
                <path transform="translate(461,1082)" d="m0 0"/>
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
