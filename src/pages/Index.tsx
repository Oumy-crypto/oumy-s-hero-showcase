import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-2xl text-center">
        {/* Badge */}
        <span className="inline-block mb-6 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium tracking-wide text-gray-950">
          Portfolio
        </span>

        {/* Name */}
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6 font-serif">
          Oumy <span className="text-primary">BASSE</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto mb-10">
          Créatrice d'expériences numériques alliant design soigné et solutions techniques performantes.
        </p>

        {/* CTA */}
        <a
          href="#projets"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98]">

          Voir mes projets
          <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </div>);

};

export default Index;