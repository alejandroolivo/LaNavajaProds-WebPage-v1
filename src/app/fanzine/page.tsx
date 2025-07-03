
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import fs from 'fs';
import path from 'path';

interface FanzineMetadata {
  id: number;
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  tags: string[];
  hint: string;
  pdfUrl: string;
}

function getFanzines(): FanzineMetadata[] {
  const fanzinesDirectory = path.join(process.cwd(), 'public', 'fanzines');
  try {
    if (!fs.existsSync(fanzinesDirectory)) {
      console.log("Fanzines directory not found, returning empty array.");
      return [];
    }
    const fanzineFolders = fs.readdirSync(fanzinesDirectory);

    const fanzines = fanzineFolders.map((folder) => {
      const fanzineDir = path.join(fanzinesDirectory, folder);
      const metadataPath = path.join(fanzineDir, 'metadata.json');
      if (fs.existsSync(metadataPath)) {
        try {
          const metadataContent = fs.readFileSync(metadataPath, 'utf8');
          const metadata = JSON.parse(metadataContent);

          const files = fs.readdirSync(fanzineDir);
          
          const pdfFile = files.find(f => f.toLowerCase().endsWith('.pdf'));
          if (pdfFile) {
            metadata.pdfUrl = `/fanzines/${folder}/${pdfFile}`;
          }

          const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.webp'];
          const imageFile = files.find(f => imageExtensions.some(ext => f.toLowerCase().endsWith(ext)));
          if (imageFile) {
            metadata.coverImage = `/fanzines/${folder}/${imageFile}`;
          }
          
          return metadata;
        } catch(e) {
          console.error(`Could not process metadata in folder ${folder}:`, e);
          return null;
        }
      }
      return null;
    }).filter((f): f is FanzineMetadata => f !== null && typeof f.id === 'number');

    fanzines.sort((a, b) => a.id - b.id);

    return fanzines;
  } catch (error) {
    if (error instanceof Error && 'code' in error && error.code === 'ENOENT') {
      console.log("Fanzines directory not found, returning empty array.");
      return [];
    }
    console.error("Could not read fanzines directory:", error);
    return [];
  }
}

export default function FanzinePage() {
  const fanzines = getFanzines();

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold font-headline tracking-tight">Biblioteca de Fanzines</h1>
        <p className="mt-2 text-lg text-muted-foreground">Nuestra colección de fanzines, donde hablamos sobre música, libros, conciertos... cualquier cosa, realmente.</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {fanzines.map((fanzine) => (
          <Link key={fanzine.slug} href={`/fanzine/${fanzine.slug}`} className="block group">
            <Card className="h-full flex flex-col bg-card hover:border-accent transition-all duration-300 group-hover:scale-105 overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={fanzine.coverImage}
                    alt={`Portada de ${fanzine.title}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    data-ai-hint={fanzine.hint}
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <CardTitle>{fanzine.title}</CardTitle>
                <p className="mt-2 text-muted-foreground">{fanzine.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <div className="flex gap-2">
                  {fanzine.tags.map(tag => (
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
