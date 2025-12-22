import React, { useState } from 'react';
import PlanDetailsModal from './PlanDetailsModal';

interface PricingProps {
  onQuoteRequest?: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onQuoteRequest = () => { } }) => {
  const [selectedPlan, setSelectedPlan] = useState<'express' | 'pro' | 'premium' | null>(null);
  const whatsappLink = "https://wa.me/5511953840339";

  const ActionButtons = ({ whatsappUrl, isFeatured = false, onQuoteRequest, onDetailsClick }: { whatsappUrl: string, isFeatured?: boolean, onQuoteRequest: () => void, onDetailsClick: () => void }) => (
    <div className="grid grid-cols-1 gap-3 mt-6">
      <button
        onClick={onDetailsClick}
        className={`flex items-center justify-center rounded-lg py-3 px-2 text-[11px] font-bold transition-all cursor-pointer border h-auto whitespace-normal text-center ${isFeatured
          ? 'bg-white/10 border-white/20 text-white hover:bg-white/20'
          : 'bg-white/5 border-white/5 text-white hover:bg-white/10'
          }`}
      >
        <span>Mais informações</span>
      </button>
      <button
        onClick={onQuoteRequest}
        className="flex items-center justify-center rounded-lg py-3 px-2 text-[11px] font-bold transition-all cursor-pointer shadow-md h-auto whitespace-normal text-center bg-primary hover:bg-primary-dark text-white scale-100 hover:scale-[1.02] active:scale-95"
      >
        <span>Falar com Consultor</span>
      </button>
    </div>
  );

  return (
    <div id="pricing" className="px-4 py-24 reveal-on-scroll">
      <div className="flex flex-col gap-2 mb-20 text-center">
        <div className="text-primary font-black tracking-[0.4em] uppercase text-[9px] mb-1">Investment Tiers</div>
        <h2 className="text-white text-5xl md:text-7xl font-black tracking-tighter uppercase text-glow-primary leading-none">
          Planos de <span className="text-primary italic">Serviços</span>
        </h2>
        <p className="text-slate-400 text-lg md:text-xl max-w-[720px] font-medium leading-relaxed mx-auto mt-4">
          Estruturas focadas em resultados, desde a validação rápida até operações de alta escala.
        </p>

        {/* Botão de Comparativo */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

        {/* Plano: Express */}
        <div className="group relative flex flex-col gap-4 rounded-2xl border border-white/5 bg-[#0F172A] p-8 hover:-translate-y-2 transition-all duration-500 shadow-lg glass-effect">
          <div className="flex flex-col gap-3">
            <div className="flex items-start justify-between">
              <span className="text-primary text-[9px] font-black tracking-[0.2em] uppercase rounded-lg bg-primary/10 border border-primary/20 px-3 py-1">Validação</span>
            </div>
            <h3 className="text-white text-3xl font-black group-hover:text-primary transition-colors leading-none">Landing Page Express</h3>
            <p className="text-slate-400 text-sm font-medium mt-4 leading-relaxed">
              Ideal para validação rápida de infoprodutos e captação de leads focada.
            </p>
          </div>
          <div className="h-px bg-gradient-to-r from-primary/20 via-primary/5 to-transparent w-full my-4"></div>
          <div className="flex flex-col gap-5 flex-1">
            {[
              { title: "Gestão Web", desc: "Gestão da infraestrutura e manutenções." },
              { title: "Mobile-First", desc: "Prioridade em smartphones." },
              { title: "Alta Conversão", desc: "Foco em conversão de clientes." },
              { title: "Entregue em 72 horas", desc: "Entrega ultra-rápida." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white">{item.title}</span>
                  <span className="text-[11px] text-slate-500 uppercase tracking-wider">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
          <ActionButtons
            whatsappUrl={whatsappLink}
            onQuoteRequest={onQuoteRequest}
            onDetailsClick={() => setSelectedPlan('express')}
          />
        </div>

        {/* Plano: Pro (Featured) */}
        <div className="group relative flex flex-col gap-4 rounded-2xl border-2 border-primary bg-[#0F172A] p-8 shadow-[0_0_50px_rgba(94,125,162,0.2)] hover:-translate-y-2 transition-all duration-500 md:-mt-8">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-[0.2em] shadow-xl">Recomendado</div>
          <div className="flex flex-col gap-1 mt-4">
            <h3 className="text-white text-3xl font-black">Landing Page Pro</h3>
            <p className="text-slate-400 text-sm font-medium mt-4 leading-relaxed">
              Ferramenta de vendas completa com foco em automação e exclusividade visual.
            </p>
          </div>
          <div className="h-px bg-primary/20 w-full my-4"></div>
          <div className="flex flex-col gap-5 flex-1">
            {[
              { title: "Automação de Leads", desc: "Entrega de notificações em tempo real." },
              { title: "Análise de Dados", desc: "Monitoramento de métricas e insights." },
              { title: "Design System", desc: "Identidade proprietária" },
              { title: "CMS Gerenciável", desc: "Painel Admin intuitivo." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-primary text-xl">workspace_premium</span>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white">{item.title}</span>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
          <ActionButtons
            whatsappUrl={whatsappLink}
            isFeatured={true}
            onQuoteRequest={onQuoteRequest}
            onDetailsClick={() => setSelectedPlan('pro')}
          />
        </div>

        {/* Plano: Premium */}
        <div className="group relative flex flex-col gap-4 rounded-2xl border border-white/5 bg-[#0F172A] p-8 hover:-translate-y-2 transition-all duration-500 shadow-lg glass-effect">
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <h3 className="text-white text-2xl font-bold group-hover:text-primary transition-colors">Sites Enterprise</h3>
              <span className="text-primary text-[9px] font-black tracking-[0.2em] uppercase rounded-lg bg-primary/10 border border-primary/20 px-3 py-1">Squad</span>
            </div>
            <p className="text-slate-400 text-sm font-medium mt-4 leading-relaxed">
              Para grandes operações que exigem máxima performance e squad dedicada.
            </p>
          </div>
          <div className="h-px bg-gradient-to-r from-primary/20 via-primary/5 to-transparent w-full my-4"></div>
          <div className="flex flex-col gap-5 flex-1">
            {[
              { title: "Squad Dedicada", desc: "Desenvolvimento e Design Exclusivo." },
              { title: "Infraestrutura Completa", desc: "Configuração enterprise nas contas do cliente." },
              { title: "SLA Prioritário", desc: "Atendimento técnico de alta resposta." },
              { title: "Parceria Técnica", desc: "Somos o seu braço direito na engenharia web." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-primary text-xl">hub</span>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white">{item.title}</span>
                  <span className="text-[11px] text-slate-500 uppercase tracking-wider">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
          <ActionButtons
            whatsappUrl={whatsappLink}
            onQuoteRequest={onQuoteRequest}
            onDetailsClick={() => setSelectedPlan('premium')}
          />
        </div>
      </div>

      <PlanDetailsModal
        isOpen={!!selectedPlan}
        onClose={() => setSelectedPlan(null)}
        planType={selectedPlan}
      />

    </div>
  );
};

export default Pricing;