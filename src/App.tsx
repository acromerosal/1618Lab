import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { NoiseOverlay } from './components/effects/NoiseOverlay';
import { CustomCursor } from './components/effects/CustomCursor';
import { Background3D } from './components/effects/Background3D';
import { RebootOverlay } from './components/effects/RebootOverlay';
import { ChromaticAberration } from './components/effects/ChromaticAberration';
import { ActiveEffects } from './components/effects/ActiveEffects';
import { BlueprintOverlay } from './components/effects/BlueprintOverlay';
import { SoundService } from './services/soundService';

// Pages
import Home from './pages/Home';
import Payloads from './pages/Payloads';
import PatchNotes from './pages/PatchNotes';
import Lab from './pages/Lab';
import DecryptBrief from './pages/DecryptBrief';
import Products from './pages/Products';
import Method from './pages/Method';
import Manifesto from './pages/Manifesto';
import Team from './pages/Team';
import { HackProvider, useHack } from './context/HackContext';
import RitualConsole from './components/RitualConsole';
import SEO from './components/SEO';

// --- Components ---

import { analytics } from './services/analytics';

const IdentityHeader = () => {
  const { isHackMode, userCodename } = useHack();

  return (
    <div className={`fixed top-20 left-8 z-50 hidden lg:block font-mono text-[10px] tracking-[0.2em] pointer-events-none transition-colors duration-500 ${isHackMode ? 'text-cyan-400' : 'text-gold/40'}`}>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 border border-current flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-current"></div>
          {/* Simple generative pattern based on codename */}
          <div className="grid grid-cols-4 grid-rows-4 gap-[1px] w-full h-full p-1">
            {userCodename.split('').slice(0, 16).map((char, i) => (
              <div 
                key={i} 
                className={`w-full h-full ${char.charCodeAt(0) % 2 === 0 ? 'bg-current' : 'bg-transparent'}`}
                style={{ opacity: (char.charCodeAt(0) % 10) / 10 }}
              ></div>
            ))}
          </div>
        </div>
        <div>
          <span className="opacity-50 block text-[8px] mb-1">NEURAL_SIGNATURE_v1.0</span>
          <span className="opacity-50">USER_ID:</span> {userCodename}
        </div>
      </div>
    </div>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

import { Menu, X, Terminal, Eye, EyeOff } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);
  const { isHackMode, toggleHackMode, setConsoleOpen, setBlueprintMode } = useHack();
  const holdTimer = React.useRef<NodeJS.Timeout | null>(null);
  
  const navItems = [
    { name: 'INICIO', path: '/' },
    { name: 'PAYLOADS', path: '/payloads' },
    { name: 'EQUIPO', path: '/team' },
    { name: 'PATCH NOTES', path: '/patch-notes' },
    { name: 'LABORATORIO', path: '/laboratorio' },
    { name: 'DECRYPT BRIEF', path: '/decrypt-brief' }
  ];

  const handleNavClick = () => {
    SoundService.playClick();
    setIsOpen(false);
  };

  const handleLogoMouseDown = () => {
    holdTimer.current = setTimeout(() => {
      setBlueprintMode(true);
      analytics.track('BLUEPRINT_OPEN');
      SoundService.playGlitch();
    }, 2000);
  };

  const handleLogoMouseUp = () => {
    if (holdTimer.current) clearTimeout(holdTimer.current);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 px-6 md:px-8 py-6 flex justify-between items-center mix-blend-difference text-white transition-colors duration-500`}
        onMouseEnter={() => SoundService.init()}
      >
        <Link 
          to="/" 
          className="text-2xl font-bold tracking-tighter cursor-pointer block"
          onClick={handleNavClick}
          onMouseDown={handleLogoMouseDown}
          onMouseUp={handleLogoMouseUp}
          onMouseLeave={handleLogoMouseUp}
        >
          <span className={isHackMode ? 'text-cyan-400' : 'text-gold'}>1618</span> LAB
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 font-mono text-xs tracking-widest">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              onClick={handleNavClick}
              className={`hover:text-gold transition-colors relative group ${location.pathname === item.path ? 'text-gold' : ''}`}
            >
              {item.name}
              <span className={`absolute -bottom-2 left-0 h-[1px] bg-gold transition-all duration-300 ${location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          {/* Mobile Hack Toggle */}
          <button 
            onClick={(e) => {
              e.preventDefault();
              SoundService.init();
              toggleHackMode();
              SoundService.playGlitch();
            }}
            className={`md:hidden flex items-center justify-center p-2 transition-colors ${isHackMode ? 'text-cyan-400' : 'text-white/40'}`}
            aria-label="Toggle Hack Mode"
          >
            {isHackMode ? <Eye size={20} /> : <EyeOff size={20} />}
          </button>

          {/* Mobile Console Toggle */}
          <button 
            onClick={() => {
              SoundService.init();
              setConsoleOpen(true);
              analytics.track('CONSOLE_OPEN');
            }}
            className="md:hidden flex items-center justify-center p-2 text-white/40"
            aria-label="Open Console"
          >
            <Terminal size={20} />
          </button>

          <button 
            onClick={() => {
              toggleHackMode();
              SoundService.playGlitch();
            }}
            className={`hidden md:flex items-center gap-2 font-mono text-[10px] tracking-widest transition-colors ${isHackMode ? 'text-cyan-400' : 'text-white/40 hover:text-gold'}`}
          >
            {isHackMode ? <Eye size={14} /> : <EyeOff size={14} />}
            HACK_MODE
          </button>

          <button 
            onClick={() => {
              setConsoleOpen(true);
              analytics.track('CONSOLE_OPEN');
            }}
            className="hidden md:flex items-center gap-2 text-white/40 hover:text-gold transition-colors"
          >
            <Terminal size={16} />
          </button>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white hover:text-gold transition-colors z-50"
            onClick={() => {
              setIsOpen(!isOpen);
              SoundService.playClick();
            }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link 
                  to={item.path} 
                  onClick={() => setIsOpen(false)}
                  className={`text-3xl font-bold tracking-tighter hover:text-gold transition-colors ${location.pathname === item.path ? 'text-gold' : 'text-white'}`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <div className="mt-8 flex flex-col items-center gap-6">
              <button 
                onClick={() => {
                  toggleHackMode();
                  SoundService.playGlitch();
                }}
                className={`flex items-center gap-3 font-mono text-sm tracking-widest transition-colors ${isHackMode ? 'text-cyan-400' : 'text-white/60 hover:text-gold'}`}
              >
                {isHackMode ? <Eye size={18} /> : <EyeOff size={18} />}
                HACK_MODE
              </button>

              <button 
                onClick={() => {
                  setConsoleOpen(true);
                  setIsOpen(false);
                  analytics.track('CONSOLE_OPEN');
                }}
                className="flex items-center gap-3 font-mono text-sm tracking-widest text-white/60 hover:text-gold transition-colors"
              >
                <Terminal size={18} />
                CONSOLE_ROOT
              </button>
            </div>

            <div className="mt-8 flex gap-8">
              {['IG', 'TW', 'LI'].map(social => (
                <span key={social} className="text-gold font-mono text-sm tracking-widest cursor-pointer hover:text-white transition-colors">
                  {social}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Footer = () => {
  const { isHackMode, userCodename } = useHack();
  
  return (
    <footer className={`py-24 px-8 border-t transition-colors duration-500 ${isHackMode ? 'bg-black border-cyan-900/50 text-cyan-400' : 'bg-gold border-black text-black'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2">
            <h2 className="text-7xl font-bold tracking-tighter mb-8">1618 LAB</h2>
            <p className="font-mono text-sm max-w-md leading-relaxed opacity-80">
              ESTUDIO CREATIVO Y LABORATORIO DE DISEÑO DIGITAL. 
              TRANSFORMAMOS LA COMPLEJIDAD EN BELLEZA TÁCTICA. 
              OPERANDO DESDE EL SUR GLOBAL HACIA EL INFINITO.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold uppercase mb-6 tracking-widest text-xs opacity-50">Navegación</h3>
            <ul className="space-y-4 font-mono text-xs uppercase tracking-widest">
              <li><Link to="/" className="hover:opacity-50 transition-opacity">Inicio</Link></li>
              <li><Link to="/payloads" className="hover:opacity-50 transition-opacity">Payloads</Link></li>
              <li><Link to="/metodo" className="hover:opacity-50 transition-opacity">Método</Link></li>
              <li><Link to="/team" className="hover:opacity-50 transition-opacity">Equipo</Link></li>
              <li><Link to="/manifesto" className="hover:opacity-50 transition-opacity">Manifesto</Link></li>
              <li><Link to="/patch-notes" className="hover:opacity-50 transition-opacity">Patch Notes</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold uppercase mb-6 tracking-widest text-xs opacity-50">Contacto</h3>
            <ul className="space-y-4 font-mono text-xs uppercase tracking-widest">
              <li><Link to="/decrypt-brief" className="hover:opacity-50 transition-opacity">Decrypt Brief</Link></li>
              <li><a href="mailto:hello@1618lab.com" className="hover:opacity-50 transition-opacity">hello@1618lab.com</a></li>
              <li className="opacity-50">Soacha, Colombia, Sudamérica</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-current/20">
          <div className="flex gap-6">
            {['INSTAGRAM', 'BEHANCE', 'LINKEDIN', 'TWITTER'].map(social => (
              <a key={social} href="#" className="font-mono text-[10px] tracking-[0.2em] hover:opacity-50 transition-opacity">
                {social}
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-4 font-mono text-[10px] opacity-40">
            <span>© 2026 1618 LAB</span>
            <span className="hidden md:block">|</span>
            <span className="hidden md:block">ID: {userCodename || 'GUEST'}</span>
            <span className="hidden md:block">|</span>
            <span>ALL_SYSTEMS_OPERATIONAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

export function App() {
  const location = useLocation();
  const [isRebooting, setIsRebooting] = React.useState(false);

  useEffect(() => {
    setIsRebooting(true);
    const timer = setTimeout(() => setIsRebooting(false), 1200);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <HackProvider>
      <AppContent isRebooting={isRebooting} location={location} />
    </HackProvider>
  );
}

const AppContent = ({ isRebooting, location }: { isRebooting: boolean, location: any }) => {
  const { isHackMode, isBlueprintMode, setBlueprintMode } = useHack();
  const [isModeSwitching, setModeSwitching] = React.useState(false);
  const [isTouchDevice, setIsTouchDevice] = React.useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia('(pointer: coarse)').matches);
    
    if (isHackMode !== undefined) {
      setModeSwitching(true);
      const timer = setTimeout(() => setModeSwitching(false), 200);
      return () => clearTimeout(timer);
    }
  }, [isHackMode]);

  return (
    <div className={`bg-dark min-h-screen text-white selection:bg-gold selection:text-black transition-colors duration-1000 ${isHackMode ? 'hack-theme' : ''} ${isTouchDevice ? '' : 'cursor-none'}`}>
      <SEO />
      <ScrollToTop />
      <div className="scanlines"></div>
      <NoiseOverlay />
      <ChromaticAberration />
      <ActiveEffects />
      <BlueprintOverlay />
      <Background3D />
      <RebootOverlay isVisible={isRebooting} />
      
      {/* Mode Switch Glitch Flash */}
      <AnimatePresence>
        {isModeSwitching && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-cyan-500 mix-blend-overlay pointer-events-none"
          >
            <div className="absolute inset-0 bg-cyan-500/50 mix-blend-hard-light animate-pulse" />
          </motion.div>
        )}
      </AnimatePresence>

      <CustomCursor />
      <IdentityHeader />
      <Navbar />
      <RitualConsole />
      
      <main>
        <AnimatePresence mode="wait">
          <div key={location.pathname}>
            <Routes location={location}>
              <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/payloads" element={<PageWrapper><Payloads /></PageWrapper>} />
              <Route path="/productos" element={<PageWrapper><Products /></PageWrapper>} />
              <Route path="/patch-notes" element={<PageWrapper><PatchNotes /></PageWrapper>} />
              <Route path="/laboratorio" element={<PageWrapper><Lab /></PageWrapper>} />
              <Route path="/metodo" element={<PageWrapper><Method /></PageWrapper>} />
              <Route path="/manifesto" element={<PageWrapper><Manifesto /></PageWrapper>} />
              <Route path="/team" element={<PageWrapper><Team /></PageWrapper>} />
              <Route path="/decrypt-brief" element={<PageWrapper><DecryptBrief /></PageWrapper>} />
            </Routes>
          </div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
