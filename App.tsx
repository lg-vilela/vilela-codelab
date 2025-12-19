import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Pricing from './components/Pricing';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import QuoteForm from './components/QuoteForm';

const ManifestoModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-fade-in-down"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background-dark/80 backdrop-blur-md"></div>
      
      {/* Modal Content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card-dark border border-primary/30 rounded-3xl p-8 md:p-12 glass-effect shadow-[0_0_100px_rgba(94,125,162,0.2)] scrollbar-hide cyber-card">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-primary/60 hover:text-primary transition-colors flex items-center gap-2 text-[10px] font-black uppercase tracking-widest"
        >
          Fechar <span className="material-symbols-outlined text-sm">close</span>
        </button>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <div className="text-primary font-black tracking-[0.4em] uppercase text-[9px]">Manifesto v1.0</div>
            <h2 className="text-white text-4xl md:text-5xl font-black tracking-tighter uppercase text-glow-primary">
              Nossa <span className="text-primary italic">Filosofia</span>
            </h2>
            <div className="w-20 h-1 bg-primary/30 mt-4"></div>
          </div>

          <div className="flex flex-col gap-10 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
            <p className="text-white font-bold italic border-l-4 border-primary pl-6">
              No cenário digital contemporâneo, a linha entre o sucesso de um negócio e o seu esquecimento é medida em milissegundos. Na Vilela CodeLab, não aceitamos a mediocridade técnica que satura o mercado. Não construímos "apenas sites". Nós projetamos ativos digitais de alta precisão, fundamentados nos pilares do rigor de engenharia e na psicologia da conversão.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              <div className="flex flex-col gap-3">
                <h3 className="text-white font-black uppercase tracking-widest text-sm flex items-center gap-3">
                  <span className="text-primary">01.</span> O Fim da Lentidão Digital
                </h3>
                <p className="text-slate-400 text-sm">
                  Acreditamos que uma Landing Page lenta não é apenas uma falha técnica, é uma barreira comercial. Cada segundo de carregamento extra é um lead perdido e um investimento em tráfego jogado fora. Por isso, nossa obsessão é a performance extrema, validada por auditorias rigorosas como o Google PageSpeed, garantindo que sua mensagem chegue ao cliente antes que ele pense em desistir.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-white font-black uppercase tracking-widest text-sm flex items-center gap-3">
                  <span className="text-primary">02.</span> Engenharia Além do Visual
                </h3>
                <p className="text-slate-400 text-sm">
                  Enquanto agências comuns focam apenas na "superfície", nós mergulhamos na arquitetura. Como especialistas em Análise e Desenvolvimento de Sistemas, aplicamos o pensamento algorítmico para criar estruturas limpas, escaláveis e resilientes. Onde outros veem cores e botões, nós vemos fluxos de dados, otimização de ativos e integração de sistemas.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-white font-black uppercase tracking-widest text-sm flex items-center gap-3">
                  <span className="text-primary">03.</span> Design com Propósito Comercial
                </h3>
                <p className="text-slate-400 text-sm">
                  O design na Vilela CodeLab não existe apenas para ser admirado; ele existe para guiar. Utilizamos princípios de UI/UX para criar jornadas de usuário fluidas e intuitivas, onde cada elemento visual é posicionado estrategicamente para conduzir o visitante à ação final. A estética serve à função, e a função é o seu ROI.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-white font-black uppercase tracking-widest text-sm flex items-center gap-3">
                  <span className="text-primary">04.</span> Tecnologia com Ética e Clareza
                </h3>
                <p className="text-slate-400 text-sm">
                  Nossa paixão pela tecnologia é acompanhada por um compromisso com a transparência. Seja através de nossa newsletter Algoritmo Diário ou em cada reunião de estratégia, buscamos educar nossos parceiros sobre o poder da computação digital. Não utilizamos "caixas pretas"; entregamos soluções explicáveis e gerenciáveis que dão autonomia ao seu negócio.
                </p>
              </div>
            </div>

            <div className="pt-8 mt-4 border-t border-white/5 flex flex-col gap-4">
              <p className="text-sm">
                <strong className="text-white">Nosso Compromisso:</strong> A Vilela CodeLab é o ponto de encontro entre a robustez da engenharia de software e a agilidade do marketing moderno. Estamos aqui para garantir que sua tecnologia nunca seja um gargalo, mas sim o motor da sua escala.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex flex-col">
                  <span className="text-primary font-black text-[10px] uppercase tracking-[0.2em]">Vilela CodeLab | Technology & Design</span>
                  <span className="text-slate-500 text-[9px] uppercase tracking-widest">Projetando as fundações do amanhã, uma linha de código por vez.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'home' | 'quote'>('home');
  const [isManifestoOpen, setIsManifestoOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.05 });

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [currentScreen]);

  const handleNavigate = (screen: 'home' | 'quote', sectionId?: string) => {
    setCurrentScreen(screen);
    
    if (screen === 'home') {
      setTimeout(() => {
        if (sectionId) {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-transparent font-display text-white overflow-x-hidden antialiased selection:bg-primary selection:text-white min-h-screen flex flex-col">
      <div className="layout-container flex h-full grow flex-col w-full">
        <Navbar onNavigate={handleNavigate} />
        
        <main className="flex flex-1 justify-center py-5 w-full">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1 w-full">
            {currentScreen === 'home' ? (
              <>
                <Hero 
                  onExploreClick={() => handleNavigate('home', 'pricing')} 
                  onManifestoClick={() => setIsManifestoOpen(true)}
                />
                <Services />
                <Process />
                <Pricing />
                <CtaSection onNavigate={() => handleNavigate('quote')} />
              </>
            ) : (
              <QuoteForm onBack={() => handleNavigate('home')} />
            )}
            <Footer />
          </div>
        </main>
      </div>

      <ManifestoModal isOpen={isManifestoOpen} onClose={() => setIsManifestoOpen(false)} />
    </div>
  );
}