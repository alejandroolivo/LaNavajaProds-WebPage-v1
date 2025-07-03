
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import fs from 'fs';
import path from 'path';

interface NewsMetadata {
  id: number;
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
  tags: string[];
  hint: string;
  coverImage: string;
}

function getNews(): NewsMetadata[] {
  const newsDirectory = path.join(process.cwd(), 'public', 'noticias');
  try {
    if (!fs.existsSync(newsDirectory)) {
      console.log("Noticias directory not found, returning empty array.");
      return [];
    }
    const newsFolders = fs.readdirSync(newsDirectory);

    const newsItems = newsFolders.map((folder) => {
      const newsDir = path.join(newsDirectory, folder);
      const metadataPath = path.join(newsDir, 'metadata.json');
      if (fs.existsSync(metadataPath)) {
        try {
          const metadataContent = fs.readFileSync(metadataPath, 'utf8');
          const metadata = JSON.parse(metadataContent);

          const files = fs.readdirSync(newsDir);
          const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.webp'];
          const imageFile = files.find(f => imageExtensions.some(ext => f.toLowerCase().endsWith(ext)));
          
          if (imageFile) {
            metadata.coverImage = `/noticias/${folder}/${imageFile}`;
          } else {
            metadata.coverImage = `https://placehold.co/800x600.png`;
            if (!metadata.hint) metadata.hint = 'placeholder';
          }
          
          return metadata;
        } catch(e) {
          console.error(`Could not process metadata in folder ${folder}:`, e);
          return null;
        }
      }
      return null;
    }).filter((f): f is NewsMetadata => f !== null && typeof f.id === 'number');

    newsItems.sort((a, b) => b.id - a.id);

    return newsItems;
  } catch (error) {
    if (error instanceof Error && 'code' in error && error.code === 'ENOENT') {
      console.log("Noticias directory not found, returning empty array.");
      return [];
    }
    console.error("Could not read noticias directory:", error);
    return [];
  }
}


export default function NewsPage() {
  const newsItems = getNews();

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold font-headline tracking-tight">Últimas Noticias</h1>
        <p className="mt-2 text-lg text-muted-foreground">Últimas novedades sobre nuestra actividad.</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {newsItems.map((post) => (
          <Link key={post.slug} href={`/news/${post.slug}`} className="block group">
            <Card className="h-full flex flex-col bg-card hover:border-accent transition-all duration-300 group-hover:scale-105 overflow-hidden">
              <CardHeader className="p-0">
                 <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={post.coverImage}
                    alt={`Portada de ${post.title}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    data-ai-hint={post.hint}
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.date}</CardDescription>
                <p className="mt-2 text-muted-foreground">{post.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <div className="flex gap-2">
                  {post.tags.map(tag => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
