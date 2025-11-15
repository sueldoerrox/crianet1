import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronDown, Menu, X, Code2, Globe, ShoppingCart, Zap, ExternalLink, Star, ChevronRight } from "lucide-react";
import { APP_LOGO, APP_TITLE } from "@/const";
import { useState, useEffect } from "react";

const services = [
  {
    number: "01",
    title: "Sites e Landing Pages",
    description: "Sites institucionais e landing pages de alta conversão para representar sua marca",
    features: ["Design responsivo", "SEO otimizado", "Foco em conversão"],
    icon: Globe,
  },
  {
    number: "02",
    title: "Sistemas Web",
    description: "Soluções web sob medida para suas necessidades específicas de negócio",
    features: ["Desenvolvimento custom", "Integrações APIs", "Relatórios avançados"],
    icon: Code2,
  },
  {
    number: "03",
    title: "E-commerce",
    description: "Lojas virtuais robustas e escaláveis para vender seus produtos online",
    features: ["Catálogo de produtos", "Gateway de pagamento", "Gestão de pedidos"],
    icon: ShoppingCart,
  },
  {
    number: "04",
    title: "Automações Inteligentes",
    description: "Automações de processos para otimizar seu fluxo de trabalho",
    features: ["Integração de sistemas", "Workflows automatizados", "Economia de tempo"],
    icon: Zap,
  },
];

const projects = [
  {
    id: 1,
    title: "Plataforma de Indicação",
    category: "Sites Institucionais",
    description: "Site institucional completo com design moderno e navegação intuitiva",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    results: ["Design responsivo", "Performance otimizada", "SEO otimizado"],
    image: "/project-1.jpg",
  },
  {
    id: 2,
    title: "Plataforma de Geração de Conteúdo IA",
    category: "Sites Institucionais",
    description: "Site para plataforma de geração de conteúdo com IA focado em conversão",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    results: ["Design moderno", "Performance alta", "Conversão otimizada"],
    image: "/project-2.jpg",
  },
  {
    id: 3,
    title: "Sistema de Agendamento",
    category: "Sistemas Web",
    description: "Plataforma de agendamento de consultas com design profissional",
    technologies: ["React", "Node.js", "MongoDB"],
    results: ["Design profissional", "Interface intuitiva", "Integração de pagamentos"],
    image: "/project-3.jpg",
  },
  {
    id: 4,
    title: "Loja Virtual Premium",
    category: "E-commerce",
    description: "E-commerce robusto com gestão completa de produtos e pedidos",
    technologies: ["Next.js", "Stripe", "PostgreSQL"],
    results: ["Catálogo dinâmico", "Pagamento seguro", "Gestão de estoque"],
    image: "/project-4.jpg",
  },
];

const testimonials = [
  {
    text: "Desenvolvimento profissional e entrega no prazo. Equipe dedicada e soluções inovadoras para nossos desafios.",
    author: "Cliente Satisfeito",
    company: "Empresa de Tecnologia",
  },
  {
    text: "Qualidade técnica excelente e suporte diferenciado. Recomendo para quem busca excelência em desenvolvimento.",
    author: "Cliente Satisfeito",
    company: "Empresa de Serviços",
  },
  {
    text: "Soluções personalizadas que atendem perfeitamente às nossas necessidades. Parceria de sucesso!",
    author: "Cliente Satisfeito",
    company: "Empresa de Varejo",
  },
];

const faqs = [
  {
    question: "Quanto tempo leva para desenvolver um site profissional?",
    answer: "Depende da complexidade do projeto. Sites institucionais simples levam 2-4 semanas, e-commerces 4-8 semanas, sistemas web personalizados podem levar 2-6 meses, e landing pages profissionais são entregues em 1-2 semanas.",
  },
  {
    question: "Vocês desenvolvem sites WordPress?",
    answer: "Sim! Desenvolvemos sites WordPress profissionais com temas customizados, plugins específicos, otimização de performance e segurança avançada. Também oferecemos treinamento para que você possa gerenciar seu próprio conteúdo.",
  },
  {
    question: "Como funciona o desenvolvimento de landing pages?",
    answer: "Desenvolvemos landing pages focadas em conversão com design otimizado, A/B testing, integração com CRM, analytics avançado e todas as ferramentas necessárias para maximizar seus resultados.",
  },
  {
    question: "Quais tecnologias vocês utilizam?",
    answer: "Trabalhamos com as melhores tecnologias web: React, Next.js, Node.js, TypeScript, WordPress, PHP, MySQL, e muitas outras. Sempre escolhemos a stack mais adequada para cada projeto.",
  },
];

const stats = [
  { number: "50+", label: "Projetos Desenvolvidos" },
  { number: "3M+", label: "Linhas de Código" },
  { number: "95%", label: "Performance Média" },
  { number: "40+", label: "Clientes Satisfeitos" },
];

// Floating orbs for background
const FloatingOrbs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-primary/8 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
    </div>
  );
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleElements((prev) => new Set(prev).add(entry.target.id));
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", company: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <FloatingOrbs />

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container flex items-center justify-between h-40 md:h-56">
          <div className="flex items-center gap-3 animate-fade-in">
            <img src={APP_LOGO} alt="CriaNet" className="w-36 h-36 md:w-52 md:h-52 object-contain" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#servicos" className="text-sm hover:text-primary transition duration-300">Serviços</a>
            <a href="#portfolio" className="text-sm hover:text-primary transition duration-300">Portfólio</a>
            <a href="#depoimentos" className="text-sm hover:text-primary transition duration-300">Depoimentos</a>
            <a href="#faq" className="text-sm hover:text-primary transition duration-300">FAQ</a>
            <a href="#contato" className="text-sm hover:text-primary transition duration-300">Contato</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="https://wa.me/5583999039822" className="inline-block">
              <Button className="bg-primary hover:bg-primary/90 animate-glow cursor-pointer">
                Falar com Especialista
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border/50 animate-fade-in">
            <div className="container py-4 flex flex-col gap-4">
              <a href="#servicos" className="text-sm hover:text-primary transition">Serviços</a>
              <a href="#portfolio" className="text-sm hover:text-primary transition">Portfólio</a>
              <a href="#depoimentos" className="text-sm hover:text-primary transition">Depoimentos</a>
              <a href="#faq" className="text-sm hover:text-primary transition">FAQ</a>
              <a href="#contato" className="text-sm hover:text-primary transition">Contato</a>
              <a href="https://wa.me/5583999039822" className="w-full inline-block">
                <Button className="bg-primary hover:bg-primary/90 w-full cursor-pointer">
                  Falar com Especialista
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div 
              id="hero-badge"
              data-animate
              className={`inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6 transition-all duration-700 ${
                visibleElements.has("hero-badge") ? "animate-fade-in" : "opacity-0"
              }`}
            >
              ✨ Desenvolvimento Web Profissional
            </div>
            <h1 
              id="hero-title"
              data-animate
              className={`text-4xl md:text-6xl font-bold mb-6 leading-tight transition-all duration-700 ${
                visibleElements.has("hero-title") ? "animate-fade-in" : "opacity-0"
              }`}
            >
              Desenvolvimento Web e Automações para seu Negócio
            </h1>
            <p 
              id="hero-desc"
              data-animate
              className={`text-lg text-muted-foreground mb-8 transition-all duration-700 ${
                visibleElements.has("hero-desc") ? "animate-fade-in" : "opacity-0"
              }`}
            >
              Sites profissionais, sistemas web, automações inteligentes e soluções digitais que impulsionam seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/5583999039822" className="inline-block">
                <Button size="lg" className="bg-primary hover:bg-primary/90 animate-bounce-custom">
                  Falar com Especialista <ChevronRight className="ml-2" size={20} />
                </Button>
              </a>
              <a href="#portfolio" className="inline-block">
                <Button size="lg" variant="outline">
                  Ver Portfólio
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, idx) => (
                <div 
                  key={idx}
                  id={`stat-${idx}`}
                  data-animate
                  className={`text-center stagger-item transition-all duration-700 ${
                    visibleElements.has(`stat-${idx}`) ? "animate-fade-in" : "opacity-0"
                  }`}
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2 animate-pulse-custom">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 md:py-32 relative z-10">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">
              Nossos Serviços
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Soluções completas para transformar sua ideia em realidade digital
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={idx}
                  id={`service-${idx}`}
                  data-animate
                  className={`hover:border-primary/50 transition-all duration-700 hover:shadow-lg hover:shadow-primary/20 stagger-item ${
                    visibleElements.has(`service-${idx}`) ? "animate-fade-in" : "opacity-0"
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl font-bold text-primary/20">
                        {service.number}
                      </div>
                      <Icon className="text-primary animate-float" size={32} />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 md:py-32 bg-muted/30 relative z-10">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">
              Nossos Projetos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Projetos reais que desenvolvemos e os resultados alcançados para nossos clientes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <Card 
                key={project.id}
                id={`project-${idx}`}
                data-animate
                className={`overflow-hidden hover:border-primary/50 transition-all duration-700 hover:shadow-lg hover:shadow-primary/20 stagger-item ${
                  visibleElements.has(`project-${idx}`) ? "animate-fade-in" : "opacity-0"
                }`}
              >
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="text-xs font-semibold text-primary mb-2">
                    {project.category}
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-2">
                      Tecnologias
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, tidx) => (
                        <span key={tidx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-2">
                      Resultados
                    </p>
                    <ul className="space-y-1">
                      {project.results.map((result, ridx) => (
                        <li key={ridx} className="flex items-center gap-2 text-sm">
                          <Star size={14} className="text-primary fill-primary" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 md:py-32 relative z-10">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">
              O que nossos clientes dizem
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Acompanhe os depoimentos de quem confia em nossos serviços
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card 
                key={idx}
                id={`testimonial-${idx}`}
                data-animate
                className={`flex flex-col hover:border-primary/50 transition-all duration-700 hover:shadow-lg hover:shadow-primary/20 stagger-item ${
                  visibleElements.has(`testimonial-${idx}`) ? "animate-fade-in" : "opacity-0"
                }`}
              >
                <CardContent className="pt-6 flex-1">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-primary text-primary animate-bounce-custom" style={{ animationDelay: `${i * 0.1}s` }} />
                    ))}
                  </div>
                  <p className="text-sm mb-4 italic">"{testimonial.text}"</p>
                </CardContent>
                <CardHeader className="pt-0">
                  <CardTitle className="text-sm">{testimonial.author}</CardTitle>
                  <CardDescription className="text-xs">
                    {testimonial.company}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-32 bg-muted/30 relative z-10">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">
              Dúvidas Frequentes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Tire suas dúvidas sobre nossos serviços
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <Card 
                key={idx}
                id={`faq-${idx}`}
                data-animate
                className={`cursor-pointer hover:border-primary/50 transition-all duration-700 stagger-item ${
                  visibleElements.has(`faq-${idx}`) ? "animate-fade-in" : "opacity-0"
                }`}
              >
                <CardHeader
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="flex flex-row items-center justify-between space-y-0"
                >
                  <CardTitle className="text-base">{faq.question}</CardTitle>
                  <ChevronDown
                    size={20}
                    className={`text-primary transition-transform ${
                      expandedFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </CardHeader>
                {expandedFaq === idx && (
                  <CardContent className="text-sm text-muted-foreground animate-fade-in">
                    {faq.answer}
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 md:py-32 relative z-10">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">
                Pronto para transformar sua ideia?
              </h2>
              <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Preencha os dados abaixo e nossa equipe entrará em contato para apresentar uma proposta personalizada.
              </p>
            </div>

            <Card className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Nome completo</label>
                      <Input
                        placeholder="Seu nome"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">E-mail corporativo</label>
                      <Input
                        type="email"
                        placeholder="seu@email.com"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Telefone</label>
                      <Input
                        placeholder="(83) 99903-9822"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Empresa</label>
                      <Input
                        placeholder="Nome da sua empresa"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 animate-glow">
                    Enviar Proposta
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border/50 py-12 relative z-10">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={APP_LOGO} alt="CriaNet" className="w-6 h-6 object-contain" />
              </div>
              <p className="text-sm text-muted-foreground">
                Desenvolvimento web profissional e automações inteligentes para seu negócio.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#servicos" className="hover:text-primary transition">Sites e Landing Pages</a></li>
                <li><a href="#servicos" className="hover:text-primary transition">Sistemas Web</a></li>
                <li><a href="#servicos" className="hover:text-primary transition">E-commerce</a></li>
                <li><a href="#servicos" className="hover:text-primary transition">Automações</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="tel:+558399039822" className="hover:text-primary transition">(83) 9 9903-9822</a></li>
                <li><a href="mailto:crianetsuporte@gmail.com" className="hover:text-primary transition">crianetsuporte@gmail.com</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#portfolio" className="hover:text-primary transition">Portfólio</a></li>
                <li><a href="#faq" className="hover:text-primary transition">FAQ</a></li>
                <li><a href="#contato" className="hover:text-primary transition">Contato</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2025 CriaNet. Todos os direitos reservados.
            </p>
            <p className="text-sm text-muted-foreground mt-4 md:mt-0">
              Desenvolvimento por <span className="font-semibold text-foreground">Sueldo</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
