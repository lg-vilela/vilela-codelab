
import React, { useState } from 'react';
import { supabase } from '../supabase';

interface QuoteFormProps {
  onBack: () => void;
}

const QuoteForm: React.FC<QuoteFormProps> = ({ onBack }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    company: '',
    siteUrl: '',
    planType: 'Pro',
    objective: 'Vendas Diretas',
    trafficSource: 'Não definido',
    visualReference: '',
    mainProblem: '',
    description: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      // Inserção no Supabase seguindo a estrutura da tabela criada via SQL
      const { error } = await supabase
        .from('leads')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            whatsapp: formData.whatsapp,
            company: formData.company,
            site_url: formData.siteUrl,
            plan_type: formData.planType,
            objective: formData.objective,
            traffic_source: formData.trafficSource,
            visual_reference: formData.visualReference,
            main_problem: formData.mainProblem,
            description: formData.description,
          }
        ]);

      if (error) throw error;

      setIsSuccess(true);
    } catch (error: any) {
      console.error('Erro ao enviar protocolo:', error);
      setErrorMessage(error.message || 'Falha na conexão com o núcleo de dados.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-20 w-full animate-fade-in-down">
        <div className="w-full max-w-2xl relative bg-[#0F172A]/90 border-2 border-primary p-12 text-center glass-effect cyber-card shadow-[0_0_80px_rgba(94,125,162,0.3)]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-[0_0_40px_rgba(94,125,162,0.6)]">
            <span className="material-symbols-outlined text-white text-5xl">task_alt</span>
          </div>

          <div className="mt-8 flex flex-col gap-6">
            <div className="text-primary font-black tracking-[0.5em] uppercase text-[10px]">Transmission Complete</div>
            <h2 className="text-white text-4xl md:text-5xl font-black uppercase tracking-tighter text-glow-primary">
              Protocolo <span className="text-primary italic">Sincronizado</span>
            </h2>
            <p className="text-slate-400 text-lg font-medium leading-relaxed">
              Obrigado, <span className="text-white font-bold">{formData.name}</span>. <br />
              Seus dados foram injetados em nosso núcleo de processamento. Nossa equipe técnica iniciará o diagnóstico em breve.
            </p>

            <div className="flex flex-col items-center gap-4 mt-8">
              <button
                onClick={onBack}
                className="px-10 py-5 bg-primary text-white font-black rounded-xl hover:scale-105 active:scale-95 transition-all tracking-[0.2em] uppercase text-xs"
              >
                Retornar ao Terminal
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 py-10 w-full animate-fade-in-down">
      <div className="w-full max-w-4xl relative group">

        {/* HUD Navigation */}
        <div className="absolute -top-10 left-0 flex items-center gap-3">
          <button
            onClick={onBack}
            disabled={isSubmitting}
            type="button"
            className="flex items-center gap-2 text-primary hover:text-white transition-all text-[10px] font-black uppercase tracking-[0.2em] group/back disabled:opacity-50"
          >
            <span className="material-symbols-outlined text-sm group-hover/back:-translate-x-1 transition-transform">terminal</span>
            Abortar Protocolo / Voltar
          </button>
        </div>

        {/* Main Terminal Container */}
        <div
          className={`relative bg-[#0F172A]/80 border border-primary/30 p-8 md:p-12 shadow-[0_0_60px_rgba(94,125,162,0.15)] glass-effect overflow-hidden transition-all ${isSubmitting ? 'opacity-70 grayscale-[0.5]' : ''}`}
          style={{ clipPath: 'polygon(0 40px, 40px 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%)' }}
        >
          <div className="relative z-10 mb-12">
            <div className="text-primary font-black tracking-[0.4em] uppercase text-[9px] mb-2">Technical Diagnosis Protocol</div>
            <h2 className="text-white text-4xl md:text-5xl font-black tracking-tighter uppercase text-glow-primary leading-none">
              Solicitar <span className="text-primary italic">Orçamento</span>
            </h2>
          </div>

          {errorMessage && (
            <div className="mb-8 p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-xs font-bold uppercase tracking-widest flex items-center gap-3 animate-pulse">
              <span className="material-symbols-outlined">warning</span>
              Erro de Uplink: {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {[
                { label: 'Nome Completo', key: 'name', placeholder: 'IDENTIDADE DO USUÁRIO', type: 'text', id: '01', required: true },
                { label: 'Empresa', key: 'company', placeholder: 'NOME DA CORPORAÇÃO', type: 'text', id: '02', required: true },
                { label: 'Email Corporativo', key: 'email', placeholder: 'ENDEREÇO DE UPLINK', type: 'email', id: '03', required: true },
                { label: 'WhatsApp', key: 'whatsapp', placeholder: '(00) 00000-0000', type: 'tel', id: '04', required: true },
              ].map((field) => (
                <div key={field.key} className="flex flex-col gap-2 group/input">
                  <label className="text-[10px] font-black text-primary/60 uppercase tracking-widest px-1">
                    [{field.id}] {field.label} {field.required && <span className="text-red-500/50">*</span>}
                  </label>
                  <input
                    type={field.type}
                    required={field.required}
                    disabled={isSubmitting}
                    className="bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-white text-sm font-medium focus:outline-none focus:border-primary focus:bg-primary/5 transition-all placeholder:text-white/10 disabled:opacity-50"
                    placeholder={field.placeholder}
                    value={(formData as any)[field.key]}
                    onChange={e => setFormData({ ...formData, [field.key]: e.target.value })}
                  />
                </div>
              ))}

              <div className="flex flex-col gap-2 group/input md:col-span-2">
                <label className="text-[10px] font-black text-primary/60 uppercase tracking-widest px-1">
                  [05] URL da sua Rede Social profissional ou de sua Empresa
                </label>
                <input
                  type="url"
                  disabled={isSubmitting}
                  className="bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-white text-sm font-medium focus:outline-none focus:border-primary focus:bg-primary/5 transition-all placeholder:text-white/10 disabled:opacity-50"
                  placeholder="https://seuprojeto.com.br"
                  value={formData.siteUrl}
                  onChange={e => setFormData({ ...formData, siteUrl: e.target.value })}
                />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <label className="text-[10px] font-black text-primary/60 uppercase tracking-widest px-1">
                [06] Plano Desejado <span className="text-red-500/50">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {['Express', 'Pro', 'Premium', 'Recomendação'].map((plan) => (
                  <div
                    key={plan}
                    onClick={() => !isSubmitting && setFormData({ ...formData, planType: plan })}
                    className={`relative cursor-pointer transition-all duration-300 p-5 border-2 rounded-xl flex flex-col gap-2 ${formData.planType === plan
                      ? 'bg-primary/20 border-primary text-white shadow-[0_0_25px_rgba(94,125,162,0.3)]'
                      : 'bg-white/5 border-white/5 text-slate-500 hover:border-primary/40'
                      }`}
                  >
                    <span className="text-xs font-black uppercase tracking-[0.2em]">{plan}</span>
                    <span className="text-[9px] opacity-60 uppercase">
                      {plan === 'Express' ? 'Validação' :
                        plan === 'Pro' ? 'Conversão' :
                          plan === 'Premium' ? 'Escala Total' :
                            'Não sei qual escolher'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                <label className="text-[10px] font-black text-primary/60 uppercase tracking-widest px-1">
                  [07] Objetivo Principal <span className="text-red-500/50">*</span>
                </label>
                <select
                  required
                  disabled={isSubmitting}
                  value={formData.objective}
                  onChange={e => setFormData({ ...formData, objective: e.target.value })}
                  className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white text-sm font-medium focus:outline-none focus:border-primary focus:bg-primary/5 transition-all appearance-none cursor-pointer"
                >
                  <option className="bg-[#0F172A]" value="Vendas Diretas">Quero vender mais online</option>
                  <option className="bg-[#0F172A]" value="Captação de Leads">Quero receber mais contatos (Orçamentos/Agendamentos)</option>
                  <option className="bg-[#0F172A]" value="Autoridade de Marca">Quero fortalecer minha marca profissional</option>
                </select>
              </div>
              <div className="flex flex-col gap-4">
                <label className="text-[10px] font-black text-primary/60 uppercase tracking-widest px-1">
                  [08] Como os clientes te encontram hoje?
                </label>
                <select
                  disabled={isSubmitting}
                  value={formData.trafficSource}
                  onChange={e => setFormData({ ...formData, trafficSource: e.target.value })}
                  className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white text-sm font-medium focus:outline-none focus:border-primary focus:bg-primary/5 transition-all appearance-none cursor-pointer"
                >
                  <option className="bg-[#0F172A]" value="Não definido">Não definido</option>
                  <option className="bg-[#0F172A]" value="Instagram">Instagram</option>
                  <option className="bg-[#0F172A]" value="Google Ads">Google Ads</option>
                  <option className="bg-[#0F172A]" value="Orgânico">Orgânico</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black text-primary/60 uppercase tracking-widest px-1">
                  [09] Referência Visual
                </label>
                <input
                  type="text"
                  disabled={isSubmitting}
                  className="bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-white text-sm font-medium focus:outline-none focus:border-primary focus:bg-primary/5 transition-all placeholder:text-white/10"
                  placeholder="Ex: apple.com"
                  value={formData.visualReference}
                  onChange={e => setFormData({ ...formData, visualReference: e.target.value })}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black text-primary/60 uppercase tracking-widest px-1">
                  [10] Qual seu maior desafio hoje? <span className="text-red-500/50">*</span>
                </label>
                <input
                  type="text"
                  required
                  disabled={isSubmitting}
                  className="bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-white text-sm font-medium focus:outline-none focus:border-primary focus:bg-primary/5 transition-all placeholder:text-white/10"
                  placeholder="Ex: Baixa conversão"
                  value={formData.mainProblem}
                  onChange={e => setFormData({ ...formData, mainProblem: e.target.value })}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black text-primary/60 uppercase tracking-widest px-1">
                  [11] Descrição, informações adicionais ou duvidas <span className="text-red-500/50">*</span>
                </label>
                <textarea
                  rows={3}
                  required
                  disabled={isSubmitting}
                  className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white text-sm font-medium focus:outline-none focus:border-primary focus:bg-primary/5 transition-all resize-none placeholder:text-white/10"
                  placeholder="Detalhes adicionais..."
                  value={formData.description}
                  onChange={e => setFormData({ ...formData, description: e.target.value })}
                ></textarea>
              </div>
            </div>

            <div className="mt-4 relative group/btn">
              <div className={`absolute -inset-1 bg-primary blur-lg opacity-20 transition-all ${isSubmitting ? 'animate-pulse opacity-60' : 'group-hover/btn:opacity-50'}`}></div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`relative w-full h-20 bg-primary text-white font-black tracking-[0.4em] uppercase text-xs flex items-center justify-center gap-4 transition-all shadow-2xl overflow-hidden ${isSubmitting ? 'cursor-wait' : 'hover:scale-[1.01] active:scale-95'}`}
                style={{ clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)' }}
              >
                {isSubmitting ? (
                  <>
                    <span>Transmitindo Uplink...</span>
                    <div className="animate-spin h-5 w-5 border-2 border-white/30 border-t-white rounded-full"></div>
                  </>
                ) : (
                  <>
                    <span>Solicitar Orçamento</span>
                    <span className="material-symbols-outlined">analytics</span>
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="absolute left-0 w-full h-px bg-primary/20 shadow-[0_0_10px_rgba(94,125,162,0.5)] animate-scanning opacity-30 pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;
