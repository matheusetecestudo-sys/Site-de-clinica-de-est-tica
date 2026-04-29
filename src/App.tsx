import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  MessageCircle, 
  ChevronRight, 
  Star, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X, 
  Sparkles, 
  ShieldCheck, 
  Clock,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  Plus,
  Minus
} from 'lucide-react';

const WhatsAppIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const SERVICES = [
  {
    title: "Toxina Botulínica (Botox)",
    description: "Elimina marcas de expressão e restaura a jovialidade natural do rosto.",
    image: "/images/Toxina Botulínica (Botox).png",
    category: "FACIAL",
    price: "A partir de R$ 1.200"
  },
  {
    title: "Harmonização Facial",
    description: "Equilibra os traços e realça pontos fortes para um perfil simétrico e elegante.",
    image: "/images/Harmonização Facial.png",
    category: "FACIAL",
    price: "Sob consulta"
  },
  {
    title: "Preenchimento Labial",
    description: "Lábios desenhados com naturalidade, devolvendo volume e contorno exato.",
    image: "/images/Preenchimento Labial.jpg",
    category: "FACIAL",
    price: "A partir de R$ 1.500"
  },
  {
    title: "Bioestimulador de Colágeno",
    description: "Trata a flacidez na raiz, estimulando sustentação e firmeza progressiva.",
    image: "/images/Bioestimulador de Colágeno.png",
    category: "FACIAL E CORPORAL",
    price: "A partir de R$ 2.000"
  },
  {
    title: "Rejuvenescimento Facial",
    description: "Protocolo completo para devolver viço, textura lisa e tom uniforme à pele.",
    image: "/images/Rejuvenescimento Facial.png",
    category: "FACIAL",
    price: "Sob consulta"
  },
  {
    title: "Skinbooster",
    description: "Hidratação injetável profunda para uma pele iluminada e radiante de dentro para fora.",
    image: "/images/hidratação profunda.webp",
    category: "FACIAL",
    price: "A partir de R$ 800"
  },
  {
    title: "Limpeza de Pele Profunda",
    description: "Purificação intensa com tecnologias faciais para renovação celular e desobstrução.",
    image: "/images/Limpeza de Pele Profunda.jpg",
    category: "ESTÉTICA",
    price: "A partir de R$ 250"
  },
  {
    title: "Tratamento para Acne",
    description: "Controle definitivo de inflamações e redução de marcas para uma pele lisa e saudável.",
    image: "/images/tratamento para acne.webp",
    category: "TRATAMENTO",
    price: "Sob consulta"
  },
  {
    title: "Depilação a Laser",
    description: "Pele permanentemente livre de pelos com tecnologia confortável e indolor.",
    image: "/images/Depilação a leizer.webp",
    category: "CORPORAL",
    price: "Sob consulta"
  }
];

const FAQS = [
  { q: "Os procedimentos de harmonização facial são dolorosos?", a: "Utilizamos as mais avançadas técnicas de anestesia local e tópica. O conforto da paciente é prioridade e a maioria relata apenas um incômodo passageiro." },
  { q: "Quanto tempo duram os resultados do Botox?", a: "A toxina botulínica tem uma durabilidade média de 4 a 6 meses, variando de acordo com a força muscular e metabolismo de cada paciente." },
  { q: "Preciso de consulta antes de iniciar um tratamento?", a: "Sim. A avaliação inicial é essencial para entendermos sua anatomia, desejos e traçarmos o melhor protocolo, garantindo segurança e naturalidade." },
  { q: "A DUNO atende planos de saúde ou parcelamento?", a: "Nossos procedimentos são particulares, mas oferecemos condições flexíveis de parcelamento em cartão de crédito para viabilizar seu tratamento." },
  { q: "Qual a diferença entre preenchimento e Botox?", a: "O Botox relaxa a musculatura para evitar rugas de expressão. O preenchimento devolve volume e contorno usando ácido hialurônico." },
  { q: "Como funciona a primeira consulta?", a: "É um momento de escuta ativa. Avaliamos sua pele, estrutura óssea e expectativas, e desenhamos um plano de tratamento exclusivo para você." }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showStickyWhatsapp, setShowStickyWhatsapp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowStickyWhatsapp(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = "https://wa.me/5511992876219?text=Olá! Gostaria de agendar uma consulta de avaliação na DUNO.";

  const Counter = ({ end, suffix = "" }: { end: number, suffix?: string }) => {
    return <span>{end}{suffix}</span>; // Simplificado para evitar erros no SSR/CSR puro, em produção usar framer-motion useSpring
  };

  return (
    <div className="min-h-screen bg-bg-primary selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      
      {/* Navbar Fixa */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? 'bg-bg-secondary/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-20 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 flex items-center justify-center rounded-full bg-white text-primary`}>
              <span className="font-serif font-bold text-xl">D</span>
            </div>
            <span className={`font-serif text-2xl tracking-widest uppercase ${isScrolled ? 'text-white' : 'text-white'}`}>DUNO</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            <a href="#tratamentos" className="text-[11px] font-sans font-bold uppercase tracking-widest text-white/80 hover:text-white transition-colors">Tratamentos</a>
            <a href="#clinica" className="text-[11px] font-sans font-bold uppercase tracking-widest text-white/80 hover:text-white transition-colors">A Clínica</a>
            <a href="#resultados" className="text-[11px] font-sans font-bold uppercase tracking-widest text-white/80 hover:text-white transition-colors">Resultados</a>
            <a href="#contato" className="text-[11px] font-sans font-bold uppercase tracking-widest text-white/80 hover:text-white transition-colors">Contato</a>
          </div>

          <div className="hidden lg:block">
            <a href={whatsappUrl} className="bg-primary text-white text-[11px] font-sans font-bold uppercase tracking-widest px-6 py-3 rounded-[2px] hover:brightness-90 transition-all">
              Agendar Consulta
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[110] bg-bg-secondary flex flex-col justify-center items-center px-6"
          >
            <button className="absolute top-6 right-6 text-white" onClick={() => setIsMobileMenuOpen(false)}>
              <X size={32} />
            </button>
            <div className="flex flex-col gap-8 text-center">
              <a href="#tratamentos" onClick={() => setIsMobileMenuOpen(false)} className="font-serif text-3xl text-white">Tratamentos</a>
              <a href="#clinica" onClick={() => setIsMobileMenuOpen(false)} className="font-serif text-3xl text-white">A Clínica</a>
              <a href="#resultados" onClick={() => setIsMobileMenuOpen(false)} className="font-serif text-3xl text-white">Resultados</a>
              <a href="#contato" onClick={() => setIsMobileMenuOpen(false)} className="font-serif text-3xl text-white">Contato</a>
              <a href={whatsappUrl} className="mt-8 btn-primary">Agendar Agora</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Whatsapp */}
      <AnimatePresence>
        {showStickyWhatsapp && (
          <motion.a
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            href={whatsappUrl}
            className="fixed bottom-8 right-8 z-[90] w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform animate-pulse-whatsapp"
          >
            <WhatsAppIcon size={28} />
          </motion.a>
        )}
      </AnimatePresence>

      {/* [SEÇÃO 01 — HERO] */}
      <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden bg-bg-secondary">
        <div className="absolute inset-0 z-0">
          <img src="/images/banner01 (3).png" alt="Duno Estética" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 w-full grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="flex flex-col items-start pt-20">
            <h1 className="font-serif font-semibold text-white text-6xl md:text-[80px] leading-[0.95] mb-6">
              Beleza que <br />
              <span className="italic text-primary font-light">Impõe</span> Respeito
            </h1>
            <p className="font-body text-[#E8E4DF] text-lg md:text-xl mb-10 max-w-md leading-relaxed">
              Procedimentos de alta performance com a Dra. Beatriz Cavalcanti, Itaim Bibi.
            </p>
            <a href={whatsappUrl} className="btn-primary gap-4 mb-8 text-sm">
              Agendar Minha Consulta <WhatsAppIcon size={20} />
            </a>
            <div className="h-[2px] w-[40px] bg-primary mb-12"></div>
            <div className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-2 bg-white/5 backdrop-blur-sm">
              <Sparkles size={14} className="text-secondary" />
              <span className="font-sans text-[10px] uppercase tracking-widest text-white/80">Clínica Premium — São Paulo</span>
            </div>
          </motion.div>
          <div className="hidden lg:flex justify-end h-[80vh] items-end relative">
             <img src="/images/doutora.png" alt="Dra. Beatriz Cavalcanti" className="h-[90%] w-auto object-contain grayscale brightness-110 contrast-125 drop-shadow-2xl" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
          </div>
        </div>
      </section>

      {/* [SEÇÃO 02 — NÚMEROS/AUTORIDADE] */}
      <section className="bg-bg-secondary py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-primary/30">
            <div className="flex flex-col items-center justify-center flex-1 px-4 text-center">
              <span className="font-serif text-[56px] md:text-[72px] text-white leading-none mb-2"><Counter end={22} suffix="+" /></span>
              <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-secondary">Anos de Experiência</span>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 px-4 text-center pt-8 md:pt-0">
              <span className="font-serif text-[56px] md:text-[72px] text-white leading-none mb-2">15k+</span>
              <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-secondary">Procedimentos Realizados</span>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 px-4 text-center pt-8 md:pt-0">
              <span className="font-serif text-[56px] md:text-[72px] text-white leading-none mb-2">100%</span>
              <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-secondary">Satisfação Garantida</span>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 px-4 text-center pt-8 md:pt-0">
              <span className="font-serif text-[56px] md:text-[72px] text-white leading-none mb-2 text-primary">Elite</span>
              <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-secondary">Clínica Certificada</span>
            </div>
          </div>
        </div>
      </section>

      {/* [SEÇÃO 03 — A PROFISSIONAL] */}
      <section id="clinica" className="section-padding bg-bg-primary">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="aspect-[3/4] overflow-hidden p-2 border border-secondary/30 bg-white">
              <img src="/images/doutora.png" alt="Dra. Beatriz Cavalcanti" className="w-full h-full object-cover grayscale contrast-[1.1]" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-primary/20 bg-bg-primary -z-10" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col items-start">
            <span className="font-sans font-bold uppercase tracking-[0.15em] text-primary text-[11px] mb-4">Quem É</span>
            <h2 className="font-serif text-5xl md:text-[56px] text-text-main leading-none mb-2">Dra. Beatriz Cavalcanti</h2>
            <span className="font-sans text-sm text-text-support uppercase tracking-widest mb-8">Especialista em Harmonização Facial & Bioestimuladores</span>
            
            <p className="font-body text-text-main text-lg leading-[1.8] mb-10 max-w-lg">
              Com mais de duas décadas dedicadas à medicina estética, a Dra. Beatriz desenvolveu um método próprio que une precisão técnica e resultado natural. Cada procedimento é desenhado individualmente — porque sua beleza é única.
            </p>
            
            <ul className="space-y-4 mb-12">
              {[
                "Método exclusivo de naturalização facial",
                "Membro titular de sociedades internacionais",
                "Foco absoluto na saúde e integridade da pele",
                "Atendimento intimista e personalizado"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <CheckCircle2 size={20} className="text-primary shrink-0" />
                  <span className="font-body text-text-main">{item}</span>
                </li>
              ))}
            </ul>
            
            <a href="#tratamentos" className="btn-secondary text-[12px]">Conheça a Abordagem da Dra. Beatriz</a>
          </motion.div>
        </div>
        
        {/* Footer da Seção 03 - Badges */}
        <div className="max-w-7xl mx-auto mt-20 bg-[#F0EDE8] py-8 px-6 lg:px-12 flex flex-wrap justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <ShieldCheck size={24} className="text-text-main/40" />
            <span className="font-sans font-bold uppercase tracking-[0.15em] text-[11px] text-text-main">Certificação</span>
          </div>
          <div className="flex items-center gap-3">
            <Award size={24} className="text-text-main/40" />
            <span className="font-sans font-bold uppercase tracking-[0.15em] text-[11px] text-text-main">Excelência</span>
          </div>
          <div className="flex items-center gap-3">
            <Stars size={24} className="text-text-main/40" />
            <span className="font-sans font-bold uppercase tracking-[0.15em] text-[11px] text-text-main">Equipamentos Premium</span>
          </div>
          <div className="flex items-center gap-3">
            <Zap size={24} className="text-text-main/40" />
            <span className="font-sans font-bold uppercase tracking-[0.15em] text-[11px] text-text-main">Tecnologia</span>
          </div>
        </div>
      </section>

      {/* [SEÇÃO 04 — TRATAMENTOS] */}
      <section id="tratamentos" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-sans font-bold uppercase tracking-[0.15em] text-text-support text-[11px] mb-2 block">Nossos Tratamentos</span>
            <h2 className="font-serif text-5xl md:text-[52px] text-text-main">
              <span className="italic text-primary font-light">Mais Procurados</span>
            </h2>
            <p className="font-body text-text-support mt-4 max-w-xl mx-auto">Procedimentos minimamente invasivos focados na restauração da sua beleza autêntica.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((srv, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="group bg-bg-primary border border-divider hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-300 flex items-center justify-center">
                    <span className="text-white border border-white px-6 py-2 uppercase text-[10px] tracking-widest font-sans">Agendar</span>
                  </div>
                  <img src={srv.image} alt={srv.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 z-20 bg-primary text-white font-sans font-bold uppercase text-[9px] tracking-widest px-3 py-1">
                    {srv.category}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="font-serif text-[22px] text-text-main mb-3">{srv.title}</h3>
                  <p className="font-body text-text-support text-[15px] mb-6 flex-1">{srv.description}</p>
                  <div className="flex items-center justify-between border-t border-divider pt-4 mt-auto">
                    <span className="font-body text-xs text-text-support">{srv.price}</span>
                    <a href={whatsappUrl} className="font-sans font-bold uppercase text-[10px] tracking-widest text-primary hover:text-text-main transition-colors flex items-center gap-1">
                      Saiba mais <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* [SEÇÃO 05 — DIFERENCIAIS DA CLÍNICA] */}
      <section className="section-padding bg-bg-secondary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl md:text-[52px]">Por Que Escolher a DUNO?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
            <div className="flex flex-col relative">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-primary mb-8" />
              <div className="pt-8">
                <Target size={32} strokeWidth={1} className="text-secondary mb-6" />
                <h3 className="font-serif text-3xl mb-4">Método Exclusivo</h3>
                <p className="font-body text-white/60">Cada procedimento é minuciosamente planejado respeitando as proporções únicas do seu rosto.</p>
              </div>
            </div>
            <div className="flex flex-col relative">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-primary mb-8" />
              <div className="pt-8">
                <Activity size={32} strokeWidth={1} className="text-secondary mb-6" />
                <h3 className="font-serif text-3xl mb-4">Tecnologia de Ponta</h3>
                <p className="font-body text-white/60">Equipamentos rigorosamente certificados e protocolos internacionais de alta performance.</p>
              </div>
            </div>
            <div className="flex flex-col relative">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-primary mb-8" />
              <div className="pt-8">
                <Smile size={32} strokeWidth={1} className="text-secondary mb-6" />
                <h3 className="font-serif text-3xl mb-4">Resultado Natural</h3>
                <p className="font-body text-white/60">Nossa filosofia é sem exageros: promovemos o realce absoluto do que é naturalmente seu.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* [SEÇÃO 06 — AMBIENTE] */}
      <section className="section-padding bg-bg-primary overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="lg:col-span-4 flex flex-col justify-center">
            <h2 className="font-serif text-5xl md:text-[52px] text-text-main mb-8">Um Espaço Criado Para Você</h2>
            <p className="font-body text-text-support text-lg leading-relaxed mb-10">
              Do momento em que você entra, tudo foi pensado para que se sinta cuidada, acolhida e segura. Ambiente climatizado, privacidade total e atendimento personalizado do início ao fim.
            </p>
            <a href={whatsappUrl} className="btn-secondary w-fit text-xs">Agende sua Visita</a>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 gap-3 h-[600px]">
            <div className="flex flex-col gap-3">
              <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600" className="w-full h-2/3 object-cover" alt="Recepção" />
              <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600" className="w-full h-1/3 object-cover" alt="Consultório" />
            </div>
            <div className="flex flex-col gap-3">
              <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=600" className="w-full h-1/3 object-cover" alt="Equipamentos" />
              <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=600" className="w-full h-2/3 object-cover" alt="Ambiente" />
            </div>
          </div>
        </div>
      </section>

      {/* [SEÇÃO 07 — RESULTADOS] */}
      <section id="resultados" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-sans font-bold uppercase tracking-[0.15em] text-text-support text-[11px] mb-2 block">Transformações Reais</span>
            <h2 className="font-serif text-5xl md:text-[52px] text-text-main">Resultados que Falam por Si</h2>
          </div>

          <div className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory hide-scrollbar">
            {RESULTS.map((res, i) => (
              <div key={i} className="min-w-[85vw] md:min-w-[600px] snap-center shrink-0 flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-1 h-[400px]">
                  <div className="relative">
                    <img src={res.before} alt="Antes" className="w-full h-full object-cover" />
                    <span className="absolute bottom-4 left-4 bg-black/60 text-white font-sans uppercase text-[10px] tracking-widest px-3 py-1">Antes</span>
                  </div>
                  <div className="relative">
                    <img src={res.after} alt="Depois" className="w-full h-full object-cover" />
                    <span className="absolute bottom-4 right-4 bg-primary text-white font-sans uppercase text-[10px] tracking-widest px-3 py-1">Depois</span>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="font-serif text-2xl text-text-main">{res.title}</h4>
                  <p className="font-body text-text-support text-sm">Tratamento realizado na clínica Duno</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center mt-8">
            <a href={whatsappUrl} className="font-sans font-bold text-primary uppercase tracking-widest text-[11px] border-b border-primary pb-1 hover:text-text-main transition-colors">
              Ver Mais Resultados
            </a>
            <p className="text-[10px] font-body text-text-support mt-12 max-w-xl text-center">
              * Resultados individuais podem variar. Todos os procedimentos realizados por profissional habilitada após avaliação clínica minuciosa.
            </p>
          </div>
        </div>
      </section>

      {/* [SEÇÃO 08 — DEPOIMENTOS] */}
      <section className="section-padding bg-bg-primary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-sans font-bold uppercase tracking-[0.15em] text-text-support text-[11px] mb-2 block">Experiências Duno</span>
            <h2 className="font-serif text-5xl md:text-[52px] text-text-main">O Que Dizem Nossas Pacientes</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((test) => (
              <div key={test.id} className="bg-white border border-divider p-10 flex flex-col shadow-sm">
                <div className="flex gap-1 mb-6 text-primary">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="font-body text-text-main/80 text-base leading-[1.8] mb-8 flex-1 italic">
                  "{test.text}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <img src={test.image} alt={test.name} className="w-12 h-12 rounded-full object-cover grayscale" />
                  <div>
                    <h4 className="font-sans font-bold text-text-main text-sm">{test.name}</h4>
                    <p className="font-body text-text-support text-xs">{test.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* [SEÇÃO 09 — FAQ] */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-sans font-bold uppercase tracking-[0.15em] text-text-support text-[11px] mb-2 block">Dúvidas Frequentes</span>
            <h2 className="font-serif text-5xl md:text-[52px] text-text-main">Esclareça Suas Perguntas</h2>
          </div>

          <div className="mb-12">
            {FAQS.map((faq, i) => (
              <details key={i} className="faq-item group">
                <summary>
                  <span className="text-[22px] font-light">{faq.q}</span>
                  <div className="text-primary group-open:hidden"><Plus size={24} strokeWidth={1.5} /></div>
                  <div className="text-primary hidden group-open:block"><Minus size={24} strokeWidth={1.5} /></div>
                </summary>
                <div className="faq-content">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>

          <div className="text-center">
            <p className="font-body text-text-support mb-4">Ainda tem dúvidas? Fale conosco.</p>
            <a href={whatsappUrl} className="btn-secondary inline-flex w-auto text-[11px]">Falar no WhatsApp</a>
          </div>
        </div>
      </section>

      {/* [SEÇÃO 10 — CTA FINAL] */}
      <section className="py-32 px-6 bg-gradient-to-b from-[#111111] to-[#1A0A10] flex items-center justify-center text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-primary/50" />
        <div className="max-w-3xl flex flex-col items-center">
          <div className="w-[40px] h-[1px] bg-primary mb-10" />
          <h2 className="font-serif text-[64px] text-white leading-none mb-6">Pronta para Começar?</h2>
          <p className="font-body text-[#E8E4DF] text-xl mb-12">Agende agora sua consulta de avaliação com a Dra. Beatriz.</p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a href={whatsappUrl} className="btn-primary gap-3 text-xs w-full sm:w-auto">
              <WhatsAppIcon size={18} /> Agendar pelo WhatsApp
            </a>
            <a href="#tratamentos" className="btn-secondary border-white/30 text-white hover:bg-white/10 text-xs w-full sm:w-auto">
              Ver Tratamentos
            </a>
          </div>
        </div>
      </section>

      {/* [SEÇÃO 11 — LOCALIZAÇÃO + CONTATO] */}
      <section id="contato" className="grid lg:grid-cols-2">
        <div className="h-[500px] lg:h-auto">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.3308828552393!2d-46.67498772412806!3d-23.592474962295692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57530444379b%3A0x6b5e024220fa9449!2sRua%20Joaquim%20Floriano%2C%2072%20-%20Itaim%20Bibi%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004534-000!5e0!3m2!1spt-BR!2sbr!4v1711310000000!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(1) contrast(1.2)' }} 
            allowFullScreen={true}
            loading="lazy" 
          ></iframe>
        </div>
        <div className="bg-[#F5F2EF] p-16 lg:p-24 flex flex-col justify-center">
          <h2 className="font-serif text-[40px] text-text-main mb-12">DUNO — Itaim Bibi, São Paulo</h2>
          <ul className="space-y-8">
            <li className="flex items-start gap-6">
              <MapPin size={24} strokeWidth={1} className="text-primary shrink-0 mt-1" />
              <div>
                <p className="font-sans font-bold text-xs uppercase tracking-widest text-text-main mb-2">Endereço</p>
                <p className="font-body text-text-support">{CLIENT_CONFIG.address}</p>
              </div>
            </li>
            <li className="flex items-start gap-6">
              <Phone size={24} strokeWidth={1} className="text-primary shrink-0 mt-1" />
              <div>
                <p className="font-sans font-bold text-xs uppercase tracking-widest text-text-main mb-2">Telefone & WhatsApp</p>
                <p className="font-body text-text-support">(11) 99287-6219</p>
              </div>
            </li>
            <li className="flex items-start gap-6">
              <MessageCircle size={24} strokeWidth={1} className="text-primary shrink-0 mt-1" />
              <div>
                <p className="font-sans font-bold text-xs uppercase tracking-widest text-text-main mb-2">E-mail</p>
                <p className="font-body text-text-support">{CLIENT_CONFIG.email}</p>
              </div>
            </li>
            <li className="flex items-start gap-6">
              <Clock size={24} strokeWidth={1} className="text-primary shrink-0 mt-1" />
              <div>
                <p className="font-sans font-bold text-xs uppercase tracking-widest text-text-main mb-2">Horários</p>
                <p className="font-body text-text-support">Seg - Sex: 09h às 19h<br/>Sáb: 09h às 13h</p>
              </div>
            </li>
          </ul>
          
          <div className="flex items-center gap-6 mt-12 pt-12 border-t border-divider">
            <span className="font-sans font-bold text-[10px] uppercase tracking-widest text-text-support">Siga-nos</span>
            <a href="#" className="text-text-main hover:text-primary transition-colors"><Instagram size={20} strokeWidth={1.5} /></a>
            <a href="#" className="text-text-main hover:text-primary transition-colors"><Facebook size={20} strokeWidth={1.5} /></a>
          </div>
        </div>
      </section>

      {/* [FOOTER] */}
      <footer className="bg-bg-secondary text-white pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5 flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center">
                <span className="font-serif font-bold text-2xl">D</span>
              </div>
              <span className="font-serif text-3xl tracking-widest uppercase">DUNO</span>
            </div>
            <p className="font-body text-white/60 text-sm max-w-sm">
              Clínica de Estética Premium focada em resultados naturais, tecnologia de ponta e medicina estética de alta performance.
            </p>
          </div>
          
          <div className="md:col-span-3 flex flex-col">
            <h4 className="font-sans font-bold uppercase text-[11px] tracking-widest text-secondary mb-6">Navegação</h4>
            <ul className="space-y-4">
              <li><a href="#tratamentos" className="font-body text-white/70 hover:text-white transition-colors text-sm">Tratamentos</a></li>
              <li><a href="#clinica" className="font-body text-white/70 hover:text-white transition-colors text-sm">A Clínica</a></li>
              <li><a href="#resultados" className="font-body text-white/70 hover:text-white transition-colors text-sm">Resultados</a></li>
              <li><a href="#contato" className="font-body text-white/70 hover:text-white transition-colors text-sm">Contato</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 flex flex-col">
            <h4 className="font-sans font-bold uppercase text-[11px] tracking-widest text-secondary mb-6">Contato Rápido</h4>
            <p className="font-body text-white/70 text-sm mb-2">{CLIENT_CONFIG.address}</p>
            <p className="font-body text-white/70 text-sm mb-4">(11) 99287-6219</p>
            <a href={whatsappUrl} className="font-sans font-bold text-[10px] uppercase tracking-widest text-primary hover:text-white transition-colors inline-flex items-center gap-1 border-b border-primary/30 pb-1 w-fit">
              Fale com nossa equipe <ArrowRight size={12} />
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="h-[1px] w-full bg-primary mb-8 opacity-50" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <p className="font-sans font-medium text-[12px] text-[#6B6B6B]">© 2025 DUNO — Todos os direitos reservados</p>
            <p className="font-sans text-[10px] text-[#6B6B6B] uppercase tracking-widest">Designed for Elite Esthetics</p>
          </div>
        </div>
      </footer>

      <CookieBanner />
    </div>
  );
}
