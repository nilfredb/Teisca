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
  Target,
  Lightbulb,
  Users,
  Handshake,
  Shield,
  Heart,
  ChevronDown,
  Crown,
  ArrowUpRight,
  CheckCircle,
  Award,
  Building,
  Home,
  Star,
} from "lucide-react";

// =================================================================================
// COMPONENTE PRINCIPAL DE LA PÁGINA SOBRE NOSOTROS
// =================================================================================
const AboutUsPage = () => {
  // --- Estados del Componente ---
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  // --- VALORES DE LA EMPRESA ---
  const companyValues = [
    {
      icon: Handshake,
      title: "Compromiso",
      description: "Cumplir con lo acordado en tiempo, calidad y servicio.",
    },
    {
      icon: Shield,
      title: "Calidad",
      description:
        "Utilizar materiales y técnicas que garanticen resultados duraderos y seguros.",
    },
    {
      icon: Shield,
      title: "Transparencia",
      description: "Comunicación clara y honesta en todo el proceso.",
    },
    {
      icon: Lightbulb,
      title: "Innovación",
      description: "Implementar diseños y soluciones constructivas modernas.",
    },
    {
      icon: Users,
      title: "Trabajo en equipo",
      description:
        "Colaborar de forma eficiente con clientes, proveedores y colaboradores.",
    },
    {
      icon: Heart,
      title: "Responsabilidad social",
      description: "Aportar al desarrollo y bienestar de nuestra comunidad.",
    },
  ];

  // --- EFECTOS Y LÓGICA ---
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detectar sección activa
      const sections = [
        "inicio",
        "mision-vision",
        "valores",
        "propuesta-valor",
      ];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-[#f4f4f4] min-h-screen font-sans antialiased text-gray-800">
      {/* ======================= HEADER MEJORADO ======================= */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-lg shadow-lg py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo mejorado */}
            <div
              className="flex items-center space-x-2 cursor-pointer group"
              onClick={() => scrollToSection("inicio")}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300 group-hover:scale-110">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <div>
                <span className="text-2xl font-bold tracking-tight group-hover:text-blue-600 transition-colors">
                  TEISCA
                </span>
                <span className="text-blue-600 font-bold">.</span>
              </div>
            </div>

            {/* Navegación desktop mejorada */}
            <nav className="hidden md:flex items-center space-x-1">
              {[
                { id: "inicio", label: "Inicio" },
                { id: "mision-vision", label: "Misión y Visión" },
                { id: "valores", label: "Valores" },
                { id: "propuesta-valor", label: "Propuesta de Valor" },
                { id: "contacto", label: "Contacto" },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
                  )}
                </a>
              ))}
            </nav>

            {/* Botón CTA mejorado */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => scrollToSection("contacto")}
                className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-2.5 rounded-xl font-semibold hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-800/30 flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                Contáctanos
              </button>
            </div>

            {/* Botón menú móvil mejorado */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-800" />
              ) : (
                <Menu className="w-6 h-6 text-gray-800" />
              )}
            </button>
          </div>
        </div>

        {/* Menú móvil mejorado con animación */}
        <div
          className={`md:hidden bg-white/95 backdrop-blur-lg shadow-xl transition-all duration-500 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col p-6 space-y-3">
            {[
              { id: "inicio", label: "Inicio" },
              { id: "mision-vision", label: "Misión y Visión" },
              { id: "valores", label: "Valores" },
              { id: "propuesta-valor", label: "Propuesta de Valor" },
              { id: "contacto", label: "Contacto" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className={`py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => scrollToSection("contacto")}
              className="mt-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-3 rounded-xl font-semibold hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Contáctanos
            </button>
          </nav>
        </div>
      </header>

      <main>
        {/* ======================= HERO ======================= */}
        <section
          id="inicio"
          className="relative h-[70vh] flex items-center justify-center text-center bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1541888940225-cc363a9cf46c?w=1920&h=1080&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="relative z-10 text-white px-6 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
              Sobre <span className="text-blue-400">Nosotros</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-200">
              Conoce nuestra filosofía, valores y compromiso con la excelencia
              en cada proyecto.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => scrollToSection("mision-vision")}
                className="bg-blue-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105"
              >
                Nuestra Filosofía
              </button>
              <button
                onClick={() => scrollToSection("valores")}
                className="bg-transparent border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-all"
              >
                Nuestros Valores
              </button>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/70" />
          </div>
        </section>

        {/* ======================= MISIÓN Y VISIÓN ======================= */}
        <section id="mision-vision" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-extrabold tracking-tight mb-4">
                Misión y Visión
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Los pilares que guían nuestro trabajo y definen nuestro
                propósito como empresa.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-1 rounded-2xl inline-block mb-6">
                  <div className="bg-white p-1 rounded-xl">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 rounded-xl">
                      <Target className="w-16 h-16 mb-6" />
                      <h3 className="text-3xl font-bold mb-4">Misión</h3>
                      <p className="text-blue-100 text-lg leading-relaxed">
                        Brindar servicios de construcción, remodelación y diseño
                        de espacios que combinen calidad, seguridad y estética,
                        superando las expectativas de nuestros clientes y
                        contribuyendo al desarrollo y sus alrededores.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-1 rounded-2xl inline-block mb-6">
                  <div className="bg-white p-1 rounded-xl">
                    <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-xl">
                      <Lightbulb className="w-16 h-16 mb-6" />
                      <h3 className="text-3xl font-bold mb-4">Visión</h3>
                      <p className="text-gray-200 text-lg leading-relaxed">
                        Ser la empresa constructora líder en la región Este,
                        reconocida por su excelencia, innovación y compromiso
                        con cada proyecto, convirtiéndonos en la primera opción
                        para quienes buscan construir o renovar sus espacios.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================= VALORES ======================= */}
        <section id="valores" className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-extrabold tracking-tight mb-4">
                Nuestros Valores
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Los principios fundamentales que guían cada decisión y acción en
                nuestra empresa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {companyValues.map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================= PROPUESTA DE VALOR ======================= */}
        <section id="propuesta-valor" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-extrabold tracking-tight mb-4">
                  Propuesta de Valor
                </h2>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                  Lo que nos hace diferentes y por qué elegirnos para tu próximo
                  proyecto.
                </p>
              </div>

              <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-12 text-white">
                <div className="text-center">
                  <Building className="w-20 h-20 mx-auto mb-6 text-blue-400" />
                  <h3 className="text-3xl font-bold mb-6">
                    Transformamos Ideas en Realidad
                  </h3>
                  <p className="text-xl text-gray-200 leading-relaxed mb-10">
                    En Teisca Construcción transformamos ideas en obras reales,
                    ofreciendo un servicio integral desde el diseño hasta la
                    entrega final, con acompañamiento personalizado y precios
                    justos. Nuestro objetivo no es solo construir estructuras,
                    sino crear espacios que mejoren la vida de las personas.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Award className="w-8 h-8 text-blue-400" />
                      </div>
                      <h4 className="font-bold text-lg mb-2">
                        Calidad Superior
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Materiales premium y ejecución impecable
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-blue-400" />
                      </div>
                      <h4 className="font-bold text-lg mb-2">
                        Atención Personalizada
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Acompañamiento en cada etapa del proyecto
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-blue-400" />
                      </div>
                      <h4 className="font-bold text-lg mb-2">
                        Resultados Garantizados
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Cumplimos plazos y superamos expectativas
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <button
                      onClick={() => scrollToSection("contacto")}
                      className="bg-white text-gray-900 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center"
                    >
                      <Crown className="w-5 h-5 mr-2" />
                      Conversemos de tu Proyecto
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================= CONTACTO ======================= */}
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
                Agenda una consulta privada con nuestros especialistas y
                descubre cómo podemos llevar tu proyecto al siguiente nivel
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Formulario */}
              <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-200">
                <h3 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
                  <Crown className="w-8 h-8 text-gray-700 mr-3" />
                  Consulta de Proyectos
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
                    <option>Tipo de proyecto de interés</option>
                    <option>Proyecto Residencial</option>
                    <option>Proyecto Hotelero</option>
                    <option>Proyecto Industrial</option>
                    <option>Inversión Inmobiliaria</option>
                  </select>
                  <textarea
                    placeholder="Cuéntanos sobre tu proyecto ideal..."
                    rows="4"
                    className="w-full p-5 border-2 border-gray-200 rounded-2xl bg-gray-50 text-gray-800 focus:ring-2 focus:ring-gray-600 focus:border-gray-600 transition-all resize-none"
                  ></textarea>
                  <button
                    onClick={() =>
                      alert(
                        "¡Consulta enviada! Un especialista en proyectos te contactará en las próximas 24 horas."
                      )
                    }
                    className="w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white font-bold py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center"
                  >
                    <Crown className="w-5 h-5 mr-2" />
                    Solicitar Consulta de Proyectos
                  </button>
                </div>
              </div>

              {/* Información de Contacto */}
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
                        <p className="font-bold text-gray-800">
                          Línea Ejecutiva
                        </p>
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
                        <p className="font-bold text-gray-800">
                          Email de Proyectos
                        </p>
                        <p className="text-gray-600 font-semibold">
                          proyectos@teisca.com
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center group">
                      <div className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-800">
                          Oficina Central
                        </p>
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

                {/* Horario de Atención */}
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Horario de Atención
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Lunes - Viernes</span>
                      <span className="font-semibold">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sábados</span>
                      <span className="font-semibold">9:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Domingos</span>
                      <span className="font-semibold">Cita previa</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ======================= FOOTER ======================= */}
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
                    Construcción de Excelencia
                  </div>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Transformamos ideas en espacios que mejoran la vida de las
                personas con calidad, innovación y compromiso.
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

            {/* Servicios */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-amber-400">
                Servicios
              </h4>
              <ul className="space-y-3">
                {[
                  "Construcción Residencial",
                  "Remodelaciones",
                  "Diseño de Interiores",
                  "Proyectos Comerciales",
                  "Construcción Industrial",
                  "Asesoría de Proyectos",
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

            {/* Sobre Nosotros */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-amber-400">
                Sobre Nosotros
              </h4>
              <ul className="space-y-3">
                {[
                  "Misión y Visión",
                  "Nuestros Valores",
                  "Propuesta de Valor",
                  "Historia",
                  "Equipo",
                  "Certificaciones",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="text-gray-400 hover:text-amber-400 cursor-pointer transition-colors flex items-center"
                  >
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-amber-400">
                Contacto
              </h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-amber-500 mr-3" />
                  <span className="text-gray-300">+1 (809) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-amber-500 mr-3" />
                  <span className="text-gray-300">info@teisca.com</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-amber-500 mr-3 mt-1" />
                  <div className="text-gray-300">
                    Torre Empresarial, Piso 25
                    <br />
                    Av. Abraham Lincoln #123
                    <br />
                    Piantini, Santo Domingo
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="grid md:grid-cols-2 gap-4 items-center">
              <div className="text-gray-400">
                <p>
                  &copy; 2024 Teisca Construcción. Todos los derechos
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

      {/* ======================= Botón de WhatsApp ======================= */}
      <a
        href="https://wa.me/18091234567"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="group fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 transform hover:scale-110"
      >
        <MessageCircle className="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-110" />
        <span className="absolute w-full h-full bg-white/20 rounded-full animate-ping opacity-75 group-hover:opacity-0"></span>
      </a>
    </div>
  );
};

export default AboutUsPage;
