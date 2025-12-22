import React from 'react';

type PlanType = 'express' | 'pro' | 'premium';

interface PlanDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    planType: PlanType | null;
    initialTab?: 'project' | 'subscription';
}

const planDetails = {
    express: {
        title: "Landing Page Express",
        modes: {
            project: {
                description: "Ideal para quem deseja independência total e a posse de um ativo digital próprio.\nNeste modelo, você adquire a propriedade intelectual do site, sem a necessidade de vínculos mensais com a CodeLab.",
                features: [
                    { title: "Objetivo Estratégico", desc: "Aquisição de um ativo digital pronto para uso com investimento único." },
                    { title: "Infraestrutura Independente", desc: "O site é implementado diretamente na conta do cliente, garantindo total controle sobre o ambiente." },
                    { title: "Custos de Terceiros", desc: "A responsabilidade financeira pelos provedores de hospedagem e domínio é do cliente." },
                    { title: "Propriedade (IP)", desc: "O código e os ativos são 100% de propriedade do cliente após a entrega." },
                    { title: "Manutenção", desc: "Não há cobrança recorrente; manutenções futuras são realizadas sob demanda." }
                ]
            },
            subscription: {
                description: "Ideal para quem busca validação imediata com gestão técnica simplificada.\nEste modelo funciona como um serviço gerenciado, onde a Vilela CodeLab assume a responsabilidade pela infraestrutura e manutenção da sua página.",
                features: [
                    { title: "Objetivo Estratégico", desc: "Foco total em validação rápida de ofertas e geração de tráfego direto." },
                    { title: "Gestão de Infraestrutura", desc: "A página é hospedada e gerida integralmente em servidores da Vilela CodeLab." },
                    { title: "Custos de Terceiros", desc: "Todos os custos de licenciamento e hospedagem profissional já estão inclusos no valor da assinatura." },
                    { title: "Propriedade (IP)", desc: "O código-base pertence à Vilela CodeLab, sendo concedido o direito de uso enquanto a assinatura estiver ativa." },
                    { title: "Taxa de Migração", desc: "Caso deseje a posse definitiva do projeto no futuro, aplica-se uma taxa para transferência." }
                ]
            }
        },
        commonFeatures: [
            { title: "Alta Conversão", desc: "Layout otimizado com foco em Call to Action (CTA) único." },
            { title: "Mobile-First", desc: "Experiência de navegação prioritária para dispositivos móveis." },
            { title: "Engenharia de Performance", desc: "Páginas leves, sem modelagem de dados complexa, focadas em redirecionamento direto para WhatsApp ou redes sociais." },
            { title: "SEO Básico", desc: "Configuração fundamental de meta tags para motores de busca." }
        ],
        timeline: [
            "Fase 1: Alinhamento Estratégico: Definição de copy e links de conversão.",
            "Fase 2: Engenharia & Design: Desenvolvimento da interface de alta performance.",
            "Fase 3: Implementação e Entrega: Em até 72 horas."
        ]
    },
    pro: {
        title: "Landing Page PRO",
        modes: {
            subscription: {
                description: "Ideal para empresas em crescimento que buscam inteligência de dados com gestão integral.\nEste modelo é uma plataforma completa de vendas, onde a Vilela CodeLab gerencia toda a tecnologia para que você foque apenas na estratégia do seu negócio.",
                features: [
                    { title: "Objetivo Estratégico", desc: "Implementação de análise de dados avançada e automação de processos de vendas." },
                    { title: "Gestão de Infraestrutura", desc: "Toda a operação técnica é gerida e hospedada em ambiente profissional pela Vilela CodeLab." },
                    { title: "Modelagem de Dados", desc: "Inclui integração ativa com banco de dados para armazenamento seguro de leads." },
                    { title: "Custos de Terceiros", desc: "Licenciamentos de infraestrutura e ferramentas de automação já estão inclusos na mensalidade." },
                    { title: "Propriedade (IP)", desc: "O código e a inteligência do projeto pertencem à Vilela CodeLab enquanto houver o vínculo da consultoria." },
                    { title: "Suporte e Evolução", desc: "Manutenção técnica e suporte inclusos para garantir que sua operação nunca pare." }
                ]
            },
            project: {
                description: "Ideal para quem deseja adquirir um ativo digital robusto com total independência.\nNeste modelo, desenvolvemos sua infraestrutura de inteligência diretamente em suas contas proprietárias, garantindo a posse absoluta do seu software.",
                features: [
                    { title: "Objetivo Estratégico", desc: "Aquisição de um ativo digital independente e escalável para a sua empresa." },
                    { title: "Infraestrutura Independente", desc: "Configuração profissional realizada diretamente nas contas do cliente." },
                    { title: "Modelagem de Dados", desc: "Arquitetura de banco de dados exclusiva para gestão autônoma de leads." },
                    { title: "Custos de Terceiros", desc: "O cliente assume diretamente as mensalidades dos provedores de infraestrutura." },
                    { title: "Propriedade (IP)", desc: "O código-fonte e todos os ativos são 100% de propriedade do cliente após a entrega." },
                    { title: "Sem Recorrência", desc: "Sem taxas mensais obrigatórias após a finalização da entrega técnica." }
                ]
            }
        },
        commonFeatures: [
            { title: "CMS Gerenciável", desc: "Painel administrativo intuitivo para você editar conteúdos de forma autônoma." },
            { title: "Automação de Dados", desc: "Notificações em tempo real e integração inteligente de leads." },
            { title: "Design System", desc: "Identidade visual proprietária, construída do zero para a sua marca." },
            { title: "Análise de Dados", desc: "Monitoramento avançado de comportamento e métricas de conversão." }
        ],
        timeline: [
            "Fase 1: Estratégia: Alinhamento de objetivos e definição de modelagem de dados.",
            "Fase 2: Design & Dev: Engenharia de software e construção da interface exclusiva.",
            "Fase 3: Entrega: Testes de integração, automações e entrega técnica final.",
            "Nota: O tempo de entrega total varia de acordo com o escopo e tamanho do projeto."
        ]
    },
    premium: {
        title: "Sites Enterprise",
        subtitle: "Engenharia de software e ecossistemas digitais de alta complexidade.\n\nO Plano Enterprise é a solução definitiva para corporações que não buscam apenas uma presença digital, mas um ativo tecnológico escalável, seguro e de alta disponibilidade. Aqui, desenvolvemos Sites Completos e sistemas personalizados, desenhados para suportar operações de alto volume e grande responsabilidade técnica.",
        features: [
            { title: "A Parceria Técnica Estratégica", desc: "" },
            { title: "Squad Dedicada", desc: "Um time de especialistas exclusivo para o desenvolvimento, design e manutenção do seu site." },
            { title: "SLA Prioritário", desc: "Garantia de atendimento técnico de alta resposta para operações que não podem parar." },
            { title: "Gestão de Infraestrutura Complexa", desc: "Monitoramento contínuo de arquiteturas de nuvem avançadas para garantir estabilidade e escala." },
            { title: "Soberania Digital e Arquitetura Enterprise", desc: "" },
            { title: "Infraestrutura no Nome do Cliente", desc: "Obrigatoriamente, as contas de hospedagem, base de dados e análise são criadas em nome da sua empresa." },
            { title: "Propriedade Total do Ativo", desc: "O cliente detém a posse absoluta do código-fonte e de todos os dados gerados." },
            { title: "Escalabilidade e Segurança", desc: "Arquitetura desenhada para absorver picos de tráfego e proteger informações críticas do negócio." },
            { title: "Regra de Ouro (Compliance Técnica)", desc: "" },
            { title: "Diretriz Inegociável", desc: "Para garantir a segurança jurídica e operacional, a Vilela CodeLab segue a diretriz inegociável de nunca hospedar projetos Enterprise em infraestrutura própria. O projeto é um patrimônio do cliente." },
            { title: "Nota de Briefing", desc: "Por se tratar de soluções sob medida (Enterprise), a stack tecnológica e o escopo do site são definidos em reuniões estratégicas de alto nível." }
        ],
        timeline: []
    }
};

const PlanDetailsModal: React.FC<PlanDetailsModalProps> = ({ isOpen, onClose, planType, initialTab = 'subscription' }) => {
    if (!isOpen || !planType) return null;

    const [activeTab, setActiveTab] = React.useState<'project' | 'subscription'>(initialTab);

    // Force 'any' cast to avoid build errors with union types
    const content = planDetails[planType] as any;
    const hasModes = 'modes' in content;

    // Reset tab when modal opens/closes or plan changes
    React.useEffect(() => {
        setActiveTab(initialTab);
    }, [isOpen, planType, initialTab]);

    const currentModeContent = hasModes ? content.modes[activeTab] : null;
    const featuresToRender = hasModes ? currentModeContent.features : content.features;
    const subtitleToRender = hasModes ? currentModeContent.description : content.subtitle;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-fade-in-down"
            onClick={(e) => e.target === e.currentTarget && onClose()}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-background-dark/80 backdrop-blur-md"></div>

            {/* Modal Content */}
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-[#0F172A]/95 via-[#1e293b]/95 to-[#0F172A]/95 border border-primary/30 rounded-3xl glass-effect shadow-[0_0_100px_rgba(94,125,162,0.2)] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-white/5 [&::-webkit-scrollbar-thumb]:bg-primary/50 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-primary/70 cyber-card">

                {/* Sticky Header with Close Button */}
                <div className="sticky top-0 z-50 flex justify-end p-4 bg-[#0F172A]/80 backdrop-blur-xl border-b border-white/5">
                    <button
                        onClick={onClose}
                        className="text-primary/80 hover:text-primary transition-colors flex items-center gap-2 text-[10px] font-black uppercase tracking-widest bg-white/5 px-3 py-1.5 rounded-full hover:bg-white/10"
                    >
                        Fechar <span className="material-symbols-outlined text-sm">close</span>
                    </button>
                </div>

                <div className="flex flex-col gap-6 p-8 md:p-10 md:pt-6">
                    <div className="flex flex-col gap-2">
                        <div className="text-primary font-black tracking-[0.4em] uppercase text-[9px]">Detalhes do Plano</div>
                        <h2 className="text-white text-3xl md:text-4xl font-black tracking-tighter uppercase text-glow-primary">
                            {content.title}
                        </h2>
                        <div className="w-20 h-1 bg-primary/30 mt-2"></div>
                    </div>

                    {hasModes ? (
                        <>
                            <div className="flex gap-4 mt-2 mb-6">
                                <button
                                    onClick={() => setActiveTab('project')}
                                    className={`flex-1 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all ${activeTab === 'project'
                                        ? 'bg-primary/20 text-primary border-primary/50 shadow-[0_0_20px_rgba(56,189,248,0.2)]'
                                        : 'bg-white/5 text-slate-400 border-white/10 hover:bg-white/10'
                                        }`}
                                >
                                    Projeto
                                </button>
                                <button
                                    onClick={() => setActiveTab('subscription')}
                                    className={`flex-1 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all ${activeTab === 'subscription'
                                        ? 'bg-primary/20 text-primary border-primary/50 shadow-[0_0_20px_rgba(56,189,248,0.2)]'
                                        : 'bg-white/5 text-slate-400 border-white/10 hover:bg-white/10'
                                        }`}
                                >
                                    Assinatura
                                </button>
                            </div>

                            {/* Description */}
                            <p className="text-slate-300 font-medium text-lg leading-relaxed border-l-4 border-primary pl-4 whitespace-pre-line mb-6">
                                {currentModeContent.description}
                            </p>
                        </>
                    ) : (
                        subtitleToRender && (
                            <p className="text-slate-300 font-medium text-lg leading-relaxed border-l-4 border-primary pl-4 mb-6">
                                {subtitleToRender}
                            </p>
                        )
                    )}

                    <div className="flex flex-col gap-6">
                        {featuresToRender.map((feature: any, idx: number) => (
                            <div key={idx} className="flex flex-col gap-1">
                                {feature.desc ? (
                                    <>
                                        <h3 className="text-white font-bold text-sm flex items-center gap-2">
                                            <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                                            {feature.title}
                                        </h3>
                                        <p className="text-slate-400 text-xs pl-6 leading-relaxed whitespace-pre-line">
                                            {feature.desc}
                                        </p>
                                    </>
                                ) : (
                                    <h3 className="text-primary font-black uppercase tracking-[0.2em] text-xs mt-4 mb-2 pb-2 border-b border-white/5">
                                        {feature.title}
                                    </h3>
                                )}
                            </div>
                        ))}
                    </div>

                    {hasModes && content.commonFeatures && (
                        <div className="mt-8 pt-8 border-t border-white/10">
                            <h3 className="text-white font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-lg">settings</span>
                                Especificações Técnicas (Ambas as Versões)
                            </h3>
                            <div className="flex flex-col gap-6">
                                {content.commonFeatures.map((feature: any, idx: number) => (
                                    <div key={idx} className="flex flex-col gap-1">
                                        <h3 className="text-white font-bold text-sm flex items-center gap-2">
                                            <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                                            {feature.title}
                                        </h3>
                                        <p className="text-slate-400 text-xs pl-6 leading-relaxed whitespace-pre-line">
                                            {feature.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {content.timeline && content.timeline.length > 0 && (
                        <div className="mt-6 pt-6 border-t border-white/10">
                            <h3 className="text-white font-black uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-lg">calendar_month</span>
                                Cronograma Estimado
                            </h3>
                            <div className="grid grid-cols-1 gap-2">
                                {content.timeline.map((item: any, idx: number) => (
                                    <div key={idx} className="flex items-center gap-3 text-slate-400 text-xs font-medium">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default PlanDetailsModal;
