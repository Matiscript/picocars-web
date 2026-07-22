/**
 * js/catalogo.js
 * Lógica del catálogo de compraventa
 */

// 1. EL MOLDE DE LA BASE DE DATOS (Simulación del JSON que devolverá tu Backend)
const mockDatabase = [
    {
        id: 1,
        marca: "Audi",
        modelo: "A3",
        precio: "18.500€",
        imagen: "./img/audia3.jpg",
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
        imagen: "./img/volskgti2021.jpg",
        etiqueta: "RECIÉN LLEGADO",
        etiquetaColor: "bg-amber-600",
        descripcion: "2.0 TSI 245cv DSG8. Full extras, techo panorámico, asientos backet.",
        año: 2021,
        km: "42.000 km",
        combustible: "Gasolina"
    }
];

// 2. FUNCIÓN PARA OBTENER LOS DATOS (Preparada para el futuro)
// Cuando tengas la base de datos real, solo cambiaremos lo que hay dentro de esta función
async function obtenerCoches() {
    try {
        // En el futuro esto será algo como: return await supabase.from('coches').select('*');
        // Por ahora, devolvemos nuestra base de datos simulada
        return mockDatabase; 
    } catch (error) {
        console.error("Error al obtener los vehículos:", error);
        return [];
    }
}

// 3. LA VISTA: EL MOLDE HTML (Componente)
// Recibe un objeto 'coche' y devuelve su código HTML
function crearTarjetaCoche(coche) {
    return `
    <div class="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 shadow-lg shadow-black/50 group flex flex-col">
        <div class="relative h-64 overflow-hidden bg-zinc-800">
            <img src="${coche.imagen}" alt="${coche.marca} ${coche.modelo}" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
            <div class="absolute top-4 right-4 ${coche.etiquetaColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                ${coche.etiqueta}
            </div>
        </div>
        <div class="p-6 flex flex-col flex-grow">
            <div class="flex justify-between items-start mb-2">
                <h3 class="text-2xl font-bold text-white group-hover:text-blue-400 transition">${coche.marca} ${coche.modelo}</h3>
                <span class="text-xl font-bold text-blue-500">${coche.precio}</span>
            </div>
            <p class="text-zinc-400 text-sm mb-6">${coche.descripcion}</p>
            
            <div class="grid grid-cols-3 gap-2 mb-8 text-center text-xs text-zinc-300">
                <div class="bg-zinc-950 py-2 rounded-lg border border-zinc-800">📅 ${coche.año}</div>
                <div class="bg-zinc-950 py-2 rounded-lg border border-zinc-800">🛣️ ${coche.km}</div>
                <div class="bg-zinc-950 py-2 rounded-lg border border-zinc-800">⛽ ${coche.combustible}</div>
            </div>
            
            <a href="./detalle-coche.html?id=${coche.id}" class="mt-auto bg-zinc-800 text-center py-4 rounded-xl font-bold tracking-wide hover:bg-blue-500 hover:text-zinc-950 transition w-full shadow-lg">
                Ver Detalles
            </a>
        </div>
    </div>
    `;
}

// 4. CONTROLADOR PRINCIPAL
async function inicializarCatalogo() {
    const contenedor = document.getElementById('catalogo-coches');
    
    if (!contenedor) return; // Seguridad por si la función corre en otra página

    // Pedimos los datos al "backend"
    const coches = await obtenerCoches();
    
    // Limpiamos el contenedor (quitamos el mensaje de "Cargando...")
    contenedor.innerHTML = '';
    
    // Si no hay coches, mostramos un aviso
    if (coches.length === 0) {
        contenedor.innerHTML = `<p class="text-zinc-500 text-center col-span-full py-10">No hay vehículos disponibles en este momento.</p>`;
        return;
    }

    // Iteramos sobre el array y renderizamos cada tarjeta
    coches.forEach(coche => {
        contenedor.innerHTML += crearTarjetaCoche(coche);
    });
}

// 5. ARRANCAR EL MOTOR
// Esperamos a que el HTML esté completamente cargado antes de ejecutar nada
document.addEventListener('DOMContentLoaded', inicializarCatalogo);