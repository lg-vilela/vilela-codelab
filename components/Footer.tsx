import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute bottom-0 w-full h-[500px] bg-gradient-to-t from-[#020617] to-transparent -z-20"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 w-full">
        {/* Tech Container */}
        <div className="relative bg-[#0F172A]/40 backdrop-blur-md border border-white/5 rounded-3xl p-8 md:p-12 overflow-hidden">
          {/* Corner Decorations */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/30 rounded-br-2xl"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

            {/* Brand Column */}
            <div className="flex flex-col gap-6 md:col-span-1">
              <div className="flex flex-col gap-2">
                <h2 className="text-white text-2xl font-black tracking-tighter uppercase leading-none">
                  Vilela <span className="text-primary">CodeLab</span>
                </h2>
                <p className="text-slate-400 text-xs font-medium leading-relaxed max-w-[240px]">
                  Engenharia de software e design de alta performance para escalar negócios digitais.
                </p>
              </div>
              <div className="flex gap-4">
                {['instagram', 'linkedin', 'mail'].map((icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all duration-300 border border-white/5 hover:border-primary/50"
                  >
                    <span className="material-symbols-outlined text-sm">{icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Links Column 1 */}
            <div className="flex flex-col gap-6 md:col-span-1">
              <h3 className="text-white font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                <span className="w-1 h-4 bg-primary rounded-full"></span>
                Serviços
              </h3>
              <ul className="flex flex-col gap-3 text-sm text-slate-400 font-medium">
                <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 inline-block duration-300">Landing Pages</a></li>
                <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 inline-block duration-300">Sistemas Web</a></li>
                <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 inline-block duration-300">Automação de Vendas</a></li>
                <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 inline-block duration-300">Consultoria Tech</a></li>
              </ul>
            </div>

            {/* Links Column 2 */}
            <div className="flex flex-col gap-6 md:col-span-1">
              <h3 className="text-white font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                <span className="w-1 h-4 bg-primary rounded-full"></span>
                Legal
              </h3>
              <ul className="flex flex-col gap-3 text-sm text-slate-400 font-medium">
                <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 inline-block duration-300">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 inline-block duration-300">Privacidade</a></li>
                <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 inline-block duration-300">Contrato de Serviço</a></li>
                <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 inline-block duration-300">SLA</a></li>
              </ul>
            </div>

            {/* Seal Column */}
            <div className="flex flex-col gap-6 md:col-span-1 items-start md:items-end justify-end">
              {/* Developed By Seal */}
              <div className="flex items-center gap-4 py-3 px-5 bg-black/40 border border-white/5 rounded-xl backdrop-blur-sm hover:border-white/10 transition-colors cursor-default group">
                <span className="text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase group-hover:text-slate-300 transition-colors">
                  Developed By
                </span>
                <div className="h-4 w-[1px] bg-white/10 group-hover:bg-white/20 transition-colors"></div>
                <img
                  src="/vilela-logo.png"
                  alt="Vilela CodeLab"
                  className="h-5 w-auto opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-bold text-slate-600 uppercase tracking-widest">
            <p>&copy; {currentYear} Vilela CodeLab. All rights reserved.</p>
            <div className="flex gap-2 items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse"></span>
              <span className="text-emerald-500/80">System Operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;