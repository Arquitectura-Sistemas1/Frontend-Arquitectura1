const productos = [
    {
        id: 1,
        nombre: "EA SPORTS FC 26",
        descripcion: "PC - Steam",
        precio: 349.99,
        descuento: 18,
        imagen: "/fc26.jpg",
    },
    {
        id: 2,
        nombre: "Grand Theft Auto V",
        descripcion: "PC - Rockstar Games",
        precio: 199.99,
        descuento: 25,
        imagen: "/gta5.jpg",
    },
    {
        id: 3,
        nombre: "Minecraft",
        descripcion: "PC - Microsoft",
        precio: 299.99,
        descuento: 15,
        imagen: "/minecraft.jpg",
    },
    {
        id: 4,
        nombre: "Cyberpunk 2077",
        descripcion: "PC - GOG",
        precio: 249.99,
        descuento: 30,
        imagen: "/cyberpunk.jpg",
    },
    {
        id: 5,
        nombre: "Red Dead Redemption 2",
        descripcion: "PC - Rockstar Games",
        precio: 299.99,
        descuento: 20,
        imagen: "/rdr2.jpg",
    },
    {
        id: 6,
        nombre: "Forza Horizon 5",
        descripcion: "PC - Xbox",
        precio: 399.99,
        descuento: 12,
        imagen: "/forza.jpg",
    },
];

export default function Home() {
    return (
        <main className="min-h-screen bg-[#100C18] text-white">

            {/* NAVBAR */}

            <header className="sticky top-0 z-50 border-b border-purple-900/30 bg-[#100C18]/95 backdrop-blur">

                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

                    {/* LOGO */}

                    <div className="flex items-center gap-2">

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-700">
                            🎮
                        </div>

                        <span className="text-2xl font-bold">
                            NEXUS<span className="text-green-500">GAMING</span>
                        </span>

                    </div>


                    {/* BUSCADOR */}

                    <div className="hidden w-[400px] md:block">

                        <div className="flex items-center rounded-xl border border-purple-900/40 bg-[#211A2D] px-4 py-3">

                            <span className="mr-3 text-gray-500">
                                🔎
                            </span>

                            <input
                                type="text"
                                placeholder="Buscar juegos, tarjetas y más..."
                                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
                            />

                        </div>

                    </div>


                    {/* MENU */}

                    <nav className="flex items-center gap-5">

                        <button className="hidden text-sm text-gray-300 transition hover:text-white md:block">
                            Ofertas
                        </button>

                        <button className="hidden text-sm text-gray-300 transition hover:text-white md:block">
                            Categorías
                        </button>

                        <button className="text-xl">
                            🛒
                        </button>

                        <button className="rounded-lg border border-purple-700 px-4 py-2 text-sm font-semibold transition hover:bg-purple-700">
                            Iniciar sesión
                        </button>

                    </nav>

                </div>

            </header>


            {/* HERO */}

            <section className="relative overflow-hidden">

                <div className="absolute inset-0 bg-gradient-to-r from-purple-950 via-[#100C18] to-green-950 opacity-60" />

                <div className="relative mx-auto max-w-7xl px-6 py-24">

                    <div className="max-w-2xl">

                        <div className="mb-5 inline-flex rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-400">
                             OFERTAS ESPECIALES
                        </div>

                        <h1 className="text-5xl font-black leading-tight md:text-7xl">

                            Los mejores juegos.
                            <br />

                            <span className="text-purple-500">
                                Mejores precios.
                            </span>

                        </h1>

                        <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400">

                            Encuentra juegos, tarjetas de regalo y contenido
                            digital al mejor precio.

                        </p>

                        <div className="mt-8 flex gap-4">

                            <button className="rounded-xl bg-green-600 px-7 py-4 font-bold transition hover:bg-green-500">
                                Ver ofertas
                            </button>

                            <button className="rounded-xl border border-purple-700 px-7 py-4 font-bold transition hover:bg-purple-900/40">
                                Explorar juegos
                            </button>

                        </div>

                    </div>

                </div>

            </section>


            {/* CATEGORÍAS */}

            <section className="mx-auto max-w-7xl px-6 pt-12">

                <div className="mb-6 flex items-end justify-between">

                    <div>

                        <p className="text-sm font-bold uppercase tracking-widest text-green-500">
                            Explora
                        </p>

                        <h2 className="mt-1 text-3xl font-bold">
                            Categorías
                        </h2>

                    </div>

                </div>


                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

                    <div className="cursor-pointer rounded-xl border border-purple-900/40 bg-[#181323] p-6 transition hover:border-purple-600 hover:bg-[#211A2D]">

                        <div className="mb-3 text-3xl">
                            
                        </div>

                        <h3 className="font-bold">
                            Videojuegos
                        </h3>

                        <p className="mt-1 text-sm text-gray-500">
                            PC y Consolas
                        </p>

                    </div>


                    <div className="cursor-pointer rounded-xl border border-purple-900/40 bg-[#181323] p-6 transition hover:border-purple-600 hover:bg-[#211A2D]">

                        <div className="mb-3 text-3xl">
                            💳
                        </div>

                        <h3 className="font-bold">
                            Gift Cards
                        </h3>

                        <p className="mt-1 text-sm text-gray-500">
                            Xbox, PSN y más
                        </p>

                    </div>


                    <div className="cursor-pointer rounded-xl border border-purple-900/40 bg-[#181323] p-6 transition hover:border-purple-600 hover:bg-[#211A2D]">

                        <div className="mb-3 text-3xl">
                            
                        </div>

                        <h3 className="font-bold">
                            Software
                        </h3>

                        <p className="mt-1 text-sm text-gray-500">
                            Licencias digitales
                        </p>

                    </div>


                    <div className="cursor-pointer rounded-xl border border-purple-900/40 bg-[#181323] p-6 transition hover:border-purple-600 hover:bg-[#211A2D]">

                        <div className="mb-3 text-3xl">
                            
                        </div>

                        <h3 className="font-bold">
                            Ofertas
                        </h3>

                        <p className="mt-1 text-sm text-gray-500">
                            Hasta 90% de descuento
                        </p>

                    </div>

                </div>

            </section>


            {/* PRODUCTOS */}

            <section className="mx-auto max-w-7xl px-6 py-16">

                <div className="mb-8 flex items-end justify-between">

                    <div>

                        <p className="text-sm font-bold uppercase tracking-widest text-purple-500">
                            Selección
                        </p>

                        <h2 className="mt-1 text-3xl font-bold">
                            Ofertas destacadas
                        </h2>

                    </div>

                    <button className="text-sm font-semibold text-green-500 hover:text-green-400">
                        Ver todos →
                    </button>

                </div>


                {/* GRID */}

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    {productos.map((producto) => (

                        <article
                            key={producto.id}
                            className="group overflow-hidden rounded-xl border border-purple-900/30 bg-[#181323] transition duration-300 hover:-translate-y-1 hover:border-purple-600 hover:shadow-2xl hover:shadow-purple-950"
                        >

                            {/* IMAGEN */}

                            <div className="relative h-52 overflow-hidden bg-[#211A2D]">

                                <img
                                    src={producto.imagen}
                                    alt={producto.nombre}
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                />

                                {/* DESCUENTO */}

                                <div className="absolute left-3 top-3 rounded-md bg-green-600 px-2 py-1 text-xs font-black">
                                    -{producto.descuento}%
                                </div>

                            </div>


                            {/* INFORMACIÓN */}

                            <div className="p-5">

                                <h3 className="text-lg font-bold transition group-hover:text-purple-400">
                                    {producto.nombre}
                                </h3>

                                <p className="mt-1 text-sm text-gray-500">
                                    {producto.descripcion}
                                </p>


                                <div className="mt-5 flex items-end justify-between">

                                    <div>

                                        <p className="text-xs text-gray-500">
                                            Desde
                                        </p>

                                        <span className="text-2xl font-black">
                                            Q{producto.precio.toFixed(2)}
                                        </span>

                                    </div>


                                    <button className="rounded-lg bg-green-600 px-4 py-2 text-sm font-bold transition hover:bg-green-500">
                                        Comprar
                                    </button>

                                </div>

                            </div>

                        </article>

                    ))}

                </div>

            </section>


            {/* FOOTER */}

            <footer className="border-t border-purple-900/30 bg-[#0B0810]">

                <div className="mx-auto max-w-7xl px-6 py-10">

                    <div className="flex flex-col justify-between gap-6 md:flex-row">

                        <div>

                            <h2 className="text-xl font-bold">
                                Game<span className="text-green-500">
                                    Market
                                </span>
                            </h2>

                            <p className="mt-2 text-sm text-gray-500">
                                Tu marketplace de productos digitales.
                            </p>

                        </div>

                        <p className="text-sm text-gray-600">
                             2026 GameMarket
                        </p>

                    </div>

                </div>

            </footer>

        </main>
    );
}