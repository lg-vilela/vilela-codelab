import React from 'react';

type PlanType = 'express' | 'pro' | 'premium';

interface PlanDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    planType: PlanType | null;
}

const planDetails = {
    express: {
        title: "Landing Page Express",
        subtitle: "Presença digital rápida e eficiente com foco total em conversão.",
        features: [
            { title: "Foco Total em Vendas", desc: "Página única desenhada para levar o cliente a uma única ação: entrar em contato ou comprar." },
            { title: "Perfeito no Celular", desc: "Construído primeiro para smartphones, com carregamento instantâneo e navegação fluida." },
            { title: "Encontrado no Google", desc: "Configuração técnica de SEO para garantir visibilidade orgânica inicial." },
            { title: "Entrega Ultra-Rápida", desc: "Ganhe presença profissional na internet em apenas uma semana." },
            { title: "Para quem é", desc: "Ideal para validação rápida de ofertas, quem busca alta qualidade sem complexidade estrutural imediata ou precisa de velocidade para iniciar anúncios." }
        ],
        timeline: [
            "Fase 1: Coleta e Estratégia (Dia 1)",
            "Fase 2: Prototipagem & Design (Dias 2-3)",
            "Fase 3: Desenvolvimento & Deploy (Dias 4-7)"
        ]
    },
    pro: {
        title: "Landing Page Pro",
        subtitle: "Escala e automação para operações em crescimento.",
        features: [
            { title: "Automação CRM", desc: "Conexão direta do site com o sistema de vendas (CRM) para organização imediata de leads." },
            { title: "Design System Exclusivo", desc: "Identidade visual única e diferenciada para destacar a marca da concorrência." },
            { title: "Análise Avançada de Dados", desc: "Instalação de ferramentas de tracking para entender a origem dos clientes e comportamento no site." },
            { title: "Diferencial", desc: "Arquitetura preparada para volume massivo de acessos simultâneos e integração profunda com ferramentas de marketing." }
        ],
        timeline: [
            "Fase 1: Estratégia e Dados (Dias 1-2)",
            "Fase 2: UI/UX & Prototipagem (Dias 3-6)",
            "Fase 3: Build e Integrações (Dias 7-12)",
            "Fase 4: QA e Performance (Dias 13-15)"
        ]
    },
    premium: {
        title: "Landing Page Premium",
        subtitle: "Solução robusta de nível empresarial com suporte dedicado.",
        features: [
            { title: "Squad Dedicada (Devs + Design)", desc: "Profissionais de design e engenharia focados exclusivamente no projeto para garantir perfeição nos detalhes." },
            { title: "SLA de Atendimento Prioritário", desc: "Canal direto e prioritário com respostas imediatas para ajustes e necessidades." },
            { title: "Infraestrutura Cloud Complexa", desc: "Utilização de servidores globais avançados preparados para suportar picos massivos de tráfego." },
            { title: "Manutenção e Otimização Contínua", desc: "Proteção contra ataques e melhorias técnicas constantes para manter o site atualizado." },
            { title: "Tecnologia de Ponta", desc: "Desenvolvimento com as mesmas tecnologias utilizadas por gigantes como Netflix e Airbnb." }
        ],
        timeline: [
            "Fase 1: Imersão e Arquitetura (Dias 1-4)",
            "Fase 2: Design System & Protótipo (Dias 5-10)",
            "Fase 3: Desenvolvimento e Stress Tests (Dias 11-20)",
            "Fase 4: Homologação e Lançamento (Dias 21-30)"
        ]
    }
};

const PlanDetailsModal: React.FC<PlanDetailsModalProps> = ({ isOpen, onClose, planType }) => {
    if (!isOpen || !planType) return null;

    const content = planDetails[planType];

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-fade-in-down"
            onClick={(e) => e.target === e.currentTarget && onClose()}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-background-dark/80 backdrop-blur-md"></div>

            {/* Modal Content */}
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-[#0F172A]/95 via-[#1e293b]/95 to-[#0F172A]/95 border border-primary/30 rounded-3xl p-8 md:p-10 glass-effect shadow-[0_0_100px_rgba(94,125,162,0.2)] scrollbar-hide cyber-card">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-primary/60 hover:text-primary transition-colors flex items-center gap-2 text-[10px] font-black uppercase tracking-widest"
                >
                    Fechar <span className="material-symbols-outlined text-sm">close</span>
                </button>

                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <div className="text-primary font-black tracking-[0.4em] uppercase text-[9px]">Detalhes do Plano</div>
                        <h2 className="text-white text-3xl md:text-4xl font-black tracking-tighter uppercase text-glow-primary">
                            {content.title}
                        </h2>
                        <div className="w-20 h-1 bg-primary/30 mt-2"></div>
                    </div>

                    <p className="text-slate-300 font-medium text-lg leading-relaxed border-l-4 border-primary pl-4">
                        {content.subtitle}
                    </p>

                    <div className="flex flex-col gap-6 mt-4">
                        {content.features.map((feature, idx) => (
                            <div key={idx} className="flex flex-col gap-1">
                                <h3 className="text-white font-bold text-sm flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                                    {feature.title}
                                </h3>
                                <p className="text-slate-400 text-xs pl-6 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-white/10">
                        <h3 className="text-white font-black uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-lg">calendar_month</span>
                            Cronograma Estimado
                        </h3>
                        <div className="grid grid-cols-1 gap-2">
                            {content.timeline.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-slate-400 text-xs font-medium">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlanDetailsModal;
