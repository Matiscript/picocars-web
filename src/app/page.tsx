import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen flex flex-col">
      {/* Hero Section Premium (Más compacto y sin botones duplicados) */}
      <header className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center border-b border-zinc-800 overflow-hidden">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 z-0">
          <img src="/img/hero-fondo.jpg" alt="Taller Picocars" className="w-full h-full object-cover opacity-30" />
          {/* Degradado para legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent"></div>
        </div>

        {/* Contenido Central */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-8">
          <span className="text-amber-500 font-bold tracking-widest text-sm uppercase mb-4 block">PicoCars</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6 drop-shadow-lg">
            Devolvemos el brillo a tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-200">coche.</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto font-light leading-relaxed">
            Expertos en chapa, pintura y selección de vehículos de ocasión. Calidad de concesionario, trato de barrio.
          </p>
        </div>
      </header>

      {/* Main Section */}
      <main className="flex-grow max-w-5xl mx-auto p-6 w-full flex flex-col justify-center mt-6">
        
        {/* Señales de Confianza */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 border-b border-zinc-800 pb-12">
          <div className="flex items-center gap-4 bg-zinc-900/50 p-4 rounded-xl border border-zinc-800/50">
            <div className="bg-zinc-800 p-3 rounded-lg text-amber-500 text-xl">🛡️</div>
            <div>
              <h4 className="font-bold text-sm">Garantía de 1 año</h4>
              <p className="text-xs text-zinc-400">En ventas y reparaciones</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-zinc-900/50 p-4 rounded-xl border border-zinc-800/50">
            <div className="bg-zinc-800 p-3 rounded-lg text-amber-500 text-xl">🤝</div>
            <div>
              <h4 className="font-bold text-sm">Trato Transparente</h4>
              <p className="text-xs text-zinc-400">Presupuestos sin sorpresas</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-zinc-900/50 p-4 rounded-xl border border-zinc-800/50">
            <div className="bg-zinc-800 p-3 rounded-lg text-amber-500 text-xl">🚗</div>
            <div>
              <h4 className="font-bold text-sm">Más de 8 años de experiencia</h4>
              <p className="text-xs text-zinc-400">Confiables y rápidos</p>
            </div>
          </div>
        </div>

        {/* La Bifurcación (Las tarjetas) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 flex flex-col justify-between hover:border-amber-500 transition duration-300 group shadow-lg shadow-black/50">
            <div>
              <span className="text-4xl">🛠️</span>
              <h2 className="text-2xl font-bold mt-4 group-hover:text-amber-400 transition">Chapa y Pintura</h2>
              <p className="text-zinc-400 mt-3 text-sm leading-relaxed">Reparaciones integrales, galería de proyectos de restauración, calculador de presupuestos y gestión de cita previa.</p>
            </div>
            <Link href="/chapa-pintura" className="mt-8 inline-block bg-zinc-800 text-center py-4 rounded-xl font-bold tracking-wide hover:bg-amber-500 hover:text-zinc-950 transition">
              Acceder al Taller
            </Link>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 flex flex-col justify-between hover:border-blue-500 transition duration-300 group shadow-lg shadow-black/50">
            <div>
              <span className="text-4xl">🚘</span>
              <h2 className="text-2xl font-bold mt-4 group-hover:text-blue-400 transition">Compraventa de Coches</h2>
              <p className="text-zinc-400 mt-3 text-sm leading-relaxed">Catálogo de vehículos 100% revisados, filtrado por categoría, precios y stock actualizado al momento.</p>
            </div>
            <Link href="/compraventa" className="mt-8 inline-block bg-zinc-800 text-center py-4 rounded-xl font-bold tracking-wide hover:bg-blue-500 hover:text-zinc-950 transition">
              Ver Vehículos
            </Link>
          </div>

        </div>
      </main>

      {/* Footer Premium Realista */}
      <footer className="bg-zinc-900 border-t border-zinc-800 pt-12 pb-6 mt-16">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          
          {/* Columna 1: Marca */}
          <div>
            <h3 className="text-lg font-bold text-amber-500 mb-4 tracking-wider">PICOCARS</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Tu taller de confianza especializado en chapa, pintura y la selección de los mejores vehículos de ocasión. Calidad, rapidez y transparencia en cada detalle.
            </p>
          </div>
          
          {/* Columna 2: Contacto */}
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
          
          {/* Columna 3: Horario */}
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
        
        {/* Copyright y Legales */}
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