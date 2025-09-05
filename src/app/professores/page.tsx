"use client";

import Header from "@/components/navigation/header";
import Footer from "@/components/navigation/footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { IMAGES } from "../../lib/images";
import Image from "next/image";
import { Award, BookOpen, Users, ExternalLink, MapPin } from "lucide-react";

const Professores = () => {
  const professors = [
    {
      name: "Dr. Eduardo Martins",
      specialty: "Implantodontia Avançada",
      bio: "Pioneiro em técnicas de implante imediato e especialista em casos complexos de reabilitação oral.",
      credentials: [
        "PhD em Implantodontia - USP",
        "Pós-doutorado na Universidade de Harvard",
        "20+ anos de experiência clínica",
        "Autor de 3 livros sobre implantodontia",
        "Palestrante internacional",
      ],
      image: IMAGES.professors.male1,
      specialties: ["Implantes Imediatos", "All-on-4", "Regeneração Óssea"],
      courses: ["Implantodontia Avançada", "Cirurgia Guiada"],
    },
    {
      name: "Dra. Patricia Oliveira",
      specialty: "Cirurgia Oral e Regeneração",
      bio: "Especialista em técnicas regenerativas e enxertos ósseos, com vasta experiência em casos de grande complexidade.",
      credentials: [
        "Doutora em Cirurgia Oral - UNESP",
        "Fellowship em Regeneração Óssea - Suíça",
        "18+ anos de experiência",
        "Coordenadora de pesquisa em biomateriais",
        "Consultora científica internacional",
      ],
      image: IMAGES.professors.female1,
      specialties: ["Enxertos Ósseos", "Regeneração Tecidual", "Seio Maxilar"],
      courses: ["Implantodontia Básica", "Regeneração Óssea"],
    },
    {
      name: "Dr. Ricardo Santos",
      specialty: "Prótese sobre Implantes",
      bio: "Referência nacional em reabilitação protética sobre implantes, focado em estética e função.",
      credentials: [
        "Mestre em Prótese Dentária - PUC",
        "Especialização em CAD/CAM - Alemanha",
        "16+ anos de experiência",
        "Certificação Straumann Pro",
        "Instrutor de cursos internacionais",
      ],
      image: IMAGES.professors.male2,
      specialties: ["Prótese Imediata", "CAD/CAM", "Estética Avançada"],
      courses: ["Implantodontia Básica", "Prótese Digital"],
    },
    {
      name: "Dra. Ana Carolina",
      specialty: "Periodontia e Implantes",
      bio: "Especialista em tratamentos periodontais pré-implantares e manutenção de implantes.",
      credentials: [
        "Doutora em Periodontia - UNESP",
        "Especialização em Peri-implantite",
        "14+ anos de experiência",
        "Pesquisadora em Biomateriais",
      ],
      image: IMAGES.professors.female2,
      specialties: ["Periodontia", "Peri-implantite", "Tecidos Moles"],
      courses: ["Implantodontia Básica", "Periodontia Aplicada"],
    },
    {
      name: "Dr. Fernando Costa",
      specialty: "Implantodontia Estética",
      bio: "Especialista em implantes na região anterior, focado em resultados estéticos excepcionais.",
      credentials: [
        "Mestre em Implantodontia - PUC",
        "Fellowship em Estética",
        "13+ anos de experiência",
        "Palestrante Internacional",
      ],
      image: IMAGES.professors.male3,
      specialties: ["Estética Anterior", "Provisórios", "Rosa e Branco"],
      courses: ["Implantodontia Estética", "Zona Estética"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary to-primary-light text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-6 bg-accent text-accent-foreground">
              Corpo Docente
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nossos Professores
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Conheça os especialistas renomados que compõem nosso corpo
              docente. Profissionais com experiência internacional e
              reconhecimento científico.
            </p>
          </div>
        </div>
      </section>

      {/* Professors Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {professors.map((professor, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="relative">
                  <div className="aspect-square w-full bg-secondary rounded-t-lg overflow-hidden">
                    <Image
                      src={professor.image}
                      alt={professor.name}
                      fill
                      className="object-cover w-full h-full"
                      priority
                    />
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-accent text-accent-foreground">
                      Professor
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{professor.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {professor.specialty}
                  </CardDescription>
                  <p className="text-sm text-muted-foreground mt-2">
                    {professor.bio}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Specialties */}
                  <div>
                    <h4 className="font-medium text-sm mb-2">
                      Especialidades:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {professor.specialties.map((specialty, specIndex) => (
                        <Badge
                          key={specIndex}
                          variant="outline"
                          className="text-xs"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Credentials */}
                  <div>
                    <h4 className="font-medium text-sm mb-2">Credenciais:</h4>
                    <ul className="space-y-1">
                      {professor.credentials
                        .slice(0, 3)
                        .map((credential, credIndex) => (
                          <li
                            key={credIndex}
                            className="text-xs text-muted-foreground flex items-start"
                          >
                            <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {credential}
                          </li>
                        ))}
                    </ul>
                  </div>

                  <Button variant="outline" className="w-full">
                    Ver Perfil Completo
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Excelência Acadêmica
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nosso corpo docente representa o que há de mais avançado em
              implantodontia no Brasil e no mundo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Award className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Titulação Máxima</h3>
              <p className="text-muted-foreground">
                100% dos professores com mestrado ou doutorado
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Publicações</h3>
              <p className="text-muted-foreground">
                200+ artigos científicos publicados
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Experiência</h3>
              <p className="text-muted-foreground">
                Média de 15+ anos de experiência clínica
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Internacional</h3>
              <p className="text-muted-foreground">
                Formação e experiência no exterior
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Professores;
