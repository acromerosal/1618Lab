import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Shield, Zap, Cpu, Lock, Terminal } from 'lucide-react';
import { GlitchText } from '../components/effects/GlitchText';
import { HackerText } from '../components/effects/HackerText';
import { SoundService } from '../services/soundService';

const Products = () => {
  const handleInteraction = () => {
    SoundService.init();
    SoundService.playClick();
  };
  const products = [
    {
      id: "P-001",
      name: "NEURAL_LINK_V1",
      price: "0.1618 BTC",
      cat: "HARDWARE",
      img: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2340&auto=format&fit=crop",
      desc: "Interfaz cerebro-máquina de baja latencia. Estética industrial."
    },
    {
      id: "P-002",
      name: "VOID_OS",
      price: "1.618 ETH",
      cat: "SOFTWARE",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2340&auto=format&fit=crop",
      desc: "Sistema operativo minimalista basado en el vacío. Privacidad absoluta."
    },
    {
      id: "P-003",
      name: "SIGIL_KEY",
      price: "0.05 BTC",
      cat: "SECURITY",
      img: "https://images.unsplash.com/photo-1633265486064-086b219458ec?q=80&w=2340&auto=format&fit=crop",
      desc: "Llave física de encriptación cuántica. Tallada en obsidiana sintética."
    },
    {
      id: "P-004",
      name: "GLITCH_WEAR",
      price: "0.01 BTC",
      cat: "APPAREL",
      img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2340&auto=format&fit=crop",
      desc: "Ropa con patrones anti-reconocimiento facial. Estilo ciber-oculto."
    },
    {
      id: "P-005",
      name: "DATA_DRIP",
      price: "0.2 ETH",
      cat: "ACCESSORY",
      img: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2340&auto=format&fit=crop",
      desc: "Colgante con servidor de almacenamiento de 10TB. Encriptado por hardware."
    },
    {
      id: "P-006",
      name: "CYBER_DECK",
      price: "0.5 BTC",
      cat: "HARDWARE",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2340&auto=format&fit=crop",
      desc: "Terminal portátil para intrusión de red. Teclado mecánico retroiluminado."
    },
    {
      id: "P-007",
      name: "BIO_HACK_KIT",
      price: "0.3 ETH",
      cat: "BIOTECH",
      img: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=2340&auto=format&fit=crop",
      desc: "Kit de modificación genética casera. Protocolos de bio-hacking incluidos."
    },
    {
      id: "P-008",
      name: "STEALTH_DRONE",
      price: "1.2 ETH",
      cat: "ROBOTICS",
      img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=2340&auto=format&fit=crop",
      desc: "Micro-drone con recubrimiento anti-radar. Cámara térmica 4K."
    },
    {
      id: "P-009",
      name: "MEMETIC_ENGINE",
      price: "2.5 ETH",
      cat: "SOFTWARE",
      img: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=2340&auto=format&fit=crop",
      desc: "Herramienta de propagación de ideas en redes sociales. Algoritmos de viralidad."
    }
  ];


  return (
    <section className="py-32 bg-dark min-h-screen relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-16 border-b border-white/20 pb-4 text-center md:text-left gap-4 md:gap-0">
           <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white">SUMINISTROS</h2>
           <span className="font-mono text-xs mb-2 text-gold font-serif italic">EQUIPAMIENTO_LAB</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden flex flex-col"
              onMouseEnter={() => {
                SoundService.init();
                SoundService.playGlitch();
              }}
              onClick={handleInteraction}
            >
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute top-4 left-4 bg-gold text-black font-mono text-[10px] px-2 py-1 font-bold">
                  {product.cat}
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors">
                    <GlitchText text={product.name} />
                  </h3>
                  <span className="font-mono text-gold text-sm">{product.price}</span>
                </div>
                
                <p className="text-gray-400 text-sm font-mono mb-6 flex-grow">
                  {product.desc}
                </p>
                
                <button className="w-full py-3 border border-gold text-gold hover:bg-gold hover:text-black transition-all font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 group/btn">
                  <ShoppingCart size={14} />
                  ADQUIRIR
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>
              </div>

              {/* Decorative Tech Lines */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold/30"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gold/30"></div>
            </motion.div>
          ))}
        </div>
        <div className="mt-32 border-t border-white/10 pt-24">
          <h2 className="text-4xl font-bold uppercase mb-16">Infraestructura_Técnica</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { name: "REACT_18", status: "STABLE" },
              { name: "THREE_JS", status: "ACTIVE" },
              { name: "TAILWIND_4", status: "OPTIMIZED" },
              { name: "GEMINI_AI", status: "CONNECTED" },
              { name: "FRAMER_MOTION", status: "FLUID" },
              { name: "VITE_6", status: "FAST" },
              { name: "TYPESCRIPT", status: "STRICT" },
              { name: "WEB_AUDIO", status: "REACTIVE" }
            ].map((tech, i) => (
              <div key={i} className="border border-white/5 p-6 bg-white/5 hover:bg-gold/10 transition-colors group">
                <p className="font-mono text-[10px] text-gold mb-2 group-hover:animate-pulse">{tech.status}</p>
                <h4 className="text-sm font-bold tracking-widest">{tech.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
