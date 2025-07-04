import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, CircleCheck, Handshake } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 fade-in">
      <div className="text-center">
        <h1 className="text-4xl font-bold font-headline tracking-tight">Sobre Nosotros</h1>
        <p className="mt-2 text-lg text-muted-foreground">La historia detrás de La Navaja Producciones.</p>
      </div>

      <Card>
        <CardContent className="pt-6 text-lg space-y-6 text-foreground/90">
          <p>
            Hace 2 años unos colegas de Murcia y Cartagena decidimos que igual estaba bien no depender de nadie a la hora de poder ver conciertos de artistas que nos flipan. Fue ahí cuando empezamos <strong>La Navaja</strong>, una productora asociativa, alternativa y asamblearia, en la que ya somos unos 50 socios.
          </p>
          <p className="text-2xl font-bold text-accent text-center py-4">
            Ahora queremos que te unas.
          </p>
          
          <h2 className="text-3xl font-bold font-headline pt-4 border-t border-border">¿Por qué?</h2>
          <ul className="space-y-4 list-none pl-0">
            <li className="flex items-start">
              <CircleCheck className="w-6 h-6 mr-4 mt-1 text-accent flex-shrink-0" />
              <span>Porque pagas 15€ al mes y ves un concierto, asegurado.</span>
            </li>
            <li className="flex items-start">
              <CircleCheck className="w-6 h-6 mr-4 mt-1 text-accent flex-shrink-0" />
              <span>Porque participas, eliges, votas y descubres a las bandas que traemos.</span>
            </li>
          </ul>

          <h2 className="text-3xl font-bold font-headline pt-4 border-t border-border">Porque hacemos MÁS COSAS:</h2>
          <ul className="space-y-4 list-none pl-0">
            <li className="flex items-start">
                <Handshake className="w-6 h-6 mr-4 mt-1 text-accent flex-shrink-0" />
                <span>Organizamos encuentros, talleres y actividades culturales.</span>
            </li>
            <li className="flex items-start">
                <Target className="w-6 h-6 mr-4 mt-1 text-accent flex-shrink-0" />
                <span>Apoyamos a artistas emergentes.</span>
            </li>
             <li className="flex items-start">
                <Users className="w-6 h-6 mr-4 mt-1 text-accent flex-shrink-0" />
                <span>Creamos espacios donde decidir colectivamente y pasarlo bien.</span>
            </li>
          </ul>

          <p className="pt-4 border-t border-border">
            Creemos en una forma distinta de hacer cultura. Sin intermediarios. Sin depender de grandes promotoras. Construida desde abajo, entre todas.
          </p>
          
          <div className="text-center pt-6">
             <p className="text-muted-foreground">
                Síguenos en redes sociales, infórmate y contáctanos si tienes dudas, curiosidad o simplemente quieres saber más sobre cómo formar parte.
             </p>
             <p className="font-bold text-accent text-xl mt-2">
                @lanavajaproducciones
             </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
