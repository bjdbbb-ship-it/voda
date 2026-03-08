import { NextRequest, NextResponse } from 'next/server';
import { saveVisit, VisitRecord } from '@/lib/db';

export async function POST(req: NextRequest) {
    try {
        const { path, referer } = await req.json();

        const record: VisitRecord = {
            timestamp: new Date().toISOString(),
            ip: req.headers.get('x-forwarded-for') || 'unknown',
            userAgent: req.headers.get('user-agent') || 'unknown',
            path: path || 'unknown',
            referer: referer || 'direct',
        };

        saveVisit(record);

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Failed to track visit' }, { status: 500 });
    }
}
