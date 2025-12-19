import React from 'react';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
  isLast?: boolean;
}

const steps: ProcessStep[] = [
  {
    number: '01',
    title: 'Análise de Matriz',
    description: 'Decomposição completa dos requisitos técnicos e objetivos de negócio.',
    icon: 'analytics',
  },
  {
    number: '02',
    title: 'Arquitetura Core',
    description: 'Prototipagem de alta fidelidade e definição da stack tecnológica resiliente.',
    icon: 'architecture',
  },
  {
    number: '03',
    title: 'Ciclo de Build',
    description: 'Desenvolvimento ágil com testes automatizados e integração contínua.',
    icon: 'memory',
  },
  {
    number: '04',
    title: 'Deploy Quântico',
    description: 'Lançamento otimizado com monitoramento de performance em tempo real.',
    icon: 'rocket',
    isLast: true,
  },
];

const Process: React.FC = () => {
  return (
    <div id="process" className="px-4 py-32 relative overflow-hidden reveal-on-scroll">
      {/* Dynamic Background Element */}
      <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent -z-10 blur-sm"></div>
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent -z-10"></div>
      
      <div className="flex flex-col gap-2 mb-10 text-center">
        <div className="text-primary font-black tracking-[0.4em] uppercase text-[9px] mb-1">Process Deployment</div>
        <h2 className="text-white text-5xl md:text-7xl font-black tracking-tighter uppercase text-glow-primary leading-none">
          Workflow <span className="text-primary italic">Digital</span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
        {steps.map((step, index) => (
          <div key={index} className="group flex flex-col items-center text-center gap-8 relative">
            <div className="relative">
              {/* Connector Dot */}
              {!step.isLast && (
                <div className="hidden md:block absolute top-1/2 left-full w-full h-[2px] z-0">
                   <div className="w-full h-full bg-primary/20 relative">
                      <div className="absolute top-0 left-0 h-full w-1/3 bg-primary shadow-[0_0_10px_#5E7DA2] animate-[scanning_2s_infinite_linear]"></div>
                   </div>
                </div>
              )}
              
              <div className="relative z-10 w-24 h-24 rounded-full glass-effect border border-primary/30 flex items-center justify-center text-primary group-hover:border-primary group-hover:shadow-[0_0_40px_rgba(94,125,162,0.4)] transition-all duration-700 bg-[#0F172A]">
                <div className="absolute inset-2 border border-primary/10 rounded-full animate-spin-slow"></div>
                <span className="material-symbols-outlined text-4xl group-hover:scale-110 transition-transform duration-500">{step.icon}</span>
                
                {/* Step Indicator */}
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-lg bg-primary text-white text-[12px] font-black flex items-center justify-center shadow-xl border border-white/20">
                  {step.number}
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-3 max-w-[200px]">
              <h4 className="text-white text-xl font-bold tracking-tight uppercase group-hover:text-primary transition-colors">{step.title}</h4>
              <p className="text-slate-500 text-sm font-medium leading-relaxed italic">
                {step.description}
              </p>
            </div>
            
            {/* Visual HUD line */}
            <div className="w-8 h-[1px] bg-primary/20 mt-2 group-hover:w-16 transition-all"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;