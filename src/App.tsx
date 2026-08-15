import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { InfoPage } from './components/InfoPage';
import { GreetingsPage } from './components/GreetingsPage';
import { RulesPage } from './components/RulesPage';
import { HistoryPage } from './components/HistoryPage';
import { ScrollToTop } from './components/ScrollToTop';

// Helper component to redirect paths with hash anchors (e.g. /access -> /#section-access)
function RedirectWithHash({ hash }: { hash: string }) {
  return <Navigate to={`/${hash}`} replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#FFFDF9] bg-grid-pattern text-slate-800 font-sans selection:bg-teal-200 selection:text-teal-900 overflow-x-hidden relative flex flex-col justify-between">
        
        {/* GLOWING ORBS BACKGROUND (Apple-style ambient glow) */}
        <div className="absolute top-[10%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-tr from-amber-200/20 to-orange-300/10 blur-[100px] pointer-events-none select-none z-0" />
        <div className="absolute top-[40%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#0D9488]/10 to-indigo-300/10 blur-[120px] pointer-events-none select-none z-0" />
        <div className="absolute bottom-[10%] left-[5%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-tr from-rose-200/10 to-amber-200/10 blur-[100px] pointer-events-none select-none z-0" />

        {/* TOP DECORATIVE FESTIVAL GARLAND */}
        <div className="w-full flex justify-between overflow-hidden h-4 md:h-5 select-none pointer-events-none opacity-85 relative z-40">
          {[...Array(32)].map((_, i) => {
            const colors = [
              'border-t-rose-500', 
              'border-t-amber-400', 
              'border-t-indigo-500', 
              'border-t-emerald-500', 
              'border-t-teal-500', 
              'border-t-orange-500'
            ];
            const colorClass = colors[i % colors.length];
            return (
              <div 
                key={i} 
                className={`w-0 h-0 border-l-[12px] md:border-l-[18px] border-l-transparent border-r-[12px] md:border-r-[18px] border-r-transparent border-t-[16px] md:border-t-[24px] ${colorClass} mx-[-2px]`} 
              />
            );
          })}
        </div>

        {/* SITE NAVIGATION HEADER */}
        <Header />

        {/* MAIN ROUTE CONTENT */}
        <main className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12 relative z-10 flex-1 w-full">
          <Routes>
            {/* Top / Main Event Page */}
            <Route path="/" element={<InfoPage />} />
            
            {/* Direct URL paths for distinct subpages */}
            <Route path="/greetings" element={<GreetingsPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/rules" element={<RulesPage />} />

            {/* Aliases & Anchor Deep-links */}
            <Route path="/info" element={<Navigate to="/" replace />} />
            <Route path="/event" element={<Navigate to="/" replace />} />
            <Route path="/access" element={<RedirectWithHash hash="#section-access" />} />
            <Route path="/faq" element={<RedirectWithHash hash="#section-faq" />} />
            <Route path="/qa" element={<RedirectWithHash hash="#section-faq" />} />

            {/* Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* SITE FOOTER */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}
