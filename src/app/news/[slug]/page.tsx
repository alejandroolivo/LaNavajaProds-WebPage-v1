
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface NewsArticle {
  id: number;
  slug: string;
  title: string;
  description: string;
  content: string | string[];
  author: string;
  date: string;
  tags: string[];
  hint: string;
  coverImage: string;
}

function getNewsData(slug: string): NewsArticle | null {
    const newsDir = path.join(process.cwd(), 'public', 'noticias', slug);
    const filePath = path.join(newsDir, 'metadata.json');
    try {
        if (!fs.existsSync(filePath)) {
          return null;
        }
        
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const metadata = JSON.parse(fileContent);

        const files = fs.readdirSync(newsDir);
        const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.webp'];
        const imageFile = files.find(f => imageExtensions.some(ext => f.toLowerCase().endsWith(ext)));

        if (imageFile) {
          metadata.coverImage = `/noticias/${slug}/${imageFile}`;
        } else {
            metadata.coverImage = `https://placehold.co/1200x600.png`;
             if (!metadata.hint) metadata.hint = 'placeholder';
        }
        
        return metadata as NewsArticle;
    } catch (error) {
        console.error(`Could not read metadata for slug ${slug}:`, error);
        return null;
    }
}

export default function NewsArticlePage({ params }: { params: { slug: string } }) {
  const article = getNewsData(params.slug);
  
  if (!article) {
    notFound();
  }

  const contentParagraphs = Array.isArray(article.content) ? article.content : [article.content];

  return (
    <article className="max-w-4xl mx-auto">
      <Button asChild variant="ghost" className="mb-8 -ml-4">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a Noticias
        </Link>
      </Button>
      <Card>
        <div className="relative w-full aspect-video rounded-t-lg overflow-hidden">
            <Image 
                src={article.coverImage}
                alt={`Portada de ${article.title}`}
                fill
                className="object-cover"
                data-ai-hint={article.hint}
            />
        </div>
        <CardContent className="pt-6">
          <h1 className="text-4xl font-bold font-headline mb-4 text-primary">{article.title}</h1>
          <p className="text-muted-foreground text-sm mb-8">Publicado el {article.date} por {article.author}</p>
          <div className="space-y-6 text-lg text-foreground/90">
            {contentParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
          </div>
        </CardContent>
      </Card>
    </article>
  );
}
