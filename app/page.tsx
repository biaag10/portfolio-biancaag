import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // Importando o Footer

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Bem-vindo ao meu portfólio!
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-4">
          Aqui você encontra meus projetos e informações sobre mim.
        </p>
      </main>
      <Footer /> {/* Chamando o Footer aqui */}
    </>
  );
}
