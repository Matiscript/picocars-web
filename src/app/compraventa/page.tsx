import Link from 'next/link';

// 1. NUESTRA BASE DE DATOS MOCK (Igual que la que tenías)
const mockDatabase = [
  {
    id: 1,
    marca: "Audi",
    modelo: "A3",
    precio: "18.500€",
    imagen: "/img/audia3.jpg", // Le quitamos el punto inicial (de ./ a /)
    etiqueta: "REVISADO",
    etiquetaColor: "bg-blue-600",
    descripcion: "S-Line 2.0 TDI 150cv. Estado impecable, único propietario.",
    año: 2019,
    km: "85.000 km",
    combustible: "Diésel"
  },
  {
    id: 2,
    marca: "VW",
    modelo: "Golf GTI",
    precio: "32.900€",
    imagen: "/img/volskgti2021.jpg",
    etiqueta: "RECIÉN LLEGADO",
    etiquetaColor: "bg-amber-600",
    descripcion: "2.0 TSI 245cv DSG8. Full extras, techo panorámico, asientos backet.",
    año: 2021,
    km: "42.000 km",
    combustible: "Gasolina"
  }
];

export default function Compraventa() {
  // En el futuro, aquí haremos la llamada a tu backend (ej. Supabase)
  // Por ahora, le pasamos el array directamente.
  const coches = mockDatabase;

  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen flex flex-col">
      {/* Navegación */}
      <nav className="max-w-5xl mx-auto w-full flex justify-between items-center border-b border-zinc-800 py-6 px-6">
        <h1 className="text-xl font-bold text-blue-500 tracking-wider">
          PICOCARS <span className="text-zinc-500 text-sm font-normal">| Ocasión</span>
        </h1>
        <Link href="/" className="text-sm font-semibold text-zinc-400 hover:text-white transition">
          ← Volver al inicio
        </Link>
      </nav>

      <main className="flex-grow max-w-5xl mx-auto p-6 w-full mt-6">
        {/* Cabecera del Catálogo */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Catálogo de Vehículos</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Todos nuestros coches se entregan 100% revisados y con el mantenimiento al día. Transparencia total en cada venta.
          </p>
        </div>

        {/* Grid del Catálogo de Coches */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          
          {/* AQUÍ ESTÁ LA MAGIA DE REACT (.map) */}
          {coches.map((coche) => (
            <div key={coche.id} className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 shadow-lg shadow-black/50 group flex flex-col">
              
              <div className="relative h-64 overflow-hidden bg-zinc-800">
                {/* Nota cómo usamos {coche.imagen} en vez de ${coche.imagen} */}
                <img 
                  src={coche.imagen} 
                  alt={`${coche.marca} ${coche.modelo}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
                />
                <div className={`absolute top-4 right-4 ${coche.etiquetaColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-md`}>
                  {coche.etiqueta}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition">
                    {coche.marca} {coche.modelo}
                  </h3>
                  <span className="text-xl font-bold text-blue-500">{coche.precio}</span>
                </div>
                <p className="text-zinc-400 text-sm mb-6">{coche.descripcion}</p>
                
                <div className="grid grid-cols-3 gap-2 mb-8 text-center text-xs text-zinc-300">
                  <div className="bg-zinc-950 py-2 rounded-lg border border-zinc-800">📅 {coche.año}</div>
                  <div className="bg-zinc-950 py-2 rounded-lg border border-zinc-800">🛣️ {coche.km}</div>
                  <div className="bg-zinc-950 py-2 rounded-lg border border-zinc-800">⛽ {coche.combustible}</div>
                </div>
                
                {/* Enlace dinámico con Next.js */}
                <Link href={`/compraventa/${coche.id}`} className="mt-auto bg-zinc-800 text-center py-4 rounded-xl font-bold tracking-wide hover:bg-blue-500 hover:text-zinc-950 transition w-full shadow-lg">
                  Ver Detalles
                </Link>
              </div>

            </div>
          ))}

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 border-t border-zinc-800 pt-12 pb-6 mt-auto">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="text-lg font-bold text-amber-500 mb-4 tracking-wider">PICOCARS</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Tu taller de confianza especializado en chapa, pintura y la selección de los mejores vehículos de ocasión. Calidad, rapidez y transparencia en cada detalle.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contacto</h3>
            <ul className="text-sm text-zinc-400 space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-zinc-500">📍</span> 
                <span>Polígono Industrial San Luis<br />C. Lisboa, 4, Cruz de Humilladero, 29006 Málaga</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-zinc-500">📞</span> 
                <span>+34 631 66 35 23</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-zinc-500">✉️</span> 
                <span>info@picocars.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Horario de Taller</h3>
            <ul className="text-sm text-zinc-400 space-y-2">
              <li className="flex justify-between border-b border-zinc-800 pb-2">
                <span>Lunes - Viernes:</span> 
                <span className="text-white">09:00 - 14:00 | 16:00 - 19:30</span>
              </li>
              <li className="flex justify-between border-b border-zinc-800 pb-2 pt-2">
                <span>Sábados:</span> 
                <span className="text-white">10:00 - 13:30</span>
              </li>
              <li className="flex justify-between pt-2">
                <span>Domingos:</span> 
                <span className="text-amber-500 font-semibold">Cerrado</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-6 border-t border-zinc-800 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500">
          <p>&copy; 2026 Picocars. Todos los derechos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-amber-500 transition">Aviso Legal</Link>
            <Link href="#" className="hover:text-amber-500 transition">Política de Privacidad</Link>
            <Link href="#" className="hover:text-amber-500 transition">Cookies</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}