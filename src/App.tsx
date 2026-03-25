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
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
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
    title: "Toxina Botulínica Nano-Precision",
    description: "Protocolo de precisão molecular para suavizar linhas preservando a naturalidade facial.",
    badge: "Nanotech",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Preenchimento Facial Molecular",
    description: "Restauração de volume e contorno com polímeros de alta biocompatibilidade e pureza.",
    badge: "Molecular",
    image: "https://images.unsplash.com/photo-1512290923403-0ad3396e6d56?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Bioestimuladores Scult Nano",
    description: "Tratamento de flacidez profunda com tecnologia que reprograma a síntese de colágeno.",
    badge: "Firmeza",
    image: "https://images.unsplash.com/photo-1570172619380-2126400a70c5?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Harmonização de Glúteos Tech",
    description: "Projeção e melhora do contorno corporal através de preenchedores de alta coesão.",
    badge: "Corpo",
    image: "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Ultraformer III Dual-Plane",
    description: "Ultrassom micro e macrofocado para lifting facial e corporal em múltiplas camadas.",
    badge: "Tecnologia",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Lavieen Nano-Thulium",
    description: "Laser de thulium fracionado para renovação da superfície cutânea com brilho instantâneo.",
    badge: "BB Laser",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1053bb44?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "Rinomodelação Nano-Struct",
    description: "Refinamento do perfil nasal com preenchedores de alta estabilidade e precisão técnica.",
    badge: "Perfil",
    image: "https://images.unsplash.com/photo-1512290902247-47f808b9938c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "Fios Nano-Lifting",
    description: "Bioestimulação imediata com fios absorvíveis de última geração para sustentação tecidual.",
    badge: "Master",
    image: "https://images.unsplash.com/photo-1616391114022-7f7229090224?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 9,
    title: "Hydra-Nano Booster",
    description: "Injeção de ativos hidrofílicos em escala nanométrica para restauração do equilíbrio hídrico.",
    badge: "Glow",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 10,
    title: "Lipo de Papada Enzimática",
    description: "Dissolução seletiva de tecido adiposo submentoniano com ativos lipolíticos de alta pureza.",
    badge: "Contorno",
    image: "https://images.unsplash.com/photo-1583417651239-93049b4c065f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 11,
    title: "Indução de Colágeno Fotônica",
    description: "Microagulhamento de alta precisão associado a terapia de luz para regeneração acelerada.",
    badge: "Renovação",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 12,
    title: "Protocolo Melasma Bio-Control",
    description: "Gerenciamento avançado de hiperpigmentação com bloqueadores enzimáticos nanométricos.",
    badge: "Clareamento",
    image: "https://images.unsplash.com/photo-1616391182219-e080b4d1043a?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 13,
    title: "Revitalização de Olheiras Tech",
    description: "Correção de sulcos e pigmentação orbital com ativos regeneradores de alta permeação.",
    badge: "Olhar",
    image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 14,
    title: "Peeling Nano-Encapsulado",
    description: "Renovação celular controlada com ativos nano-encapsulados para máxima segurança.",
    badge: "Pele Nova",
    image: "https://images.unsplash.com/photo-1614851101186-aa68d6f3080c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 15,
    title: "Limpeza de Pele Inteligente",
    description: "Extração técnica aliada à tecnologia sônica para desinflamação e assepsia profunda.",
    badge: "Saúde",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 16,
    title: "Duno Glow Nano-Boost",
    description: "Combinação exclusiva de nano-ativos para luminosidade e hidratação molecular imediata.",
    badge: "Exclusivo",
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 17,
    title: "Body Tech Sculpture",
    description: "Protocolo de contorno corporal que une drenagem técnica e ativos liporredutores celulares.",
    badge: "Bem-estar",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 18,
    title: "Criolipólise Tech-Shape",
    description: "Tecnologia de resfriamento inteligente para eliminação estratégica de gordura focalizada.",
    badge: "Corpo",
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 19,
    title: "Remodelamento Nano-Body",
    description: "Tratamento para flacidez com tecnologia que reconstrói as redes de colágeno e elastina.",
    badge: "Firmeza",
    image: "https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 20,
    title: "Microdermoabrasão Nano",
    description: "Esfoliação física de alta precisão para renovação imediata da textura e brilho bio-celular.",
    badge: "Renovação",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop"
  }
];

// === RESULTADOS ===
const RESULTS = [
  {
    before: "https://images.unsplash.com/photo-1512290902247-47f808b9938c?q=80&w=800&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop",
    title: "Harmonização de Alta Precisão"
  },
  {
    before: "https://images.unsplash.com/photo-1614851101186-aa68d6f3080c?q=80&w=800&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop",
    title: "Protocolo Regenera Nano"
  }
];

// === DEPOIMENTOS ===
const TESTIMONIALS = [
  {
    id: 1,
    name: "Mariana Silva",
    text: "A tecnologia Nano da Duno é revolucionária. Fiz a harmonização e o resultado de lifting imediato foi surpreendente.",
    role: "Paciente Premium",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Ricardo Oliveira",
    text: "Equipamentos de ponta e uma equipe que realmente entende de ciência estética. O melhor do Itaim Bibi.",
    role: "Paciente Tech-Shape",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Carla Mendes",
    text: "O protocolo Nano-Boost mudou minha percepção sobre skincare profissional. Pele iluminada e regenerada.",
    role: "Paciente Duno Glow",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
  }
];

// === COMPONENTES AUXILIARES ===
const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`mb-4 border rounded-3xl overflow-hidden transition-all duration-500 ${isOpen ? 'bg-primary/5 border-primary/20 shadow-lg translate-y-[-4px]' : 'bg-white border-primary/5 shadow-sm hover:border-primary/20'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-8 text-left focus:outline-none"
      >
        <span className={`font-serif text-xl transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-clinic-text'}`}>{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 1.2 : 1 }}
          className={isOpen ? 'text-primary' : 'text-primary/40'}
        >
          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-primary/10' : 'bg-transparent'}`}>
            <ArrowUp size={20} className={isOpen ? 'rotate-0' : 'rotate-180'} />
          </div>
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
            <div className="px-8 pb-8 text-clinic-text/60 text-base leading-relaxed border-t border-primary/5 pt-6">
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
                  <div className="w-32 h-32 border border-primary/10 rounded-full flex items-center justify-center bg-clinic-bg/50 backdrop-blur-sm shadow-inner overflow-hidden">
                    <motion.div 
                      animate={{ 
                        rotate: [0, 360],
                      }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 border-t-2 border-primary/20 rounded-full"
                    />
                    <span className="font-serif text-6xl text-primary font-light tracking-tighter drop-shadow-sm">D</span>
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
                <h2 className="font-serif text-5xl text-clinic-text tracking-[0.3em] font-light mb-4">DUNO</h2>
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
          <a href="#início" className="flex items-center gap-3 group shrink-0 relative py-2">
            <div className="relative">
              <div className="w-9 h-9 border border-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500 overflow-hidden">
                <motion.div 
                   whileHover={{ rotate: 180 }}
                   className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-10 transition-opacity"
                />
                <span className="font-serif text-xl text-primary group-hover:text-white font-light tracking-tighter transition-colors">D</span>
              </div>
              <div className="absolute -inset-1 border border-primary/5 rounded-full group-hover:border-primary/20 transition-all duration-500 group-hover:scale-110" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl md:text-2xl font-light tracking-[0.1em] text-clinic-text group-hover:text-primary transition-colors leading-none">
                DUNO
              </span>
              <span className="text-[6px] uppercase tracking-[0.2em] text-primary font-bold mt-1 ml-0.5 opacity-60 group-hover:opacity-100 transition-all">
                Estética Médica
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-12">
            <div className="flex items-center gap-6 xl:gap-10">
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
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[70] bg-white/95 backdrop-blur-2xl pt-32 px-8 lg:hidden flex flex-col items-center justify-center gap-12"
          >
            <div className="flex flex-col gap-10 text-center w-full max-w-xs mx-auto">
              {['Início', 'Sobre', 'Serviços', 'Resultados', 'Depoimentos', 'Localização', 'FAQ'].map((item, i) => (
                <motion.a 
                  key={item} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  href={`#${item.toLowerCase() === 'localização' ? 'localização' : item.toLowerCase()}`} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-serif text-clinic-text tracking-tight hover:text-primary transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  {item}
                </motion.a>
              ))}
              <motion.a 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                href={whatsappUrl} 
                className="btn-primary py-6 text-sm rounded-full flex items-center justify-center gap-3 shadow-2xl hover:shadow-primary/20"
              >
                <WhatsAppIcon size={20} /> Agendar Agora
              </motion.a>
            </div>
            <div className="mt-8 text-[8px] uppercase tracking-[0.3em] font-bold text-clinic-text/30">
              Duno Estética Médica • Itaim Bibi
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="início" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1600&auto=format&fit=crop" 
            alt="Duno Estética Nanotecnologia Avançada" 
            className="w-full h-full object-cover brightness-[0.75] contrast-[1.1] scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent md:via-white/60" />
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
              Realçando sua <br />
              <span className="relative inline-block italic text-primary overflow-hidden group">
                Beleza Natural 
                <motion.div 
                   animate={{ left: ['-100%', '200%'] }}
                   transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                   className="absolute top-0 w-20 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-30deg] pointer-events-none"
                />
              </span>
              <br className="hidden md:block" /> com Ciência.
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
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.id}
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: { opacity: 1, scale: 1 }
                }}
                transition={{ duration: 0.5 }}
                className={`group relative rounded-[2rem] overflow-hidden shadow-lg h-[400px] cursor-pointer ${
                  i % 5 === 0 ? "lg:col-span-2" : "col-span-1"
                }`}
              >
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay Degradê Sombrio e Elegante (Dark Navy Fade) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080d19] via-[#080d19]/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
                    <span className="inline-block bg-[#2563eb] text-white text-[9px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 shadow-md">
                      {service.badge}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-serif text-white mb-2 leading-tight drop-shadow-lg">
                      {service.title}
                    </h3>
                  </div>
                  
                  {/* Descrição e Link escondidos que surgem no hover */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500">
                    <div className="overflow-hidden">
                      <div className="pt-2">
                        <p className="text-sm text-white/80 mb-5 leading-relaxed font-sans font-light max-w-sm">
                          {service.description}
                        </p>
                        <a href={whatsappUrl} className="inline-flex items-center gap-2 text-[10px] text-[#60a5fa] hover:text-white transition-colors uppercase font-bold tracking-[0.2em]">
                          Agendar Consulta <ArrowRight size={14} />
                        </a>
                      </div>
                    </div>
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
                  <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop" alt="Ambiente Duno 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg group">
                  <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop" alt="Ambiente Duno 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg group">
                  <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop" alt="Tecnologia de Ponta" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg group">
                  <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop" alt="Clínica Inteligente" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
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
