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
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    // Trigger entrance animations
    setTimeout(() => setIsVisible(true), 100);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    {
      label: "Tareas Completadas",
      value: 156,
      change: "+12% esta semana",
      trend: "up",
    },
    {
      label: "Proyectos Activos",
      value: 23,
      change: "3 nuevos este mes",
      trend: "up",
    },
    {
      label: "Miembros del Equipo",
      value: 47,
      change: "+5 este mes",
      trend: "up",
    },
  ];

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
              Nueva plataforma de gestión colaborativa
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
              TaskFlow es la herramienta todo-en-uno que necesitas para
              organizar tareas, colaborar en tiempo real y hacer un seguimiento
              del progreso de tus proyectos.
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
                Ver demo
              </Button>
            </div>

            <div
              className={`flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
              style={{ transitionDelay: "600ms" }}
            >
              {[
                { icon: CheckCircle, text: "Gratis por 14 días" },
                { icon: Shield, text: "Sin tarjeta de crédito" },
                { icon: Clock, text: "Configuración en 2 minutos" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center hover:text-primary-600 transition-colors duration-300"
                >
                  <item.icon className="h-4 w-4 text-green-500 mr-2" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Dashboard Preview */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 mt-16">
          <div
            className={`relative transform transition-all duration-1200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}`}
            style={{ transitionDelay: "700ms" }}
          >
            {/* Floating elements around dashboard */}
            <div
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg animate-bounce"
              style={{ animationDelay: "2s", animationDuration: "3s" }}
            >
              <TrendingUp className="h-8 w-8" />
            </div>

            <div className="absolute top-1/4 -left-6 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white shadow-lg animate-pulse">
              <MessageSquare className="h-6 w-6" />
            </div>

            <div
              className="absolute bottom-1/4 -right-8 w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg animate-bounce"
              style={{ animationDelay: "1s", animationDuration: "4s" }}
            >
              <Award className="h-8 w-8" />
            </div>

            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02]">
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full hover:bg-red-500 transition-colors duration-300 cursor-pointer"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full hover:bg-yellow-500 transition-colors duration-300 cursor-pointer"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full hover:bg-green-500 transition-colors duration-300 cursor-pointer"></div>
                  </div>
                  <div className="text-sm text-gray-500 font-medium">
                    TaskFlow Dashboard
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-600">En línea</span>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-primary-50/50 via-white to-blue-50/50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {stats.map((stat, index) => (
                    <Card
                      key={index}
                      className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
                    >
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium text-gray-600 group-hover:text-primary-600 transition-colors duration-300">
                          {stat.label}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold text-gray-900 mb-1">
                          {stat.value}
                        </div>
                        <p className="text-xs text-green-600 flex items-center">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          {stat.change}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Mini task list preview */}
                <div className="mt-6 bg-white rounded-xl p-4 shadow-sm">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">
                    Tareas Recientes
                  </h4>
                  <div className="space-y-2">
                    {[
                      {
                        task: "Revisar diseños de la nueva feature",
                        status: "completed",
                      },
                      {
                        task: "Llamada con el equipo de desarrollo",
                        status: "in-progress",
                      },
                      {
                        task: "Actualizar documentación del proyecto",
                        status: "pending",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                      >
                        <div
                          className={`w-3 h-3 rounded-full ${
                            item.status === "completed"
                              ? "bg-green-400"
                              : item.status === "in-progress"
                                ? "bg-yellow-400"
                                : "bg-gray-300"
                          }`}
                        />
                        <span className="text-sm text-gray-700">
                          {item.task}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section id="características" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Todo lo que necesitas para gestionar proyectos
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
              Herramientas poderosas diseñadas para equipos que buscan
              productividad y colaboración efectiva
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Colaboración en Tiempo Real",
                description:
                  "Trabaja con tu equipo simultáneamente. Comentarios, menciones y actualizaciones instantáneas.",
                color: "primary",
                delay: "100ms",
              },
              {
                icon: Calendar,
                title: "Gestión de Cronogramas",
                description:
                  "Planifica y visualiza cronogramas con diagramas de Gantt y calendarios integrados.",
                color: "green",
                delay: "200ms",
              },
              {
                icon: BarChart3,
                title: "Análisis y Reportes",
                description:
                  "Obtén insights detallados sobre el rendimiento de tu equipo y el progreso de proyectos.",
                color: "blue",
                delay: "300ms",
              },
              {
                icon: Zap,
                title: "Automatización",
                description:
                  "Automatiza tareas repetitivas y flujos de trabajo para maximizar la eficiencia del equipo.",
                color: "yellow",
                delay: "400ms",
              },
              {
                icon: Shield,
                title: "Seguridad Avanzada",
                description:
                  "Protección de datos empresarial con cifrado end-to-end y controles de acceso granulares.",
                color: "purple",
                delay: "500ms",
              },
              {
                icon: Globe,
                title: "Integraciones",
                description:
                  "Conecta con más de 100 herramientas populares: Slack, Google Drive, GitHub y más.",
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

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-blue-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Social Proof Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Equipos de todo el mundo confían en TaskFlow
            </h2>
            <p className="text-xl text-gray-600">
              Más de 10,000 equipos han mejorado su productividad con nuestra
              plataforma
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "María González",
                role: "Product Manager, TechCorp",
                content:
                  "TaskFlow ha transformado completamente la forma en que gestionamos nuestros proyectos. La colaboración en tiempo real es increíble.",
                avatar: "MG",
                bgColor: "bg-primary-500",
                delay: "100ms",
              },
              {
                name: "Juan López",
                role: "CTO, StartupXYZ",
                content:
                  "La mejor herramienta de gestión de proyectos que hemos usado. Intuitiva, poderosa y perfecta para equipos remotos.",
                avatar: "JL",
                bgColor: "bg-green-500",
                delay: "300ms",
              },
              {
                name: "Ana Rodríguez",
                role: "Director Ops, Global Inc",
                content:
                  "Hemos aumentado nuestra productividad en un 40% desde que empezamos a usar TaskFlow. Altamente recomendado.",
                avatar: "AR",
                bgColor: "bg-blue-500",
                delay: "500ms",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group opacity-0 animate-in slide-in-from-bottom-6`}
                style={{
                  animationDelay: testimonial.delay,
                  animationDuration: "800ms",
                  animationFillMode: "forwards",
                }}
              >
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-current transform hover:scale-125 transition-transform duration-200"
                          style={{ animationDelay: `${i * 100}ms` }}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600 font-semibold">
                      5.0
                    </span>
                  </div>
                  <CardDescription className="text-gray-700 mb-6 text-base leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    "{testimonial.content}"
                  </CardDescription>
                  <div className="flex items-center">
                    <div
                      className={`w-12 h-12 ${testimonial.bgColor} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                    >
                      {testimonial.avatar}
                    </div>
                    <div className="ml-4">
                      <p className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 via-primary-600 to-blue-600 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-3/4 left-1/3 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-in slide-in-from-bottom-4 duration-800">
            ¿Listo para transformar la gestión de tus proyectos?
          </h2>
          <p className="text-xl mb-8 text-primary-100 animate-in slide-in-from-bottom-4 duration-800 delay-200">
            Únete a miles de equipos que ya están trabajando de manera más
            inteligente con TaskFlow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in slide-in-from-bottom-4 duration-800 delay-400">
            <Button
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100 hover:text-primary-700 px-8 py-4 text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 group"
            >
              <Rocket className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              Comenzar gratis ahora
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 text-lg backdrop-blur-sm transition-all duration-300 group"
            >
              <MessageSquare className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              Hablar con ventas
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center shadow-lg">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <span className="ml-3 text-2xl font-bold">TaskFlow</span>
              </div>
              <p className="text-gray-400 mb-6 text-lg leading-relaxed max-w-md">
                La herramienta de gestión de proyectos que tu equipo necesita
                para alcanzar sus objetivos más ambiciosos.
              </p>
              <div className="flex space-x-4">
                {["Producto", "Empresa", "Soporte"].map((section) => (
                  <Button
                    key={section}
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300"
                  >
                    {section}
                  </Button>
                ))}
              </div>
            </div>

            {[
              {
                title: "Producto",
                links: ["Características", "Precios", "Integraciones", "API"],
              },
              {
                title: "Soporte",
                links: [
                  "Centro de ayuda",
                  "Documentación",
                  "Estado del servicio",
                  "Seguridad",
                ],
              },
            ].map((column, index) => (
              <div key={index}>
                <h3 className="font-bold mb-4 text-lg">{column.title}</h3>
                <ul className="space-y-3">
                  {column.links.map((link) => (
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
            ))}
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              &copy; 2024 TaskFlow. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-gray-400">Hecho con</span>
              <span className="text-red-400 animate-pulse">❤️</span>
              <span className="text-gray-400">
                para equipos extraordinarios
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
