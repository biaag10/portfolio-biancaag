'use client'

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Box, Typography, Card, CardContent, Grid, Modal, Button } from '@mui/material';

interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string;
    details: string;
}

export default function Projetos() {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const projects: Project[] = [
        {
            id: 1,
            title: "Projeto FullStack",
            description: "Software de agendamento",
            technologies: "React.js, Next.js, Nest.js, PostgreSQL, Prisma, Google Calendar API",
            details: "Ajudei no desenvolvimento desse software de agendamento para uma empresa.",
        },
    ];

    const handleOpenModal = (project: Project) => {
        setSelectedProject(project);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <Box component="main" sx={{ flexGrow: 1, p: 4 }}>
                <Grid container spacing={2}>
                    {projects.map((project) => (
                        <Grid item xs={12} sm={6} md={4} key={project.id}>
                            <Card
                                sx={{
                                    transition: "transform 0.3s ease-in-out",
                                    "&:hover": { transform: "scale(1.05)" },
                                }}
                            >
                                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <Typography variant="h6" mb={1}>{project.title}</Typography>
                                    <Typography variant="body2" mb={1}>{project.description}</Typography>
                                    <Typography variant="body2" sx={{ whiteSpace: "normal", wordBreak: "break-word" }} mb={2}>
                                        Tecnologias: {project.technologies}
                                    </Typography>
                                    <Button
                                        onClick={() => handleOpenModal(project)}
                                        className="bg-white dark:bg-gray-900 text-black hover:bg-gray-800 dark:hover:bg-gray-400"
                                    >
                                        Ver Detalhes
                                    </Button>

                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Footer />

            <Modal open={openModal} onClose={handleCloseModal}>
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
                    <Typography variant="h6" sx={{ color: 'darkblue', fontWeight: 'bold', mb: 1 }}>
                        {selectedProject?.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'gray', fontSize: '1rem' }}>
                        {selectedProject?.details}
                    </Typography>
                    <Button onClick={handleCloseModal}>Fechar</Button>
                </Box>
            </Modal>
        </Box>
    );
}