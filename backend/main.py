from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI()

# Enable CORS for localhost:3000 (React/Next.js)
origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Data Models ---
class Answer(BaseModel):
    questionId: str
    value: int # -2 to +2

class DiagnosisRequest(BaseModel):
    answers: List[Answer]

# --- Master Data ---

# Questions (20 items, 5 per axis)
# R: Logic(Left) vs Vibe(Right)
# I: Zero(Left) vs Edit(Right)
# F: Digital(Left) vs Real(Right)
# S: Merge(Left) vs Anti(Right)
questions = [
    # R Axis (Reasoning)
    {"id": "r1", "text": "感情よりも論理的な整合性を優先すべきだと思う。", "axis": "R", "direction": "left"},
    {"id": "r2", "text": "その場の「ノリ」や「空気」で物事を決める方がうまくいく。", "axis": "R", "direction": "right"},
    {"id": "r3", "text": "議論において、相手の気持ちよりも事実の正確さが重要だ。", "axis": "R", "direction": "left"},
    {"id": "r4", "text": "説明できない直感を信じて行動することがよくある。", "axis": "R", "direction": "right"},
    {"id": "r5", "text": "AIの出力結果が正しくても、なんとなく気に入らなければ採用しない。", "axis": "R", "direction": "right"},

    # I Axis (Innovation)
    {"id": "i1", "text": "誰かが作ったものを改良するより、ゼロから新しいものを作りたい。", "axis": "I", "direction": "left"},
    {"id": "i2", "text": "既存の仕組みを効率化・最適化することに喜びを感じる。", "axis": "I", "direction": "right"},
    {"id": "i3", "text": "前例のないアイデアを考える時間が一番楽しい。", "axis": "I", "direction": "left"},
    {"id": "i4", "text": "突飛なアイデアよりも、現実的に実装可能な解決策を好む。", "axis": "I", "direction": "right"},
    {"id": "i5", "text": "AIには「創造」よりも「編集・要約」を任せたい。", "axis": "I", "direction": "right"},

    # F Axis (Field)
    {"id": "f1", "text": "休日は家でネットをするより、外に出て人に会いたい。", "axis": "F", "direction": "right"},
    {"id": "f2", "text": "メタバースやVR空間だけで一生を過ごすことには抵抗がある。", "axis": "F", "direction": "right"},
    {"id": "f3", "text": "SNS上でのコミュニケーションの方が、対面よりも自分を出せる。", "axis": "F", "direction": "left"},
    {"id": "f4", "text": "身体的な感覚や体験（五感）よりも、情報や知識を重視する。", "axis": "F", "direction": "left"},
    {"id": "f5", "text": "将来、肉体を捨ててデジタル意識として生きられるならそうしたい。", "axis": "F", "direction": "left"},

    # S Axis (Stance)
    {"id": "s1", "text": "みんなが賛成していることでも、あえて反対意見を言いたくなる。", "axis": "S", "direction": "right"},
    {"id": "s2", "text": "組織やチームの和を乱すような行動は避けるべきだ。", "axis": "S", "direction": "left"},
    {"id": "s3", "text": "流行り廃りにはあまり興味がなく、自分のスタイルを貫きたい。", "axis": "S", "direction": "right"},
    {"id": "s4", "text": "ルールやマニュアルがある方が、安心して作業に取り組める。", "axis": "S", "direction": "left"},
    {"id": "s5", "text": "権威や常識に対して、常に疑いの目を持っている。", "axis": "S", "direction": "right"},
]

# Type Details Database
type_details = {
    "INTJ": {
        "strengths": ["長期的視野に立った戦略立案", "感情に流されない冷徹な意思決定", "複雑なシステムの構造化"],
        "weaknesses": ["他者の感情的ニーズの無視", "現場の細かな事情への無関心", "自分の論理への過度な固執"]
    },
    "INTP": {
        "strengths": ["既存の概念にとらわれない独創的な発想", "論理的矛盾の即座の発見", "新しい技術への高い学習意欲"],
        "weaknesses": ["アイデアを実行に移すのが苦手", "ルーチンワークへの極端な嫌悪", "対人コミュニケーションの省略"]
    },
    "ENTJ": {
        "strengths": ["圧倒的なリーダーシップと推進力", "非効率なプロセスの容赦ない排除", "困難な目標への挑戦意欲"],
        "weaknesses": ["独善的になりがちな態度", "弱者への配慮不足", "休息を取ることの下手さ"]
    },
    "ENTP": {
        "strengths": ["常識を打ち破るトリックスター的発想", "多角的な視点からの問題解決", "スピーディなプロトタイピング"],
        "weaknesses": ["細かい詰めが甘く飽きっぽい", "議論のための議論をしてしまう", "ルールを守ることへの抵抗感"]
    },
    "INFJ": {
        "strengths": ["深い洞察力と未来予知のような直感", "他者の潜在能力を見抜く力", "高い倫理観と使命感"],
        "weaknesses": ["理想と現実のギャップへの苦悩", "燃え尽き症候群になりやすい", "批判に対する過度な敏感さ"]
    },
    "INFP": {
        "strengths": ["独自の美意識と世界観の表現", "他者の痛みへの深い共感", "型にはまらない柔軟な生き方"],
        "weaknesses": ["現実的なタスク処理の苦手さ", "批判を人格否定と受け取る傾向", "決断の先送り"]
    },
    "ENFJ": {
        "strengths": ["人々を共通のゴールへ導くカリスマ性", "他者の成長を心から喜べる支援力", "優れた対人コミュニケーション"],
        "weaknesses": ["他者の問題への過度な介入", "対立を避けるための八方美人", "自分自身のニーズの無視"]
    },
    "ENFP": {
        "strengths": ["周囲を巻き込む伝染性の高い情熱", "全く異なる分野を結びつける発想力", "変化への適応力の高さ"],
        "weaknesses": ["詳細な計画や管理が苦手", "興味の対象が次々と移る", "ストレス下での感情的爆発"]
    },
    "ISTJ": {
        "strengths": ["比類なき責任感と完遂力", "事実とデータに基づく正確な判断", "組織の安定性を支える実務能力"],
        "weaknesses": ["変化や新しい方法への強い抵抗", "前例のない事態への対応力不足", "融通の利かなさ"]
    },
    "ISFJ": {
        "strengths": ["細やかな気配りと献身的なサポート", "忍耐強く着実なタスク処理", "周囲の調和を保つ調整力"],
        "weaknesses": ["変化に対する過度な不安", "Noと言えない自己犠牲", "自分の功績をアピールできない"]
    },
    "ESTJ": {
        "strengths": ["明確な手順とルールの確立", "現実的で迅速な意思決定", "組織やプロジェクトの効率的管理"],
        "weaknesses": ["他者の感情や事情への想像力不足", "自分のやり方以外を認めない", "変化への柔軟性の欠如"]
    },
    "ESFJ": {
        "strengths": ["場の雰囲気を明るくする社交性", "他者のニーズを察知する能力", "忠実で献身的なチームプレイ"],
        "weaknesses": ["批判に対する弱さと依存的傾向", "変化よりも現状維持を好む", "表面的な調和の重視"]
    },
    "ISTP": {
        "strengths": ["危機的状況での冷静な対応", "既存ツールを応用するブリコラージュ能力", "効率的で無駄のない動き"],
        "weaknesses": ["長期的な計画性の欠如", "他者との感情的交流の回避", "リスクを軽視した行動"]
    },
    "ISFP": {
        "strengths": ["言葉にできないニュアンスの表現力", "柔軟で適応力のある対応", "現在の瞬間を楽しむ感性"],
        "weaknesses": ["長期的な目標設定の苦手さ", "競争的な環境への不適応", "批判への過敏な反応"]
    },
    "ESTP": {
        "strengths": ["即断即決の行動力", "リスクを恐れないチャレンジ精神", "人々を惹きつける魅力"],
        "weaknesses": ["長期的な結果を考慮しない衝動性", "退屈な作業への耐性のなさ", "計画性の欠如"]
    },
    "ESFP": {
        "strengths": ["周囲を楽しませるエンターテインメント性", "実践的なアプローチ", "変化や新しい環境への順応性"],
        "weaknesses": ["深刻な問題の直視を避ける", "衝動的な出費や行動", "長期的な計画の欠如"]
    }
}


@app.get("/")
def read_root():
    return {"message": "A.I.R.S. Backend is running"}

@app.get("/questions")
def get_questions():
    return questions

@app.post("/diagnose")
def diagnose(request: DiagnosisRequest):
    scores = {"R": 0, "I": 0, "F": 0, "S": 0}
    
    for ans in request.answers:
        q = next((item for item in questions if item["id"] == ans.questionId), None)
        if q:
            val = ans.value 
            if q["direction"] == "left":
                val = -val 
            scores[q["axis"]] += val

    # Scoring Logic
    # R (Logic/Left vs Vibe/Right) -> T(Logic) vs F(Vibe)
    # I (Zero/Left vs Edit/Right) -> N(Zero) vs S(Edit)
    # F (Digital/Left vs Real/Right) -> I(Digital) vs E(Real)
    # S (Merge/Left vs Anti/Right) -> J(Merge) vs P(Anti)
    
    mbti = ""
    # E vs I (F Axis: Digital=I, Real=E)
    # if F > 0 (Real) -> E, else I
    mbti += "E" if scores["F"] > 0 else "I"
    
    # N vs S (I Axis: Zero=N, Edit=S)
    # if I > 0 (Edit) -> S, else N
    mbti += "S" if scores["I"] > 0 else "N"
    
    # T vs F (R Axis: Logic=T, Vibe=F)
    # if R > 0 (Vibe) -> F, else T
    mbti += "F" if scores["R"] > 0 else "T"
    
    # J vs P (S Axis: Merge=J, Anti=P)
    # if S > 0 (Anti) -> P, else J
    # Note: S Axis: Left=Merge(J), Right=Anti(P). 
    # Left is negative score, Right is positive score.
    mbti += "P" if scores["S"] > 0 else "J"

    detail = type_details.get(mbti, {"strengths": [], "weaknesses": []})

    return {
        "type": mbti, 
        "scores": scores,
        "detail": "Diagnosis complete",
        "strengths": detail["strengths"],
        "weaknesses": detail["weaknesses"]
    }
