import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
  Layers,
  Download,
  FileText,
  ZoomIn,
  UserPlus,
  Mail,
  ArrowRight,
  Users,
  BookOpen,
  Heart,
  History
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AwaboLogo, MeepleIcon } from './Logo';

const flyer4ImgSrc = '/images/flyer/第4回AWABOチラシ.png';
const flyer4PdfSrc = '/images/flyer/第4回AWABOチラシ.pdf';

export const InfoPage: React.FC = () => {
  useEffect(() => {
    document.title = 'AWABO第4回交流会 開催案内 | 公式サイト';
  }, []);

  // FAQ Accordion states
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);

  // Flyer Modal state
  const [showFlyerModal, setShowFlyerModal] = useState<boolean>(false);

  // Share Notification Alert
  const [showShareAlert, setShowShareAlert] = useState(false);
  const [shareAlertText, setShareAlertText] = useState('');

  const triggerCopyLink = () => {
    navigator.clipboard.writeText('https://awa-bo.com/');
    setShareAlertText("公式ホームページのURL（https://awa-bo.com/）をクリップボードにコピーしました！");
    setShowShareAlert(true);
    setTimeout(() => setShowShareAlert(false), 3000);
  };

  const handleShareSNS = (platform: 'x' | 'line' | 'facebook') => {
    const title = 'AWABO第4回交流会 公式サイト';
    const text = '【AWABO第4回交流会】11/29(日)13:00〜17:00 阿波市立市場図書館にて開催決定！初心者からボードゲーム好きまで大歓迎🎲 参加費無料・手ぶらOK！';
    const url = 'https://awa-bo.com/';

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

  const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('AWABO第4回交流会')}&dates=20261129T040000Z/20261129T080000Z&details=${encodeURIComponent('【AWABO第4回交流会 開催のお知らせ🎲】\n第4回となるAWABOの開催が決定しました！\n\n初心者の方からボードゲーム好きの方まで、どなたでも気軽に楽しめる交流会です。\n「ルールがわからない」「一人で参加しても大丈夫？」という方もご安心ください。スタッフや参加者の皆で分かりやすくルールを説明しながら遊びます✨\n\n日時：11月29日（日）13:00 〜 17:00\n場所：阿波市立市場図書館\n参加費：無料\n対象：どなたでも（※小学校低学年以下は保護者同伴となります）\n\nルールが簡単なゲームや短時間で盛り上がるゲームをたくさんご用意してお待ちしております。途中参加・途中退出もOKですので、お気軽にお立ち寄りください！\n\n🌐 公式サイト：https://awa-bo.com/\n✉️ メール：info@awa-bo.com\n📷 Instagram：@hironanokamo')}&location=${encodeURIComponent('阿波市立市場図書館（徳島県阿波市市場町市場字上野段212-2）')}`;

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
      q: '事前予約は必要ですか？人数制限はありますか？',
      a: '不要です！事前の参加予約は一切不要です。誰でも手ぶらでふらっとお越しいただき、その場でゲームを始めていただけます。当日そのままお気軽にお越しください！'
    },
    {
      q: '年齢制限はありますか？子供と一緒に参加できますか？',
      a: '子供からシニアの方まで、どなたでも参加いただけます！小学校低学年以下の小さなお子様の場合は、ルール理解や安全を考慮し、必ず保護者の方の同伴をお願いしております。'
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

        {/* Flyer High-Resolution Lightbox Modal */}
        {showFlyerModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowFlyerModal(false)}
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md z-50 flex items-center justify-center p-3 md:p-6 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl relative border border-white/20 cursor-default max-h-[92vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-4 md:px-6 bg-slate-900 text-white flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2">
                  <span className="bg-[#EAB308] text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-md tracking-wider">
                    第4回 公式チラシ
                  </span>
                  <p className="font-extrabold text-xs md:text-sm">
                    2026年11月29日(日) AWABO第4回交流会
                  </p>
                </div>
                <button
                  onClick={() => setShowFlyerModal(false)}
                  className="bg-white/10 hover:bg-white/20 text-white p-1.5 rounded-full transition cursor-pointer"
                  aria-label="閉じる"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Flyer Image Container */}
              <div className="bg-slate-950/90 flex-1 overflow-auto flex items-center justify-center p-3 md:p-6 min-h-0">
                <img
                  src={flyer4ImgSrc}
                  alt="第4回 阿波市ボードゲーム交流会 AWABO 公式チラシ"
                  className="max-h-[62vh] w-auto object-contain rounded-xl shadow-2xl"
                />
              </div>

              {/* Modal Footer Actions */}
              <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
                <p className="text-xs text-slate-500 font-bold hidden sm:block">
                  ※ ご自由にダウンロード・印刷・シェアしてご活用いただけます
                </p>
                <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto justify-end">
                  <a
                    href={flyer4ImgSrc}
                    download="第4回AWABOチラシ.png"
                    className="inline-flex items-center gap-1.5 bg-[#0D9488] hover:bg-[#0D9488]/90 text-white font-extrabold text-xs px-3.5 py-2 rounded-xl transition shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>画像保存(PNG)</span>
                  </a>
                  <a
                    href={flyer4PdfSrc}
                    download="第4回AWABOチラシ.pdf"
                    className="inline-flex items-center gap-1.5 bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-xs px-3.5 py-2 rounded-xl transition shadow-sm"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>PDF保存</span>
                  </a>
                  <a
                    href={flyer4ImgSrc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-white border border-slate-300 hover:border-slate-400 text-slate-700 font-extrabold text-xs px-3.5 py-2 rounded-xl transition shadow-2xs"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                    <span>別タブで開く</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section className="relative pt-6 pb-12 md:pt-10 md:pb-20 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 md:px-6 space-y-12 text-center flex flex-col items-center justify-center">
          
          {/* Hero Left Content */}
          <div className="w-full text-center space-y-6 flex flex-col items-center justify-center">
            
            {/* AWABO Logo */}
            <div className="mb-2">
              <AwaboLogo className="h-24 md:h-32 lg:h-36 w-auto" />
            </div>
            
            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-800 border border-amber-300/40 text-xs font-black px-4 py-1.5 rounded-full shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>参加費無料・申込不要・手ぶらOK！</span>
            </div>

            {/* 1. トップ見出し */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl font-black text-slate-900 tracking-tight leading-tight">
                徳島でみんなで遊ぼう！
                <span className="block mt-2 bg-gradient-to-r from-orange-600 via-rose-500 to-[#0D9488] bg-clip-text text-transparent font-black relative text-xl sm:text-2xl md:text-3.5xl lg:text-4xl">
                  阿波市ボードゲーム交流会「AWABO（あわボ！）」
                </span>
              </h1>

              <p className="text-slate-700 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-bold pt-1">
                阿波市ボードゲーム交流会「AWABO（あわボ！）」は、ボードゲームを囲んで、自然に笑いが起こる交流会です。
              </p>
            </div>

            {/* 2. ベネフィット4つ */}
            <div className="w-full max-w-4xl mx-auto pt-3 space-y-3">
              <div className="inline-flex items-center gap-2 bg-teal-500/10 text-[#0D9488] border border-teal-300/40 text-xs sm:text-sm font-black px-4 py-1.5 rounded-full">
                <Smile className="w-4 h-4 text-[#0D9488]" />
                <span>参加すると、こんな「いいこと」があります</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 text-left w-full">
                <div className="bg-white/85 backdrop-blur-sm border border-orange-200/80 p-4 rounded-2.5xl shadow-sm hover:shadow-md transition space-y-1.5 flex flex-col justify-between">
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 mb-2">
                      <Smile className="w-5 h-5" />
                    </div>
                    <h3 className="font-extrabold text-slate-900 text-sm sm:text-base leading-snug">初対面でも、笑って話せる</h3>
                    <p className="text-slate-600 text-xs leading-relaxed mt-1">
                      ルールはスタッフが説明します。5分も遊べば、知らない人とも自然に話せます。
                    </p>
                  </div>
                </div>

                <div className="bg-white/85 backdrop-blur-sm border border-teal-200/80 p-4 rounded-2.5xl shadow-sm hover:shadow-md transition space-y-1.5 flex flex-col justify-between">
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-teal-100 text-[#0D9488] flex items-center justify-center shrink-0 mb-2">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <h3 className="font-extrabold text-slate-900 text-sm sm:text-base leading-snug">頭も気分もすっきり</h3>
                    <p className="text-slate-600 text-xs leading-relaxed mt-1">
                      カードをめくって、考えて、笑って。帰るころには気分が軽くなります。
                    </p>
                  </div>
                </div>

                <div className="bg-white/85 backdrop-blur-sm border border-rose-200/80 p-4 rounded-2.5xl shadow-sm hover:shadow-md transition space-y-1.5 flex flex-col justify-between">
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mb-2">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <h3 className="font-extrabold text-slate-900 text-sm sm:text-base leading-snug">顔見知りが増える</h3>
                    <p className="text-slate-600 text-xs leading-relaxed mt-1">
                      第2回は46名、第3回は34名が参加。次に会ったとき、声をかけ合える人が増えます。
                    </p>
                  </div>
                </div>

                <div className="bg-white/85 backdrop-blur-sm border border-amber-200/80 p-4 rounded-2.5xl shadow-sm hover:shadow-md transition space-y-1.5 flex flex-col justify-between">
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mb-2">
                      <Heart className="w-5 h-5 text-amber-700" />
                    </div>
                    <h3 className="font-extrabold text-slate-900 text-sm sm:text-base leading-snug">家族で楽しむ引き出しが増える</h3>
                    <p className="text-slate-600 text-xs leading-relaxed mt-1">
                      子どもに人気の簡単なゲームを覚えて帰れます。たとえば、次の家族の集まりで、お孫さんと一緒に遊べる引き出しが増えます。
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* 3. 最初の画面の直下に置く情報ボックス（日時・場所・無料） */}
          <div className="w-full max-w-xl relative mx-auto">
            
            <div className="absolute top-[-10px] right-[-10px] text-5xl select-none opacity-25 animate-float">🎲</div>
            <div className="absolute bottom-[-10px] left-[-15px] text-4xl select-none opacity-20 animate-float-slow">🃏</div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="glass-panel border-white/60 shadow-xl rounded-3.5xl p-6 md:p-8 relative overflow-hidden bg-white/85 text-left space-y-5"
            >
              
              <div className="absolute top-0 right-0 bg-[#EAB308] text-slate-950 font-bold px-4 py-1.5 text-xs rounded-bl-2xl tracking-wider shadow">
                次回開催決定！
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-extrabold uppercase text-[#0D9488] tracking-widest block">NEXT EVENT</span>
                <h2 className="text-2xl font-black text-slate-900">第4回交流会</h2>
                <p className="text-[11px] font-black text-teal-800 bg-teal-50 border border-teal-200 px-2.5 py-1 rounded-lg flex items-center gap-1.5 mt-1">
                  <span className="text-sm shrink-0">🎲</span>
                  <span>初心者からボードゲーム好きまで大歓迎！ルール説明あり・途中参加/退出自由✨</span>
                </p>
              </div>

              {/* 開催レポートへのリンクバナー */}
              <Link
                to="/history"
                className="block bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-teal-500/10 border border-amber-300/80 hover:border-amber-400 p-3 rounded-2xl transition group cursor-pointer shadow-2xs"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="bg-amber-500 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full">
                      開催レポート
                    </span>
                    <p className="text-xs font-black text-slate-800">
                      第2回は46名、第3回は34名が参加！
                    </p>
                  </div>
                  <span className="text-xs font-bold text-[#0D9488] flex items-center gap-1 group-hover:translate-x-1 transition">
                    過去の様子を見る <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>

              {/* Event core specifics */}
              <div className="space-y-3 bg-white/70 border border-slate-200/60 p-4 rounded-2xl shadow-inner text-xs md:text-sm">
                
                {/* 日時 */}
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] text-slate-400 leading-none">日時</p>
                      <p className="font-extrabold text-slate-900 text-sm md:text-base mt-1">
                        11月29日（日）13:00〜17:00
                      </p>
                      <p className="text-[11px] text-slate-500 font-bold mt-0.5">
                        （途中参加・途中退出OK）
                      </p>
                    </div>
                  </div>
                  <a
                    href={googleCalendarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-[11px] px-3.5 py-2 rounded-xl shadow-sm hover:shadow transition-all shrink-0 cursor-pointer"
                    title="Googleカレンダーに予定を追加"
                  >
                    <Calendar className="w-3.5 h-3.5 text-white" />
                    <span>Googleカレンダーに追加</span>
                    <ExternalLink className="w-3 h-3 text-blue-200" />
                  </a>
                </div>

                {/* 場所 */}
                <div className="flex items-start gap-3 pt-2 border-t border-slate-100">
                  <MapPin className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-[10px] text-slate-400 leading-none">場所</p>
                    <div className="mt-1">
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('阿波市立市場図書館 徳島県阿波市市場町市場字上野段212-2')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-extrabold text-slate-900 hover:text-[#0D9488] transition inline-flex items-center gap-1 group underline decoration-[#0D9488]/40 underline-offset-2"
                        title="Googleマップで場所を開く"
                      >
                        <span>阿波市立市場図書館</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#0D9488] group-hover:translate-x-0.5 transition" />
                      </a>
                    </div>
                    <p className="text-[11px] text-slate-600 mt-0.5">
                      徳島県阿波市市場町市場字上野段212-2
                    </p>
                  </div>
                </div>

                {/* 参加費・条件 */}
                <div className="flex items-start gap-3 pt-2 border-t border-slate-100">
                  <Coins className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[10px] text-slate-400 leading-none">参加費・条件</p>
                    <p className="font-black text-rose-600 text-sm mt-1">
                      無料・申込不要・手ぶらOK・駐車場無料
                    </p>
                  </div>
                </div>

              </div>

            </motion.div>
          </div>

        </div>
      </section>

      {/* QUICK SCROLL BAR (4等分グリッド配置) */}
      <div className="sticky top-16 bg-white/95 backdrop-blur-md border-y border-slate-200/60 z-30 shadow-xs no-print">
        <div className="max-w-4xl mx-auto px-2 sm:px-4 py-1.5 no-print">
          <div className="grid grid-cols-4 gap-1.5 sm:gap-2 text-center w-full">
            
            {/* 1. 開催案内 */}
            <button 
              onClick={() => {
                document.getElementById('section-info')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="py-1.5 px-1 sm:px-2.5 rounded-xl text-[11px] sm:text-xs md:text-sm font-black transition-all flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 bg-[#0D9488] text-white shadow-2xs cursor-pointer active:scale-95"
            >
              <Info className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">開催案内</span>
            </button>

            {/* 2. 安心ポイント */}
            <button 
              onClick={() => {
                document.getElementById('section-faq-quick')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="py-1.5 px-1 sm:px-2.5 rounded-xl text-[11px] sm:text-xs md:text-sm font-black transition-all flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 bg-teal-50 hover:bg-teal-100 text-teal-900 border border-teal-200/80 shadow-2xs cursor-pointer active:scale-95"
            >
              <Smile className="w-3.5 h-3.5 text-teal-700 shrink-0" />
              <span className="truncate">安心ポイント</span>
            </button>

            {/* 3. 会員登録 */}
            <button 
              onClick={() => {
                document.getElementById('section-register')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="py-1.5 px-1 sm:px-2.5 rounded-xl text-[11px] sm:text-xs md:text-sm font-black transition-all flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 bg-amber-100 hover:bg-amber-200 text-amber-950 border border-amber-300 shadow-2xs cursor-pointer active:scale-95"
            >
              <UserPlus className="w-3.5 h-3.5 text-amber-700 shrink-0" />
              <span className="truncate">会員登録</span>
            </button>

            {/* 4. Ｑ＆Ａ */}
            <button 
              onClick={() => {
                document.getElementById('section-faq')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="py-1.5 px-1 sm:px-2.5 rounded-xl text-[11px] sm:text-xs md:text-sm font-black transition-all flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 shadow-2xs cursor-pointer active:scale-95"
            >
              <HelpCircle className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
              <span className="truncate">Ｑ＆Ａ</span>
            </button>

          </div>
        </div>
      </div>

      {/* 4. 常設紹介セクション「AWABOって、どんな会？」 */}
      <section id="section-about" className="scroll-mt-28 max-w-3xl mx-auto px-4">
        <div className="glass-panel rounded-3.5xl p-6 md:p-8 text-left space-y-6 bg-white/80 border border-teal-200/70 shadow-md">
          <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
            <div className="p-2 bg-teal-500/15 text-[#0D9488] rounded-xl">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-black text-[#0D9488] uppercase tracking-wider block">ABOUT AWABO</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900">AWABOって、どんな会？</h2>
            </div>
          </div>

          <div className="space-y-4 text-slate-700 text-sm md:text-base leading-relaxed">
            <p>
              AWABO（あわボ！）は、徳島県阿波市で活動しているボードゲーム交流会です。主催は「ボードゲーム×教育」のテクちゃん（<a href="https://www.instagram.com/hironanokamo/" target="_blank" rel="noopener noreferrer" className="text-[#0D9488] font-bold hover:underline">@hironanokamo</a>）。子どもからシニアまで、初めての方も、ボードゲームが好きな方も、みんなで卓を囲みます。
            </p>

            {/* 5. 大人・お一人参加への一文 */}
            <div className="bg-amber-50/80 border border-amber-300/80 rounded-2xl p-4 text-xs md:text-sm text-slate-800 space-y-1">
              <p className="font-extrabold text-amber-950 flex items-center gap-1.5">
                <Users className="w-4 h-4 text-amber-700 shrink-0" />
                <span>お一人での参加も大歓迎です</span>
              </p>
              <p className="font-medium text-slate-700 leading-relaxed">
                お一人での参加も多いです。スタッフが卓の人数を調整しますので、初めての方も一人で来ても大丈夫です。大人の方も、シニアの方も、どうぞお気軽に。
              </p>
            </div>

            {/* 遊べるゲームの例 */}
            <div className="pt-2 space-y-2">
              <p className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                <span>🎲 遊べるゲームの例：</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {['ドブル', 'アルゴ', 'ディクシット', 'ラミィキューブ', 'キングドミノ'].map((game) => (
                  <span 
                    key={game} 
                    className="bg-teal-50 text-teal-900 border border-teal-200 text-xs font-black px-3 py-1 rounded-xl shadow-2xs"
                  >
                    {game}
                  </span>
                ))}
                <span className="bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1 rounded-xl">
                  ほか多数！
                </span>
              </div>
              <p className="text-xs text-slate-500 pt-1">
                ※ <a href="https://www.instagram.com/hironanokamo/" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline inline-flex items-center gap-1">
                  <Instagram className="w-3.5 h-3.5" /> Instagram
                </a> ではゲーム紹介シリーズも随時発信中です！
              </p>
            </div>
          </div>
        </div>
      </section>

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

              {/* ⚠️ 第4回 開催告知 Banner */}
              <div className="bg-amber-50/90 border-2 border-amber-400/90 rounded-2.5xl p-5 md:p-6 text-left space-y-3 shadow-xs">
                <div className="flex items-center gap-2 text-amber-900 font-black text-base md:text-lg">
                  <span className="text-2xl">🎲</span>
                  <span>【AWABO第4回交流会 開催のお知らせ】</span>
                </div>
                <div className="text-slate-800 text-xs md:text-sm font-bold leading-relaxed space-y-2">
                  <p>
                    第4回となるAWABOの開催が決定しました！
                  </p>
                  <p>
                    初心者の方からボードゲーム好きの方まで、どなたでも気軽に楽しめる交流会です。
                  </p>
                  <p>
                    「ルールがわからない」「一人で参加しても大丈夫？」という方もご安心ください。スタッフや参加者の皆で分かりやすくルールを説明しながら遊びます✨
                  </p>
                  <p className="bg-amber-200/80 text-amber-950 p-2.5 rounded-xl border border-amber-300 font-black text-xs md:text-sm">
                    ルールが簡単なゲームや短時間で盛り上がるゲームをたくさんご用意してお待ちしております。途中参加・途中退出もOKですので、お気軽にお立ち寄りください！
                  </p>
                </div>
              </div>

              <div className="text-xs md:text-sm text-slate-600 font-semibold leading-relaxed bg-teal-50/50 p-4 rounded-2xl border border-teal-100/40 space-y-1.5">
                <p>
                  第2回は46名、第3回は雨の中34名の皆様にご来場いただき大盛況でした！ご参加誠にありがとうございました。（
                  <Link to="/history" className="text-[#0D9488] font-black underline underline-offset-2 hover:text-teal-800">
                    過去の開催レポート・履歴一覧はこちら
                  </Link>
                  ）
                </p>
                <p>
                  第4回交流会は<strong>「阿波市立市場図書館」</strong>にて開催いたします！
                </p>
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
                          11月29日（日）13:00 〜 17:00
                        </p>
                        <p className="text-slate-500 text-xs leading-relaxed mt-0.5">
                          ※開催時間中、途中参加・途中退出OKです。お気軽にお立ち寄りください！
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
                      場所
                    </div>
                    <div className="space-y-1 flex-1">
                      <div>
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('阿波市立市場図書館 徳島県阿波市市場町市場字上野段212-2')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-extrabold text-slate-900 hover:text-[#0D9488] text-base inline-flex items-center gap-1.5 group underline decoration-[#0D9488]/40 underline-offset-2 transition"
                          title="Googleマップで場所を開く"
                        >
                          <span>阿波市立市場図書館</span>
                          <ExternalLink className="w-4 h-4 text-[#0D9488] group-hover:translate-x-0.5 transition" />
                        </a>
                      </div>
                      <p className="text-slate-600 text-sm">
                        徳島県阿波市市場町市場字上野段212-2
                      </p>
                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('阿波市立市場図書館 徳島県阿波市市場町市場字上野段212-2')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300 font-extrabold px-2.5 py-1 rounded-xl shadow-2xs transition"
                        >
                          <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                          <span>Googleマップで開く</span>
                          <ExternalLink className="w-3 h-3 text-emerald-600" />
                        </a>
                        <span className="text-[10px] bg-slate-100 text-slate-600 border border-slate-200 font-bold px-2.5 py-1 rounded-xl">
                          🚗 駐車場あり（無料）
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Item 3 (定員) */}
                  <div className="flex items-start gap-4">
                    <div className="bg-indigo-500/20 text-indigo-800 font-black text-xs px-3 py-1 rounded-lg shrink-0 mt-0.5 w-16 text-center">
                      定員
                    </div>
                    <div>
                      <p className="font-extrabold text-slate-900 text-sm flex items-center gap-1.5">
                        <span>なし（自由参加・事前予約不要）</span>
                      </p>
                      <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">
                        途中参加・途中退出もOKですので、お気軽にお立ち寄りください！
                      </p>
                    </div>
                  </div>

                  {/* Item 4 */}
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

                  {/* Item 5 */}
                  <div className="flex items-start gap-4">
                    <div className="bg-teal-500/20 text-teal-800 font-black text-xs px-3 py-1 rounded-lg shrink-0 mt-0.5 w-16 text-center">
                      対象
                    </div>
                    <div className="space-y-1">
                      <p className="font-extrabold text-slate-900 text-sm">
                        どなたでも（※小学校低学年以下は保護者同伴となります）
                      </p>
                      <p className="text-slate-500 text-xs leading-relaxed">
                        子どもからシニアまで大歓迎！お一人での参加も多く、大人の方も安心してお越しいただけます。
                      </p>
                    </div>
                  </div>

                  {/* Item 6 */}
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500/20 text-blue-800 font-black text-xs px-3 py-1 rounded-lg shrink-0 mt-0.5 w-16 text-center">
                      持ち物
                    </div>
                    <div>
                      <p className="font-extrabold text-slate-900 text-sm">手ぶらでOK！持ち込みも歓迎です！</p>
                      <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">
                        ルールが簡単なゲームや短時間で盛り上がるゲームをたくさんご用意してお待ちしております。他の方に遊んでもらいたいお気に入りボードゲームの持ち寄りも大歓迎！
                      </p>
                    </div>
                  </div>

                </div>

                {/* Right Column (Flyer Showcase) */}
                <div className="md:col-span-5 space-y-3 flex flex-col items-center border-t border-slate-100 md:border-t-0 pt-5 md:pt-0">
                  <div className="w-full flex items-center justify-between">
                    <p className="text-slate-500 text-xs font-black">第4回 公式チラシ</p>
                    <span className="bg-amber-500/15 text-amber-800 text-[10px] font-black px-2 py-0.5 rounded-full border border-amber-300/60 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-500" /> 最新告知
                    </span>
                  </div>

                  <div className="bg-gradient-to-br from-amber-50/90 to-teal-50/90 border border-amber-200/80 rounded-2.5xl p-3.5 text-center shadow-xs w-full max-w-[270px] space-y-3">
                    {/* Clickable Flyer Preview Thumbnail */}
                    <div 
                      onClick={() => setShowFlyerModal(true)}
                      className="relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-md group cursor-pointer bg-white"
                      title="クリックして拡大表示"
                    >
                      <img
                        src={flyer4ImgSrc}
                        alt="第4回 阿波市ボードゲーム交流会 AWABO 公式チラシ"
                        className="w-full h-auto object-cover group-hover:scale-105 transition duration-300"
                      />
                      <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition duration-200 flex items-center justify-center backdrop-blur-[2px]">
                        <span className="bg-white/95 text-slate-900 text-xs font-black px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition duration-200">
                          <ZoomIn className="w-3.5 h-3.5 text-[#0D9488]" />
                          拡大して見る
                        </span>
                      </div>
                    </div>

                    <div className="space-y-1 text-left">
                      <p className="font-black text-slate-900 text-xs flex items-center gap-1">
                        <span>第4回 AWABO 公式チラシ</span>
                      </p>
                      <p className="text-[11px] text-slate-500 leading-tight">
                        2026年11月29日(日) 開催告知
                      </p>
                    </div>

                    {/* Direct Action Buttons */}
                    <div className="space-y-2 pt-1 w-full">
                      <a
                        href={flyer4ImgSrc}
                        download="第4回AWABOチラシ.png"
                        className="w-full inline-flex items-center justify-center gap-2 bg-[#0D9488] hover:bg-[#0D9488]/90 text-white font-extrabold text-xs px-3.5 py-2 rounded-xl transition shadow-sm cursor-pointer active:scale-98"
                      >
                        <Download className="w-3.5 h-3.5 shrink-0" />
                        <span>チラシ画像(PNG)を保存</span>
                      </a>

                      <a
                        href={flyer4PdfSrc}
                        download="第4回AWABOチラシ.pdf"
                        className="w-full inline-flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-xs px-3.5 py-2 rounded-xl transition shadow-sm cursor-pointer active:scale-98"
                      >
                        <FileText className="w-3.5 h-3.5 shrink-0" />
                        <span>チラシPDFを保存</span>
                      </a>
                      
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => setShowFlyerModal(true)}
                          className="inline-flex items-center justify-center gap-1 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-extrabold text-[11px] py-1.5 px-2 rounded-xl transition shadow-2xs cursor-pointer"
                        >
                          <ZoomIn className="w-3 h-3 text-[#0D9488]" />
                          <span>拡大表示</span>
                        </button>
                        <a
                          href={flyer4ImgSrc}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-extrabold text-[11px] py-1.5 px-2 rounded-xl transition shadow-2xs cursor-pointer"
                        >
                          <ExternalLink className="w-3 h-3 text-[#0D9488]" />
                          <span>別タブ</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* 6. Q&Aを平文で（本文に置く3大疑問）＋ 参加する方へのお約束 */}
            <div id="section-faq-quick" className="scroll-mt-28 space-y-4">
              <div className="bg-gradient-to-br from-amber-50/90 via-orange-50/40 to-teal-50/50 border border-amber-300/80 rounded-3xl p-6 md:p-8 text-left space-y-6 shadow-sm relative overflow-hidden">
                <div className="absolute right-4 bottom-[-20px] opacity-10 pointer-events-none select-none">
                  <MeepleIcon className="w-36 h-36 text-amber-500" />
                </div>

                <div className="flex items-center justify-between gap-2 border-b border-amber-200/60 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 bg-amber-500 text-slate-950 rounded-lg">
                      <HelpCircle className="w-4 h-4" />
                    </span>
                    <h3 className="font-black text-slate-900 text-base md:text-lg">
                      初めての方へ — よくある疑問にお答えします
                    </h3>
                  </div>
                  <span className="text-[10px] font-bold bg-white text-slate-600 px-2.5 py-0.5 rounded-full border border-slate-200 hidden sm:inline-block">
                    事前の不安解消
                  </span>
                </div>

                {/* 3つのQ&A（平文） */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Q1 */}
                  <div className="bg-white/90 border border-amber-200/70 p-4 rounded-2xl shadow-2xs space-y-1.5">
                    <p className="font-extrabold text-slate-900 text-sm flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
                      <span>一人で参加しても大丈夫？</span>
                    </p>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      <strong>大丈夫です。</strong>お一人で来る方も多く、皆さん混じって楽しんでいます。
                    </p>
                  </div>

                  {/* Q2 */}
                  <div className="bg-white/90 border border-amber-200/70 p-4 rounded-2xl shadow-2xs space-y-1.5">
                    <p className="font-extrabold text-slate-900 text-sm flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-500" />
                      <span>ルールが分からなくても遊べますか？</span>
                    </p>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      <strong>遊べます。</strong>スタッフや参加者の皆で説明しながら遊びます。ルールが簡単なゲームもたくさん用意しています。
                    </p>
                  </div>

                  {/* Q3 */}
                  <div className="bg-white/90 border border-amber-200/70 p-4 rounded-2xl shadow-2xs space-y-1.5">
                    <p className="font-extrabold text-slate-900 text-sm flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-indigo-500" />
                      <span>遅れて行っても、早く帰ってもいいですか？</span>
                    </p>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      <strong>はい。</strong>開催時間中なら、都合のいい時間だけどうぞ。途中参加・途中退出OKです。
                    </p>
                  </div>
                </div>

                {/* 参加する方へのお約束 */}
                <div className="bg-white/70 border border-amber-300/80 rounded-2xl p-4 text-xs space-y-1.5">
                  <p className="font-black text-amber-950 flex items-center gap-1.5">
                    <Smile className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>参加する方へのお約束</span>
                  </p>
                  <p className="text-slate-700 leading-relaxed font-medium">
                    「負けても怒らない」「ゲームを優しく扱う」。勝ち負けよりも、みんなでおしゃべりしながら笑い合う時間を大切にしています。
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Organizer / Contact widget */}
          <div className="space-y-6 text-left">
            <div className="bg-slate-900 text-white rounded-3.5xl p-6 md:p-8 relative overflow-hidden shadow-xl">
              <div className="absolute top-[-20px] right-[-20px] opacity-10 pointer-events-none select-none">
                <MeepleIcon className="w-32 h-32 text-white" />
              </div>

              <div className="space-y-4">
                <div className="inline-block bg-[#EAB308] text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded-md tracking-wider">
                  お問い合わせ
                </div>

                <div className="space-y-0.5">
                  <h3 className="text-xl md:text-2xl font-black flex items-center gap-2">
                    <span>AWABO（あわボ！）実行委員会</span>
                  </h3>
                </div>

                <p className="text-slate-300 text-xs leading-relaxed">
                  今後の開催予定や最新情報は、当公式サイト（https://awa-bo.com/）および公式Instagram（@hironanokamo）にて随時発信しております。開催内容やご不明な点などがございましたら、メールまたはInstagramのDMよりお気軽にお問い合わせください！
                </p>

                {/* Contact actions (Email + Instagram) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <a 
                    href="mailto:info@awa-bo.com" 
                    className="bg-[#0D9488] hover:bg-[#0D9488]/90 text-white font-extrabold text-xs md:text-sm py-3 px-4 rounded-2xl flex items-center justify-center gap-2 transition duration-300 shadow-md group cursor-pointer"
                  >
                    <Mail className="w-4.5 h-4.5 shrink-0 group-hover:scale-110 transition" />
                    <span>メール：info@awa-bo.com</span>
                  </a>

                  <a 
                    href="https://www.instagram.com/hironanokamo/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:opacity-95 text-white font-extrabold text-xs md:text-sm py-3 px-4 rounded-2xl flex items-center justify-center gap-2 transition duration-300 shadow-md group"
                  >
                    <Instagram className="w-4.5 h-4.5 shrink-0 group-hover:scale-110 transition" />
                    <span>Instagram (@hironanokamo)</span>
                  </a>
                </div>

                <p className="text-[10px] text-slate-400 text-center sm:text-left">
                  ※会場（図書館等）窓口への直接のお問い合わせはご遠慮ください。
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION: MEMBER REGISTRATION */}
      <section id="section-register" className="scroll-mt-28">
        <div className="max-w-3xl mx-auto">
          <div className="glass-panel rounded-3.5xl p-6 md:p-9 text-left space-y-6 bg-white/85 shadow-xl border-amber-200/80 relative overflow-hidden">
            
            {/* Header Accent */}
            <div className="absolute top-0 right-0 bg-[#EAB308] text-slate-950 font-black px-4 py-1 text-xs rounded-bl-2xl tracking-wider shadow">
              無料・1分で登録完了
            </div>

            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              <div className="p-2.5 bg-amber-400/20 text-amber-900 rounded-2xl">
                <UserPlus className="w-6 h-6 text-amber-700" />
              </div>
              <div>
                <span className="text-[10px] font-black text-amber-700 uppercase tracking-widest block">
                  AWABO OFFICIAL MEMBERSHIP
                </span>
                <h2 className="text-xl md:text-2xl font-black text-slate-900">
                  AWABO（あわボ！） 会員登録フォーム
                </h2>
              </div>
            </div>

            <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-medium bg-amber-50/70 p-4 rounded-2xl border border-amber-200/60">
              ご登録いただいたメールアドレス宛に、<strong>今後の交流会やイベントのお知らせ</strong>をお送りいたします。
            </p>

            {/* Questions preview summary */}
            <div className="space-y-2.5 pt-1">
              <p className="text-xs font-black text-slate-800 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
                <span>ご登録いただく情報</span>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="bg-slate-50 border border-slate-200/80 p-3.5 rounded-2xl space-y-1">
                  <p className="font-extrabold text-slate-900 text-xs flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    <span>1. ニックネーム（必須）</span>
                  </p>
                  <p className="text-[11px] text-slate-500">
                    交流会等で呼んでほしいお名前やニックネーム
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200/80 p-3.5 rounded-2xl space-y-1">
                  <p className="font-extrabold text-slate-900 text-xs flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    <span>2. メールアドレス（必須）</span>
                  </p>
                  <p className="text-[11px] text-slate-500">
                    交流会のお知らせを送付するメールアドレス
                  </p>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="space-y-2 pt-2 text-center">
              <a
                href="https://forms.gle/ZWJ7Vug4XgpzRJTBA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-slate-950 font-black text-sm md:text-base py-3.5 px-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform active:scale-98 cursor-pointer group"
              >
                <Mail className="w-5 h-5 text-slate-950 group-hover:scale-110 transition-transform" />
                <span>Googleフォームを開いて登録する</span>
                <ExternalLink className="w-4 h-4 text-slate-800" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: ACCESS MAP ONLY */}
      <section id="section-access" className="scroll-mt-28 max-w-4xl mx-auto">
        <div className="rounded-3xl md:rounded-3.5xl overflow-hidden border-2 border-slate-200/90 shadow-md h-80 sm:h-96 md:h-[420px] relative bg-slate-100">
          <iframe 
            src={`https://maps.google.com/maps?q=${encodeURIComponent('徳島県阿波市市場町市場字上野段212-2 阿波市立市場図書館')}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="阿波市立市場図書館（Googleマップ）"
            className="w-full h-full"
          />
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
