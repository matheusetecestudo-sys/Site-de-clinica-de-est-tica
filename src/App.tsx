import { useState, useEffect, useRef } from 'react';
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
  Syringe,
  Droplet,
  Zap,
  Waves,
  Target,
  ArrowUp,
  Grid,
  Sun,
  Eye,
  FlaskConical,
  Lightbulb,
  Stars,
  Hand,
  Snowflake,
  Activity,
  Gem,
  Smile,
  User,
  Scissors,
  Quote
} from 'lucide-react';

const WhatsAppIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

// === CONFIGURAÇÕES DO CLIENTE (EDITÁVEL) ===
const CLIENT_CONFIG = {
  name: "Duno",
  professional: "Dra. Beatriz Cavalcanti",
  specialty: "Especialista em Harmonização Facial & Bioestimuladores",
  experience: "20+ anos de experiência clínica",
  whatsapp: "5511992876219",
  city: "São Paulo, SP",
  address: "Rua Joaquim Floriano, 72 - Itaim Bibi, São Paulo",
  email: "contato@dunoestetica.com.br",
  about: "Com mais de duas décadas dedicadas à arte da estética médica, a Duno Estética trabalha unindo ciência avançada a um olhar artístico apurado para realçar a beleza única de cada paciente. Nossa clínica é um oásis de luxo, tecnologia e resultados de alta performance.",
};

const SERVICES = [
  {
    id: 1,
    title: "Toxina Botulínica",
    description: "Suavização de rugas e linhas de expressão com resultados naturais e sofisticados.",
    badge: "Essencial",
    image: "https://images.unsplash.com/photo-1512290902247-47f808b9938c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Preenchimento Labial",
    description: "Escultura labial para volume, contorno e hidratação profunda personalizada.",
    badge: "Destaque",
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Bioestimuladores",
    description: "Estímulo de colágeno para firmeza, elasticidade e rejuvenescimento da pele.",
    badge: "Premium",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Harmonização Facial",
    description: "Análise estética global para equilibrar e realçar seus traços mais belos.",
    badge: "Elite",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Laser Lavieen",
    description: "O famoso 'BB Laser' para textura de porcelana e brilho instantâneo.",
    badge: "Tecnologia",
    image: "https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Ultraformer III",
    description: "Lifting facial e corporal sem cortes através de ultrassom focado de alta intensidade.",
    badge: "Lifting",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "Rinomodelação",
    description: "Correção estética do nariz com ácido hialurônico, sem necessidade de cirurgia plástica.",
    badge: "Perfil",
    image: "https://images.unsplash.com/photo-1512290902247-47f808b9938c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "Fios de Sustentação",
    description: "Efeito lifting imediato e bioestimulação com fios de PDO totalmente absorvíveis.",
    badge: "Master",
    image: "https://images.unsplash.com/photo-1570172619380-2126400a70c5?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 9,
    title: "Skinbooster",
    description: "Hidratação injetável profunda que devolve o viço, a maciez e a elasticidade à pele.",
    badge: "Glow",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 10,
    title: "Lipo de Papada",
    description: "Redução da gordura submentoniana através de enzimas especializadas e seguras.",
    badge: "Contorno",
    image: "https://images.unsplash.com/photo-1512290902247-47f808b9938c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 11,
    title: "Microagulhamento",
    description: "Indução de colágeno com drug delivery para tratar cicatrizes de acne e textura.",
    badge: "Renovação",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 12,
    title: "Tratamento de Melasma",
    description: "Protocolos clareadores avançados para controle de manchas e tom de pele uniforme.",
    badge: "Clareamento",
    image: "https://images.unsplash.com/photo-1616391182219-e080b4d1043a?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 13,
    title: "Preenchimento de Olheiras",
    description: "Suavização do sulco lacrimal para um olhar descansado, jovem e revitalizado.",
    badge: "Olhar",
    image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 14,
    title: "Peeling Químico",
    description: "Renovação celular controlada para tratar acne, manchas e sinais de envelhecimento.",
    badge: "Pele Nova",
    image: "https://images.unsplash.com/photo-1570172619380-2126400a70c5?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 15,
    title: "Limpeza de Pele Fotônica",
    description: "Extração profunda aliada à fototerapia para desinflamação e assepsia da pele.",
    badge: "Saúde",
    image: "https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 16,
    title: "Protocolo Duno Glow",
    description: "Combinação exclusiva de ativos para luminosidade máxima e hidratação intensa.",
    badge: "Exclusivo",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 17,
    title: "Drenagem Linfática Duno",
    description: "Protocolo exclusivo para redução de inchaço e detox corporal com resultados imediatos.",
    badge: "Bem-estar",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 18,
    title: "Criolipólise de Contorno",
    description: "Tecnologia de resfriamento controlado para eliminação definitiva de gordura localizada.",
    badge: "Corpo",
    image: "https://images.unsplash.com/photo-1512290902247-47f808b9938c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 19,
    title: "Radiofrequência Corporal",
    description: "Tratamento avançado para flacidez e melhora significativa da qualidade da pele.",
    badge: "Firmeza",
    image: "https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 20,
    title: "Peeling de Diamante",
    description: "Esfoliação física profunda para renovação imediata da textura e brilho cutâneo.",
    badge: "Renovação",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop"
  }
];

// === RESULTADOS ===
const RESULTS = [
  {
    before: "https://images.unsplash.com/photo-1512290902247-47f808b9938c?q=80&w=800&auto=format&fit=crop",
    after: "/images/harmonizacao.png",
    title: "Harmonização Facial"
  },
  {
    before: "https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?q=80&w=800&auto=format&fit=crop",
    after: "/images/procedimento.png",
    title: "Protocolo Renovare"
  }
];

// === DEPOIMENTOS ===
const TESTIMONIALS = [
  {
    id: 1,
    name: "Mariana Silva",
    text: "A Dra. Beatriz é incrível! O resultado da minha harmonização ficou super natural, exatamente como eu queria. Recomendo de olhos fechados.",
    role: "Paciente de Harmonização",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Ricardo Oliveira",
    text: "Excelente atendimento e tecnologia de ponta. Fiz o Ultraformer III e os resultados foram surpreendentes. Equipe muito atenciosa.",
    role: "Paciente de Ultraformer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Carla Mendes",
    text: "O protocolo Duno Glow mudou minha pele. Sinto meu rosto muito mais iluminado e hidratado. A clínica é linda e muito acolhedora.",
    role: "Paciente de Protocolo Duno Glow",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
  }
];

// === COMPONENTES AUXILIARES ===
const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-4 border border-primary/10 rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
      >
        <span className="font-serif text-lg text-clinic-text hover:text-primary transition-colors">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-primary"
        >
          <ArrowUp size={20} className={isOpen ? 'rotate-0' : 'rotate-180'} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-clinic-text/70 text-sm leading-relaxed border-t border-primary/5 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-12 md:max-w-md z-[100] glass-card p-6 rounded-2xl shadow-2xl border border-primary/20 backdrop-blur-2xl"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-primary">
              <ShieldCheck size={24} />
              <span className="font-serif text-lg font-bold">Privacidade & Cookies</span>
            </div>
            <p className="text-xs text-clinic-text/70 leading-relaxed font-sans">
              Utilizamos cookies para melhorar sua experiência e oferecer conteúdos personalizados de acordo com a nossa Política de Privacidade. Ao continuar, você concorda com estas condições.
            </p>
            <div className="flex gap-4">
              <button onClick={accept} className="flex-1 bg-primary text-white text-[10px] uppercase tracking-widest font-bold py-3 rounded-xl hover:bg-secondary transition-all">
                Aceitar e Continuar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const MobileStickyCTA = ({ whatsappUrl }: { whatsappUrl: string }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[85] p-4 bg-white/95 backdrop-blur-xl border-t border-primary/10 shadow-[0_-10px_30px_rgba(219,39,119,0.1)]">
      <a href={whatsappUrl} className="btn-primary w-full rounded-2xl gap-3 text-xs font-bold tracking-[0.2em] h-14">
        <WhatsAppIcon size={18} /> AGENDAR MINHA AVALIAÇÃO
      </a>
    </div>
  );
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const whatsappUrl = `https://wa.me/${CLIENT_CONFIG.whatsapp}?text=${encodeURIComponent("Olá! Gostaria de agendar uma avaliação.")}`;

  return (
    <div className="min-h-screen selection:bg-primary selection:text-white">
      {/* Cinematic Loading Screen */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ 
              y: '-100%',
              transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
            }}
            className="fixed inset-0 z-[200] bg-white flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Background Grain/Texture effect overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
            
            <div className="relative flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="mb-12"
              >
                <div className="relative group">
                  <div className="w-48 h-48 border border-primary/10 rounded-full flex items-center justify-center bg-clinic-bg/50 backdrop-blur-sm shadow-inner overflow-hidden">
                    <motion.div 
                      animate={{ 
                        rotate: [0, 360],
                      }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 border-t-2 border-primary/20 rounded-full"
                    />
                    <span className="font-serif text-8xl text-primary font-light tracking-tighter drop-shadow-sm">D</span>
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -inset-8 bg-primary/5 rounded-full blur-3xl"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-center"
              >
                <h2 className="font-serif text-6xl text-clinic-text tracking-[0.3em] font-light mb-4">DUNO</h2>
                <div className="flex items-center justify-center gap-4">
                  <div className="h-[1px] w-8 bg-primary/30" />
                  <p className="text-primary text-[10px] uppercase tracking-[0.6em] font-sans font-bold">Estética Avançada</p>
                  <div className="h-[1px] w-8 bg-primary/30" />
                </div>
              </motion.div>

              {/* Progress Container */}
              <div className="mt-16 w-64 h-[2px] bg-primary/5 relative overflow-hidden rounded-full">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                  onAnimationComplete={() => setTimeout(() => setIsLoading(false), 500)}
                  className="absolute inset-y-0 left-0 bg-primary shadow-[0_0_10px_rgba(219,39,119,0.5)]"
                />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-[0.5em] text-clinic-text font-sans font-medium"
            >
              Elevando o conceito de beleza
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Floating WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[90] bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.3)] animate-pulse-whatsapp flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_15px_30px_rgba(37,211,102,0.4)] group"
        aria-label="Fale conosco no WhatsApp"
      >
        <WhatsAppIcon size={32} className="transition-transform group-hover:rotate-12" />
      </a>

      {/* Back to Top */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-28 right-8 z-[90] bg-white text-primary p-4 rounded-full shadow-lg border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className={`fixed w-full z-[80] transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-xl py-4 shadow-[0_4px_20px_rgba(212,175,119,0.1)] border-b border-primary/20' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center w-full">
          {/* Logo */}
          <a href="#início" className="flex items-center gap-5 group shrink-0 relative">
            <div className="relative">
              <div className="w-14 h-14 border border-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500 overflow-hidden">
                <motion.div 
                   whileHover={{ rotate: 180 }}
                   className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-10 transition-opacity"
                />
                <span className="font-serif text-4xl text-primary group-hover:text-white font-light tracking-tighter transition-colors">D</span>
              </div>
              {/* Animated Ring */}
              <div className="absolute -inset-1 border border-primary/5 rounded-full group-hover:border-primary/20 transition-all duration-500 group-hover:scale-110" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-4xl font-light tracking-[0.2em] text-clinic-text group-hover:text-primary transition-colors">
                DUNO
              </span>
              <span className="text-[8px] uppercase tracking-[0.4em] text-primary font-bold -mt-1 ml-1 opacity-60 group-hover:opacity-100 transition-all">
                Estética Médica
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10 xl:gap-20 ml-auto">
            <div className="flex items-center gap-8 xl:gap-12">
              {['Início', 'Sobre', 'Serviços', 'Resultados', 'Depoimentos', 'Localização', 'FAQ'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase() === 'localização' ? 'localização' : item.toLowerCase()}`} 
                  className="text-[11px] uppercase tracking-[0.2em] font-sans font-bold text-clinic-text/80 hover:text-primary transition-all duration-300 whitespace-nowrap"
                >
                  {item}
                </a>
              ))}
            </div>
            <a href={whatsappUrl} className="btn-primary h-12 px-8 text-xs rounded-full flex items-center gap-3 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-0.5 whitespace-nowrap">
              <WhatsAppIcon size={16} /> Agendar Agora
            </a>
          </div>

          <button className="lg:hidden text-clinic-text p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[70] bg-white pt-32 px-8 lg:hidden"
          >
            <div className="flex flex-col gap-10 text-center">
              {['Início', 'Sobre', 'Serviços', 'Resultados', 'Depoimentos', 'Localização', 'FAQ'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase() === 'localização' ? 'localização' : item.toLowerCase()}`} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif text-clinic-text tracking-tight hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
              <a href={whatsappUrl} className="btn-primary py-4 rounded-full flex items-center justify-center gap-2">
                <WhatsAppIcon size={18} /> Agendar Agora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="início" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero.png" 
            alt="Aura Estética Premium" 
            className="w-full h-full object-cover brightness-[0.85]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent md:via-white/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="section-subtitle">Excelência em Estética Médica</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 leading-[1.1] text-clinic-text">
              Realçando sua <span className="italic text-primary">Beleza Natural</span> com Ciência.
            </h1>
            <p className="text-lg text-clinic-text/70 mb-10 font-sans leading-relaxed max-w-lg">
              Protocolos exclusivos desenvolvidos pela {CLIENT_CONFIG.professional}, unindo 20 anos de experiência e as tecnologias mais avançadas do mundo.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mt-12 items-center sm:items-stretch">
              <a href={whatsappUrl} className="btn-primary flex-1 min-w-[280px] rounded-full gap-3 shadow-2xl h-16 text-sm">
                <WhatsAppIcon size={20} /> Agendar Avaliação <ArrowRight size={18} />
              </a>
              <a href="#serviços" className="bg-white/90 backdrop-blur-sm border border-clinic-border px-10 h-16 rounded-full text-xs uppercase tracking-widest font-sans font-bold flex items-center justify-center hover:bg-white transition-all flex-1 min-w-[280px] shadow-lg">
                Ver Procedimentos
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative z-10 -mt-10 mx-6 md:mx-12 rounded-3xl shadow-2xl border border-primary/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          <div className="flex flex-col gap-2">
            <span className="text-4xl md:text-5xl font-serif font-bold text-primary">22+</span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-sans font-bold text-clinic-text/40">Anos de Experiência</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-4xl md:text-5xl font-serif font-bold text-primary">15k+</span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-sans font-bold text-clinic-text/40">Atendimentos</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-4xl md:text-5xl font-serif font-bold text-primary">100%</span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-sans font-bold text-clinic-text/40">Segurança Médica</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-4xl md:text-5xl font-serif font-bold text-primary">Elite</span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-sans font-bold text-clinic-text/40">Padrão Internacional</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/doutora.png" 
                alt={CLIENT_CONFIG.professional} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 glass-card p-8 rounded-xl hidden md:block max-w-xs premium-card-hover">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Award size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-primary">Experiência</p>
                  <p className="font-serif text-xl">20+ Anos</p>
                </div>
              </div>
              <p className="text-sm text-clinic-text/60 italic">"A estética é a harmonia entre o que somos e o que projetamos."</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-subtitle">A Profissional</span>
            <h2 className="section-title">{CLIENT_CONFIG.professional}</h2>
            <p className="text-primary font-sans font-bold mb-6 tracking-widest uppercase text-sm">{CLIENT_CONFIG.specialty}</p>
            <div className="space-y-6 text-clinic-text/70 leading-relaxed mb-10">
              <p>{CLIENT_CONFIG.about}</p>
              <ul className="space-y-4">
                {[
                  "Membro Titular das principais sociedades de estética",
                  "Speaker internacional em tecnologias de bioestimulação",
                  "Mais de 15.000 procedimentos realizados com sucesso",
                  "Pioneira em técnicas de naturalização facial"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-primary shrink-0" />
                    <span className="text-sm font-sans">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a href={whatsappUrl} className="btn-primary px-10 py-5 rounded-full inline-flex items-center gap-3">
              Falar com Especialista <WhatsAppIcon size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-16 bg-white border-y border-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
            <div className="flex items-center gap-4 group">
              <ShieldCheck size={32} className="text-primary group-hover:scale-110 transition-transform" />
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold">Certificação</span>
                <span className="text-[10px] uppercase tracking-widest text-primary font-bold">Especialista Ativa</span>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <Award size={32} className="text-primary group-hover:scale-110 transition-transform" />
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold">Excelência</span>
                <span className="text-[10px] uppercase tracking-widest text-primary font-bold">Prêmio Quality 2024</span>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <Stars size={32} className="text-primary group-hover:scale-110 transition-transform" />
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold">Membro Premium</span>
                <span className="text-[10px] uppercase tracking-widest text-primary font-bold">Sociedade de Estética</span>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <Sparkles size={32} className="text-primary group-hover:scale-110 transition-transform" />
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold">Tecnologia</span>
                <span className="text-[10px] uppercase tracking-widest text-primary font-bold">Equipamentos de Ponta</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Rewards */}
      <section id="serviços" className="section-padding bg-clinic-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="section-subtitle">Tratamentos Exclusivos</span>
            <h2 className="section-title">Nossos Protocolos</h2>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-clinic-border premium-card-hover hover:border-primary/30 hover:shadow-[0_20px_40px_rgba(212,175,119,0.15)]"
              >
                {/* Shine Effect Overlay */}
                <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
                  <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg] transition-all duration-1000 group-hover:left-[150%]" />
                </div>

                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    {service.badge}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif text-clinic-text group-hover:text-primary transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-clinic-text/60 mb-6 leading-relaxed">{service.description}</p>
                  <div className="mt-auto pt-6 border-t border-primary/5">
                    <a href={whatsappUrl} className="btn-primary w-full h-11 text-[10px] rounded-xl flex items-center gap-2 group/link tracking-[0.2em]">
                      Agendar Agora <ChevronRight size={14} className="transition-transform group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Ambience Gallery Section */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <span className="section-subtitle">Oásis de Bem-estar</span>
              <h2 className="section-title">Um Ambiente Planejado para sua Experiência</h2>
              <p className="text-lg text-clinic-text/60 max-w-lg leading-relaxed mb-8">
                Nossa clínica no Itaim Bibi combina o que há de mais moderno em design de interiores com tecnologias de ponta, criando um espaço de total conforto, privacidade e exclusividade.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-md">
                      <img src={`https://i.pravatar.cc/100?u=${i}`} alt="Paciente" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <span className="text-sm font-sans font-medium text-clinic-text/80">Aprovada por pacientes de elite</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg group">
                  <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop" alt="Clínica 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg group">
                  <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop" alt="Clínica 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg group">
                  <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop" alt="Clínica 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg group">
                  <img src="https://images.unsplash.com/photo-1590233648558-f3dcd9641470?q=80&w=800&auto=format&fit=crop" alt="Clínica 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results / Before & After Slider Placeholder */}
      <section id="resultados" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="section-subtitle">Transformações Reais</span>
            <h2 className="section-title">Resultados Duno</h2>
            <p className="text-clinic-text/60 max-w-2xl mx-auto">Respeitando a ética médica, apresentamos resultados que priorizam a naturalidade e a saúde da pele.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {RESULTS.map((result, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl shadow-lg premium-card-hover">
                <div className="grid grid-cols-2 gap-1">
                  <div className="relative">
                    <img src={result.before} alt="Antes" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <span className="absolute bottom-4 left-4 bg-black/50 text-white text-[10px] px-3 py-1 rounded-full uppercase tracking-widest backdrop-blur-sm">Antes</span>
                  </div>
                  <div className="relative">
                    <img src={result.after} alt="Depois" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <span className="absolute bottom-4 right-4 bg-primary text-white text-[10px] px-3 py-1 rounded-full uppercase tracking-widest">Depois</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <a href={whatsappUrl} className="bg-white text-primary px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl flex items-center gap-2">
                    <WhatsAppIcon size={14} /> Quero este resultado
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="section-subtitle">Experiências Aura</span>
            <h2 className="section-title">O que dizem nossos pacientes</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, i) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-clinic-bg p-8 rounded-2xl border border-clinic-border relative"
              >
                <div className="absolute -top-4 left-8 text-primary opacity-20">
                  <Quote size={40} fill="currentColor" />
                </div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-clinic-text/80 italic mb-8 leading-relaxed relative z-10">"{testimonial.text}"</p>
                <div className="flex items-center gap-4 border-t border-primary/10 pt-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary/20 shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <p className="font-serif text-clinic-text font-bold text-lg">{testimonial.name}</p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Location Section with Map */}
      <section id="localização" className="section-padding bg-clinic-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="section-subtitle">Onde Estamos</span>
            <h2 className="section-title">Duno Itaim Bibi</h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12 items-stretch">
            <div className="lg:col-span-1 flex flex-col gap-8">
              <div className="glass-card p-10 rounded-2xl border-primary/10 shadow-xl group premium-card-hover h-full flex flex-col justify-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <MapPin size={28} />
                </div>
                <h4 className="text-2xl font-serif mb-4">Endereço</h4>
                <p className="text-clinic-text/60 leading-relaxed mb-6 font-sans">
                  {CLIENT_CONFIG.address}<br />
                  {CLIENT_CONFIG.city}<br />
                  CEP: 04534-000
                </p>
                <a 
                  href="https://maps.app.goo.gl/YourActualLink" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2"
                >
                  Abrir no Google Maps <ArrowRight size={14} />
                </a>
              </div>
            </div>

            <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-2xl border border-primary/10 h-[450px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.3308828552393!2d-46.67498772412806!3d-23.592474962295692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57530444379b%3A0x6b5e024220fa9449!2sRua%20Joaquim%20Floriano%2C%2072%20-%20Itaim%20Bibi%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004534-000!5e0!3m2!1spt-BR!2sbr!4v1711310000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1) opacity(0.9)' }} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Duno Estética"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-subtitle">Dúvidas Frequentes</span>
            <h2 className="section-title">Esclareça suas Perguntas</h2>
          </div>

          <div className="space-y-4">
            <FAQItem 
              question="Os procedimentos de harmonização facial dóem?" 
              answer="Utilizamos as técnicas mais avançadas de anestesia local e tópica, garantindo o máximo conforto durante todo o processo. A maioria dos pacientes relata apenas um leve desconforto."
            />
            <FAQItem 
              question="Quanto tempo duram os resultados do Botox?" 
              answer="Em média, os resultados da toxina botulínica duram de 4 a 6 meses, variando conforme o metabolismo de cada paciente e o estilo de vida."
            />
            <FAQItem 
              question="Qual o tempo de recuperação dos Bioestimuladores?" 
              answer="O retorno às atividades cotidianas é imediato. Pode haver um leve inchaço ou pequenos pontos de equimose, que regridem em poucos dias."
            />
            <FAQItem 
              question="A Duno oferece algum plano de acompanhamento?" 
              answer="Sim! Nossos protocolos incluem consultas de retorno para avaliação e refinamento, garantindo que o resultado final seja exatamente o desejado."
            />
            <FAQItem 
              question="Qual a idade ideal para começar os tratamentos?" 
              answer="Não existe uma idade fixa. A prevenção é a melhor estratégia, e muitos pacientes iniciam protocolos preventivos a partir dos 25-30 anos para manter a qualidade da pele e prevenir sinais profundos."
            />
          </div>
        </div>
      </section>

      {/* Location / Map Section */}
      <section id="localização" className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-subtitle">Onde Estamos</span>
              <h2 className="section-title">Localização Privilegiada</h2>
              <p className="text-clinic-text/70 mb-10 leading-relaxed">
                Situada no coração do Itaim Bibi, nossa clínica oferece segurança, discrição e facilidade de acesso para proporcionar a melhor experiência desde a sua chegada.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex gap-4 p-6 bg-clinic-bg rounded-xl border border-clinic-border">
                  <MapPin size={24} className="text-primary shrink-0" />
                  <div>
                    <h4 className="font-serif text-lg font-bold mb-1">Endereço</h4>
                    <p className="text-sm text-clinic-text/60">{CLIENT_CONFIG.address}, {CLIENT_CONFIG.city}</p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-6 bg-clinic-bg rounded-xl border border-clinic-border">
                  <Clock size={24} className="text-primary shrink-0" />
                  <div>
                    <h4 className="font-serif text-lg font-bold mb-1">Horários</h4>
                    <p className="text-sm text-clinic-text/60">Segunda a Sexta: 09h às 19h<br />Sábado: 09h às 13h</p>
                  </div>
                </div>
              </div>

              <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(CLIENT_CONFIG.address)}`} target="_blank" rel="noopener noreferrer" className="btn-primary px-10 py-5 rounded-full inline-flex items-center gap-3">
                Como Chegar <ArrowRight size={18} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.3314619726895!2d-46.685361!3d-23.592477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57426e255555%3A0x6a6d6d6d6d6d6d6d!2sAv.%20Brigadeiro%20Faria%20Lima%2C%201485%20-%20Itaim%20Bibi%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary border border-primary/20">
                <span className="font-serif text-2xl font-bold">D</span>
              </div>
              <span className="font-serif text-3xl tracking-tighter uppercase">{CLIENT_CONFIG.name}</span>
            </div>
            <p className="text-white/60 max-w-md mb-8 leading-relaxed">
              Elevando o padrão da estética médica com ética, naturalidade e tecnologia. Mais de duas décadas transformando vidas através da beleza consciente na Duno Estética.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all"><Facebook size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-8">Links Rápidos</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><a href="#início" className="hover:text-primary transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre</a></li>
              <li><a href="#serviços" className="hover:text-primary transition-colors">Serviços</a></li>
              <li><a href="#resultados" className="hover:text-primary transition-colors">Resultados</a></li>
              <li><a href="#depoimentos" className="hover:text-primary transition-colors">Depoimentos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-8">Contato</h4>
            <ul className="space-y-6 text-white/60 text-sm">
              <li className="flex gap-4">
                <MapPin size={20} className="text-primary shrink-0" />
                <span>{CLIENT_CONFIG.address}<br />{CLIENT_CONFIG.city}</span>
              </li>
              <li className="flex gap-4">
                <Phone size={20} className="text-primary shrink-0" />
                <span>(11) 99287-6219</span>
              </li>
              <li className="flex gap-4">
                <Clock size={20} className="text-primary shrink-0" />
                <span>Seg - Sex: 09h às 19h<br />Sáb: 09h às 13h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-white/20">
          <p>© 2026 {CLIENT_CONFIG.name}. Todos os direitos reservados.</p>
          <p>Desenvolvido com excelência para clínicas de elite.</p>
        </div>
      </footer>

      <CookieBanner />
      <MobileStickyCTA whatsappUrl={whatsappUrl} />
    </div>
  );
}
