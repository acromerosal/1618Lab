import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, X, Terminal, Layers, Code, Eye } from 'lucide-react';
import { SoundService } from '../services/soundService';
import { patchNotes } from '../data/content';
import { Link } from 'react-router-dom';

const PatchNotes = () => {
  const [activeProject, setActiveProject] = useState<typeof patchNotes[0] | null>(null);

  const handleInteraction = () => {
    SoundService.init();
    SoundService.playClick();
  };

  return (
    <section id="patch-notes-section" className="py-32 bg-dark min-h-screen relative">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-16 border-b border-white/20 pb-4 text-center md:text-left gap-4 md:gap-0">
           <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white uppercase">Patch Notes</h2>
           <span className="font-mono text-xs mb-2 text-gold uppercase">Casos_Clasificados_V2</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {patchNotes.map((project, i) => (
            <motion.div 
              key={project.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-[4/3] overflow-hidden border border-white/10 cursor-pointer"
              onMouseEnter={() => {
                SoundService.init();
                SoundService.playGlitch();
              }}
              onClick={() => {
                handleInteraction();
                setActiveProject(project);
              }}
            >
              <div className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" style={{ backgroundImage: `url(${project.image})` }}></div>
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-500"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="font-mono text-xs text-gold border border-gold px-2 py-1 bg-black/50 backdrop-blur-sm">{project.id}</span>
                  <div className="bg-white text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
                
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl font-bold uppercase mb-1 text-white group-hover:text-gold transition-colors">{project.title}</h3>
                  <p className="font-mono text-xs text-gray-400 tracking-widest uppercase">{project.category} // {project.year}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {activeProject && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/95 backdrop-blur-xl"
                onClick={() => setActiveProject(null)}
              />
              <motion.div 
                layoutId={`project-${activeProject.id}`}
                className="bg-black border border-white/20 text-white w-full max-w-6xl max-h-[95vh] overflow-y-auto relative z-10 shadow-2xl flex flex-col md:flex-row"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
              >
                <button 
                  onClick={() => setActiveProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-white hover:text-black transition-colors border border-white/20 z-50 rounded-full"
                >
                  <X size={24} />
                </button>

                {/* Left: Image & Key Info */}
                <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-full">
                   <div className="absolute inset-0 bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700" style={{ backgroundImage: `url(${activeProject.image})` }}></div>
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                   
                   <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                      <div className="font-mono text-gold text-xs tracking-widest mb-2 border border-gold inline-block px-2 py-1">
                        CASE_FILE: {activeProject.id}
                      </div>
                      <h2 className="text-4xl md:text-6xl font-bold uppercase leading-none mb-4">{activeProject.title}</h2>
                      <div className="flex gap-4 font-mono text-xs text-gray-400">
                        <span>CLIENT: {activeProject.client}</span>
                        <span>//</span>
                        <span>YEAR: {activeProject.year}</span>
                      </div>
                   </div>
                </div>

                {/* Right: Details */}
                <div className="w-full md:w-1/2 p-8 md:p-12 bg-dark border-l border-white/10 flex flex-col gap-8">
                   
                   <div>
                     <h3 className="flex items-center gap-2 font-mono text-gold text-xs tracking-widest uppercase mb-4">
                       <Terminal size={14} /> Mission_Brief
                     </h3>
                     <div className="space-y-6">
                       <div>
                         <span className="text-gray-500 text-xs uppercase tracking-widest block mb-1">Challenge</span>
                         <p className="text-gray-300 leading-relaxed">{activeProject.challenge}</p>
                       </div>
                       <div>
                         <span className="text-gray-500 text-xs uppercase tracking-widest block mb-1">Solution</span>
                         <p className="text-white leading-relaxed">{activeProject.solution}</p>
                       </div>
                     </div>
                   </div>

                   <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-6">
                      {activeProject.impact && Object.entries(activeProject.impact).map(([key, value]) => (
                        <div key={key}>
                          <span className="text-gray-500 text-[10px] uppercase tracking-widest block mb-1">{key.replace(/_/g, ' ')}</span>
                          <span className="text-2xl md:text-3xl font-bold text-gold">{value}</span>
                        </div>
                      ))}
                   </div>

                   <div>
                     <h3 className="flex items-center gap-2 font-mono text-gold text-xs tracking-widest uppercase mb-4">
                       <Code size={14} /> Tech_Stack
                     </h3>
                     <div className="flex flex-wrap gap-2">
                       {activeProject.stack?.map(tech => (
                         <span key={tech} className="px-3 py-1 border border-white/20 text-xs font-mono hover:bg-white hover:text-black transition-colors cursor-default">
                           {tech}
                         </span>
                       ))}
                     </div>
                   </div>

                   <div className="mt-auto pt-8">
                     <Link 
                       to="/decrypt-brief"
                       className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-gold transition-colors flex items-center justify-center gap-2"
                     >
                       <Eye size={18} />
                       Solicitar Similar
                     </Link>
                   </div>

                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <div className="mt-32 border-t border-white/10 pt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            <div>
              <h2 className="text-4xl font-bold uppercase mb-8">Impacto_Medido</h2>
              <div className="space-y-12">
                {[
                  { label: "INCREMENTO_CONVERSIÓN", value: "+45%" },
                  { label: "REDUCCIÓN_LATENCIA", value: "-60%" },
                  { label: "ENGAGEMENT_USUARIO", value: "x2.5" }
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-end mb-2">
                      <span className="font-mono text-xs text-gray-500">{stat.label}</span>
                      <span className="text-3xl font-bold text-gold">{stat.value}</span>
                    </div>
                    <div className="w-full h-[1px] bg-white/10 relative">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 1, delay: i * 0.2 }}
                        className="absolute h-full bg-gold"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-gold/20">TESTIMONIAL_ENCRYPTED</div>
              <p className="text-2xl font-light italic leading-relaxed mb-8">
                "La mutación digital que 1618 LAB inyectó en nuestra plataforma no solo mejoró la estética, sino que cambió fundamentalmente cómo nuestros usuarios interactúan con nosotros."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold/20 rounded-full"></div>
                <div>
                  <p className="font-bold text-sm">CTO // GHOST_NETWORK</p>
                  <p className="font-mono text-[10px] text-gold">VERIFIED_SOURCE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatchNotes;
