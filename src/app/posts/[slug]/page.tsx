import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function PostPage({ params }: { params: { slug: string } }) {
  const title = params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <article className="max-w-3xl mx-auto">
      <Button asChild variant="ghost" className="mb-8 -ml-4">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
      </Button>
      <Card>
        <CardContent className="pt-6">
          <h1 className="text-4xl font-bold font-headline mb-4 text-primary">{title}</h1>
          <p className="text-muted-foreground text-sm mb-8">Posted on October 26, 2023 by The Author</p>
          <div className="space-y-6 text-lg text-foreground/90">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, 
              adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, 
              euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
            </p>
            <p>
              Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat 
              libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. 
              Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere 
              cubilia Curae; Aliquam nibh.
            </p>
            <blockquote className="border-l-4 border-accent bg-muted/20 p-4 rounded-r-md italic text-muted-foreground">
              "The universe is under no obligation to make sense to you." - Neil deGrasse Tyson
            </blockquote>
            <p>
              Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam. Sorbi in harbi. Proin ac quam et lectus 
              faucibus blandit. Nunc una, gravid a, send la, ac, arcu. Ut Vitae. In hac habitasse platea dictumst.
            </p>
          </div>
        </CardContent>
      </Card>
    </article>
  );
}
