import { Button } from "@/components/ui/button";

export default function Inscription() {
  return (
    <section className="bg-verde-iabot text-black py-12">
      <div className="container mx-auto px-4 text-center">
        <h4 className="text-2xl font-bold mb-4">
          ¡Descubre los cupos disponibles y regístrate en nuestro formulario de
          inscripción! ¡No te pierdas esta gran oportunidad!
        </h4>
        <a href="/Inscripcion">
        <Button>INSCRIBETE</Button>
        </a>
      </div>
    </section>
  );
}
