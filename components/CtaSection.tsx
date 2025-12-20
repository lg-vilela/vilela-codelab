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

        {/* Social Links */}
        <div className="relative z-10 flex gap-6 mt-4">
          <a
            href="https://wa.me/5511953840339"
            target="_blank"
            rel="noopener noreferrer"
            className="group/social flex items-center justify-center w-14 h-14 rounded-xl bg-white/5 border border-white/10 hover:bg-[#25D366]/20 hover:border-[#25D366]/50 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            aria-label="WhatsApp"
          >
            <svg className="w-6 h-6 fill-current text-white/70 group-hover/social:text-[#25D366] transition-colors" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.231-.298.347-.497.116-.198.058-.371-.029-.544-.087-.174-.787-1.898-1.078-2.598-.283-.68-.57-.587-.787-.598-.205-.011-.44-.011-.676-.011-.236 0-.618.088-.94.435-.322.347-1.229 1.199-1.229 2.923 0 1.724 1.255 3.391 1.429 3.639.173.248 2.47 3.77 5.986 5.286 2.336 1.009 2.808 1.01 3.308.966.5-.044 1.637-.669 1.868-1.314.231-.645.248-1.127.174-1.251-.074-.124-.273-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>

          <a
            href="https://www.instagram.com/vilelacodelab/"
            target="_blank"
            rel="noopener noreferrer"
            className="group/social flex items-center justify-center w-14 h-14 rounded-xl bg-white/5 border border-white/10 hover:bg-[#E1306C]/20 hover:border-[#E1306C]/50 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            aria-label="Instagram"
          >
            <svg className="w-6 h-6 fill-current text-white/70 group-hover/social:text-[#E1306C] transition-colors" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.332.014 7.052.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
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