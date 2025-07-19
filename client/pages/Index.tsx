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
  Building2,
  Laptop,
  Coffee,
  Headphones,
  Database,
  Mail,
  Phone,
  DollarSign,
  TrendingDown,
  Link2,
  Cloud,
  Smartphone,
  ChevronLeft,
  MousePointer,
  Workflow,
  Network,
  Palette,
  Code,
  Boxes,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [dashboardView, setDashboardView] = useState("overview");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [crmCarouselIndex, setCrmCarouselIndex] = useState(0);
  const [toolsCarouselIndex, setToolsCarouselIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    // Trigger entrance animations
    setTimeout(() => setIsVisible(true), 100);

    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // CRM Carousel auto-play
    const crmCarousel = setInterval(() => {
      setCrmCarouselIndex((prevIndex) => (prevIndex + 1) % 6);
    }, 3000);

    // Tools Carousel auto-play
    const toolsCarousel = setInterval(() => {
      setToolsCarouselIndex((prevIndex) => (prevIndex + 1) % 5);
    }, 3500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timer);
      clearInterval(crmCarousel);
      clearInterval(toolsCarousel);
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
      color: "text-indigo-600",
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
      color: "bg-indigo-500",
    },
  ];

  const teamTypes = [
    {
      title: "Startups",
      description:
        "Acelera el crecimiento de tu startup con herramientas ágiles diseñadas para equipos que se mueven rápido y necesitan flexibilidad total.",
      icon: Rocket,
      color: "bg-gradient-to-r from-pink-500 to-rose-500",
      features: ["MVP rápido", "Escalabilidad", "Costos controlados"],
    },
    {
      title: "Agencias",
      description:
        "Gestiona múltiples clientes y proyectos simultáneamente con vistas personalizadas, reportes automáticos y facturación integrada.",
      icon: Building2,
      color: "bg-gradient-to-r from-indigo-500 to-purple-500",
      features: ["Multi-cliente", "Reportes detallados", "Facturación"],
    },
    {
      title: "Equipos Remotos",
      description:
        "Mantén a tu equipo conectado sin importar la ubicación con colaboración en tiempo real y comunicación asíncrona.",
      icon: Laptop,
      color: "bg-gradient-to-r from-green-500 to-teal-500",
      features: ["Colaboración 24/7", "Zonas horarias", "Video integrado"],
    },
    {
      title: "Freelancers",
      description:
        "Organiza tus proyectos personales, gestiona clientes y optimiza tu tiempo con herramientas diseñadas para independientes.",
      icon: Coffee,
      color: "bg-gradient-to-r from-orange-500 to-yellow-500",
      features: ["Gestión personal", "Time tracking", "Portafolio"],
    },
  ];

  const crmIntegrations = [
    { name: "Salesforce", logo: "SF", color: "bg-blue-500" },
    { name: "HubSpot", logo: "HS", color: "bg-orange-500" },
    { name: "Pipedrive", logo: "PD", color: "bg-green-500" },
    { name: "Zoho CRM", logo: "ZO", color: "bg-red-500" },
    { name: "Microsoft Dynamics", logo: "MD", color: "bg-indigo-500" },
    { name: "Freshworks", logo: "FW", color: "bg-purple-500" },
  ];

  const productivityTools = [
    {
      name: "Google Calendar",
      logo: "GC",
      color: "bg-blue-600",
      icon: Calendar,
    },
    { name: "Zapier", logo: "ZP", color: "bg-orange-600", icon: Zap },
    { name: "Slack", logo: "SL", color: "bg-purple-600", icon: MessageSquare },
    { name: "Trello", logo: "TR", color: "bg-blue-500", icon: Layers },
    { name: "ClickUp", logo: "CU", color: "bg-pink-500", icon: MousePointer },
  ];

  const calendarEvents = [
    { time: "09:00", title: "Standup Meeting", color: "bg-indigo-500" },
    { time: "11:30", title: "Client Review", color: "bg-green-500" },
    { time: "14:00", title: "Design Sprint", color: "bg-purple-500" },
    { time: "16:30", title: "Team Sync", color: "bg-orange-500" },
  ];

  const analyticsData = [
    { label: "Tareas por día", value: 12, trend: "+8%" },
    { label: "Tiempo promedio", value: "3.2h", trend: "-15%" },
    { label: "Productividad", value: "94%", trend: "+12%" },
    { label: "Colaboración", value: "89%", trend: "+5%" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-emerald-100 text-emerald-700 border-emerald-200";
      case "in-progress":
        return "bg-indigo-100 text-indigo-700 border-indigo-200";
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 overflow-x-hidden">
      {/* Enhanced Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        />
        <div
          className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-indigo-200/30 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-green-200/20 to-teal-200/20 rounded-full blur-2xl animate-pulse"
          style={{
            transform: `translateY(${scrollY * 0.15}px)`,
            animationDelay: "2s",
          }}
        />
      </div>

      {/* Enhanced Navigation */}
      <nav className="border-b bg-white/95 backdrop-blur-xl sticky top-0 z-50 transition-all duration-300 hover:bg-white/98 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div
                className={`flex-shrink-0 flex items-center transform transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
              >
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 hover:rotate-6">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <span className="ml-3 text-4xl font-black text-gray-900 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent leading-10">
                  Taskly
                </span>
              </div>
              <div className="hidden md:ml-8 md:flex md:space-x-1">
                {["Características", "Precios", "Equipos", "Integraciones"].map(
                  (item, index) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className={`text-gray-600 hover:text-gray-900 px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-gray-50 rounded-lg relative group transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                      style={{ transitionDelay: `${100 + index * 100}ms` }}
                    >
                      {item}
                      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-indigo-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
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
                className={`bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
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
          <div className="md:hidden border-t bg-white/98 backdrop-blur-xl animate-in slide-in-from-top-2 duration-300">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["Características", "Precios", "Equipos", "Integraciones"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ),
              )}
              <div className="flex flex-col space-y-2 px-3 pt-4">
                <Button
                  variant="ghost"
                  className="justify-start hover:bg-gray-50"
                >
                  Iniciar Sesión
                </Button>
                <Button className="justify-start bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Comenzar Gratis
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge
              className={`mb-8 bg-gradient-to-r from-indigo-50 to-blue-50 text-indigo-700 border-indigo-200 hover:bg-gradient-to-r hover:from-indigo-100 hover:to-blue-100 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{ transitionDelay: "200ms" }}
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Espacio Colaborativo Avanzado
            </Badge>

            <h1
              className={`text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
              style={{ transitionDelay: "300ms" }}
            >
              El espacio colaborativo{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-indigo-600 to-blue-600 bg-clip-text text-transparent animate-gradient bg-300% relative">
                para equipos de cualquier tamaño.
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 via-indigo-600/20 to-blue-600/20 blur-lg opacity-30 animate-pulse" />
              </span>
            </h1>

            <p
              className={`text-xl md:text-2xl text-gray-600 mb-10 max-w-6xl mx-auto leading-relaxed text-center transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{ transitionDelay: "400ms", lineHeight: "32px" }}
            >
              Desde startups ágiles hasta agencias, equipos remotos y
              freelancers, <strong className="text-indigo-600">Taskly</strong>{" "}
              te proporciona el entorno perfecto para gestionar tareas,
              colaborar y optimizar tu flujo de trabajo. Adaptado a cada tipo de
              equipo, con herramientas poderosas, automatización y completa
              integración de CRM empresarial. Todo lo que necesitas, en un solo
              lugar.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{ transitionDelay: "500ms" }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white px-8 py-4 text-lg shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 group"
              >
                <Rocket className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                Comenzar gratis
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg border-gray-300 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-300 group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Explorar dashboard
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Professional Dashboard Preview */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 mt-16">
          <div
            className={`relative transform transition-all duration-1200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}`}
            style={{ transitionDelay: "700ms" }}
          >
            {/* Enhanced Dashboard Container */}
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden hover:shadow-3xl transition-all duration-500">
              {/* Enhanced Dashboard Header */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full hover:bg-red-500 transition-colors duration-300 cursor-pointer animate-pulse"></div>
                      <div
                        className="w-3 h-3 bg-yellow-400 rounded-full hover:bg-yellow-500 transition-colors duration-300 cursor-pointer animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                      <div
                        className="w-3 h-3 bg-green-400 rounded-full hover:bg-green-500 transition-colors duration-300 cursor-pointer animate-pulse"
                        style={{ animationDelay: "1s" }}
                      ></div>
                    </div>
                    <div className="text-lg font-semibold text-gray-700">
                      Taskly Professional Dashboard
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="text-sm text-gray-500 font-mono">
                      {currentTime.toLocaleTimeString()}
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-600 font-medium">
                        En línea • 47 usuarios
                      </span>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="p-2 hover:bg-gray-100"
                    >
                      <Bell className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="p-2 hover:bg-gray-100"
                    >
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Enhanced Dashboard Navigation */}
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-1">
                    {dashboardViews.map((view) => (
                      <Button
                        key={view.id}
                        size="sm"
                        variant={
                          dashboardView === view.id ? "default" : "ghost"
                        }
                        onClick={() => setDashboardView(view.id)}
                        className={`transition-all duration-300 ${
                          dashboardView === view.id
                            ? "bg-indigo-500 text-white shadow-lg transform scale-105"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        <view.icon className="h-4 w-4 mr-2" />
                        {view.label}
                      </Button>
                    ))}
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="ghost" className="text-xs">
                      <Search className="h-4 w-4 mr-1" />
                      Buscar
                    </Button>
                    <Button
                      size="sm"
                      className="bg-indigo-500 hover:bg-indigo-600 text-xs"
                    >
                      <Plus className="h-4 w-4 mr-1" />
                      Nuevo
                    </Button>
                  </div>
                </div>
              </div>

              {/* Enhanced Dashboard Content */}
              <div className="p-6 bg-gradient-to-br from-indigo-50/30 via-white to-blue-50/30 min-h-[700px]">
                {dashboardView === "overview" && (
                  <div className="space-y-6 animate-in slide-in-from-right-4 duration-500">
                    {/* Enhanced Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {projectStats.map((stat, index) => (
                        <Card
                          key={index}
                          className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group bg-white/90 backdrop-blur-sm"
                        >
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between mb-3">
                              <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-indigo-50 transition-colors duration-300">
                                <stat.icon
                                  className={`h-5 w-5 ${stat.color} group-hover:scale-110 transition-transform duration-300`}
                                />
                              </div>
                              <Badge
                                className={`text-xs ${stat.trend === "up" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"} animate-pulse`}
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

                    {/* Enhanced Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {/* Enhanced Recent Tasks */}
                      <div className="lg:col-span-2">
                        <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                          <CardHeader className="flex flex-row items-center justify-between pb-4">
                            <CardTitle className="text-lg font-semibold">
                              Tareas Recientes
                            </CardTitle>
                            <div className="flex items-center space-x-2">
                              <Button size="sm" variant="ghost">
                                <Filter className="h-4 w-4 mr-2" />
                                Filtrar
                              </Button>
                              <Button
                                size="sm"
                                className="bg-indigo-500 hover:bg-indigo-600"
                              >
                                <Plus className="h-4 w-4 mr-2" />
                                Nueva
                              </Button>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              {recentTasks.map((task, index) => (
                                <div
                                  key={task.id}
                                  className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-all duration-300 group border border-gray-100 hover:shadow-md transform hover:scale-[1.02]"
                                  style={{ animationDelay: `${index * 100}ms` }}
                                >
                                  <div className="flex-shrink-0">
                                    {task.status === "completed" ? (
                                      <CheckCircle className="h-5 w-5 text-green-500 animate-pulse" />
                                    ) : task.status === "in-progress" ? (
                                      <Circle
                                        className="h-5 w-5 text-indigo-500 animate-spin"
                                        style={{ animationDuration: "3s" }}
                                      />
                                    ) : (
                                      <Circle className="h-5 w-5 text-gray-400" />
                                    )}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between mb-2">
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
                                        <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xs font-semibold">
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
                                      <span className="text-xs text-gray-500 font-medium">
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

                      {/* Enhanced Team & Projects Sidebar */}
                      <div className="space-y-6">
                        {/* Enhanced Team Members */}
                        <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                          <CardHeader className="pb-4">
                            <CardTitle className="text-lg font-semibold">
                              Equipo Activo
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              {teamMembers.map((member, index) => (
                                <div
                                  key={index}
                                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-all duration-300 border border-gray-100 hover:shadow-md transform hover:scale-[1.02]"
                                  style={{ animationDelay: `${index * 150}ms` }}
                                >
                                  <div className="relative">
                                    <div
                                      className={`w-8 h-8 ${member.color} rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm animate-pulse`}
                                    >
                                      {member.avatar}
                                    </div>
                                    <div
                                      className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                                        member.status === "online"
                                          ? "bg-green-400 animate-pulse"
                                          : member.status === "away"
                                            ? "bg-yellow-400 animate-pulse"
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
                                    className="p-1 hover:bg-indigo-50"
                                  >
                                    <MessageSquare className="h-4 w-4" />
                                  </Button>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>

                        {/* Enhanced Active Projects */}
                        <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                          <CardHeader className="pb-4">
                            <CardTitle className="text-lg font-semibold">
                              Proyectos Activos
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4">
                              {projects.map((project, index) => (
                                <div
                                  key={index}
                                  className="space-y-3 p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:shadow-md transform hover:scale-[1.02]"
                                  style={{ animationDelay: `${index * 200}ms` }}
                                >
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                      <div
                                        className={`w-3 h-3 ${project.color} rounded-full animate-pulse`}
                                      />
                                      <span className="text-sm font-medium text-gray-900">
                                        {project.name}
                                      </span>
                                    </div>
                                    <span className="text-xs text-gray-500 font-medium">
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
                                            : "bg-indigo-100 text-indigo-700"
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

                {/* Enhanced Calendar View */}
                {dashboardView === "calendar" && (
                  <div className="animate-in slide-in-from-right-4 duration-500">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2">
                        <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm h-96">
                          <CardHeader>
                            <CardTitle className="text-lg flex items-center justify-between">
                              <div className="flex items-center space-x-4">
                                <Calendar className="h-5 w-5 text-indigo-600" />
                                Marzo 2024
                              </div>
                              <div className="flex items-center space-x-2">
                                <Button size="sm" variant="ghost">
                                  <ChevronLeft className="h-4 w-4" />
                                </Button>
                                <Button size="sm" variant="ghost">
                                  <ChevronRight className="h-4 w-4" />
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
                                  className={`aspect-square flex items-center justify-center text-sm rounded-lg transition-all duration-300 cursor-pointer ${
                                    index === 15
                                      ? "bg-indigo-500 text-white shadow-lg transform scale-110"
                                      : index % 7 === 0 || index % 7 === 6
                                        ? "text-gray-400 hover:bg-gray-100"
                                        : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"
                                  }`}
                                >
                                  {index < 31 ? index + 1 : ""}
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      <div>
                        <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                          <CardHeader>
                            <CardTitle className="text-lg">
                              Eventos Hoy
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              {calendarEvents.map((event, index) => (
                                <div
                                  key={index}
                                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-all duration-300"
                                  style={{ animationDelay: `${index * 100}ms` }}
                                >
                                  <div
                                    className={`w-3 h-3 ${event.color} rounded-full animate-pulse`}
                                  />
                                  <div className="flex-1">
                                    <p className="text-sm font-medium text-gray-900">
                                      {event.title}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                      {event.time}
                                    </p>
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

                {/* Enhanced Analytics View */}
                {dashboardView === "analytics" && (
                  <div className="animate-in slide-in-from-right-4 duration-500">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center">
                            <BarChart3 className="h-5 w-5 text-indigo-600 mr-2" />
                            Productividad del Equipo
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            {analyticsData.map((metric, index) => (
                              <div
                                key={index}
                                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                                style={{ animationDelay: `${index * 100}ms` }}
                              >
                                <div>
                                  <p className="text-sm text-gray-600">
                                    {metric.label}
                                  </p>
                                  <p className="text-lg font-semibold text-gray-900">
                                    {metric.value}
                                  </p>
                                </div>
                                <Badge className="bg-green-100 text-green-700">
                                  {metric.trend}
                                </Badge>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center">
                            <PieChart className="h-5 w-5 text-emerald-600 mr-2" />
                            Distribución de Tareas
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="h-64 flex items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg">
                            <div className="text-center">
                              <div className="grid grid-cols-2 gap-4 mb-4">
                                <div className="p-3 bg-white rounded-lg shadow-sm">
                                  <p className="text-sm text-gray-600">
                                    Completadas
                                  </p>
                                  <p className="text-xl font-bold text-emerald-600">
                                    67%
                                  </p>
                                </div>
                                <div className="p-3 bg-white rounded-lg shadow-sm">
                                  <p className="text-sm text-gray-600">
                                    En progreso
                                  </p>
                                  <p className="text-xl font-bold text-indigo-600">
                                    23%
                                  </p>
                                </div>
                                <div className="p-3 bg-white rounded-lg shadow-sm">
                                  <p className="text-sm text-gray-600">
                                    Pendientes
                                  </p>
                                  <p className="text-xl font-bold text-gray-600">
                                    10%
                                  </p>
                                </div>
                                <div className="p-3 bg-white rounded-lg shadow-sm">
                                  <p className="text-sm text-gray-600">
                                    Retrasadas
                                  </p>
                                  <p className="text-xl font-bold text-red-600">
                                    0%
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                )}

                {/* Enhanced Kanban View */}
                {dashboardView === "kanban" && (
                  <div className="animate-in slide-in-from-right-4 duration-500">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-96">
                      {["Por Hacer", "En Progreso", "Completado"].map(
                        (column, index) => (
                          <Card
                            key={index}
                            className="border-0 shadow-lg bg-white/90 backdrop-blur-sm"
                          >
                            <CardHeader className="pb-3">
                              <CardTitle className="text-lg flex items-center justify-between">
                                {column}
                                <Badge className="bg-indigo-100 text-indigo-700">
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
                                  className="p-3 hover:shadow-md transition-all duration-300 cursor-pointer border border-gray-100 hover:border-indigo-200 transform hover:scale-[1.02]"
                                  style={{
                                    animationDelay: `${taskIndex * 100}ms`,
                                  }}
                                >
                                  <p className="text-sm font-medium mb-2">
                                    Tarea de ejemplo {taskIndex + 1}
                                  </p>
                                  <div className="flex items-center justify-between">
                                    <div className="w-6 h-6 bg-indigo-500 rounded-full animate-pulse" />
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Types Section */}
      <section id="equipos" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
              Diseñado para todo tipo de equipo
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
              Taskly se adapta perfectamente a tu forma de trabajar,
              independientemente del tamaño o tipo de tu organización
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamTypes.map((team, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group overflow-hidden"
                style={{
                  animationDelay: `${index * 200}ms`,
                }}
              >
                <CardHeader className="relative pb-6">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-16 h-16 ${team.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <team.icon className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                        {team.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 leading-relaxed text-base">
                        {team.description}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-6">
                    {team.features.map((feature, featureIndex) => (
                      <Badge
                        key={featureIndex}
                        className="bg-gray-100 text-gray-700 justify-center py-2 text-xs hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CRM Integrations Section */}
      <section
        id="integraciones"
        className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Conecta con Taskly
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Integra tu CRM favorito y sincroniza clientes, oportunidades y
              datos de ventas en tiempo real
            </p>
          </div>

          {/* Animated CRM Carousel */}
          <div className="relative mb-12 overflow-hidden">
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{
                transform: `translateX(-${crmCarouselIndex * (100 / 6)}%)`,
              }}
            >
              {[...crmIntegrations, ...crmIntegrations].map(
                (integration, index) => (
                  <div key={index} className="w-1/6 flex-shrink-0 px-3">
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group text-center p-6">
                      <div
                        className={`w-12 h-12 ${integration.color} rounded-lg flex items-center justify-center text-white font-bold text-lg mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}
                      >
                        {integration.logo}
                      </div>
                      <p className="text-sm font-medium text-gray-700 group-hover:text-indigo-600 transition-colors duration-300">
                        {integration.name}
                      </p>
                    </Card>
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center p-6 hover:shadow-xl transition-shadow duration-300">
              <Database className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                Sincronización Bidireccional
              </h3>
              <p className="text-gray-600">
                Los datos se actualizan automáticamente entre Taskly y tu CRM
              </p>
            </Card>

            <Card className="border-0 shadow-lg text-center p-6 hover:shadow-xl transition-shadow duration-300">
              <Zap className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                Automatización Inteligente
              </h3>
              <p className="text-gray-600">
                Crea tareas automáticamente basadas en eventos del CRM
              </p>
            </Card>

            <Card className="border-0 shadow-lg text-center p-6 hover:shadow-xl transition-shadow duration-300">
              <BarChart3 className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                Reportes Unificados
              </h3>
              <p className="text-gray-600">
                Visualiza métricas de ventas y proyectos en un solo dashboard
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* New Productivity Tools Integration Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Herramientas de Productividad
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conecta con las herramientas que ya usas y potencia tu flujo de
              trabajo colaborativo
            </p>
          </div>

          {/* Animated Tools Carousel */}
          <div className="relative mb-12 overflow-hidden">
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{
                transform: `translateX(-${toolsCarouselIndex * (100 / 5)}%)`,
              }}
            >
              {[...productivityTools, ...productivityTools].map(
                (tool, index) => (
                  <div key={index} className="w-1/5 flex-shrink-0 px-3">
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group text-center p-8">
                      <div
                        className={`w-16 h-16 ${tool.color} rounded-xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <tool.icon className="h-8 w-8" />
                      </div>
                      <p className="text-base font-semibold text-gray-700 group-hover:text-indigo-600 transition-colors duration-300">
                        {tool.name}
                      </p>
                    </Card>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Collaborative Work Illustrations */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="border-0 shadow-lg text-center p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                <Workflow className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Flujos Automatizados
              </h3>
              <p className="text-gray-600 text-sm">
                Conecta procesos entre diferentes herramientas
              </p>
            </Card>

            <Card className="border-0 shadow-lg text-center p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                <Network className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Colaboración en Red
              </h3>
              <p className="text-gray-600 text-sm">
                Conecta equipos distribuidos globalmente
              </p>
            </Card>

            <Card className="border-0 shadow-lg text-center p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                <Palette className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Diseño Colaborativo
              </h3>
              <p className="text-gray-600 text-sm">
                Feedback en tiempo real en proyectos creativos
              </p>
            </Card>

            <Card className="border-0 shadow-lg text-center p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                <Code className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Desarrollo Ágil</h3>
              <p className="text-gray-600 text-sm">
                Integra repositorios y CI/CD pipelines
              </p>
            </Card>
          </div>

          <div className="text-center">
            <Button className="bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <Link2 className="mr-2 h-5 w-5" />
              Ver Todas las Integraciones
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="características"
        className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
              Funcionalidades avanzadas
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
              Todas las herramientas que necesitas en un solo lugar, optimizadas
              para la colaboración moderna
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Colaboración en Tiempo Real",
                description:
                  "Ve a tu equipo trabajar en vivo, comenta, asigna tareas y recibe actualizaciones instantáneas.",
                color: "indigo",
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
                  <CardTitle className="text-xl group-hover:text-indigo-600 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </CardDescription>
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-blue-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-500 via-indigo-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-3/4 left-1/2 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            ¿Listo para revolucionar tu forma de trabajar?
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Comienza con Taskly hoy. Crea tu espacio de trabajo ideal y conecta
            con tu equipo en segundos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-indigo-600 hover:bg-gray-100 hover:text-indigo-700 px-8 py-4 text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 group"
            >
              <Rocket className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              Comenzar gratis ahora
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 text-lg backdrop-blur-sm transition-all duration-300 group"
            >
              <MessageSquare className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              Hablar con ventas
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Professional Footer */}
      <footer className="bg-gray-900 text-white py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <span className="ml-3 text-2xl font-bold">Taskly</span>
              </div>
              <p className="text-gray-400 mb-6 text-lg leading-relaxed max-w-md">
                La plataforma de gestión colaborativa más avanzada para equipos
                modernos. Desde startups hasta empresas, Taskly se adapta a tu
                forma de trabajar.
              </p>
              <div className="flex space-x-4">
                {["LinkedIn", "Twitter", "GitHub"].map((social) => (
                  <Button
                    key={social}
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300"
                  >
                    {social}
                  </Button>
                ))}
              </div>
            </div>

            {/* Product */}
            <div>
              <h3 className="font-bold mb-4 text-lg">Producto</h3>
              <ul className="space-y-3">
                {[
                  "Características",
                  "Precios",
                  "Integraciones",
                  "API",
                  "Seguridad",
                  "Roadmap",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-bold mb-4 text-lg">Empresa</h3>
              <ul className="space-y-3">
                {[
                  "Acerca de",
                  "Blog",
                  "Carreras",
                  "Prensa",
                  "Socios",
                  "Contacto",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-bold mb-4 text-lg">Soporte</h3>
              <ul className="space-y-3">
                {[
                  "Centro de ayuda",
                  "Documentación",
                  "Tutoriales",
                  "Estado del servicio",
                  "Comunidad",
                  "Contactar soporte",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-indigo-400" />
                <span className="text-gray-400">contacto@taskly.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-indigo-400" />
                <span className="text-gray-400">+57 3044897957</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-indigo-400" />
                <span className="text-gray-400">Bucaramanga, Colombia</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                &copy; 2024 Taskly. Todos los derechos reservados.
              </p>
              <div className="flex items-center space-x-6 ml-auto">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Privacidad
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Términos
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
