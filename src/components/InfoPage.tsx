import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { db, doc, onSnapshot, setDoc, increment } from '../lib/firebase';
import { 
  Calendar, 
  MapPin, 
  Coins, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Share2, 
  Sparkles,
  Info,
  Clock,
  Compass,
  Smile,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
  X,
  Instagram,
  Layers
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AwaboLogo, MeepleIcon } from './Logo';

export const InfoPage: React.FC = () => {
  useEffect(() => {
    document.title = '阿波市ボードゲーム交流会「AWABO（あわボ！）」公式サイト';
  }, []);

  // FAQ Accordion states
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);

  // Interested count state ("行こうかな")
  const [interestedCount, setInterestedCount] = useState<number>(() => {
    const saved = localStorage.getItem('awabo_interested_count');
    return saved ? parseInt(saved, 10) : 6;
  });
  const [hasInterested, setHasInterested] = useState<boolean>(() => {
    return localStorage.getItem('awabo_has_interested') === 'true';
  });

  // Share Notification Alert
  const [showShareAlert, setShowShareAlert] = useState(false);
  const [shareAlertText, setShareAlertText] = useState('');

  // Real-time Firestore synchronization for "行こうかな" (interested count)
  useEffect(() => {
    const statsRef = doc(db, 'stats', 'interested');
    const unsubscribe = onSnapshot(
      statsRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.data();
          if (typeof data.count === 'number') {
            setInterestedCount(data.count);
            localStorage.setItem('awabo_interested_count', String(data.count));
          }
        } else {
          setDoc(statsRef, { count: 6 }).catch((err) =>
            console.error('Firestore init error:', err)
          );
        }
      },
      (error) => {
        console.error('Firestore onSnapshot error for interested count:', error);
      }
    );
    return () => unsubscribe();
  }, []);

  const handleToggleInterested = async () => {
    const statsRef = doc(db, 'stats', 'interested');

    if (!hasInterested) {
      // 登録処理 (+1)
      setHasInterested(true);
      setInterestedCount((prev) => prev + 1);
      localStorage.setItem('awabo_has_interested', 'true');

      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
      });

      try {
        await setDoc(statsRef, { count: increment(1) }, { merge: true });
      } catch (err) {
        console.error('Failed to update interested count in Firestore:', err);
      }
    } else {
      // 取消処理 (-1)
      setHasInterested(false);
      setInterestedCount((prev) => Math.max(0, prev - 1));
      localStorage.removeItem('awabo_has_interested');

      try {
        await setDoc(statsRef, { count: increment(-1) }, { merge: true });
      } catch (err) {
        console.error('Failed to decrement interested count in Firestore:', err);
      }
    }
  };

  const triggerCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setShareAlertText("公式ホームページのURLをクリップボードにコピーしました！");
    setShowShareAlert(true);
    setTimeout(() => setShowShareAlert(false), 3000);
  };

  const handleShareSNS = (platform: 'x' | 'line' | 'facebook') => {
    const title = 'ボードゲーム交流会「AWABO（あわボ！）」公式サイト';
    const text = 'みんなで遊ぼう！無料のボードゲーム交流会「AWABO（あわボ！）」9月20日(日)開催！初心者・手ぶら参加大歓迎！';
    const url = window.location.href;

    let shareUrl = '';
    if (platform === 'x') {
      shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    } else if (platform === 'line') {
      shareUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    } else if (platform === 'facebook') {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    }

    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('AWABO（あわボ！）第2回ボードゲーム交流会')}&dates=20260920T040000Z/20260920T083000Z&details=${encodeURIComponent('【AWABO（あわボ！）第2回ボードゲーム交流会】\n子どもから大人・シニア・お一人様までどなたでもご参加いただけます！\n参加費無料・手ぶらOK・途中入退室自由です。\n\n会場：阿波市立市場図書館\n住所：徳島県阿波市市場町市場上野段212-2')}&location=${encodeURIComponent('阿波市立市場図書館（徳島県阿波市市場町市場上野段212-2）')}`;

  const faqData = [
    {
      q: 'ボードゲーム初心者ですが大丈夫ですか？',
      a: 'もちろん大歓迎です！スタッフがやさしく丁寧に一からルールを説明いたします。初めて遊ぶのにおすすめの、すぐに覚えられる簡単なゲームもたくさん用意していますので安心してご来場ください。'
    },
    {
      q: '参加するのにお金はかかりますか？',
      a: '参加費は【無料】です。有志で行っている地域交流活動ですので、どなたでも一切費用をかけずに楽しく遊んでいただけます。'
    },
    {
      q: '持ち物は何か必要ですか？手ぶらでいいですか？',
      a: '手ぶらで来ていただいて全く問題ありません！会場に数多くのゲームを取り揃えております。もしご自身のお気に入りのボードゲームがあれば、持ち込みも大歓迎ですのでぜひお持ち寄りください。'
    },
    {
      q: '1人で参加しても、大人だけでも楽しめますか？友達と一緒でも大丈夫？',
      a: 'お一人での参加、大人の方のみのご参加、お友達やご家族と一緒の参加もすべて大歓迎です！お一人や大人だけで来られた場合でも、スタッフがすぐに混ざって遊びやすい卓へスムーズにご案内いたします。大人同士でじっくり楽しめる戦略ゲームから、みんなでワイワイ盛り上がれるパーティーゲームまで幅広くご用意していますので安心してお越しください。'
    },
    {
      q: '遅刻しての途中参加や、途中で帰ることはできますか？',
      a: '開催時間中でしたら、いつ来て、いつ帰っても大丈夫です。ただし、プレイ中のゲームを抜けると他のプレイヤーに影響することがあるため、ゲームが一区切りついた段階で退出いただけますと幸いです。'
    },
    {
      q: '事前予約は必要ですか？',
      a: '不要です！誰でも手ぶらでふらっとお越しいただき、その場でゲームを始めていただけます。当日そのままお気軽にお越しください！'
    },
    {
      q: '年齢制限はありますか？子供と一緒に参加できますか？',
      a: '子供からシニアの方まで、どなたでも参加いただけます！小学生以下の小さなお子様の場合は、ルール理解や安全を考慮し、必ず保護者の方の同伴をお願いしております。'
    },
    {
      q: '図書館だけど騒いでも大丈夫？',
      a: '図書館のイベントルームなので、騒いでも大丈夫です！'
    }
  ];

  return (
    <div className="space-y-16">
      {/* FLOATING ACTION NOTIFICATION TOAST */}
      <AnimatePresence>
        {showShareAlert && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="fixed bottom-6 right-6 left-6 md:left-auto md:w-96 bg-slate-900/95 backdrop-blur-xl text-white px-5 py-4 rounded-2xl shadow-2xl border border-white/10 flex items-center gap-3.5 z-50 text-sm"
          >
            <div className="bg-teal-500/20 p-1.5 rounded-full text-teal-400 shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold">お知らせ</p>
              <p className="text-xs text-slate-300 truncate mt-0.5">{shareAlertText}</p>
            </div>
            <button onClick={() => setShowShareAlert(false)} className="text-slate-400 hover:text-white transition cursor-pointer">
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section className="relative pt-6 pb-12 md:pt-10 md:pb-20 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 md:px-6 space-y-16 text-center flex flex-col items-center justify-center">
          
          {/* Hero Left Content */}
          <div className="w-full text-center space-y-6 flex flex-col items-center justify-center">
            
            {/* AWABO Logo */}
            <div className="mb-2">
              <AwaboLogo className="h-24 md:h-32 lg:h-36 w-auto" />
            </div>
            
            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-800 border border-amber-300/40 text-xs font-black px-4 py-1.5 rounded-full shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>＼ 参加費無料・手ぶらOK！ ／</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              徳島でみんなで遊ぼう！
              <span className="block mt-2 bg-gradient-to-r from-orange-600 via-rose-500 to-[#0D9488] bg-clip-text text-transparent font-black relative">
                阿波市ボードゲーム交流会
                <span className="block text-2xl md:text-3.5xl lg:text-4xl text-[#0D9488] mt-1 font-bold">
                  「AWABO（あわボ！）」公式サイト
                </span>
              </span>
            </h1>

            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
              「AWABO（あわボ！）」は、子どもからシニアまで、初めての方からボードゲームファンまで、誰もが温かくつながれる地域交流を目指しています。
            </p>

            {/* Apple style Highlights list */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-3xl mx-auto pt-2 w-full">
              <div className="flex items-center gap-3 bg-white/50 backdrop-blur-sm border border-slate-200/60 p-3.5 rounded-2xl shadow-sm text-left">
                <div className="w-8.5 h-8.5 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                  <Smile className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="font-extrabold text-slate-900 text-xs sm:text-xs md:text-sm">ルールがわからなくても安心</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/50 backdrop-blur-sm border border-slate-200/60 p-3.5 rounded-2xl shadow-sm text-left">
                <div className="w-8.5 h-8.5 rounded-full bg-teal-100 text-[#0D9488] flex items-center justify-center shrink-0">
                  <Compass className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="font-extrabold text-slate-900 text-xs sm:text-xs md:text-sm">手ぶら・途中入退室OK</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/50 backdrop-blur-sm border border-slate-200/60 p-3.5 rounded-2xl shadow-sm text-left">
                <div className="w-8.5 h-8.5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                  <Coins className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="font-extrabold text-slate-900 text-xs sm:text-xs md:text-sm">参加費用は一切なし</p>
                </div>
              </div>
            </div>

          </div>

          {/* Hero Bottom: Console & Details card */}
          <div className="w-full max-w-xl relative mx-auto">
            
            <div className="absolute top-[-10px] right-[-10px] text-5xl select-none opacity-25 animate-float">🎲</div>
            <div className="absolute bottom-[-10px] left-[-15px] text-4xl select-none opacity-20 animate-float-slow">🃏</div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="glass-panel border-white/60 shadow-xl rounded-3.5xl p-6 md:p-8 relative overflow-hidden bg-white/80"
            >
              
              <div className="absolute top-0 right-0 bg-[#EAB308] text-slate-950 font-bold px-4 py-1.5 text-xs rounded-bl-2xl tracking-wider shadow">
                次回開催情報
              </div>

              <div className="text-left space-y-5">
                <div className="space-y-1">
                  <span className="text-[10px] font-extrabold uppercase text-[#0D9488] tracking-widest block">AWA BOARDGAME MEETUP</span>
                  <h3 className="text-2xl font-black text-slate-900">AWABO（あわボ！）第2回交流会</h3>
                  <p className="text-[11px] font-black text-[#0D9488] flex items-center gap-1 mt-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>秋の連休にピッタリ！親子・大人・お一人様も大歓迎の室内イベント</span>
                  </p>
                </div>

                {/* Event core specifics */}
                <div className="space-y-3 bg-white/60 border border-slate-200/50 p-4 rounded-2xl shadow-inner">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-rose-500 shrink-0" />
                      <div>
                        <p className="text-[10px] text-slate-400 leading-none">開催日程</p>
                        <p className="font-extrabold text-slate-800 text-xs md:text-sm mt-0.5">2026年 9月20日(日)</p>
                      </div>
                    </div>
                    <a
                      href={googleCalendarUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-[11px] px-3 py-1.5 rounded-xl shadow-sm hover:shadow transition-all shrink-0 cursor-pointer"
                      title="Googleカレンダーに予定を追加"
                    >
                      <Calendar className="w-3.5 h-3.5 text-white" />
                      <span>カレンダーに追加</span>
                      <ExternalLink className="w-3 h-3 text-blue-200" />
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-teal-600 shrink-0" />
                    <div>
                      <p className="text-[10px] text-slate-400 leading-none">時間</p>
                      <p className="font-extrabold text-slate-800 text-xs md:text-sm mt-0.5">13:00 〜 17:30</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-emerald-600 shrink-0" />
                    <div>
                      <p className="text-[10px] text-slate-400 leading-none">会場場所</p>
                      <p className="font-extrabold text-slate-800 text-xs md:text-sm mt-0.5">阿波市立市場図書館</p>
                    </div>
                  </div>

                  {/* 行こうかな Quick Button */}
                  <div className="pt-3 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <button
                      onClick={handleToggleInterested}
                      title={hasInterested ? 'クリックで登録を取り消せます' : 'クリックして参加の気持ちを表明'}
                      className={`w-full sm:w-auto px-4 py-2 rounded-xl font-extrabold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-95 ${
                        hasInterested
                          ? 'bg-amber-100 hover:bg-amber-200 text-amber-950 border border-amber-300 ring-2 ring-amber-400/50'
                          : 'bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-slate-900 shadow-amber-500/20'
                      }`}
                    >
                      {hasInterested ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
                          <span>行こうかな！ (登録中・タップで取消)</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4 text-slate-900 shrink-0" />
                          <span>行こうかな！</span>
                        </>
                      )}
                    </button>
                    <p className="text-xs font-bold text-slate-700 text-center sm:text-right">
                      「行こうかな」と思っている人が <span className="text-amber-600 font-black text-sm px-1.5 py-0.5 bg-amber-100/80 rounded-md border border-amber-300/50">{interestedCount}</span> 組います
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* QUICK SCROLL BAR */}
      <div className="sticky top-16 bg-white/85 backdrop-blur-md border-y border-slate-200/50 z-30 shadow-xs no-print">
        <div className="max-w-6xl mx-auto px-1.5 xs:px-3 md:px-6 flex items-center justify-center gap-1 xs:gap-2.5 md:gap-3 py-2 no-print">
          
          <button 
            onClick={() => {
              document.getElementById('section-info')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="px-3 py-1.5 rounded-lg text-[10px] xs:text-xs md:text-sm font-black shrink-0 transition-all flex items-center gap-1 bg-[#0D9488] text-white shadow-xs cursor-pointer"
          >
            <Info className="w-3.5 h-3.5 shrink-0" />
            <span>開催案内</span>
          </button>

          <button 
            onClick={() => {
              document.getElementById('section-access')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="px-3 py-1.5 rounded-lg text-[10px] xs:text-xs md:text-sm font-black shrink-0 transition-all flex items-center gap-1 text-slate-600 hover:bg-slate-100 cursor-pointer"
          >
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span>会場アクセス</span>
          </button>

          <button 
            onClick={() => {
              document.getElementById('section-faq')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="px-3 py-1.5 rounded-lg text-[10px] xs:text-xs md:text-sm font-black shrink-0 transition-all flex items-center gap-1 text-slate-600 hover:bg-slate-100 cursor-pointer"
          >
            <HelpCircle className="w-3.5 h-3.5 shrink-0" />
            <span>Ｑ＆Ａ</span>
          </button>
        </div>
      </div>

      {/* SECTION 1: DETAILED CONTENT */}
      <section id="section-info" className="scroll-mt-28">
        <div className="max-w-3xl mx-auto space-y-8">
          
          <div className="space-y-6">
            
            <div className="glass-panel rounded-3.5xl p-6 md:p-8 text-left space-y-6 bg-white/70">
              
              <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100">
                <div className="p-2 bg-teal-500/15 text-[#0D9488] rounded-xl">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-black text-slate-900">開催内容</h2>
                </div>
              </div>

              <p className="text-xs md:text-sm text-slate-600 font-semibold leading-relaxed bg-teal-50/50 p-4 rounded-2xl border border-teal-100/40">
                第2回となる今回は、場所を変更して、<span className="font-black text-slate-900 bg-amber-200/90 px-2 py-0.5 rounded-md border border-amber-300/80 shadow-xs inline-block my-0.5">阿波市立市場図書館</span> にて開催いたします！時間も開始が30分早まり、終了も30分延びて、<span className="font-black text-[#0D9488] bg-teal-100/90 px-2 py-0.5 rounded-md border border-teal-200/80 shadow-xs inline-block my-0.5">合計1時間延長</span> で開催します！<br className="hidden sm:inline" />
                秋の連休にぴったりな室内イベントとして、子どもから大人・シニア・お一人様までどなたでもご参加いただけます。<br className="hidden sm:inline" />
                たくさんの世界のボードゲームを体験していただけます。参加費無料・手ぶらOK、途中入退室も自由ですので、ぜひお気軽にお越しください。
              </p>

              {/* 行こうかな Interactive Banner */}
              <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-teal-50 border border-amber-200/80 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
                <div className="flex items-center gap-3 text-left">
                  <div className="w-10 h-10 rounded-2xl bg-amber-400/20 flex items-center justify-center text-xl shrink-0 shadow-inner">
                    🙋‍♂️
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-500 font-bold">気軽に参加の気持ちを表明！</p>
                    <p className="text-sm md:text-base font-black text-slate-800">
                      「行こうかな」と思っている人が <span className="text-amber-600 text-lg font-black underline decoration-amber-400 decoration-2 underline-offset-2 mx-0.5">{interestedCount}</span> 組います
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleToggleInterested}
                  title={hasInterested ? 'クリックで登録を取り消せます' : 'クリックして参加の気持ちを表明'}
                  className={`w-full sm:w-auto px-5 py-2.5 rounded-xl font-extrabold text-xs md:text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-sm cursor-pointer active:scale-95 shrink-0 ${
                    hasInterested
                      ? 'bg-amber-100 hover:bg-amber-200 text-amber-950 border border-amber-300 ring-2 ring-amber-400/50'
                      : 'bg-gradient-to-r from-amber-400 via-amber-500 to-orange-400 text-slate-900 hover:brightness-105 shadow-orange-500/10'
                  }`}
                >
                  {hasInterested ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
                      <span>行こうかな！ (登録中・タップで取消)</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-slate-900 shrink-0" />
                      <span>「行こうかなボタン」を押してみる</span>
                    </>
                  )}
                </button>
              </div>

              {/* 2-Column Grid for Table entries and Flyer Status */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                
                {/* Left Column (Table entries) */}
                <div className="md:col-span-7 space-y-5">
                  
                  {/* Item 1 */}
                  <div className="flex items-start gap-4">
                    <div className="bg-[#EAB308]/20 text-[#854D0E] font-black text-xs px-3 py-1 rounded-lg shrink-0 mt-0.5 w-16 text-center">
                      日時
                    </div>
                    <div className="space-y-2">
                      <div>
                        <p className="font-extrabold text-slate-900 text-base md:text-lg">
                          9月20日(日) 13:00 〜 17:30
                        </p>
                        <p className="text-slate-500 text-xs leading-relaxed mt-0.5">
                          ※途中参加、途中退室も自由です。
                        </p>
                      </div>
                      <a
                        href={googleCalendarUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold text-xs px-3.5 py-2 rounded-xl shadow-xs transition-all group cursor-pointer"
                      >
                        <Calendar className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                        <span>Googleカレンダーに追加</span>
                        <ExternalLink className="w-3.5 h-3.5 text-blue-200" />
                      </a>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-500/20 text-emerald-800 font-black text-xs px-3 py-1 rounded-lg shrink-0 mt-0.5 w-16 text-center">
                      会場名
                    </div>
                    <div className="space-y-1">
                      <p className="font-extrabold text-slate-900 text-base">
                        阿波市立市場図書館
                      </p>
                      <p className="text-slate-600 text-sm">
                        徳島県阿波市市場町市場上野段212-2
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        <span className="text-[10px] bg-slate-100 text-slate-600 border border-slate-200 font-bold px-2.5 py-0.5 rounded-full">
                          🚗 駐車場あり（無料）
                        </span>
                        <span className="text-[10px] bg-teal-50 text-teal-700 border border-teal-200 font-bold px-2.5 py-0.5 rounded-full">
                          📚 館内エアコン完備
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="flex items-start gap-4">
                    <div className="bg-rose-500/20 text-rose-800 font-black text-xs px-3 py-1 rounded-lg shrink-0 mt-0.5 w-16 text-center">
                      参加費
                    </div>
                    <div>
                      <p className="font-black text-rose-600 text-lg flex items-center gap-1.5">
                        無料 
                      </p>
                    </div>
                  </div>

                  {/* Item 4 */}
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500/20 text-blue-800 font-black text-xs px-3 py-1 rounded-lg shrink-0 mt-0.5 w-16 text-center">
                      持ち物
                    </div>
                    <div>
                      <p className="font-extrabold text-slate-900 text-sm">手ぶらでOK！持ち込みも歓迎です！</p>
                      <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">
                        会場に定番・パーティーゲームを多数用意しています。他の方に遊んでもらいたいお気に入りボードゲームの持ち寄りも大歓迎！
                      </p>
                    </div>
                  </div>

                </div>

                {/* Right Column (Flyer Status Notice) */}
                <div className="md:col-span-5 space-y-3 flex flex-col items-center border-t border-slate-100 md:border-t-0 pt-5 md:pt-0">
                  <p className="text-slate-500 text-xs font-black self-start md:self-center">イベントチラシ</p>
                  <div className="bg-gradient-to-br from-teal-50/80 to-amber-50/80 border border-teal-200/80 rounded-2.5xl p-5 text-center shadow-xs w-full max-w-[240px] space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-teal-100 text-[#0D9488] flex items-center justify-center mx-auto shadow-inner">
                      <Layers className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <span className="bg-amber-500/20 text-amber-800 text-[10px] font-black px-2.5 py-0.5 rounded-full">第2回チラシ作成中</span>
                      <p className="font-black text-slate-900 text-sm pt-0.5">完成次第、公開いたします！</p>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                      9月20日開催（第2回）の公式チラシは制作中です。出来上がり次第、こちらのWebサイトに掲載いたします。
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Recommended box */}
            <div className="bg-amber-50/60 border border-amber-200/60 rounded-3xl p-6 text-left relative overflow-hidden shadow-xs">
              <div className="absolute right-4 bottom-[-20px] opacity-15 pointer-events-none select-none">
                <MeepleIcon className="w-28 h-28 text-amber-500" />
              </div>
              <h3 className="font-black text-slate-900 text-base mb-3 flex items-center gap-1.5">
                <Smile className="w-5 h-5 text-amber-600" />
                <span>参加する方へのお約束</span>
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed max-w-xl">
                誰もが安心して楽しめるよう、AWABO（あわボ！）では「負けても怒らない」「ゲームを優しく扱う」などの思いやりマナーを大切にしています。勝ち負けよりも、みんなでおしゃべりしながら笑い合う時間そのものを楽しみましょう！
              </p>
            </div>

          </div>

          {/* Organizer / Contact widget */}
          <div className="space-y-6 text-left">
            <div className="bg-slate-900 text-white rounded-3.5xl p-6 relative overflow-hidden shadow-xl">
              <div className="absolute top-[-20px] right-[-20px] opacity-10 pointer-events-none select-none">
                <MeepleIcon className="w-32 h-32 text-white" />
              </div>

              <div className="space-y-4">
                <div className="inline-block bg-[#EAB308] text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded-md tracking-wider">
                  お問い合わせ
                </div>

                <div className="space-y-0.5">
                  <h3 className="text-xl font-black flex items-center gap-2">
                    <span>AWABO（あわボ！）実行委員会</span>
                  </h3>
                </div>

                <p className="text-slate-300 text-xs leading-relaxed">
                  「開催内容、その他ご不明な点などがあれば、お気軽に代表のInstagramのDMよりお声がけください！」
                </p>

                {/* Instagram action */}
                <div className="space-y-2">
                  <a 
                    href="https://www.instagram.com/hironanokamo/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:opacity-95 text-white font-extrabold text-xs md:text-sm py-3 px-4 rounded-2xl flex items-center justify-center gap-2 transition duration-300 shadow-md group"
                  >
                    <Instagram className="w-4.5 h-4.5 shrink-0 group-hover:scale-110 transition" />
                    <span>代表Instagram (DMで受付中)</span>
                  </a>
                  <p className="text-[10px] text-slate-400 text-center">
                    ※会場への直接のお問い合わせはご遠慮ください。
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: ACCESS & GOOGLE MAP */}
      <section id="section-access" className="scroll-mt-28">
        <div className="glass-panel rounded-3.5xl p-6 md:p-8 shadow-xs bg-white/70">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Maps text Left */}
            <div className="lg:col-span-5 text-left space-y-4">
              <div className="inline-block bg-emerald-500/10 text-emerald-800 border border-emerald-300/30 text-xs font-black px-3 py-1 rounded-full">
                会場へのアクセス
              </div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">阿波市立市場図書館（会場）</h3>

              <div className="space-y-3.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <div className="space-y-0.5">
                  <p className="font-extrabold text-slate-800 flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-[#0D9488]" />
                    <span>📍 住所・所在地</span>
                  </p>
                  <p className="pl-5 text-slate-500 font-medium">徳島県阿波市市場町市場上野段212-2</p>
                </div>

                <div className="space-y-0.5">
                  <p className="font-extrabold text-slate-800 flex items-center gap-1">
                    <span>🚗 お車でのアクセス</span>
                  </p>
                  <p className="pl-5 text-slate-500 leading-normal">
                    阿波市立市場図書館内にて開催いたします。敷地内に無料の駐車場が広く完備されていますので安心してお車でお越しください。
                  </p>
                </div>

              </div>

              {/* Map quick external buttons */}
              <div className="pt-4 flex flex-wrap gap-2">
                <a 
                  href="https://maps.app.goo.gl/jG2p5g3RWGjAo2eJ8?g_st=ac" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-white border border-slate-200 hover:border-slate-400 text-slate-700 font-extrabold text-xs px-3.5 py-2 rounded-xl transition shadow-xs"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#0D9488]" />
                  <span>Google Map で開く</span>
                </a>
              </div>

            </div>

            {/* Map embed iframe Right */}
            <div className="lg:col-span-7 h-80 md:h-[380px] rounded-3xl overflow-hidden border-2 border-slate-200 shadow-inner relative bg-slate-50 shrink-0">
              <iframe 
                src={`https://maps.google.com/maps?q=${encodeURIComponent('徳島県阿波市市場町市場上野段212-2 阿波市立市場図書館')}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="阿波市立市場図書館のGoogleマップ案内"
                className="absolute inset-0 w-full h-full"
              />
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: FAQ ACCORDION */}
      <section id="section-faq" className="scroll-mt-28 max-w-4xl mx-auto">
        <div className="text-center space-y-3 mb-8">
          <span className="text-xs font-extrabold bg-[#EAB308]/10 text-[#854D0E] border border-[#EAB308]/20 px-3 py-1 rounded-full">
            Q＆A・よくある質問
          </span>
          <p className="text-slate-500 text-sm">
            参加にあたって皆様から寄せられる代表的なご不安、ご質問をまとめました。
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-3.5xl p-5 md:p-8 text-left space-y-4 shadow-sm">
          {faqData.map((faq, index) => {
            const isOpen = openFaqs.includes(index);
            return (
              <div 
                key={index} 
                className="border-b border-slate-100 pb-4 last:border-b-0 last:pb-0"
              >
                <button 
                  onClick={() => {
                    if (openFaqs.includes(index)) {
                      setOpenFaqs(openFaqs.filter(i => i !== index));
                    } else {
                      setOpenFaqs([...openFaqs, index]);
                    }
                  }}
                  className="w-full flex items-center justify-between gap-4 font-bold text-slate-900 py-3.5 text-sm md:text-base text-left group cursor-pointer"
                >
                  <span className="group-hover:text-[#0D9488] transition flex items-center gap-3 font-extrabold">
                    <HelpCircle className="w-5 h-5 text-[#0D9488] shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-slate-600 text-xs md:text-sm pl-8 py-3 leading-relaxed bg-[#FFFDF9] border border-slate-100 rounded-2xl p-4 mt-1 font-medium">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 4: SOCIAL SHARING */}
      <section className="scroll-mt-28 no-print max-w-2xl mx-auto w-full">
        <div className="bg-slate-50 border border-slate-200/50 rounded-2xl p-4 text-center shadow-xs">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <span className="text-sm font-black text-slate-800 flex items-center gap-1.5 shrink-0">
              <Share2 className="w-4 h-4 text-[#0D9488]" />
              <span>シェア</span>
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2">
              
              {/* X Twitter */}
              <button 
                onClick={() => handleShareSNS('x')}
                className="bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs py-2 px-3.5 rounded-xl flex items-center justify-center gap-1.5 transition duration-300 shadow-xs cursor-pointer"
              >
                <span className="font-black text-xs">𝕏</span>
                <span>X</span>
              </button>

              {/* LINE */}
              <button 
                onClick={() => handleShareSNS('line')}
                className="bg-[#06C755] hover:bg-[#05b14c] font-extrabold text-xs py-2 px-3.5 rounded-xl flex items-center justify-center gap-1.5 transition duration-300 shadow-xs text-white cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 text-white" />
                <span>LINE</span>
              </button>

              {/* Facebook */}
              <button 
                onClick={() => handleShareSNS('facebook')}
                className="bg-[#1877F2] hover:bg-[#166fe5] font-extrabold text-xs py-2 px-3.5 rounded-xl flex items-center justify-center gap-1.5 transition duration-300 shadow-xs text-white cursor-pointer"
              >
                <span className="text-xs font-black">f</span>
                <span>Facebook</span>
              </button>

              {/* Instagram */}
              <a 
                href="https://www.instagram.com/hironanokamo/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:opacity-90 font-extrabold text-xs py-2 px-3.5 rounded-xl flex items-center justify-center gap-1.5 transition duration-300 shadow-xs text-white"
              >
                <Instagram className="w-3.5 h-3.5 text-white" />
                <span>Instagram</span>
              </a>

              {/* Copy Link */}
              <button 
                onClick={triggerCopyLink}
                className="bg-slate-200/60 hover:bg-slate-200 text-slate-800 font-extrabold text-xs py-2 px-3.5 rounded-xl flex items-center justify-center gap-1.5 transition duration-300 shadow-xs cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5 text-slate-600" />
                <span>URLコピー</span>
              </button>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
