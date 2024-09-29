import { CardContent, Card } from "@/components/ui/card";
import HeartIcon from "@/components/icons/Heart";
import LightbulbIcon from "@/components/icons/Lightbulb";
import SmileIcon from "@/components/icons/Smile";
import StarIcon from "@/components/icons/Star";

export default function About() {
  return (
    <div className="bg-custom-radial text-black">
      <header className="text-dark bg-primary py-16 text-center">
        <h2 className="mb-4 font-bruno text-4xl font-bold">ACERCA DE</h2>
        <h1 className="mb-4 font-bruno text-6xl font-bold">IABOT</h1>
        <p className="font-bruno text-xl font-semibold">
          CONOCE MÁS SOBRE NOSOTROS
        </p>
      </header>

      <main>
        <section>
          <div className="bg-white pt-16">
            <h2 className="mb-12 text-center font-bruno text-4xl font-bold text-secondary">
              Nuestra Misión y Valores
            </h2>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center">
                <LightbulbIcon aria-label="Innovación" />
                <h3 className="mb-4 font-bruno text-2xl font-semibold">
                  Innovación
                </h3>
                <p className="lg:pb-12">
                  Nos mantenemos al día en las últimas tendencias y tecnologías
                  de la robótica para ofrecer a nuestros estudiantes una
                  educación de calidad en esta disciplina en constante
                  evolución.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <HeartIcon aria-label="Pasión" />
                <h3 className="mb-4 font-bruno text-2xl font-semibold">
                  Pasión
                </h3>
                <p className="lg:pb-12">
                  Transmitimos nuestra pasión por la robótica y la educación,
                  motivando a nuestros estudiantes y fomentando su interés en
                  ciencia y tecnología.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <StarIcon aria-label="Excelencia" />
                <h3 className="mb-4 font-bruno text-2xl font-semibold">
                  Excelencia
                </h3>
                <p className="lg:pb-12">
                  Nos dedicamos a brindar un servicio excepcional, cuidando cada
                  detalle, desde el diseño del curso hasta la atención a
                  nuestros estudiantes y sus familias.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <SmileIcon aria-label="Diversión" />
                <h3 className="mb-4 font-bruno text-2xl font-semibold">
                  Diversión
                </h3>
                <p className="lg:pb-12">
                  Creamos un ambiente de enseñanza amigable y relajado, donde
                  los estudiantes se sienten cómodos y disfrutan de un
                  aprendizaje divertido.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f8f8f8]">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center font-bruno text-3xl font-extrabold text-secondary">
              CONOCE A NUESTRO EQUIPO
            </h2>
            <p className="mb-12 text-center text-gray-500">
              En IABOT, contamos con un equipo altamente capacitado y
              comprometido con la educación y la robótica. Nos capacitamos
              continuamente en nuevas tecnologías. Además, nuestros cursos se
              planifican por edades y niveles, buscando proporcionar una óptima
              experiencia educativa a cada alumno. Siempre trabajamos de manera
              transversal con otras áreas para enriquecer el aprendizaje.
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  name: "Franco",
                  title:
                    "Técnico en Informática. Profesor de Tecnología, (Postítulo en Programación y Robótica Educativa, UNER).",
                  image: "/assets/img/equipo/fran-modified.png",
                },
                {
                  name: "Adrián",
                  title:
                    "Profesor de Matemática y Tecnología, (Postítulo en Programación y Robótica Educativa, UNER).",
                  image: "/assets/img/equipo/adri-modified.png",
                },
                {
                  name: "Alex",
                  title:
                    "Desarrollador Web, (Certificaciones Lego Education Academy).",
                  image: "/assets/img/equipo/alex-modified.png",
                },
              ].map((member) => (
                <Card
                  className="w-full transform bg-[#E8F5E9] py-8 transition-transform hover:scale-105 dark:bg-[#E8F5E9]"
                  key={member.name}
                >
                  <CardContent>
                    <img
                      alt={member.name}
                      className="mx-auto h-48 w-48 rounded-full object-cover"
                      height="200"
                      loading="lazy"
                      src={member.image}
                      style={{
                        aspectRatio: "200/200",
                        objectFit: "cover",
                        backgroundColor: "white",
                      }}
                      width="200"
                    />
                    <h3 className="mt-4 text-center text-lg font-medium leading-6 text-gray-900">
                      {member.name}
                    </h3>
                    <p className="mt-2 text-center text-base text-gray-500">
                      {member.title}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-12">
          <h2 className="mb-8 text-center font-bruno text-3xl font-extrabold text-secondary">
            Testimonios
          </h2>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {[
                {
                  quote:
                    "las clases de robótica son espectaculares! Mi hijo empezó con 5 años. Es la única actividad de la semana que Espera con tanto entusiasmo! El profe es una masa, todas las clases vuelve con nuevas ideas, feliz de participar. Recomiendo! 👏",
                  author: "Sara, Madre de Estudiante",
                },
                {
                  quote:
                    "Cambió la dinámica en el aula. Mis chicos se entusiasman mucho más con las actividades y aprenden de manera divertida. Es un recurso que realmente ayuda a que se sientan más involucrados.",
                  author: "María, Docente de Primaria",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="rounded-lg border bg-[#E8F5E9] p-6 dark:bg-[#E8F5E9]"
                >
                  <p className="text-lg italic text-gray-700">
                    "{testimonial.quote}"
                  </p>
                  <p className="mt-4 text-right text-sm font-semibold text-gray-900">
                    - {testimonial.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
