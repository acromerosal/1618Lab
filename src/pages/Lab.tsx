import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Triangle, Lock, Terminal as TerminalIcon, Shield, Activity, Cpu, Search, PenTool, Rocket, Repeat } from 'lucide-react';
import { SoundService } from '../services/soundService';
import { GlitchText } from '../components/effects/GlitchText';
import MutationVisualizer from '../components/MutationVisualizer';

const Lab = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [logs, setLogs] = React.useState<string[]>([
    'SYSTEM_BOOT: SUCCESSFUL',
    'METHODOLOGY_CORE: LOADED',
    'WAITING_FOR_INPUT...'
  ]);

  const steps = [
    {
      id: 'nigredo',
      title: 'NIGREDO',
      subtitle: 'DECONSTRUCTION',
      icon: <Search size={24} />,
      desc: "La fase de la negrura. Descomponemos el problema hasta sus átomos fundamentales. Analizamos la entropía de tu sistema actual y detectamos las impurezas que frenan la evolución.",
      deliverables: ["Informe de Necropsia Digital", "Mapa de Calor de Fricción", "Estrategia de Resurrección"],
      tech: "Lighthouse, Hotjar, SonarQube, Python Scripts"
    },
    {
      id: 'albedo',
      title: 'ALBEDO',
      subtitle: 'PURIFICATION',
      icon: <PenTool size={24} />,
      desc: "La fase de la blancura. Limpiamos el ruido. Diseñamos la nueva arquitectura sobre principios de claridad absoluta y eficiencia. Eliminamos lo superfluo para revelar la esencia de la solución.",
      deliverables: ["Blueprint de Arquitectura", "Sistema de Diseño (Figma)", "Prototipos Interactivos"],
      tech: "Figma, React Flow, Mermaid.js, Notion"
    },
    {
      id: 'citrinitas',
      title: 'CITRINITAS',
      subtitle: 'TRANSMUTATION',
      icon: <Cpu size={24} />,
      desc: "La fase del amarilleamiento. El despertar de la consciencia del código. Inyectamos lógica, interactividad y vida. El diseño estático se convierte en un organismo reactivo.",
      deliverables: ["Código Fuente Limpio", "Componentes Reutilizables", "Integración CI/CD"],
      tech: "React, Three.js, Node.js, Vite"
    },
    {
      id: 'rubedo',
      title: 'RUBEDO',
      subtitle: 'PROJECTION',
      icon: <Rocket size={24} />,
      desc: "La fase de la rojez. La obra final. El despliegue del sistema en la realidad. Tu plataforma no solo funciona, sino que domina su entorno y evoluciona por sí misma.",
      deliverables: ["Plataforma en Producción", "Dashboard de Analítica", "Manual de Operaciones"],
      tech: "Vercel, AWS, Google Analytics 4, Sentry"
    }
  ];

  const handleInteraction = (index: number) => {
    if (activeStep === index) return;
    SoundService.init();
    SoundService.playClick();
    setActiveStep(index);
    
    const newLog = `PROTOCOL_${steps[index].title}: INITIATED`;
    setLogs(prev => [newLog, ...prev].slice(0, 8));
  };

  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePosition({ x, y });
  };

  return (
    <section 
      className="pt-32 pb-24 bg-dark min-h-screen relative overflow-hidden flex flex-col items-center"
      onMouseMove={handleMouseMove}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20" 
           style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-4">
            <GlitchText text="LABORATORIO" />
          </h1>
          <p className="font-mono text-gold/60 tracking-[0.3em] uppercase text-xs md:text-sm">
            METODOLOGÍA DE MUTACIÓN DIGITAL v2.0
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Panel: Navigation & Visualizer */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Visualizer Container */}
            <div className="relative aspect-square border border-white/10 bg-black/40 backdrop-blur-sm rounded-2xl overflow-hidden flex items-center justify-center group">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent opacity-50"></div>
               
               {/* Interactive 3D Element Placeholder */}
               <motion.div 
                 className="relative z-10"
                 animate={{
                   rotateX: mousePosition.y * 10,
                   rotateY: mousePosition.x * 10,
                 }}
                 style={{ perspective: 1000 }}
               >
                  <MutationVisualizer step={activeStep} />
               </motion.div>

               {/* Step Indicators */}
               <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4">
                 {steps.map((_, i) => (
                   <button
                     key={i}
                     onClick={() => handleInteraction(i)}
                     className={`w-3 h-3 rounded-full transition-all duration-300 ${activeStep === i ? 'bg-gold scale-125 shadow-[0_0_10px_rgba(212,175,55,0.8)]' : 'bg-white/20 hover:bg-white/50'}`}
                   />
                 ))}
               </div>
            </div>

            {/* System Logs (Mobile/Desktop) */}
            <div className="border border-white/10 p-4 bg-black/60 font-mono text-[10px] h-32 overflow-hidden rounded-lg">
              <div className="flex items-center gap-2 text-gold border-b border-gold/30 pb-2 mb-2">
                <TerminalIcon size={12} />
                <span className="tracking-widest uppercase">PROCESS_LOGS</span>
              </div>
              <div className="space-y-1">
                {logs.map((log, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1 - i * 0.15, x: 0 }}
                    className="text-white/70"
                  >
                    {`> ${log}`}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel: Detailed Info */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                {/* Header */}
                <div className="border-l-4 border-gold pl-6">
                  <div className="flex items-center gap-3 text-gold mb-2">
                    {steps[activeStep].icon}
                    <span className="font-mono text-xs tracking-widest uppercase">FASE 0{activeStep + 1}</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold uppercase leading-none mb-2">
                    {steps[activeStep].title}
                  </h2>
                  <h3 className="text-xl text-gray-400 font-mono uppercase tracking-widest">
                    {steps[activeStep].subtitle}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                  {steps[activeStep].desc}
                </p>

                {/* Grid: Deliverables & Tech */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-white/5 border border-white/10 p-6 rounded-lg hover:border-gold/30 transition-colors">
                    <h4 className="flex items-center gap-2 text-gold font-bold uppercase text-sm mb-4">
                      <Shield size={16} /> Entregables
                    </h4>
                    <ul className="space-y-2">
                      {steps[activeStep].deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400 font-mono">
                          <span className="text-gold mt-1">▹</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white/5 border border-white/10 p-6 rounded-lg hover:border-gold/30 transition-colors">
                    <h4 className="flex items-center gap-2 text-gold font-bold uppercase text-sm mb-4">
                      <Cpu size={16} /> Tecnologías
                    </h4>
                    <p className="text-sm text-gray-400 font-mono leading-relaxed">
                      {steps[activeStep].tech}
                    </p>
                    <div className="mt-4 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gold"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.5, ease: "circOut" }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex lg:flex gap-4 mt-12 pt-8 border-t border-white/10 overflow-x-auto pb-4 lg:pb-0 no-scrollbar">
              {steps.map((step, i) => (
                <button
                  key={i}
                  onClick={() => handleInteraction(i)}
                  className={`px-4 py-2 font-mono text-[10px] md:text-xs uppercase tracking-widest border transition-all duration-300 whitespace-nowrap ${activeStep === i ? 'border-gold text-gold bg-gold/10' : 'border-white/20 text-gray-500 hover:border-white/50 hover:text-white'}`}
                >
                  0{i + 1}. {step.title}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Lab;
