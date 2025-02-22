import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300 py-6 text-center">
      <p className="text-sm">&copy; {new Date().getFullYear()} Bianca Andrade Galvão. Todos os direitos reservados.</p>

      {/* Ícones das redes sociais */}
      <div className="flex justify-center mt-4 space-x-6">
        <a href="https://github.com/biaag10" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 text-2xl">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/bianca-andrade-galv%C3%A3o/" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 text-2xl">
          <FaLinkedin />
        </a>
        <a href="https://wa.me/71996898570" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 text-2xl">
          <FaWhatsapp />
        </a>
        <a href="mailto:biancandradegalvao@outlook.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 text-2xl">
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
