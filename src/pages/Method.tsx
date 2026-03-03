import React from 'react';
import { motion } from 'motion/react';
import { Layers, Zap, Search, Shield } from 'lucide-react';
import { SoundService } from '../services/soundService';

const Method = () => {
  const handleInteraction = () => {
    SoundService.init();
    SoundService.playClick();
  };

  const steps = [
    {
      icon: <Search size={32} />,
      title: "SCAN / AUDITORÍA",
      desc: "Analizamos el ADN de tu marca y el ruido del mercado para encontrar la brecha de oportunidad."
    },
    {
      icon: <Layers size={32} />,
      title: "BLUEPRINT / ESTRATEGIA",
      desc: "Diseñamos la arquitectura de la mutación. Sin adornos, solo estructura funcional y estética."
    },
    {
      icon: <Zap size={32} />,
      title: "INJECT / DESARROLLO",
      desc: "Inyectamos el código y el diseño. La mutación cobra vida en el entorno digital."
    },
    {
      icon: <Shield size={32} />,
      title: "DEPLOY / LANZAMIENTO",
      desc: "Despliegue táctico. Monitoreamos la respuesta y optimizamos la persistencia del impacto."
    }
  ];

  return (
    <section className="py-32 bg-black text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-24 text-center">
          <h2 className="text-4xl md:text-6xl font-bold uppercase mb-6">Nuestro <span className="text-gold">Método</span></h2>
          <p className="text-white/60 font-mono text-sm tracking-widest uppercase">Protocolo de Mutación Digital v1.0</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="border border-white/10 p-8 hover:border-gold/50 transition-colors group cursor-pointer"
              onMouseEnter={() => SoundService.playGlitch()}
              onClick={handleInteraction}
            >
              <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <div className="text-xs text-gold/50 font-mono mb-2">0{i + 1} // PROTOCOLO</div>
              <h3 className="text-xl font-bold mb-4 tracking-tighter">{step.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 border-t border-white/10 pt-24">
          <h2 className="text-4xl font-bold uppercase mb-16">Detalles_del_Proceso</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="border-l-2 border-gold pl-6">
                <h4 className="text-lg font-bold mb-2 uppercase tracking-tighter">¿Cuánto dura una mutación?</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Depende de la complejidad del ADN de la marca. Un ciclo estándar de mutación (desde el SCAN hasta el DEPLOY) suele durar entre 4 y 8 semanas.
                </p>
              </div>
              <div className="border-l-2 border-gold pl-6">
                <h4 className="text-lg font-bold mb-2 uppercase tracking-tighter">¿Es reversible?</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  La evolución no es reversible. Una vez que inyectamos el protocolo 1618, tu marca habrá mutado a una forma superior de comunicación digital.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="border-l-2 border-gold pl-6">
                <h4 className="text-lg font-bold mb-2 uppercase tracking-tighter">¿Qué tecnologías inyectan?</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Utilizamos las herramientas más avanzadas del mercado: React, Three.js, motion, y modelos de IA personalizados para cada necesidad táctica.
                </p>
              </div>
              <div className="border-l-2 border-gold pl-6">
                <h4 className="text-lg font-bold mb-2 uppercase tracking-tighter">¿Cómo empezamos?</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  El primer paso es el DECRYPT BRIEF. Una sesión de auditoría profunda donde analizamos tus objetivos y definimos el alcance de la mutación.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 p-12 border border-gold/20 bg-gold/5 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-gold/30">
            CONFIDENTIAL_DOCUMENT_1618
          </div>
          <div className="max-w-3xl">
            <h3 className="text-2xl font-bold mb-6 text-gold">EL MANIFIESTO DEL LAB</h3>
            <p className="text-lg text-white/80 leading-relaxed italic">
              "No construimos sitios web. Construimos dispositivos de comunicación que mutan según la necesidad del usuario. Cada línea de código es una decisión táctica, cada píxel es una declaración de guerra contra lo genérico."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Method;
