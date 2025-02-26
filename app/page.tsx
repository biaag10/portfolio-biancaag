import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Header para navegação */}
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Bem-vindo ao meu portfólio!
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-4">
          Aqui você encontra meus projetos e informações sobre mim.
        </p>
      </main>
      {/* Rodapé */}
      <Footer />
    </>
  );
}
