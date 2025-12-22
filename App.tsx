import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Pricing from './components/Pricing';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import QuoteForm from './components/QuoteForm';



export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'home' | 'quote'>('home');


  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.05 });

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [currentScreen]);

  const handleNavigate = (screen: 'home' | 'quote', sectionId?: string) => {
    setCurrentScreen(screen);

    if (screen === 'home') {
      setTimeout(() => {
        if (sectionId) {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-transparent font-display text-white overflow-x-hidden antialiased selection:bg-primary selection:text-white min-h-screen flex flex-col">
      <div className="layout-container flex h-full grow flex-col w-full">
        <Navbar onNavigate={handleNavigate} />

        <main className="flex flex-1 justify-center py-5 w-full">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1 w-full">
            {currentScreen === 'home' ? (
              <>
                <Hero
                  onExploreClick={() => handleNavigate('home', 'pricing')}
                />
                <Services />
                <Process />
                <Pricing onQuoteRequest={() => handleNavigate('quote')} />
                <CtaSection onNavigate={() => handleNavigate('quote')} />
              </>
            ) : (
              <QuoteForm onBack={() => handleNavigate('home')} />
            )}
            <Footer />
          </div>
        </main>
      </div>


    </div>
  );
}