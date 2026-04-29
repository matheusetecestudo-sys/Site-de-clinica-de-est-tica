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
    title: "Toxina Botulínica",
    description: "Elimina marcas de expressão e restaura a jovialidade natural do rosto.",
    image: "/images/Toxina Botulínica (Botox).png",
    category: "FACIAL"
  },
  {
    title: "Harmonização Facial",
    description: "Equilibra os traços e realça pontos fortes para um perfil simétrico e elegante.",
    image: "/images/Harmonização Facial.png",
    category: "FACIAL"
  },
  {
    title: "Preenchimento Labial",
    description: "Lábios desenhados com naturalidade, devolvendo volume e contorno exato.",
    image: "/images/Preenchimento Labial.jpg",
    category: "FACIAL"
  },
  {
    title: "Bioestimulador de Colágeno",
    description: "Trata a flacidez na raiz, estimulando sustentação e firmeza progressiva.",
    image: "/images/Bioestimulador de Colágeno.png",
    category: "FACIAL E CORPORAL"
  },
  {
    title: "Rejuvenescimento Facial",
    description: "Protocolo completo para devolver viço, textura lisa e tom uniforme à pele.",
    image: "/images/Rejuvenescimento Facial.png",
    category: "FACIAL"
  },
  {
    title: "Skinbooster",
    description: "Hidratação injetável profunda para uma pele iluminada e radiante de dentro para fora.",
    image: "/images/hidratação profunda.webp",
    category: "FACIAL"
  },
  {
    title: "Limpeza de Pele Profunda",
    description: "Purificação intensa com tecnologias faciais para renovação celular e desobstrução.",
    image: "/images/Limpeza de Pele Profunda.jpg",
    category: "ESTÉTICA"
  },
  {
    title: "Tratamento para Acne",
    description: "Controle definitivo de inflamações e redução de marcas para uma pele lisa e saudável.",
    image: "/images/tratamento para acne.webp",
    category: "TRATAMENTO"
  },
  {
    title: "Depilação a Laser",
    description: "Pele permanentemente livre de pelos com tecnologia confortável e indolor.",
    image: "/images/Depilação a leizer.webp",
    category: "CORPORAL"
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
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-350 ${isScrolled ? 'bg-[#0F0F0F]/95 backdrop-blur-[12px] border-b border-gold/20 py-4' : 'bg-transparent py-6'}`}>
        <div className="w-full px-[clamp(24px,5vw,7vw)] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* Emblema */}
            <div className="w-8 h-8 border border-gold/80 flex items-center justify-center shrink-0">
              <span className="font-display text-[14px] text-gold leading-none">D</span>
            </div>
            {/* Wordmark */}
            <div className="flex flex-col leading-none">
              <span className="font-display text-[16px] tracking-[0.28em] uppercase text-white leading-[1.1]">DUNO</span>
              <span className="font-sans text-[8px] tracking-[0.22em] uppercase text-rose leading-[1.4]">ESTÉTICA</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {['Tratamentos', 'A Clínica', 'Resultados', 'Contato'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className={`text-[11px] font-sans uppercase tracking-[0.16em] ${isScrolled ? 'text-white' : 'text-white'} hover:text-rose relative group`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-rose transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a href={whatsappUrl} className="btn-primary py-[10px] px-[24px] text-[10px]">
              AGENDAR CONSULTA
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-black flex flex-col justify-center items-center px-6"
          >
            <button className="absolute top-6 right-6 text-white" onClick={() => setIsMobileMenuOpen(false)}>
              <X size={32} />
            </button>
            <div className="flex flex-col gap-8 text-center items-center">
              {/* Logo no menu mobile */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 border border-gold/80 flex items-center justify-center">
                  <span className="font-display text-[14px] text-gold leading-none">D</span>
                </div>
                <div className="flex flex-col leading-none">
                  <span className="font-display text-[16px] tracking-[0.28em] uppercase text-white leading-[1.1]">DUNO</span>
                  <span className="font-sans text-[8px] tracking-[0.22em] uppercase text-rose leading-[1.4]">ESTÉTICA</span>
                </div>
              </div>
              {['Tratamentos', 'A Clínica', 'Resultados', 'Contato'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="font-display text-[32px] text-white"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* [SEÇÃO 01 — HERO] */}
      <section className="relative min-h-[100dvh] flex flex-col bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/banner01 (3).png" alt="Clínica" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 w-full flex-1 flex flex-col justify-center px-[clamp(24px,5vw,7vw)] pt-[100px]">
          <div className="max-w-[700px]">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <span className="font-sans uppercase text-gold text-[10px] tracking-[0.22em] mb-6 block">CLÍNICA DE ESTÉTICA AVANÇADA — SÃO PAULO</span>
              <h1 className="font-display font-bold text-white text-[clamp(48px,7vw,90px)] leading-[1.0] mb-2">
                Beleza que <br />
                <span className="font-display italic text-rose">Impõe Respeito</span>
              </h1>
              <div className="line-decorative my-[32px] w-[60px] h-[2px]"></div>
              <p className="font-sans text-white/80 text-[18px] md:text-[20px] leading-[1.65] max-w-[500px]">
                Procedimentos de alta performance com resultado natural. Por Dra. Beatriz Cavalcanti.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mt-12 w-full sm:w-auto">
                <a href={whatsappUrl} className="btn-primary w-full sm:w-auto text-center px-[40px]">AGENDAR CONSULTA</a>
                <a href="#tratamentos" className="btn-secondary border-white text-white hover:bg-white hover:text-black w-full sm:w-auto text-center px-[40px]">VER TRATAMENTOS</a>
              </div>
              
              <div className="mt-16 flex items-center gap-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} className="text-gold" size={16} />)}
                </div>
                <span className="font-sans text-[11px] md:text-[12px] uppercase text-gold tracking-[0.14em]">4.9 · +500 pacientes atendidas</span>
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
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold mt-2">Anos de Experiência</span>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="flex flex-col md:pl-8">
              <span className="font-display font-bold text-[48px] md:text-[72px] text-white leading-none">15k+</span>
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold mt-2">Procedimentos Realizados</span>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="flex flex-col md:pl-8">
              <span className="font-display font-bold text-[48px] md:text-[72px] text-white leading-none">100%</span>
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold mt-2">Satisfação das Pacientes</span>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="flex flex-col md:pl-8">
              <span className="font-display font-bold text-[48px] md:text-[72px] text-white leading-none">Elite</span>
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold mt-2">Certificação Internacional</span>
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
              Com mais de duas décadas na medicina estética, a Dra. Beatriz desenvolveu um método que une precisão técnica e naturalidade. Cada protocolo é personalizado — porque nenhum rosto é igual.
            </p>
            
            <ul className="flex flex-col gap-3 mb-10">
              {[
                "Método exclusivo de naturalização facial",
                "Membro titular de sociedades internacionais",
                "Foco absoluto na saúde e integridade da pele",
                "Atendimento intimista e personalizado"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-rose text-[12px] font-bold">—</span>
                  <span className="font-sans text-[15px] text-black">{item}</span>
                </li>
              ))}
            </ul>
            
            <a href={whatsappUrl} className="btn-secondary mb-12">AGENDAR COM A DRA. BEATRIZ</a>
            
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[2px] bg-white">
            {SERVICES.map((srv, i) => (
              <motion.div 
                {...fadeInUp}
                transition={{ delay: i * 0.08 }}
                key={i} 
                className="relative aspect-square group overflow-hidden cursor-pointer"
              >
                <img src={srv.image} alt={srv.title} className="w-full h-full object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.015]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-colors duration-[400ms] group-hover:from-black/85 group-hover:via-black/50" />
                
                <div className="absolute top-4 right-4 bg-rose px-[12px] py-[4px]">
                  <span className="font-sans text-[8px] uppercase text-white tracking-[0.14em]">{srv.category}</span>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-[20px] flex flex-col">
                  <h3 className="font-display text-[22px] text-white mb-2">{srv.title}</h3>
                  <p className="font-sans text-[13px] text-white/70 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-300 overflow-hidden line-clamp-2 mb-3">
                    {srv.description}
                  </p>
                  <a href={whatsappUrl} className="font-sans text-[10px] uppercase text-rose tracking-[0.16em] opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-auto flex items-center gap-1">
                    SAIBA MAIS &rarr;
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
            <a href={whatsappUrl} className="btn-secondary px-[40px]">AGENDAR AVALIAÇÃO</a>
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
        <div className="w-full max-w-[600px] mx-auto flex flex-col items-center">
          <span className="text-label text-gold mb-6">COMECE SUA TRANSFORMAÇÃO</span>
          <h2 className="font-display font-bold text-[clamp(44px,6vw,80px)] text-white leading-[1.0] mb-7">Pronta para<br/>Começar?</h2>
          <div className="line-decorative mb-7"></div>
          <p className="font-sans text-[18px] text-white/60 mb-[48px] max-w-[400px]">Agende agora sua consulta de avaliação.</p>
          <div className="flex flex-col sm:flex-row gap-[20px] w-full sm:w-auto justify-center">
            <a href={whatsappUrl} className="btn-primary w-full sm:w-auto">
              <WhatsAppIcon size={18} /> AGENDAR PELO WHATSAPP
            </a>
            <a href="#tratamentos" className="btn-secondary w-full sm:w-auto">
              VER TRATAMENTOS
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
      <footer className="bg-[#0A0A0A] pt-[64px] pb-[32px] px-[clamp(24px,5vw,7vw)]">
        <div className="w-full mx-auto">
          <div className="grid md:grid-cols-12 gap-12 mb-[40px]">
            <div className="md:col-span-6 flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 border border-gold/50 flex items-center justify-center shrink-0">
                  <span className="font-display text-[14px] text-gold leading-none">D</span>
                </div>
                <div className="flex flex-col leading-none">
                  <span className="font-display text-[16px] tracking-[0.28em] uppercase text-white leading-[1.1]">DUNO</span>
                  <span className="font-sans text-[8px] tracking-[0.22em] uppercase text-rose leading-[1.4]">ESTÉTICA</span>
                </div>
              </div>
              <p className="font-sans text-[12px] text-warm-gray tracking-[0.12em] uppercase">Clínica de Estética Avançada — São Paulo</p>
            </div>
            
            <div className="md:col-span-3 flex flex-col">
              <h4 className="font-sans text-[9px] uppercase text-gold tracking-[0.2em] mb-4">Navegação</h4>
              <ul className="flex flex-col gap-2">
                {['Tratamentos', 'A Clínica', 'Resultados', 'Contato'].map(item => (
                  <li key={item}><a href={`#${item.toLowerCase().replace(' ', '-')}`} className="font-sans text-[13px] text-warm-gray hover:text-rose transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-3 flex flex-col">
              <h4 className="font-sans text-[9px] uppercase text-gold tracking-[0.2em] mb-4">Contato</h4>
              <ul className="flex flex-col gap-2">
                <li className="font-sans text-[13px] text-warm-gray">(11) 99287-6219</li>
                <li className="font-sans text-[13px] text-warm-gray">contato@duno.com.br</li>
                <li className="font-sans text-[13px] text-warm-gray mt-2">Itaim Bibi, São Paulo</li>
              </ul>
            </div>
          </div>

          <div className="h-[1px] w-full bg-gold/20 mb-[20px]"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="font-sans text-[11px] text-warm-gray">© 2025 DUNO. Todos os direitos reservados.</span>
            <span className="font-sans text-[11px] text-warm-gray">Desenvolvido por Matheus</span>
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
