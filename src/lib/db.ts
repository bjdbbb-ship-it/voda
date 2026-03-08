import fs from 'fs';
import path from 'path';

const STATS_FILE = path.join(process.cwd(), 'data', 'stats.json');

export interface VisitRecord {
    timestamp: string;
    ip: string;
    userAgent: string;
    path: string;
    referer: string;
}

export const getStats = (): VisitRecord[] => {
    try {
        if (!fs.existsSync(STATS_FILE)) {
            return [];
        }
        const data = fs.readFileSync(STATS_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading stats:', error);
        return [];
    }
};

export const saveVisit = (record: VisitRecord) => {
    try {
        const stats = getStats();
        stats.push(record);
        // Limit to last 1000 records to prevent file from growing too large
        const limitedStats = stats.slice(-1000);
        fs.writeFileSync(STATS_FILE, JSON.stringify(limitedStats, null, 2));
    } catch (error) {
        console.error('Error saving visit:', error);
    }
};
