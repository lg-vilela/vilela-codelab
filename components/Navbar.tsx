import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onNavigate: (screen: 'home' | 'quote', sectionId?: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (screen: 'home' | 'quote', sectionId?: string) => {
    onNavigate(screen, sectionId);
    setIsMobileMenuOpen(false);
  };

  const LOGO_URL = "https://i.postimg.cc/q7MwGYRB/1.png";

  const navLinks = [
    { label: 'Home', id: 'home', num: '01' },
    { label: 'Serviços', id: 'services', num: '02' },
    { label: 'Processo', id: 'process', num: '03' },
    { label: 'Contato', id: 'contact', num: '04' },
  ];

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-4 md:px-8 py-4 ${isScrolled ? 'md:py-2' : 'md:py-6'}`}>
      <div className={`mx-auto max-w-[1100px] transition-all duration-500 ${isScrolled ? 'scale-95 md:scale-100' : 'scale-100'}`}>
        <header className={`relative flex items-center justify-between px-6 py-3 rounded-2xl border transition-all duration-500 glass-effect ${isScrolled ? 'border-primary/40 bg-[#020617]/90 shadow-[0_0_30px_rgba(2,6,23,0.8)]' : 'border-white/10 bg-[#0F172A]/40'}`}>
          
          {/* Corner Decorations */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/40 rounded-tl-lg"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/40 rounded-br-lg"></div>

          {/* Logo & System Status */}
          <div 
            className="flex items-center gap-4 cursor-pointer group"
            onClick={() => handleLinkClick('home')}
          >
            <div className="relative size-11 flex items-center justify-center overflow-hidden rounded-lg bg-white p-0.5 border border-primary/20 group-hover:shadow-[0_0_15px_rgba(94,125,162,0.5)] transition-all">
              <img 
                src={LOGO_URL} 
                alt="Logo Vilela CodeLab" 
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-primary/10 animate-pulse pointer-events-none"></div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-white text-lg font-black tracking-tight leading-none group-hover:text-primary transition-colors">
                VILELA <span className="text-primary font-light">CODELAB</span>
              </h2>
              <div className="flex items-center gap-1.5 mt-1">
                <div className="size-1 bg-primary rounded-full animate-pulse"></div>
                <span className="text-[7px] font-black text-primary/60 tracking-[0.2em] uppercase">Technology | Design</span>
              </div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick('home', link.id)}
                className="group relative px-6 py-2 overflow-hidden"
              >
                <div className="flex flex-col items-center">
                  <span className="text-[8px] font-black text-primary/40 tracking-[0.2em] uppercase transition-colors group-hover:text-primary/80">
                    {link.num}
                  </span>
                  <span className="text-white text-[11px] font-bold uppercase tracking-widest transition-all group-hover:text-primary group-hover:translate-y-[-1px]">
                    {link.label}
                  </span>
                </div>
                {/* Underline Scan Effect */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left">
                  <div className="w-1/3 h-full bg-primary shadow-[0_0_10px_#5E7DA2] animate-[scanning_2s_infinite_linear]"></div>
                </div>
              </button>
            ))}
          </nav>

          {/* Action Button */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex flex-col items-end mr-2">
              <span className="text-[7px] font-black text-primary/40 uppercase tracking-widest">Secure Uplink</span>
              <span className="text-[7px] font-black text-white/40 uppercase tracking-widest">v3.1.0-stable</span>
            </div>
            
            <button 
              onClick={() => handleLinkClick('quote')}
              className="relative group hidden sm:flex items-center justify-center h-11 px-6 bg-primary text-white text-[10px] font-black tracking-[0.2em] uppercase overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(94,125,162,0.3)]"
              style={{ clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)' }}
            >
              <span className="relative z-10">Solicitar Orçamento</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>

            {/* Mobile Toggle */}
            <button 
              className="md:hidden text-primary p-2 flex items-center justify-center hover:bg-primary/10 rounded-lg transition-colors" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="material-symbols-outlined text-2xl">
                {isMobileMenuOpen ? 'close' : 'grid_view'}
              </span>
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="absolute top-[calc(100%+12px)] left-0 w-full bg-[#020617]/95 border border-primary/30 p-6 flex flex-col gap-6 md:hidden shadow-2xl rounded-2xl animate-fade-in-down glass-effect">
               <div className="grid grid-cols-2 gap-4">
                 {navLinks.map((link) => (
                   <a 
                     key={link.id}
                     onClick={() => handleLinkClick('home', link.id)} 
                     className="flex flex-col gap-1 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/40 transition-all cursor-pointer"
                   >
                     <span className="text-[8px] text-primary font-black uppercase">{link.num}</span>
                     <span className="text-white text-sm font-bold uppercase tracking-widest">{link.label}</span>
                   </a>
                 ))}
               </div>
              <button 
                onClick={() => handleLinkClick('quote')}
                className="w-full flex items-center justify-center h-14 bg-primary text-white text-xs font-black uppercase tracking-[0.2em] shadow-lg rounded-xl"
              >
                Solicitar Orçamento
              </button>
            </div>
          )}
        </header>
      </div>
    </div>
  );
};

export default Navbar;