'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  AlertCircle,
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  ChevronLeft,
  FileText,
  Gauge,
  LoaderCircle,
  UserCheck,
} from 'lucide-react';
import Footer from '../components/Footer';
import QuestionSelect from '../components/QuestionSelect';
import { questions as staticQuestions } from '../lib/mbti-data';

type Question = {
  id: string;
  text: string;
  axis: string;
  direction: string;
};

export default function DiagnosisPage() {
  const router = useRouter();
  const [step, setStep] = useState<'intro' | 'quiz' | 'analyzing'>('intro');
  const [questions] = useState<Question[]>(staticQuestions as Question[]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answers, setAnswers] = useState<{ questionId: string; value: number }[]>([]);
  const [error, setError] = useState<string | null>(null);

  const currentQuestion = questions[currentQIndex];
  const currentAnswer = currentQuestion
    ? answers.find((answer) => answer.questionId === currentQuestion.id)?.value ?? null
    : null;
  const progress = questions.length > 0 ? Math.round((answers.length / questions.length) * 100) : 0;

  const upsertAnswer = (questionId: string, value: number) => {
    const nextAnswers = [...answers];
    const index = nextAnswers.findIndex((answer) => answer.questionId === questionId);

    if (index >= 0) {
      nextAnswers[index].value = value;
    } else {
      nextAnswers.push({ questionId, value });
    }

    setAnswers(nextAnswers);
    return nextAnswers;
  };

  const finishDiagnosis = async (finalAnswers: typeof answers) => {
    setStep('analyzing');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const scores: { [key: string]: number } = { R: 0, I: 0, F: 0, S: 0 };
      for (const answer of finalAnswers) {
        const question = questions.find((item) => item.id === answer.questionId);
        if (!question) continue;

        const signedValue = question.direction === 'left' ? -answer.value : answer.value;
        scores[question.axis] += signedValue;
      }

      const mbti =
        (scores.F > 0 ? 'E' : 'I') +
        (scores.I > 0 ? 'S' : 'N') +
        (scores.R > 0 ? 'F' : 'T') +
        (scores.S > 0 ? 'P' : 'J');

      sessionStorage.setItem('diagnosisScores', JSON.stringify(scores));
      sessionStorage.setItem('diagnosisType', mbti);

      router.push(`/types/${mbti}`);
    } catch (err) {
      console.error(err);
      setError('分析エラーが発生しました。');
      setStep('intro');
    }
  };

  const goNext = () => {
    if (!currentQuestion || currentAnswer === null) {
      setError('この質問に回答してください。');
      return;
    }

    setError(null);

    if (currentQIndex === questions.length - 1) {
      finishDiagnosis(answers);
      return;
    }

    setCurrentQIndex((prev) => prev + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectAnswerAndAdvance = (value: number) => {
    if (!currentQuestion) return;

    const nextAnswers = upsertAnswer(currentQuestion.id, value);
    setError(null);

    if (currentQIndex === questions.length - 1) {
      finishDiagnosis(nextAnswers);
      return;
    }

    setCurrentQIndex((prev) => prev + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goPrev = () => {
    setError(null);
    setCurrentQIndex((prev) => Math.max(0, prev - 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (questions.length === 0 && !error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-[#e6f0ef] text-[#2f6f73]">
            <BookOpen size={32} />
          </div>
          <p className="text-sm font-bold text-[#65727a]">質問を読み込んでいます...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-shell flex min-h-screen flex-col">
      <main className="mx-auto w-full max-w-7xl flex-grow px-6 py-10">
        {error && (
          <div className="mb-6 flex items-center gap-2 rounded-2xl border border-red-200 bg-red-50 px-4 py-4 text-red-600">
            <AlertCircle size={18} />
            <span className="text-sm font-bold">{error}</span>
          </div>
        )}

        {step === 'intro' && (
          <div className="mx-auto mt-6 max-w-6xl rounded-lg ui-panel p-8 md:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <div className="eyebrow">
                  32問の簡単な質問
                </div>
                <h1 className="mt-6 text-4xl font-black leading-[1.12] text-[var(--foreground)] md:text-5xl">
                  自己分析を、就活で使える形に整理します。
                </h1>
                <p className="mt-5 text-base leading-8 text-[var(--ink-soft)] md:text-lg">
                  深く考えすぎず、直感で答えてください。正解はありません。
                  普段の自分に近い回答ほど、強み・弱み・企業選びの軸が具体化されます。
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {[
                    ['所要時間', '約3〜5分'],
                    ['質問数', `${questions.length}問`],
                    ['データ', '回答はブラウザ内で処理'],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-lg ui-panel-muted px-5 py-4">
                      <div className="text-sm font-semibold text-[var(--ink-soft)]">{label}</div>
                      <div className="mt-1 text-xl font-black text-[var(--foreground)]">{value}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {[
                    [FileText, 'ES', '自己PRの材料'],
                    [UserCheck, '面接', '強みと弱みの話し方'],
                    [BriefcaseBusiness, '企業選び', '合う環境の軸'],
                  ].map(([Icon, label, text]) => {
                    const TypedIcon = Icon as React.ComponentType<{ size?: number }>;
                    return (
                      <div key={label as string} className="rounded-lg border border-[var(--line)] bg-white/74 p-4">
                        <TypedIcon size={19} />
                        <div className="mt-3 text-sm font-black text-[var(--foreground)]">{label as string}</div>
                        <div className="mt-1 text-xs font-bold leading-5 text-[var(--ink-soft)]">{text as string}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-lg border border-[var(--line)] bg-white/86 p-6">
                <div className="text-sm font-bold text-[var(--ink-soft)]">こんな質問をします</div>
                <div className="mt-4 space-y-3">
                  {[
                    'AIに任せられる仕事は、できるだけ任せたい',
                    '新しいツールが出たらまず試してみる',
                    '一人で進めるより、周囲との連携を重視する',
                  ].map((question, index) => (
                    <div key={question} className="rounded-lg ui-panel-muted p-4">
                      <div className="text-xs font-bold text-[var(--warm)]">
                        Q.{String(index + 1).padStart(2, '0')}
                      </div>
                      <p className="mt-2 text-sm font-semibold leading-7 text-[var(--foreground)]">{question}</p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setStep('quiz')}
                  disabled={questions.length === 0}
                  className="btn-primary mt-6 w-full px-8 py-4 text-base disabled:opacity-50"
                >
                  診断を始める
                  <ArrowRight size={18} />
                </button>
                <p className="mt-3 text-center text-sm font-medium text-[var(--ink-muted)]">無料・登録不要</p>
              </div>
            </div>
          </div>
        )}

        {step === 'quiz' && currentQuestion && (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,1fr)_320px]">
            <div className="rounded-lg ui-panel p-8">
              <div className="flex items-center justify-between gap-4">
                <div className="text-sm font-bold text-[var(--ink-soft)]">
                  質問 {currentQIndex + 1} / {questions.length}
                </div>
                <div className="text-xs font-bold text-[var(--warm)]">
                  価値観 / 行動 / 思考
                </div>
              </div>

              <div className="mt-4 h-[5px] w-full overflow-hidden rounded-full bg-[var(--line)]">
                <div className="h-full rounded-full bg-[var(--accent)]" style={{ width: `${progress}%` }} />
              </div>

              <h2 className="mt-10 text-3xl font-black leading-[1.3] text-[var(--foreground)] md:text-5xl">
                {currentQuestion.text}
              </h2>

              <p className="mt-5 text-base leading-8 text-[var(--ink-soft)]">
                最も近い感覚を選んでください。選択すると自動で次の質問へ進みます。
              </p>

              <div className="mt-10 rounded-lg ui-panel-muted p-6 md:p-8">
                <QuestionSelect
                  value={currentAnswer}
                  onSelect={selectAnswerAndAdvance}
                  agreeLabel="そう思う"
                  disagreeLabel="そう思わない"
                />
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {[
                  ['この質問で見ている軸', '思考パターンの傾向', '論理と直感、計画と即応のバランスを見ています。'],
                  ['AI時代との関係', '仕事の進め方の相性', 'AIと一緒に働くときに出やすい強みの方向を推定します。'],
                  ['迷ったときの基準', '理想より普段の自分', '正解はありません。最も自然に近い選択で大丈夫です。'],
                ].map(([label, title, text]) => (
                  <div key={label} className="rounded-lg border border-[var(--line)] bg-white/86 p-4">
                    <div className="text-xs font-bold text-[var(--warm)]">{label}</div>
                    <div className="mt-2 text-sm font-black text-[var(--foreground)]">{title}</div>
                    <p className="mt-2 text-sm leading-7 text-[var(--ink-soft)]">{text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 border-t border-[var(--line)] pt-8 sm:flex-row sm:items-center sm:justify-between">
                <button
                  onClick={goPrev}
                  disabled={currentQIndex === 0}
                  className="btn-secondary px-6 py-3 text-sm disabled:opacity-40"
                >
                  <ChevronLeft size={16} />
                  前の質問へ
                </button>

                <button
                  onClick={goNext}
                  className="btn-primary px-7 py-3 text-sm"
                >
                  {currentQIndex === questions.length - 1 ? '診断結果を見る' : '次の質問へ'}
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <aside className="h-fit rounded-lg ui-panel p-6 md:sticky md:top-24">
              <div className="flex items-center gap-3 text-[var(--accent)]">
                <Gauge className="h-5 w-5" />
                <div className="text-lg font-black text-[var(--foreground)]">診断ステータス</div>
              </div>

              <div className="mt-5 space-y-4">
                <div className="rounded-lg ui-panel-muted p-4">
                  <div className="text-xs font-bold text-[var(--ink-soft)]">推定残り時間</div>
                  <div className="mt-2 text-3xl font-black text-[var(--foreground)]">
                    約{Math.max(1, Math.ceil((questions.length - currentQIndex - 1) / 6))}分
                  </div>
                </div>

                <div className="rounded-lg ui-panel-muted p-4">
                  <div className="flex items-center justify-between text-xs font-bold text-[var(--ink-soft)]">
                    <span>進捗</span>
                    <span>{answers.length} / {questions.length}</span>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-[var(--line)]">
                    <div className="h-full rounded-full bg-[var(--accent)]" style={{ width: `${progress}%` }} />
                  </div>
                </div>

                <div className="rounded-lg border border-[#b9d8d5] bg-[var(--accent-soft)] p-4 text-sm leading-7 text-[#244f52]">
                  回答から、仕事で出やすい強みとつまずきやすい場面を整理しています。
                </div>

                <div className="rounded-lg bg-[var(--accent)] p-5 text-white">
                  <div className="text-xs font-bold text-white/70">回答メモ</div>
                  <div className="mt-3 text-xl font-black">傾向を整理中</div>
                  <p className="mt-3 text-sm leading-7 text-white/80">
                    回答が増えるほど、強み・注意点・次の行動が具体化されます。
                  </p>
                </div>

                <div className="rounded-lg border border-[var(--line)] bg-white/86 p-4">
                  <div className="text-xs font-bold text-[var(--ink-soft)]">診断メモ</div>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-[var(--ink-soft)]">
                    <li>・現在は {progress}% 完了</li>
                    <li>・残り {questions.length - currentQIndex - 1} 問</li>
                    <li>・回答済みの内容は随時反映されています</li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        )}

        {step === 'analyzing' && (
          <div className="mx-auto mt-20 max-w-md rounded-lg ui-panel p-10 text-center">
            <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
              <LoaderCircle className="animate-spin" size={34} />
            </div>
            <h2 className="text-2xl font-black text-[var(--foreground)]">診断結果をまとめています...</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">
              回答パターンから、強み・注意点・次の行動を整理しています。
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
