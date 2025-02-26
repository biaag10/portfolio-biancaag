import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "2rem 1rem",
        }}
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white" style={{ marginBottom: 0 }}>
          Bem-vindo ao meu portfólio!
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-4">
          Aqui você encontra meus projetos e informações sobre mim.
        </p>
      </Box>
      <Footer />
    </Box>
  );
}