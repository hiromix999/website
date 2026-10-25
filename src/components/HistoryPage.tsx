import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
  BookOpen,
  Smile,
  Award,
  Instagram,
  Clock,
  FileText,
  Mail
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import photo1 from '../assets/images/IMG_20260809_153756209_AE.jpg';
import photo2 from '../assets/images/IMG_20260809_155800088_MP_AE.jpg';
import photo3 from '../assets/images/IMG_20260809_155812590_AE.jpg';
import photo4 from '../assets/images/IMG_20260809_155845285_AE.jpg';

const flyerPhoto = '/images/flyer/第1回あわボ！チラシ.png';
const flyer2Photo = '/images/flyer/第2回あわボ！チラシs.png';
const flyer2Pdf = '/images/flyer/第2回あわボ！チラシ.pdf';
const flyer3Photo = '/images/flyer/第3回あわボ！チラシ.png';
const flyer3Pdf = '/images/flyer/第3回あわボ！チラシ.pdf';
const flyerToshokanPhoto = '/images/flyer/20261011_としょかんまつり.png';
const flyer4Photo = '/images/flyer/第4回AWABOチラシ.png';
const flyer4Pdf = '/images/flyer/第4回AWABOチラシ.pdf';

interface HistoryPageProps {
  setActiveTab?: (tab: 'info' | 'greetings' | 'rules' | 'history') => void;
}

interface PhotoItem {
  src: string;
  fallbackSrc?: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
}

export const HistoryPage: React.FC<HistoryPageProps> = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const [activeSession, setActiveSession] = useState<'event3' | 'event2' | 'event1'>('event3');

  useEffect(() => {
    if (activeSession === 'event3') {
      document.title = '開催履歴・第3回レポート | 阿波市ボードゲーム交流会「AWABO（あわボ！）」';
    } else if (activeSession === 'event2') {
      document.title = '開催履歴・第2回レポート | 阿波市ボードゲーム交流会「AWABO（あわボ！）」';
    } else {
      document.title = '開催履歴・第1回レポート | 阿波市ボードゲーム交流会「AWABO（あわボ！）」';
    }
  }, [activeSession]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // 第3回のスナップ写真（全5枚：会場風景、最新型アナログ集計システム、ナショナルエコノミー、ラミーキューブ、たんぐらむ）
  const event3Photos: PhotoItem[] = [
    {
      src: '/images/event_archive/20261004_3/IMG_20261004_163703429_HDR_AE~3.jpg',
      title: '🏛️ 会場の様子',
      subtitle: '雨が降りしきる中でしたがたくさんの方にお越しいただきました',
      description: '当日は雨が降りしきるあいにくの天候でしたが、足元の悪いなか34名ものたくさんの皆様にお越しいただきました！土成中央公民館の広々とした会場で、各テーブルごとに心地よい笑い声と真剣な熱戦が繰り広げられました。',
      badge: '会場風景'
    },
    {
      src: '/images/event_archive/20261004_3/IMG_20261004_170829034_HDR_AE.jpg',
      title: '📊 最新型アナログ集計システム',
      subtitle: '今回初導入！来場者数34名をセルフで記録した最新型アナログ集計システム',
      description: '今回初導入となった最新型のアナログ集計システム！来場された皆様が自らセルフで記録する参加型システムで、子どもからシニアまで温かく記録していただきました。最終集計では「34名」の来場が記録され、第3回も大盛況の交流会となりました。',
      badge: 'セルフ集計システム'
    },
    {
      src: '/images/event_archive/20261004_3/IMG_20261004_150436437_AE.jpg',
      title: '🏭 経済・雇用シミュレーション「ナショナルエコノミー」',
      subtitle: '労働者を雇い事業を拡大！給料支払いに追われる本格ワーカープレイスメント',
      description: 'ワーカーを配置して建物を建て、事業を発展させながら毎ラウンドの賃金を工面する日本発の傑作経済ゲーム。第2回に続き第3回でも熱烈なファンが集まり、綿密な経営戦略と思考戦で大いに盛り上がりました。',
      badge: '経済・重量級'
    },
    {
      src: '/images/event_archive/20261004_3/IMG_20261004_150424910_AE.jpg',
      title: '🧩 頭脳派タイルゲーム「ラミーキューブ」',
      subtitle: 'もはや定番。',
      description: 'あわボ！でも「もはや定番」となった世界的人気タイルゲーム。数字の組み合わせや場のタイルの組み替え（アレンジ）に大人も子どもも熱中！一度始めると何戦も続けてプレイされる不動の人気卓でした。',
      badge: '定番タイルゲーム'
    },
    {
      src: '/images/event_archive/20261004_3/IMG_20261004_150411267_AE.jpg',
      title: '🧩 図形パズル「たんぐらむ」',
      subtitle: '小さいお子さんも絵合わせで遊んでいました。',
      description: '木製ピースを組み合わせて様々なかたちを作る定番シルエットパズル「たんぐらむ」。小さいお子さんも夢中になって絵合わせで楽しそうに遊んでいました。',
      badge: '知育・図形パズル'
    }
  ];

  // 第1回のスナップ写真
  const event1Photos: PhotoItem[] = [
    {
      src: '/images/event_archive/20260809_1/IMG_20260809_153756209_AE.jpg',
      fallbackSrc: photo1,
      title: '🐱 クソデカ短歌',
      subtitle: 'ビッグなキーワードを組み合わせて詠む大喜利カードゲーム',
      description: 'デカすぎるキーワードでどれだけナイスな短歌が読めるか！？という大喜利ゲーム。意外な組み合わせに笑いが起こっていました。',
      badge: '大喜利ゲーム'
    },
    {
      src: '/images/event_archive/20260809_1/IMG_20260809_155800088_MP_AE.jpg',
      fallbackSrc: photo2,
      title: '🟡 アクションゲーム「バウンス・オフ！」',
      subtitle: 'ピンポン玉を弾ませて狙い通りの形を作る白熱バトル',
      description: 'ワンバウンドさせてピンポン玉を狙い通りに入れる白熱バトル。大人も子どもも夢中でボールを弾ませていました。',
      badge: 'アクション'
    },
    {
      src: '/images/event_archive/20260809_1/IMG_20260809_155812590_AE.jpg',
      fallbackSrc: photo3,
      title: '🧩 テトリスボードゲーム',
      subtitle: 'ブロックを組み合わせて消していく落ちゲー風パズル',
      description: 'ブロックを落として横一列を作る落ちゲー風パズル。このボードゲームで初めてテトリスを知った子もいました。',
      badge: 'パズル'
    },
    {
      src: '/images/event_archive/20260809_1/IMG_20260809_155845285_AE.jpg',
      fallbackSrc: photo4,
      title: '🃏 会話型心理ゲーム「itoレインボー」',
      subtitle: '数字を言葉に例えて伝える大人気協力カードゲーム',
      description: '「好きなおにぎりの具」などのテーマで数字を言葉に例えて小さい順に手札を出す協力ゲーム。ぴったり数字が揃った瞬間は大爆笑！',
      badge: '会話ゲーム'
    }
  ];

  // 第2回のスナップ写真（全9枚：会場風景＆当日のプレイゲーム紹介）
  const event2Photos: PhotoItem[] = [
    {
      src: `${encodeURI('/images/event_archive/20260920_2/20260920_会場.jpg')}?t=${Date.now()}`,
      title: '🏛️ 会場全体の熱気・大盛況の様子',
      subtitle: '46名が来場！机が足りなくなるほどの賑わいと笑顔',
      description: '子どもから大人、シニアの方まで46名もの皆様にお集まりいただき、会場の市場図書館は大盛況！どのテーブルも笑顔と歓声に包まれ、机が埋まるほどの熱気あふれる時間となりました。',
      badge: '会場風景'
    },
    {
      src: '/images/event_archive/20260920_2/IMG_20260920_131246001_HDR_AEs.jpg',
      title: '🧩 数字パズルの金字塔「ラミィキューブ」',
      subtitle: '世代を超えて愛される世界的人気タイルゲーム',
      description: '同じ数字や連番のセットを作って手元のタイルをいち早く出し切るパズルゲーム。場のタイルを自由に組み替える「アレンジ」のひらめきに、老若男女問わず大熱中！',
      badge: 'タイルパズル'
    },
    {
      src: '/images/event_archive/20260920_2/IMG_20260920_131748571_HDR_AE.jpg',
      title: '🏁 ハチャメチャ予想レース「ホット・ストリーク」',
      subtitle: 'マスコットたちが転倒・逆走！？大波乱の予想ベッティングゲーム',
      description: '個性豊かなマスコットたちが長いコースを疾走！カードのめくりで進む中、転んだり逆走したり予想不能なハプニングが連続。どのキャラが勝つか、どんなハプニングが起きるかに賭けて、ハプニングが起こるたびに大歓声で盛り上がりました！',
      badge: 'レース＆予想'
    },
    {
      src: '/images/event_archive/20260920_2/IMG_20260920_140922067_HDR_AE.jpg',
      title: '⚡ スピード勝負！「ドブル ポケモン」',
      subtitle: '親子で真剣勝負！共通のポケモンをいち早く見つけろ！',
      description: 'どのカード同士でも必ず1匹だけ同じポケモンがいる不思議なカードゲーム。お子さんも大人も身を乗り出し、「ピカチュウ！」「いた！」と素早く指をさして白熱しました。',
      badge: 'スピード勝負'
    },
    {
      src: '/images/event_archive/20260920_2/IMG_20260920_141003647_HDR_AE.jpg',
      title: '🌍 大自然の生態系を育む大作「EARTH（アース）」',
      subtitle: '美麗な動植物カードと島を発展させる本格エンジンビルド',
      description: '島と気候を選び、植物や動物、大地を育てて自分だけの豊かな生態系を作り上げる大人気ネイチャーゲーム。カラフルな木製駒やキャノピーが卓いっぱいに広がり、じっくりと戦略を競いました。',
      badge: '本格拡大再生産'
    },
    {
      src: '/images/event_archive/20260920_2/IMG_20260920_141924812_AE.jpg',
      title: '👑 領地を広げるパズル「キングドミノ」',
      subtitle: '5×5の理想の王国を築くドイツ年間ゲーム大賞受賞作',
      description: 'ドミノ状の地形タイルを選んでお城を中心に繋ぎ、麦畑や湖など同じ地形と王冠を集めて得点を競う傑作ゲーム。シンプルなルールながら「どのタイルを取るか」の駆け引きが光りました。',
      badge: 'タイル配置'
    },
    {
      src: '/images/event_archive/20260920_2/IMG_20260920_153354024_AE.jpg',
      title: '🎨 心を通わせる連想ゲーム「ディクシット（Dixit）」',
      subtitle: '幻想的なイラストと言葉のニュアンスを楽しむ名作',
      description: '語り部が出した曖昧なヒントから、どの絵が語り部のものかを当てるコミュニケーションゲーム。感性の違いや意外な着眼点に「なるほど！」「そう来たか！」と笑顔と驚きが広がりました。',
      badge: '連想・会話'
    },
    {
      src: '/images/event_archive/20260920_2/IMG_20260920_171143292_AE.jpg',
      title: '🐱 宝石をめぐる心理戦「ぬすっとキャット」',
      subtitle: 'ネコ怪盗たちが金庫の宝石を狙って読み合う競りカードゲーム！',
      description: 'かわいいネコ怪盗となり、手札の数字カードを出して金庫からキラキラの宝石を狙い合うオークション＆心理戦ゲーム。「いつ本気の手札を出すか」の読み合いに思わず熱い駆け引きが生まれました。',
      badge: '心理戦・競り'
    },
    {
      src: '/images/event_archive/20260920_2/IMG_20260920_172359417_HDR_AE.jpg',
      title: '🏭 経済・雇用シミュレーション「ナショナルエコノミー」',
      subtitle: '給料の支払いに追われながら企業を発展させる濃厚ワーカープレイスメント',
      description: '労働者を配置して建物を建て、事業を拡大しながらラウンドごとの「賃金」を工面する日本発の傑作経済カードゲーム。終盤の白熱した思考戦と資金繰りのリアルな面白さに、じっくり派のプレイヤーも大満足でした。',
      badge: '経済ワーカープレイス'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      className="max-w-4xl mx-auto space-y-8 pb-16 text-left"
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
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (selectedPhoto.fallbackSrc && !target.dataset.fallbackTried) {
                      target.dataset.fallbackTried = 'true';
                      target.src = selectedPhoto.fallbackSrc;
                    }
                  }}
                />
              </div>
              <div className="p-6 space-y-3 bg-white text-left">
                <div className="flex items-center gap-2">
                  <span className="bg-amber-500/10 text-amber-700 text-xs font-black px-2.5 py-0.5 rounded-full border border-amber-300/50">
                    {selectedPhoto.badge}
                  </span>
                  <p className="text-xs font-bold text-slate-400">
                    {activeSession === 'event3' ? '第3回あわボ！ 当日スナップ' : activeSession === 'event2' ? '第2回あわボ！ 当日スナップ' : '第1回あわボ！ 当日スナップ'}
                  </p>
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
          EVENT REPORT & ARCHIVE
        </div>
        <h1 className="text-3xl md:text-4.5xl font-black text-slate-900 tracking-tight">
          過去の開催履歴・レポート
        </h1>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed pt-1 font-medium">
          阿波市ボードゲーム交流会「AWABO（あわボ！）」の開催レポート＆写真記録です。
        </p>
      </div>

      {/* Session Navigation Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => setActiveSession('event3')}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-black text-sm md:text-base transition-all duration-200 cursor-pointer shadow-sm ${
            activeSession === 'event3'
              ? 'bg-[#0D9488] text-white shadow-md shadow-teal-700/20 ring-2 ring-teal-500 ring-offset-2'
              : 'bg-white text-slate-700 hover:bg-teal-50/60 border border-slate-200'
          }`}
        >
          <Sparkles className={`w-4 h-4 ${activeSession === 'event3' ? 'text-amber-300' : 'text-amber-500'}`} />
          <span>第3回レポート</span>
          <span className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${
            activeSession === 'event3' ? 'bg-amber-400 text-slate-900' : 'bg-amber-100 text-amber-800'
          }`}>
            NEW 34名来場
          </span>
        </button>

        <button
          onClick={() => setActiveSession('event2')}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-black text-sm md:text-base transition-all duration-200 cursor-pointer shadow-sm ${
            activeSession === 'event2'
              ? 'bg-[#0D9488] text-white shadow-md shadow-teal-700/20 ring-2 ring-teal-500 ring-offset-2'
              : 'bg-white text-slate-700 hover:bg-teal-50/60 border border-slate-200'
          }`}
        >
          <Calendar className="w-4 h-4" />
          <span>第2回レポート</span>
          <span className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${
            activeSession === 'event2' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
          }`}>
            46名来場
          </span>
        </button>

        <button
          onClick={() => setActiveSession('event1')}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-black text-sm md:text-base transition-all duration-200 cursor-pointer shadow-sm ${
            activeSession === 'event1'
              ? 'bg-[#0D9488] text-white shadow-md shadow-teal-700/20 ring-2 ring-teal-500 ring-offset-2'
              : 'bg-white text-slate-700 hover:bg-teal-50/60 border border-slate-200'
          }`}
        >
          <Calendar className="w-4 h-4" />
          <span>第1回レポート</span>
          <span className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${
            activeSession === 'event1' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
          }`}>
            約40名来場
          </span>
        </button>
      </div>

      {/* ARTICLE: 第3回レポート */}
      {activeSession === 'event3' && (
        <article className="glass-panel rounded-3.5xl p-6 md:p-10 space-y-10 shadow-xl border-white/80 relative overflow-hidden bg-white/90">
          {/* Article Meta Header */}
          <header className="space-y-4 pb-6 border-b border-slate-200/80">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-1.5 bg-slate-900 text-amber-400 text-xs font-black px-3.5 py-1 rounded-full shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>開催終了 公式レポート</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-extrabold text-slate-500">
                <Calendar className="w-4 h-4 text-[#0D9488]" />
                <span>2026年10月4日(日) 13:00〜17:00 開催</span>
              </div>
            </div>

            <h2 className="text-2.5xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              【第3回開催レポート】広々とした土成中央公民館で34名の皆様と熱戦！笑顔と知略が交差した充実の交流会
            </h2>
            <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed bg-teal-50/60 border-l-4 border-[#0D9488] p-4 rounded-r-2xl">
              2026年10月4日(日)、阿波市立土成図書館（土成中央公民館）にて「第3回 あわボ！」を開催いたしました。当日は雨が降りしきる中でしたが、34名のたくさんの皆様にお越しいただきました！今回初導入となった「最新型アナログ集計システム」でのセルフ記録のもと、もはや定番となったラミーキューブ、小さいお子さんも絵合わせで楽しんだたんぐらむ、本格派ナショナルエコノミーまで笑顔と熱気に包まれた4時間となりました。
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
                <div className="flex items-baseline gap-2">
                  <p className="text-2xl md:text-3xl font-black text-[#0D9488]">
                    34名
                  </p>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-md">
                    大好評！
                  </span>
                </div>
                <p className="text-[11px] font-bold text-slate-500 mt-0.5">最新型アナログ集計システムでセルフ集計</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-amber-200/80 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-teal-500 text-white flex items-center justify-center shrink-0 shadow-md">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[11px] font-black text-amber-900 uppercase tracking-wider">開催場所</p>
                <p className="text-base md:text-lg font-black text-slate-900">
                  阿波市立 土成図書館（土成中央公民館）
                </p>
                <p className="text-[11px] font-bold text-slate-500 mt-0.5">ゆったり広々とした快適スペース</p>
              </div>
            </div>
          </section>

          {/* Section: Report Highlights & Flyer */}
          <section className="space-y-6">
            {/* Overview Card */}
            <div className="bg-slate-50/80 rounded-3xl p-6 md:p-8 border border-slate-200/80 space-y-4">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="w-28 sm:w-36 shrink-0 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white">
                  <a href={flyer3Photo} target="_blank" rel="noopener noreferrer" className="block">
                    <img
                      src={flyer3Photo}
                      alt="第3回あわボ！チラシ"
                      className="w-full h-auto object-cover hover:scale-105 transition duration-300"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.dataset.fallbackTried) {
                          target.dataset.fallbackTried = 'true';
                          target.src = '/images/flyer/flyer3.png';
                        }
                      }}
                    />
                  </a>
                </div>
                <div className="space-y-3 text-left">
                  <span className="bg-[#0D9488] text-white text-[11px] font-black px-3 py-1 rounded-full">
                    第3回 開催概要
                  </span>
                  <h4 className="font-black text-slate-900 text-lg md:text-xl">
                    土成中央公民館でのゆったり広々開催
                  </h4>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    第3回は会場を土成中央公民館（土成図書館）に移し、ゆとりのある大スペースを確保して開催いたしました。雨が降りしきるあいにくの空模様でしたが、足元の悪いなか34名ものたくさんの皆様にお越しいただき、今回初導入の最新型アナログ集計システムでセルフ記録を行いました。卓ごとの間隔を広く保てたことで、じっくり思考を巡らせる「ナショナルエコノミー」や定番の「ラミーキューブ」、小さいお子さんも絵合わせで夢中になった「たんぐらむ」など、それぞれのペースで快適にゲームを楽しんでいただきました！
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <a
                      href={flyer3Pdf}
                      download="第3回あわボ！チラシ.pdf"
                      className="inline-flex items-center gap-1.5 bg-[#0D9488] hover:bg-[#0D9488]/90 text-white font-extrabold text-xs px-3.5 py-2 rounded-xl transition shadow-sm"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>チラシPDF保存</span>
                    </a>
                    <a
                      href={flyer3Photo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-extrabold text-xs px-3.5 py-2 rounded-xl transition shadow-2xs"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-[#0D9488]" />
                      <span>チラシ拡大表示</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Photo Gallery Grid Article Highlight */}
            <section className="space-y-6 pt-2">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <h3 className="text-xl md:text-2xl font-black text-slate-900 flex items-center gap-2">
                  <Camera className="w-6 h-6 text-[#0D9488]" />
                  <span>当日のスナップ＆フォトギャラリー（全5枚）</span>
                </h3>
                <span className="text-xs text-slate-400 font-bold flex items-center gap-1">
                  <ZoomIn className="w-3.5 h-3.5 text-[#0D9488]" />
                  <span>タップで高画質拡大</span>
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {event3Photos.map((photo, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedPhoto(photo)}
                    className={`group relative bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-xl transition duration-300 cursor-pointer flex flex-col ${
                      index === 0 ? 'md:col-span-2 border-teal-200/80 bg-gradient-to-b from-white to-teal-50/20' : ''
                    }`}
                  >
                    <div className={`w-full overflow-hidden bg-slate-100 relative ${index === 0 ? 'aspect-[16/9] md:aspect-[21/10]' : 'aspect-[16/10]'}`}>
                      <img
                        src={photo.src}
                        alt={photo.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (photo.fallbackSrc && !target.dataset.fallbackTried) {
                            target.dataset.fallbackTried = 'true';
                            target.src = photo.fallbackSrc;
                          }
                        }}
                      />
                      <div className="absolute top-3 left-3">
                        <span className={`backdrop-blur-md text-[10px] font-black px-3 py-1 rounded-full shadow-md ${
                          index === 0 
                            ? 'bg-[#0D9488] text-white' 
                            : 'bg-slate-900/80 text-amber-300'
                        }`}>
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
                    <div className="p-5 md:p-6 space-y-2 flex-1 flex flex-col justify-between text-left">
                      <div>
                        <h4 className="font-black text-slate-900 text-base md:text-lg lg:text-xl leading-snug group-hover:text-[#0D9488] transition">
                          {photo.title}
                        </h4>
                        <p className="text-xs font-bold text-amber-600 mt-0.5">
                          {photo.subtitle}
                        </p>
                      </div>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed pt-1">
                        {photo.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Organizer Note */}
            <div className="space-y-3 bg-slate-900 text-white p-6 md:p-8 rounded-3xl relative overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/10 rounded-full blur-2xl pointer-events-none"></div>
              <div className="flex items-center gap-2 text-amber-400 text-xs font-black">
                <Heart className="w-4 h-4 fill-amber-400" />
                <span>主催者からのメッセージ</span>
              </div>
              <h4 className="text-lg md:text-xl font-black text-white">
                雨の中、34名もの皆様にご来場いただき心より感謝申し上げます！
              </h4>
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                当日はあいにくの雨模様でしたが、足元の悪いなかたくさんの皆様に土成中央公民館へお越しいただき本当にありがとうございました。
                今回初導入となった最新型アナログ集計システムでのセルフ記録をはじめ、小さなお子様からシニアの方までが笑顔でボードゲームを囲む温かい時間に胸がいっぱいになりました。
                次回開催もより楽しんでいただけるよう準備を進めてまいりますので、どうぞお楽しみに！
              </p>
            </div>

          </section>

          {/* Flyer Archive Section */}
          <section className="space-y-6 pt-6 border-t border-slate-200/80">
            <h3 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#0D9488]" />
              <span>公式イベントチラシ・アーカイブ</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* 3rd Flyer */}
              <div className="bg-gradient-to-br from-teal-50/80 to-amber-50/80 rounded-3xl p-5 border border-teal-200/80 flex flex-col items-center gap-4 shadow-xs">
                <div className="w-full max-w-[160px] rounded-2xl overflow-hidden border border-slate-200 shadow-md group relative bg-white">
                  <a href={flyer3Photo} target="_blank" rel="noopener noreferrer" className="block">
                    <img
                      src={flyer3Photo}
                      alt="第3回あわボ！チラシ"
                      className="w-full h-auto object-cover group-hover:scale-105 transition duration-300"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.dataset.fallbackTried) {
                          target.dataset.fallbackTried = 'true';
                          target.src = '/images/flyer/flyer3.png';
                        }
                      }}
                    />
                  </a>
                </div>

                <div className="space-y-2 text-left w-full">
                  <span className="bg-[#0D9488] text-white text-[10px] font-black px-2.5 py-0.5 rounded-md">
                    第3回 開催
                  </span>
                  <h4 className="font-black text-slate-900 text-sm md:text-base">
                    第3回 開催告知チラシ
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    2026年10月4日(日) 土成図書館開催の公式チラシです。
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <a
                      href={flyer3Pdf}
                      download="第3回あわボ！チラシ.pdf"
                      className="inline-flex items-center gap-1 bg-[#0D9488] hover:bg-[#0D9488]/90 text-white font-extrabold text-xs px-3 py-1.5 rounded-xl transition shadow-sm"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>PDF保存</span>
                    </a>
                    <a
                      href={flyer3Photo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-extrabold text-xs px-2.5 py-1.5 rounded-xl transition shadow-2xs"
                    >
                      <ExternalLink className="w-3 h-3 text-[#0D9488]" />
                      <span>別タブ</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* 2nd Flyer */}
              <div className="bg-slate-50/80 rounded-3xl p-5 border border-slate-200/80 flex flex-col items-center gap-4 shadow-xs">
                <div className="w-full max-w-[160px] rounded-2xl overflow-hidden border border-slate-200 shadow-md group relative bg-white">
                  <a href={flyer2Photo} target="_blank" rel="noopener noreferrer" className="block">
                    <img
                      src={flyer2Photo}
                      alt="第2回あわボ！チラシ"
                      className="w-full h-auto object-cover group-hover:scale-105 transition duration-300"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.dataset.fallbackTried) {
                          target.dataset.fallbackTried = 'true';
                          target.src = '/images/flyer/flyer2.png';
                        }
                      }}
                    />
                  </a>
                </div>

                <div className="space-y-2 text-left w-full">
                  <span className="bg-slate-200 text-slate-700 text-[10px] font-black px-2.5 py-0.5 rounded-md">
                    第2回 アーカイブ
                  </span>
                  <h4 className="font-black text-slate-900 text-sm md:text-base">
                    第2回 開催告知チラシ
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    2026年9月20日(日) 市場図書館開催のチラシです。
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <a
                      href={flyer2Pdf}
                      download="第2回あわボ！チラシ.pdf"
                      className="inline-flex items-center gap-1 bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-extrabold text-xs px-3 py-1.5 rounded-xl transition shadow-2xs"
                    >
                      <Download className="w-3.5 h-3.5 text-[#0D9488]" />
                      <span>PDF保存</span>
                    </a>
                    <a
                      href={flyer2Photo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-extrabold text-xs px-2.5 py-1.5 rounded-xl transition shadow-2xs"
                    >
                      <ExternalLink className="w-3 h-3 text-slate-500" />
                      <span>別タブ</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* 1st Flyer */}
              <div className="bg-slate-50/80 rounded-3xl p-5 border border-slate-200/80 flex flex-col items-center gap-4 shadow-xs">
                <div className="w-full max-w-[160px] rounded-2xl overflow-hidden border border-slate-200 shadow-md group relative bg-white">
                  <a href={flyerPhoto} target="_blank" rel="noopener noreferrer" className="block">
                    <img
                      src={flyerPhoto}
                      alt="第1回あわボ！チラシ"
                      className="w-full h-auto object-cover group-hover:scale-105 transition duration-300"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.dataset.fallbackTried) {
                          target.dataset.fallbackTried = 'true';
                          target.src = '/images/flyer/flyer1.png';
                        }
                      }}
                    />
                  </a>
                </div>

                <div className="space-y-2 text-left w-full">
                  <span className="bg-slate-200 text-slate-700 text-[10px] font-black px-2.5 py-0.5 rounded-md">
                    第1回 アーカイブ
                  </span>
                  <h4 className="font-black text-slate-900 text-sm md:text-base">
                    第1回 開催告知チラシ
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    2026年8月9日(日) 記念すべき第1回チラシです。
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <a
                      href={flyerPhoto}
                      download="第1回あわボ！チラシ.png"
                      className="inline-flex items-center gap-1 bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-extrabold text-xs px-3 py-1.5 rounded-xl transition shadow-2xs"
                    >
                      <Download className="w-3.5 h-3.5 text-[#0D9488]" />
                      <span>画像保存</span>
                    </a>
                    <a
                      href={flyerPhoto}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-extrabold text-xs px-2.5 py-1.5 rounded-xl transition shadow-2xs"
                    >
                      <ExternalLink className="w-3 h-3 text-slate-500" />
                      <span>別タブ</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </article>
      )}

      {/* ARTICLE: 第2回レポート */}
      {activeSession === 'event2' && (
        <article className="glass-panel rounded-3.5xl p-6 md:p-10 space-y-10 shadow-xl border-white/80 relative overflow-hidden bg-white/90">
          {/* Article Meta Header */}
          <header className="space-y-4 pb-6 border-b border-slate-200/80">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-1.5 bg-slate-900 text-amber-400 text-xs font-black px-3.5 py-1 rounded-full shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>開催終了 公式レポート</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-extrabold text-slate-500">
                <Calendar className="w-4 h-4 text-[#0D9488]" />
                <span>2026年9月20日(日) 13:00〜17:30 開催</span>
              </div>
            </div>

            <h2 className="text-2.5xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              【第2回開催レポート】机が足りなくなるほどの大盛況！46名の皆様と熱気にあふれたボードゲーム交流会
            </h2>
            <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed bg-teal-50/60 border-l-4 border-[#0D9488] p-4 rounded-r-2xl">
              2026年9月20日(日)、阿波市立市場図書館にて「第2回 あわボ！」を開催いたしました。ボードゲームは初めてというシニアの方からお子様、ご家族連れまで46名もの方々にご来場いただき、机が足りなくなるほどの大盛況となりました！
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
                <div className="flex items-baseline gap-2">
                  <p className="text-2xl md:text-3xl font-black text-[#0D9488]">
                    46名
                  </p>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-md">
                    大盛況！
                  </span>
                </div>
                <p className="text-[11px] font-bold text-slate-500 mt-0.5">机が足りなくなるほどの熱気！</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-amber-200/80 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-teal-500 text-white flex items-center justify-center shrink-0 shadow-md">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[11px] font-black text-amber-900 uppercase tracking-wider">開催場所</p>
                <p className="text-lg md:text-xl font-black text-slate-900">
                  阿波市立市場図書館
                </p>
                <p className="text-[11px] font-bold text-slate-500 mt-0.5">徳島県阿波市市場町</p>
              </div>
            </div>
          </section>

          {/* Detailed Article Body Paragraphs */}
          <section className="space-y-8 text-slate-700 text-sm md:text-base leading-relaxed font-medium pt-2">
            
            {/* Highlights */}
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-2 border-b-2 border-teal-500/30 pb-2">
                <Smile className="w-5 h-5 text-[#0D9488]" />
                <span>シニアの方も初参加ですぐに夢中に！温かい笑顔の輪</span>
              </h3>
              <p>
                「ボードゲームで遊ぶのは今日が初めて」とおっしゃっていたシニアの方も、丁寧なルール説明を受けてすぐに理解され、笑顔でゲームに参加されていました。
              </p>
              <p>
                世代を超えて子どもから大人、シニアの方まで同じ卓を囲み、真剣な眼差しでカードを選んだり、大笑いしながらダイスを振ったりと、会場のあちこちで自然と楽しいコミュニケーションが生まれていました。
              </p>
              <p>
                予想を大きく上回る46名の皆様にお越しいただき、準備していたテーブルが埋まり「机が足りなくなるほど」の嬉しい悲鳴があがる大盛況となりました。
              </p>
            </div>

            {/* Flyer Feature for 2nd Event */}
            <div className="bg-gradient-to-br from-teal-50/80 via-emerald-50/40 to-amber-50/70 p-6 rounded-3xl border border-teal-200/70 space-y-4">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="w-40 sm:w-48 shrink-0 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white">
                  <a href={flyer2Photo} target="_blank" rel="noopener noreferrer">
                    <img
                      src={flyer2Photo}
                      alt="第2回あわボ！チラシ"
                      className="w-full h-auto object-cover hover:scale-105 transition duration-300"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.dataset.fallbackTried) {
                          target.dataset.fallbackTried = 'true';
                          target.src = '/images/flyer/flyer2.png';
                        }
                      }}
                    />
                  </a>
                </div>
                <div className="space-y-3 text-left">
                  <span className="bg-[#0D9488] text-white text-[11px] font-black px-3 py-1 rounded-full">
                    第2回 開催概要
                  </span>
                  <h4 className="font-black text-slate-900 text-lg md:text-xl">
                    阿波市立市場図書館での初開催
                  </h4>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    第2回目となる今回は会場を阿波市立市場図書館に移し、開催時間も13:00〜17:30へと拡大して実施いたしました。今回から図書館のイベントとして阿波市の広報に掲載されるようになったことで、普段ボードゲームに触れない方も、阿波市の広報を見て参加いただくなど、地域に根づいた温かい交流の場となりました。
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <a
                      href={flyer2Pdf}
                      download="第2回あわボ！チラシ.pdf"
                      className="inline-flex items-center gap-1.5 bg-[#0D9488] hover:bg-[#0D9488]/90 text-white font-extrabold text-xs px-3.5 py-2 rounded-xl transition shadow-sm"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>チラシPDF保存</span>
                    </a>
                    <a
                      href={flyer2Photo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-extrabold text-xs px-3.5 py-2 rounded-xl transition shadow-2xs"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-[#0D9488]" />
                      <span>チラシ拡大表示</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Photo Gallery Grid Article Highlight */}
            <section className="space-y-6 pt-2">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <h3 className="text-xl md:text-2xl font-black text-slate-900 flex items-center gap-2">
                  <Camera className="w-6 h-6 text-[#0D9488]" />
                  <span>当日のスナップ＆フォトギャラリー（全9枚）</span>
                </h3>
                <span className="text-xs text-slate-400 font-bold flex items-center gap-1">
                  <ZoomIn className="w-3.5 h-3.5 text-[#0D9488]" />
                  <span>タップで高画質拡大</span>
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {event2Photos.map((photo, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedPhoto(photo)}
                    className={`group relative bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-xl transition duration-300 cursor-pointer flex flex-col ${
                      index === 0 ? 'md:col-span-2 border-teal-200/80 bg-gradient-to-b from-white to-teal-50/20' : ''
                    }`}
                  >
                    <div className={`w-full overflow-hidden bg-slate-100 relative ${index === 0 ? 'aspect-[16/9] md:aspect-[21/10]' : 'aspect-[16/10]'}`}>
                      <img
                        src={photo.src}
                        alt={photo.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (photo.fallbackSrc && !target.dataset.fallbackTried) {
                            target.dataset.fallbackTried = 'true';
                            target.src = photo.fallbackSrc;
                          }
                        }}
                      />
                      <div className="absolute top-3 left-3">
                        <span className={`backdrop-blur-md text-[10px] font-black px-3 py-1 rounded-full shadow-md ${
                          index === 0 
                            ? 'bg-[#0D9488] text-white' 
                            : 'bg-slate-900/80 text-amber-300'
                        }`}>
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
                    <div className="p-5 md:p-6 space-y-2 flex-1 flex flex-col justify-between text-left">
                      <div>
                        <h4 className="font-black text-slate-900 text-base md:text-lg lg:text-xl leading-snug group-hover:text-[#0D9488] transition">
                          {photo.title}
                        </h4>
                        <p className="text-xs font-bold text-amber-600 mt-0.5">
                          {photo.subtitle}
                        </p>
                      </div>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed pt-1">
                        {photo.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Organizer Note */}
            <div className="space-y-3 bg-slate-900 text-white p-6 md:p-8 rounded-3xl relative overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/10 rounded-full blur-2xl pointer-events-none"></div>
              <div className="flex items-center gap-2 text-amber-400 text-xs font-black">
                <Heart className="w-4 h-4 fill-amber-400" />
                <span>主催者からのメッセージ</span>
              </div>
              <h4 className="text-lg md:text-xl font-black text-white">
                46名もの皆様にご来場いただき、心より感謝申し上げます！
              </h4>
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                机が足りなくなるほどたくさんの方にお集まりいただき、シニアの方からお子様までみんなが笑顔でボードゲームを楽しむ姿を見て、胸がいっぱいになりました。
                次回（第3回）は10月4日(日)に土成図書館（土成中央公民館）にて開催いたします。会場がとても広く人数の心配はまったくありませんので、さらに快適に楽しんでいただけるよう万全の準備をしてお待ちしております！
              </p>
            </div>

          </section>

          {/* Flyer Archive Section */}
          <section className="space-y-6 pt-6 border-t border-slate-200/80">
            <h3 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#0D9488]" />
              <span>公式イベントチラシ・アーカイブ</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* 3rd Flyer (Next / Latest) */}
              <div className="bg-gradient-to-br from-teal-50/80 to-amber-50/80 rounded-3xl p-5 border border-teal-200/80 flex flex-col items-center gap-4 shadow-xs">
                <div className="w-full max-w-[160px] rounded-2xl overflow-hidden border border-slate-200 shadow-md group relative bg-white">
                  <a href={flyer3Photo} target="_blank" rel="noopener noreferrer" className="block">
                    <img
                      src={flyer3Photo}
                      alt="第3回あわボ！チラシ"
                      className="w-full h-auto object-cover group-hover:scale-105 transition duration-300"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.dataset.fallbackTried) {
                          target.dataset.fallbackTried = 'true';
                          target.src = '/images/flyer/flyer3.png';
                        }
                      }}
                    />
                  </a>
                </div>

                <div className="space-y-2 text-left w-full">
                  <span className="bg-[#0D9488] text-white text-[10px] font-black px-2.5 py-0.5 rounded-md">
                    第3回 アーカイブ
                  </span>
                  <h4 className="font-black text-slate-900 text-sm md:text-base">
                    第3回 開催告知チラシ
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    2026年10月4日(日) 土成図書館開催の公式チラシです。
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <a
                      href={flyer3Pdf}
                      download="第3回あわボ！チラシ.pdf"
                      className="inline-flex items-center gap-1 bg-[#0D9488] hover:bg-[#0D9488]/90 text-white font-extrabold text-xs px-3 py-1.5 rounded-xl transition shadow-sm"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>PDF保存</span>
                    </a>
                    <a
                      href={flyer3Photo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-extrabold text-xs px-2.5 py-1.5 rounded-xl transition shadow-2xs"
                    >
                      <ExternalLink className="w-3 h-3 text-[#0D9488]" />
                      <span>別タブ</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* 2nd Flyer (This Event) */}
              <div className="bg-teal-50/90 rounded-3xl p-5 border-2 border-teal-300/80 flex flex-col items-center gap-4 shadow-sm">
                <div className="w-full max-w-[160px] rounded-2xl overflow-hidden border border-slate-200 shadow-md group relative bg-white">
                  <a href={flyer2Photo} target="_blank" rel="noopener noreferrer" className="block">
                    <img
                      src={flyer2Photo}
                      alt="第2回あわボ！チラシ"
                      className="w-full h-auto object-cover group-hover:scale-105 transition duration-300"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.dataset.fallbackTried) {
                          target.dataset.fallbackTried = 'true';
                          target.src = '/images/flyer/flyer2.png';
                        }
                      }}
                    />
                  </a>
                </div>

                <div className="space-y-2 text-left w-full">
                  <span className="bg-amber-500 text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded-md">
                    第2回 今回のチラシ
                  </span>
                  <h4 className="font-black text-slate-900 text-sm md:text-base">
                    第2回 開催告知チラシ
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    2026年9月20日(日) 市場図書館開催の公式チラシです。
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <a
                      href={flyer2Pdf}
                      download="第2回あわボ！チラシ.pdf"
                      className="inline-flex items-center gap-1 bg-[#0D9488] hover:bg-[#0D9488]/90 text-white font-extrabold text-xs px-3 py-1.5 rounded-xl transition shadow-sm"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>PDF保存</span>
                    </a>
                    <a
                      href={flyer2Photo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-extrabold text-xs px-2.5 py-1.5 rounded-xl transition shadow-2xs"
                    >
                      <ExternalLink className="w-3 h-3 text-[#0D9488]" />
                      <span>別タブ</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* 1st Flyer (Archive) */}
              <div className="bg-slate-50/90 rounded-3xl p-5 border border-slate-200/80 flex flex-col items-center gap-4 shadow-xs">
                <div className="w-full max-w-[160px] rounded-2xl overflow-hidden border border-slate-200 shadow-md group relative bg-white">
                  <a href={flyerPhoto} target="_blank" rel="noopener noreferrer" className="block">
                    <img
                      src={flyerPhoto}
                      alt="第1回あわボ！チラシ"
                      className="w-full h-auto object-cover group-hover:scale-105 transition duration-300"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.dataset.fallbackTried) {
                          target.dataset.fallbackTried = 'true';
                          target.src = '/images/flyer/flyer1.png';
                        }
                      }}
                    />
                  </a>
                </div>

                <div className="space-y-2 text-left w-full">
                  <span className="bg-slate-200 text-slate-700 text-[10px] font-black px-2.5 py-0.5 rounded-md">
                    第1回 アーカイブ
                  </span>
                  <h4 className="font-black text-slate-900 text-sm md:text-base">
                    第1回 開催告知チラシ
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    2026年8月9日(日) 記念すべき第1回チラシです。
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <a
                      href={flyerPhoto}
                      download="第1回あわボ！チラシ.png"
                      className="inline-flex items-center gap-1 bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-extrabold text-xs px-3 py-1.5 rounded-xl transition shadow-2xs"
                    >
                      <Download className="w-3.5 h-3.5 text-[#0D9488]" />
                      <span>画像保存</span>
                    </a>
                    <a
                      href={flyerPhoto}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-extrabold text-xs px-2.5 py-1.5 rounded-xl transition shadow-2xs"
                    >
                      <ExternalLink className="w-3 h-3 text-slate-500" />
                      <span>別タブ</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </article>
      )}

      {/* ARTICLE: 第1回レポート */}
      {activeSession === 'event1' && (
        <article className="glass-panel rounded-3.5xl p-6 md:p-10 space-y-10 shadow-xl border-white/80 relative overflow-hidden bg-white/90">
          
          {/* Article Meta Header */}
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
              {event1Photos.map((photo, index) => (
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
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (photo.fallbackSrc && !target.dataset.fallbackTried) {
                          target.dataset.fallbackTried = 'true';
                          target.src = photo.fallbackSrc;
                        }
                      }}
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

            {/* Section 2: Participant Quotes */}
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

            {/* Section 3: Organizer Note */}
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
          <section className="space-y-6 pt-6 border-t border-slate-200/80">
            <h3 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#0D9488]" />
              <span>公式イベントチラシ・アーカイブ</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* 3rd Flyer (Latest) */}
              <div className="bg-gradient-to-br from-teal-50/80 to-amber-50/80 rounded-3xl p-5 border border-teal-200/80 flex flex-col items-center gap-4 shadow-xs">
                <div className="w-full max-w-[160px] rounded-2xl overflow-hidden border border-slate-200 shadow-md group relative bg-white">
                  <a href={flyer3Photo} target="_blank" rel="noopener noreferrer" className="block">
                    <img
                      src={flyer3Photo}
                      alt="第3回あわボ！チラシ"
                      className="w-full h-auto object-cover group-hover:scale-105 transition duration-300"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.dataset.fallbackTried) {
                          target.dataset.fallbackTried = 'true';
                          target.src = '/images/flyer/flyer3.png';
                        }
                      }}
                    />
                  </a>
                </div>

                <div className="space-y-2 text-left w-full">
                  <span className="bg-teal-600 text-white text-[10px] font-black px-2.5 py-0.5 rounded-md">
                    第3回 最新チラシ
                  </span>
                  <h4 className="font-black text-slate-900 text-sm md:text-base">
                    第3回 開催告知チラシ
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    2026年10月4日(日) 土成図書館開催の公式チラシです。
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <a
                      href={flyer3Pdf}
                      download="第3回あわボ！チラシ.pdf"
                      className="inline-flex items-center gap-1 bg-[#0D9488] hover:bg-[#0D9488]/90 text-white font-extrabold text-xs px-3 py-1.5 rounded-xl transition shadow-sm"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>PDF保存</span>
                    </a>
                    <a
                      href={flyer3Photo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-extrabold text-xs px-2.5 py-1.5 rounded-xl transition shadow-2xs"
                    >
                      <ExternalLink className="w-3 h-3 text-[#0D9488]" />
                      <span>別タブ</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* 2nd Flyer (Archive) */}
              <div className="bg-slate-50/90 rounded-3xl p-5 border border-slate-200/80 flex flex-col items-center gap-4 shadow-xs">
                <div className="w-full max-w-[160px] rounded-2xl overflow-hidden border border-slate-200 shadow-md group relative bg-white">
                  <a href={flyer2Photo} target="_blank" rel="noopener noreferrer" className="block">
                    <img
                      src={flyer2Photo}
                      alt="第2回あわボ！チラシ"
                      className="w-full h-auto object-cover group-hover:scale-105 transition duration-300"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.dataset.fallbackTried) {
                          target.dataset.fallbackTried = 'true';
                          target.src = '/images/flyer/flyer2.png';
                        }
                      }}
                    />
                  </a>
                </div>

                <div className="space-y-2 text-left w-full">
                  <span className="bg-slate-200 text-slate-700 text-[10px] font-black px-2.5 py-0.5 rounded-md">
                    第2回 アーカイブ
                  </span>
                  <h4 className="font-black text-slate-900 text-sm md:text-base">
                    第2回 開催告知チラシ
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    2026年9月20日(日) 市場図書館開催の公式チラシです。
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <a
                      href={flyer2Pdf}
                      download="第2回あわボ！チラシ.pdf"
                      className="inline-flex items-center gap-1 bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-extrabold text-xs px-3 py-1.5 rounded-xl transition shadow-2xs"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>PDF保存</span>
                    </a>
                    <a
                      href={flyer2Photo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-extrabold text-xs px-2.5 py-1.5 rounded-xl transition shadow-2xs"
                    >
                      <ExternalLink className="w-3 h-3 text-[#0D9488]" />
                      <span>別タブ</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* 1st Flyer (Archive) */}
              <div className="bg-slate-50/90 rounded-3xl p-5 border border-slate-200/80 flex flex-col items-center gap-4 shadow-xs">
                <div className="w-full max-w-[160px] rounded-2xl overflow-hidden border border-slate-200 shadow-md group relative bg-white">
                  <a href={flyerPhoto} target="_blank" rel="noopener noreferrer" className="block">
                    <img
                      src={flyerPhoto}
                      alt="第1回あわボ！チラシ"
                      className="w-full h-auto object-cover group-hover:scale-105 transition duration-300"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.dataset.fallbackTried) {
                          target.dataset.fallbackTried = 'true';
                          target.src = '/images/flyer/flyer1.png';
                        }
                      }}
                    />
                  </a>
                </div>

                <div className="space-y-2 text-left w-full">
                  <span className="bg-slate-200 text-slate-700 text-[10px] font-black px-2.5 py-0.5 rounded-md">
                    第1回 アーカイブ
                  </span>
                  <h4 className="font-black text-slate-900 text-sm md:text-base">
                    第1回 開催告知チラシ
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    2026年8月9日(日) 記念すべき第1回チラシです。
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <a
                      href={flyerPhoto}
                      download="第1回あわボ！チラシ.png"
                      className="inline-flex items-center gap-1 bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-extrabold text-xs px-3 py-1.5 rounded-xl transition shadow-2xs"
                    >
                      <Download className="w-3.5 h-3.5 text-[#0D9488]" />
                      <span>画像保存</span>
                    </a>
                    <a
                      href={flyerPhoto}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-extrabold text-xs px-2.5 py-1.5 rounded-xl transition shadow-2xs"
                    >
                      <ExternalLink className="w-3 h-3 text-slate-500" />
                      <span>別タブ</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </article>
      )}

      {/* Next Event Prompt */}
      <div className="space-y-6 no-print pt-4 max-w-2xl mx-auto">
        {/* 第4回 Event Announcement Card */}
        <div className="bg-gradient-to-br from-amber-500/15 via-teal-500/10 to-orange-500/15 rounded-3xl p-6 md:p-8 border-2 border-amber-300 shadow-md text-left space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-950 text-xs font-black px-3.5 py-1 rounded-full shadow-xs">
              🎲 次回開催決定！
            </span>
            <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-md">
              参加費無料・手ぶらOK
            </span>
          </div>

          <div>
            <h4 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
              AWABO第4回交流会 開催決定！
            </h4>
            <p className="text-xs md:text-sm text-slate-700 font-medium leading-relaxed mt-2">
              初心者の方からボードゲーム好きの方まで、どなたでも気軽に楽しめる交流会です。スタッフや参加者の皆で分かりやすくルールを説明しながら遊びます✨ 途中参加・途中退出もOKですので、お気軽にお立ち寄りください！
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-5 bg-white/80 p-4 rounded-2xl border border-amber-200/80 shadow-inner">
            <div className="w-28 sm:w-32 shrink-0 rounded-xl overflow-hidden border border-slate-200 shadow-md group relative bg-white">
              <a href={flyer4Photo} target="_blank" rel="noopener noreferrer" className="block">
                <img
                  src={flyer4Photo}
                  alt="第4回AWABOチラシ"
                  className="w-full h-auto object-cover group-hover:scale-105 transition duration-300"
                />
              </a>
            </div>
            <div className="space-y-2 text-left w-full text-xs md:text-sm">
              <div className="flex items-center gap-2 text-slate-800 font-extrabold">
                <Calendar className="w-4 h-4 text-rose-500 shrink-0" />
                <span>2026年 11月29日(日)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-800 font-extrabold">
                <Clock className="w-4 h-4 text-teal-600 shrink-0" />
                <span>13:00 〜 17:00</span>
              </div>
              <div className="flex items-start gap-2 text-slate-800 font-extrabold">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <p>阿波市立市場図書館</p>
                  <p className="text-[11px] text-slate-500 font-normal">徳島県阿波市市場町市場字上野段212-2</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                <a
                  href={flyer4Photo}
                  download="第4回AWABOチラシ.png"
                  className="inline-flex items-center gap-1 bg-[#0D9488] hover:bg-[#0D9488]/90 text-white font-extrabold text-xs px-3 py-1.5 rounded-xl transition shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>チラシ画像保存</span>
                </a>
                <a
                  href={flyer4Pdf}
                  download="第4回AWABOチラシ.pdf"
                  className="inline-flex items-center gap-1 bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-xs px-3 py-1.5 rounded-xl transition shadow-sm"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>PDF保存</span>
                </a>
                <a
                  href={flyer4Photo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-extrabold text-xs px-2.5 py-1.5 rounded-xl transition shadow-2xs"
                >
                  <ExternalLink className="w-3 h-3 text-[#0D9488]" />
                  <span>拡大</span>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-amber-200/60 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
              <Mail className="w-4 h-4 text-teal-600 shrink-0" />
              <a href="mailto:info@awa-bo.com" className="hover:underline">
                <span>お問い合わせ：info@awa-bo.com</span>
              </a>
            </div>
            <a
              href="https://www.instagram.com/hironanokamo/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-extrabold text-xs px-4 py-2 rounded-xl transition shadow-sm cursor-pointer"
            >
              <Instagram className="w-4 h-4" />
              <span>公式Instagram (@hironanokamo)</span>
              <ExternalLink className="w-3 h-3 text-white/80" />
            </a>
          </div>
        </div>

        {/* Back button */}
        <div className="text-center pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#0D9488] hover:bg-[#0D9488]/90 text-white font-black text-xs md:text-sm px-6 py-3 rounded-xl transition shadow-md active:scale-95 cursor-pointer"
          >
            <span>トップページへ戻る</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

    </motion.div>
  );
};
