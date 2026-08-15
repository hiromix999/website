import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Heart, 
  Info, 
  History, 
  HelpCircle, 
  ShieldCheck, 
  MapPin, 
  Share2, 
  Check 
} from 'lucide-react';
import { AwaboLogo } from './Logo';

export const Header: React.FC = () => {
  const location = useLocation();
  const [copied, setCopied] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/' && !location.hash;
    }
    return location.pathname === path;
  };

  const handleCopyCurrentUrl = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 z-40 shadow-xs transition-all duration-300">
      <div className="max-w-6xl mx-auto px-2.5 xs:px-4 md:px-6 h-16 flex items-center justify-between gap-2">
        
        {/* Logo Brand Accent */}
        <div className="flex items-center gap-1.5 shrink-0">
          <AwaboLogo className="h-7 xs:h-9 md:h-10 w-auto" headerMode={true} linkToHome={true} />
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-1.5 xs:gap-2.5 md:gap-6">
          <Link
            to="/greetings"
            className={`text-[10px] xs:text-xs md:text-sm font-black transition flex items-center gap-1 cursor-pointer tracking-tight ${
              isActive('/greetings') ? 'text-[#0D9488]' : 'text-slate-600 hover:text-teal-600'
            }`}
          >
            <Heart className="w-3.5 h-3.5 text-teal-600 shrink-0" />
            <span>ごあいさつ</span>
          </Link>

          <Link
            to="/"
            className={`text-[10px] xs:text-xs md:text-sm font-black transition flex items-center gap-1 cursor-pointer tracking-tight ${
              isActive('/') ? 'text-[#0D9488]' : 'text-slate-600 hover:text-teal-600'
            }`}
          >
            <Info className="w-3.5 h-3.5 text-teal-600 shrink-0" />
            <span>開催案内</span>
          </Link>

          <Link
            to="/history"
            className={`text-[10px] xs:text-xs md:text-sm font-black transition flex items-center gap-1 cursor-pointer tracking-tight ${
              isActive('/history') ? 'text-[#0D9488]' : 'text-slate-600 hover:text-teal-600'
            }`}
          >
            <History className="w-3.5 h-3.5 text-teal-600 shrink-0" />
            <span>開催履歴</span>
          </Link>

          <Link
            to="/#section-faq"
            className={`text-[10px] xs:text-xs md:text-sm font-black transition flex items-center gap-1 cursor-pointer tracking-tight text-slate-600 hover:text-teal-600`}
          >
            <HelpCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
            <span>よくある質問</span>
          </Link>

          <Link
            to="/rules"
            className={`text-[10px] xs:text-xs md:text-sm font-black transition flex items-center gap-1 cursor-pointer tracking-tight ${
              isActive('/rules') ? 'text-[#0D9488]' : 'text-slate-600 hover:text-teal-600'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-teal-600 shrink-0" />
            <span>注意事項</span>
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Share / Copy URL button */}
          <button
            onClick={handleCopyCurrentUrl}
            title="このページのURLをコピー"
            className="flex items-center gap-1 bg-slate-100 hover:bg-teal-50 text-slate-700 hover:text-[#0D9488] border border-slate-200/80 font-bold text-xs px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl transition cursor-pointer shrink-0"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-teal-600" />
                <span className="hidden sm:inline text-[11px] text-teal-700">コピー完了</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline text-[11px]">URLを共有</span>
              </>
            )}
          </button>

          {/* Access Link */}
          <Link
            to="/#section-access"
            className="hidden lg:flex items-center gap-1.5 bg-[#0D9488] hover:bg-[#0D9488]/90 text-white font-extrabold text-xs px-4 py-2.5 rounded-xl shadow-xs transition duration-300 cursor-pointer shrink-0"
          >
            <MapPin className="w-4 h-4" />
            <span>会場アクセス</span>
          </Link>
        </div>

      </div>
    </header>
  );
};
