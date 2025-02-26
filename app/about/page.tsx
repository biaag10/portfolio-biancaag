import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Card, CardContent, Typography, Chip, Container, Grid, Box } from "@mui/material";
import Image from "next/image";

export default function AboutMe() {
  return (
    <Box className="min-h-screen flex flex-col bg-gray-950 text-white">
      <Navbar />

      <Container maxWidth="lg" className="flex-1 py-10 relative">
        <Box className="flex items-center justify-center md:justify-start relative mb-0">
          <Typography variant="h3" className="font-bold relative z-10">
            Sobre Mim
          </Typography>

          <Box
            className="relative"
            sx={{
              position: "relative",
              marginTop: "-58px", 
              zIndex: 10, 
              marginLeft: "1rem",
            }}
          >
            <Image
              src="/foto-portfolio-b.svg"
              alt="Foto de Bianca"
              width={200} 
              height={300} 
              objectFit="cover"
              className="shadow-lg"
            />
          </Box>
          <Box className="flex flex-col items-start text-left ml-8">
            <Typography variant="h3" className="font-bold relative z-10">
              Bianca Andrade Galvão
            </Typography>
            <Typography variant="h5" className="font-bold relative z-10">
              Engenharia de Computação
            </Typography>
            <Typography variant="h5" className="font-bold relative z-10">
              7° semestre
            </Typography>
          </Box>
        </Box>

        <Box className="relative">
          <Card className="bg-gray-900 text-white relative overflow-visible p-2">
            <CardContent>
              <Typography variant="body1" className="mb-4">
                Sou estudante do <b>sétimo semestre de Engenharia de Computação no Centro Universitário SENAI CIMATEC</b>, onde venho aprofundando meus conhecimentos em tecnologia e inovação. Desde o início da minha trajetória acadêmica, busquei experiências que me permitissem aprender além da sala de aula, aplicando a teoria na prática e adquirindo vivência real na área.
              </Typography>
              <Typography variant="body1" className="mb-4">
                Durante minha graduação, <b>atuei na CIMATEC Jr.</b>, Empresa Júnior de Poli Engenharia, onde tive a oportunidade de trabalhar em <b>projetos com clientes reais</b>, desenvolvendo <b>experiência em desenvolvimento web, prototipação e gestão de projetos</b>. Passei por diferentes funções, desde <b>projetista e coordenadora de projetos até integrar o time de marketing e assumir a gerência do núcleo de projetos de computação</b>. Essa experiência foi fundamental para expandir minha visão estratégica sobre desenvolvimento de software, além de fortalecer minhas <b>habilidades de liderança, trabalho em equipe, gestão de processos e projetos</b>.
              </Typography>
              <Typography variant="body1" className="mb-4">
                Além disso, <b>participei de dois programas de Iniciação Científica</b>, um apoiado pela FAPESB e outro pelo CNPq, onde desenvolvi <b>pesquisas na área de geração de energias renováveis</b>. Esse envolvimento acadêmico me permitiu aprofundar meu conhecimento técnico e aprimorar minhas habilidades analíticas e investigativas.
              </Typography>
              <Typography variant="body1" className="mb-4">
                <b>Atualmente, meu foco está no desenvolvimento de software</b>, onde venho aprimorando minhas habilidades em programação e criação de soluções tecnológicas eficientes. Tenho experiência com desenvolvimento web, especialmente na área de front-end, e estou expandindo meus conhecimentos para back-end, buscando uma visão mais completa e alinhada ao <b>desenvolvimento full-stack</b>.
              </Typography>
              <Typography variant="body1" className="mb-4">
                Meu objetivo é continuar explorando diferentes áreas da computação para encontrar aquela que mais me motiva. <b>Estou sempre em busca de desafios que me permitam crescer profissionalmente, aplicar meus conhecimentos na construção de soluções inovadoras e impactar positivamente o meio em que estou inserida</b>.
              </Typography>

              <Box className="mt-6">
                <Typography variant="h6" className="mb-2">Habilidades Técnicas:</Typography>
                <Grid container spacing={1}>
                  {["C", "Python", "HTML", "CSS", "JavaScript", "React.js", "TypeScript", "Tailwind.CSS", "Next.js", "Nest.js", "Prisma", "PostgreSQL", "SQL", "Figma"].map((skill) => (
                    <Grid item key={skill}>
                      <Chip label={skill} className="bg-blue-500 text-white" />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
}