import React, { useState } from 'react';

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "O que diferencia o Modo Assinatura do Modo Projeto?",
            answer: "No Modo Assinatura, a CodeLab cuida de toda a infraestrutura e você paga uma mensalidade pelo serviço gerenciado, ideal para validação rápida. No Modo Projeto, nós desenvolvemos a estrutura diretamente nas suas contas, garantindo que o ativo digital seja 100% de sua propriedade, sem mensalidades recorrentes."
        },
        {
            question: "Preciso contratar um servidor próprio no Modo Projeto?",
            answer: "Sim. No Modo Projeto, configuramos tudo diretamente em suas contas de infraestrutura (hospedagem, banco de dados, etc.). Você será o titular direto dos contratos, garantindo independência total. Nós te orientamos em todo o processo de contratação."
        },
        {
            question: "Como funciona o suporte no Modo Assinatura?",
            answer: "A assinatura inclui suporte técnico contínuo. Monitoramos a performance, garantimos que o site esteja sempre online e aplicamos atualizações de segurança automaticamente, permitindo que você foque apenas nas vendas."
        },
        {
            question: "É possível migrar de Assinatura para Projeto depois?",
            answer: "Sim. Se você começar validando no Modo Assinatura e decidir escalar, oferecemos uma migração completa. Aplicamos a Taxa de Migração e transferimos todo o código e dados para sua infraestrutura proprietária."
        },
        {
            question: "Qual o prazo de entrega dos projetos?",
            answer: "O plano Express é entregue em até 72 horas úteis após o briefing. Para o plano Pro e Enterprise, o cronograma é sob medida, variando conforme a complexidade do escopo e as modelagens de dados necessárias."
        },
        {
            question: "As Landing Pages são otimizadas para SEO?",
            answer: "Sim. Todas as nossas páginas nascem com arquitetura otimizada para buscadores, incluindo configurações de meta tags, performance de carregamento (Core Web Vitals) e estrutura semântica correta."
        },
        {
            question: "Quais formas de pagamento são aceitas?",
            answer: "Trabalhamos com PIX e Cartão de Crédito, com parcelamentos conforme o valor e cronograma de entregas."
        }
    ];

    return (
        <div id="faq" className="px-4 py-24 reveal-on-scroll relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 animate-pulse-slow"></div>

            <div className="w-full max-w-[90vw] lg:max-w-[85vw] mx-auto flex flex-col md:flex-row gap-16 items-start">

                {/* FAQ Section */}
                <div className="flex-1 flex flex-col gap-8 w-full">
                    <div className="flex flex-col gap-2">
                        <div className="text-primary font-black tracking-[0.4em] uppercase text-[9px] mb-1">Tira Dúvidas</div>
                        <h2 className="text-white text-4xl md:text-5xl font-black tracking-tighter uppercase text-glow-primary leading-none">
                            Perguntas <span className="text-primary italic">Frequentes</span>
                        </h2>
                    </div>

                    <div className="flex flex-col gap-4">
                        {faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className={`border rounded-2xl transition-all duration-300 ${openIndex === idx
                                    ? 'bg-[#0F172A] border-primary/50 shadow-[0_0_20px_rgba(56,189,248,0.1)]'
                                    : 'bg-white/5 border-white/5 hover:bg-white/10'
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(active => active === idx ? null : idx)}
                                    className="w-full text-left p-6 flex justify-between items-center gap-4"
                                >
                                    <span className={`font-bold text-sm md:text-base uppercase tracking-wider ${openIndex === idx ? 'text-white' : 'text-slate-300'
                                        }`}>
                                        {faq.question}
                                    </span>
                                    <span className={`material-symbols-outlined transition-transform duration-300 ${openIndex === idx ? 'text-primary rotate-180' : 'text-slate-500'
                                        }`}>
                                        keyboard_arrow_down
                                    </span>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <p className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Card Section */}
                <div className="w-full md:w-[420px] shrink-0 sticky top-24">
                    <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0F172A] to-[#1e293b] border border-white/10 shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative z-10 flex flex-col gap-6 text-center">
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto border border-primary/20 shadow-[0_0_30px_rgba(56,189,248,0.15)] group-hover:scale-110 transition-transform duration-500">
                                <span className="material-symbols-outlined text-primary text-3xl">chat</span>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h3 className="text-white font-black uppercase tracking-wider text-xl">Ainda com dúvidas?</h3>
                                <p className="text-slate-400 text-sm font-medium leading-relaxed">
                                    Nossa equipe técnica está pronta para analisar seu projeto e responder suas perguntas agora mesmo.
                                </p>
                            </div>

                            <a
                                href="https://wa.me/5511953840339"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-black uppercase tracking-widest text-xs py-4 px-6 rounded-xl shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] hover:scale-[1.02] active:scale-95 transition-all duration-300"
                            >
                                <span className="material-symbols-outlined text-lg">chat</span>
                                Falar no WhatsApp
                            </a>

                            <div className="flex items-center justify-center gap-2 text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                Online Agora
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FAQ;
