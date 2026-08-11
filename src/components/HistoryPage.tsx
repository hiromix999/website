import React, { useState } from 'react';
import { 
  History, 
  Calendar, 
  MapPin, 
  Users, 
  Sparkles, 
  ExternalLink, 
  Download, 
  X, 
  ArrowRight,
  Heart,
  CheckCircle2,
  Camera,
  Layers,
  MessageCircle,
  Quote,
  ZoomIn,
  BookOpen
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const flyerPhoto = '/images/第1回あわボ！チラシ.png';

interface HistoryPageProps {
  setActiveTab: (tab: 'info' | 'greetings' | 'rules' | 'history') => void;
}

interface PhotoItem {
  src: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
}

export const HistoryPage: React.FC<HistoryPageProps> = ({ setActiveTab }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  const eventPhotos: PhotoItem[] = [
    {
      src: '/images/IMG_20260809_153756209_AE.webp',
      title: '🐱 クソデカ短歌',
      subtitle: 'ビッグなキーワードを組み合わせて詠む大喜利カードゲーム',
      description: 'デカすぎるキーワードでどれだけナイスな短歌が読めるか！？という大喜利ゲーム。意外な組み合わせに笑いが起こっていました。',
      badge: '大喜利ゲーム'
    },
    {
      src: '/images/IMG_20260809_155800088_MP_AE.webp',
      title: '🟡 アクションゲーム「バウンス・オフ！」',
      subtitle: 'ピンポン玉を弾ませて狙い通りの形を作る白熱バトル',
      description: 'ワンバウンドさせてピンポン玉を狙い通りに入れる白熱バトル。大人も子どもも夢中でボールを弾ませていました。',
      badge: 'アクション'
    },
    {
      src: '/images/IMG_20260809_155812590_AE.webp',
      title: '🧩 テトリスボードゲーム',
      subtitle: 'ブロックを組み合わせて消していく落ちゲー風パズル',
      description: 'ブロックを落として横一列を作る落ちゲー風パズル。このボードゲームで初めてテトリスを知った子もいました。',
      badge: 'パズル'
    },
    {
      src: '/images/IMG_20260809_155845285_AE.webp',
      title: '🃏 会話型心理ゲーム「itoレインボー」',
      subtitle: '数字を言葉に例えて伝える大人気協力カードゲーム',
      description: '「好きなおにぎりの具」などのテーマで数字を言葉に例えて小さい順に手札を出す協力ゲーム。ぴったり数字が揃った瞬間は大爆笑！',
      badge: '会話ゲーム'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      className="max-w-4xl mx-auto space-y-10 pb-16 text-left"
    >
      {/* Lightbox / Modal for High Res Photos */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md z-50 flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl relative border border-white/20 cursor-default"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 bg-slate-900/70 hover:bg-slate-900 text-white p-2 rounded-full transition z-10 cursor-pointer shadow-lg"
                aria-label="閉じる"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="bg-slate-950 flex items-center justify-center max-h-[72vh] overflow-hidden">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  className="max-h-[72vh] w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 space-y-3 bg-white text-left">
                <div className="flex items-center gap-2">
                  <span className="bg-amber-500/10 text-amber-700 text-xs font-black px-2.5 py-0.5 rounded-full border border-amber-300/50">
                    {selectedPhoto.badge}
                  </span>
                  <p className="text-xs font-bold text-slate-400">第1回あわボ！ 当日スナップ</p>
                </div>
                <h3 className="font-black text-slate-900 text-lg md:text-xl flex items-center gap-2">
                  <Camera className="w-5 h-5 text-[#0D9488] shrink-0" />
                  <span>{selectedPhoto.title}</span>
                </h3>
                <p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed">
                  {selectedPhoto.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header Section */}
      <div className="text-center space-y-4 max-w-2xl mx-auto pb-2">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-teal-50 border-2 border-teal-100 text-[#0D9488] shadow-inner mb-2">
          <History className="w-8 h-8" />
        </div>
        <div className="inline-block bg-teal-500/10 text-[#0D9488] text-xs font-black px-3.5 py-1 rounded-full border border-teal-200/60">
          EVENT REPORT & HISTORY
        </div>
        <h1 className="text-3xl md:text-4.5xl font-black text-slate-900 tracking-tight">
          過去の開催履歴・レポート
        </h1>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed pt-1 font-medium">
          阿波市ボードゲーム交流会「AWABO（あわボ！）」の開催レポート＆写真記録です。
        </p>
      </div>

      {/* Main Article Container */}
      <article className="glass-panel rounded-3.5xl p-6 md:p-10 space-y-10 shadow-xl border-white/80 relative overflow-hidden bg-white/90">
        
        {/* Article Meta / Status Header */}
        <header className="space-y-4 pb-6 border-b border-slate-200/80">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-1.5 bg-slate-900 text-amber-400 text-xs font-black px-3.5 py-1 rounded-full shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>開催終了 公式レポート</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-extrabold text-slate-500">
              <Calendar className="w-4 h-4 text-[#0D9488]" />
              <span>2026年8月9日(日) 開催</span>
            </div>
          </div>

          <h2 className="text-2.5xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            【第1回開催レポート】阿波市に笑顔と歓声が響いた夏休み！約40名の皆様と楽しんだボードゲーム交流会
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed bg-teal-50/60 border-l-4 border-[#0D9488] p-4 rounded-r-2xl">
            2026年8月9日(日)、阿波市市場公民館にて記念すべき第1回「あわボ！」を開催いたしました。親子連れから大人の方までたくさんの笑顔にあふれた当日の様子をお届けします！
          </p>
        </header>

        {/* Quick Key Stats Box */}
        <section className="bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-teal-500/10 border-2 border-amber-300/70 rounded-3xl p-5 md:p-6 shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <div className="flex items-center gap-4 bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-amber-200/80 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 shadow-md">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[11px] font-black text-amber-900 uppercase tracking-wider">ご来場者数</p>
              <p className="text-2xl md:text-3xl font-black text-[#0D9488]">
                約40名
              </p>
              <p className="text-[11px] font-bold text-slate-500 mt-0.5">予想を超える大盛況！</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-amber-200/80 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-teal-500 text-white flex items-center justify-center shrink-0 shadow-md">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[11px] font-black text-amber-900 uppercase tracking-wider">開催場所</p>
              <p className="text-lg md:text-xl font-black text-slate-900">
                阿波市市場公民館
              </p>
              <p className="text-[11px] font-bold text-slate-500 mt-0.5">徳島県阿波市</p>
            </div>
          </div>
        </section>

        {/* Photo Gallery Grid Article Highlight */}
        <section className="space-y-6 pt-2">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-xl md:text-2xl font-black text-slate-900 flex items-center gap-2">
              <Camera className="w-6 h-6 text-[#0D9488]" />
              <span>当日のスナップ＆フォトギャラリー</span>
            </h3>
            <span className="text-xs text-slate-400 font-bold flex items-center gap-1">
              <ZoomIn className="w-3.5 h-3.5 text-[#0D9488]" />
              <span>タップで拡大</span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {eventPhotos.map((photo, index) => (
              <div
                key={index}
                onClick={() => setSelectedPhoto(photo)}
                className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-xl transition duration-300 cursor-pointer flex flex-col"
              >
                <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100 relative">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-slate-900/80 backdrop-blur-md text-amber-300 text-[10px] font-black px-3 py-1 rounded-full shadow-md">
                      {photo.badge}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                    <span className="bg-white/95 text-slate-900 text-xs font-extrabold px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5">
                      <Camera className="w-4 h-4 text-[#0D9488]" />
                      <span>高画質で見る</span>
                    </span>
                  </div>
                </div>
                <div className="p-5 space-y-2 flex-1 flex flex-col justify-between text-left">
                  <div>
                    <h4 className="font-black text-slate-900 text-base md:text-lg leading-snug group-hover:text-[#0D9488] transition">
                      {photo.title}
                    </h4>
                    <p className="text-xs font-bold text-amber-600 mt-0.5">
                      {photo.subtitle}
                    </p>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    {photo.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed Article Body Paragraphs */}
        <section className="space-y-8 text-slate-700 text-sm md:text-base leading-relaxed font-medium pt-4">
          
          {/* Section 1 */}
          <div className="space-y-3">
            <h3 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-2 border-b-2 border-teal-500/30 pb-2">
              <BookOpen className="w-5 h-5 text-[#0D9488]" />
              <span>会場に集まった笑顔の参加者たち</span>
            </h3>
            <p>
              2026年8月9日(日)の午後13:30、阿波市市場公民館の会場のオープンとともに、夏休み中の小学生やご家族連れ、ボードゲームが大好きな大人の方々が次々と来場されました。
            </p>
            <p>
              当日はBG Kids とくしまの代表やボードゲームファンの方も応援に来てくださり、会場には100種類を超えるボードゲームが並びました。
            </p>
            <p>
              初参加のお一人さまや、初めてボードゲームで遊ぶというお子様も多くいらっしゃいましたが、会場内の雰囲気により、スタート直後から自然と会話が広がっていきました。
            </p>
          </div>

          {/* Section 3: Participant Quotes */}
          <div className="space-y-4 bg-gradient-to-r from-teal-50/80 via-emerald-50/50 to-amber-50/80 p-6 rounded-3xl border border-teal-200/60">
            <h3 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-[#0D9488]" />
              <span>参加者の皆様からいただいた感想</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
              <div className="bg-white p-4.5 rounded-2xl border border-slate-200 shadow-sm space-y-2 relative flex flex-col justify-between">
                <Quote className="w-6 h-6 text-teal-300 absolute top-3 right-3 opacity-60" />
                <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-medium pt-1 pr-4">
                  「さっそく楽しんだボードゲームの一つをポチッと買いました😆ボードゲーム初心者にとっては、知らなかったゲームを教えてもらいながら楽しめるのがいいです。」
                </p>
              </div>

              <div className="bg-white p-4.5 rounded-2xl border border-slate-200 shadow-sm space-y-2 relative flex flex-col justify-between">
                <Quote className="w-6 h-6 text-amber-300 absolute top-3 right-3 opacity-60" />
                <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-medium pt-1 pr-4">
                  「阿波市でこういうイベントが開催されてとても嬉しいです！第2回も遊びに行きます。」
                </p>
              </div>

              <div className="bg-white p-4.5 rounded-2xl border border-slate-200 shadow-sm space-y-2 relative flex flex-col justify-between">
                <Quote className="w-6 h-6 text-emerald-300 absolute top-3 right-3 opacity-60" />
                <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-medium pt-1 pr-4">
                  「ボードゲームは初めてでしたが、教えてもらいながらやってみると、すぐにルールが分かって楽しむことができました。時間があればもっとやりたかったです。」
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: Organizer Note */}
          <div className="space-y-3 bg-slate-900 text-white p-6 md:p-8 rounded-3xl relative overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-black">
              <Heart className="w-4 h-4 fill-amber-400" />
              <span>主催者からのメッセージ</span>
            </div>
            <h4 className="text-lg md:text-xl font-black text-white">
              ご来場いただいた皆様、本当にありがとうございました！
            </h4>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
              阿波市で誰でも気軽に集まれるボードゲームの場を作りたいという想いからスタートした「あわボ！」。第1回目にしてこれほどたくさんの笑顔に恵まれ、心より感謝申し上げます。
              地域の中で世代を超えて笑顔になれる空間を目指して、次回以降もさらに楽しんでいただけるよう準備を進めてまいります！
            </p>
          </div>

        </section>

        {/* Flyer Archive Section */}
        <section className="space-y-4 pt-6 border-t border-slate-200/80">
          <h3 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#0D9488]" />
            <span>第1回 イベントチラシ（告知ポスター）</span>
          </h3>

          <div className="bg-slate-50/90 rounded-3xl p-5 border border-slate-200/80 flex flex-col sm:flex-row items-center gap-6">
            <div className="w-36 md:w-44 shrink-0 rounded-2xl overflow-hidden border border-slate-200 shadow-md group relative">
              <a 
                href={flyerPhoto} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={flyerPhoto}
                  alt="第1回あわボ！チラシ"
                  className="w-full h-auto object-cover group-hover:scale-105 transition duration-300"
                  referrerPolicy="no-referrer"
                />
              </a>
            </div>

            <div className="space-y-3 text-left flex-1">
              <span className="bg-teal-500/10 text-[#0D9488] text-[10px] font-black px-2.5 py-0.5 rounded-md border border-teal-200/50">
                広報チラシ・アーカイブ
              </span>
              <h4 className="font-black text-slate-900 text-base">
                第1回 AWABO（あわボ！）開催告知チラシ
              </h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                阿波市内の各公共施設や店舗様にて掲示・配布させていただいた公式チラシです。
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <a
                  href="/images/第1回あわボ！チラシ.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-extrabold text-xs px-3.5 py-2 rounded-xl transition shadow-sm"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#0D9488]" />
                  <span>チラシを別タブで開く</span>
                </a>
                <a
                  href="/images/第1回あわボ！チラシ.png"
                  download="第1回あわボ！チラシ.png"
                  className="inline-flex items-center gap-1.5 bg-[#0D9488] hover:bg-[#0D9488]/90 text-white font-extrabold text-xs px-3.5 py-2 rounded-xl transition shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>画像を保存</span>
                </a>
              </div>
            </div>
          </div>
        </section>

      </article>

      {/* Back button & Next Event Prompt */}
      <div className="text-center space-y-4 no-print pt-4">
        <div className="bg-gradient-to-r from-amber-400/20 via-orange-400/20 to-teal-400/20 rounded-2.5xl p-6 border border-amber-300/60 max-w-2xl mx-auto space-y-3">
          <p className="text-xs font-black text-amber-800 uppercase tracking-wider">次回（第2回）のご案内</p>
          <h4 className="text-lg md:text-xl font-black text-slate-900">
            次回「AWABI（あわボ！）第2回交流会」は2026年 9月20日(日) に開催決定！
          </h4>
          <p className="text-xs md:text-sm text-slate-600 font-medium">
            会場は「阿波市立市場図書館」！途中入退室OK・参加費無料です。
          </p>
          <button
            onClick={() => {
              setActiveTab('info');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="mt-2 inline-flex items-center gap-2 bg-[#0D9488] hover:bg-[#0D9488]/90 text-white font-black text-xs md:text-sm px-6 py-3 rounded-xl transition shadow-md active:scale-95 cursor-pointer"
          >
            <span>次回開催案内へ戻る</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </motion.div>
  );
};

