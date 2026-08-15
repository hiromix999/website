import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const MeepleIcon = ({ className = "w-6 h-6", color = "currentColor" }: { className?: string; color?: string }) => (
  <svg className={className} viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M50 5C58.2843 5 65 11.7157 65 20C65 28.2843 58.2843 35 50 35C41.7157 35 35 28.2843 35 20C35 11.7157 41.7157 5 50 5ZM31.1716 43.1716C33.0469 41.2963 35.5902 40.2426 38.2426 40.2426H61.7574C64.4098 40.2426 66.9531 41.2963 68.8284 43.1716L93.1421 67.4853C96.2663 70.6095 96.2663 75.6748 93.1421 78.799C90.0179 81.9232 84.9526 81.9232 81.8284 78.799L73.5 70.4706V105C73.5 109.418 69.9183 113 65.5 113C61.0817 113 57.5 109.418 57.5 105V85H42.5V105C42.5 109.418 38.9183 113 34.5 113C30.0817 113 26.5 109.418 26.5 105V70.4706L18.1716 78.799C15.0474 81.9232 9.98207 81.9232 6.85787 78.799C3.73368 75.6748 3.73368 70.6095 6.85787 67.4853L31.1716 43.1716Z" 
      fill={color} 
    />
  </svg>
);

export const AwaboLogo = ({ className = "h-16", headerMode = false, footerMode = false, linkToHome = false }: { className?: string; headerMode?: boolean; footerMode?: boolean; linkToHome?: boolean }) => {
  const [hasError, setHasError] = useState(false);

  const logoContent = (() => {
    if (hasError) {
      if (headerMode || footerMode) {
        return (
          <div className="flex items-center select-none font-black text-xl md:text-2xl tracking-wider text-[#134E5E]">
            AWA<span className="text-[#D35400]">BO</span>
          </div>
        );
      }
      return (
        <div className="flex flex-col items-center justify-center select-none py-3 px-5 bg-white/50 backdrop-blur-md rounded-3xl border border-slate-200/50 shadow-md max-w-[280px] md:max-w-xs mx-auto">
          <div className="flex items-end justify-center relative">
            <span className="text-[#134E5E] font-black text-3.5xl md:text-4.5xl tracking-tight leading-none">AW</span>
            <div className="mx-1.5 mb-1 scale-110 relative">
              <MeepleIcon className="w-7 h-7 text-[#134E5E]" />
            </div>
            <span className="text-[#D35400] font-black text-3.5xl md:text-4.5xl tracking-tight leading-none">BO</span>
          </div>
          <div className="w-full h-[2px] bg-slate-800 rounded-full mt-2 mb-1" />
          <div className="text-[9px] md:text-[10px] text-slate-700 font-bold tracking-wider">阿波市ボードゲーム交流会</div>
        </div>
      );
    }

    const logoSrc = footerMode ? "/images/awabo_logo.png" : "/images/awabo_logo_touka.png";

    return (
      <img
        src={logoSrc}
        alt="AWABO Logo"
        className={`${className} object-contain`}
        onLoad={(e) => {
          if (e.currentTarget.naturalWidth === 0) {
            setHasError(true);
          }
        }}
        onError={() => setHasError(true)}
        referrerPolicy="no-referrer"
      />
    );
  })();

  if (linkToHome) {
    return (
      <Link 
        to="/" 
        className="inline-block hover:opacity-90 transition duration-300 cursor-pointer"
      >
        {logoContent}
      </Link>
    );
  }

  return (
    <a 
      href="http://awa-bo.com/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="inline-block hover:opacity-90 transition duration-300 cursor-pointer"
    >
      {logoContent}
    </a>
  );
};
