import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Triangle, Terminal, Globe, Cpu, Zap, ArrowUpRight, X, Layers, Code, Eye } from 'lucide-react';
import { GlitchText } from '../components/effects/GlitchText';
import { HackerText } from '../components/effects/HackerText';
import { SoundService } from '../services/soundService';
import { Link } from 'react-router-dom';

const protocols = [
  {
    id: 'invisible-arch',
    title: "ARQUITECTURA INVISIBLE",
    icon: <Globe size={32} />,
    shortDesc: "Estructuras de código que sostienen realidades.",
    fullDesc: "No construimos sitios web; erigimos catedrales de datos. Nuestra arquitectura invisible se basa en la optimización extrema, la seguridad por diseño y la escalabilidad infinita. Cada línea de código es un ladrillo en una fortaleza digital impenetrable.",
    details: ["React Nexus", "Serverless Edge", "Database Sharding", "Micro-Frontends"],
    stats: { efficiency: "99.9%", latency: "<50ms", security: "MIL-SPEC" }
  },
  {
    id: 'interface-psych',
    title: "PSICOLOGÍA DE INTERFAZ",
    icon: <Cpu size={32} />,
    shortDesc: "Diseño que dialoga con el subconsciente.",
    fullDesc: "La interfaz es el lenguaje. Estudiamos los patrones cognitivos del usuario para crear flujos de navegación que se sienten telepáticos. Reducimos la fricción cognitiva a cero, permitiendo una inmersión total en la experiencia de marca.",
    details: ["UX Research", "Cognitive Load Analysis", "Motion Design", "Accessibility First"],
    stats: { retention: "+45%", conversion: "3.2x", friction: "0%" }
  },
  {
    id: 'digital-sigils',
    title: "SIGILOS DIGITALES",
    icon: <Zap size={32} />,
    shortDesc: "Identidades visuales cargadas de intención.",
    fullDesc: "Un logo no es una imagen; es un sigilo. Una marca no es un nombre; es un egregor. Diseñamos sistemas de identidad que actúan como virus meméticos positivos, infectando la cultura con tu visión y valores.",
    details: ["Generative Branding", "Dynamic Logos", "Visual Systems", "Brand Strategy"],
    stats: { impact: "HIGH", recall: "98%", virality: "POTENT" }
  }
];

const Home = () => {
  const [activeProtocol, setActiveProtocol] = useState<typeof protocols[0] | null>(null);

  const handleInteraction = () => {
    SoundService.init();
    SoundService.playClick();
  };

  return (
    <div className="bg-dark" onMouseEnter={() => SoundService.init()}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-dark">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent opacity-40"></div>
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
          
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gold rounded-full opacity-20"
              initial={{
                x: Math.random() * 1000,
                y: Math.random() * 1000,
              }}
              animate={{
                y: [null, Math.random() * -100],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-5xl px-4">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <h1 className="text-[20vw] md:text-[12vw] leading-[0.8] font-bold tracking-tighter uppercase mix-blend-overlay opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none whitespace-nowrap">
              1618 LAB
            </h1>
            <div className="relative inline-block">
               <GlitchText text="1618 LAB" as="h1" className="text-5xl md:text-9xl font-bold tracking-tighter mb-2 text-white" />
               <motion.div 
                 className="absolute -right-12 top-0 text-gold"
                 animate={{ rotate: 360 }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               >
                 <Triangle size={40} strokeWidth={1} />
               </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-4xl font-serif italic tracking-widest text-gold mb-8 min-h-[1.5em] flex items-center justify-center">
              <HackerText text="Digital Alchemy" />
            </h2>
          </motion.div>

          <div className="relative w-full max-w-lg mx-auto aspect-video border border-gold/30 bg-black/50 backdrop-blur-sm p-1 flex items-center justify-center overflow-hidden group">
              <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                  <div className="w-32 h-32 md:w-48 md:h-48 border-2 border-gold rounded-full flex items-center justify-center relative">
                      <Triangle size={64} className="text-gold animate-pulse" />
                      <div className="absolute inset-0 border border-gold/30 rounded-full scale-125 animate-[spin_10s_linear_infinite]"></div>
                      <div className="absolute inset-0 border border-gold/30 rounded-full scale-150 animate-[spin_15s_linear_infinite_reverse]"></div>
                  </div>
                  <p className="mt-4 font-mono text-xs text-gold/80 text-center">SYSTEM_BREACH_DETECTED</p>
              </div>
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gold"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gold"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gold"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gold"></div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 space-y-2"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 leading-[0.9]">
              TRANSMUTING<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600 font-serif italic">DIGITAL</span><br />
              REALITY
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-2 text-sm font-mono text-gold/80 border border-gold/30 px-3 py-1 rounded-full bg-gold/5">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                OPERATING FROM SOACHA_SECTOR
              </div>
            </div>
            <p className="max-w-md mx-auto text-gray-400 font-mono text-sm leading-relaxed mt-4 min-h-[3em] text-center flex flex-col items-center justify-center">
              <HackerText text="Somos alquimistas del código. Fusionamos arte, datos y tecnología para crear experiencias web que no solo se ven, se sienten." speed={30} />
            </p>
          </motion.div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="py-24 px-4 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative text-center md:text-left">
             <div className="relative aspect-[3/4] border border-white/10 p-8">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?q=80&w=2455&auto=format&fit=crop')] bg-cover bg-center opacity-20 grayscale mix-blend-luminosity"></div>
                <div className="relative z-10 h-full border border-gold/30 flex items-center justify-center overflow-hidden">
                   <motion.div 
                     animate={{ rotate: 360 }}
                     transition={{ duration: 30, ease: "linear", repeat: Infinity }}
                     className="absolute w-[150%] h-[150%] border border-white/5 rounded-full border-dashed"
                   />
                   <Triangle size={120} className="text-gold/80" strokeWidth={0.5} />
                </div>
             </div>
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-5xl md:text-7xl font-bold leading-[0.9] mb-8 uppercase">
              CREAMOS <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 font-serif italic">INTERFACES</span> <br/>
              QUE SUSURRAN <br/>
              <span className="text-gold font-serif italic">HISTORIAS</span>
            </h2>
            <div className="space-y-6 font-mono text-sm md:text-base text-gray-400 border-l-2 border-gold pl-6 text-left">
              <p>
                <HackerText text="No basta con estar en internet. Hay que resonar." />
              </p>
              <p>
                Somos alquimistas digitales. Transmutamos código en experiencias viscerales. 
                Rompemos la cuarta pared del navegador para conectar con el usuario a un nivel subconsciente.
              </p>
              <Link 
                to="/decrypt-brief" 
                onClick={handleInteraction}
                className="mt-8 px-8 py-3 bg-transparent border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 uppercase tracking-widest font-bold text-xs flex items-center gap-2 group w-fit"
              >
                <Terminal size={14} />
                Iniciar Protocolo
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Teaser (Interactive Modals) */}
      <section className="py-24 bg-gold text-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-12 border-b border-black pb-4 text-center md:text-left gap-4 md:gap-0">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">ACTIVE PROTOCOLS</h2>
            <Link 
              to="/payloads" 
              onClick={handleInteraction}
              className="font-mono text-xs mb-2 hover:underline flex items-center gap-2"
            >
              VER_TODOS <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {protocols.map((protocol, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="border border-black p-8 hover:bg-black hover:text-gold transition-all duration-300 cursor-pointer group relative overflow-hidden"
                onClick={() => {
                  setActiveProtocol(protocol);
                  SoundService.playClick();
                }}
              >
                <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={24} />
                </div>
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{protocol.icon}</div>
                <h3 className="text-2xl font-bold uppercase mb-2">{protocol.title}</h3>
                <p className="font-mono text-xs opacity-80 leading-relaxed">{protocol.shortDesc}</p>
                <div className="mt-4 h-[1px] w-0 group-hover:w-full bg-gold transition-all duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Protocol Modal */}
        <AnimatePresence>
          {activeProtocol && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/90 backdrop-blur-md"
                onClick={() => setActiveProtocol(null)}
              />
              <motion.div 
                layoutId={`protocol-${activeProtocol.id}`}
                className="bg-black border border-gold text-white w-full max-w-4xl max-h-[90vh] overflow-y-auto relative z-10 shadow-[0_0_50px_rgba(212,175,55,0.2)]"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                <button 
                  onClick={() => setActiveProtocol(null)}
                  className="absolute top-4 right-4 p-2 hover:bg-gold hover:text-black transition-colors border border-transparent hover:border-black z-50"
                >
                  <X size={24} />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-gold/20 bg-gold/5">
                    <div className="text-gold mb-8">{activeProtocol.icon}</div>
                    <h2 className="text-4xl md:text-6xl font-bold uppercase leading-none mb-8 text-gold">{activeProtocol.title}</h2>
                    <div className="space-y-4 font-mono text-sm">
                      {Object.entries(activeProtocol.stats).map(([key, value]) => (
                        <div key={key} className="flex justify-between border-b border-white/10 pb-2">
                          <span className="uppercase opacity-50">{key}</span>
                          <span className="text-gold">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-8 md:p-12 flex flex-col justify-between">
                    <div>
                      <h3 className="font-mono text-gold text-xs tracking-widest uppercase mb-6">/// SYSTEM_DESCRIPTION</h3>
                      <p className="text-lg leading-relaxed mb-8 text-gray-300">
                        {activeProtocol.fullDesc}
                      </p>
                      
                      <h3 className="font-mono text-gold text-xs tracking-widest uppercase mb-4">/// TECHNICAL_SPECS</h3>
                      <ul className="grid grid-cols-1 gap-3">
                        {activeProtocol.details.map((detail, i) => (
                          <li key={i} className="flex items-center gap-3 font-mono text-sm text-gray-400">
                            <span className="w-1 h-1 bg-gold"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-12 pt-8 border-t border-white/10">
                      <Link 
                        to="/decrypt-brief"
                        className="inline-flex items-center gap-2 bg-gold text-black px-6 py-3 font-bold uppercase tracking-widest hover:bg-white transition-colors w-full justify-center md:w-auto"
                        onClick={() => setActiveProtocol(null)}
                      >
                        <Terminal size={16} />
                        Solicitar Acceso
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>

      {/* Projects Teaser */}
      <section className="py-24 bg-dark relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-12 border-b border-white/20 pb-4 text-center md:text-left gap-4 md:gap-0">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white uppercase">EXPEDIENTES</h2>
            <Link 
              to="/patch-notes" 
              onClick={handleInteraction}
              className="font-mono text-xs mb-2 text-gold hover:underline flex items-center gap-2"
            >
              ACCEDER_ARCHIVO <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-video bg-white/5 border border-white/10 relative group overflow-hidden">
              <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2340&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-50 group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold tracking-tighter text-white opacity-0 group-hover:opacity-100 transition-opacity">CYBER_KATANA</span>
              </div>
            </div>
            <div className="aspect-video bg-white/5 border border-white/10 relative group overflow-hidden">
              <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2264&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-50 group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold tracking-tighter text-white opacity-0 group-hover:opacity-100 transition-opacity">VOID_WALKER</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="mb-24 text-center md:text-left">
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase mb-8">Nodos_Activos</h2>
            <p className="font-mono text-sm text-gray-500 max-w-xl mx-auto md:mx-0">
              Un equipo multidisciplinario de especialistas en diseño, código y estrategia operando bajo el mismo protocolo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "ALEX ROMERO", role: "CHIEF_ARCHITECT", bio: "Especialista en interfaces de alta complejidad y sistemas visuales mutantes." },
              { name: "SARA CHEN", role: "CORE_DEVELOPER", bio: "Transformando visiones en código performante y experiencias reactivas." },
              { name: "MARCUS VOID", role: "STRATEGY_LEAD", bio: "Analizando el ruido del mercado para encontrar brechas tácticas de impacto." }
            ].map((member, i) => (
              <div key={i} className="group">
                <div className="aspect-[3/4] bg-white/5 border border-white/10 mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-4 left-4 font-mono text-[10px] text-gold opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                    STATUS: ACTIVE
                  </div>
                </div>
                <h3 className="text-xl font-bold uppercase mb-1">{member.name}</h3>
                <p className="text-gold font-mono text-[10px] tracking-widest mb-4">{member.role}</p>
                <p className="text-gray-500 text-xs leading-relaxed font-mono">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners / Logos */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <p className="text-center font-mono text-[10px] text-gray-600 uppercase tracking-[0.5em] mb-16">Colaboraciones_Tácticas</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all">
            {['CYBERDYNE', 'NERV', 'TYRELL', 'WEYLAND', 'SHINRA'].map(logo => (
              <span key={logo} className="text-2xl md:text-4xl font-bold tracking-tighter hover:text-gold transition-colors cursor-default">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
