import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Award, 
  Smile, 
  ArrowRight, 
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';

interface GreetingsPageProps {
  onCopyUrl?: () => void;
}

export const GreetingsPage: React.FC<GreetingsPageProps> = () => {
  useEffect(() => {
    document.title = 'ごあいさつ | 阿波市ボードゲーム交流会「AWABO（あわボ！）」';
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
          <Heart className="w-8 h-8 text-[#0D9488]" />
        </div>
        <h1 className="text-3xl md:text-4.5xl font-black text-slate-900 tracking-tight">
          ごあいさつ
        </h1>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed pt-2 font-medium">
          ボードゲーム交流会「AWABO（あわボ！）」の立ち上げに込めた、私たちの「強い思い」をお伝えします。
        </p>
      </div>

      {/* Main message card */}
      <div className="glass-panel rounded-3.5xl p-6 md:p-10 space-y-8 shadow-lg border-white/80 relative overflow-hidden text-left bg-white/70">
        
        {/* Subtle decorative elements */}
        <div className="absolute right-[-20px] top-[-20px] text-[150px] select-none opacity-[0.03] font-black pointer-events-none text-teal-800 rotate-12">
          ★
        </div>
        
        <div className="space-y-6 max-w-3xl">
          <h2 className="text-xl md:text-2xl font-black text-[#0D9488] leading-snug">
            ボードゲーム交流会AWABO（あわボ！）イベントページへようこそ！
          </h2>
          <div className="space-y-3">
            <p className="text-slate-700 text-sm md:text-base leading-relaxed font-semibold">
              私たちがこの交流会を立ち上げたのには、ある「強い思い」があります。
            </p>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed font-semibold">
              それは、ボードゲームには<strong>人と人をつなぎ、日常をちょっぴり豊かにする素晴らしい力</strong>があると信じているからです。
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200/50 space-y-4">
            <h3 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#0D9488] rounded-full" />
              なぜ、ここ「阿波市」で始めるのか？
            </h3>
            <div className="text-slate-600 text-sm md:text-base leading-relaxed space-y-4 font-medium">
              <p>
                徳島県内で行われているボードゲームのイベントや交流会の多くは、徳島市内に近いエリアに集中しています。県西部では、気軽に遊べる場所やイベントがあまり開催されていないのが現状です。
              </p>
              <p className="text-[#0D9488] font-black italic bg-teal-500/[0.03] border-l-4 border-[#0D9488] p-3.5 rounded-r-2xl">
                「こんなに素晴らしい体験ができるボードゲームを、県西部の人たちにももっと身近に楽しんでほしい！」
              </p>
              <p>
                そんな強い思いから、私たちはここ阿波市で「AWABO（あわボ！）」をスタートさせることにしました。
              </p>
              <div className="space-y-2 pt-2 text-slate-700 font-semibold border-y border-slate-100 py-3 my-2 bg-slate-50/50 px-4 rounded-2xl">
                <p className="flex items-center gap-1.5">
                  <span className="text-teal-500">✨</span>
                  「スマホの画面から少し離れて、誰かと温かい時間を過ごしたい」
                </p>
                <p className="flex items-center gap-1.5">
                  <span className="text-teal-500">✨</span>
                  「日常に、ちょっとした心地よい刺激がほしい」
                </p>
              </div>
              <p className="pt-1">
                そんな皆さんと、わざわざ遠くまで出かけなくても、近くで気軽に体験していただける、とっておきの心地よい時間を共有したいと考えています。
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#0D9488]/5 border border-[#0D9488]/15 text-teal-900 font-extrabold text-sm md:text-base leading-relaxed mt-6">
            私たちがボードゲームを通じて皆さんに届けたい、3つの「良いこと」をお伝えさせてください。
          </div>
        </div>

        {/* 3 Benefits Grid */}
        <div className="grid grid-cols-1 gap-8 pt-4">
          
          {/* Benefit 1 */}
          <div className="bg-white/90 border border-slate-200/60 rounded-3xl p-6 md:p-8 space-y-4 shadow-sm hover:shadow-md transition duration-300">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 shadow-sm">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg md:text-xl font-black text-slate-900">
                1. 遊びながら、未来を生きる力が育つ（教育への良い影響）
              </h3>
            </div>
            <div className="text-slate-600 text-sm pl-0 md:pl-13 mt-2 leading-relaxed space-y-4 font-medium">
              <p>
                ボードゲームは、ただの娯楽ではありません。実は、最高の<strong>「知育・教育」ツール</strong>でもあります。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-slate-50 border border-slate-200/40 p-4 rounded-2xl">
                  <h4 className="font-extrabold text-slate-800 text-sm flex items-center gap-1.5 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    考える力と集中力が身につく
                  </h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    勝つために「どうすればいいか？」を自分で考え、先の展開を予想する中で、論理的な思考力や集中力が自然と鍛えられます。
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200/40 p-4 rounded-2xl">
                  <h4 className="font-extrabold text-slate-800 text-sm flex items-center gap-1.5 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    社会のルールやマナーを学べる
                  </h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    順番を待つこと、ルールを守ること、そして「負けた悔しさを乗り越えること」など、生きていく上で大切な心の強さがゲームを通じて育ちます。
                  </p>
                </div>
              </div>
              <p className="text-xs text-amber-800 bg-amber-500/[0.04] border border-amber-500/10 p-3.5 rounded-xl font-bold mt-2">
                💡 お子様にとっては成長のステップに、大人にとっては仕事や日常に活きる「地頭力」を鍛える場になります。
              </p>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="bg-white/90 border border-slate-200/60 rounded-3xl p-6 md:p-8 space-y-4 shadow-sm hover:shadow-md transition duration-300">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-teal-100 text-teal-600 flex items-center justify-center shrink-0 shadow-sm">
                <Heart className="w-5 h-5 text-teal-600" />
              </div>
              <h3 className="text-lg md:text-xl font-black text-slate-900">
                2. 脳が喜び、心がスッキリする（頭と身体の健康への好影響）
              </h3>
            </div>
            <div className="text-slate-600 text-sm pl-0 md:pl-13 mt-2 leading-relaxed space-y-4 font-medium">
              <p>
                画面をじっと見つめるデジタルゲームとは違い、ボードゲームは<strong>「手と目と脳」</strong>をフルに動かします。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-slate-50 border border-slate-200/40 p-4 rounded-2xl">
                  <h4 className="font-extrabold text-slate-800 text-sm flex items-center gap-1.5 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                    脳のアンチエイジング
                  </h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    指先でコマやカードを触り、相手の表情を読み、戦略を練る。この一連の動きが脳を心地よく刺激し、リフレッシュや認知機能の維持に役立ちます。
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200/40 p-4 rounded-2xl">
                  <h4 className="font-extrabold text-slate-800 text-sm flex items-center gap-1.5 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                    「リアルな体験」でストレス解消
                  </h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    サイコロを振るドキドキ感、良いカードを引いたときの喜びなどのリアルな体験は、テレビやスマホの手軽さとは違う深い充実感をもたらし、日々のストレスを吹き飛ばしてくれます。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="bg-white/90 border border-slate-200/60 rounded-3xl p-6 md:p-8 space-y-4 shadow-sm hover:shadow-md transition duration-300">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 shadow-sm">
                <Smile className="w-5 h-5 text-indigo-600" />
              </div>
              <h3 className="text-lg md:text-xl font-black text-slate-900">
                3. 初対面でも、一瞬で笑顔になれる「ボードゲームの魔法」
              </h3>
            </div>
            <div className="text-slate-600 text-sm pl-0 md:pl-13 mt-2 leading-relaxed space-y-4 font-medium">
              <p>
                大人になると、職場や家庭以外で新しいつながりを作るのは難しくなりがちです。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-slate-50 border border-slate-200/40 p-4 rounded-2xl">
                  <h4 className="font-extrabold text-slate-800 text-sm flex items-center gap-1.5 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    「共通の目的」があるから会話が弾む
                  </h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    いきなり「お話ししましょう」と言われると緊張しますが、目の前にゲームがあれば大丈夫。自然と声が出て、初対面の人ともいつの間にかハイタッチして笑い合えます。
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200/40 p-4 rounded-2xl">
                  <h4 className="font-extrabold text-slate-800 text-sm flex items-center gap-1.5 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    肩書きのない、純粋なひととき
                  </h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    年齢、職業、性別は関係ありません。テーブルを囲めば、誰もが一人の「プレイヤー」として対等につながり合えます。
                  </p>
                </div>
              </div>
              <p className="text-xs text-indigo-900 bg-indigo-500/[0.04] border border-indigo-500/10 p-3.5 rounded-xl font-bold mt-2">
                ✨ 世代や肩書きを超えて、誰もがフラットに対等に楽しめる。それこそがボードゲームの一番の魔法です。
              </p>
            </div>
          </div>

        </div>

        {/* Closing Message Section */}
        <div className="mt-12 bg-gradient-to-br from-teal-500/5 to-amber-500/5 border border-slate-200/60 rounded-3.5xl p-6 md:p-8 space-y-4">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-5 h-5 text-amber-500 shrink-0" />
            <h4 className="font-black text-slate-900 text-base md:text-lg">
              最後に：あなたと一緒に、特別な時間を過ごしたい
            </h4>
          </div>
          <div className="text-slate-700 text-sm leading-relaxed space-y-3 font-medium">
            <p>
              「ルールが難しそう…」「一人で参加しても大丈夫かな？」と不安に思う必要はありません。
            </p>
            <p>
              AWABOでは、初めての方でも安心して楽しめるよう、<strong>スタッフが丁寧にルールを説明し、温かくお迎えします</strong>。
            </p>
            <p>
              ボードゲームを囲んで、一緒に笑い、考え、最高の時間を過ごしませんか？
            </p>
            <p className="font-black text-teal-700 pt-1 text-center md:text-left text-base">
              あなたとお会いできるのを、心から楽しみにしています！
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Back button */}
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
