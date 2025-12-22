import React from 'react';

const ComparisonTable: React.FC = () => {
    const tableData = [
        { feature: "Modelo", express: "Assinatura (SaaS)", pro: "Projeto", enterprise: "Projeto" },
        { feature: "Propriedade do Código", express: "Vilela CodeLab", pro: "100% do Cliente", enterprise: "100% do Cliente" },
        { feature: "Propriedade do Design", express: "Compartilhada", pro: "Cliente", enterprise: "Cliente" },
        { feature: "Hospedagem", express: "Conta CodeLab", pro: "Conta do Cliente", enterprise: "Conta do Cliente" },
        { feature: "Acesso Root", express: "no", pro: "yes-total", enterprise: "yes-total" },
        { feature: "Repositório", express: "no", pro: "yes-client", enterprise: "yes-client" },
        { feature: "Recorrência", express: "Obrigatória", pro: "Opcional", enterprise: "Parceria Técnica" },
        { feature: "Cancelamento", express: "Página offline", pro: "Site permanece ativo", enterprise: "Site permanece ativo" },
        { feature: "Backup na Saída", express: "no", pro: "yes", enterprise: "yes" },
        { feature: "Taxa de Migração", express: "Opcional", pro: "no", enterprise: "no" },
        { feature: "SLA", express: "Básico", pro: "Padrão", enterprise: "Prioritário" },
        { feature: "Performance", express: "Otimizada", pro: "Alta", enterprise: "Máxima" },
        { feature: "Integrações", express: "Limitadas", pro: "Avançadas", enterprise: "Personalizadas" },
        { feature: "Suporte", express: "Padrão", pro: "Prioritário", enterprise: "Dedicado" },
        { feature: "LGPD", express: "Infra gerenciada", pro: "Responsabilidade do Cliente", enterprise: "Responsabilidade do Cliente" },
    ];

    const renderCell = (value: string) => {
        if (value === "no") {
            return (
                <div className="flex items-center gap-2 text-red-500/80">
                    <span className="material-symbols-outlined text-lg">close</span>
                    <span className="text-xs uppercase tracking-wider font-bold">Não</span>
                </div>
            );
        }
        if (value === "yes") {
            return (
                <div className="flex items-center gap-2 text-emerald-400">
                    <span className="material-symbols-outlined text-lg">check_circle</span>
                    <span className="text-xs uppercase tracking-wider font-bold">Sim</span>
                </div>
            );
        }
        if (value === "yes-total") {
            return (
                <div className="flex items-center gap-2 text-emerald-400">
                    <span className="material-symbols-outlined text-lg">verified</span>
                    <span className="text-xs uppercase tracking-wider font-bold">Total</span>
                </div>
            );
        }
        if (value === "yes-client") {
            return (
                <div className="flex items-center gap-2 text-emerald-400">
                    <span className="material-symbols-outlined text-lg">deployed_code</span>
                    <span className="text-xs uppercase tracking-wider font-bold">Cliente</span>
                </div>
            );
        }
        return <span className="text-slate-300 font-medium">{value}</span>;
    };

    return (
        <div className="w-full mt-32 relative">
            {/* Background Decorations */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-full bg-primary/5 blur-[120px] -z-10 pointer-events-none"></div>

            <div className="flex flex-col gap-2 mb-16 text-center">
                <div className="text-primary font-black tracking-[0.4em] uppercase text-[9px] mb-1">Technical Specs</div>
                <h3 className="text-white text-4xl md:text-5xl font-black tracking-tighter uppercase text-glow-primary leading-none">
                    Comparativo <span className="text-primary italic">Detalhado</span>
                </h3>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-[#0F172A]/40 backdrop-blur-xl">
                <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary/20">
                    <table className="w-full min-w-[900px] border-collapse text-left">
                        <thead>
                            <tr className="border-b border-white/10 bg-white/5">
                                <th className="p-6 pl-8 text-xs font-black text-primary uppercase tracking-[0.2em] w-1/4">Recursos</th>
                                <th className="p-6 text-sm font-bold text-white w-1/4">
                                    <div className="flex flex-col gap-1">
                                        <span className="uppercase tracking-tight text-lg">Express</span>
                                        <span className="text-[10px] text-slate-400 font-mono bg-white/5 w-fit px-2 py-0.5 rounded border border-white/5">SaaS / Assinatura</span>
                                    </div>
                                </th>
                                <th className="p-6 text-sm font-bold text-white w-1/4 bg-primary/5 border-x border-primary/10 relative">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                                    <div className="flex flex-col gap-1">
                                        <span className="uppercase tracking-tight text-lg text-primary">Pro</span>
                                        <span className="text-[10px] text-slate-400 font-mono bg-white/5 w-fit px-2 py-0.5 rounded border border-white/5">Projeto Custom</span>
                                    </div>
                                </th>
                                <th className="p-6 text-sm font-bold text-white w-1/4">
                                    <div className="flex flex-col gap-1">
                                        <span className="uppercase tracking-tight text-lg">Enterprise</span>
                                        <span className="text-[10px] text-slate-400 font-mono bg-white/5 w-fit px-2 py-0.5 rounded border border-white/5">Sob Medida</span>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {tableData.map((row, index) => (
                                <tr
                                    key={index}
                                    className="hover:bg-white/[0.02] transition-colors group"
                                >
                                    <td className="p-5 pl-8 text-xs font-bold text-slate-400 uppercase tracking-wider border-r border-white/5 group-hover:text-white transition-colors">
                                        {row.feature}
                                    </td>
                                    <td className="p-5 text-sm border-r border-white/5">
                                        {renderCell(row.express)}
                                    </td>
                                    <td className="p-5 text-sm bg-primary/[0.02] border-r border-primary/10">
                                        {renderCell(row.pro)}
                                    </td>
                                    <td className="p-5 text-sm">
                                        {renderCell(row.enterprise)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="mt-8 flex justify-center">
                <p className="text-slate-600 text-[10px] uppercase tracking-widest text-center max-w-2xl px-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">info</span>
                    Todos os planos incluem suporte técnico e garantia de funcionamento (SLA).
                </p>
            </div>
        </div>
    );
};

export default ComparisonTable;
