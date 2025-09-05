import Header from "@/components/navigation/header";
import Footer from "@/components/navigation/footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Award,
  GraduationCap,
} from "lucide-react";

const Cursos = () => {
  const courses = [
    {
      id: 1,
      title: "Implantodontia Básica",
      subtitle: "Fundamentos da Implantodontia Moderna",
      description:
        "Curso introdutório abrangente que cobre todos os aspectos fundamentais da implantodontia, desde diagnóstico até reabilitação protética básica.",
      duration: "120 horas",
      format: "Presencial + Online",
      level: "Iniciante",
      price: "R$ 4.500",
      installments: "10x R$ 450",
      nextClass: "15 de Abril de 2024",
      spots: "12 vagas disponíveis",
      modules: [
        "Anatomia e Fisiologia Aplicada",
        "Diagnóstico e Planejamento",
        "Técnicas Cirúrgicas Básicas",
        "Princípios de Osseointegração",
        "Prótese sobre Implantes - Básico",
        "Complicações e Manutenção",
      ],
      targetAudience: [
        "Cirurgiões-dentistas recém-formados",
        "Profissionais iniciando em implantodontia",
        "Dentistas buscando atualização",
      ],
      includes: [
        "Material didático completo",
        "Kit cirúrgico básico",
        "Certificado de conclusão",
        "Acesso ao portal do aluno",
        "Suporte pós-curso (3 meses)",
      ],
    },
    {
      id: 2,
      title: "Implantodontia Avançada",
      subtitle: "Técnicas Complexas e Casos Desafiadores",
      description:
        "Curso para profissionais experientes que desejam dominar técnicas avançadas e resolver casos complexos com segurança e previsibilidade.",
      duration: "180 horas",
      format: "Presencial + Online",
      level: "Avançado",
      price: "R$ 7.200",
      installments: "12x R$ 600",
      nextClass: "22 de Abril de 2024",
      spots: "8 vagas disponíveis",
      modules: [
        "Cirurgia Guiada por Computador",
        "Regeneração Óssea Guiada",
        "Levantamento de Seio Maxilar",
        "Implantes Imediatos",
        "All-on-4 e All-on-6",
        "Complicações Avançadas",
      ],
      targetAudience: [
        "Implantodontistas com experiência",
        "Cirurgiões especializados",
        "Profissionais buscando alta especialização",
      ],
      includes: [
        "Material didático avançado",
        "Kit cirúrgico premium",
        "Software de planejamento",
        "Mentoria individual",
        "Suporte pós-curso (6 meses)",
      ],
    },
    {
      id: 3,
      title: "Cirurgia Guiada",
      subtitle: "Planejamento Digital e Cirurgia Guiada por Computador",
      description:
        "Domine as mais modernas técnicas de planejamento digital e cirurgia guiada, aumentando previsibilidade e reduzindo tempo cirúrgico.",
      duration: "80 horas",
      format: "Presencial + Online",
      level: "Intermediário",
      price: "R$ 3.800",
      installments: "8x R$ 475",
      nextClass: "29 de Abril de 2024",
      spots: "15 vagas disponíveis",
      modules: [
        "Tomografia e Planejamento 3D",
        "Software de Planejamento",
        "Confecção de Guias Cirúrgicos",
        "Cirurgia Flapless",
        "Prótese Imediata",
        "Fluxo Digital Completo",
      ],
      targetAudience: [
        "Implantodontistas intermediários",
        "Profissionais interessados em tecnologia",
        "Dentistas modernizando a prática",
      ],
      includes: [
        "Licença de software por 6 meses",
        "Guias cirúrgicos personalizados",
        "Material didático digital",
        "Certificação em cirurgia guiada",
        "Suporte técnico especializado",
      ],
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
              Especialização Profissional
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nossos Cursos
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Programas de especialização estruturados para diferentes níveis de
              experiência, desde fundamentos até técnicas mais avançadas da
              implantodontia moderna.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {courses.map((course) => (
              <Card key={course.id} className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* Course Info */}
                  <div className="lg:col-span-2 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge
                        variant={
                          course.level === "Iniciante"
                            ? "default"
                            : course.level === "Intermediário"
                            ? "secondary"
                            : "destructive"
                        }
                      >
                        {course.level}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        {course.duration}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="h-4 w-4 mr-1" />
                        {course.format}
                      </div>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold mb-2">
                      {course.title}
                    </h2>
                    <h3 className="text-lg text-primary mb-4">
                      {course.subtitle}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {course.description}
                    </p>

                    {/* Modules */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Módulos do Curso:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {course.modules.map((module, index) => (
                          <div
                            key={index}
                            className="flex items-center text-sm"
                          >
                            <CheckCircle className="h-4 w-4 text-accent mr-2" />
                            {module}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Target Audience */}
                    <div>
                      <h4 className="font-semibold mb-3">Público-alvo:</h4>
                      <div className="space-y-1">
                        {course.targetAudience.map((audience, index) => (
                          <div
                            key={index}
                            className="flex items-center text-sm text-muted-foreground"
                          >
                            <span className="w-1 h-1 bg-primary rounded-full mr-3"></span>
                            {audience}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Course Details & CTA */}
                  <div className="bg-secondary p-8">
                    <div className="sticky top-8">
                      <div className="text-center mb-6">
                        <div className="text-3xl font-bold text-primary mb-2">
                          {course.price}
                        </div>
                        <div className="text-sm text-muted-foreground mb-1">
                          à vista
                        </div>
                        <div className="text-sm text-muted-foreground">
                          ou {course.installments}
                        </div>
                      </div>

                      <Separator className="my-6" />

                      <div className="space-y-4 mb-6">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">
                            Próxima turma:
                          </span>
                          <span className="font-medium">
                            {course.nextClass}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Vagas:</span>
                          <span className="font-medium text-accent">
                            {course.spots}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Button className="w-full bg-gradient-to-r from-primary to-primary-light">
                          Inscrever-se Agora
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button variant="outline" className="w-full">
                          Download do Programa
                          <BookOpen className="ml-2 h-4 w-4" />
                        </Button>
                      </div>

                      <Separator className="my-6" />

                      <div>
                        <h5 className="font-semibold mb-3 text-sm">
                          O que está incluso:
                        </h5>
                        <div className="space-y-2">
                          {course.includes.map((include, index) => (
                            <div
                              key={index}
                              className="flex items-start text-sm"
                            >
                              <CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                              {include}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Por que escolher nossos cursos?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Benefícios exclusivos que fazem a diferença na sua formação
              profissional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Certificação MEC</h3>
              <p className="text-muted-foreground text-sm">
                Certificados reconhecidos pelo Ministério da Educação
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Turmas Reduzidas</h3>
              <p className="text-muted-foreground text-sm">
                Máximo 15 alunos por turma para atenção personalizada
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Material Incluso</h3>
              <p className="text-muted-foreground text-sm">
                Kits cirúrgicos e materiais de última geração inclusos
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Award className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Suporte Contínuo</h3>
              <p className="text-muted-foreground text-sm">
                Acompanhamento pós-curso e suporte técnico especializado
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cursos;
