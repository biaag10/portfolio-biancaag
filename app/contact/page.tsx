'use client'

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { Box, Button, FormControl, InputLabel, TextField, Typography } from "@mui/material";

export default function Contato() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [status, setStatus] = useState("");

    // função para enviar o formulário
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch("/api/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ nome, email, mensagem }),
        });

        if (res.ok) {
            setStatus("Mensagem enviada com sucesso!");
            setNome("");
            setEmail("");
            setMensagem("");
        } else {
            setStatus("Erro ao enviar a mensagem. Tente novamente.");
        }
    }

    return (
        <>
            <Navbar />
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh" p={3}>

                {/* título */}
                <Typography variant="h4" fontWeight="bold" textAlign="center" mb={3}>
                    Entre em contato
                </Typography>

                {/* contatos */}
                <Box display="flex" justifyContent="center" gap={3} mb={4} >
                    <Typography display="flex" alignItems="center" >
                        <FaEnvelope className="mr-2 text-white" />  
                        <a href="mailto:biancandradegalvao@outlook.com" className="text-white">
                            biancandradegalvao@outlook.com
                        </a>
                    </Typography>
                    <Typography display="flex" alignItems="center" color="textSecondary">
                        <FaWhatsapp className="mr-2 text-green-500" />
                        <a href="https://wa.me/71996898570" className="text-white">
                            (71) 99689-8570
                        </a>
                    </Typography>
                    <Typography display="flex" alignItems="center" color="textSecondary">
                        <FaLinkedin className="mr-2 text-blue-500" />
                        <a href="https://www.linkedin.com/in/bianca-andrade-galv%C3%A3o/" target="_blank" className="text-white">
                            linkedin.com/in/bianca-andrade-galvao
                        </a>
                    </Typography>
                    <Typography display="flex" alignItems="center" color="textSecondary">
                        <FaGithub className="mr-2 text-gray-700" />
                        <a href="https://github.com/biaag10" target="_blank" className="text-white">
                            github.com/biaag10
                        </a>
                    </Typography>
                </Box>
                {/* formulário para contato */}
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    display="flex"
                    flexDirection="column"
                    gap={2}
                    maxWidth="1000px"
                    width="100%"
                    bgcolor="background.paper"
                    p={2} 
                    borderRadius={1} 
                    boxShadow={3}
                    >
                    <FormControl fullWidth>
                        <InputLabel shrink>Nome</InputLabel>
                        <TextField 
                            variant="outlined"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel shrink>E-mail</InputLabel>
                        <TextField 
                            type="email"
                            variant="outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </FormControl>

                    <FormControl fullWidth>
                        <InputLabel shrink>Mensagem</InputLabel>
                        <TextField 
                            variant="outlined"
                            multiline
                            rows={4}
                            value={mensagem}
                            onChange={(e) => setMensagem(e.target.value)}
                            required
                        />
                    </FormControl>

                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Enviar Mensagem
                    </Button>

                    {status && (
                        <Typography color="success.main" textAlign="center">
                            {status}
                        </Typography>
                    )}
                    
                </Box>
            </Box>
            <Footer />
        </>
    )

}