import React from 'react';

const Portfolio: React.FC = () => {
    const projects = [
        {
            title: "Marcus Viana Advocacia",
            category: "Institucional",
            url: "https://marcusviana-advocacia.vercel.app/",
            color: "from-amber-700 to-yellow-900", // Gold/Law theme
            icon: "gavel"
        },
        {
            title: "Alcantara Mentoria",
            category: "Educação",
            url: "https://alcantara-mentoria.vercel.app/",
            color: "from-blue-700 to-slate-900", // Professional/Mentorship theme
            icon: "school"
        },
        {
            title: "Sophia Psicologia",
            category: "Saúde",
            url: "https://psico-sophia.vercel.app/",
            color: "from-emerald-700 to-teal-900", // Soft/Psychology theme
            icon: "psychology"
        },
        {
            title: "Hamburgueria SP",
            category: "Delivery",
            url: "https://hamburgueria-sp.vercel.app/",
            color: "from-red-700 to-orange-900", // Food/Burger theme
            icon: "restaurant"
        }
    ];

    return (
        <div id="portfolio" className="py-24 relative overflow-hidden">
            <div className="w-full max-w-[95vw] mx-auto flex flex-col gap-12">

                {/* Header */}
                <div className="flex flex-col gap-2 items-center text-center">
                    <div className="text-primary font-black tracking-[0.4em] uppercase text-[9px] mb-1">Nosso Trabalho</div>
                    <h2 className="text-white text-3xl md:text-4xl font-black tracking-tighter uppercase text-glow-primary leading-none">
                        Cases de <span className="text-primary italic">Sucesso</span>
                    </h2>
                    <p className="text-slate-400 text-lg md:text-xl max-w-[720px] font-medium leading-relaxed mt-4">
                        Explore algumas das experiências digitais que construímos.
                    </p>
                    <p className="text-slate-500 text-xs max-w-[500px] mt-2 italic border border-white/5 bg-white/5 px-4 py-2 rounded-lg">
                        * Amostras de interface desenvolvidas pela Vilela CodeLab para fins de demonstração.
                    </p>
                </div>

                {/* Notion-style Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {projects.map((project, idx) => (
                        <a
                            key={idx}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col bg-[#0F172A] border border-white/5 rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] transition-all duration-500 ease-out hover:-translate-y-2"
                        >
                            {/* Website Preview (Iframe Mockup) */}
                            <div className={`h-48 w-full bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                                {/* Iframe acting as a thumbnail */}
                                <iframe
                                    src={project.url}
                                    title={`Preview of ${project.title}`}
                                    className="w-[400%] h-[400%] absolute top-0 left-0 scale-[0.25] origin-top-left pointer-events-none opacity-90"
                                    loading="lazy"
                                    scrolling="no"
                                    tabIndex={-1}
                                    aria-hidden="true"
                                />

                                {/* Overlay for hover effect */}
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#0F172A] to-transparent"></div>
                            </div>

                            {/* Content Area */}
                            <div className="p-6 flex flex-col gap-2 relative">
                                <span className="text-primary text-[10px] uppercase font-black tracking-widest bg-primary/10 px-2 py-1 rounded w-fit border border-primary/20">
                                    {project.category}
                                </span>
                                <h3 className="text-white font-bold text-xl leading-tight group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <div className="mt-4 flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-wider group-hover:text-white transition-colors">
                                    <span>Visualizar Projeto</span>
                                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Portfolio;
