"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  BookOpen,
  Download,
  Play,
  CheckCircle,
  Bell,
  User,
  LogOut,
  Calendar,
  Award,
  FileText,
  Video,
  Stethoscope,
  Clock,
  Users,
  BarChart3,
  PlayCircle,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("cursos");

  const handleLogout = () => {
    toast({
      title: "Logout realizado com sucesso!",
      description: "Até logo!",
    });
    router.push("/");
  };

  const studentInfo = {
    name: "Dr. João Silva",
    email: "joao.silva@email.com",
    course: "Implantodontia Avançada",
    progress: 65,
    nextClass: "15 de Abril, 2024",
    completedModules: 8,
    totalModules: 12,
    studyHours: 48,
    totalStudyHours: 80,
  };

  const courses = [
    {
      title: "Implantodontia Avançada",
      progress: 65,
      nextLesson: "Regeneração Óssea Guiada",
      totalLessons: 24,
      completedLessons: 16,
      status: "Em Andamento",
      duration: "3h 20min restantes",
      instructor: "Dr. Carlos Mendes",
    },
    {
      title: "Cirurgia Guiada",
      progress: 100,
      nextLesson: "Curso Concluído",
      totalLessons: 16,
      completedLessons: 16,
      status: "Concluído",
      duration: "Finalizado",
      instructor: "Dra. Ana Paula",
    },
  ];

  const videoLessons = [
    {
      id: 1,
      title: "Técnicas de Enxerto Ósseo - Parte 1",
      duration: "28:45",
      completed: true,
      progress: 100,
      thumbnail: "/placeholder-thumb1.jpg",
      module: "Módulo 8",
      instructor: "Dr. Carlos Mendes",
      views: 156,
    },
    {
      id: 2,
      title: "Regeneração Óssea Guiada",
      duration: "35:20",
      completed: false,
      progress: 0,
      thumbnail: "/placeholder-thumb2.jpg",
      module: "Módulo 9",
      instructor: "Dr. Carlos Mendes",
      views: 89,
      isNext: true,
    },
    {
      id: 3,
      title: "Casos Clínicos Complexos",
      duration: "42:15",
      completed: false,
      progress: 45,
      thumbnail: "/placeholder-thumb3.jpg",
      module: "Módulo 9",
      instructor: "Dra. Maria Santos",
      views: 234,
    },
    {
      id: 4,
      title: "Protocolo de Carga Imediata",
      duration: "31:30",
      completed: false,
      progress: 0,
      thumbnail: "/placeholder-thumb4.jpg",
      module: "Módulo 10",
      instructor: "Dr. Ricardo Lima",
      views: 67,
    },
  ];

  const recentActivities = [
    {
      type: "lesson",
      title: "Concluída: Técnicas de Enxerto Ósseo",
      date: "2 dias atrás",
      icon: <CheckCircle className="h-4 w-4 text-green-600" />,
      status: "completed",
    },
    {
      type: "download",
      title: "Download: Manual de Cirurgia",
      date: "3 dias atrás",
      icon: <Download className="h-4 w-4 text-blue-600" />,
      status: "download",
    },
    {
      type: "quiz",
      title: "Quiz: Osseointegração - 85%",
      date: "5 dias atrás",
      icon: <Award className="h-4 w-4 text-yellow-600" />,
      status: "quiz",
    },
    {
      type: "video",
      title: "Assistiu: Casos Clínicos Complexos",
      date: "6 dias atrás",
      icon: <Play className="h-4 w-4 text-purple-600" />,
      status: "video",
    },
  ];

  const notifications = [
    {
      title: "Nova aula disponível",
      description: "Regeneração Óssea Guiada já está disponível",
      time: "2h atrás",
      read: false,
      type: "new_content",
    },
    {
      title: "Lembrete: Próxima aula presencial",
      description: "Aula prática em 3 dias - São Paulo",
      time: "1 dia atrás",
      read: false,
      type: "reminder",
    },
    {
      title: "Material complementar",
      description: "Novos PDFs adicionados ao módulo 8",
      time: "2 dias atrás",
      read: true,
      type: "material",
    },
  ];

  const upcomingEvents = [
    {
      title: "Aula Prática - Cirurgia Guiada",
      date: "15 de Abril",
      time: "09:00",
      location: "São Paulo - SP",
      type: "presencial",
    },
    {
      title: "Webinar: Novas Técnicas",
      date: "22 de Abril",
      time: "19:00",
      location: "Online",
      type: "online",
    },
    {
      title: "Prova Final - Implantodontia",
      date: "30 de Abril",
      time: "14:00",
      location: "Online",
      type: "exam",
    },
  ];

  const studyMaterials = [
    {
      title: "Manual de Implantodontia",
      type: "PDF",
      size: "2.3 MB",
      downloads: 45,
      category: "manual",
    },
    {
      title: "Atlas Cirúrgico",
      type: "PDF",
      size: "5.1 MB",
      downloads: 32,
      category: "atlas",
    },
    {
      title: "Vídeos - Módulo 8",
      type: "Vídeo",
      size: "120 MB",
      downloads: 28,
      category: "video",
    },
    {
      title: "Questionários Avaliativos",
      type: "PDF",
      size: "890 KB",
      downloads: 67,
      category: "quiz",
    },
    {
      title: "Casos Clínicos Comentados",
      type: "PDF",
      size: "3.2 MB",
      downloads: 41,
      category: "case",
    },
    {
      title: "Protocolo Cirúrgico Completo",
      type: "PDF",
      size: "1.1 MB",
      downloads: 55,
      category: "protocol",
    },
  ];

  const TabButton = ({
    id,
    label,
    icon,
  }: {
    id: string;
    label: string;
    icon: React.ReactNode;
  }) => (
    <Button
      variant={activeTab === id ? "default" : "ghost"}
      className={`justify-start w-full transition-all duration-200 ${
        activeTab === id
          ? "bg-primary text-primary-foreground shadow-md"
          : "hover:bg-gradient-to-r hover:from-primary/10 hover:to-blue-50 hover:shadow-sm hover:scale-[1.02] text-muted-foreground hover:text-foreground"
      }`}
      onClick={() => setActiveTab(id)}
    >
      {icon}
      {label}
    </Button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-blue-600">
                  <Stethoscope className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-xl">ImplantoEdu</span>
              </Link>
              <Separator orientation="vertical" className="h-6" />
              <Badge variant="secondary" className="font-medium">
                Área do Aluno
              </Badge>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-4 w-4 mr-2" />
                Notificações
                {notifications.filter((n) => !n.read).length > 0 && (
                  <span className="absolute -top-1 -right-1 h-3 w-3 bg-destructive rounded-full flex items-center justify-center">
                    <span className="text-xs text-white font-bold">
                      {notifications.filter((n) => !n.read).length}
                    </span>
                  </span>
                )}
              </Button>
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4 mr-2" />
                {studentInfo.name}
              </Button>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Sair
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Profile Card */}
            <Card className="mb-6 border-0 shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Meu Perfil
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="h-16 w-16 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <User className="h-8 w-8 text-white" />
                    </div>
                    <p className="font-semibold text-lg">{studentInfo.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {studentInfo.email}
                    </p>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Curso Atual
                      </p>
                      <p className="font-medium">{studentInfo.course}</p>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-sm font-medium text-muted-foreground">
                          Progresso Geral
                        </p>
                        <span className="text-sm font-bold text-primary">
                          {studentInfo.progress}%
                        </span>
                      </div>
                      <Progress value={studentInfo.progress} className="h-2" />
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="text-center p-2 bg-secondary/50 rounded-lg">
                        <p className="text-lg font-bold text-primary">
                          {studentInfo.completedModules}
                        </p>
                        <p className="text-xs text-muted-foreground">Módulos</p>
                      </div>
                      <div className="text-center p-2 bg-secondary/50 rounded-lg">
                        <p className="text-lg font-bold text-primary">
                          {studentInfo.studyHours}h
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Estudadas
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Menu */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Menu de Navegação</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <TabButton
                  id="cursos"
                  label="Meus Cursos"
                  icon={<BookOpen className="h-4 w-4 mr-2" />}
                />
                <TabButton
                  id="videoaulas"
                  label="Videoaulas"
                  icon={<Video className="h-4 w-4 mr-2" />}
                />
                <TabButton
                  id="calendario"
                  label="Calendário"
                  icon={<Calendar className="h-4 w-4 mr-2" />}
                />
                <TabButton
                  id="materiais"
                  label="Materiais"
                  icon={<FileText className="h-4 w-4 mr-2" />}
                />
                <TabButton
                  id="certificados"
                  label="Certificados"
                  icon={<Award className="h-4 w-4 mr-2" />}
                />
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === "cursos" && (
              <div className="space-y-6">
                {/* Header com estatísticas rápidas */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <h2 className="text-3xl font-bold">Meus Cursos</h2>
                  <div className="flex gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">
                        {courses.length}
                      </p>
                      <p className="text-sm text-muted-foreground">Cursos</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600">1</p>
                      <p className="text-sm text-muted-foreground">Concluído</p>
                    </div>
                  </div>
                </div>

                {/* Course Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {courses.map((course, index) => (
                    <Card
                      key={index}
                      className="border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">
                            {course.title}
                          </CardTitle>
                          <Badge
                            variant={
                              course.status === "Concluído"
                                ? "default"
                                : "secondary"
                            }
                            className={
                              course.status === "Concluído"
                                ? "bg-green-600"
                                : ""
                            }
                          >
                            {course.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          {course.instructor}
                        </p>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between text-sm mb-2">
                              <span className="font-medium">
                                Progresso do Curso
                              </span>
                              <span className="font-bold">
                                {course.completedLessons}/{course.totalLessons}{" "}
                                aulas
                              </span>
                            </div>
                            <Progress value={course.progress} className="h-2" />
                            <p className="text-xs text-muted-foreground mt-1 flex items-center gap-2">
                              <Clock className="h-3 w-3" />
                              {course.duration}
                            </p>
                          </div>

                          <div className="p-3 bg-secondary/30 rounded-lg">
                            <p className="text-sm font-medium text-muted-foreground">
                              {course.status === "Concluído"
                                ? "Curso finalizado"
                                : "Próxima aula:"}
                            </p>
                            <p className="font-semibold">{course.nextLesson}</p>
                          </div>

                          <Button className="w-full" size="lg">
                            {course.status === "Concluído" ? (
                              <>
                                <Award className="mr-2 h-4 w-4" />
                                Revisar Curso
                              </>
                            ) : (
                              <>
                                <Play className="mr-2 h-4 w-4" />
                                Continuar Estudos
                              </>
                            )}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Recent Activities */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5" />
                      Atividades Recentes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivities.map((activity, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-4 p-3 hover:bg-secondary/30 rounded-lg transition-colors"
                        >
                          <div className="p-2 bg-white rounded-lg shadow-sm">
                            {activity.icon}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">{activity.title}</p>
                            <p className="text-sm text-muted-foreground flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {activity.date}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "videoaulas" && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <h2 className="text-3xl font-bold">Videoaulas</h2>
                  <div className="flex gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">
                        {videoLessons.length}
                      </p>
                      <p className="text-sm text-muted-foreground">Vídeos</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600">
                        {videoLessons.filter((v) => v.completed).length}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Assistidos
                      </p>
                    </div>
                  </div>
                </div>

                {/* Next Video to Watch */}
                {videoLessons.find((v) => v.isNext) && (
                  <Card className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-blue-50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-primary">
                        <PlayCircle className="h-6 w-6" />
                        Próxima Aula Recomendada
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {(() => {
                        const nextVideo = videoLessons.find((v) => v.isNext)!;
                        return (
                          <div className="flex flex-col md:flex-row gap-6">
                            <div className="md:w-48 h-32 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg flex items-center justify-center">
                              <Play className="h-12 w-12 text-white" />
                            </div>
                            <div className="flex-1 space-y-3">
                              <div>
                                <Badge variant="secondary" className="mb-2">
                                  {nextVideo.module}
                                </Badge>
                                <h3 className="text-xl font-semibold">
                                  {nextVideo.title}
                                </h3>
                                <p className="text-muted-foreground flex items-center gap-4">
                                  <span className="flex items-center gap-1">
                                    <Clock className="h-4 w-4" />
                                    {nextVideo.duration}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <User className="h-4 w-4" />
                                    {nextVideo.instructor}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Users className="h-4 w-4" />
                                    {nextVideo.views} visualizações
                                  </span>
                                </p>
                              </div>
                              <Button size="lg" className="w-full md:w-auto">
                                <Play className="mr-2 h-5 w-5" />
                                Assistir Agora
                              </Button>
                            </div>
                          </div>
                        );
                      })()}
                    </CardContent>
                  </Card>
                )}

                {/* Video List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {videoLessons.map((video) => (
                    <Card
                      key={video.id}
                      className="border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <CardContent className="p-0">
                        <div className="relative">
                          {/* Video Thumbnail */}
                          <div className="aspect-video bg-gradient-to-br from-gray-300 to-gray-500 rounded-t-lg flex items-center justify-center relative overflow-hidden">
                            <Play className="h-12 w-12 text-white z-10" />
                            {video.completed && (
                              <div className="absolute top-2 right-2 bg-green-600 text-white rounded-full p-1">
                                <CheckCircle className="h-4 w-4" />
                              </div>
                            )}
                            {video.isNext && (
                              <Badge className="absolute top-2 left-2 bg-primary">
                                Próxima
                              </Badge>
                            )}
                            <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                              {video.duration}
                            </div>
                          </div>

                          {/* Progress Bar for partially watched videos */}
                          {video.progress > 0 && video.progress < 100 && (
                            <div className="absolute bottom-0 left-0 w-full">
                              <Progress
                                value={video.progress}
                                className="h-1 rounded-none"
                              />
                            </div>
                          )}
                        </div>

                        <div className="p-4 space-y-3">
                          <div>
                            <Badge variant="outline" className="text-xs mb-2">
                              {video.module}
                            </Badge>
                            <h3 className="font-semibold line-clamp-2">
                              {video.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {video.instructor}
                            </p>
                          </div>

                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Users className="h-3 w-3" />
                              {video.views}
                            </span>
                            {video.completed ? (
                              <Badge
                                variant="secondary"
                                className="bg-green-100 text-green-700"
                              >
                                Concluído
                              </Badge>
                            ) : video.progress > 0 ? (
                              <Badge
                                variant="secondary"
                                className="bg-yellow-100 text-yellow-700"
                              >
                                {video.progress}% assistido
                              </Badge>
                            ) : (
                              <Badge variant="outline">Não assistido</Badge>
                            )}
                          </div>

                          <Button
                            className="w-full"
                            variant={video.completed ? "outline" : "default"}
                          >
                            {video.completed ? (
                              <>
                                <CheckCircle className="mr-2 h-4 w-4" />
                                Assistir Novamente
                              </>
                            ) : video.progress > 0 ? (
                              <>
                                <Play className="mr-2 h-4 w-4" />
                                Continuar
                              </>
                            ) : (
                              <>
                                <Play className="mr-2 h-4 w-4" />
                                Assistir
                              </>
                            )}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "calendario" && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Calendário Acadêmico</h2>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      Próximos Eventos
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingEvents.map((event, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-center gap-4">
                            <div
                              className={`p-3 rounded-lg ${
                                event.type === "presencial"
                                  ? "bg-blue-100 text-blue-600"
                                  : event.type === "online"
                                  ? "bg-green-100 text-green-600"
                                  : "bg-orange-100 text-orange-600"
                              }`}
                            >
                              {event.type === "presencial" ? (
                                <Users className="h-5 w-5" />
                              ) : event.type === "online" ? (
                                <Video className="h-5 w-5" />
                              ) : (
                                <FileText className="h-5 w-5" />
                              )}
                            </div>
                            <div>
                              <h4 className="font-semibold">{event.title}</h4>
                              <p className="text-sm text-muted-foreground flex items-center gap-2">
                                <span>{event.location}</span>
                                <Badge variant="outline" className="text-xs">
                                  {event.type === "presencial"
                                    ? "Presencial"
                                    : event.type === "online"
                                    ? "Online"
                                    : "Prova"}
                                </Badge>
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold">{event.date}</p>
                            <p className="text-sm text-muted-foreground">
                              {event.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "materiais" && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <h2 className="text-3xl font-bold">Materiais de Estudo</h2>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">
                      {studyMaterials.length}
                    </p>
                    <p className="text-sm text-muted-foreground">Materiais</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {studyMaterials.map((material, index) => (
                    <Card
                      key={index}
                      className="cursor-pointer hover:shadow-lg transition-all duration-300 border-0 shadow-md"
                    >
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div className="flex items-start justify-between">
                            <div
                              className={`p-3 rounded-lg ${
                                material.category === "manual"
                                  ? "bg-blue-100 text-blue-600"
                                  : material.category === "atlas"
                                  ? "bg-green-100 text-green-600"
                                  : material.category === "video"
                                  ? "bg-purple-100 text-purple-600"
                                  : material.category === "quiz"
                                  ? "bg-orange-100 text-orange-600"
                                  : material.category === "case"
                                  ? "bg-red-100 text-red-600"
                                  : "bg-gray-100 text-gray-600"
                              }`}
                            >
                              {material.category === "video" ? (
                                <Video className="h-6 w-6" />
                              ) : material.category === "quiz" ? (
                                <CheckCircle className="h-6 w-6" />
                              ) : (
                                <FileText className="h-6 w-6" />
                              )}
                            </div>
                            <Download className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2">
                              {material.title}
                            </h4>
                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Badge variant="outline" className="text-xs">
                                  {material.type}
                                </Badge>
                                {material.size}
                              </span>
                            </div>
                            <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
                              <Download className="h-3 w-3" />
                              {material.downloads} downloads
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "certificados" && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Certificados</h2>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5" />
                      Meus Certificados
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {/* Certificado Disponível */}
                      <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 border-2 border-green-200 bg-green-50 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="p-4 bg-green-600 rounded-lg">
                            <Award className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold text-green-800">
                              Cirurgia Guiada
                            </h4>
                            <p className="text-green-600 flex items-center gap-2 mt-1">
                              <CheckCircle className="h-4 w-4" />
                              Concluído em 10/03/2024
                            </p>
                            <p className="text-sm text-green-600 mt-1">
                              Carga horária: 40 horas • Nota final: 9.2
                            </p>
                          </div>
                        </div>
                        <div className="mt-4 md:mt-0 space-y-2">
                          <Button className="w-full md:w-auto bg-green-600 hover:bg-green-700">
                            <Download className="h-4 w-4 mr-2" />
                            Download PDF
                          </Button>
                          <Button
                            variant="outline"
                            className="w-full md:w-auto"
                          >
                            <FileText className="h-4 w-4 mr-2" />
                            Visualizar
                          </Button>
                        </div>
                      </div>

                      {/* Certificado em Progresso */}
                      <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 border-2 border-blue-200 bg-blue-50 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="p-4 bg-blue-600 rounded-lg">
                            <Award className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold text-blue-800">
                              Implantodontia Avançada
                            </h4>
                            <div className="mt-2 space-y-2">
                              <Progress
                                value={studentInfo.progress}
                                className="w-48 h-2"
                              />
                              <p className="text-blue-600 text-sm">
                                {studentInfo.progress}% concluído •{" "}
                                {studentInfo.completedModules}/
                                {studentInfo.totalModules} módulos
                              </p>
                            </div>
                            <p className="text-sm text-blue-600 mt-1">
                              Previsão de conclusão: Maio 2024
                            </p>
                          </div>
                        </div>
                        <Badge
                          variant="secondary"
                          className="mt-4 md:mt-0 bg-blue-100 text-blue-700"
                        >
                          Em Progresso
                        </Badge>
                      </div>

                      {/* Informações sobre Certificação */}
                      <Card className="bg-secondary/30">
                        <CardHeader>
                          <CardTitle className="text-lg">
                            ℹ️ Sobre os Certificados
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <h5 className="font-semibold mb-2">
                                ✅ Certificados válidos
                              </h5>
                              <ul className="space-y-1 text-muted-foreground">
                                <li>• Reconhecidos pelo CFO</li>
                                <li>• Pontuação para recertificação</li>
                                <li>• Código de verificação único</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-semibold mb-2">
                                📋 Requisitos
                              </h5>
                              <ul className="space-y-1 text-muted-foreground">
                                <li>• 75% de aproveitamento mínimo</li>
                                <li>• Conclusão de todos os módulos</li>
                                <li>• Participação nas aulas práticas</li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
