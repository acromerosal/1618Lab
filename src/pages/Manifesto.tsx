import React from 'react';
import { motion } from 'motion/react';
import { Triangle, Zap, Eye, Shield, Terminal } from 'lucide-react';
import { GlitchText } from '../components/effects/GlitchText';
import { HackerText } from '../components/effects/HackerText';
import { SoundService } from '../services/soundService';

const Manifesto = () => {
  const handleInteraction = () => {
    SoundService.init();
    SoundService.playClick();
  };

  const principles = [
    {
      id: "01",
      title: "EL VACÍO COMO LIENZO",
      desc: "No tememos al espacio en blanco. Lo abrazamos. El diseño debe respirar para que el mensaje pueda gritar."
    },
    {
      id: "02",
      title: "MUTACIÓN CONSTANTE",
      desc: "Lo que funcionó ayer es ruido hoy. Evolucionamos nuestras herramientas y lenguajes con cada proyecto."
    },
    {
      id: "03",
      title: "ESTÉTICA TÁCTICA",
      desc: "La belleza sin propósito es decoración. Cada elemento visual en 1618 LAB tiene una función psicológica."
    },
    {
      id: "04",
      title: "CÓDIGO CON ALMA",
      desc: "No escribimos líneas, inyectamos intenciones. El software debe sentirse vivo, reactivo y humano."
    }
  ];

  return (
    <div className="bg-dark min-h-screen pt-32 pb-24" onMouseEnter={() => SoundService.init()}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24 flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-4 text-gold font-mono text-xs mb-6 tracking-[0.3em]">
            <Terminal size={14} />
            <span>MANIFESTO_v2.0</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.8] uppercase mb-12">
            Nuestra <br/>
            <span className="text-gold font-serif italic">Filosofía</span>
          </h1>
          <p className="text-xl md:text-3xl text-gray-400 font-light leading-relaxed max-w-3xl mx-auto">
            "En un mundo saturado de interfaces genéricas, 1618 LAB nace como un acto de resistencia creativa. No somos una agencia, somos un laboratorio de mutación digital."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          {principles.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="border border-white/10 p-10 relative group hover:bg-white/5 transition-colors"
              onClick={handleInteraction}
            >
              <span className="absolute top-4 right-4 text-gold/20 font-mono text-4xl font-bold group-hover:text-gold/40 transition-colors">
                {p.id}
              </span>
              <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-gold transition-colors">
                <GlitchText text={p.title} />
              </h3>
              <p className="text-gray-400 leading-relaxed font-mono text-sm">
                {p.desc}
              </p>
              <div className="mt-8 flex gap-2">
                <div className="w-2 h-2 bg-gold/30 rounded-full"></div>
                <div className="w-2 h-2 bg-gold/30 rounded-full"></div>
                <div className="w-2 h-2 bg-gold/30 rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="relative border-t border-white/10 pt-24">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-dark px-8">
            <Triangle size={48} className="text-gold animate-pulse" strokeWidth={1} />
          </div>
          
          <div className="text-center space-y-12">
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">
              EL FUTURO ES <br/>
              <span className="text-gold glitch-text" data-text="MUTANTE">MUTANTE</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-500 font-mono text-sm leading-relaxed">
              Buscamos socios, no clientes. Mentes dispuestas a romper el molde y explorar territorios digitales inexplorados. Si buscas lo convencional, estás en el lugar equivocado.
            </p>
            <div className="flex justify-center gap-8">
              <div className="flex flex-col items-center gap-2">
                <Zap size={24} className="text-gold" />
                <span className="text-[10px] font-mono opacity-40">VELOCIDAD</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Eye size={24} className="text-gold" />
                <span className="text-[10px] font-mono opacity-40">VISIÓN</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Shield size={24} className="text-gold" />
                <span className="text-[10px] font-mono opacity-40">RIGOR</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manifesto;
