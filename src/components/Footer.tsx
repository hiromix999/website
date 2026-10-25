import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Mail } from 'lucide-react';
import { AwaboLogo } from './Logo';

export const Footer: React.FC = () => {
  const location = useLocation();

  const handleScrollToRegister = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const elem = document.getElementById('section-register');
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.pushState(null, '', '/#section-register');
      }
    }
  };

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8 px-4 text-center border-t border-slate-900 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left border-b border-slate-900 pb-10">
          
          {/* Column Left logo block */}
          <div className="md:col-span-5 space-y-4">
            <AwaboLogo className="h-10 w-auto" footerMode={true} />
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              阿波市ボードゲーム交流会AWABO（あわボ！）は、子どもからシニアの方まで、誰もが等しく対話と笑いを楽しめる地域交流を目指して立ち上げられたボードゲーム有志団体です。
            </p>
          </div>

          {/* Column Middle Navigation lists */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <h4 className="font-extrabold text-white tracking-widest border-l-2 border-[#0D9488] pl-2.5">コンテンツ一覧（個別ページ）</h4>
            <ul className="space-y-2.5 pl-3.5 text-slate-400">
              <li>
                <Link 
                  to="/greetings"
                  className="hover:text-white transition cursor-pointer text-left inline-block"
                >
                  ごあいさつ（立ち上げの思い）
                </Link>
              </li>
              <li>
                <Link 
                  to="/"
                  className="hover:text-white transition cursor-pointer text-left inline-block"
                >
                  開催案内（次回イベント概要）
                </Link>
              </li>
              <li>
                <Link 
                  to="/history"
                  className="hover:text-white transition cursor-pointer text-left inline-block"
                >
                  開催履歴
                </Link>
              </li>
              <li>
                <Link 
                  to="/#section-faq"
                  className="hover:text-white transition cursor-pointer text-left inline-block"
                >
                  よくある質問（Q&A）
                </Link>
              </li>
              <li>
                <Link 
                  to="/rules"
                  className="hover:text-white transition cursor-pointer text-left inline-block"
                >
                  守っていただきたいルール・注意事項
                </Link>
              </li>
              <li>
                <Link 
                  to="/#section-register"
                  onClick={handleScrollToRegister}
                  className="text-amber-400 hover:text-amber-300 font-bold transition cursor-pointer text-left inline-flex items-center gap-1"
                >
                  <span>✨ 会員登録（お知らせ配信）</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column Right specific flyers summary */}
          <div className="md:col-span-4 space-y-3 text-xs text-slate-400">
            <h4 className="font-extrabold text-white tracking-widest border-l-2 border-[#0D9488] pl-2.5">運営情報</h4>
            <p className="font-bold text-white mt-1">AWABO（あわボ！）実行委員会</p>

            <div className="space-y-1.5 mt-2">
              <p className="flex items-center gap-1.5">
                <span>お問い合わせ（メール）:</span>
                <a 
                  href="mailto:info@awa-bo.com" 
                  className="text-teal-400 hover:text-teal-300 font-bold flex items-center gap-1"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>info@awa-bo.com</span>
                </a>
              </p>

              <p className="flex items-center gap-1.5">
                <span>代表者Instagram:</span>
                <a 
                  href="https://www.instagram.com/hironanokamo/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 font-bold flex items-center gap-1"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>@hironanokamo</span>
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Low footer copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <div className="text-left space-y-0.5">
            <p>主催：AWABO（あわボ！）実行委員会</p>
          </div>
          <p className="text-[10px] text-slate-500">
            &copy; 2026 AWA BOard Game Community. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};
