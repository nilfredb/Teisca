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
  Calendar,
  Ruler,
  DollarSign,
  Camera,
  Eye,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// =================================================================================
// COMPONENTE PARA EL CARRUSEL DE PROYECTOS (Galería Visual Mejorada)
// =================================================================================
const ProjectGallery = ({ project }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePosition({ x, y });
  };

  return (
    <div
      className="group relative w-full h-[85vh] rounded-3xl overflow-hidden cursor-pointer shadow-2xl transition-all duration-700 ease-in-out"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      style={{ perspective: "1000px" }}
    >
      {/* Imagen de fondo con efecto parallax mejorado */}
      <div
        className="absolute inset-0 w-full h-full transition-transform duration-1000 ease-out"
        style={{
          backgroundImage: `url(${project.imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateX(${-mousePosition.x * 30}px) translateY(${
            -mousePosition.y * 30
          }px) scale(${isHovered ? 1.08 : 1})`,
        }}
      />

      {/* Overlay sutil */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Información mínima del proyecto */}
      <div className="absolute bottom-0 left-0 w-full p-10 text-white transform transition-all duration-700 translate-y-16 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
        <div className="flex items-center mb-4">
          <span className="bg-blue-600/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center mr-4">
            {project.category === "residencial" && (
              <Home className="w-4 h-4 mr-2" />
            )}
            {project.category === "hotel" && (
              <BedDouble className="w-4 h-4 mr-2" />
            )}
            {project.category === "industrial" && (
              <Factory className="w-4 h-4 mr-2" />
            )}
            {project.category.charAt(0).toUpperCase() +
              project.category.slice(1)}
          </span>
          <div className="flex items-center text-gray-200 text-sm">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{project.year}</span>
          </div>
        </div>

        <h3 className="text-5xl font-bold mb-3 tracking-tight">
          {project.title}
        </h3>
        <div className="flex items-center text-gray-200 mb-6 text-lg">
          <MapPin className="w-5 h-5 mr-2" />
          <span>{project.location}</span>
        </div>

        <button className="flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
          <Eye className="w-6 h-6 mr-3" />
          Ver Galería Completa
        </button>
      </div>

      {/* Icono de cámara en hover */}
      <div className="absolute top-8 right-8 bg-black/50 backdrop-blur-sm p-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-110">
        <Camera className="w-8 h-8 text-white" />
      </div>

      {/* Indicador de categoría */}
      <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {project.category === "residencial" && "Residencial"}
        {project.category === "hotel" && "Hotelero"}
        {project.category === "industrial" && "Industrial"}
      </div>
    </div>
  );
};

// =================================================================================
// COMPONENTE PRINCIPAL DE LA PÁGINA DE PROYECTOS
// =================================================================================
const ProjectsPage = () => {
  // --- Estados del Componente ---
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeProjectFilter, setActiveProjectFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState([]);

  // --- DATOS DE PROYECTOS (Enfoque en galería visual) ---
  const projectsData = [
    {
      id: 1,
      title: "Torre Altavista",
      location: "Piantini, Santo Domingo",
      category: "residencial",
      imageUrl:
        "https://images.unsplash.com/photo-1599493343603-88b53174246a?w=1600&h=900&fit=crop",
      year: "2022",
      description:
        "Desarrollo residencial de lujo con vistas panorámicas a la ciudad y amenities premium.",
    },
    {
      id: 2,
      title: "Paradisus Resort",
      location: "Samaná",
      category: "hotel",
      imageUrl:
        "https://images.unsplash.com/photo-1562790351-d273a961e0e9?w=1600&h=900&fit=crop",
      year: "2021",
      description:
        "Complejo hotelero 5 estrellas con acceso privado a playa y campos de golf.",
    },
    {
      id: 3,
      title: "Nave Industrial Caribe",
      location: "Parque Industrial Duarte",
      category: "industrial",
      imageUrl:
        "https://images.unsplash.com/photo-1580982327772-d6eb154a6797?w=1600&h=900&fit=crop",
      year: "2023",
      description:
        "Centro logístico de última generación con tecnología avanzada.",
    },
    {
      id: 4,
      title: "Residencial Olas del Mar",
      location: "Juan Dolio",
      category: "residencial",
      imageUrl:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&h=900&fit=crop",
      year: "2020",
      description:
        "Complejo residencial frente al mar con villas de lujo y club de playa.",
    },
    {
      id: 5,
      title: "Grand Hotel Colonial",
      location: "Zona Colonial, Santo Domingo",
      category: "hotel",
      imageUrl:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&h=900&fit=crop",
      year: "2019",
      description:
        "Hotel boutique de lujo con arquitectura colonial en el corazón histórico.",
    },
    {
      id: 6,
      title: "Centro Logístico del Este",
      location: "La Romana",
      category: "industrial",
      imageUrl:
        "https://images.unsplash.com/photo-1568448494922-4a1a3fa47379?w=1600&h=900&fit=crop",
      year: "2023",
      description:
        "Parque industrial con naves modulares para empresas multinacionales.",
    },
  ];

  // --- FILTROS PARA CATEGORÍAS ---
  const projectFilters = [
    { id: "all", label: "Todos", icon: Star },
    { id: "residencial", label: "Residencial", icon: Home },
    { id: "hotel", label: "Hoteles", icon: BedDouble },
    { id: "industrial", label: "Industrias", icon: Factory },
  ];

  // --- EFECTOS Y LÓGICA ---
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          className="relative h-[70vh] flex items-center justify-center text-center bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&h=1080&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="relative z-10 text-white px-6 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
              Nuestros Proyectos de{" "}
              <span className="text-blue-400">Excelencia</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-200">
              Descubre nuestra galería de trabajos que redefinen el estándar de
              lujo en el Caribe.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => scrollToSection("proyectos")}
                className="bg-blue-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105"
              >
                Explorar Proyectos
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="bg-transparent border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-all"
              >
                Consulta Personalizada
              </button>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/70" />
          </div>
        </section>

        {/* ======================= PROYECTOS (Galería Visual Mejorada) ======================= */}
        <section id="proyectos" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-extrabold tracking-tight mb-4">
                Galería de Proyectos
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Un recorrido visual por nuestros trabajos más representativos.
              </p>
            </div>

            {/* Filtros */}
            <div className="flex justify-center items-center gap-2 md:gap-4 my-16 bg-gray-50 backdrop-blur-lg p-3 rounded-xl shadow-sm max-w-2xl mx-auto">
              {projectFilters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveProjectFilter(filter.id)}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
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

            {/* Carrusel de Proyectos - Más grande y espacioso */}
            <div className="mb-24">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                className="pb-20"
              >
                {filteredProjects.map((project) => (
                  <SwiperSlide key={project.id}>
                    <ProjectGallery project={project} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Mini Galería Grid - Más grande y espaciosa */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
              {filteredProjects.slice(0, 6).map((project) => (
                <div
                  key={project.id}
                  className="relative h-80 rounded-2xl overflow-hidden shadow-xl group cursor-pointer transform transition-all duration-500 hover:scale-105"
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="font-bold text-2xl mb-2">{project.title}</h3>
                    <div className="flex items-center text-gray-200">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{project.location}</span>
                    </div>
                  </div>

                  {/* Icono de cámara en hover */}
                  <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-sm p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                </div>
              ))}
            </div>

            {/* Estadísticas */}
            <div className="mt-20 bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-12 md:p-16 text-white">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div className="p-6">
                  <div className="text-5xl font-bold mb-3">50+</div>
                  <div className="text-gray-300">Proyectos Completados</div>
                </div>
                <div className="p-6">
                  <div className="text-5xl font-bold mb-3">15</div>
                  <div className="text-gray-300">Años de Experiencia</div>
                </div>
                <div className="p-6">
                  <div className="text-5xl font-bold mb-3">98%</div>
                  <div className="text-gray-300">Clientes Satisfechos</div>
                </div>
                <div className="p-6">
                  <div className="text-5xl font-bold mb-3">12</div>
                  <div className="text-gray-300">Premios de Diseño</div>
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
                    Proyectos de Excelencia
                  </div>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Líderes en el desarrollo de proyectos residenciales, hoteleros e
                industriales de ultra lujo en el Caribe.
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
                Tipos de Proyectos
              </h4>
              <ul className="space-y-3">
                {[
                  "Proyectos Residenciales",
                  "Desarrollos Hoteleros",
                  "Complejos Industriales",
                  "Arquitectura Comercial",
                  "Remodelaciones de Lujo",
                  "Diseño de Interiores",
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

            {/* Proyectos Destacados */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-amber-400">
                Proyectos Destacados
              </h4>
              <ul className="space-y-3">
                {[
                  "Torre Altavista",
                  "Paradisus Resort",
                  "Nave Industrial Caribe",
                  "Residencial Olas del Mar",
                  "Grand Hotel Colonial",
                  "Centro Logístico del Este",
                ].map((project, index) => (
                  <li
                    key={index}
                    className="text-gray-400 hover:text-amber-400 cursor-pointer transition-colors flex items-center"
                  >
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-3"></div>
                    {project}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-amber-400">
                Contacto de Proyectos
              </h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-amber-500 mr-3" />
                  <span className="text-gray-300">+1 (809) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-amber-500 mr-3" />
                  <span className="text-gray-300">proyectos@teisca.com</span>
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
                  &copy; 2024 Teisca Proyectos. Todos los derechos reservados.
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

export default ProjectsPage;
