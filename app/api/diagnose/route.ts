import { NextResponse } from 'next/server';
import { questions, typeDetails } from '../../lib/mbti-data';

type Answer = {
    questionId: string;
    value: number; // -2 to +2
};

type DiagnosisRequest = {
    answers: Answer[];
};

export async function POST(request: Request) {
    try {
        const body: DiagnosisRequest = await request.json();
        const scores = { "R": 0, "I": 0, "F": 0, "S": 0 };

        for (const ans of body.answers) {
            const q = questions.find(item => item.id === ans.questionId);
            if (q) {
                let val = ans.value;
                if (q.direction === "left") {
                    val = -val;
                }
                scores[q.axis] += val;
            }
        }

        // Scoring Logic (Same as Python backend)
        let mbti = "";
        // F Axis: Real(>0) -> E, Digital(else) -> I
        mbti += scores["F"] > 0 ? "E" : "I";
        // I Axis: Edit(>0) -> S, Zero(else) -> N
        mbti += scores["I"] > 0 ? "S" : "N";
        // R Axis: Logic(else) -> T, Vibe(>0) -> F (Wait, backend says: if R > 0 (Vibe) -> F, else T)
        // Check Python Logic: mbti += "F" if scores["R"] > 0 else "T"
        mbti += scores["R"] > 0 ? "F" : "T";
        // S Axis: Anti(>0) -> P, Merge(else) -> J
        // Check Python Logic: mbti += "P" if scores["S"] > 0 else "J"
        mbti += scores["S"] > 0 ? "P" : "J";

        const detail = typeDetails[mbti] || { strengths: [], weaknesses: [] };

        return NextResponse.json({
            type: mbti,
            scores: scores,
            detail: "Diagnosis complete",
            strengths: detail.strengths,
            weaknesses: detail.weaknesses
        });
    } catch (error) {
        return NextResponse.json({ error: "Invalid Request" }, { status: 400 });
    }
}
