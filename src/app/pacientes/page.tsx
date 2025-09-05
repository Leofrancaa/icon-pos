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
import {
  Shield,
  Heart,
  Smile,
  AlertTriangle,
  CheckCircle,
  Clock,
  Phone,
  Download,
  Calendar,
} from "lucide-react";

const Pacientes = () => {
  const careGuides = [
    {
      title: "Higiene Diária",
      icon: <Smile className="h-6 w-6" />,
      tips: [
        "Escove os dentes 3 vezes ao dia com escova macia",
        "Use fio dental diariamente, especialmente ao redor dos implantes",
        "Enxágue com antisséptico bucal sem álcool",
        "Evite escovas de cerdas duras que podem danificar a gengiva",
      ],
    },
    {
      title: "Alimentação Recomendada",
      icon: <Heart className="h-6 w-6" />,
      tips: [
        "Prefira alimentos macios nos primeiros dias",
        "Evite alimentos muito duros, pegajosos ou ácidos",
        "Mastigue do lado oposto ao implante (período inicial)",
        "Mantenha uma dieta rica em vitaminas e minerais",
      ],
    },
    {
      title: "Sinais de Alerta",
      icon: <AlertTriangle className="h-6 w-6" />,
      tips: [
        "Dor persistente ou que piora após 48h",
        "Sangramento excessivo ou contínuo",
        "Inchaço que não diminui após 3 dias",
        "Sensação de que o implante está solto",
      ],
    },
    {
      title: "Consultas Regulares",
      icon: <Calendar className="h-6 w-6" />,
      tips: [
        "Retorno em 7 dias para avaliação",
        "Consultas de acompanhamento a cada 3-6 meses",
        "Limpeza profissional a cada 6 meses",
        "Radiografias anuais para controle",
      ],
    },
  ];

  const phases = [
    {
      title: "Pré-operatório",
      duration: "1-2 semanas antes",
      description: "Preparação para o procedimento",
      activities: [
        "Consulta de avaliação completa",
        "Exames de imagem (tomografia)",
        "Planejamento cirúrgico detalhado",
        "Orientações pré-operatórias",
        "Jejum conforme orientação médica",
      ],
    },
    {
      title: "Cirurgia",
      duration: "Dia do procedimento",
      description: "Colocação do implante",
      activities: [
        "Preparação do paciente",
        "Anestesia local",
        "Instalação do implante",
        "Sutura quando necessária",
        "Orientações pós-operatórias",
      ],
    },
    {
      title: "Pós-operatório Imediato",
      duration: "Primeiros 7 dias",
      description: "Cuidados iniciais",
      activities: [
        "Repouso e cuidados especiais",
        "Medicação conforme prescrição",
        "Dieta líquida/pastosa",
        "Compressas frias se necessário",
        "Consulta de retorno",
      ],
    },
    {
      title: "Osseointegração",
      duration: "2-6 meses",
      description: "Integração do implante ao osso",
      activities: [
        "Acompanhamento periódico",
        "Higienização específica",
        "Evitar traumas na região",
        "Controle radiográfico",
        "Preparação para prótese",
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
              Área do Paciente
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cuidados com Implantes
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Cuidados, orientações e dicas importantes.
            </p>
          </div>
        </div>
      </section>

      {/* Care Guide Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Cuidados Essenciais
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Siga estas orientações para garantir o sucesso e longevidade do
              seu implante dental.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {careGuides.map((guide, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg mr-3">
                      {guide.icon}
                    </div>
                    <CardTitle className="text-xl">{guide.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {guide.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Phases */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Fases do Tratamento
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Entenda cada etapa do processo de implantação para se preparar
              adequadamente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((phase, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <CardTitle className="text-lg mb-2">{phase.title}</CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    {phase.duration}
                  </div>
                  <CardDescription className="mt-2">
                    {phase.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {phase.activities.map((activity, activityIndex) => (
                      <li
                        key={activityIndex}
                        className="text-xs flex items-start"
                      >
                        <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-destructive/5 border-l-4 border-destructive">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-destructive/10 rounded-full">
                <Shield className="h-8 w-8 text-destructive" />
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-destructive">
              Emergência 24 horas
            </h2>
            <p className="text-muted-foreground mb-6">
              Em caso de urgência ou complicações, entre em contato conosco
              imediatamente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="destructive">
                <Phone className="h-4 w-4 mr-2" />
                (11) 9999-8888
              </Button>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Guia de Emergência
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Material de Apoio
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Baixe nossos guias e materiais informativos para acompanhar melhor
              seu tratamento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Download className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle>Guia Pós-Operatório</CardTitle>
                <CardDescription>
                  Instruções detalhadas para o período após a cirurgia
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Download PDF
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Smile className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle>Manual de Higiene</CardTitle>
                <CardDescription>
                  Como manter a higiene adequada dos implantes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Download PDF
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Calendar className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle>Cronograma de Consultas</CardTitle>
                <CardDescription>
                  Planejamento das consultas de acompanhamento
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Download PDF
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pacientes;
