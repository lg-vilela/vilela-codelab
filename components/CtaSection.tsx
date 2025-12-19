import React from 'react';

interface CtaSectionProps {
  onNavigate: () => void;
}

const CtaSection: React.FC<CtaSectionProps> = ({ onNavigate }) => {
  return (
    <div id="contact" className="px-4 py-24 mb-16 reveal-on-scroll">
      <div className="relative rounded-[40px] bg-[#020617] border border-primary/30 p-10 md:p-24 text-center flex flex-col items-center gap-10 overflow-hidden shadow-[0_0_100px_rgba(94,125,162,0.15)] cyber-card">
        
        {/* Animated Background Layers */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{
            backgroundImage: "radial-gradient(#5E7DA2 1px, transparent 1px)",
            backgroundSize: "24px 24px"
          }}
        ></div>
        
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        
        {/* Animated HUD Elements */}
        <div className="absolute top-12 left-12 w-20 h-20 border-t-2 border-l-2 border-primary/20 hidden md:block"></div>
        <div className="absolute bottom-12 right-12 w-20 h-20 border-b-2 border-r-2 border-primary/20 hidden md:block"></div>
        
        <div className="relative z-10 flex flex-col items-center gap-6">
          <div className="px-6 py-2 rounded-lg border border-primary/40 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.4em] animate-pulse glass-effect">
            Awaiting Command: Sincronizar
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-white leading-[1.1] text-glow-primary">
            Vamos Codar o seu <span className="text-primary italic">Sucesso</span>
          </h2>
          <p className="text-slate-400 max-w-2xl font-medium text-lg md:text-xl leading-relaxed">
            O futuro não espera. Inicie a transmissão hoje e transforme sua visão em uma realidade digital de alta performance.
          </p>
        </div>
        
        <div className="relative z-10 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl blur-xl opacity-20 group-hover:opacity-60 transition duration-500 animate-pulse"></div>
          <button 
            onClick={onNavigate}
            className="relative flex min-w-[280px] cursor-pointer items-center justify-center rounded-2xl h-20 px-12 bg-primary text-white text-xl font-black shadow-[0_10px_40px_rgba(94,125,162,0.4)] transition-all hover:scale-105 active:scale-95 tracking-widest uppercase overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              Sincronizar Projeto <span className="material-symbols-outlined font-bold">power_settings_new</span>
            </span>
            {/* Glossy overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
          </button>
        </div>
        
        {/* Terminal Text Accents */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-12 text-[8px] font-black text-primary/30 uppercase tracking-[0.5em] hidden md:flex">
          <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div> UPLINK ESTABLISHED</span>
          <span>LATENCY: 12ms</span>
          <span>ENCRYPTION: AES-256</span>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;