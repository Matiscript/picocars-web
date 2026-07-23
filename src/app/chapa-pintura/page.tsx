import Link from 'next/link';

export default function ChapaPintura() {
  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen flex flex-col">
      {/* Navegación */}
      <nav className="max-w-5xl mx-auto w-full flex justify-between items-center border-b border-zinc-800 py-6 px-6">
        <h1 className="text-xl font-bold text-amber-500 tracking-wider">
          PICOCARS <span className="text-zinc-500 text-sm font-normal">| Taller</span>
        </h1>
        <Link href="/" className="text-sm font-semibold text-zinc-400 hover:text-white transition">
          ← Volver al inicio
        </Link>
      </nav>

      <main className="flex-grow max-w-5xl mx-auto p-6 w-full mt-6">
        {/* Cabecera del Taller */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">El arte de la restauración</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            No tapamos golpes, restauramos vehículos a su estado de fábrica
            utilizando pintura de primera calidad y las técnicas más avanzadas del sector.
          </p>
        </div>

        {/* SECCIÓN ESTRELLA: EL ANTES Y DESPUÉS */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-amber-500 mb-8 border-l-4 border-amber-500 pl-4">
            Nuestros Milagros (Antes y Después)
          </h3>

          <div className="flex flex-col gap-12">
            {/* Tarjeta Proyecto 2: Golpe Fuerte (1 vs 2) */}
            <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 shadow-lg shadow-black/50 group">
              <div className="flex flex-col md:grid md:grid-cols-5">
                {/* Mitad Antes */}
                <div className="md:col-span-3 relative bg-zinc-800 border-b md:border-b-0 md:border-r border-zinc-950 overflow-hidden">
                  <div className="absolute top-4 left-4 bg-red-600/90 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-md">
                    ANTES
                  </div>
                  <img
                    src="/img/roto1.jpg"
                    alt="Golpe severo"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500 min-h-[300px]"
                  />
                </div>

                {/* Mitad Después */}
                <div className="md:col-span-2 relative flex flex-col overflow-hidden bg-zinc-700">
                  <div className="absolute top-4 right-4 bg-emerald-600/90 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-md">
                    DESPUÉS
                  </div>
                  <img
                    src="/img/arreglado1front.jpg"
                    alt="Arreglo frontal"
                    className="w-full h-64 md:h-[350px] object-cover hover:scale-105 transition duration-500"
                  />
                  <img
                    src="/img/arreglado1back.jpg"
                    alt="Arreglo lateral"
                    className="w-full h-64 md:h-[350px] object-cover hover:scale-105 transition duration-500 border-t border-zinc-900"
                  />
                </div>
              </div>

              <div className="p-6 md:p-8">
                <h4 className="text-xl font-bold mb-2 text-white group-hover:text-amber-400 transition">
                  Restauración frontal severa
                </h4>
                <p className="text-zinc-400 leading-relaxed">
                  Reconstrucción de piezas estructurales, sustitución de paragolpes y encuadre perfecto.
                </p>
              </div>
            </div>

            {/* Tarjeta Proyecto 1: Pintura Normal (2 vs 2) */}
            <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 shadow-lg shadow-black/50 group">
              <div className="flex flex-col md:grid md:grid-cols-2">
                {/* Mitad Antes */}
                <div className="relative flex flex-col overflow-hidden bg-zinc-800 border-b md:border-b-0 md:border-r border-zinc-950">
                  <div className="absolute top-4 left-4 bg-red-600/90 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-md">
                    ANTES
                  </div>
                  <img
                    src="/img/antes-pintura-1.jpg"
                    alt="Estado previo 1"
                    className="w-full h-64 md:h-[350px] object-cover hover:scale-105 transition duration-500"
                  />
                  <img
                    src="/img/antes-pintura-2.jpg"
                    alt="Estado previo 2"
                    className="w-full h-64 md:h-[350px] object-cover hover:scale-105 transition duration-500 border-t border-zinc-950"
                  />
                </div>

                {/* Mitad Después */}
                <div className="relative flex flex-col overflow-hidden bg-zinc-700">
                  <div className="absolute top-4 right-4 bg-emerald-600/90 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-md">
                    DESPUÉS
                  </div>
                  <img
                    src="/img/arreglado2.jpg"
                    alt="Resultado 1"
                    className="w-full h-64 md:h-[350px] object-cover hover:scale-105 transition duration-500"
                  />
                  <img
                    src="/img/arreglado2-2.jpg"
                    alt="Resultado 2"
                    className="w-full h-64 md:h-[350px] object-cover hover:scale-105 transition duration-500 border-t border-zinc-900"
                  />
                </div>
              </div>

              <div className="p-6 md:p-8">
                <h4 className="text-xl font-bold mb-2 text-white group-hover:text-amber-400 transition">
                  Restauración de pintura integral
                </h4>
                <p className="text-zinc-400 leading-relaxed">
                  Tratamiento de arañazos múltiples e igualación de color en varias piezas de la carrocería.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Galería Tradicional */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">Instalaciones y Proceso</h3>
          <p className="text-zinc-400 text-sm mb-8">Un vistazo a nuestras cabinas de pintura y zona de preparación.</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="h-40 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-amber-500 transition cursor-pointer flex items-center justify-center text-xs text-zinc-600">
              Foto Instalación 1
            </div>
            <div className="h-40 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-amber-500 transition cursor-pointer flex items-center justify-center text-xs text-zinc-600">
              Foto Instalación 2
            </div>
            <div className="h-40 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-amber-500 transition cursor-pointer flex items-center justify-center text-xs text-zinc-600">
              Trabajo en cabina
            </div>
            <div className="h-40 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-amber-500 transition cursor-pointer flex items-center justify-center text-xs text-zinc-600">
              Horno de secado
            </div>
          </div>
        </div>

        {/* Call to Action (Presupuesto) */}
        <div className="mt-20 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-10 text-center shadow-2xl">
          <h3 className="text-2xl font-bold mb-4">¿Tu coche necesita un repaso?</h3>
          <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
            Pásate por el taller o envíanos unas fotos por WhatsApp y te
            daremos una estimación sin ningún compromiso.
          </p>
          <button className="bg-amber-500 text-zinc-950 px-8 py-4 rounded-xl font-bold hover:bg-amber-400 transition transform hover:-translate-y-1 shadow-lg shadow-amber-500/20">
            Pedir Presupuesto Gratuito
          </button>
        </div>
      </main>

      {/* Footer replicado para consistencia */}
      <footer className="bg-zinc-900 border-t border-zinc-800 pt-12 pb-6 mt-16">
        <div className="max-w-5xl mx-auto px-6 text-center text-xs text-zinc-500">
          <p>&copy; 2026 Picocars. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}