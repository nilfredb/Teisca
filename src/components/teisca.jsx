import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  MessageCircle,
  Home,
  Users,
  Building,
  Wrench,
  Star,
  ChevronDown,
  Filter,
  Eye,
  Award,
  Zap,
  Shield,
  Crown,
} from "lucide-react";

const TeiscaWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const properties = [
    {
      id: 1,
      name: "Villa Paradise Estate",
      type: "villa",
      price: "$2,500,000",
      location: "Cap Cana",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500&h=300&fit=crop",
      bedrooms: 5,
      bathrooms: 6,
      area: "450m²",
      status: "Exclusivo",
      featured: true,
    },
    {
      id: 2,
      name: "Elite Oceanfront Residence",
      type: "apartment",
      price: "$850,000",
      location: "Punta Cana",
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=300&fit=crop",
      bedrooms: 3,
      bathrooms: 3,
      area: "180m²",
      status: "Disponible",
    },
    {
      id: 3,
      name: "Premium Beachfront Land",
      type: "land",
      price: "$450,000",
      location: "Bávaro",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&h=300&fit=crop",
      area: "1,200m²",
      status: "Exclusivo",
    },
    {
      id: 4,
      name: "Majestic Villa Oceanfront",
      type: "villa",
      price: "$3,200,000",
      location: "Casa de Campo",
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500&h=300&fit=crop",
      bedrooms: 6,
      bathrooms: 7,
      area: "580m²",
      status: "Nuevo",
      featured: true,
    },
    {
      id: 5,
      name: "Luxury Sky Penthouse",
      type: "apartment",
      price: "$1,200,000",
      location: "Santo Domingo",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&h=300&fit=crop",
      bedrooms: 4,
      bathrooms: 4,
      area: "280m²",
      status: "Preventa",
    },
    {
      id: 6,
      name: "Paradise Coastal Estate",
      type: "land",
      price: "$890,000",
      location: "Samaná",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
      area: "2,000m²",
      status: "Exclusivo",
    },
  ];

  const projects = [
    {
      id: 1,
      name: "Residencial Paraíso Collection",
      status: "Completado",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&fit=crop",
      description: "Complejo residencial de lujo con 50 villas exclusivas",
      investment: "$25M",
      year: "2023",
    },
    {
      id: 2,
      name: "Torre Esmeralda Luxury",
      status: "En Construcción",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop",
      description: "Torre de apartamentos de 25 pisos en zona exclusiva",
      investment: "$45M",
      year: "2024",
    },
    {
      id: 3,
      name: "Marina Bay Resort & Residences",
      status: "En Desarrollo",
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=300&fit=crop",
      description: "Resort de ultra lujo con marina privada",
      investment: "$80M",
      year: "2025",
    },
  ];

  const services = [
    {
      icon: <Crown className="w-10 h-10" />,
      title: "Diseño Arquitectónico Exclusivo",
      description:
        "Creamos obras maestras arquitectónicas únicas que definen el futuro del lujo residencial",
      features: [
        "Diseño personalizado",
        "Tecnología 3D",
        "Consultoría especializada",
      ],
    },
    {
      icon: <Building className="w-10 h-10" />,
      title: "Construcción Premium",
      description:
        "Construcción de la más alta calidad con materiales exclusivos y acabados de lujo",
      features: [
        "Materiales premium",
        "Gestión integral",
        "Garantía extendida",
      ],
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Inversión Inteligente",
      description:
        "Asesoría experta en las mejores oportunidades de inversión inmobiliaria del Caribe",
      features: [
        "ROI garantizado",
        "Mercado exclusivo",
        "Portafolio diversificado",
      ],
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Gestión Patrimonial",
      description:
        "Administración completa y protección de tu patrimonio inmobiliario con estándares internacionales",
      features: ["Gestión 24/7", "Mantenimiento premium", "Seguridad avanzada"],
    },
  ];

  const testimonials = [
    {
      name: "Sofía Martínez",
      role: "CEO & Inversionista",
      comment:
        "Teisca no solo construyó mi villa, creó mi santuario personal. La atención al detalle y el nivel de acabados superó todas mis expectativas. Una inversión que cambió mi vida.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
      investment: "$3.2M",
    },
    {
      name: "Ricardo Fernández",
      role: "Empresario Internacional",
      comment:
        "La experiencia con Teisca fue excepcional. Su equipo transformó mi visión en una realidad que excede mis sueños más ambiciosos. Calidad mundial en el Caribe.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      investment: "$4.5M",
    },
    {
      name: "Isabella Rodriguez",
      role: "Arquitecta & Propietaria",
      comment:
        "Como arquitecta, puedo apreciar la excelencia en cada detalle. Teisca elevó mis estándares de lo que significa verdadero lujo residencial.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      investment: "$2.8M",
    },
  ];

  const awards = [
    {
      title: "Best Luxury Developer 2023",
      org: "Caribbean Real Estate Awards",
    },
    { title: "Excellence in Design", org: "International Architecture Prize" },
    {
      title: "Premium Construction Award",
      org: "Dominican Construction Guild",
    },
    {
      title: "Innovation in Luxury Living",
      org: "Latin America Property Summit",
    },
  ];

  const filteredProperties =
    activeFilter === "all"
      ? properties
      : properties.filter((property) => property.type === activeFilter);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-amber-50"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(251, 191, 36, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(251, 191, 36, 0.1) 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      {/* Header Premium */}
      <header
        className={`fixed top-0 w-full z-40 transition-all duration-700 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo Premium */}
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl flex items-center justify-center shadow-xl transform group-hover:scale-105 transition-all duration-300">
                  <span className="text-white font-bold text-xl tracking-wider">
                    T
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-black rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-all duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent tracking-tight leading-tight">
                  Teisca
                </span>
                <div className="text-xs text-gray-500 font-medium tracking-wider uppercase leading-none -mt-1">
                  Luxury Living
                </div>
              </div>
            </div>

            {/* Navigation Premium */}
            <nav className="hidden lg:flex items-center space-x-8">
              {[
                "Inicio",
                "Sobre Nosotros",
                "Villas",
                "Proyectos",
                "Servicios",
                "Contacto",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    scrollToSection(item.toLowerCase().replace(" ", "-"))
                  }
                  className="relative group text-gray-700 hover:text-gray-900 font-medium transition-all duration-300 text-sm py-2 px-1"
                >
                  <span className="relative z-10">{item}</span>
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-gray-700 to-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </button>
              ))}
            </nav>

            {/* CTA & Mobile Menu */}
            <div className="flex items-center space-x-3">
              {/* CTA Button - Hidden on mobile */}
              <button
                onClick={() => scrollToSection("contacto")}
                className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Consulta</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2.5 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative w-5 h-5">
                  <span
                    className={`absolute block w-5 h-0.5 bg-white transform transition-all duration-300 ${
                      isMenuOpen ? "rotate-45 translate-y-2" : "translate-y-0"
                    }`}
                  ></span>
                  <span
                    className={`absolute block w-5 h-0.5 bg-white transform transition-all duration-300 ${
                      isMenuOpen ? "opacity-0" : "translate-y-1.5"
                    }`}
                  ></span>
                  <span
                    className={`absolute block w-5 h-0.5 bg-white transform transition-all duration-300 ${
                      isMenuOpen ? "-rotate-45 translate-y-2" : "translate-y-3"
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu Premium */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-500 ${
              isMenuOpen
                ? "max-h-96 opacity-100 mt-4"
                : "max-h-0 opacity-0 mt-0"
            }`}
          >
            <nav className="pb-4 border-t border-gray-200 bg-white/95 backdrop-blur-md rounded-xl shadow-xl">
              <div className="flex flex-col space-y-1 pt-4 px-3">
                {[
                  "Inicio",
                  "Sobre Nosotros",
                  "Villas",
                  "Proyectos",
                  "Servicios",
                  "Contacto",
                ].map((item, index) => (
                  <button
                    key={item}
                    onClick={() =>
                      scrollToSection(item.toLowerCase().replace(" ", "-"))
                    }
                    className="group text-left py-3 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-300 text-sm font-medium"
                    style={{
                      animationDelay: `${index * 50}ms`,
                      opacity: isMenuOpen ? 1 : 0,
                      transform: isMenuOpen
                        ? "translateY(0)"
                        : "translateY(-10px)",
                    }}
                  >
                    {item}
                  </button>
                ))}

                {/* Mobile CTA */}
                <div className="pt-3 px-4">
                  <button
                    onClick={() => {
                      scrollToSection("contacto");
                      setIsMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg text-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Consulta Premium</span>
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Premium */}
      <section
        id="inicio"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background with Parallax */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&h=1080&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-gray-500/20 to-gray-700/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-gray-600/10 to-gray-800/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

        <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8">
            <Crown className="w-5 h-5 text-gray-300" />
            <span className="text-sm font-medium">
              Líder en Lujo Inmobiliario del Caribe
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Tu nuevo estilo
            </span>
            <br />
            <span className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
              de vida comienza aquí
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-gray-200">
            Creamos experiencias residenciales extraordinarias que redefinen el
            concepto de lujo tropical. Cada propiedad es una obra maestra
            diseñada para quienes exigen lo excepcional.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => scrollToSection("villas")}
              className="group relative bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10">Explorar Colección</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>

            <button
              onClick={() => scrollToSection("contacto")}
              className="group relative border-2 border-white/30 text-white hover:bg-white hover:text-black font-bold px-10 py-5 rounded-2xl transition-all duration-300 backdrop-blur-sm"
            >
              <span className="flex items-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Consulta Privada
              </span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-300">200+</div>
              <div className="text-sm text-gray-300 uppercase tracking-wider">
                Proyectos Exclusivos
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-300">$2B+</div>
              <div className="text-sm text-gray-300 uppercase tracking-wider">
                Valor Desarrollado
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-300">15+</div>
              <div className="text-sm text-gray-300 uppercase tracking-wider">
                Años Liderando
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/60" />
        </div>
      </section>

      {/* Awards Banner */}
      <section className="py-12 bg-gradient-to-r from-gray-50 via-white to-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Award className="w-6 h-6 text-gray-700" />
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
              Reconocimientos Internacionales
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-white/50 backdrop-blur-sm p-4 rounded-lg border border-gray-200"
              >
                <div className="text-sm font-bold text-gray-800">
                  {award.title}
                </div>
                <div className="text-xs text-gray-600">{award.org}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Nosotros Premium */}
      <section
        id="sobre-nosotros"
        className="py-24 bg-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-transparent"></div>

        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">
                <Crown className="w-4 h-4" />
                <span>Excelencia Desde 2009</span>
              </div>

              <h2 className="text-5xl font-bold text-gray-800 leading-tight">
                Redefiniendo el
                <span className="block bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                  Lujo Caribeño
                </span>
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed">
                En Teisca, no solo construimos propiedades; creamos legados.
                Cada proyecto representa la culminación de décadas de
                experiencia, innovación arquitectónica y un compromiso
                inquebrantable con la excelencia.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Nuestro equipo multidisciplinario de visionarios, arquitectos de
                renombre mundial e ingenieros especializados trabaja para
                materializar sueños que trascienden las expectativas más
                exigentes del mercado de ultra lujo.
              </p>

              {/* Premium Features */}
              <div className="space-y-4">
                {[
                  "Diseños arquitectónicos exclusivos y personalizados",
                  "Materiales de la más alta calidad internacional",
                  "Tecnología domótica y sostenibilidad avanzada",
                  "Servicio de concierge y gestión patrimonial",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Enhanced Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                    200+
                  </div>
                  <div className="text-sm text-gray-600 uppercase tracking-wider">
                    Proyectos Premium
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                    98%
                  </div>
                  <div className="text-sm text-gray-600 uppercase tracking-wider">
                    Satisfacción Cliente
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                    15+
                  </div>
                  <div className="text-sm text-gray-600 uppercase tracking-wider">
                    Años Liderando
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Image Section */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop"
                  alt="Equipo Teisca"
                  className="rounded-2xl shadow-2xl w-full"
                />

                {/* Floating Card */}
                <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-2xl border border-gray-200">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center">
                      <Crown className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-800">A+</div>
                      <div className="text-sm text-gray-600">Rating Luxury</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Effects */}
              <div className="absolute -inset-4 bg-gradient-to-br from-gray-400/20 to-gray-600/20 rounded-3xl blur-2xl -z-10"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-gray-300/10 to-gray-700/10 rounded-full blur-3xl -z-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Villas Premium */}
      <section id="villas" className="py-24 bg-gray-50 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Home className="w-4 h-4" />
              <span>Colección Exclusiva</span>
            </div>

            <h2 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Propiedades de
              <span className="block bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                Ultra Lujo
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Cada propiedad en nuestra colección representa la cúspide del
              diseño arquitectónico y el refinamiento, ubicadas en los destinos
              más codiciados del Caribe
            </p>
          </div>

          {/* Premium Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {[
              { key: "all", label: "Toda la Colección", icon: Crown },
              { key: "villa", label: "Villas Exclusivas", icon: Home },
              {
                key: "apartment",
                label: "Residencias Premium",
                icon: Building,
              },
              { key: "land", label: "Terrenos Únicos", icon: MapPin },
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`group flex items-center space-x-2 px-8 py-4 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === filter.key
                    ? "bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-xl"
                    : "bg-white/70 text-gray-700 hover:bg-white shadow-lg backdrop-blur-sm"
                }`}
              >
                <filter.icon className="w-5 h-5" />
                <span>{filter.label}</span>
              </button>
            ))}
          </div>

          {/* Properties Grid Premium */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <div
                key={property.id}
                className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Featured Badge */}
                {property.featured && (
                  <div className="absolute top-6 left-6 z-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    <Crown className="w-4 h-4 inline mr-1" />
                    Exclusivo
                  </div>
                )}

                {/* Status Badge */}
                <div className="absolute top-6 right-6 z-20">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium shadow-lg ${
                      property.status === "Exclusivo"
                        ? "bg-purple-500 text-white"
                        : property.status === "Nuevo"
                        ? "bg-green-500 text-white"
                        : property.status === "Preventa"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-500 text-white"
                    }`}
                  >
                    {property.status}
                  </span>
                </div>

                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Price */}
                  <div className="text-3xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent mb-4">
                    {property.price}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {property.name}
                  </h3>

                  <p className="text-gray-600 mb-6 flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-gray-600" />
                    {property.location}
                  </p>

                  {/* Property Details */}
                  <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                    {property.bedrooms && (
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-lg font-bold text-gray-800">
                          {property.bedrooms}
                        </div>
                        <div className="text-xs text-gray-600 uppercase">
                          Habitaciones
                        </div>
                      </div>
                    )}
                    {property.bathrooms && (
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-lg font-bold text-gray-800">
                          {property.bathrooms}
                        </div>
                        <div className="text-xs text-gray-600 uppercase">
                          Baños
                        </div>
                      </div>
                    )}
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-lg font-bold text-gray-800">
                        {property.area}
                      </div>
                      <div className="text-xs text-gray-600 uppercase">
                        Área
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white font-bold py-4 rounded-2xl transition-all duration-300 flex items-center justify-center group-hover:shadow-lg transform group-hover:scale-105">
                    <Eye className="w-5 h-5 mr-2" />
                    Ver Detalles Exclusivos
                  </button>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-600/0 via-gray-600/0 to-gray-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos Premium */}
      <section
        id="proyectos"
        className="py-24 bg-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 to-transparent"></div>

        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Building className="w-4 h-4" />
              <span>Portfolio Exclusivo</span>
            </div>

            <h2 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Proyectos
              <span className="block bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                Emblemáticos
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Cada desarrollo representa un hito en la arquitectura de lujo
              caribeña, estableciendo nuevos estándares de elegancia y
              sofisticación
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Investment Badge */}
                  <div className="absolute top-6 right-6 bg-black/30 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold">
                    {project.investment}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        {project.name}
                      </h3>
                      <p className="text-gray-600 font-medium">
                        {project.year}
                      </p>
                    </div>

                    <span
                      className={`px-4 py-2 rounded-full text-sm font-bold shadow-lg ${
                        project.status === "Completado"
                          ? "bg-gradient-to-r from-green-500 to-green-600 text-white"
                          : project.status === "En Construcción"
                          ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                          : "bg-gradient-to-r from-gray-500 to-gray-600 text-white"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <button className="w-full bg-gray-100 hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-800 text-gray-800 hover:text-white font-bold py-4 rounded-2xl transition-all duration-300 transform hover:scale-105">
                    Ver Proyecto Completo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios Premium */}
      <section id="servicios" className="py-24 bg-gray-50 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Wrench className="w-4 h-4" />
              <span>Servicios Exclusivos</span>
            </div>

            <h2 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Experiencia
              <span className="block bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                360° Premium
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ofrecemos un ecosistema completo de servicios de lujo diseñado
              para superar las expectativas más exigentes en cada etapa de tu
              proyecto
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 overflow-hidden"
              >
                {/* Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center mb-8 text-white shadow-xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  <h3 className="text-3xl font-bold text-gray-800 mb-6">
                    {service.title}
                  </h3>

                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios Premium */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 to-transparent"></div>

        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              <span>Testimonios Exclusivos</span>
            </div>

            <h2 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Clientes que
              <span className="block bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                Confían en Nosotros
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              La satisfacción de nuestros clientes más exigentes es el
              testimonio más valioso de nuestro compromiso con la excelencia
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 overflow-hidden"
              >
                {/* Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  {/* Profile */}
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-gray-200"
                    />
                    <div>
                      <h4 className="text-xl font-bold text-gray-800">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 font-medium">
                        {testimonial.role}
                      </p>
                      <p className="text-sm text-gray-500">
                        Inversión: {testimonial.investment}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 text-gray-600 fill-current"
                      />
                    ))}
                  </div>

                  {/* Comment */}
                  <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                    "{testimonial.comment}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto Premium */}
      <section id="contacto" className="py-24 bg-gray-50 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4" />
              <span>Consulta Exclusiva</span>
            </div>

            <h2 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Conecta con
              <span className="block bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                Nuestros Expertos
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Agenda una consulta privada with nuestros especialistas en bienes
              raíces de lujo y descubre oportunidades exclusivas diseñadas para
              ti
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Premium Form */}
            <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-200">
              <h3 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
                <Crown className="w-8 h-8 text-gray-700 mr-3" />
                Consulta Privada
              </h3>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Nombre completo"
                      className="w-full p-5 border-2 border-gray-200 rounded-2xl bg-gray-50 text-gray-800 focus:ring-2 focus:ring-gray-600 focus:border-gray-600 transition-all"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Email corporativo"
                      className="w-full p-5 border-2 border-gray-200 rounded-2xl bg-gray-50 text-gray-800 focus:ring-2 focus:ring-gray-600 focus:border-gray-600 transition-all"
                    />
                  </div>
                </div>

                <input
                  type="tel"
                  placeholder="Teléfono de contacto"
                  className="w-full p-5 border-2 border-gray-200 rounded-2xl bg-gray-50 text-gray-800 focus:ring-2 focus:ring-gray-600 focus:border-gray-600 transition-all"
                />

                <select className="w-full p-5 border-2 border-gray-200 rounded-2xl bg-gray-50 text-gray-800 focus:ring-2 focus:ring-gray-600 focus:border-gray-600 transition-all">
                  <option>Tipo de consulta exclusiva</option>
                  <option>Adquisición de villa de lujo</option>
                  <option>Inversión inmobiliaria premium</option>
                  <option>Desarrollo arquitectónico personalizado</option>
                  <option>Gestión patrimonial inmobiliaria</option>
                </select>

                <div className="relative">
                  <input
                    type="text"
                    placeholder="Presupuesto de inversión"
                    className="w-full p-5 border-2 border-gray-200 rounded-2xl bg-gray-50 text-gray-800 focus:ring-2 focus:ring-gray-600 focus:border-gray-600 transition-all"
                  />
                </div>

                <textarea
                  placeholder="Cuéntanos sobre tu proyecto soñado..."
                  rows="4"
                  className="w-full p-5 border-2 border-gray-200 rounded-2xl bg-gray-50 text-gray-800 focus:ring-2 focus:ring-gray-600 focus:border-gray-600 transition-all resize-none"
                ></textarea>

                <button
                  onClick={() =>
                    alert(
                      "¡Consulta enviada! Un especialista te contactará en las próximas 24 horas."
                    )
                  }
                  className="w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white font-bold py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center"
                >
                  <Crown className="w-5 h-5 mr-2" />
                  Solicitar Consulta Exclusiva
                </button>
              </div>
            </div>

            {/* Premium Contact Info */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Contacto Directo
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center group">
                    <div className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">Línea Ejecutiva</p>
                      <p className="text-gray-600 font-semibold">
                        +1 (809) 123-4567
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center group">
                    <div className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">Email Ejecutivo</p>
                      <p className="text-gray-600 font-semibold">
                        Teishondalmasi@gmail.com / teiscasrl@hotmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center group">
                    <div className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">Oficina Central</p>
                      <p className="text-gray-600">
                        Torre Empresarial, Piso 25
                        <br />
                        Av. Abraham Lincoln #123
                        <br />
                        Piantini, Santo Domingo
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Premium Map */}
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Ubicación Premium
                </h3>
                <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-600 mx-auto mb-2" />
                    <p className="text-gray-600">Mapa Interactivo</p>
                    <p className="text-sm text-gray-500">
                      Zona Exclusiva de Piantini
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Premium */}
      <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 via-transparent to-transparent"></div>

        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center shadow-xl">
                  <span className="text-white font-bold text-2xl">T</span>
                </div>
                <div>
                  <span className="text-3xl font-bold">Teisca</span>
                  <div className="text-xs text-amber-400 font-medium tracking-widest uppercase">
                    Luxury Living
                  </div>
                </div>
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed">
                Pioneros en la creación de experiencias residenciales de ultra
                lujo que redefinen el concepto de vida exclusiva en el Caribe.
              </p>

              <div className="flex space-x-4">
                {[Facebook, Instagram, Linkedin].map((Social, index) => (
                  <div
                    key={index}
                    className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-lg"
                  >
                    <Social className="w-5 h-5 text-white" />
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-amber-400">
                Servicios Exclusivos
              </h4>
              <ul className="space-y-3">
                {[
                  "Villas de Ultra Lujo",
                  "Residencias Premium",
                  "Desarrollos Exclusivos",
                  "Arquitectura Personalizada",
                  "Inversión Inmobiliaria",
                  "Gestión Patrimonial",
                ].map((service, index) => (
                  <li
                    key={index}
                    className="text-gray-400 hover:text-amber-400 cursor-pointer transition-colors flex items-center"
                  >
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-3"></div>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-amber-400">
                Ubicaciones Premium
              </h4>
              <ul className="space-y-3">
                {[
                  "Punta Cana Resort",
                  "Cap Cana Marina",
                  "Casa de Campo",
                  "Santo Domingo Elite",
                  "Samaná Exclusive",
                  "Bávaro Luxury",
                ].map((location, index) => (
                  <li
                    key={index}
                    className="text-gray-400 hover:text-amber-400 cursor-pointer transition-colors flex items-center"
                  >
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-3"></div>
                    {location}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-amber-400">
                Contacto Ejecutivo
              </h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-amber-500 mr-3" />
                  <span className="text-gray-300">+1 (809) 805-1380</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-amber-500 mr-3" />
                  <span className="text-gray-300">Teishondalmasi@gmail.com / teiscasrl@hotmail.com</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-amber-500 mr-3 mt-1" />
                  <div className="text-gray-300">
                    Calle Castillo Márquez #39 Plaza El Paseo, Módulo 6, 2do. Nivel | La Romana, Rep. Dom
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="grid md:grid-cols-2 gap-4 items-center">
              <div className="text-gray-400">
                <p>
                  &copy; 2024 Teisca Luxury Living. Todos los derechos
                  reservados.
                </p>
              </div>
              <div className="text-gray-400 md:text-right">
                <span className="hover:text-amber-400 cursor-pointer mr-6 transition-colors">
                  Aviso Legal
                </span>
                <span className="hover:text-amber-400 cursor-pointer transition-colors">
                  Política de Privacidad
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Premium WhatsApp Button */}
      <a
        href="https://wa.me/18091234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full flex items-center justify-center shadow-2xl z-50 transition-all duration-300 transform hover:scale-110 group"
      >
        <MessageCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
        <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-full blur-lg opacity-25 group-hover:opacity-40 transition-opacity"></div>
      </a>
    </div>
  );
};

export default TeiscaWebsite;
