import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight, ChevronLeft, MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

const WhatsAppIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const StarIcon = ({ size = 14, className = "", ...props }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const SERVICES = [
  {
    title: "Botox de Elite",
    description: "Apague as marcas de estresse e tempo sem perder sua expressão. O segredo das faces mais elegantes e descansadas.",
    image: "/images/Toxina Botulínica (Botox).png",
    category: "FACIAL"
  },
  {
    title: "Harmonização de Luxo",
    description: "O equilíbrio perfeito entre arte e ciência. Realçamos seus traços para criar um perfil magnético e sofisticado.",
    image: "/images/Harmonização Facial.png",
    category: "FACIAL"
  },
  {
    title: "Lábios e Contorno",
    description: "Volume estratégico e contorno definido. O toque de sofisticação e sedução que seu sorriso sempre mereceu.",
    image: "/images/Preenchimento Labial.jpg",
    category: "FACIAL"
  },
  {
    title: "Bioestimulador",
    description: "Sua poupança de colágeno. Firmeza absoluta e sustentação profunda que melhora a cada dia que passa.",
    image: "/images/Bioestimulador de Colágeno.png",
    category: "FACIAL E CORPORAL"
  },
  {
    title: "Lifting de Alta Performance",
    description: "Desafie a gravidade sem cirurgias. Sustentação imediata e regeneração total dos contornos do seu rosto.",
    image: "/images/Rejuvenescimento Facial.png",
    category: "FACIAL"
  },
  {
    title: "Brilho e Hidratação",
    description: "O segredo da pele 'glass skin'. Hidratação profunda que devolve o viço e a luminosidade que vem de dentro.",
    image: "/images/hidratação profunda.webp",
    category: "FACIAL"
  },
  {
    title: "Acne e Textura",
    description: "Recupere a pureza da sua pele. Protocolos definitivos para eliminar inflamações e marcas indesejadas.",
    image: "/images/tratamento para acne.webp",
    category: "TRATAMENTO"
  },
  {
    title: "Liberdade com Laser",
    description: "Pele permanentemente impecável. A tecnologia mais confortável do mundo para você nunca mais se preocupar com pelos.",
    image: "/images/Depilação a leizer.webp",
    category: "CORPORAL"
  }
];

const FAQS = [
  { q: "Os resultados ficam naturais ou artificiais?", a: "Nossa filosofia é a naturalização. Utilizamos o Método DUNO para realçar sua beleza sem que ninguém perceba que você fez um procedimento — apenas que você está na sua melhor fase." },
  { q: "Qual a durabilidade dos tratamentos injetáveis?", a: "Depende do protocolo. O Botox dura em média 4 a 6 meses, enquanto bioestimuladores e preenchedores podem durar de 12 a 24 meses, dependendo do organismo." },
  { q: "Os procedimentos são muito dolorosos?", a: "Sua experiência de luxo inclui conforto total. Utilizamos as melhores técnicas de anestesia local e tópica para garantir uma sessão tranquila e praticamente indolor." },
  { q: "A primeira consulta é demorada?", a: "Sim. A avaliação na DUNO é um ritual de escuta e análise técnica profunda. Não fazemos apenas aplicações, desenhamos seu plano de rejuvenescimento exclusivo." },
  { q: "Existe algum 'tempo de recuperação'?", a: "A maioria dos nossos protocolos permite que você retorne à sua rotina imediatamente. Em alguns casos, pode haver um leve edema que desaparece em poucos dias." },
  { q: "Como faço para garantir um horário?", a: "Devido à nossa agenda exclusiva e atendimento personalizado, recomendamos o agendamento via WhatsApp com pelo menos uma semana de antecedência." }
];

const RESULTS = [
  {
    image: "/images/antes e depois01.png",
    treatment: "HARMONIZAÇÃO FACIAL",
    time: "Resultado Imediato"
  },
  {
    image: "/images/antes e depois02.png",
    treatment: "REJUVENESCIMENTO INTEGRAL",
    time: "Resultado Pós-Tratamento"
  }
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Mariana Silva",
    text: "A tecnologia da Duno é revolucionária. Fiz a harmonização e o resultado de lifting imediato foi surpreendente. Nunca me senti tão bem com a minha própria pele.",
    role: "Paciente · Botox + Harmonização",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Ricardo Oliveira",
    text: "Equipamentos de ponta e uma equipe que realmente entende de ciência estética. O melhor do Itaim Bibi para quem busca resultados naturais e masculinos.",
    role: "Paciente · Tratamento Facial",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Carla Mendes",
    text: "O protocolo mudou minha percepção sobre skincare profissional. Pele iluminada e regenerada com muita naturalidade e sem exageros.",
    role: "Paciente · Skinbooster",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showStickyWhatsapp, setShowStickyWhatsapp] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
      setShowStickyWhatsapp(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = "https://wa.me/5511992876219?text=Olá! Gostaria de agendar uma consulta na DUNO.";

  const Counter = ({ end, suffix = "" }: { end: number, suffix?: string }) => {
    return <span>{end}{suffix}</span>;
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <div className="min-h-screen bg-cream selection:bg-rose/20 selection:text-rose overflow-x-hidden">
      
      {/* Navbar Fixa */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-[350ms] ${isScrolled ? 'bg-[#0F0F0F]/97 backdrop-blur-[14px] border-b border-gold/20 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.3)]' : 'bg-transparent py-5'}`}>
        <div className="w-full px-[clamp(20px,5vw,7vw)] mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex flex-col leading-[1.2] z-10">
            <span style={{ fontFamily: "'Montserrat', sans-serif" }} className="font-bold text-[18px] tracking-[0.28em] uppercase text-rose">DUNO</span>
            <span style={{ fontFamily: "'Montserrat', sans-serif" }} className="font-semibold text-[9px] tracking-[0.35em] uppercase text-rose">ESTÉTICA</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {[
              { label: 'Tratamentos', href: '#tratamentos' },
              { label: 'A Clínica', href: '#a-clinica' },
              { label: 'Resultados', href: '#resultados' },
              { label: 'Contato', href: '#contato' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[11px] font-sans uppercase tracking-[0.16em] text-white/90 hover:text-rose relative group transition-colors duration-200"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-rose transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a href={`tel:+5511992876219`} className="font-sans text-[11px] uppercase tracking-[0.12em] text-white/70 hover:text-rose transition-colors">(11) 99287-6219</a>
            <a href={whatsappUrl} className="btn-primary !py-[12px] !px-[28px] !text-[10px] gap-2">
              <WhatsAppIcon size={14} /> AGENDAR CONSULTA
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden flex flex-col gap-[5px] p-2 z-10"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <span className={`block w-[24px] h-[1.5px] transition-all duration-300 ${isScrolled ? 'bg-white' : 'bg-white'}`}></span>
            <span className={`block w-[18px] h-[1.5px] transition-all duration-300 ${isScrolled ? 'bg-white' : 'bg-white'}`}></span>
            <span className={`block w-[24px] h-[1.5px] transition-all duration-300 ${isScrolled ? 'bg-white' : 'bg-white'}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu — Slide from Right */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-[108] bg-black/60 backdrop-blur-sm"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 z-[109] w-[80vw] max-w-[360px] bg-[#0F0F0F] flex flex-col px-8 py-10 shadow-[-4px_0_40px_rgba(0,0,0,0.4)]"
            >
              {/* Close */}
              <button
                className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={24} />
              </button>

              {/* Logo no drawer */}
              <div className="mb-10">
                <span style={{ fontFamily: "'Montserrat', sans-serif" }} className="font-bold text-[22px] tracking-[0.25em] uppercase text-rose block leading-[1.1]">DUNO</span>
                <span style={{ fontFamily: "'Montserrat', sans-serif" }} className="font-medium text-[8px] tracking-[0.3em] uppercase text-rose/70">ESTÉTICA</span>
              </div>

              {/* Links */}
              <nav className="flex flex-col gap-2 flex-1">
                {[
                  { label: 'Tratamentos', href: '#tratamentos' },
                  { label: 'A Clínica', href: '#a-clinica' },
                  { label: 'Resultados', href: '#resultados' },
                  { label: 'Contato', href: '#contato' },
                ].map((item, i) => (
                  <motion.a
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 + 0.1 }}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-display text-[28px] text-white/80 hover:text-rose transition-colors py-3 border-b border-white/5"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>

              {/* CTA mobile */}
              <div className="flex flex-col gap-3 mt-8">
                <a href={whatsappUrl} onClick={() => setIsMobileMenuOpen(false)} className="btn-primary w-full text-center">
                  <WhatsAppIcon size={16} /> AGENDAR AGORA
                </a>
                <a href={`tel:+5511992876219`} className="font-sans text-center text-[12px] text-white/50 tracking-[0.1em] uppercase hover:text-rose transition-colors">
                  (11) 99287-6219
                </a>
              </div>

              {/* Redes sociais */}
              <div className="flex gap-5 mt-6">
                <a href="#" className="text-white/40 hover:text-rose transition-colors"><Instagram size={18} /></a>
                <a href="#" className="text-white/40 hover:text-rose transition-colors"><Facebook size={18} /></a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* [SEÇÃO 01 — HERO] */}
      <section className="relative min-h-[100dvh] flex flex-col bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/banner01 (3).png" alt="Clínica" className="w-full h-full object-cover object-top scale-[1.03]" />
          {/* Degradê principal: esquerda escura para transparente — Suavizado */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
          {/* Degradê inferior: base escura para transparente — Suavizado */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          {/* Degradê superior: topo escuro suave — Suavizado */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
          {/* Brilho rosa sutil no canto esquerdo */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_60%,rgba(219,39,119,0.12)_0%,transparent_55%)]" />
        </div>

        <div className="relative z-10 w-full flex-1 flex flex-col justify-center px-[clamp(24px,5vw,7vw)] pt-[100px]">
          <div className="max-w-[720px]">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="font-sans uppercase text-gold text-[10px] tracking-[0.28em] mb-8 block">
                CLÍNICA DE ESTÉTICA AVANÇADA — SÃO PAULO
              </span>

              <h1 className="font-display font-bold text-white text-[clamp(48px,7.5vw,90px)] leading-[0.95] mb-6">
                Domine a sua<br />
                Própria <span className="font-display italic text-rose">Elegância.</span>
              </h1>

              <div className="line-decorative my-[32px] w-[64px] h-[2px]"></div>

              <p className="font-sans text-white/85 text-[17px] md:text-[20px] leading-[1.6] max-w-[520px] mb-12">
                Onde a precisão clínica encontra a estética de elite. Protocolos exclusivos desenhados para quem não aceita nada menos que a perfeição em resultados naturais.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
                <a href={whatsappUrl} className="btn-primary w-full sm:w-auto text-center gap-3">
                  <WhatsAppIcon size={18} /> GARANTIR MINHA CONSULTA
                </a>
                <a href="#tratamentos" className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-black w-full sm:w-auto text-center">
                  DESCUBRA O MÉTODO
                </a>
              </div>
              
              <div className="mt-14 flex items-center gap-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} className="text-gold" size={16} />)}
                </div>
                <span className="font-sans text-[11px] md:text-[12px] uppercase text-gold tracking-[0.16em]">
                  4.9 · +500 pacientes atendidas
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* [SEÇÃO 02 — NÚMEROS] */}
      <section className="bg-black py-[64px] px-[clamp(24px,5vw,7vw)]">
        <div className="w-full mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-gold/30">
            <motion.div {...fadeInUp} className="flex flex-col md:pl-8 first:pl-0">
              <span className="font-display font-bold text-[48px] md:text-[72px] text-white leading-none"><Counter end={22} suffix="+" /></span>
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold mt-2">Anos Transformando Vidas</span>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="flex flex-col md:pl-8">
              <span className="font-display font-bold text-[48px] md:text-[72px] text-white leading-none">15k+</span>
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold mt-2">Resultados de Excelência</span>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="flex flex-col md:pl-8">
              <span className="font-display font-bold text-[48px] md:text-[72px] text-white leading-none">100%</span>
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold mt-2">Fidelidade das Pacientes</span>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="flex flex-col md:pl-8">
              <span className="font-display font-bold text-[48px] md:text-[72px] text-white leading-none">Elite</span>
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold mt-2">Padrão Ouro Internacional</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* [SEÇÃO 03 — A PROFISSIONAL] */}
      <section id="a-clinica" className="section-padding bg-cream">
        <div className="w-full mx-auto grid md:grid-cols-12 gap-[80px] items-center">
          <motion.div {...fadeInUp} className="md:col-span-5 relative h-full">
            <div className="absolute left-0 top-12 bottom-12 w-[2px] bg-gold -translate-x-[24px]"></div>
            <img src="/images/doutora.png" alt="Dra. Beatriz Cavalcanti" className="w-full aspect-[3/4] object-cover object-top grayscale" />
          </motion.div>
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="md:col-span-7 flex flex-col items-start">
            <span className="text-label text-gold mb-4">A PROFISSIONAL</span>
            <h2 className="font-display text-[44px] md:text-[52px] text-black mb-6 leading-[1.1]">Dra. Beatriz Cavalcanti</h2>
            <div className="line-decorative mb-8"></div>
            
            <p className="font-sans text-black text-[17px] leading-[1.8] max-w-[500px] mb-8">
              Esqueça os padrões genéricos. Dra. Beatriz não apenas aplica produtos; ela esculpe resultados. Com foco absoluto na naturalização facial, seu método devolve os contornos e o viço que o tempo tentou levar.
            </p>
            
            <ul className="flex flex-col gap-3 mb-10">
              {[
                "Método Exclusivo de Rejuvenescimento Natural",
                "Referência em Bioestimuladores de Elite",
                "Especialista em Harmonização de Luxo",
                "Experiência Internacional Consolidada"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-rose text-[12px] font-bold">—</span>
                  <span className="font-sans text-[15px] text-black font-medium">{item}</span>
                </li>
              ))}
            </ul>
            
            <a href={whatsappUrl} className="btn-secondary mb-12 gap-3">
              <WhatsAppIcon size={18} /> QUERO MINHA AVALIAÇÃO COM A DRA.
            </a>
            
            <div className="flex flex-wrap gap-3">
              {["Certificação", "Excelência", "Equipamentos Premium", "Tecnologia"].map((badge, i) => (
                <div key={i} className="border border-gold px-[20px] py-[10px]">
                  <span className="font-sans text-[9px] uppercase text-gold tracking-[0.18em]">{badge}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* [SEÇÃO 04 — TRATAMENTOS] */}
      <section id="tratamentos" className="section-padding bg-white">
        <div className="w-full mx-auto">
          <div className="text-center mb-[80px] flex flex-col items-center">
            <span className="text-label text-gold mb-4">NOSSOS PROCEDIMENTOS</span>
            <h2 className="font-display text-[44px] md:text-[52px] text-black leading-[1.1] mb-4">
              Os Tratamentos <br />
              <span className="italic text-rose">Mais Procurados</span>
            </h2>
            <p className="font-sans text-[16px] text-warm-gray">Protocolos personalizados para realçar sua beleza natural</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {SERVICES.map((srv, i) => (
              <motion.div 
                {...fadeInUp}
                transition={{ delay: i * 0.08 }}
                key={i} 
                className="relative aspect-[0.8/1] md:aspect-[0.75/1] rounded-[24px] md:rounded-[40px] overflow-hidden group shadow-xl border border-rose/20"
              >
                {/* Imagem de Fundo */}
                <img src={srv.image} alt={srv.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                
                {/* Overlay Escuro Gradual */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
                
                {/* Conteúdo Centralizado e Alinhado */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col items-center text-center justify-end">
                  {/* Título Serifado */}
                  <h3 className="font-display text-[18px] md:text-[24px] text-white font-bold uppercase leading-tight mb-2 md:mb-4 tracking-tight">
                    {srv.title}
                  </h3>
                  
                  {/* Descrição */}
                  <p className="font-sans text-[11px] md:text-[13px] text-white/85 line-clamp-3 mb-5 md:mb-8 leading-relaxed max-w-full">
                    {srv.description}
                  </p>
                  
                  {/* Botão Pill Rosa Centralizado */}
                  <a 
                    href={whatsappUrl} 
                    className="bg-rose text-white rounded-full py-3.5 md:py-4 px-6 md:px-8 flex items-center justify-center gap-2 hover:bg-[#8E2E43] transition-all duration-300 shadow-lg w-full max-w-[220px]"
                  >
                    <WhatsAppIcon size={14} className="text-white shrink-0" />
                    <span className="font-sans font-bold text-[9px] md:text-[11px] uppercase tracking-widest whitespace-nowrap">AGENDAR CONSULTA</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* [SEÇÃO 05 — DIFERENCIAIS] */}
      <section className="bg-black py-[120px] px-[clamp(24px,5vw,7vw)]">
        <div className="w-full mx-auto">
          <div className="text-center mb-[80px]">
            <span className="text-label text-gold mb-4">POR QUE NOS ESCOLHER</span>
            <h2 className="font-display text-[44px] md:text-[52px] text-white leading-[1.1]">
              Por Que Escolher <br />
              a DUNO?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-[64px]">
            {[
              { t: "Método Exclusivo", d: "Cada protocolo é desenvolvido para o seu perfil único — sem procedimentos padrão, sem resultados genéricos." },
              { t: "Tecnologia de Ponta", d: "Equipamentos certificados internacionalmente, atualizados continuamente com os melhores do mercado." },
              { t: "Resultado Natural", d: "Nossa filosofia: realçar o que é naturalmente seu. Sem excessos. Sem artificialidade. Só você, melhor." }
            ].map((item, i) => (
              <motion.div {...fadeInUp} transition={{ delay: i * 0.1 }} key={i} className="flex flex-col text-left">
                <div className="h-[1px] w-[48px] bg-gold mb-[32px]"></div>
                <h3 className="font-display text-[26px] text-white mb-4">{item.t}</h3>
                <p className="font-sans text-[15px] text-white/60 line-height-[1.75] line-clamp-3">
                  {item.d}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* [SEÇÃO 06 — FILOSOFIA (Substituindo "O Espaço")] */}
      <section className="bg-surface py-[160px] px-[clamp(24px,5vw,7vw)] text-center flex flex-col items-center">
        <div className="w-full max-w-[800px] mx-auto flex flex-col items-center">
          <span className="text-label text-gold mb-8">NOSSA FILOSOFIA</span>
          
          <h2 className="font-display text-[clamp(32px,4vw,48px)] text-black leading-[1.3] mb-10 italic">
            "Acreditamos que a verdadeira elegância não está na transformação radical, mas no cuidado meticuloso de revelar a melhor versão que já existe em você."
          </h2>
          
          <div className="line-decorative mb-10"></div>
          
          <p className="font-sans text-[16px] text-warm-gray leading-[1.8] max-w-[500px] mb-12">
            Na DUNO, o luxo está nos detalhes. Adotamos protocolos minimalistas e ciência de alta performance para garantir que cada resultado seja sentido como autêntico, devolvendo não apenas contornos, mas confiança absoluta.
          </p>

          <span className="font-display text-[24px] text-black tracking-[0.05em]">Beatriz Cavalcanti</span>
          <span className="font-sans text-[10px] uppercase text-gold tracking-[0.2em] mt-2">Diretora Clínica</span>
        </div>
      </section>

      {/* [SEÇÃO 07 — RESULTADOS] */}
      <section id="resultados" className="section-padding bg-white">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="text-center mb-[80px]">
            <span className="text-label text-gold mb-4">TRANSFORMAÇÕES REAIS</span>
            <h2 className="font-display text-[44px] md:text-[52px] text-black leading-[1.1]">Resultados que Falam<br/>por Si</h2>
            <div className="line-decorative mx-auto mt-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {RESULTS.map((res, i) => (
              <motion.div {...fadeInUp} transition={{ delay: i * 0.2 }} key={i} className="flex flex-col group">
                <div className="w-full bg-surface shadow-[0_2px_24px_rgba(0,0,0,0.06)] overflow-hidden mb-6 relative">
                  <img src={res.image} alt="Antes e Depois" className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]" />
                  <div className="absolute inset-0 border border-black/5 pointer-events-none"></div>
                </div>
                <div className="flex flex-col items-center text-center">
                  <h4 className="font-sans text-[12px] uppercase tracking-[0.2em] text-black mb-2">{res.treatment}</h4>
                  <p className="font-display italic text-[15px] text-warm-gray">{res.time}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col items-center mt-[80px] gap-8">
            <p className="font-sans text-[11px] text-warm-gray tracking-[0.1em] uppercase">Resultados individuais podem variar.</p>
            <a href={whatsappUrl} className="btn-secondary px-[40px] gap-3">
              <WhatsAppIcon size={18} /> AGENDAR AVALIAÇÃO
            </a>
          </div>
        </div>
      </section>

      {/* [SEÇÃO 08 — DEPOIMENTOS] */}
      <section className="section-padding bg-white">
        <div className="w-full mx-auto">
          <div className="text-center mb-[80px]">
            <span className="text-label text-gold mb-4">EXPERIÊNCIAS DUNO</span>
            <h2 className="font-display text-[44px] md:text-[52px] text-black leading-[1.1]">O Que Dizem <br />Nossas Pacientes</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((test, i) => (
              <motion.div {...fadeInUp} transition={{ delay: i * 0.1 }} key={test.id} className="bg-cream p-[40px] border-t-2 border-rose flex flex-col">
                <div className="flex gap-[3px] text-rose mb-[20px]">
                  {[...Array(5)].map((_, j) => <StarIcon key={j} />)}
                </div>
                <p className="font-display italic text-[19px] text-black leading-[1.65] line-clamp-4 flex-1">
                  "{test.text}"
                </p>
                <div className="h-[1px] bg-surface w-full my-[20px]"></div>
                <div className="flex items-center gap-4">
                  <img src={test.image} alt={test.name} className="w-[40px] h-[40px] rounded-full object-cover grayscale" />
                  <div>
                    <h4 className="font-sans text-[13px] uppercase text-black tracking-[0.1em]">{test.name}</h4>
                    <p className="font-sans text-[11px] text-warm-gray mt-1">{test.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* [SEÇÃO 09 — FAQ] */}
      <section className="section-padding bg-surface flex justify-center">
        <div className="w-full max-w-[760px]">
          <div className="text-center mb-[64px]">
            <span className="text-label text-gold mb-4">DÚVIDAS FREQUENTES</span>
            <h2 className="font-display text-[44px] md:text-[52px] text-black leading-[1.1]">Esclareça Suas <br />Perguntas</h2>
          </div>

          <div className="flex flex-col">
            {FAQS.map((faq, i) => (
              <div key={i} className="border-b border-gold/30 py-[24px]">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <span className="font-sans text-[15px] uppercase tracking-[0.08em] text-black">{faq.q}</span>
                  <span className="font-display text-[24px] text-rose">{openFaq === i ? '−' : '+'}</span>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="font-sans text-[16px] text-warm-gray leading-[1.75] pt-[16px] pb-[8px] max-w-[640px]">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="text-center mt-[64px]">
            <p className="font-sans text-[14px] text-warm-gray mb-2">Ainda tem dúvidas?</p>
            <a href={whatsappUrl} className="font-sans text-[14px] text-rose underline underline-offset-4">Fale conosco pelo WhatsApp &rarr;</a>
          </div>
        </div>
      </section>

      {/* [SEÇÃO 10 — CTA FINAL] */}
      <section className="bg-black py-[160px] px-[clamp(24px,5vw,7vw)] text-center">
        <div className="w-full max-w-[700px] mx-auto flex flex-col items-center">
          <span className="text-label text-gold mb-6">SUA TRANSFORMAÇÃO COMEÇA AQUI</span>
          <h2 className="font-display font-bold text-[clamp(40px,6vw,72px)] text-white leading-[1.05] mb-7">Pronta para viver sua<br/>melhor fase?</h2>
          <div className="line-decorative mb-7"></div>
          <p className="font-sans text-[18px] text-white/60 mb-[48px] max-w-[480px]">Não deixe sua autoestima para depois. O momento de investir em você é agora.</p>
          <div className="flex flex-col sm:flex-row gap-[20px] w-full sm:w-auto justify-center">
            <a href={whatsappUrl} className="btn-primary w-full sm:w-auto !px-[56px]">
              <WhatsAppIcon size={18} /> GARANTIR MEU HORÁRIO
            </a>
          </div>
        </div>
      </section>

      {/* [SEÇÃO 11 — LOCALIZAÇÃO] */}
      <section id="contato" className="bg-cream grid md:grid-cols-2">
        <div className="h-[400px] md:h-auto order-2 md:order-1">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.3308828552393!2d-46.67498772412806!3d-23.592474962295692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57530444379b%3A0x6b5e024220fa9449!2sRua%20Joaquim%20Floriano%2C%2072%20-%20Itaim%20Bibi%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004534-000!5e0!3m2!1spt-BR!2sbr!4v1711310000000!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(1) contrast(1.1) opacity(0.8)' }} 
            allowFullScreen={true}
            loading="lazy" 
          ></iframe>
        </div>
        <div className="p-[80px] flex flex-col justify-center order-1 md:order-2">
          <span className="text-label text-gold mb-4">ONDE NOS ENCONTRAR</span>
          <h2 className="font-display text-[44px] md:text-[52px] text-black leading-[1.1] mb-6">DUNO — Itaim Bibi</h2>
          <div className="line-decorative mb-10"></div>
          
          <div className="flex flex-col gap-[20px]">
            {[
              { i: <MapPin size={20} strokeWidth={1} />, t: "Rua Joaquim Floriano, 72 - Itaim Bibi, São Paulo" },
              { i: <Phone size={20} strokeWidth={1} />, t: "(11) 99287-6219" },
              { i: <Mail size={20} strokeWidth={1} />, t: "contato@dunoestetica.com.br" },
              { i: <Clock size={20} strokeWidth={1} />, t: "Seg a Sex: 09h às 19h | Sáb: 09h às 13h" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-[12px]">
                <div className="text-black">{item.i}</div>
                <span className="font-sans text-[15px] text-black">{item.t}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-[16px] mt-[40px]">
            <a href="#" className="text-warm-gray hover:text-rose transition-colors duration-200"><Instagram size={20} strokeWidth={1} /></a>
            <a href="#" className="text-warm-gray hover:text-rose transition-colors duration-200"><Facebook size={20} strokeWidth={1} /></a>
          </div>
        </div>
      </section>

      {/* [FOOTER] */}
      <footer className="bg-[#0A0A0A] pt-[80px] pb-[40px] px-[clamp(20px,5vw,7vw)]">
        <div className="w-full max-w-[1200px] mx-auto">

          {/* Top grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-[56px]">

            {/* Col 1 — Marca */}
            <div className="md:col-span-5 flex flex-col gap-4">
              <div className="flex flex-col leading-[1.1]">
                <span style={{ fontFamily: "'Montserrat', sans-serif" }} className="font-bold text-[20px] tracking-[0.25em] uppercase text-rose">DUNO</span>
                <span style={{ fontFamily: "'Montserrat', sans-serif" }} className="font-medium text-[8px] tracking-[0.3em] uppercase text-rose/70">ESTÉTICA</span>
              </div>
              <p className="font-sans text-[13px] text-warm-gray leading-[1.7] max-w-[300px]">
                Clínica de estética avançada no coração de São Paulo. Protocolos personalizados para realçar a sua beleza natural.
              </p>
              {/* Redes sociais */}
              <div className="flex gap-4 mt-2">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 border border-white/10 flex items-center justify-center text-warm-gray hover:text-rose hover:border-rose transition-all duration-200">
                  <Instagram size={16} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-9 h-9 border border-white/10 flex items-center justify-center text-warm-gray hover:text-rose hover:border-rose transition-all duration-200">
                  <Facebook size={16} />
                </a>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="w-9 h-9 border border-white/10 flex items-center justify-center text-warm-gray hover:text-rose hover:border-rose transition-all duration-200">
                  <WhatsAppIcon size={16} />
                </a>
              </div>
            </div>

            {/* Col 2 — Links */}
            <div className="md:col-span-3 flex flex-col">
              <h4 className="font-sans text-[9px] uppercase text-gold tracking-[0.22em] mb-5">Navegação</h4>
              <ul className="flex flex-col gap-3">
                {[
                  { label: 'Tratamentos', href: '#tratamentos' },
                  { label: 'A Clínica', href: '#a-clinica' },
                  { label: 'Resultados', href: '#resultados' },
                  { label: 'Contato', href: '#contato' },
                ].map(item => (
                  <li key={item.label}>
                    <a href={item.href} className="font-sans text-[13px] text-warm-gray hover:text-rose transition-colors flex items-center gap-2 group">
                      <span className="w-3 h-[1px] bg-warm-gray/40 group-hover:bg-rose group-hover:w-5 transition-all duration-300"></span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Contato */}
            <div className="md:col-span-4 flex flex-col">
              <h4 className="font-sans text-[9px] uppercase text-gold tracking-[0.22em] mb-5">Contato</h4>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <MapPin size={14} strokeWidth={1.5} className="text-rose mt-[2px] shrink-0" />
                  <span className="font-sans text-[13px] text-warm-gray leading-[1.5]">Rua Joaquim Floriano, 72<br />Itaim Bibi, São Paulo</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={14} strokeWidth={1.5} className="text-rose shrink-0" />
                  <a href="tel:+5511992876219" className="font-sans text-[13px] text-warm-gray hover:text-rose transition-colors">(11) 99287-6219</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={14} strokeWidth={1.5} className="text-rose shrink-0" />
                  <a href="mailto:contato@dunoestetica.com.br" className="font-sans text-[13px] text-warm-gray hover:text-rose transition-colors">contato@dunoestetica.com.br</a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock size={14} strokeWidth={1.5} className="text-rose shrink-0" />
                  <span className="font-sans text-[13px] text-warm-gray">Seg–Sex 9h–19h · Sáb 9h–13h</span>
                </li>
              </ul>

              {/* CTA WhatsApp */}
              <a href={whatsappUrl} className="btn-primary mt-6 self-start text-[10px] py-[10px] px-[20px]">
                <WhatsAppIcon size={14} /> FALAR AGORA
              </a>
            </div>

          </div>

          {/* Divider */}
          <div className="h-[1px] w-full bg-gold/15 mb-[24px]"></div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <span className="font-sans text-[11px] text-warm-gray/60">© 2025 DUNO Estética. Todos os direitos reservados.</span>
            <span className="font-sans text-[11px] text-warm-gray/60">Desenvolvido por <span className="text-rose">Matheus</span></span>
          </div>

        </div>
      </footer>

      {/* Floating Whatsapp */}
      <AnimatePresence>
        {showStickyWhatsapp && (
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            href={whatsappUrl}
            className="fixed bottom-[32px] right-[32px] z-[999] w-[56px] h-[56px] bg-[#1A7A40] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(26,122,64,0.35)] hover:scale-[1.08] transition-transform duration-200"
          >
            <WhatsAppIcon size={24} className="text-white" />
          </motion.a>
        )}
      </AnimatePresence>

    </div>
  );
}
