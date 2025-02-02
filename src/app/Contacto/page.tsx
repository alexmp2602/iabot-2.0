'use client';

import { useEffect } from 'react';
import Background from '@/components/Background';
import { CardContent, Card, CardHeader, CardTitle } from '@/components/ui/card';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Inscription from '@/components/Inscription';
import Data from '@/components/Data';

export default function Contacto() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Bruno+Ace&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="relative min-h-screen">
      <Background />

      <header className="bg-primary py-20 text-center">
        <h1 className="mb-10 font-bruno text-4xl text-gray-900 dark:text-gray-900">
          CONTÁCTANOS
        </h1>
        <p className="font-bruno text-2xl text-gray-900 dark:text-gray-900">
          ¿Tienes alguna duda o consulta? Escríbinos y te responderemos a la
          brevedad.
        </p>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card className="border border-gray-700 dark:border-gray-300 mx-auto w-full max-w-lg bg-white dark:bg-dark-gray p-6 shadow-md">
          <CardHeader>
            <CardTitle className="text-3xl text-gray-900 dark:text-white">
              Información de Contacto
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-6 text-black dark:text-gray-300 sm:grid-cols-1">
              {[
                {
                  icon: <FaPhone className="text-2xl text-primary" />,
                  title: 'Teléfono',
                  detail: '+54 9 2324 46-8366',
                  link: 'tel:+5492324468366',
                },
                {
                  icon: <FaEnvelope className="text-2xl text-primary" />,
                  title: 'Correo Electrónico',
                  detail: 'info@iabot.com.ar',
                  link: 'mailto:info@iabot.com.ar',
                },
                {
                  icon: <FaMapMarkerAlt className="text-2xl text-primary" />,
                  title: 'Dirección',
                  detail: 'C. 9 374, Mercedes, Provincia de Buenos Aires',
                  link: 'https://www.google.com.ar/maps/place/C.+9+374,+Mercedes,+Provincia+de+Buenos+Aires/@-34.6555113,-59.4235156,19z/data=!3m1!4b1!4m6!3m5!1s0x95bc73a126fdd949:0xfd5456eb2b3bd4f7!8m2!3d-34.6555124!4d-59.4228719!16s%2Fg%2F11gbl3jz4b?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center bg-transparent dark:bg-transparent"
                >
                  <div className="flex items-center space-x-4">
                    <div>{item.icon}</div>
                    <div>
                      <div className="text-xl text-gray-900 dark:text-white">
                        {item.title}
                      </div>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-blue-500 hover:underline text-lg"
                        >
                          {item.detail}
                        </a>
                      ) : (
                        <div className="text-lg">{item.detail}</div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        {/* Sección de Inscripción */}
        <Inscription />

        {/* Sección de Datos */}
        <Data />
      </main>
    </div>
  );
}
