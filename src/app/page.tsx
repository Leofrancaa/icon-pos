import Header from "@/components/navigation/header";
import Footer from "@/components/navigation/footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Users,
  Award,
  Star,
  ArrowRight,
  CheckCircle,
  BookOpen,
  Calendar,
  Clock,
} from "lucide-react";
import TestImages from "../components/testImage";

const Index = () => {
  const courses = [
    {
      title: "Implantodontia Básica",
      description: "Fundamentos teóricos e práticos da implantodontia moderna",
      duration: "120h",
      level: "Iniciante",
      price: "R$ 4.500",
    },
    {
      title: "Implantodontia Avançada",
      description: "Técnicas avançadas e casos complexos em implantodontia",
      duration: "180h",
      level: "Avançado",
      price: "R$ 7.200",
    },
    {
      title: "Cirurgia Guiada",
      description: "Planejamento digital e cirurgia guiada por computador",
      duration: "80h",
      level: "Intermediário",
      price: "R$ 3.800",
    },
  ];

  const testimonials = [
    {
      name: "Dr. Carlos Silva",
      location: "São Paulo, SP",
      text: "O curso transformou minha prática clínica. A metodologia é excepcional e os professores são referência na área.",
      rating: 5,
    },
    {
      name: "Dra. Marina Santos",
      location: "Rio de Janeiro, RJ",
      text: "Excelente qualidade de ensino. Saí do curso preparada para casos complexos que antes não conseguia resolver.",
      rating: 5,
    },
    {
      name: "Dr. Roberto Lima",
      location: "Belo Horizonte, MG",
      text: "Investimento que valeu cada centavo. Hoje tenho muito mais segurança e conhecimento técnico.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-primary-foreground">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-accent text-accent-foreground">
              Pós-Graduação Especializada
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Especialização em
              <span className="block text-accent"> Implantodontia</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Transforme sua carreira com o curso mais completo de
              implantodontia do Brasil. Metodologia prática, professores
              renomados e certificação reconhecida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Inscreva-se Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Baixar Programa
                <BookOpen className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                1200+
              </div>
              <p className="text-muted-foreground">Alunos Formados</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                15+
              </div>
              <p className="text-muted-foreground">Anos de Experiência</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                98%
              </div>
              <p className="text-muted-foreground">Satisfação dos Alunos</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                24h
              </div>
              <p className="text-muted-foreground">Suporte Online</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">
              Nossos Cursos
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Cursos de Especialização
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Escolha o curso ideal para o seu nível de experiência e objetivos
              profissionais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card
                key={index}
                className="relative overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{course.level}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {course.duration}
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-primary">
                      {course.price}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      à vista
                    </span>
                  </div>
                  <Button className="w-full" variant="outline">
                    Saiba Mais
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Por que escolher a ImplantoEdu?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Somos referência em ensino de implantodontia no Brasil, com
              metodologia única e resultados comprovados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Metodologia Prática
              </h3>
              <p className="text-muted-foreground">
                Aprendizado baseado em casos reais com prática supervisionada
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Professores Experientes
              </h3>
              <p className="text-muted-foreground">
                Corpo docente com mestrado, doutorado e experiência
                internacional
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Award className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Certificação</h3>
              <p className="text-muted-foreground">
                Certificado reconhecido pelo MEC e conselho federal de
                odontologia
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexibilidade</h3>
              <p className="text-muted-foreground">
                Aulas presenciais e online, adequadas à sua rotina profissional
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent">Depoimentos</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              O que nossos alunos dizem
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Confira os depoimentos de profissionais que transformaram suas
              carreiras conosco.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">
                    {testimonial.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-light text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para transformar sua carreira?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Não perca a oportunidade de se especializar com os melhores
            professores e a metodologia mais reconhecida do mercado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Inscreva-se Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Falar com Consultor
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Componente temporário para testar imagens */}
      <TestImages />
    </div>
  );
};

export default Index;
