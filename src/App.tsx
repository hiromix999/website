import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Coins, 
  Phone, 
  Check, 
  ArrowRight, 
  Search, 
  ThumbsUp, 
  Plus, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Mail, 
  Share2, 
  Sparkles,
  Info,
  Layers,
  Map,
  Grid,
  Clock,
  Ticket,
  Printer,
  Compass,
  Smile,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Camera,
  MessageCircle,
  Award,
  Heart,
  Send,
  X,
  Instagram,
  AlertTriangle,
  Package
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Participant, GameRequest } from './types';

// Custom SVG Meeple Component
const MeepleIcon = ({ className = "w-6 h-6", color = "currentColor" }: { className?: string; color?: string }) => (
  <svg className={className} viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M50 5C58.2843 5 65 11.7157 65 20C65 28.2843 58.2843 35 50 35C41.7157 35 35 28.2843 35 20C35 11.7157 41.7157 5 50 5ZM31.1716 43.1716C33.0469 41.2963 35.5902 40.2426 38.2426 40.2426H61.7574C64.4098 40.2426 66.9531 41.2963 68.8284 43.1716L93.1421 67.4853C96.2663 70.6095 96.2663 75.6748 93.1421 78.799C90.0179 81.9232 84.9526 81.9232 81.8284 78.799L73.5 70.4706V105C73.5 109.418 69.9183 113 65.5 113C61.0817 113 57.5 109.418 57.5 105V85H42.5V105C42.5 109.418 38.9183 113 34.5 113C30.0817 113 26.5 109.418 26.5 105V70.4706L18.1716 78.799C15.0474 81.9232 9.98207 81.9232 6.85787 78.799C3.73368 75.6748 3.73368 70.6095 6.85787 67.4853L31.1716 43.1716Z" 
      fill={color} 
    />
  </svg>
);

// 別添のロゴ（/logo.png）を入れるためのスペースホルダー兼用のロゴコンポーネントです。
// 画像ファイルが存在しない場合は、美しいベクターSVGで再現されたプレースホルダーロゴが自動でフォールバック表示されます。
const AwaboLogo = ({ className = "h-16", headerMode = false }: { className?: string; headerMode?: boolean }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    if (headerMode) {
      return (
        <div className="flex items-center select-none font-black text-xl md:text-2xl tracking-wider text-[#134E5E]">
          AWA<span className="text-[#D35400]">BO</span>
        </div>
      );
    }
    // Beautiful SVG replica fallback if image fails to load
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

  const logoSrc = "/images/awabo_logo_touka.png";

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
};


// MEEPLE COLORS FOR VISUAL SPARK
const MEEPLE_COLORS = [
  '#EF4444', // red
  '#3B82F6', // blue
  '#10B981', // green
  '#F59E0B', // yellow
  '#8B5CF6', // purple
  '#EC4899', // pink
  '#14B8A6'  // teal
];

// --- RULES & CHARTER COMPONENT ---
interface RulesPageProps {
  setActiveTab: (tab: 'info' | 'rules') => void;
}

const RulesPage = ({ setActiveTab }: RulesPageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      className="max-w-4xl mx-auto space-y-12 pb-16"
    >
      {/* Page Header Banner */}
      <div className="text-center space-y-4 max-w-2xl mx-auto pb-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-teal-50 border-2 border-teal-100 text-[#0D9488] shadow-inner mb-2">
          <ShieldCheck className="w-8 h-8" />
        </div>
        <h1 className="text-3xl md:text-4.5xl font-black text-slate-900 tracking-tight">
          守っていただきたいルール
        </h1>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed pt-2">
          みんなが楽しく、気持ちよくボードゲームで遊ぶために、以下のルールとマナーを守っていただくようお願いいたします。
        </p>
      </div>

      {/* Chapters content block */}
      <div className="glass-panel rounded-3.5xl p-6 md:p-10 space-y-8 shadow-lg border-white/80 relative overflow-hidden">
        
        {/* Subtle watermark background */}
        <div className="absolute right-[-40px] top-[-40px] text-[180px] select-none opacity-[0.02] font-black pointer-events-none text-teal-800 rotate-12">
          ★
        </div>

        {/* 1. ゲームを大切に扱いましょう */}
        <div className="space-y-4 pb-6 border-b border-slate-100 last:border-b-0 last:pb-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 shadow-sm">
              <Heart className="w-5 h-5 animate-pulse" />
            </div>
            <h2 className="text-base md:text-lg font-black text-slate-900">
              1. ゲームを大切に扱いましょう
            </h2>
          </div>
          <div className="text-slate-600 text-xs md:text-sm pl-0 md:pl-13 mt-2 leading-relaxed font-medium space-y-2">
            <p>
              会場にあるボードゲームの多くは、運営スタッフや参加者個人の大切な<strong>「私物」</strong>です。
            </p>
            <p>
              カードや駒（コンポーネント）は、乱暴に扱ったり折り曲げたりせず、丁寧に取り扱ってください。
            </p>
            <p className="bg-slate-50 border border-slate-200/50 p-3 rounded-2xl text-slate-500">
              ゲーム中の飲食については、手が汚れたり飲み物がこぼれたりしないよう、十分にご注意ください（蓋付きの飲み物のみ可、など会場のルールに従ってください）。
            </p>
          </div>
        </div>

        {/* 2. プレイ中のマナーについて */}
        <div className="space-y-4 pb-6 border-b border-slate-100 last:border-b-0 last:pb-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-teal-100 text-teal-600 flex items-center justify-center shrink-0 shadow-sm">
              <Smile className="w-5 h-5" />
            </div>
            <h2 className="text-base md:text-lg font-black text-slate-900">
              2. プレイ中のマナーについて
            </h2>
          </div>
          <div className="text-slate-600 text-xs md:text-sm pl-0 md:pl-13 mt-2 leading-relaxed font-medium space-y-3">
            <div className="bg-white/60 border border-slate-100 p-4 rounded-2.5xl space-y-2.5">
              <div className="flex items-start gap-2">
                <span className="bg-[#0D9488]/10 text-[#0D9488] text-[10px] font-black px-1.5 py-0.5 rounded mt-0.5 shrink-0">ルール</span>
                <p><strong>ルールを教え合おう:</strong> 初めて遊ぶ人にも分かりやすく、優しく説明しましょう。</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="bg-[#0D9488]/10 text-[#0D9488] text-[10px] font-black px-1.5 py-0.5 rounded mt-0.5 shrink-0">エンジョイ</span>
                <p><strong>勝敗にこだわりすぎない:</strong> ゲームは勝っても負けても、みんなで楽しむことが一番です。他人のミスを責めたり、暴言を吐いたり、不機嫌になったりする行為はご遠慮ください。</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="bg-[#0D9488]/10 text-[#0D9488] text-[10px] font-black px-1.5 py-0.5 rounded mt-0.5 shrink-0">マナー</span>
                <p><strong>最後までプレイしよう:</strong> 途中でゲームを投げ出したり、故意にルールを破ったり（チート行為）しないでください。</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. お子様のご参加について */}
        <div className="space-y-4 pb-6 border-b border-slate-100 last:border-b-0 last:pb-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 shadow-sm">
              <Users className="w-5 h-5" />
            </div>
            <h2 className="text-base md:text-lg font-black text-slate-900">
              3. お子様のご参加について
            </h2>
          </div>
          <div className="text-slate-600 text-xs md:text-sm pl-0 md:pl-13 mt-2 leading-relaxed font-medium space-y-2">
            <p>
              小学生以下のお子様が参加される場合は、<strong>必ず保護者の方の同席</strong>をお願いいたします。
            </p>
            <p>
              会場内を走り回るなど、他の方のプレイや安全の妨げになる行為がないよう、見守りをお願いいたします。
            </p>
          </div>
        </div>

        {/* 4. 持ち込みゲームについて */}
        <div className="space-y-4 pb-6 border-b border-slate-100 last:border-b-0 last:pb-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 shadow-sm">
              <Package className="w-5 h-5" />
            </div>
            <h2 className="text-base md:text-lg font-black text-slate-900">
              4. 持ち込みゲームについて
            </h2>
          </div>
          <div className="text-slate-600 text-xs md:text-sm pl-0 md:pl-13 mt-2 leading-relaxed font-medium space-y-2">
            <p>
              ご自身のボードゲームを持ち込んで遊ぶことも大歓迎です！
            </p>
            <p>
              持ち込む際は、箱や中身に名前を書く、あるいは付箋を貼るなどして、紛失防止の対策をお願いします。
            </p>
            <p className="text-xs text-amber-700 bg-amber-500/5 border border-amber-300/20 p-3 rounded-2xl mt-1">
              ※万一、破損やパーツの紛失が発生した場合、主催者側では責任を负いかねますので、参加者同士リスペクトを持って管理してください。
            </p>
          </div>
        </div>

        {/* 5. 禁止事項 */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 shadow-sm">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h2 className="text-base md:text-lg font-black text-slate-900">
              5. 禁止事項
            </h2>
          </div>
          <div className="text-slate-600 text-xs md:text-sm pl-0 md:pl-13 mt-2 leading-relaxed font-medium space-y-2">
            <ul className="list-disc pl-5 space-y-1.5 bg-rose-500/[0.02] border border-rose-500/10 p-4 rounded-2.5xl text-slate-600">
              <li>他の参加者に対する、特定の宗教・政治活動への勧誘、ビジネス（マルチ商法など）の勧誘行為。</li>
              <li>他人が嫌がるハラスメント行為や、過度な連絡先交換の強要。</li>
              <li>著しくイベントの進行を妨げる行為。</li>
            </ul>
            <p className="text-xs text-rose-600 font-extrabold mt-1">
              （※これらに該当する場合、運営の判断で退場や今後の参加をお断りすることがあります）
            </p>
          </div>
        </div>

      </div>

      {/* Chapter 6 Bottom Back button */}
      <div className="text-center no-print">
        <button
          onClick={() => {
            setActiveTab('info');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 text-slate-500 hover:text-[#0D9488] font-bold text-sm transition"
        >
          <span>戻ってイベント詳細を見る</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </motion.div>
  );
};

export default function App() {
  // --- STATE ---
  const [activeTab, setActiveTab] = useState<'info' | 'rules'>('info');

  // Persistence loaded from localStorage or fallback
  const [participants, setParticipants] = useState<Participant[]>(() => {
    const saved = localStorage.getItem('awabo_participants');
    return saved ? JSON.parse(saved) : [];
  });

  const [customRequests, setCustomRequests] = useState<GameRequest[]>(() => {
    const saved = localStorage.getItem('awabo_custom_requests');
    return saved ? JSON.parse(saved) : [];
  });

  // Forms state
  const [rsvpName, setRsvpName] = useState('');
  const [rsvpCount, setRsvpCount] = useState(1);
  const [rsvpEmail, setRsvpEmail] = useState('');
  const [rsvpBringing, setRsvpBringing] = useState('');
  const [rsvpComment, setRsvpComment] = useState('');
  const [isSubmittingRsvp, setIsSubmittingRsvp] = useState(false);
  const [registeredTicket, setRegisteredTicket] = useState<Participant | null>(null);

  // Custom request game state
  const [requestGameName, setRequestGameName] = useState('');
  const [requestRequester, setRequestRequester] = useState('');
  const [requestComment, setRequestComment] = useState('');
  const [isSubmittingRequest, setIsSubmittingRequest] = useState(false);
  const [requestSuccess, setRequestSuccess] = useState(false);

  // FAQ Accordion states
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);

  // Share Notification Alert
  const [showShareAlert, setShowShareAlert] = useState(false);
  const [shareAlertText, setShareAlertText] = useState('');

  // Save to local storage whenever state changes
  useEffect(() => {
    localStorage.setItem('awabo_participants', JSON.stringify(participants));
  }, [participants]);

  useEffect(() => {
    localStorage.setItem('awabo_custom_requests', JSON.stringify(customRequests));
  }, [customRequests]);

  // --- ACTIONS ---
  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rsvpName.trim()) return;

    setIsSubmittingRsvp(true);

    // Simulate real-time database insertion delay
    setTimeout(() => {
      const randomId = 'p-' + Math.random().toString(36).substr(2, 9);
      const ticketId = `AWB-2026-0809-${String(participants.length + 1).padStart(4, '0')}`;
      const nowString = new Date().toISOString().replace('T', ' ').substr(0, 16);

      const newParticipant: Participant = {
        id: randomId,
        name: rsvpName,
        guestCount: rsvpCount,
        email: rsvpEmail || undefined,
        bringingGame: rsvpBringing || undefined,
        comment: rsvpComment || undefined,
        registeredAt: nowString,
        ticketId: ticketId
      };

      const updatedList = [newParticipant, ...participants];
      setParticipants(updatedList);
      setRegisteredTicket(newParticipant);

      // Clean up form
      setRsvpName('');
      setRsvpCount(1);
      setRsvpEmail('');
      setRsvpBringing('');
      setRsvpComment('');
      setIsSubmittingRsvp(false);

      // Scroll to ticket screen nicely
      setTimeout(() => {
        const ticketElement = document.getElementById('ticket-view');
        if (ticketElement) {
          ticketElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }, 1200);
  };

  const handleVoteRequest = (reqId: string) => {
    const updated = customRequests.map(r => {
      if (r.id === reqId) {
        return { ...r, votes: r.votes + 1 };
      }
      return r;
    });
    setCustomRequests(updated);

    // Quick notification toast
    setShareAlertText("リクエストを応援しました！投票完了。");
    setShowShareAlert(true);
    setTimeout(() => setShowShareAlert(false), 2500);
  };

  const handleAddRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!requestGameName.trim() || !requestRequester.trim()) return;

    setIsSubmittingRequest(true);

    setTimeout(() => {
      const newRequest: GameRequest = {
        id: 'r-' + Math.random().toString(36).substr(2, 9),
        gameName: requestGameName,
        requesterName: requestRequester,
        comment: requestComment || undefined,
        votes: 1,
        createdAt: new Date().toISOString().split('T')[0]
      };

      setCustomRequests([newRequest, ...customRequests]);
      setRequestGameName('');
      setRequestRequester('');
      setRequestComment('');
      setIsSubmittingRequest(false);
      setRequestSuccess(true);

      setTimeout(() => setRequestSuccess(false), 4000);
    }, 600);
  };



  const triggerCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setShareAlertText("公式ホームページのURLをクリップボードにコピーしました！");
    setShowShareAlert(true);
    setTimeout(() => setShowShareAlert(false), 3000);
  };

  const handleShareSNS = (platform: 'x' | 'line' | 'facebook') => {
    const title = 'ボードゲーム交流会「AWABO（あわぼ！）」公式サイト';
    const text = 'みんなで遊ぼう！無料のボードゲーム交流会「AWABO（あわぼ！）」8月9日(日)開催！初心者・手ぶら参加大歓迎！';
    const url = window.location.href;

    let shareUrl = '';
    if (platform === 'x') {
      shareUrl = `https://twitter.com/share?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    } else if (platform === 'line') {
      shareUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    } else if (platform === 'facebook') {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    }

    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const handlePrintTicket = () => {
    window.print();
  };

  // Calculate total registered headcount
  const totalExpectedParticipants = participants.reduce((acc, curr) => acc + curr.guestCount, 0);

  // FAQ Data from flyer topics & standard board game gatherings
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
      q: '1人で参加しても楽しめますか？友達と一緒でも大丈夫？',
      a: 'お一人での参加も、お友達やご家族と一緒の参加も大歓迎です！お一人で来られた場合は、スタッフが遊びやすい卓へスムーズにご案内いたします。'
    },
    {
      q: '遅刻しての途中参加や、途中で帰ることはできますか？',
      a: '13:30〜17:00の間でしたら、いつ来て、いつ帰っても大丈夫です。ただし、プレイ中のゲームを抜けると他のプレイヤーに影響することがあるため、ゲームが一区切りついた段階で退出いただけますと幸いです。'
    },
    {
      q: '事前予約は必要ですか？',
      a: '不要です！誰でも手ぶらでふらっとお越しいただき、その場でゲームを始めていただけます。当日そのままお気軽にお越しください！'
    },
    {
      q: '年齢制限はありますか？子供と一緒に参加できますか？',
      a: '子供からシニアの方まで、どなたでも参加いただけます！小学生以下の小さなお子様の場合は、ルール理解や安全を考慮し、必ず保護者の方の同伴をお願いしております。'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFDF9] bg-grid-pattern text-slate-800 font-sans selection:bg-teal-200 selection:text-teal-900 overflow-x-hidden relative">
      
      {/* GLOWING ORBS BACKGROUND (Apple-style ambient glow) */}
      <div className="absolute top-[10%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-tr from-amber-200/20 to-orange-300/10 blur-[100px] pointer-events-none select-none z-0" />
      <div className="absolute top-[40%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#0D9488]/10 to-indigo-300/10 blur-[120px] pointer-events-none select-none z-0" />
      <div className="absolute bottom-[10%] left-[5%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-tr from-rose-200/10 to-amber-200/10 blur-[100px] pointer-events-none select-none z-0" />

      {/* TOP DECORATIVE FESTIVAL GARLAND - High-contrast local friendly aesthetic */}
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
            <button onClick={() => setShowShareAlert(false)} className="text-slate-400 hover:text-white transition">
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* APPLE-STYLE GLASS NAVIGATION HEADER */}
      <header className="sticky top-0 bg-white/70 backdrop-blur-xl border-b border-slate-200/50 z-40 shadow-sm transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          
          {/* Logo Brand Accent */}
          <a href="#" className="flex items-center gap-2 group transition duration-300 hover:opacity-90">
            <AwaboLogo className="h-10 w-auto" headerMode={true} />
          </a>

          {/* Quick Menu Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => {
                setActiveTab('info');
                setTimeout(() => {
                  document.getElementById('section-info')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
              }}
              className={`text-sm font-bold transition flex items-center gap-1 cursor-pointer ${activeTab === 'info' ? 'text-[#0D9488]' : 'text-slate-600 hover:text-teal-600'}`}
            >
              <Info className="w-4 h-4 text-teal-600" />
              <span>開催案内</span>
            </button>
            <button 
              onClick={() => {
                setActiveTab('info');
                setTimeout(() => {
                  document.getElementById('section-faq')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
              }}
              className={`text-sm font-bold transition flex items-center gap-1 cursor-pointer ${activeTab === 'info' ? 'text-[#0D9488]' : 'text-slate-600 hover:text-teal-600'}`}
            >
              <HelpCircle className="w-4 h-4 text-teal-600" />
              <span>よくある質問</span>
            </button>
            <button 
              onClick={() => {
                setActiveTab('rules');
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 100);
              }}
              className={`text-sm font-bold transition flex items-center gap-1 cursor-pointer ${activeTab === 'rules' ? 'text-[#0D9488]' : 'text-slate-600 hover:text-teal-600'}`}
            >
              <ShieldCheck className="w-4 h-4 text-teal-600" />
              <span>注意事項</span>
            </button>
          </nav>

          {/* Call to Action Button */}
          <button 
            onClick={() => {
              setActiveTab('info');
              setTimeout(() => {
                document.getElementById('section-access')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }, 100);
            }}
            className="hidden md:flex items-center gap-1.5 bg-[#0D9488] hover:bg-[#0D9488]/90 text-white font-extrabold text-xs px-4 py-2.5 rounded-xl shadow transition duration-300 cursor-pointer"
          >
            <MapPin className="w-4 h-4" />
            <span>会場アクセス</span>
          </button>

        </div>
      </header>

      {/* HERO SECTION */}
      {activeTab === 'info' && (
        <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 md:px-6 space-y-16 text-center flex flex-col items-center justify-center">
          
          {/* Hero Left Content */}
          <div className="w-full text-center space-y-6 flex flex-col items-center justify-center">
            
            {/* AWABO Logo Brand Presentation / Placeholder */}
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
                  「AWABO（あわぼ！）」公式サイト
                </span>
              </span>
            </h1>

            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
              「AWABO（あわぼ！）」は子どもから大人、ボードゲームが初めての方からコアなファンまで誰もが温かく楽しめる地域交流イベントです。
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

          {/* Hero Bottom: Beautiful Glassmorphism Console & Countdown (centered below) */}
          <div className="w-full max-w-xl relative mx-auto">
            
            {/* Background absolute elements for aesthetic depth */}
            <div className="absolute top-[-10px] right-[-10px] text-5xl select-none opacity-25 animate-float">🎲</div>
            <div className="absolute bottom-[-10px] left-[-15px] text-4xl select-none opacity-20 animate-float-slow">🃏</div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="glass-panel border-white/60 shadow-xl rounded-3.5xl p-6 md:p-8 relative overflow-hidden"
            >
              
              <div className="absolute top-0 right-0 bg-[#EAB308] text-slate-950 font-bold px-4 py-1.5 text-xs rounded-bl-2xl tracking-wider shadow">
                次回開催情報
              </div>

              <div className="text-left space-y-5">
                <div className="space-y-1">
                  <span className="text-[10px] font-extrabold uppercase text-[#0D9488] tracking-widest block">AWA BOARDGAME MEETUP</span>
                  <h3 className="text-2xl font-black text-slate-900">AWABO（あわぼ！）第1回交流会</h3>
                </div>

                {/* Event core specifics */}
                <div className="space-y-3 bg-white/40 border border-white/50 p-4 rounded-2xl shadow-inner">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-rose-500 shrink-0" />
                    <div>
                      <p className="text-[10px] text-slate-400 leading-none">開催日程</p>
                      <p className="font-extrabold text-slate-800 text-xs md:text-sm mt-0.5">2026年 8月9日(日)</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-teal-600 shrink-0" />
                    <div>
                      <p className="text-[10px] text-slate-400 leading-none">時間</p>
                      <p className="font-extrabold text-slate-800 text-xs md:text-sm mt-0.5">13:30 〜 17:00</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-emerald-600 shrink-0" />
                    <div>
                      <p className="text-[10px] text-slate-400 leading-none">会場場所</p>
                      <p className="font-extrabold text-slate-800 text-xs md:text-sm mt-0.5">阿波市市場公民館</p>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </section>
      )}

      {/* QUICK SCROLL BAR */}
      {activeTab === 'info' && (
        <div className="sticky top-16 bg-white/80 backdrop-blur-md border-y border-slate-200/60 z-30 shadow-sm no-print">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-start md:justify-center gap-2 overflow-x-auto py-2.5 no-scrollbar">
          
          <button 
            onClick={() => {
              setActiveTab('info');
              document.getElementById('section-info')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold shrink-0 transition-all flex items-center gap-1.5 ${
              activeTab === 'info' 
                ? 'bg-[#0D9488] text-white shadow-md shadow-teal-700/10' 
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Info className="w-4 h-4" />
            <span>開催案内</span>
          </button>

          <button 
            onClick={() => {
              setActiveTab('info');
              document.getElementById('section-access')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold shrink-0 transition-all flex items-center gap-1.5 ${
              activeTab === 'info' 
                ? 'text-slate-600 hover:bg-slate-100'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <MapPin className="w-4 h-4" />
            <span>会場アクセス</span>
          </button>

          <button 
            onClick={() => {
              setActiveTab('info');
              document.getElementById('section-faq')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold shrink-0 transition-all flex items-center gap-1.5 ${
              activeTab === 'info' 
                ? 'text-slate-600 hover:bg-slate-100'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>よくある質問</span>
          </button>
        </div>
      </div>
      )}

      {/* MAIN CONTAINER */}
      <main className="max-w-6xl mx-auto px-4 md:px-6 py-12 space-y-20 relative z-10">
        
        {activeTab === 'rules' ? (
          <RulesPage setActiveTab={setActiveTab} />
        ) : (
          <>
            {/* SECTION 1: DETAILED INFRASTRUCTURE & ORGANIZER PROFILE */}
        <section id="section-info" className="scroll-reveal visible scroll-mt-28">
          <div className="max-w-3xl mx-auto space-y-8">
            
            {/* Info details: Stacking vertically */}
            <div className="space-y-6">
              
              <div className="glass-panel rounded-3.5xl p-6 md:p-8 text-left space-y-6">
                
                <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100">
                  <div className="p-2 bg-teal-500/15 text-[#0D9488] rounded-xl">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-black text-slate-900">開催内容</h2>
                  </div>
                </div>

                {/* Vertical table entries */}
                <div className="space-y-5">
                  
                  {/* Item 1 */}
                  <div className="flex items-start gap-4">
                    <div className="bg-[#EAB308]/20 text-[#854D0E] font-black text-xs px-3 py-1 rounded-lg shrink-0 mt-0.5 w-16 text-center">
                      日時
                    </div>
                    <div className="space-y-1">
                      <p className="font-extrabold text-slate-900 text-base md:text-lg">
                        8月9日(日) 13:30 〜 17:00
                      </p>
                      <p className="text-slate-500 text-xs leading-relaxed">
                        ※途中参加、途中退室も自由です。
                      </p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-500/20 text-emerald-800 font-black text-xs px-3 py-1 rounded-lg shrink-0 mt-0.5 w-16 text-center">
                      会場名
                    </div>
                    <div className="space-y-1">
                      <p className="font-extrabold text-slate-900 text-base">
                        阿波市市場公民館
                      </p>
                      <p className="text-slate-600 text-sm">
                        徳島県阿波市市場町興崎字北分60-1
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        <span className="text-[10px] bg-slate-100 text-slate-600 border border-slate-200 font-bold px-2.5 py-0.5 rounded-full">
                          🚗 駐車場あり（無料）
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Item-style/Item 3 */}
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

              </div>

              {/* Recommended box */}
              <div className="bg-amber-50/60 border border-amber-200/60 rounded-3xl p-6 text-left relative overflow-hidden shadow-sm">
                <div className="absolute right-4 bottom-[-20px] opacity-15 pointer-events-none select-none">
                  <MeepleIcon className="w-28 h-28 text-amber-500" />
                </div>
                <h3 className="font-black text-slate-900 text-base mb-3 flex items-center gap-1.5">
                  <Smile className="w-5 h-5 text-amber-600" />
                  <span>参加する方へのお約束</span>
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed max-w-xl">
                  誰もが安心して楽しめるよう、AWABO（あわぼ！）では「負けても怒らない」「ゲームを優しく扱う」などの思いやりマナーを大切にしています。勝ち負けよりも、みんなでおしゃべりしながら笑い合う時間そのものを楽しみましょう！
                </p>
              </div>

            </div>

            {/* Attendance tracking & Organizer: Stacking below */}
            <div className="space-y-6 text-left">
              {/* Organizer / Contact widget */}
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
                      <span>AWABO実行委員会</span>
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







        {/* SECTION 6: HIGH-PRECISION RESPONSIVE GOOGLE MAP INTERACTION */}
        <section id="section-access" className="scroll-reveal visible scroll-mt-28">
          <div className="glass-panel rounded-3.5xl p-6 md:p-8 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Maps text Left */}
              <div className="lg:col-span-5 text-left space-y-4">
                <div className="inline-block bg-emerald-500/10 text-emerald-800 border border-emerald-300/30 text-xs font-black px-3 py-1 rounded-full">
                  会場へのアクセス
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">阿波市市場公民館（会場）</h3>

                <div className="space-y-3.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
                  <div className="space-y-0.5">
                    <p className="font-extrabold text-slate-800 flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-[#0D9488]" />
                      <span>📍 住所・所在地</span>
                    </p>
                    <p className="pl-5 text-slate-500 font-medium">徳島県阿波市市場町興崎字北分60-1</p>
                  </div>

                  <div className="space-y-0.5">
                    <p className="font-extrabold text-slate-800 flex items-center gap-1">
                      <span>🚗 お車でのアクセス</span>
                    </p>
                    <p className="pl-5 text-slate-500 leading-normal">
                      徳島自動車道「土成インターチェンジ」から車で約10分。敷地内に無料の駐車場が広く完備されていますので安心してお車でお越しください。
                    </p>
                  </div>


                </div>

                {/* Map quick external buttons */}
                <div className="pt-4 flex flex-wrap gap-2">
                  <a 
                    href="https://www.google.com/maps/place/%E5%B8%82%E5%A0%B4%E5%85%AC%E6%B0%91%E9%A4%A8/@34.0984213,134.2883737,18.75z/data=!4m6!3m5!1s0x3553a47ee38d1ad9:0x6cdf4a623414052d!8m2!3d34.0981368!4d134.2884328!16s%2Fg%2F11bccmg_0l?hl=ja&entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-white border border-slate-200 hover:border-slate-400 text-slate-700 font-extrabold text-xs px-3.5 py-2 rounded-xl transition shadow-sm"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-[#0D9488]" />
                    <span>Google Map で開く</span>
                  </a>
                </div>

              </div>

              {/* Map embed iframe Right */}
              <div className="lg:col-span-7 h-80 md:h-[380px] rounded-3xl overflow-hidden border-2 border-slate-200 shadow-inner relative bg-slate-50 shrink-0">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.468822502804!2d134.28624407677843!3d34.09813677314227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3553a47ee38d1ad9%3A0x6cdf4a623414052d!2z5biC6aG65YWs5rCR6aGo!5e0!3m2!1sja!2sjp!4v1720684281000!5m2!1sja!2sjp" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="阿波市市場公民館のGoogleマップ案内"
                  className="absolute inset-0 w-full h-full"
                />
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 7: APPLE ACCORDION FAQ */}
        <section id="section-faq" className="scroll-reveal visible scroll-mt-28 max-w-4xl mx-auto">
          <div className="text-center space-y-3 mb-8">
            <span className="text-xs font-extrabold bg-[#EAB308]/10 text-[#854D0E] border border-[#EAB308]/20 px-3 py-1 rounded-full">
              Q＆A・よくある質問
            </span>
            <p className="text-slate-500 text-sm">
              参加にあたって皆様から寄せられる代表的なご不安、ご質問をまとめました。
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-3.5xl p-5 md:p-8 text-left space-y-4">
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
                    className="w-full flex items-center justify-between gap-4 font-bold text-slate-900 py-3.5 text-sm md:text-base text-left group"
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

        {/* SECTION 8: SOCIAL MEDIA GATHERING SHARING & ENGAGEMENT DASHBOARD */}
        <section className="scroll-reveal visible scroll-mt-28">
          <div className="bg-gradient-to-tr from-slate-900 to-slate-950 text-white rounded-3.5xl p-6 md:p-10 text-center relative overflow-hidden shadow-2xl">
            
            {/* Background elements */}
            <div className="absolute top-2 left-2 text-3xl opacity-15 animate-float select-none pointer-events-none">✨</div>
            <div className="absolute bottom-4 right-6 text-3xl opacity-15 animate-float-slow select-none pointer-events-none">🎲</div>

            <div className="max-w-2xl mx-auto space-y-6">
              <span className="inline-block bg-[#0D9488] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow">
                AWABO（あわぼ！）をみんなに共有しよう
              </span>
              
              <h2 className="text-2xl md:text-3.5xl font-black tracking-tight leading-snug">
                ボードゲームの楽しさを、<br className="sm:hidden" />家族や友達とシェア！
              </h2>

              <p className="text-slate-300 text-xs md:text-sm leading-relaxed max-w-lg mx-auto">
                「AWABO（あわぼ！）」の開催情報、このホームページのURLをボタンひとつでお気に入りのSNSで簡単に共有できます。お一人でも、ご友人を誘ってのグループでも、たくさんのご参加をお待ちしています。
              </p>

              {/* Grid of buttons for SNS */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto pt-4">
                
                {/* X Twitter */}
                <button 
                  onClick={() => handleShareSNS('x')}
                  className="bg-slate-800 hover:bg-slate-700 border border-slate-700 font-extrabold text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition duration-300 shadow"
                >
                  <span className="text-base font-black">𝕏</span>
                  <span>X にポスト</span>
                </button>

                {/* LINE */}
                <button 
                  onClick={() => handleShareSNS('line')}
                  className="bg-[#06C755] hover:bg-[#05b14c] font-extrabold text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition duration-300 shadow text-white"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>LINEで送る</span>
                </button>

                {/* Facebook */}
                <button 
                  onClick={() => handleShareSNS('facebook')}
                  className="bg-[#1877F2] hover:bg-[#166fe5] font-extrabold text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition duration-300 shadow text-white"
                >
                  <span className="text-sm font-black">f</span>
                  <span>Facebook</span>
                </button>

                {/* Copy Link */}
                <button 
                  onClick={triggerCopyLink}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition duration-300 shadow"
                >
                  <Share2 className="w-4 h-4 text-slate-600" />
                  <span>URLをコピー</span>
                </button>

              </div>
            </div>

          </div>
        </section>



          </>
        )}
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-white pt-16 pb-8 px-4 text-center border-t border-slate-900 relative">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left border-b border-slate-900 pb-10">
            
            {/* Column Left logo block */}
            <div className="md:col-span-5 space-y-4">
              <AwaboLogo className="h-10 w-auto" headerMode={true} />
              <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
                阿波市ボードゲーム交流コミュニティ（AWABO）は、子どもからシニアの方まで、誰もが等しく対話と笑いを楽しめる地域交流を目指して立ち上げられたボードゲーム有志団体です。
              </p>
            </div>

            {/* Column Middle Navigation lists */}
            <div className="md:col-span-3 space-y-3 text-xs">
              <h4 className="font-extrabold text-white tracking-widest border-l-2 border-[#0D9488] pl-2.5">コンテンツ一覧</h4>
              <ul className="space-y-2.5 pl-3.5 text-slate-400">
                <li><a href="#section-info" className="hover:text-white transition">開催案内</a></li>
                <li><a href="#section-faq" className="hover:text-white transition">よくある質問</a></li>
              </ul>
            </div>

            {/* Column Right specific flyers summary */}
            <div className="md:col-span-4 space-y-3 text-xs text-slate-400">
              <h4 className="font-extrabold text-white tracking-widest border-l-2 border-[#0D9488] pl-2.5">運営情報</h4>
              <p className="font-bold text-white mt-1">AWABO（あわぼ！）実行委員会</p>
              <p className="leading-relaxed">
                徳島県阿波市での地域交流、世代間コミュニケーションを広げるための非営利コミュニティです。
              </p>
              <p className="flex items-center gap-1.5 mt-2">
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

          {/* Low footer copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
            <div className="text-left space-y-0.5">
              <p>主催：AWABO（あわぼ！）実行委員会</p>
            </div>
            <p className="text-[10px] text-slate-500">
              &copy; 2026 AWA BOard Game Community. All Rights Reserved.
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}
