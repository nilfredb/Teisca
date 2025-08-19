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
  Building,
  Wrench,
  Star,
  ChevronDown,
  Award,
  Crown,
  ArrowUpRight,
  CheckCircle,
  Hourglass,
  BedDouble,
  Factory,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// =================================================================================
// SUB-COMPONENTE PARA LA TARJETA DE PROYECTO (Enfocado en Galería)
// =================================================================================
const ProjectCard = ({ project }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePosition({ x, y });
  };

  return (
    <div
      className="group relative block w-full h-[600px] rounded-2xl overflow-hidden cursor-pointer shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
      style={{ perspective: "1000px" }}
    >
      <div
        className="absolute inset-0 w-full h-full transition-transform duration-500 ease-out group-hover:scale-105"
        style={{
          backgroundImage: `url(${project.imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateX(${-mousePosition.x * 10}px) translateY(${
            -mousePosition.y * 10
          }px)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full p-8 text-white">
        <div className="transform transition-all duration-500 ease-in-out group-hover:translate-y-0 translate-y-20 opacity-0 group-hover:opacity-100">
          <h3 className="text-4xl font-bold tracking-tight">{project.title}</h3>
          <div className="flex items-center text-gray-200 mt-2">
            <MapPin className="w-5 h-5 mr-2" />
            <span>{project.location}</span>
          </div>
        </div>
        <div className="absolute bottom-8 right-8 left-8 transform transition-all duration-500 ease-in-out translate-y-full group-hover:translate-y-0">
          <button className="flex items-center justify-center w-full py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-lg font-semibold transition-colors duration-300">
            Explorar Proyecto
            <ArrowUpRight className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:rotate-45" />
          </button>
        </div>
      </div>
    </div>
  );
};

// =================================================================================
// COMPONENTE PRINCIPAL DEL SITIO WEB COMPLETO
// =================================================================================
const TeiscaCompleteWebsite = () => {
  // --- Estados del Componente ---
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeProjectFilter, setActiveProjectFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState([]);

  // --- DATOS ACTUALIZADOS para la galería por tipo de proyecto ---
  const projectsData = [
    {
      id: 1,
      title: "Torre Altavista",
      location: "Piantini, Santo Domingo",
      category: "residencial",
      imageUrl:
        "https://images.unsplash.com/photo-1599493343603-88b53174246a?w=800&h=1000&fit=crop",
    },
    {
      id: 2,
      title: "Paradisus Resort",
      location: "Samaná",
      category: "hotel",
      imageUrl:
        "https://images.unsplash.com/photo-1562790351-d273a961e0e9?w=800&h=1000&fit=crop",
    },
    {
      id: 3,
      title: "Nave Industrial Caribe",
      location: "Parque Industrial Duarte",
      category: "industrial",
      imageUrl:
        "https://images.unsplash.com/photo-1580982327772-d6eb154a6797?w=800&h=1000&fit=crop",
    },
    {
      id: 4,
      title: "Residencial Olas del Mar",
      location: "Juan Dolio",
      category: "residencial",
      imageUrl:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=1000&fit=crop",
    },
    {
      id: 5,
      title: "Grand Hotel Colonial",
      location: "Zona Colonial, Santo Domingo",
      category: "hotel",
      imageUrl:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=1000&fit=crop",
    },
    {
      id: 6,
      title: "Centro Logístico del Este",
      location: "La Romana",
      category: "industrial",
      imageUrl:
        "https://images.unsplash.com/photo-1568448494922-4a1a3fa47379?w=800&h=1000&fit=crop",
    },
  ];

  // --- FILTROS ACTUALIZADOS para las nuevas categorías ---
  const projectFilters = [
    { id: "all", label: "Todos", icon: Star },
    { id: "residencial", label: "Residencial", icon: Home },
    { id: "hotel", label: "Hoteles", icon: BedDouble },
    { id: "industrial", label: "Industrias", icon: Factory },
  ];

  const testimonials = [
    {
      name: "Sofía Martínez",
      role: "CEO & Inversionista",
      comment:
        "La atención al detalle y el nivel de acabados superó todas mis expectativas. Una inversión que cambió mi vida.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
    },
    {
      name: "Ricardo Fernández",
      role: "Empresario Internacional",
      comment:
        "Su equipo transformó mi visión en una realidad que excede mis sueños más ambiciosos. Calidad mundial en el Caribe.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    },
  ];

  // --- Efectos y Lógica ---
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lógica de filtrado actualizada para usar 'category'
  useEffect(() => {
    if (activeProjectFilter === "all") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(
        projectsData.filter(
          (p) => p.category.toLowerCase() === activeProjectFilter
        )
      );
    }
  }, [activeProjectFilter]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-[#f4f4f4] min-h-screen font-sans antialiased text-gray-800">
      {/* ======================= HEADER ======================= */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-lg shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div
            className="text-3xl font-bold tracking-wider cursor-pointer"
            onClick={() => scrollToSection("inicio")}
          >
            TEISCA<span className="text-blue-600">.</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-600">
            {[
              "Inicio",
              "Sobre Nosotros",
              "Proyectos",
              "Servicios",
              "Contacto",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.toLowerCase().replace(" ", "-"));
                }}
                className="hover:text-gray-900 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
          <button
            onClick={() => scrollToSection("contacto")}
            className="hidden md:block bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-900 transition-colors font-semibold text-sm"
          >
            Agendar Consulta
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg">
            <nav className="flex flex-col items-center p-4 space-y-2">
              {[
                "Inicio",
                "Sobre Nosotros",
                "Proyectos",
                "Servicios",
                "Contacto",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.toLowerCase().replace(" ", "-"));
                  }}
                  className="w-full text-center py-2 hover:bg-gray-100 rounded-md"
                >
                  {item}
                </a>
              ))}
              <button
                onClick={() => scrollToSection("contacto")}
                className="w-full bg-gray-800 text-white mt-2 px-5 py-3 rounded-lg hover:bg-gray-900 transition-colors font-semibold text-sm"
              >
                Agendar Consulta
              </button>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* ======================= HERO ======================= */}
        <section
          id="inicio"
          className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&h=1080&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div
            className="relative z-10 text-white px-6 animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
              Construimos Legados, <br /> no solo Propiedades.
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-200">
              Líderes en el desarrollo de proyectos residenciales, hoteleros e
              industriales de ultra lujo en el Caribe.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => scrollToSection("proyectos")}
                className="bg-blue-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105"
              >
                Ver Portafolio
              </button>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/70" />
          </div>
        </section>

        {/* ======================= SOBRE NOSOTROS ======================= */}
        <section id="sobre-nosotros" className="py-24 bg-white">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "100ms" }}
            >
              <span className="font-semibold text-blue-600 uppercase tracking-wider">
                Nuestra Esencia
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-6">
                Innovación, Calidad y Compromiso
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Desde 2009, Teisca ha sido sinónimo de excelencia en el sector
                inmobiliario. Cada proyecto es un testimonio de nuestra pasión
                por la arquitectura vanguardista, la calidad de construcción
                insuperable y una dedicación total a la satisfacción de nuestros
                clientes.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Fusionamos la estética caribeña con estándares de lujo
                internacionales para crear espacios únicos.
              </p>
            </div>
            <div
              className="relative animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              <img
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=450&fit=crop"
                alt="Equipo Teisca"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </section>

        {/* ======================= PROYECTOS (Galería por Categoría) ======================= */}
        <section id="proyectos" className="py-24 bg-[#f4f4f4]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-extrabold tracking-tight mb-4">
                Nuestro Portafolio
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Una muestra de nuestra dedicación a la excelencia en diversos
                sectores de la construcción.
              </p>
            </div>

            {/* Filtros */}
            <div className="flex justify-center items-center gap-2 md:gap-4 my-12 bg-white/60 backdrop-blur-lg p-2 rounded-xl shadow-sm max-w-2xl mx-auto">
              {projectFilters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveProjectFilter(filter.id)}
                  className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    activeProjectFilter === filter.id
                      ? "bg-gray-800 text-white shadow-md"
                      : "text-gray-500 hover:bg-gray-200/50"
                  }`}
                >
                  <filter.icon className="w-5 h-5" />
                  <span className="hidden md:inline">{filter.label}</span>
                </button>
              ))}
            </div>

            {/* Carrusel */}
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              className="pb-12"
            >
              {filteredProjects.map((project, index) => (
                <SwiperSlide key={project.id}>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                    <ProjectCard project={project} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
        {/* ======================= SERVICIOS Y TESTIMONIOS ======================= */}
        <section id="servicios" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                La Voz de Nuestros Clientes
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                La confianza de quienes nos eligen es nuestro mayor activo y el
                mejor testimonio de nuestro trabajo.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-8 rounded-2xl animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mr-5 object-cover border-2 border-blue-200"
                    />
                    <div>
                      <h4 className="font-bold text-lg text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <blockquote className="text-gray-600 italic leading-relaxed">
                    "{testimonial.comment}"
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================= CONTACTO ======================= */}
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
                Agenda una consulta privada with nuestros especialistas en
                bienes raíces de lujo y descubre oportunidades exclusivas
                diseñadas para ti
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
                          Email Ejecutivo
                        </p>
                        <p className="text-gray-600 font-semibold">
                          luxury@teisca.com
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
      </main>

      {/* ======================= FOOTER ======================= */}
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
                  <span className="text-gray-300">+1 (809) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-amber-500 mr-3" />
                  <span className="text-gray-300">luxury@teisca.com</span>
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

      {/* ======================= Botón de WhatsApp ======================= */}
      <a
        href="https://wa.me/18091234567" // ¡IMPORTANTE! Cambia este número
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

export default TeiscaCompleteWebsite;
