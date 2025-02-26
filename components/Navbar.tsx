import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="bg-white dark:bg-gray-900 shadow-md">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* LOGO */}
                    <h1>
                        PORTFÓLIO - BIANCA ANDRADE GALVÃO
                    </h1>
                    {/* LINKS */}
                    <div className="hidden md:flex space-x-6">
                        <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
                            Home
                        </Link>
                        {/* editar link para redirecionar para sobre */}
                        <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
                            Sobre
                        </Link>
                        {/* editar link para redirecionar para projetos */}
                        <Link href="/projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
                            Projetos
                        </Link>
                        {/* editar link para redirecionar para contato */}
                        <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
                            Contato
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;