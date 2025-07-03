"use client";

import { useState, useCallback } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Loader2 } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface FanzineViewerProps {
    title: string;
    pdfUrl: string;
}

export default function FanzineViewer({ title, pdfUrl }: FanzineViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(true);
  const [pdfError, setPdfError] = useState<string | null>(null);

  const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber(1);
    setIsLoading(false);
  }, []);

  const onDocumentLoadError = useCallback((error: Error) => {
    console.error('Error while loading document!', error);
    setPdfError("Error al cargar el PDF. Por favor, asegúrese de que el archivo exista en la URL especificada y sea un PDF válido.");
    setIsLoading(false);
  }, []);

  const goToPrevPage = () => setPageNumber(prev => Math.max(prev - 1, 1));
  const goToNextPage = () => setPageNumber(prev => Math.min(prev + 1, numPages!));

  return (
    <Card className="max-w-4xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="text-accent">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative w-full aspect-[1/1.414] bg-muted rounded-md overflow-hidden border flex items-center justify-center">
            {isLoading && !pdfError && <Loader2 className="h-12 w-12 animate-spin text-muted-foreground" />}
            {pdfError && (
                <div className="text-center text-destructive p-4">
                    <p className='font-bold'>Error</p>
                    <p className="text-sm">{pdfError}</p>
                </div>
            )}
            <Document
                file={pdfUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
                loading={<Skeleton className="h-full w-full" />}
                className={isLoading || pdfError ? 'hidden' : ''}
            >
                <Page 
                    pageNumber={pageNumber} 
                    renderAnnotationLayer={false}
                    renderTextLayer={false}
                    loading={<Skeleton className="h-full w-full" />}
                    width={827}
                />
            </Document>
        </div>
      </CardContent>
      {numPages && !pdfError && (
        <CardFooter className="flex justify-between items-center">
            <Button onClick={goToPrevPage} disabled={pageNumber <= 1} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Anterior
            </Button>
            <span className="text-lg font-mono text-muted-foreground">
            {pageNumber} / {numPages}
            </span>
            <Button onClick={goToNextPage} disabled={pageNumber >= numPages} variant="outline">
            Siguiente
            <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
        </CardFooter>
      )}
    </Card>
  );
}
