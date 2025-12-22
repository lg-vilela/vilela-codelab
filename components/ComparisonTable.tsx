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
                <div className="flex items-center gap-2 text-red-400">
                    <span className="material-symbols-outlined text-lg">close</span>
                    <span>Não</span>
                </div>
            );
        }
        if (value === "yes") {
            return (
                <div className="flex items-center gap-2 text-emerald-400">
                    <span className="material-symbols-outlined text-lg">check_circle</span>
                    <span>Sim</span>
                </div>
            );
        }
        if (value === "yes-total") {
            return (
                <div className="flex items-center gap-2 text-emerald-400">
                    <span className="material-symbols-outlined text-lg">check_circle</span>
                    <span>Total</span>
                </div>
            );
        }
        if (value === "yes-client") {
            return (
                <div className="flex items-center gap-2 text-emerald-400">
                    <span className="material-symbols-outlined text-lg">check_circle</span>
                    <span>Cliente</span>
                </div>
            );
        }
        return <span>{value}</span>;
    };

    return (
        <div className="w-full mt-24">
            <h3 className="text-2xl md:text-3xl font-black text-center text-white mb-10 uppercase tracking-tight">
                Comparativo Detalhado
            </h3>

            <div className="overflow-x-auto pb-4 scrollbar-hide">
                <table className="w-full min-w-[800px] border-collapse bg-[#0F172A]/50 rounded-2xl overflow-hidden glass-effect">
                    <thead>
                        <tr className="border-b border-white/10 bg-white/5">
                            <th className="p-6 text-left text-sm font-black text-white uppercase tracking-wider w-1/4">Característica</th>
                            <th className="p-6 text-left text-sm font-black text-white uppercase tracking-wider w-1/4">
                                <div className="flex flex-col gap-1">
                                    <span>Express Launch</span>
                                    <span className="text-[10px] text-primary font-normal tracking-normal">(Assinatura)</span>
                                </div>
                            </th>
                            <th className="p-6 text-left text-sm font-black text-white uppercase tracking-wider w-1/4">
                                <div className="flex flex-col gap-1">
                                    <span>Sales Page Pro</span>
                                    <span className="text-[10px] text-primary font-normal tracking-normal">(Projeto)</span>
                                </div>
                            </th>
                            <th className="p-6 text-left text-sm font-black text-white uppercase tracking-wider w-1/4">Enterprise Custom</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {tableData.map((row, index) => (
                            <tr
                                key={index}
                                className="hover:bg-white/5 transition-colors group"
                            >
                                <td className="p-5 text-sm font-bold text-slate-300 group-hover:text-white transition-colors">
                                    {row.feature}
                                </td>
                                <td className="p-5 text-sm text-slate-400 font-medium">
                                    {renderCell(row.express)}
                                </td>
                                <td className="p-5 text-sm text-slate-400 font-medium bg-primary/5">
                                    {renderCell(row.pro)}
                                </td>
                                <td className="p-5 text-sm text-slate-400 font-medium">
                                    {renderCell(row.enterprise)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-8 flex justify-center">
                <p className="text-slate-500 text-xs italic text-center max-w-2xl px-4">
                    * Todos os planos incluem suporte técnico e garantia de funcionamento. Preços e prazos podem variar conforme a complexidade do projeto.
                </p>
            </div>
        </div>
    );
};

export default ComparisonTable;
