import React from 'react';

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  tags?: string[];
}

const servicesData: ServiceItem[] = [
  {
    icon: 'code_blocks',
    title: 'Desenvolvimento Web',
    description: 'Arquitetura de software moderna utilizando React, Next.js e Node.js. Focamos em performance e escalabilidade.',
    tags: ['Next.js', 'Typescript', 'AWS']
  },
  {
    icon: 'auto_awesome',
    title: 'UI/UX Design',
    description: 'Interfaces imersivas e intuitivas com foco total em conversão e jornada do usuário de ponta a ponta.',
    tags: ['Figma', 'UX Research', 'Motion']
  },
  {
    icon: 'neurology',
    title: 'Inteligência Artificial',
    description: 'Integração de modelos de IA e automação inteligente para otimizar processos e gerar insights estratégicos.',
    tags: ['Gemini API', 'LLMs', 'Automation']
  },
  {
    icon: 'shield_lock',
    title: 'Segurança & Escala',
    description: 'Infraestrutura robusta com monitoramento proativo e camadas de segurança de nível bancário.',
    tags: ['DevOps', 'CyberSec', 'Cloud']
  }
];

const Services: React.FC = () => {
  return (
    <div id="services" className="flex flex-col gap-12 px-4 py-24 reveal-on-scroll">
      <div className="flex flex-col gap-2 mb-10 text-center">
        <div className="text-primary font-black tracking-[0.4em] uppercase text-[9px] mb-1">Core Intelligence</div>
        <h2 className="text-white text-5xl md:text-7xl font-black tracking-tighter uppercase text-glow-primary leading-none">
          Engenharia <span className="text-primary italic">Digital</span>
        </h2>
        <p className="text-slate-400 text-lg md:text-xl max-w-[700px] font-medium leading-relaxed mx-auto mt-4">
          Desenvolvimento estratégico focado em faturamento com tecnologia robusta e visão comercial.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        {servicesData.map((service, index) => (
          <div 
            key={index}
            className="group relative p-[1px] rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02]"
          >
            {/* Animated Border Gradient */}
            <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_20%,#5E7DA2_50%,transparent_80%)] animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative z-10 h-full flex flex-col gap-6 bg-[#0F172A] rounded-2xl p-10 glass-effect border border-white/5">
              <div className="flex justify-between items-start">
                <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-[inset_0_0_15px_rgba(94,125,162,0.2)]">
                  <span className="material-symbols-outlined text-4xl">{service.icon}</span>
                </div>
                <div className="text-primary/20 font-black text-4xl select-none group-hover:text-primary/40 transition-colors">0{index + 1}</div>
              </div>
              
              <div className="flex flex-col gap-4">
                <h3 className="text-white text-3xl font-bold group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-slate-400 text-lg font-medium leading-relaxed">
                  {service.description}
                </p>
                
                {service.tags && (
                  <div className="mt-4 flex flex-wrap gap-3">
                    {service.tags.map(tag => (
                      <span key={tag} className="px-4 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] text-primary font-black uppercase tracking-widest group-hover:border-primary/40 transition-all cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              
              {/* HUD Accents */}
              <div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-primary/20 opacity-0 group-hover:opacity-100 transition-all translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;