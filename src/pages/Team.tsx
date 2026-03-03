import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Shield, Cpu, Zap } from 'lucide-react';
import { GlitchText } from '../components/effects/GlitchText';
import { HackerText } from '../components/effects/HackerText';
import { SoundService } from '../services/soundService';

const Team = () => {
  const handleInteraction = () => {
    SoundService.init();
    SoundService.playClick();
  };

  const members = [
    {
      name: "ANDREX ROMERO",
      role: "CHIEF_ARCHITECT",
      bio: "Especialista en interfaces de alta complejidad y sistemas visuales mutantes. 15 años rompiendo la web.",
      skills: ["UI_ENGINEERING", "SYSTEM_DESIGN", "VISUAL_STRATEGY"]
    },
    {
      name: "SARA CHEN",
      role: "CORE_DEVELOPER",
      bio: "Transformando visiones en código performante y experiencias reactivas. Obsesionada con la optimización.",
      skills: ["REACT_EXPERT", "WEBGL", "PERFORMANCE"]
    },
    {
      name: "MARCUS VOID",
      role: "STRATEGY_LEAD",
      bio: "Analizando el ruido del mercado para encontrar brechas tácticas de impacto. El cerebro detrás del caos.",
      skills: ["MARKET_ANALYSIS", "BRAND_TACTICS", "SEO_ENGINEERING"]
    }
  ];

  return (
    <div className="bg-dark min-h-screen pt-32 pb-24" onMouseEnter={() => SoundService.init()}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24 border-b border-white/10 pb-12 text-center flex flex-col items-center"
        >
          <div className="flex items-center gap-4 text-gold font-mono text-xs mb-6 tracking-[0.3em]">
            <Terminal size={14} />
            <span>ACTIVE_NODES_v1.0</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.8] uppercase mb-8">
            Nodos <br/>
            <span className="text-gold font-serif italic">Activos</span>
          </h1>
          <p className="text-xl text-gray-400 font-mono max-w-2xl mx-auto">
            Un colectivo de especialistas operando bajo un protocolo unificado de excelencia creativa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {members.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group"
              onClick={handleInteraction}
            >
              <div className="aspect-[3/4] bg-white/5 border border-white/10 mb-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="w-1/2 h-[1px] bg-gold/50 rotate-45 absolute"></div>
                   <div className="w-1/2 h-[1px] bg-gold/50 -rotate-45 absolute"></div>
                </div>
                <div className="absolute bottom-6 left-6 font-mono text-[10px] text-gold opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                  NODE_ID: {member.name.split(' ')[0]}_0{i+1}
                </div>
              </div>
              
              <h3 className="text-3xl font-bold uppercase mb-2 group-hover:text-gold transition-colors">
                <GlitchText text={member.name} />
              </h3>
              <p className="text-gold font-mono text-xs tracking-[0.3em] mb-6">{member.role}</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 font-mono">
                {member.bio}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {member.skills.map(skill => (
                  <span key={skill} className="text-[9px] font-mono border border-white/10 px-2 py-1 opacity-40 group-hover:opacity-100 group-hover:border-gold/50 transition-all">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 p-12 border border-white/10 bg-white/5 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold uppercase mb-4">¿Quieres unirte al Lab?</h2>
            <p className="text-gray-400 font-mono text-sm">
              Siempre estamos buscando nuevos nodos con habilidades excepcionales en diseño, código o estrategia. Si crees que puedes aportar a la mutación, envía tu señal.
            </p>
          </div>
          <button className="px-12 py-4 bg-gold text-black font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors">
            Enviar_Señal
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;
