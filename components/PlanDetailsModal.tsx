import React from 'react';

type PlanType = 'express' | 'pro' | 'premium';

interface PlanDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    planType: PlanType | null;
}

const planDetails = {
    express: {
        title: "Landing Page Express (SaaS)",
        subtitle: "Ideal para validação rápida de ofertas, campanhas e infoprodutos.",
        features: [
            { title: "Serviço Contínuo", desc: "Infraestrutura, manutenção e otimizações inclusas no modelo 100% assinatura." },
            { title: "Características", desc: "Hospedado pela Vilela CodeLab, sem acesso ao root. Código-base é propriedade da Vilela CodeLab." },
            { title: "Termos", desc: "Mensal ou trimestral. Cancelou -> página sai do ar. Migração absoluta mediante taxa. Gestão total inclusa." }
        ],
        timeline: [
            "Setup e Configuração (Dia 1)",
            "Personalização (Dias 2-3)",
            "Entrega (Até 72h)"
        ]
    },
    pro: {
        title: "Landing Page PRO",
        subtitle: "Este plano funciona em dois modos distintos:",
        features: [
            { title: "Modo 1: Assinatura", desc: "Plataforma completa de vendas com foco em automação e dados. Hospedagem, CMS e Analytics inclusos. Gestão total pela Vilela CodeLab." },
            { title: "Modo 2: Projeto", desc: "Código e infraestrutura próprios. Ideal para quem deseja realizar a gestão. Valor e prazo maiores. Sem recorrência obrigatória." },
            { title: "Infraestrutura (Modo Projeto)", desc: "Conta do cliente (Supabase, Vercel e Umami)." }
        ],
        timeline: [
            "Fase 1: Estratégia (Dias 1-2)",
            "Fase 2: Design & Dev (Dias 3-10)",
            "Fase 3: Entrega (Dias 11-15)"
        ]
    },
    premium: {
        title: "Premium - Sob Medida",
        subtitle: "Soluções para operações que exigem arquitetura escalável e time dedicado.",
        features: [
            { title: "Projeto Enterprise", desc: "Alto ticket, alta responsabilidade e infraestrutura complexa." },
            { title: "Infraestrutura do Cliente", desc: "Contas criadas nas plataformas Vercel (hospedagem), Supabase (base de dados) e Umami (Analytics)." },
            { title: "Parceria Técnica", desc: "A Vilela CodeLab entra como parceiro técnico do cliente, garantindo alta disponibilidade." }
        ],
        timeline: [
            "Fase 1: Imersão (Semana 1)",
            "Fase 2: Desenvolvimento (Semanas 2-3)",
            "Fase 3: Homologação (Semana 4)"
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
