import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  CheckCircle,
  Users,
  Calendar,
  BarChart3,
  Zap,
  Shield,
  Globe,
  ArrowRight,
  Star,
  Menu,
  Play,
  Sparkles,
  TrendingUp,
  Clock,
  MessageSquare,
  Award,
  Rocket,
  X,
  Plus,
  MoreHorizontal,
  Filter,
  Search,
  Bell,
  Settings,
  Target,
  Briefcase,
  Activity,
  GitBranch,
  FileText,
  PieChart,
  AlertCircle,
  CheckSquare,
  Circle,
  ArrowUp,
  ArrowDown,
  ChevronRight,
  CalendarDays,
  Layers,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [dashboardView, setDashboardView] = useState("overview");
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    // Trigger entrance animations
    setTimeout(() => setIsVisible(true), 100);

    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timer);
    };
  }, []);

  const dashboardViews = [
    { id: "overview", label: "Vista General", icon: BarChart3 },
    { id: "kanban", label: "Kanban", icon: Layers },
    { id: "calendar", label: "Calendario", icon: CalendarDays },
    { id: "analytics", label: "Analytics", icon: PieChart },
  ];

  const teamMembers = [
    {
      name: "María García",
      role: "Project Manager",
      avatar: "MG",
      status: "online",
      color: "bg-emerald-500",
    },
    {
      name: "Carlos Ruiz",
      role: "Developer",
      avatar: "CR",
      status: "away",
      color: "bg-blue-500",
    },
    {
      name: "Ana López",
      role: "Designer",
      avatar: "AL",
      status: "online",
      color: "bg-purple-500",
    },
    {
      name: "Juan Pérez",
      role: "QA Engineer",
      avatar: "JP",
      status: "offline",
      color: "bg-orange-500",
    },
  ];

  const projectStats = [
    {
      label: "Tareas Completadas",
      value: 156,
      change: "+12%",
      trend: "up",
      icon: CheckSquare,
      color: "text-emerald-600",
    },
    {
      label: "Proyectos Activos",
      value: 23,
      change: "+3",
      trend: "up",
      icon: Briefcase,
      color: "text-blue-600",
    },
    {
      label: "Miembros del Equipo",
      value: 47,
      change: "+5",
      trend: "up",
      icon: Users,
      color: "text-purple-600",
    },
    {
      label: "Tiempo Promedio",
      value: "4.2h",
      change: "-0.3h",
      trend: "up",
      icon: Clock,
      color: "text-orange-600",
    },
  ];

  const recentTasks = [
    {
      id: 1,
      title: "Revisar diseños de la nueva feature",
      status: "completed",
      priority: "high",
      assignee: "MG",
      progress: 100,
    },
    {
      id: 2,
      title: "Implementar autenticación OAuth",
      status: "in-progress",
      priority: "high",
      assignee: "CR",
      progress: 75,
    },
    {
      id: 3,
      title: "Crear wireframes para dashboard",
      status: "in-progress",
      priority: "medium",
      assignee: "AL",
      progress: 45,
    },
    {
      id: 4,
      title: "Configurar pipeline de CI/CD",
      status: "pending",
      priority: "low",
      assignee: "JP",
      progress: 0,
    },
    {
      id: 5,
      title: "Actualizar documentación API",
      status: "pending",
      priority: "medium",
      assignee: "CR",
      progress: 0,
    },
  ];

  const projects = [
    {
      name: "E-commerce Platform",
      progress: 85,
      deadline: "15 Mar",
      status: "on-track",
      color: "bg-emerald-500",
    },
    {
      name: "Mobile App Redesign",
      progress: 62,
      deadline: "22 Mar",
      status: "at-risk",
      color: "bg-yellow-500",
    },
    {
      name: "Analytics Dashboard",
      progress: 94,
      deadline: "8 Mar",
      status: "ahead",
      color: "bg-blue-500",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-emerald-100 text-emerald-700 border-emerald-200";
      case "in-progress":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "pending":
        return "bg-gray-100 text-gray-700 border-gray-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-700";
      case "medium":
        return "bg-yellow-100 text-yellow-700";
      case "low":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-x-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        />
        <div
          className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-primary-200/20 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        />
      </div>

      {/* Navigation */}
      <nav className="border-b bg-white/90 backdrop-blur-xl sticky top-0 z-50 transition-all duration-300 hover:bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div
                className={`flex-shrink-0 flex items-center transform transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
              >
                <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:rotate-3">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <span className="ml-3 text-xl font-bold text-gray-900 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  TaskFlow
                </span>
              </div>
              <div className="hidden md:ml-8 md:flex md:space-x-1">
                {["Características", "Precios", "Acerca de"].map(
                  (item, index) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className={`text-gray-600 hover:text-gray-900 px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-gray-50 rounded-lg relative group transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                      style={{ transitionDelay: `${100 + index * 100}ms` }}
                    >
                      {item}
                      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </a>
                  ),
                )}
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="ghost"
                className={`text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-300 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                style={{ transitionDelay: "400ms" }}
              >
                Iniciar Sesión
              </Button>
              <Button
                className={`bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                style={{ transitionDelay: "500ms" }}
              >
                <Sparkles className="mr-2 h-4 w-4" />
                Comenzar Gratis
              </Button>
            </div>
            <div className="md:hidden flex items-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="hover:bg-gray-50 transition-colors duration-300"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-white/95 backdrop-blur-xl animate-in slide-in-from-top-2 duration-300">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["Características", "Precios", "Acerca de"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="flex flex-col space-y-2 px-3 pt-4">
                <Button
                  variant="ghost"
                  className="justify-start hover:bg-gray-50"
                >
                  Iniciar Sesión
                </Button>
                <Button className="justify-start bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Comenzar Gratis
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge
              className={`mb-6 bg-gradient-to-r from-primary-50 to-blue-50 text-primary-700 border-primary-200 hover:bg-gradient-to-r hover:from-primary-100 hover:to-blue-100 transition-all duration-500 transform hover:scale-105 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{ transitionDelay: "200ms" }}
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Dashboard Interactivo Avanzado
            </Badge>

            <h1
              className={`text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
              style={{ transitionDelay: "300ms" }}
            >
              Gestiona proyectos con tu equipo{" "}
              <span className="bg-gradient-to-r from-primary-500 via-primary-600 to-blue-600 bg-clip-text text-transparent animate-gradient bg-300% relative">
                de forma inteligente
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/20 via-primary-600/20 to-blue-600/20 blur-lg opacity-30 animate-pulse" />
              </span>
            </h1>

            <p
              className={`text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{ transitionDelay: "400ms" }}
            >
              Explora nuestro dashboard completamente interactivo con vistas
              múltiples, análisis en tiempo real y colaboración avanzada
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{ transitionDelay: "500ms" }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 group"
              >
                <Rocket className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                Comenzar gratis
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg border-gray-300 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 transition-all duration-300 group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Explorar dashboard
              </Button>
            </div>
          </div>
        </div>

        {/* Advanced Interactive Dashboard Preview */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 mt-16">
          <div
            className={`relative transform transition-all duration-1200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}`}
            style={{ transitionDelay: "700ms" }}
          >
            {/* Advanced Dashboard Container */}
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden hover:shadow-3xl transition-all duration-500">
              {/* Dashboard Header */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full hover:bg-red-500 transition-colors duration-300 cursor-pointer"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full hover:bg-yellow-500 transition-colors duration-300 cursor-pointer"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full hover:bg-green-500 transition-colors duration-300 cursor-pointer"></div>
                    </div>
                    <div className="text-lg font-semibold text-gray-700">
                      TaskFlow Dashboard
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="text-sm text-gray-500">
                      {currentTime.toLocaleTimeString()}
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-600 font-medium">
                        En línea
                      </span>
                    </div>
                    <Button size="sm" variant="ghost" className="p-2">
                      <Bell className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="p-2">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Dashboard Navigation Tabs */}
                <div className="flex items-center space-x-1 mt-4">
                  {dashboardViews.map((view) => (
                    <Button
                      key={view.id}
                      size="sm"
                      variant={dashboardView === view.id ? "default" : "ghost"}
                      onClick={() => setDashboardView(view.id)}
                      className={`transition-all duration-300 ${
                        dashboardView === view.id
                          ? "bg-primary-500 text-white shadow-lg"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      <view.icon className="h-4 w-4 mr-2" />
                      {view.label}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 bg-gradient-to-br from-primary-50/30 via-white to-blue-50/30 min-h-[600px]">
                {dashboardView === "overview" && (
                  <div className="space-y-6 animate-in slide-in-from-right-4 duration-500">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {projectStats.map((stat, index) => (
                        <Card
                          key={index}
                          className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
                        >
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between mb-2">
                              <stat.icon className={`h-5 w-5 ${stat.color}`} />
                              <Badge
                                className={`text-xs ${stat.trend === "up" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                              >
                                {stat.change}
                              </Badge>
                            </div>
                            <div className="text-2xl font-bold text-gray-900 mb-1">
                              {stat.value}
                            </div>
                            <p className="text-sm text-gray-600">
                              {stat.label}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {/* Recent Tasks */}
                      <div className="lg:col-span-2">
                        <Card className="border-0 shadow-lg">
                          <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle className="text-lg">
                              Tareas Recientes
                            </CardTitle>
                            <div className="flex items-center space-x-2">
                              <Button size="sm" variant="ghost">
                                <Filter className="h-4 w-4 mr-2" />
                                Filtrar
                              </Button>
                              <Button
                                size="sm"
                                className="bg-primary-500 hover:bg-primary-600"
                              >
                                <Plus className="h-4 w-4 mr-2" />
                                Nueva
                              </Button>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              {recentTasks.map((task) => (
                                <div
                                  key={task.id}
                                  className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                                >
                                  <div className="flex-shrink-0">
                                    {task.status === "completed" ? (
                                      <CheckCircle className="h-5 w-5 text-green-500" />
                                    ) : task.status === "in-progress" ? (
                                      <Circle className="h-5 w-5 text-blue-500" />
                                    ) : (
                                      <Circle className="h-5 w-5 text-gray-400" />
                                    )}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between mb-1">
                                      <p className="text-sm font-medium text-gray-900 truncate">
                                        {task.title}
                                      </p>
                                      <Badge
                                        className={`text-xs ${getPriorityColor(task.priority)}`}
                                      >
                                        {task.priority}
                                      </Badge>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                      <div className="flex items-center space-x-2">
                                        <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                                          {task.assignee}
                                        </div>
                                        <span className="text-xs text-gray-500">
                                          Asignado
                                        </span>
                                      </div>
                                      <div className="flex-1">
                                        <Progress
                                          value={task.progress}
                                          className="h-2"
                                        />
                                      </div>
                                      <span className="text-xs text-gray-500">
                                        {task.progress}%
                                      </span>
                                    </div>
                                  </div>
                                  <Button
                                    size="sm"
                                    variant="ghost"
                                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                                  >
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Team & Projects Sidebar */}
                      <div className="space-y-6">
                        {/* Team Members */}
                        <Card className="border-0 shadow-lg">
                          <CardHeader>
                            <CardTitle className="text-lg">Equipo</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              {teamMembers.map((member, index) => (
                                <div
                                  key={index}
                                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                  <div className="relative">
                                    <div
                                      className={`w-8 h-8 ${member.color} rounded-full flex items-center justify-center text-white text-xs font-bold`}
                                    >
                                      {member.avatar}
                                    </div>
                                    <div
                                      className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                                        member.status === "online"
                                          ? "bg-green-400"
                                          : member.status === "away"
                                            ? "bg-yellow-400"
                                            : "bg-gray-400"
                                      }`}
                                    />
                                  </div>
                                  <div className="flex-1">
                                    <p className="text-sm font-medium text-gray-900">
                                      {member.name}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                      {member.role}
                                    </p>
                                  </div>
                                  <Button
                                    size="sm"
                                    variant="ghost"
                                    className="p-1"
                                  >
                                    <MessageSquare className="h-4 w-4" />
                                  </Button>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>

                        {/* Active Projects */}
                        <Card className="border-0 shadow-lg">
                          <CardHeader>
                            <CardTitle className="text-lg">
                              Proyectos Activos
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4">
                              {projects.map((project, index) => (
                                <div key={index} className="space-y-2">
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                      <div
                                        className={`w-3 h-3 ${project.color} rounded-full`}
                                      />
                                      <span className="text-sm font-medium text-gray-900">
                                        {project.name}
                                      </span>
                                    </div>
                                    <span className="text-xs text-gray-500">
                                      {project.deadline}
                                    </span>
                                  </div>
                                  <Progress
                                    value={project.progress}
                                    className="h-2"
                                  />
                                  <div className="flex items-center justify-between">
                                    <span className="text-xs text-gray-500">
                                      {project.progress}% completado
                                    </span>
                                    <Badge
                                      className={`text-xs ${
                                        project.status === "on-track"
                                          ? "bg-green-100 text-green-700"
                                          : project.status === "at-risk"
                                            ? "bg-yellow-100 text-yellow-700"
                                            : "bg-blue-100 text-blue-700"
                                      }`}
                                    >
                                      {project.status}
                                    </Badge>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                )}

                {dashboardView === "kanban" && (
                  <div className="animate-in slide-in-from-right-4 duration-500">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-96">
                      {["Por Hacer", "En Progreso", "Completado"].map(
                        (column, index) => (
                          <Card key={index} className="border-0 shadow-lg">
                            <CardHeader className="pb-3">
                              <CardTitle className="text-lg flex items-center justify-between">
                                {column}
                                <Badge className="bg-primary-100 text-primary-700">
                                  {index === 0 ? 5 : index === 1 ? 3 : 8}
                                </Badge>
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                              {Array.from({
                                length: index === 0 ? 3 : index === 1 ? 2 : 4,
                              }).map((_, taskIndex) => (
                                <Card
                                  key={taskIndex}
                                  className="p-3 hover:shadow-md transition-shadow cursor-pointer"
                                >
                                  <p className="text-sm font-medium mb-2">
                                    Tarea de ejemplo {taskIndex + 1}
                                  </p>
                                  <div className="flex items-center justify-between">
                                    <div className="w-6 h-6 bg-primary-500 rounded-full" />
                                    <Badge className="text-xs">Alta</Badge>
                                  </div>
                                </Card>
                              ))}
                            </CardContent>
                          </Card>
                        ),
                      )}
                    </div>
                  </div>
                )}

                {dashboardView === "calendar" && (
                  <div className="animate-in slide-in-from-right-4 duration-500">
                    <Card className="border-0 shadow-lg h-96">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <Calendar className="h-5 w-5" />
                            Marzo 2024
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button size="sm" variant="ghost">
                              Anterior
                            </Button>
                            <Button size="sm" variant="ghost">
                              Siguiente
                            </Button>
                          </div>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-7 gap-2 mb-4">
                          {[
                            "Dom",
                            "Lun",
                            "Mar",
                            "Mié",
                            "Jue",
                            "Vie",
                            "Sáb",
                          ].map((day) => (
                            <div
                              key={day}
                              className="text-center text-sm font-medium text-gray-500 py-2"
                            >
                              {day}
                            </div>
                          ))}
                        </div>
                        <div className="grid grid-cols-7 gap-2">
                          {Array.from({ length: 35 }).map((_, index) => (
                            <div
                              key={index}
                              className={`aspect-square flex items-center justify-center text-sm rounded-lg hover:bg-primary-50 cursor-pointer transition-colors ${
                                index === 15
                                  ? "bg-primary-500 text-white"
                                  : index % 7 === 0 || index % 7 === 6
                                    ? "text-gray-400"
                                    : "text-gray-700"
                              }`}
                            >
                              {index < 31 ? index + 1 : ""}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}

                {dashboardView === "analytics" && (
                  <div className="animate-in slide-in-from-right-4 duration-500">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <Card className="border-0 shadow-lg">
                        <CardHeader>
                          <CardTitle className="text-lg">
                            Productividad del Equipo
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="h-64 flex items-center justify-center bg-gradient-to-br from-primary-50 to-blue-50 rounded-lg">
                            <div className="text-center">
                              <BarChart3 className="h-16 w-16 text-primary-500 mx-auto mb-4" />
                              <p className="text-gray-600">
                                Gráfico de productividad
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-0 shadow-lg">
                        <CardHeader>
                          <CardTitle className="text-lg">
                            Distribución de Tareas
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="h-64 flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
                            <div className="text-center">
                              <PieChart className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
                              <p className="text-gray-600">Gráfico circular</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="características" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Dashboard con funcionalidades avanzadas
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
              Experimenta todas las herramientas que necesitas en un solo lugar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Colaboración en Tiempo Real",
                description:
                  "Ve a tu equipo trabajar en vivo, comenta, asigna tareas y recibe actualizaciones instantáneas.",
                color: "primary",
                delay: "100ms",
              },
              {
                icon: BarChart3,
                title: "Analytics Avanzados",
                description:
                  "Métricas detalladas, gráficos interactivos y reportes automáticos de productividad.",
                color: "green",
                delay: "200ms",
              },
              {
                icon: Layers,
                title: "Vista Kanban Interactiva",
                description:
                  "Arrastra y suelta tareas, personaliza flujos de trabajo y visualiza el progreso.",
                color: "blue",
                delay: "300ms",
              },
              {
                icon: CalendarDays,
                title: "Calendario Inteligente",
                description:
                  "Planifica reuniones, establece deadlines y sincroniza con calendarios externos.",
                color: "yellow",
                delay: "400ms",
              },
              {
                icon: Target,
                title: "Seguimiento de Objetivos",
                description:
                  "Define metas, mide el progreso y celebra los logros del equipo en tiempo real.",
                color: "purple",
                delay: "500ms",
              },
              {
                icon: Activity,
                title: "Dashboard Personalizable",
                description:
                  "Adapta la vista a tus necesidades con widgets personalizables y múltiples layouts.",
                color: "red",
                delay: "600ms",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group opacity-0 animate-in slide-in-from-bottom-4`}
                style={{
                  animationDelay: feature.delay,
                  animationDuration: "800ms",
                  animationFillMode: "forwards",
                }}
              >
                <CardHeader className="relative">
                  <div
                    className={`w-14 h-14 bg-${feature.color}-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon
                      className={`h-7 w-7 text-${feature.color}-600`}
                    />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary-600 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </CardDescription>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-blue-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 via-primary-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            ¿Listo para el dashboard más avanzado?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Empieza tu prueba gratuita y experimenta la gestión de proyectos del
            futuro
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100 hover:text-primary-700 px-8 py-4 text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 group"
            >
              <Rocket className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              Probar Dashboard Gratis
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center shadow-lg">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <span className="ml-3 text-2xl font-bold">TaskFlow</span>
            </div>
            <p className="text-gray-400 mb-6 text-lg">
              El dashboard más avanzado para gestión de proyectos colaborativos
            </p>
            <p className="text-gray-400">
              &copy; 2024 TaskFlow. Hecho con ❤️ para equipos extraordinarios.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
