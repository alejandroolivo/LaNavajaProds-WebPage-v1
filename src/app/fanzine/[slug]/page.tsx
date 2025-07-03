
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FanzineViewer from '@/components/FanzineViewer';
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';

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

function getFanzineData(slug: string): FanzineMetadata | null {
    const fanzineDir = path.join(process.cwd(), 'public', 'fanzines', slug);
    const filePath = path.join(fanzineDir, 'metadata.json');
    try {
        if (!fs.existsSync(filePath)) {
          return null;
        }
        
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const metadata = JSON.parse(fileContent);

        const files = fs.readdirSync(fanzineDir);
        const pdfFile = files.find(f => f.toLowerCase().endsWith('.pdf'));

        if (pdfFile) {
          metadata.pdfUrl = `/fanzines/${slug}/${pdfFile}`;
        } else if (!metadata.pdfUrl) {
          console.error(`No PDF file found for slug ${slug} and no pdfUrl in metadata.`);
          metadata.pdfUrl = ''; 
        }
        
        return metadata as FanzineMetadata;
    } catch (error) {
        console.error(`Could not read metadata for slug ${slug}:`, error);
        return null;
    }
}

export default function FanzineItemPage({ params }: { params: { slug: string } }) {
  const fanzine = getFanzineData(params.slug);
  
  if (!fanzine || !fanzine.pdfUrl) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Button asChild variant="ghost" className="mb-8 -ml-4">
        <Link href="/fanzine">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a la Biblioteca de Fanzines
        </Link>
      </Button>
      <FanzineViewer title={fanzine.title} pdfUrl={fanzine.pdfUrl} />
    </div>
  );
}
