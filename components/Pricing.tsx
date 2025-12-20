import React from 'react';

const Pricing: React.FC = () => {
  const whatsappLink = "https://wa.me/5511953840339";

  const proposalLinks = {
    express: "https://bit.ly/vilelacodelab-plano1",
    pro: "https://bit.ly/vilelacodelab-plano2",
    premium: "https://bit.ly/vilelacodelab-plano3"
  };

  const ActionButtons = ({ whatsappUrl, proposalUrl, isFeatured = false }: { whatsappUrl: string, proposalUrl: string, isFeatured?: boolean }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
      <a
        href={proposalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center rounded-lg h-12 px-2 text-[11px] font-bold transition-all cursor-pointer border ${isFeatured
            ? 'bg-white/10 border-white/20 text-white hover:bg-white/20'
            : 'bg-white/5 border-white/5 text-white hover:bg-white/10'
          }`}
      >
        <span className="truncate">Consultar Proposta</span>
      </a>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center rounded-lg h-12 px-2 text-[11px] font-bold transition-all cursor-pointer shadow-md ${isFeatured
            ? 'bg-primary hover:bg-primary-dark text-white scale-100 hover:scale-[1.02] active:scale-95'
            : 'bg-white/10 hover:bg-white/20 text-white border border-white/5'
          }`}
      >
        <span className="truncate">Falar com Consultor</span>
      </a>
    </div>
  );

  return (
    <div id="pricing" className="px-4 py-24 reveal-on-scroll">
      <div className="flex flex-col gap-2 mb-10 text-center">
        <div className="text-primary font-black tracking-[0.4em] uppercase text-[9px] mb-1">Investment Tiers</div>
        <h2 className="text-white text-5xl md:text-7xl font-black tracking-tighter uppercase text-glow-primary leading-none">
          Planos de <span className="text-primary italic">Serviços</span>
        </h2>
        <p className="text-slate-400 text-lg md:text-xl max-w-[720px] font-medium leading-relaxed mx-auto mt-4">
          Estruturas focadas em resultados, desde a validação rápida até operações de alta escala.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {/* Plano: Express */}
        <div className="group relative flex flex-col gap-4 rounded-2xl border border-white/5 bg-[#0F172A] p-8 hover:-translate-y-2 transition-all duration-500 shadow-lg glass-effect">
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <h3 className="text-white text-2xl font-bold group-hover:text-primary transition-colors">Plano Express</h3>
              <span className="text-primary text-[9px] font-black tracking-[0.2em] uppercase rounded-lg bg-primary/10 border border-primary/20 px-3 py-1">Validação</span>
            </div>
            <p className="text-primary text-sm font-bold mt-1">O Salto Inicial para o Mercado</p>
            <p className="text-slate-400 text-sm font-medium mt-4 leading-relaxed">
              Este plano foi desenhado para quem tem pressa em converter e precisa de retorno imediato. É a solução perfeita para colocar seu produto no mercado agora e atrair os primeiros clientes sem qualquer complicação. Com um design focado estrategicamente em levar o visitante direto para o botão de compra ou contato, garantimos que sua marca cause impacto desde o primeiro segundo. Além de ser totalmente otimizado para abrir de forma impecável e rápida em qualquer smartphone, entregamos as configurações básicas de SEO para que as pessoas te encontrem nas buscas do Google. Tudo isso com uma velocidade recorde: seu negócio online estará no ar em apenas 7 dias úteis.
            </p>
          </div>
          <div className="h-px bg-gradient-to-r from-primary/20 via-primary/5 to-transparent w-full my-4"></div>
          <div className="flex flex-col gap-5 flex-1">
            {[
              { title: "Alta Conversão", desc: "Foco total em CTA único" },
              { title: "Mobile-First", desc: "Prioridade em smartphones" },
              { title: "SEO Básico", desc: "Configuração de meta tags" },
              { title: "7 dias úteis", desc: "Entrega ultra-rápida" }
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
          <ActionButtons whatsappUrl={whatsappLink} proposalUrl={proposalLinks.express} />
        </div>

        {/* Plano: Pro (Featured) */}
        <div className="group relative flex flex-col gap-4 rounded-2xl border-2 border-primary bg-[#0F172A] p-8 shadow-[0_0_50px_rgba(94,125,162,0.2)] hover:-translate-y-2 transition-all duration-500 md:-mt-8">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-[0.2em] shadow-xl">Recomendado</div>
          <div className="flex flex-col gap-1 mt-4">
            <h3 className="text-white text-3xl font-black">Plano Pro</h3>
            <p className="text-primary text-sm font-bold">Crescimento com Autonomia Total</p>
            <p className="text-slate-400 text-sm font-medium mt-4 leading-relaxed">
              Nossa solução "carro-chefe" é focada em empresas que já estão vendendo e buscam uma estrutura profissional para transmitir confiança e autoridade inquestionáveis. O grande diferencial aqui é o poder que entregamos a você: através de um painel simples e intuitivo (CMS), você assume o controle para alterar textos e fotos sozinho, sem depender de programadores. Para potencializar seus resultados, conectamos seu site diretamente às suas ferramentas de e-mail e vendas (CRM), automatizando a organização dos seus contatos. Fugindo de modelos prontos, criamos um visual exclusivo que torna sua marca inesquecível, tudo acompanhado por relatórios detalhados para que você saiba exatamente quem clicou em seus anúncios e como seu investimento está performando.
            </p>
          </div>
          <div className="h-px bg-primary/20 w-full my-4"></div>
          <div className="flex flex-col gap-5 flex-1">
            {[
              { title: "CMS Gerenciável", desc: "Painel Admin intuitivo" },
              { title: "Automação CRM", desc: "Integração HubSpot/RD Station" },
              { title: "Design System", desc: "Identidade proprietária" },
              { title: "Análise de Dados", desc: "Google Analytics & Pixels" }
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
          <ActionButtons whatsappUrl={whatsappLink} proposalUrl={proposalLinks.pro} isFeatured={true} />
        </div>

        {/* Plano: Premium */}
        <div className="group relative flex flex-col gap-4 rounded-2xl border border-white/5 bg-[#0F172A] p-8 hover:-translate-y-2 transition-all duration-500 shadow-lg glass-effect">
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <h3 className="text-white text-2xl font-bold group-hover:text-primary transition-colors">Plano Premium</h3>
              <span className="text-primary text-[9px] font-black tracking-[0.2em] uppercase rounded-lg bg-primary/10 border border-primary/20 px-3 py-1">Squad</span>
            </div>
            <p className="text-primary text-sm font-bold mt-1">Estabilidade e Elite Digital</p>
            <p className="text-slate-400 text-sm font-medium mt-4 leading-relaxed">
              Para operações de alto faturamento que exigem o máximo de performance, criamos o plano Premium, onde o foco é a estabilidade absoluta e o atendimento VIP. Sua empresa contará com um time de especialistas dedicado exclusivamente ao seu projeto, garantindo o melhor resultado técnico e visual do mercado. Além do suporte prioritário para ajustes imediatos, sua página será sustentada por uma infraestrutura de alta tecnologia, preparada para suportar milhares de acessos simultâneos durante grandes lançamentos ou picos de tráfego. É o cuidado permanente que sua operação merece, com monitoramento 24h por dia para assegurar que seu ativo digital esteja sempre rápido, seguro e online.
            </p>
          </div>
          <div className="h-px bg-gradient-to-r from-primary/20 via-primary/5 to-transparent w-full my-4"></div>
          <div className="flex flex-col gap-5 flex-1">
            {[
              { title: "Squad Dedicada", desc: "Devs + Designers exclusivos" },
              { title: "SLA Prioritário", desc: "Atendimento de alta resposta" },
              { title: "Cloud Complexa", desc: "Infraestrutura escalável" },
              { title: "Manutenção 24/7", desc: "Otimização técnica contínua" }
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
          <ActionButtons whatsappUrl={whatsappLink} proposalUrl={proposalLinks.premium} />
        </div>
      </div>
    </div>
  );
};

export default Pricing;