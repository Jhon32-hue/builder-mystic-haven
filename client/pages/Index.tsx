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
  Video,
  Hash,
  AtSign,
  Send,
  Share2,
  Download,
  Upload,
  FolderOpen,
  Files,
  Timer,
  Gauge,
  Percent,
  Eye,
  Heart,
  Bookmark,
  Flag,
  Repeat,
  RotateCcw,
  Moon,
  Sun,
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
  const [calendarView, setCalendarView] = useState("month");
  const [selectedDate, setSelectedDate] = useState(15);
  const [darkMode, setDarkMode] = useState(false);

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

  const calendarViews = [
    { id: "month", label: "Mes" },
    { id: "week", label: "Semana" },
    { id: "day", label: "Día" },
    { id: "agenda", label: "Agenda" },
  ];

  const teamMembers = [
    {
      name: "María García",
      role: "Project Manager",
      avatar: "MG",
      status: "online",
      color: "bg-emerald-500",
      lastSeen: "Activo ahora",
    },
    {
      name: "Carlos Ruiz",
      role: "Developer",
      avatar: "CR",
      status: "away",
      color: "bg-blue-500",
      lastSeen: "Hace 5 min",
    },
    {
      name: "Ana López",
      role: "Designer",
      avatar: "AL",
      status: "online",
      color: "bg-purple-500",
      lastSeen: "Activo ahora",
    },
    {
      name: "Juan Pérez",
      role: "QA Engineer",
      avatar: "JP",
      status: "offline",
      color: "bg-orange-500",
      lastSeen: "Hace 2 hrs",
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
      bgColor: "bg-emerald-50",
    },
    {
      label: "Proyectos Activos",
      value: 23,
      change: "+3",
      trend: "up",
      icon: Briefcase,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
    {
      label: "Miembros del Equipo",
      value: 47,
      change: "+5",
      trend: "up",
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      label: "Tiempo Promedio",
      value: "4.2h",
      change: "-0.3h",
      trend: "up",
      icon: Clock,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
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
      dueDate: "Hoy",
      tags: ["UI/UX", "Revisión"],
    },
    {
      id: 2,
      title: "Implementar autenticación OAuth",
      status: "in-progress",
      priority: "high",
      assignee: "CR",
      progress: 75,
      dueDate: "Mañana",
      tags: ["Backend", "Seguridad"],
    },
    {
      id: 3,
      title: "Crear wireframes para dashboard",
      status: "in-progress",
      priority: "medium",
      assignee: "AL",
      progress: 45,
      dueDate: "Mar 20",
      tags: ["Diseño", "Wireframes"],
    },
    {
      id: 4,
      title: "Configurar pipeline de CI/CD",
      status: "pending",
      priority: "low",
      assignee: "JP",
      progress: 0,
      dueDate: "Mar 25",
      tags: ["DevOps", "Testing"],
    },
    {
      id: 5,
      title: "Actualizar documentación API",
      status: "pending",
      priority: "medium",
      assignee: "CR",
      progress: 0,
      dueDate: "Mar 22",
      tags: ["Documentación", "API"],
    },
  ];

  const projects = [
    {
      name: "E-commerce Platform",
      progress: 85,
      deadline: "15 Mar",
      status: "on-track",
      color: "bg-emerald-500",
      members: 8,
      tasks: { completed: 24, total: 30 },
    },
    {
      name: "Mobile App Redesign",
      progress: 62,
      deadline: "22 Mar",
      status: "at-risk",
      color: "bg-yellow-500",
      members: 5,
      tasks: { completed: 15, total: 25 },
    },
    {
      name: "Analytics Dashboard",
      progress: 94,
      deadline: "8 Mar",
      status: "ahead",
      color: "bg-indigo-500",
      members: 6,
      tasks: { completed: 18, total: 20 },
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
      description: "Sincronización perfecta con calendarios",
      category: "Calendario",
    },
    {
      name: "Zapier",
      logo: "ZP",
      color: "bg-orange-600",
      icon: Zap,
      description: "Automatiza flujos de trabajo",
      category: "Automatización",
    },
    {
      name: "Slack",
      logo: "SL",
      color: "bg-purple-600",
      icon: Hash,
      description: "Comunicación de equipo en tiempo real",
      category: "Comunicación",
    },
    {
      name: "Trello",
      logo: "TR",
      color: "bg-blue-500",
      icon: Layers,
      description: "Gestión visual de proyectos",
      category: "Proyectos",
    },
    {
      name: "ClickUp",
      logo: "CU",
      color: "bg-pink-500",
      icon: MousePointer,
      description: "Todo en una plataforma",
      category: "Productividad",
    },
    {
      name: "Figma",
      logo: "FG",
      color: "bg-purple-500",
      icon: Palette,
      description: "Diseño colaborativo en tiempo real",
      category: "Diseño",
    },
    {
      name: "GitHub",
      logo: "GH",
      color: "bg-gray-800",
      icon: GitBranch,
      description: "Control de versiones y código",
      category: "Desarrollo",
    },
    {
      name: "Notion",
      logo: "NT",
      color: "bg-gray-700",
      icon: FileText,
      description: "Documentación y conocimiento",
      category: "Documentos",
    },
  ];

  const calendarEvents = [
    {
      id: 1,
      time: "09:00",
      title: "Standup Meeting",
      color: "bg-indigo-500",
      duration: "30 min",
      attendees: ["MG", "CR", "AL"],
      type: "meeting",
    },
    {
      id: 2,
      time: "11:30",
      title: "Client Review",
      color: "bg-green-500",
      duration: "1 hr",
      attendees: ["MG"],
      type: "client",
    },
    {
      id: 3,
      time: "14:00",
      title: "Design Sprint",
      color: "bg-purple-500",
      duration: "2 hrs",
      attendees: ["AL", "MG"],
      type: "workshop",
    },
    {
      id: 4,
      time: "16:30",
      title: "Team Sync",
      color: "bg-orange-500",
      duration: "45 min",
      attendees: ["MG", "CR", "AL", "JP"],
      type: "sync",
    },
  ];

  const analyticsData = [
    {
      label: "Tareas por día",
      value: 12,
      trend: "+8%",
      color: "bg-blue-500",
      graph: [8, 12, 15, 10, 18, 12, 14],
    },
    {
      label: "Tiempo promedio",
      value: "3.2h",
      trend: "-15%",
      color: "bg-green-500",
      graph: [4.2, 3.8, 3.5, 3.2, 3.0, 3.2, 3.1],
    },
    {
      label: "Productividad",
      value: "94%",
      trend: "+12%",
      color: "bg-purple-500",
      graph: [82, 85, 88, 90, 92, 94, 95],
    },
    {
      label: "Colaboración",
      value: "89%",
      trend: "+5%",
      color: "bg-orange-500",
      graph: [84, 86, 87, 88, 89, 88, 89],
    },
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
    <div className={`min-h-screen ${darkMode ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900' : 'bg-gradient-to-br from-slate-50 via-white to-indigo-50'} overflow-x-hidden transition-all duration-500`}>
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
        {/* Additional animated elements */}
        <div
          className="absolute top-1/3 right-1/3 w-32 h-32 bg-gradient-to-br from-yellow-200/20 to-orange-200/20 rounded-full blur-xl animate-bounce"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
            animationDelay: "3s",
            animationDuration: "4s",
          }}
        />
        <div
          className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-gradient-to-br from-pink-200/15 to-purple-200/15 rounded-full blur-2xl animate-pulse"
          style={{
            transform: `translateY(${scrollY * -0.05}px)`,
            animationDelay: "1.5s",
          }}
        />
        {/* Floating geometric shapes */}
        <div
          className="absolute top-1/4 left-1/3 w-16 h-16 bg-gradient-to-br from-indigo-300/20 to-blue-300/20 rotate-45 animate-spin"
          style={{
            transform: `translateY(${scrollY * 0.08}px) rotate(${scrollY * 0.1}deg)`,
            animationDuration: "20s",
          }}
        />
        <div
          className="absolute bottom-1/2 right-1/5 w-12 h-12 bg-gradient-to-br from-green-300/25 to-teal-300/25 rounded-lg animate-pulse"
          style={{
            transform: `translateY(${scrollY * -0.12}px) rotate(${-scrollY * 0.05}deg)`,
            animationDelay: "4s",
          }}
        />
      </div>

            {/* Enhanced Navigation */}
      <nav className={`border-b ${darkMode ? 'border-slate-700 bg-slate-900/95 hover:bg-slate-900/98' : 'border-gray-200 bg-white/95 hover:bg-white/98'} backdrop-blur-xl sticky top-0 z-50 transition-all duration-300 shadow-sm relative overflow-hidden`}>
        {/* Animated header background */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/50 via-white/80 to-blue-50/50 opacity-0 hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 animate-shimmer" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div
                className={`flex-shrink-0 flex items-center transform transition-all duration-700 group ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
              >
                {/* Enhanced logo with floating effect */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 rounded-xl blur-lg scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse" />
                  <div className="relative w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 hover:rotate-6 group-hover:animate-bounce">
                    <CheckCircle className="h-7 w-7 text-white group-hover:animate-pulse" />
                  </div>
                </div>
                {/* Enhanced typography */}
                <div className="ml-4 relative">
                  <span className={`text-4xl font-black leading-10 transition-all duration-500 ${darkMode ? 'text-white bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:via-indigo-300 group-hover:to-purple-300' : 'text-gray-900 bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-700 bg-clip-text text-transparent group-hover:from-indigo-600 group-hover:via-blue-600 group-hover:to-purple-600'}`}>
                    Taskly
                  </span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 group-hover:w-full transition-all duration-700" />
                  {/* Floating particles around logo */}
                  <div
                    className="absolute -top-2 -right-2 w-2 h-2 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"
                    style={{ animationDelay: "0s" }}
                  />
                  <div
                    className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"
                    style={{ animationDelay: "0.5s" }}
                  />
                </div>
              </div>
              <div className="hidden md:ml-12 md:flex md:space-x-2">
                {["Características", "Precios", "Equipos", "Integraciones"].map(
                  (item, index) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className={`${darkMode ? 'text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-800/50 hover:to-indigo-800/50' : 'text-gray-600 hover:text-gray-900 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50'} px-5 py-3 text-sm font-semibold transition-all duration-300 rounded-xl relative group transform hover:scale-105 hover:-translate-y-0.5 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                      style={{ transitionDelay: `${100 + index * 100}ms` }}
                    >
                      <span className="relative z-10">{item}</span>
                      {/* Enhanced hover effects */}
                      <span className="absolute inset-x-1 bottom-1 h-0.5 bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full" />
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-100/0 via-blue-100/0 to-purple-100/0 group-hover:from-indigo-100/50 group-hover:via-blue-100/30 group-hover:to-purple-100/50 rounded-xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                      {/* Floating indicator */}
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-300" />
                    </a>
                  ),
                )}
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              {/* Dark Mode Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setDarkMode(!darkMode)}
                className={`p-3 rounded-xl transition-all duration-300 transform hover:scale-105 relative group ${darkMode ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'} ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                style={{ transitionDelay: "350ms" }}
              >
                {darkMode ? (
                  <Sun className="h-5 w-5 transition-transform duration-300 group-hover:rotate-180" />
                ) : (
                  <Moon className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-12" />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/0 to-orange-200/0 group-hover:from-yellow-200/20 group-hover:to-orange-200/20 rounded-xl transition-all duration-300" />
              </Button>

              <Button
                variant="ghost"
                className={`${darkMode ? 'text-gray-300 hover:text-white hover:bg-slate-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gradient-to-r hover:from-gray-50 hover:to-indigo-50'} transition-all duration-300 transform hover:scale-105 px-6 py-2.5 rounded-xl font-semibold relative group ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                style={{ transitionDelay: "400ms" }}
              >
                <span className="relative z-10">Iniciar Sesión</span>
                <div className={`absolute inset-0 border ${darkMode ? 'border-slate-600 group-hover:border-blue-400' : 'border-gray-200 group-hover:border-indigo-200'} rounded-xl transition-colors duration-300`} />
              </Button>
              <Button
                className={`bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 px-6 py-2.5 rounded-xl font-semibold relative overflow-hidden group ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                style={{ transitionDelay: "500ms" }}
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                <Sparkles className="mr-2 h-4 w-4 relative z-10 group-hover:animate-spin" />
                <span className="relative z-10">Comenzar Gratis</span>
                {/* Floating particles */}
                <div
                  className="absolute top-0 right-0 w-1 h-1 bg-white/60 rounded-full animate-ping opacity-0 group-hover:opacity-100"
                  style={{ animationDelay: "0.2s" }}
                />
                <div
                  className="absolute bottom-0 left-0 w-1 h-1 bg-white/60 rounded-full animate-ping opacity-0 group-hover:opacity-100"
                  style={{ animationDelay: "0.4s" }}
                />
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
                    <div className={`md:hidden border-t ${darkMode ? 'border-slate-700 bg-slate-900/98' : 'border-gray-200 bg-white/98'} backdrop-blur-xl animate-in slide-in-from-top-2 duration-300`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["Características", "Precios", "Equipos", "Integraciones"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`block px-3 py-2 ${darkMode ? 'text-gray-300 hover:text-white hover:bg-slate-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'} rounded-lg transition-colors duration-300`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ),
              )}
              <div className="flex flex-col space-y-2 px-3 pt-4">
                <Button
                  variant="ghost"
                  className={`justify-start ${darkMode ? 'text-gray-300 hover:text-white hover:bg-slate-800' : 'hover:bg-gray-50'}`}
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
      <section className={`relative overflow-hidden py-24 transition-all duration-500`}>
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
              className={`text-4xl md:text-6xl lg:text-7xl font-black ${darkMode ? 'text-white' : 'text-gray-900'} mb-8 leading-tight transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
              style={{ transitionDelay: "300ms" }}
            >
              El espacio colaborativo{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-indigo-600 to-blue-600 bg-clip-text text-transparent animate-gradient bg-300% relative">
                para equipos de cualquier tamaño.
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 via-indigo-600/20 to-blue-600/20 blur-lg opacity-30 animate-pulse" />
              </span>
            </h1>

            <p
              className={`text-xl md:text-2xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-10 max-w-6xl mx-auto leading-relaxed text-center transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
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

        {/* Professional Dashboard Preview */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 mt-16">
          <div
            className={`relative transform transition-all duration-1200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}`}
            style={{ transitionDelay: "700ms" }}
          >
            {/* Professional Dashboard Container */}
            <div className="bg-white border-gray-200 rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500">
              {/* Enhanced Dashboard Header */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200 px-6 py-4 border-b">
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
                {/* Overview Dashboard */}
                {dashboardView === "overview" && (
                  <div className="space-y-6 animate-in slide-in-from-right-4 duration-500">
                    {/* Enhanced Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {projectStats.map((stat, index) => (
                        <Card
                          key={index}
                          className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group bg-white/90 backdrop-blur-sm"
                        >
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                              <div
                                className={`p-3 ${stat.bgColor} rounded-xl group-hover:scale-110 transition-transform duration-300`}
                              >
                                <stat.icon
                                  className={`h-6 w-6 ${stat.color}`}
                                />
                              </div>
                              <Badge
                                className={`text-xs ${stat.trend === "up" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"} animate-pulse`}
                              >
                                {stat.change}
                              </Badge>
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-2">
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
                                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 group border border-gray-100 hover:shadow-md transform hover:scale-[1.02]"
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
                                      <div className="flex items-center space-x-2">
                                        <Badge
                                          className={`text-xs ${getPriorityColor(task.priority)}`}
                                        >
                                          {task.priority}
                                        </Badge>
                                        <span className="text-xs text-gray-500">
                                          {task.dueDate}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="flex items-center justify-between mb-2">
                                      <div className="flex items-center space-x-2">
                                        <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                                          {task.assignee}
                                        </div>
                                        <span className="text-xs text-gray-500">
                                          Asignado
                                        </span>
                                      </div>
                                      <span className="text-xs text-gray-500 font-medium">
                                        {task.progress}%
                                      </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                      <Progress
                                        value={task.progress}
                                        className="h-2 flex-1 mr-4"
                                      />
                                      <div className="flex items-center space-x-1">
                                        {task.tags.map((tag, tagIndex) => (
                                          <Badge
                                            key={tagIndex}
                                            className="text-xs bg-gray-100 text-gray-600"
                                          >
                                            {tag}
                                          </Badge>
                                        ))}
                                      </div>
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
                                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-300 border border-gray-100 hover:shadow-md transform hover:scale-[1.02]"
                                  style={{ animationDelay: `${index * 150}ms` }}
                                >
                                  <div className="relative">
                                    <div
                                      className={`w-10 h-10 ${member.color} rounded-full flex items-center justify-center text-white text-sm font-bold shadow-sm`}
                                    >
                                      {member.avatar}
                                    </div>
                                    <div
                                      className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
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
                                    <p className="text-xs text-gray-400">
                                      {member.lastSeen}
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
                                  className="space-y-3 p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:shadow-md transform hover:scale-[1.02]"
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
                                  <div className="flex items-center justify-between text-xs text-gray-500">
                                    <span>
                                      {project.tasks.completed}/
                                      {project.tasks.total} tareas
                                    </span>
                                    <span>{project.members} miembros</span>
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

                {/* Professional Slack-Style Calendar View */}
                {dashboardView === "calendar" && (
                  <div className="animate-in slide-in-from-right-4 duration-500">
                    {/* Calendar Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <h2 className="text-2xl font-bold text-gray-900">
                          Marzo 2024
                        </h2>
                        <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
                          {calendarViews.map((view) => (
                            <Button
                              key={view.id}
                              size="sm"
                              variant={
                                calendarView === view.id ? "default" : "ghost"
                              }
                              onClick={() => setCalendarView(view.id)}
                              className={`text-xs transition-all duration-200 ${
                                calendarView === view.id
                                  ? "bg-white text-gray-900 shadow-sm"
                                  : "text-gray-600 hover:text-gray-900"
                              }`}
                            >
                              {view.label}
                            </Button>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="ghost">
                          <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost">
                          Hoy
                        </Button>
                        <Button size="sm" variant="ghost">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          className="bg-indigo-500 hover:bg-indigo-600 ml-4"
                        >
                          <Plus className="h-4 w-4 mr-1" />
                          Evento
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                      {/* Main Calendar */}
                      <div className="lg:col-span-3">
                        <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                          <CardContent className="p-6">
                            {/* Calendar Header Days */}
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
                                  className="text-center text-sm font-semibold text-gray-600 py-3 bg-gray-50 rounded-lg"
                                >
                                  {day}
                                </div>
                              ))}
                            </div>

                            {/* Calendar Grid */}
                            <div className="grid grid-cols-7 gap-2">
                              {Array.from({ length: 35 }).map((_, index) => {
                                const dayNumber = index + 1;
                                const isToday = dayNumber === 15;
                                const isSelected = dayNumber === selectedDate;
                                const hasEvent =
                                  dayNumber === 15 ||
                                  dayNumber === 18 ||
                                  dayNumber === 22;

                                return (
                                  <div
                                    key={index}
                                    onClick={() => setSelectedDate(dayNumber)}
                                    className={`aspect-square flex flex-col items-center justify-center text-sm rounded-lg transition-all duration-300 cursor-pointer relative ${
                                      isToday
                                        ? "bg-indigo-500 text-white shadow-lg font-bold"
                                        : isSelected
                                          ? "bg-indigo-100 text-indigo-700 border-2 border-indigo-300"
                                          : index % 7 === 0 || index % 7 === 6
                                            ? "text-gray-400 hover:bg-gray-100"
                                            : "text-gray-700 hover:bg-gray-100"
                                    }`}
                                  >
                                    {dayNumber <= 31 ? dayNumber : ""}
                                    {hasEvent && (
                                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Calendar Sidebar */}
                      <div className="space-y-6">
                        {/* Today's Events */}
                        <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                          <CardHeader>
                            <CardTitle className="text-lg flex items-center">
                              <Calendar className="h-5 w-5 text-indigo-600 mr-2" />
                              Eventos Hoy
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              {calendarEvents.map((event, index) => (
                                <div
                                  key={event.id}
                                  className="p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-all duration-300 hover:shadow-md"
                                  style={{ animationDelay: `${index * 100}ms` }}
                                >
                                  <div className="flex items-start space-x-3">
                                    <div
                                      className={`w-3 h-3 ${event.color} rounded-full mt-2`}
                                    />
                                    <div className="flex-1">
                                      <p className="text-sm font-medium text-gray-900">
                                        {event.title}
                                      </p>
                                      <p className="text-xs text-gray-500 mb-2">
                                        {event.time} • {event.duration}
                                      </p>
                                      <div className="flex items-center space-x-1">
                                        {event.attendees.map(
                                          (attendee, idx) => (
                                            <div
                                              key={idx}
                                              className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xs font-semibold"
                                            >
                                              {attendee}
                                            </div>
                                          ),
                                        )}
                                        <Badge className="text-xs bg-gray-100 text-gray-600 ml-2">
                                          {event.type}
                                        </Badge>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>

                        {/* Quick Actions */}
                        <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                          <CardHeader>
                            <CardTitle className="text-lg">
                              Acciones Rápidas
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2">
                              <Button
                                size="sm"
                                variant="outline"
                                className="w-full justify-start"
                              >
                                <Video className="h-4 w-4 mr-2" />
                                Nueva reunión
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="w-full justify-start"
                              >
                                <Calendar className="h-4 w-4 mr-2" />
                                Programar evento
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="w-full justify-start"
                              >
                                <Users className="h-4 w-4 mr-2" />
                                Invitar miembros
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                )}

                {/* ClickUp-Style Analytics View */}
                {dashboardView === "analytics" && (
                  <div className="animate-in slide-in-from-right-4 duration-500">
                    <div className="space-y-6">
                      {/* Analytics Header */}
                      <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-gray-900">
                          Analytics Dashboard
                        </h2>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            Exportar
                          </Button>
                          <Button size="sm" variant="outline">
                            <Share2 className="h-4 w-4 mr-2" />
                            Compartir
                          </Button>
                          <Button
                            size="sm"
                            className="bg-indigo-500 hover:bg-indigo-600"
                          >
                            <Plus className="h-4 w-4 mr-2" />
                            Widget
                          </Button>
                        </div>
                      </div>

                      {/* Key Metrics */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {analyticsData.map((metric, index) => (
                          <Card
                            key={index}
                            className="border-0 shadow-lg bg-white/90 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300"
                          >
                            <CardContent className="p-6">
                              <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-3">
                                  <div
                                    className={`w-3 h-3 ${metric.color} rounded-full`}
                                  />
                                  <span className="text-sm text-gray-600">
                                    {metric.label}
                                  </span>
                                </div>
                                <Badge className="bg-green-100 text-green-700 text-xs">
                                  {metric.trend}
                                </Badge>
                              </div>
                              <div className="text-3xl font-bold text-gray-900 mb-4">
                                {metric.value}
                              </div>
                              {/* Mini Chart */}
                              <div className="flex items-end space-x-1 h-12">
                                {metric.graph.map((value, idx) => (
                                  <div
                                    key={idx}
                                    className={`${metric.color} rounded-t flex-1 transition-all duration-500 hover:opacity-75`}
                                    style={{
                                      height: `${(value / Math.max(...metric.graph)) * 100}%`,
                                      animationDelay: `${idx * 100}ms`,
                                    }}
                                  />
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>

                      {/* Detailed Analytics */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Team Performance */}
                        <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                          <CardHeader>
                            <CardTitle className="text-lg flex items-center">
                              <Users className="h-5 w-5 text-indigo-600 mr-2" />
                              Rendimiento del Equipo
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4">
                              {teamMembers.map((member, index) => (
                                <div
                                  key={index}
                                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                                >
                                  <div className="flex items-center space-x-3">
                                    <div
                                      className={`w-8 h-8 ${member.color} rounded-full flex items-center justify-center text-white text-xs font-bold`}
                                    >
                                      {member.avatar}
                                    </div>
                                    <div>
                                      <p className="text-sm font-medium text-gray-900">
                                        {member.name}
                                      </p>
                                      <p className="text-xs text-gray-500">
                                        {member.role}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="text-right">
                                    <p className="text-sm font-semibold text-gray-900">
                                      {95 - index * 5}%
                                    </p>
                                    <p className="text-xs text-gray-500">
                                      Eficiencia
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>

                        {/* Project Status */}
                        <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                          <CardHeader>
                            <CardTitle className="text-lg flex items-center">
                              <BarChart3 className="h-5 w-5 text-emerald-600 mr-2" />
                              Estado de Proyectos
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4">
                              {projects.map((project, index) => (
                                <div
                                  key={index}
                                  className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                                >
                                  <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center space-x-2">
                                      <div
                                        className={`w-3 h-3 ${project.color} rounded-full`}
                                      />
                                      <span className="text-sm font-medium text-gray-900">
                                        {project.name}
                                      </span>
                                    </div>
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
                                  <div className="grid grid-cols-3 gap-4 text-center">
                                    <div>
                                      <p className="text-lg font-bold text-gray-900">
                                        {project.progress}%
                                      </p>
                                      <p className="text-xs text-gray-500">
                                        Progreso
                                      </p>
                                    </div>
                                    <div>
                                      <p className="text-lg font-bold text-gray-900">
                                        {project.tasks.completed}/
                                        {project.tasks.total}
                                      </p>
                                      <p className="text-xs text-gray-500">
                                        Tareas
                                      </p>
                                    </div>
                                    <div>
                                      <p className="text-lg font-bold text-gray-900">
                                        {project.members}
                                      </p>
                                      <p className="text-xs text-gray-500">
                                        Miembros
                                      </p>
                                    </div>
                                  </div>
                                  <Progress
                                    value={project.progress}
                                    className="h-2 mt-3"
                                  />
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Time Tracking */}
                      <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center">
                            <Timer className="h-5 w-5 text-blue-600 mr-2" />
                            Seguimiento de Tiempo
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center p-4 bg-blue-50 rounded-lg">
                              <div className="text-3xl font-bold text-blue-600 mb-2">
                                32.5h
                              </div>
                              <p className="text-sm text-gray-600">
                                Esta semana
                              </p>
                            </div>
                            <div className="text-center p-4 bg-green-50 rounded-lg">
                              <div className="text-3xl font-bold text-green-600 mb-2">
                                6.5h
                              </div>
                              <p className="text-sm text-gray-600">Hoy</p>
                            </div>
                            <div className="text-center p-4 bg-purple-50 rounded-lg">
                              <div className="text-3xl font-bold text-purple-600 mb-2">
                                128h
                              </div>
                              <p className="text-sm text-gray-600">Este mes</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                )}

                {/* Professional Kanban Board */}
                {dashboardView === "kanban" && (
                  <div className="animate-in slide-in-from-right-4 duration-500">
                    {/* Kanban Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Tablero Kanban</h3>
                        <Badge className="bg-green-100 text-green-700 px-3 py-1">
                          16 tareas activas
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline" className={`${darkMode ? 'border-slate-600 text-gray-300 hover:bg-slate-800' : 'border-gray-300'}`}>
                          <Filter className="h-4 w-4 mr-2" />
                          Filtrar
                        </Button>
                        <Button size="sm" className="bg-indigo-500 hover:bg-indigo-600">
                          <Plus className="h-4 w-4 mr-2" />
                          Nueva Tarea
                        </Button>
                      </div>
                    </div>

                    {/* Enhanced Kanban Board */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 min-h-[600px]">
                      {[
                        {
                          title: "Backlog",
                          count: 8,
                          color: "bg-gray-500",
                          bgColor: "bg-gray-50",
                          borderColor: "border-gray-200",
                          tasks: [
                            { id: 1, title: "Diseñar nueva landing page", priority: "media", assignee: "AL", tags: ["UI/UX", "Web"], time: "5h" },
                            { id: 2, title: "Investigar competencia", priority: "baja", assignee: "MG", tags: ["Research"], time: "3h" },
                            { id: 3, title: "Definir arquitectura API", priority: "alta", assignee: "CR", tags: ["Backend"], time: "8h" }
                          ]
                        },
                        {
                          title: "Por Hacer",
                          count: 5,
                          color: "bg-blue-500",
                          bgColor: "bg-blue-50",
                          borderColor: "border-blue-200",
                          tasks: [
                            { id: 4, title: "Implementar autenticación OAuth", priority: "alta", assignee: "CR", tags: ["Backend", "Auth"], time: "6h" },
                            { id: 5, title: "Crear wireframes dashboard", priority: "media", assignee: "AL", tags: ["Diseño"], time: "4h" }
                          ]
                        },
                        {
                          title: "En Progreso",
                          count: 3,
                          color: "bg-yellow-500",
                          bgColor: "bg-yellow-50",
                          borderColor: "border-yellow-200",
                          tasks: [
                            { id: 6, title: "Desarrollar API de usuarios", priority: "alta", assignee: "CR", tags: ["Backend"], time: "12h", progress: 70 },
                            { id: 7, title: "Testing automatizado", priority: "media", assignee: "JP", tags: ["QA"], time: "8h", progress: 45 }
                          ]
                        },
                        {
                          title: "Completado",
                          count: 12,
                          color: "bg-green-500",
                          bgColor: "bg-green-50",
                          borderColor: "border-green-200",
                          tasks: [
                            { id: 8, title: "Setup inicial del proyecto", priority: "alta", assignee: "MG", tags: ["Setup"], time: "4h", completed: true },
                            { id: 9, title: "Configurar CI/CD pipeline", priority: "media", assignee: "JP", tags: ["DevOps"], time: "6h", completed: true },
                            { id: 10, title: "Diseño del logo", priority: "baja", assignee: "AL", tags: ["Branding"], time: "2h", completed: true }
                          ]
                        }
                      ].map((column, index) => (
                        <div key={index} className="flex flex-col">
                          {/* Column Header */}
                          <div className={`${column.bgColor} ${darkMode ? 'bg-opacity-20' : ''} rounded-t-xl p-4 border-l-4 ${column.borderColor}`}>
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center space-x-2">
                                <div className={`w-3 h-3 ${column.color} rounded-full`} />
                                <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{column.title}</h4>
                              </div>
                              <Badge className={`${column.color} text-white text-xs px-2 py-1`}>
                                {column.count}
                              </Badge>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-1">
                              <div
                                className={`h-1 ${column.color} rounded-full transition-all duration-500`}
                                style={{ width: `${(column.count / 16) * 100}%` }}
                              />
                            </div>
                          </div>

                          {/* Column Content */}
                          <div className={`flex-1 ${darkMode ? 'bg-slate-800/50' : 'bg-white'} rounded-b-xl border-l-4 ${column.borderColor} border-t-0 p-4 space-y-3 min-h-[500px] transition-colors duration-300`}>
                            {column.tasks.map((task, taskIndex) => (
                              <Card
                                key={task.id}
                                className={`group cursor-pointer transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02] hover:-translate-y-1 ${darkMode ? 'bg-slate-700 border-slate-600 hover:bg-slate-600' : 'bg-white border-gray-200 hover:border-indigo-300'}`}
                                style={{ animationDelay: `${taskIndex * 100}ms` }}
                              >
                                <CardContent className="p-4">
                                  {/* Task Header */}
                                  <div className="flex items-start justify-between mb-3">
                                    <h5 className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'} line-clamp-2 group-hover:text-indigo-600 transition-colors duration-200`}>
                                      {task.title}
                                    </h5>
                                    <Button size="sm" variant="ghost" className="p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                      <MoreHorizontal className="h-3 w-3" />
                                    </Button>
                                  </div>

                                  {/* Progress Bar (for in-progress tasks) */}
                                  {task.progress && (
                                    <div className="mb-3">
                                      <div className="flex items-center justify-between text-xs mb-1">
                                        <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Progreso</span>
                                        <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{task.progress}%</span>
                                      </div>
                                      <Progress value={task.progress} className="h-2" />
                                    </div>
                                  )}

                                  {/* Task Tags */}
                                  <div className="flex flex-wrap gap-1 mb-3">
                                    {task.tags.map((tag, tagIndex) => (
                                      <Badge
                                        key={tagIndex}
                                        className={`text-xs px-2 py-0.5 ${darkMode ? 'bg-slate-600 text-gray-300' : 'bg-gray-100 text-gray-700'}`}
                                      >
                                        {tag}
                                      </Badge>
                                    ))}
                                  </div>

                                  {/* Task Footer */}
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                      {/* Assignee Avatar */}
                                      <div className={`w-6 h-6 ${['bg-purple-500', 'bg-blue-500', 'bg-green-500', 'bg-orange-500'][Math.floor(Math.random() * 4)]} rounded-full flex items-center justify-center text-white text-xs font-bold`}>
                                        {task.assignee}
                                      </div>
                                      {/* Time Estimate */}
                                      <div className="flex items-center space-x-1">
                                        <Clock className={`h-3 w-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                                        <span className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{task.time}</span>
                                      </div>
                                    </div>

                                    {/* Priority Badge */}
                                    <Badge
                                      className={`text-xs ${
                                        task.priority === 'alta' ? 'bg-red-100 text-red-700' :
                                        task.priority === 'media' ? 'bg-yellow-100 text-yellow-700' :
                                        'bg-green-100 text-green-700'
                                      }`}
                                    >
                                      {task.priority}
                                    </Badge>
                                  </div>

                                  {/* Completed Indicator */}
                                  {task.completed && (
                                    <div className="absolute top-2 right-2">
                                      <CheckCircle className="h-4 w-4 text-green-500" />
                                    </div>
                                  )}
                                </CardContent>
                              </Card>
                            ))}

                            {/* Add New Task Button */}
                            <Button
                              variant="outline"
                              className={`w-full border-dashed ${darkMode ? 'border-slate-600 text-gray-400 hover:bg-slate-700 hover:border-slate-500' : 'border-gray-300 text-gray-500 hover:bg-gray-50'} transition-all duration-200 group`}
                            >
                              <Plus className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                              Agregar tarea
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Kanban Stats */}
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
                      {[
                        { label: "Tareas Totales", value: "28", icon: Briefcase, color: "text-blue-600" },
                        { label: "En Progreso", value: "3", icon: Clock, color: "text-yellow-600" },
                        { label: "Completadas Hoy", value: "5", icon: CheckCircle, color: "text-green-600" },
                        { label: "Tiempo Promedio", value: "4.2h", icon: Timer, color: "text-purple-600" }
                      ].map((stat, index) => (
                        <Card key={index} className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} transition-colors duration-300`}>
                          <CardContent className="p-4 text-center">
                            <stat.icon className={`h-6 w-6 ${stat.color} mx-auto mb-2`} />
                            <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{stat.value}</div>
                            <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Types Section */}
      <section id="equipos" className={`py-20 ${darkMode ? 'bg-slate-900' : 'bg-white'} relative transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative">
            {/* Animated section background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-100/30 to-blue-100/30 rounded-full blur-3xl animate-pulse" />
            </div>
            <h2 className={`text-3xl md:text-5xl font-black ${darkMode ? 'text-white' : 'text-gray-900'} mb-6 relative z-10 animate-in slide-in-from-bottom-4 duration-1000 transition-colors duration-500`}>
              Diseñado para todo tipo de equipo
            </h2>
            <p className={`text-xl md:text-2xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-4xl mx-auto relative z-10 animate-in slide-in-from-bottom-4 duration-1000 delay-300 transition-colors duration-500`}>
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
        className={`py-20 ${darkMode ? 'bg-gradient-to-br from-slate-800 to-blue-900' : 'bg-gradient-to-br from-gray-50 to-indigo-50'} transition-colors duration-500`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative">
            {/* Floating icons animation */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-4 left-1/4 animate-float">
                <Database className="h-8 w-8 text-indigo-300/60" />
              </div>
              <div
                className="absolute top-8 right-1/3 animate-float"
                style={{ animationDelay: "1s" }}
              >
                <Zap className="h-6 w-6 text-blue-300/60" />
              </div>
              <div
                className="absolute bottom-4 left-1/3 animate-float"
                style={{ animationDelay: "2s" }}
              >
                <BarChart3 className="h-7 w-7 text-purple-300/60" />
              </div>
            </div>
            <h2 className={`text-3xl md:text-4xl font-black ${darkMode ? 'text-white' : 'text-gray-900'} mb-4 relative z-10 animate-in slide-in-from-left-4 duration-800 transition-colors duration-500`}>
              Conecta con Taskly
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto relative z-10 animate-in slide-in-from-right-4 duration-800 delay-200 transition-colors duration-500`}>
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

      {/* CRM Workflow Visualization Section */}
      <section className={`py-20 ${darkMode ? 'bg-slate-900' : 'bg-white'} relative overflow-hidden transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-black ${darkMode ? 'text-white' : 'text-gray-900'} mb-4 transition-colors duration-500`}>
              Flujo CRM Visualizado
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto transition-colors duration-500`}>
              Gestiona el ciclo completo desde leads hasta clientes, con
              seguimiento automatizado y métricas en tiempo real
            </p>
          </div>

          {/* CRM Pipeline Flow */}
          <div className="relative mb-16">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-200 via-blue-300 to-green-300 opacity-30" />
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 via-blue-500 to-green-500 opacity-60 animate-pulse" />
              {/* Flowing data particles */}
              <div
                className="absolute top-1/2 left-0 w-4 h-4 bg-indigo-400 rounded-full opacity-70 animate-ping"
                style={{ animationDelay: "0s" }}
              />
              <div
                className="absolute top-1/2 left-1/4 w-3 h-3 bg-blue-400 rounded-full opacity-70 animate-ping"
                style={{ animationDelay: "1s" }}
              />
              <div
                className="absolute top-1/2 left-2/4 w-4 h-4 bg-purple-400 rounded-full opacity-70 animate-ping"
                style={{ animationDelay: "2s" }}
              />
              <div
                className="absolute top-1/2 left-3/4 w-3 h-3 bg-green-400 rounded-full opacity-70 animate-ping"
                style={{ animationDelay: "3s" }}
              />
              {/* Success indicators */}
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                <div className="flex items-center space-x-2 animate-bounce">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-xs text-green-600 font-semibold">
                    +73 Clientes
                  </span>
                </div>
              </div>
            </div>

            {/* Pipeline Stages */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {[
                {
                  title: "Leads",
                  count: "247",
                  icon: Target,
                  color: "bg-blue-500",
                  bgColor: "bg-blue-50",
                  borderColor: "border-blue-200",
                  items: [
                    "Leads calificados",
                    "Formularios web",
                    "Marketing campaigns",
                  ],
                },
                {
                  title: "Oportunidades",
                  count: "89",
                  icon: TrendingUp,
                  color: "bg-indigo-500",
                  bgColor: "bg-indigo-50",
                  borderColor: "border-indigo-200",
                  items: [
                    "En negociación",
                    "Propuestas enviadas",
                    "Demos programados",
                  ],
                },
                {
                  title: "Follow-ups",
                  count: "156",
                  icon: RotateCcw,
                  color: "bg-orange-500",
                  bgColor: "bg-orange-50",
                  borderColor: "border-orange-200",
                  items: [
                    "Recordatorios",
                    "Llamadas pendientes",
                    "Emails seguimiento",
                  ],
                },
                {
                  title: "Clientes",
                  count: "73",
                  icon: Award,
                  color: "bg-green-500",
                  bgColor: "bg-green-50",
                  borderColor: "border-green-200",
                  items: [
                    "Contratos firmados",
                    "Onboarding activo",
                    "Renovaciones",
                  ],
                },
              ].map((stage, index) => (
                <div key={index} className="relative">
                  {/* Connecting Arrow */}
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="w-8 h-8 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center animate-pulse">
                        <ChevronRight className="h-4 w-4 text-gray-600" />
                      </div>
                    </div>
                  )}

                  <Card
                    className={`border-2 ${stage.borderColor} shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group ${stage.bgColor}/30 backdrop-blur-sm relative overflow-hidden cursor-pointer`}
                  >
                    <CardContent className="p-6 text-center relative">
                      {/* Hover overlay effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      <div
                        className={`w-16 h-16 ${stage.color} rounded-xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <stage.icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                        {stage.title}
                      </h3>
                      <div className="text-3xl font-black text-gray-900 mb-4">
                        {stage.count}
                      </div>
                      <div className="space-y-2">
                        {stage.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <div
                              className={`w-2 h-2 ${stage.color} rounded-full mr-2 animate-pulse`}
                            />
                            {item}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* CRM Metrics and Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Lead Management */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Target className="h-5 w-5 text-blue-600 mr-2" />
                  Gestión de Leads
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Conversión de leads
                      </p>
                      <p className="text-xs text-gray-500">Este mes</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-blue-600">24.3%</p>
                      <Badge className="bg-green-100 text-green-700 text-xs">
                        +5.2%
                      </Badge>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Tiempo respuesta
                      </p>
                      <p className="text-xs text-gray-500">Promedio</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-blue-600">2.4h</p>
                      <Badge className="bg-green-100 text-green-700 text-xs">
                        -15min
                      </Badge>
                    </div>
                  </div>

                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                    <Plus className="h-4 w-4 mr-2" />
                    Crear Lead
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Follow-up Scheduling */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-orange-50 to-yellow-50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Clock className="h-5 w-5 text-orange-600 mr-2" />
                  Programación Follow-ups
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-3">
                    {[
                      {
                        client: "Tech Solutions Inc.",
                        time: "14:00",
                        type: "Llamada",
                        priority: "Alta",
                      },
                      {
                        client: "Marketing Pro",
                        time: "16:30",
                        type: "Email",
                        priority: "Media",
                      },
                      {
                        client: "StartupXYZ",
                        time: "Mañana",
                        type: "Reunión",
                        priority: "Alta",
                      },
                    ].map((followup, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                      >
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {followup.client}
                          </p>
                          <p className="text-xs text-gray-500">
                            {followup.type} - {followup.time}
                          </p>
                        </div>
                        <Badge
                          className={`text-xs ${followup.priority === "Alta" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"}`}
                        >
                          {followup.priority}
                        </Badge>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    <Calendar className="h-4 w-4 mr-2" />
                    Programar Follow-up
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Client Success */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Award className="h-5 w-5 text-green-600 mr-2" />
                  Éxito del Cliente
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-3 bg-white rounded-lg shadow-sm">
                      <div className="text-2xl font-bold text-green-600">
                        98%
                      </div>
                      <p className="text-xs text-gray-600">Satisfacción</p>
                    </div>
                    <div className="p-3 bg-white rounded-lg shadow-sm">
                      <div className="text-2xl font-bold text-green-600">
                        $450K
                      </div>
                      <p className="text-xs text-gray-600">Pipeline</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Retención clientes</span>
                      <span className="font-semibold text-green-600">92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Upselling éxito</span>
                      <span className="font-semibold text-green-600">67%</span>
                    </div>
                    <Progress value={67} className="h-2" />
                  </div>

                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                    <Users className="h-4 w-4 mr-2" />
                    Ver Clientes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CRM Integration Benefits */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl border border-indigo-100 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Mejora Conversión
                </h3>
                <p className="text-gray-600 text-sm">
                  Incrementa un 35% la conversión de leads con seguimiento
                  automatizado
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                  <Gauge className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Optimiza Pipeline
                </h3>
                <p className="text-gray-600 text-sm">
                  Reduce el ciclo de ventas promedio en un 40% con flujos
                  optimizados
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Automatización
                </h3>
                <p className="text-gray-600 text-sm">
                  Ahorra 20+ horas semanales con automatización inteligente
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Productivity Tools Integration Section */}
      <section className={`py-20 ${darkMode ? 'bg-slate-900' : 'bg-white'} relative transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative">
            {/* Animated productivity icons */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div
                className="absolute top-0 left-1/6 animate-bounce"
                style={{ animationDelay: "0.5s", animationDuration: "3s" }}
              >
                <Calendar className="h-6 w-6 text-blue-300/50" />
              </div>
              <div
                className="absolute top-6 right-1/4 animate-bounce"
                style={{ animationDelay: "1.5s", animationDuration: "3s" }}
              >
                <Hash className="h-5 w-5 text-purple-300/50" />
              </div>
              <div
                className="absolute bottom-0 left-1/3 animate-bounce"
                style={{ animationDelay: "2.5s", animationDuration: "3s" }}
              >
                <GitBranch className="h-7 w-7 text-green-300/50" />
              </div>
              <div
                className="absolute top-8 left-2/3 animate-bounce"
                style={{ animationDelay: "0.8s", animationDuration: "3s" }}
              >
                <Palette className="h-6 w-6 text-pink-300/50" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 relative z-10 animate-in zoom-in-50 duration-1000">
              Herramientas de Productividad
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto relative z-10 animate-in fade-in duration-1000 delay-300">
              Conecta con las herramientas que ya usas y potencia tu flujo de
              trabajo colaborativo
            </p>
          </div>

          {/* Enhanced Tools Carousel */}
          <div className="relative mb-12 overflow-hidden">
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{
                transform: `translateX(-${toolsCarouselIndex * (100 / 4)}%)`,
              }}
            >
              {[...Array(2)].map((_, repeatIndex) =>
                productivityTools.map((tool, index) => (
                  <div
                    key={`${repeatIndex}-${index}`}
                    className="w-1/4 flex-shrink-0 px-3"
                  >
                    <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-3 group p-8 h-full relative overflow-hidden bg-gradient-to-br from-white via-gray-50/50 to-white">
                      {/* Animated background overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/0 via-blue-50/0 to-purple-50/0 group-hover:from-indigo-50/60 group-hover:via-blue-50/40 group-hover:to-purple-50/60 transition-all duration-500 opacity-0 group-hover:opacity-100" />
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12" />

                      <div className="text-center relative z-10">
                        {/* Enhanced icon container */}
                        <div className="relative mb-6">
                          <div className="absolute inset-0 bg-gradient-to-r from-gray-200/30 to-gray-300/30 rounded-2xl blur-lg scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse" />
                          <div
                            className={`relative w-20 h-20 ${tool.color} rounded-2xl flex items-center justify-center text-white mx-auto shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 group-hover:rotate-6`}
                          >
                            <tool.icon className="h-10 w-10 group-hover:animate-bounce" />
                            {/* Floating particles */}
                            <div
                              className="absolute -top-1 -right-1 w-2 h-2 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"
                              style={{ animationDelay: "0s" }}
                            />
                            <div
                              className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"
                              style={{ animationDelay: "0.3s" }}
                            />
                          </div>
                        </div>

                        {/* Enhanced typography */}
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-500 group-hover:scale-105 transform">
                          {tool.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                          {tool.description}
                        </p>

                        {/* Enhanced badge */}
                        <div className="relative">
                          <Badge className="bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 text-xs px-3 py-1.5 font-semibold group-hover:from-indigo-100 group-hover:to-blue-100 group-hover:text-indigo-700 transition-all duration-300 shadow-sm group-hover:shadow-md transform group-hover:scale-105">
                            {tool.category}
                          </Badge>
                          {/* Badge glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-indigo-200/0 to-blue-200/0 group-hover:from-indigo-200/40 group-hover:to-blue-200/40 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500" />
                        </div>

                        {/* Connection indicator */}
                        <div className="mt-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="flex items-center space-x-1">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            <span className="text-xs text-green-600 font-medium">
                              Conectado
                            </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                )),
              )}
            </div>
          </div>

          {/* Enhanced Collaborative Work Illustrations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: "Flujos Automatizados",
                description: "Conecta procesos entre diferentes herramientas",
                icon: Workflow,
                color: "bg-gradient-to-r from-blue-500 to-indigo-500",
              },
              {
                title: "Colaboración en Red",
                description: "Conecta equipos distribuidos globalmente",
                icon: Network,
                color: "bg-gradient-to-r from-green-500 to-teal-500",
              },
              {
                title: "Diseño Colaborativo",
                description: "Feedback en tiempo real en proyectos creativos",
                icon: Palette,
                color: "bg-gradient-to-r from-purple-500 to-pink-500",
              },
              {
                title: "Desarrollo Ágil",
                description: "Integra repositorios y CI/CD pipelines",
                icon: Code,
                color: "bg-gradient-to-r from-orange-500 to-red-500",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg text-center p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
              >
                <div
                  className={`w-16 h-16 ${item.color} rounded-xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </Card>
            ))}
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

      {/* Testimonials & Social Proof Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 relative">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-100/30 to-blue-100/30 rounded-full blur-3xl animate-pulse" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 relative z-10 animate-in slide-in-from-bottom-4 duration-1000">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto relative z-10 animate-in slide-in-from-bottom-4 duration-1000 delay-300">
              Más de{" "}
              <span className="font-bold text-indigo-600">10,000+ equipos</span>{" "}
              ya confían en Taskly para transformar su productividad
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { value: "10,000+", label: "Equipos activos", icon: Users },
              { value: "98%", label: "Satisfacción", icon: Heart },
              { value: "4.9/5", label: "Rating promedio", icon: Star },
              { value: "50+", label: "Países", icon: Globe },
            ].map((stat, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg text-center p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white/80 backdrop-blur-sm"
              >
                <stat.icon className="h-8 w-8 text-indigo-600 mx-auto mb-3" />
                <div className="text-3xl font-black text-gray-900 mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </p>
              </Card>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "María González",
                role: "CEO, TechStart Solutions",
                company: "Startup Tecnológica",
                avatar: "MG",
                avatarColor: "bg-purple-500",
                testimonial:
                  "Taskly transformó completamente nuestra forma de trabajar. En 6 meses aumentamos nuestra productividad un 40% y nuestro equipo remoto nunca estuvo tan conectado.",
                rating: 5,
              },
              {
                name: "Carlos Ruíz",
                role: "Director de Proyectos",
                company: "Creative Agency Pro",
                avatar: "CR",
                avatarColor: "bg-blue-500",
                testimonial:
                  "La integración con nuestros CRMs fue perfecta. Ahora tenemos visibilidad completa desde leads hasta clientes, todo en un solo lugar. Nuestros procesos son 60% más eficientes.",
                rating: 5,
              },
              {
                name: "Ana L��pez",
                role: "Freelancer Designer",
                company: "Diseño Independiente",
                avatar: "AL",
                avatarColor: "bg-green-500",
                testimonial:
                  "Como freelancer, necesitaba algo simple pero poderoso. Taskly me permite gestionar múltiples clientes sin perder el control. ¡Es perfecto para mi flujo de trabajo!",
                rating: 5,
              },
              {
                name: "Juan Pérez",
                role: "Tech Lead",
                company: "DevTeam Remote",
                avatar: "JP",
                avatarColor: "bg-orange-500",
                testimonial:
                  "Las integraciones con GitHub y Slack son increíbles. Nuestro equipo distribuido puede colaborar como si estuviéramos en la misma oficina. Game changer total.",
                rating: 5,
              },
              {
                name: "Laura Martín",
                role: "Product Manager",
                company: "E-commerce Plus",
                avatar: "LM",
                avatarColor: "bg-pink-500",
                testimonial:
                  "Los analytics en tiempo real nos ayudaron a identificar cuellos de botella que no sabíamos que existían. Mejoramos nuestro time-to-market en un 35%.",
                rating: 5,
              },
              {
                name: "Roberto Silva",
                role: "Operations Director",
                company: "Global Logistics",
                avatar: "RS",
                avatarColor: "bg-indigo-500",
                testimonial:
                  "Gestionar equipos en 3 continentes era un caos. Con Taskly coordinamos todo perfectamente. La visibilidad y control que tenemos ahora es impresionante.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group bg-white relative overflow-hidden animate-in slide-in-from-bottom-4 duration-800`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Floating background elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-indigo-100/30 to-blue-100/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-br from-purple-100/20 to-pink-100/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardContent className="p-8 relative z-10">
                  {/* Rating Stars */}
                  <div className="flex items-center mb-4">
                    {Array.from({ length: testimonial.rating }).map(
                      (_, starIndex) => (
                        <Star
                          key={starIndex}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ),
                    )}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-gray-700 mb-6 text-base leading-relaxed italic group-hover:text-gray-800 transition-colors duration-300">
                    "{testimonial.testimonial}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-14 h-14 ${testimonial.avatarColor} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-indigo-600 font-medium">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Company Logos */}
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-8 font-medium">
              Empresas que confían en Taskly
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 hover:opacity-80 transition-opacity duration-300">
              {[
                { name: "TechCorp", logo: "TC" },
                { name: "InnovateLabs", logo: "IL" },
                { name: "CreativeHub", logo: "CH" },
                { name: "DataFlow", logo: "DF" },
                { name: "CloudWorks", logo: "CW" },
                { name: "NextGen", logo: "NG" },
              ].map((company, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 group"
                >
                  <div className="w-10 h-10 bg-gray-600 text-white rounded-lg flex items-center justify-center font-bold text-sm group-hover:bg-indigo-600 transition-colors duration-300">
                    {company.logo}
                  </div>
                  <span className="text-gray-700 font-semibold group-hover:text-indigo-600 transition-colors duration-300">
                    {company.name}
                  </span>
                </div>
              ))}
            </div>
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
