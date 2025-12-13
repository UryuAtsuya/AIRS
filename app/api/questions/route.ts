import { NextResponse } from 'next/server';
import { questions } from '../../lib/mbti-data';

export async function GET() {
    return NextResponse.json(questions);
}
