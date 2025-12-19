import React from 'react';

interface HeroProps {
  onExploreClick: () => void;
  onManifestoClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExploreClick, onManifestoClick }) => {
  return (
    <div id="home" className="@container px-4 md:px-0 mt-8 mb-12 reveal-on-scroll">
      <div 
        className="flex flex-col gap-8 bg-cover bg-center bg-no-repeat rounded-3xl items-center justify-center p-8 md:p-24 relative overflow-hidden group min-h-[600px] border border-white/10 shadow-[0_0_80px_rgba(2,6,23,0.8)]" 
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(15, 23, 42, 0.4) 0%, rgba(2, 6, 23, 0.95) 100%), url("https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=2000")`
        }}
      >
        {/* Animated Background Layers */}
        <div className="absolute inset-0 bg-primary/5 animate-pulse-slow"></div>
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-float" style={{animationDelay: '3s'}}></div>
        
        {/* HUD Elements */}
        <div className="absolute top-8 left-8 flex flex-col gap-1 text-[8px] font-black text-primary/40 tracking-[0.3em] uppercase hidden md:flex">
          <span>LAT: 23.5505° S</span>
          <span>LONG: 46.6333° W</span>
          <div className="w-16 h-px bg-primary/20 mt-2"></div>
        </div>
        
        <div className="absolute top-8 right-8 flex flex-col items-end gap-1 text-[8px] font-black text-primary/40 tracking-[0.3em] uppercase hidden md:flex">
          <span>SYSTEM: STABLE</span>
          <span>CORE: ACTIVE</span>
          <div className="w-16 h-px bg-primary/20 mt-2"></div>
        </div>

        {/* Futuristic Scanline */}
        <div className="absolute left-0 w-full h-[3px] bg-primary/30 shadow-[0_0_20px_rgba(94,125,162,0.8)] animate-scanning opacity-40 pointer-events-none"></div>

        <div className="flex flex-col gap-8 text-center z-10 max-w-4xl">
          <div className="inline-flex items-center self-center gap-3 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-[10px] font-black tracking-[0.2em] uppercase mb-2 animate-float glass-effect">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Desenvolvimento de Sistemas e Engenharia Web
          </div>
          
          <h1 className="text-white text-5xl md:text-8xl font-black leading-[1.1] tracking-[-0.05em] text-glow-primary">
            Arquitetura <span className="text-primary italic hover:animate-glitch cursor-default transition-all">de Software</span> Aplicada à conversão
          </h1>
          
          <h2 className="text-slate-400 text-lg md:text-2xl font-medium leading-relaxed max-w-3xl mx-auto backdrop-blur-sm px-4">
            Landing Pages de alta complexidade técnica com foco em performance extrema e experiência de usuário disruptiva.
          </h2>

          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <button 
              onClick={onExploreClick}
              className="group relative px-10 py-5 bg-primary text-white font-black rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(94,125,162,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-3 tracking-widest uppercase text-xs">
                Explorar Soluções <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">trending_flat</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
            <button 
              onClick={onManifestoClick}
              className="px-10 py-5 glass-effect text-white font-black rounded-xl hover:bg-white/10 transition-all border border-white/10 tracking-widest uppercase text-xs"
            >
              Nosso Manifesto
            </button>
          </div>
        </div>

        {/* Corner Brackets Decorations */}
        <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-primary/30 rounded-bl-xl hidden md:block"></div>
        <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-primary/30 rounded-br-xl hidden md:block"></div>
      </div>
    </div>
  );
};

export default Hero;