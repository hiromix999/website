import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Heart, 
  Smile, 
  Users, 
  Package, 
  AlertTriangle, 
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';

interface RulesPageProps {
  onCopyUrl?: () => void;
}

export const RulesPage: React.FC<RulesPageProps> = () => {
  useEffect(() => {
    document.title = '守っていただきたいルール・マナー | 阿波市ボードゲーム交流会「AWABO（あわボ！）」';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

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
      <div className="glass-panel rounded-3.5xl p-6 md:p-10 space-y-8 shadow-lg border-white/80 relative overflow-hidden text-left bg-white/70">
        
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
              ※万一、破損やパーツの紛失が発生した場合、主催者側では責任を負いかねますので、参加者同士リスペクトを持って管理してください。
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
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-[#0D9488] font-bold text-sm transition cursor-pointer"
        >
          <span>トップページへ戻る</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </motion.div>
  );
};
