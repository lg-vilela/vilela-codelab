import React, { useState } from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const legalContent: Record<string, { title: string, text: string }> = {
    'termos': {
      title: 'Termos de Uso',
      text: 'Ao acessar este site, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.'
    },
    'privacidade': {
      title: 'Política de Privacidade',
      text: 'A sua privacidade é importante para nós. É política do Vilela CodeLab respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Vilela CodeLab, e outros sites que possuímos e operamos. Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço.'
    },
    'contrato': {
      title: 'Contrato de Serviço',
      text: 'Nossos projetos são regidos por contratos claros que estipulam prazos, entregáveis, garantias e direitos de propriedade intelectual. O código-fonte desenvolvido no modo Projeto pertence integralmente ao cliente após a quitação total dos valores acordados. No modo Assinatura, a infraestrutura e código base pertencem à Vilela CodeLab, sendo concedida uma licença de uso.'
    },
    'sla': {
      title: 'SLA (Acordo de Nível de Serviço)',
      text: 'Garantimos disponibilidade de 99.9% para aplicações hospedadas sob nossa gestão (Modo Assinatura). O tempo de resposta para chamados críticos é de até 4 horas úteis. Manutenções programadas serão comunicadas com 48 horas de antecedência.'
    }
  };

  const handleLegalClick = (e: React.MouseEvent, key: string) => {
    e.preventDefault();
    setActiveModal(key);
  };

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute bottom-0 w-full h-[500px] bg-gradient-to-t from-[#020617] to-transparent -z-20"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="mx-auto w-[98%] px-4">
        {/* Tech Container */}
        <div className="relative bg-[#0F172A]/40 backdrop-blur-md border border-white/5 rounded-3xl p-8 md:p-12 overflow-hidden">
          {/* Corner Decorations */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/30 rounded-br-2xl"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

            {/* Brand Column */}
            <div className="flex flex-col gap-6 md:col-span-1">
              <div className="flex flex-col gap-2">
                {/* Typography matched with Navbar */}
                <h2 className="text-white text-lg font-black tracking-tight leading-none">
                  VILELA <span className="text-primary font-light">CODELAB</span>
                </h2>
                <p className="text-slate-400 text-xs font-medium leading-relaxed max-w-[240px]">
                  Engenharia de software e design de alta performance para escalar negócios digitais.
                </p>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/lg_vilela"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all duration-300 border border-white/5"
                  aria-label="Instagram"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/5511953840339"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:bg-[#25D366] hover:text-white transition-all duration-300 border border-white/5"
                  aria-label="WhatsApp"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </a>
                <a
                  href="mailto:contato@vilelacodelab.com"
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:bg-sky-500 hover:text-white transition-all duration-300 border border-white/5"
                  aria-label="Email"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </a>
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
                <li><button onClick={(e) => handleLegalClick(e, 'termos')} className="hover:text-primary transition-colors hover:translate-x-1 inline-block duration-300">Termos de Uso</button></li>
                <li><button onClick={(e) => handleLegalClick(e, 'privacidade')} className="hover:text-primary transition-colors hover:translate-x-1 inline-block duration-300">Privacidade</button></li>
                <li><button onClick={(e) => handleLegalClick(e, 'contrato')} className="hover:text-primary transition-colors hover:translate-x-1 inline-block duration-300">Contrato de Serviço</button></li>
                <li><button onClick={(e) => handleLegalClick(e, 'sla')} className="hover:text-primary transition-colors hover:translate-x-1 inline-block duration-300">SLA</button></li>
              </ul>
            </div>

            {/* Seal Column */}
            <div className="flex flex-col gap-6 md:col-span-1 items-start md:items-end justify-center">
              {/* Developed By Seal - Simplified */}
              <div className="flex items-center gap-6 group">
                <span className="text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase group-hover:text-slate-300 transition-colors">
                  Developed By
                </span>
                <div className="h-8 w-[1px] bg-white/10 group-hover:bg-white/20 transition-colors"></div>
                <img
                  src="/vilela-logo.png"
                  alt="Vilela CodeLab"
                  className="h-14 w-auto opacity-70 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300 hover:scale-105"
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

      {/* Legal Modal */}
      {activeModal && legalContent[activeModal] && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm animate-fade-in-down" onClick={() => setActiveModal(null)}>
          <div className="bg-[#0F172A] border border-white/10 rounded-2xl max-w-lg w-full p-8 shadow-2xl relative" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <h3 className="text-white text-xl font-bold uppercase tracking-wider mb-4 border-l-4 border-primary pl-4">
              {legalContent[activeModal].title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed whitespace-pre-line">
              {legalContent[activeModal].text}
            </p>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;