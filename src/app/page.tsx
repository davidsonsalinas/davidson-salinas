"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronLeftIcon, ChevronRightIcon, CircleDotIcon, MoonIcon, MountainIcon, StarIcon, SunIcon } from "lucide-react"
import ContactForm from "@/components/landpage/contactForm"
import Image from 'next/image';

const projects = [
  {
    title: "shadcn/ui",
    description: "Beautifully designed components that you can copy and paste into your apps.",
    language: "TypeScript",
    stars: 20000,
    updatedAt: "April 2024",
    url: "https://github.com/shadcn/ui",
  },
  {
    title: "vercel/next.js",
    description: "The React Framework – created and maintained by Vercel.",
    language: "TypeScript",
    stars: 90000,
    updatedAt: "May 2023",
    url: "https://github.com/vercel/next.js",
  },
  {
    title: "tailwindlabs/tailwindcss",
    description: "A utility-first CSS framework for rapidly building custom designs.",
    language: "CSS",
    stars: 170000,
    updatedAt: "June 2023",
    url: "https://github.com/tailwindlabs/tailwindcss",
  }
]

const formatNumber = (num:number) => num.toLocaleString('de-DE');

export default function Component() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const [isEnglish, setIsEnglish] = useState(true)

  const handlePrevProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1))
  }

  const handleNextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? "dark bg-gray-950" : "bg-white"}`}>
      <header className="bg-gray-100 dark:bg-gray-800 py-6 px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MountainIcon className="h-6 w-6 text-gray-900 dark:text-gray-50" />
          <span className="text-lg font-bold text-gray-900 dark:text-gray-50">Davidson Salinas</span>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode(!isDarkMode)} className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full ">
            {isDarkMode ? (
              <SunIcon className="h-5 w-5 text-gray-900 dark:text-gray-50" />
            ) : (
              <MoonIcon className="h-5 w-5 text-gray-900 dark:text-gray-50" />
            )}
          </button>
          <button onClick={() => setIsEnglish(!isEnglish)} className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full dark:text-gray-50">
            {isEnglish ? 'EN' : 'PT'}
          </button>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-gray-100 dark:bg-gray-800 py-12 md:py-20 px-4 md:px-8 grid md:grid-cols-2 gap-8">
          <div className="flex flex-col items-start gap-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50">
              {isEnglish ? 'Hello, I am Davidson Salinas' : 'Olá, eu sou Davidson Salinas'}
            </h1>
            <p className="text-gray-600 dark:text-gray-50 leading-relaxed">
              {isEnglish 
                ? "Hello! I am Davidson Salinas, a 27-year-old Full Stack Developer specializing in Backend, currently residing in Itajaí, Santa Catarina, Brazil. I have solid experience in creating and integrating APIs, as well as developing end-to-end platforms, always committed to best practices in clean code and clean architecture to deliver efficient and scalable solutions."
                : "Olá! Eu sou Davidson Salinas, um desenvolvedor Full Stack de 27 anos, especializado em Backend, atualmente residindo em Itajaí, Santa Catarina, Brasil. Tenho uma sólida experiência em criação e integração de APIs, bem como no desenvolvimento de plataformas end-to-end, sempre comprometido com as melhores práticas de clean code e clean architecture para oferecer soluções eficientes e escaláveis."
              }
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                {isEnglish ? 'Contact' : 'Contato'}
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                {isEnglish ? 'Projects' : 'Projetos'}
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
             <Image
              src="/davidson-salinas.png"
              width={300}
              height={300}
              alt="Davidson Salinas"
              className="rounded-full w-[200px] h-[200px] md:w-[300px] md:h-[300px] object-cover"
            /> 
          </div>
        </section>
        <section className="py-12 md:py-20 px-4 md:px-8 ">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-50">
              {isEnglish ? 'My Projects' : 'Meus Projetos'}
            </h2>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={handlePrevProject} className="rounded-full">
                <ChevronLeftIcon className="h-5 w-5 dark:text-gray-50" />
                <span className="sr-only">Previous</span>
              </Button>
              <Button variant="ghost" size="icon" onClick={handleNextProject} className="rounded-full">
                <ChevronRightIcon className="h-5 w-5 dark:text-gray-50"/>
                <span className="sr-only">Next</span>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(currentProjectIndex, currentProjectIndex + 3).map((project, index) => (
              <Card key={index} className={`${isDarkMode ? "bg-gray-800 text-gray-50" : "bg-white text-gray-900"}`}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <CircleDotIcon className={`h-3 w-3 fill-gray-900 dark:fill-gray-50`} />
                    <span>{project.language}</span>
                    <StarIcon className="h-3 w-3" />
                    <span>{formatNumber(project.stars)}</span>
                    <span>{isEnglish ? 'Updated' : 'Atualizado'} {project.updatedAt}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    prefetch={false}
                  >
                    {isEnglish ? 'View Project' : 'Ver Projeto'}
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
        <section className="bg-gray-100 dark:bg-gray-800 py-12 md:py-20 px-4 md:px-8 dark:text-gray-50">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-50 mb-8">
            {isEnglish ? 'Get in Touch' : 'Entre em Contato'}
          </h2>
            <ContactForm/>
        </section>
      </main>
      <footer className="bg-gray-900 dark:bg-gray-950 text-gray-50 py-6 px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MountainIcon className="h-6 w-6" />
          <span className="text-sm">© 2024 Davidson Salinas. {isEnglish ? 'All rights reserved.' : 'Todos os direitos reservados.'}</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" className="hover:underline" prefetch={false}>
            {isEnglish ? 'Privacy Policy' : 'Política de Privacidade'}
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            {isEnglish ? 'Terms of Use' : 'Termos de Uso'}
          </Link>
        </div>
      </footer>
    </div>
  )
}
