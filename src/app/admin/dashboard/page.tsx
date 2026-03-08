import { getStats, VisitRecord } from '@/lib/db';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { BarChart3, Users, Clock, Globe, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default async function DashboardPage() {
    const cookieStore = await cookies();
    const isAdmin = cookieStore.get('admin_session')?.value === 'true';

    if (!isAdmin) {
        redirect('/admin/login');
    }

    const allStats = getStats();
    const sortedStats = [...allStats].reverse();

    // Calculate some basic stats
    const totalVisits = allStats.length;

    const today = new Date().toISOString().split('T')[0];
    const todayVisits = allStats.filter(s => s.timestamp.startsWith(today)).length;

    const uniqueIps = new Set(allStats.map(s => s.ip)).size;

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Header */}
            <header className="bg-primary text-secondary py-6 px-8 shadow-md flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <Link href="/" className="p-2 hover:bg-white/10 rounded-full transition-colors">
                        <ArrowLeft size={20} />
                    </Link>
                    <h1 className="font-serif text-2xl font-bold">Admin Dashboard</h1>
                </div>
                <div className="text-sm opacity-80">
                    마지막 업데이트: {new Date().toLocaleString('ko-KR')}
                </div>
            </header>

            <main className="flex-1 p-8 max-w-7xl mx-auto w-full">
                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                            <BarChart3 size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">총 방문 횟수</p>
                            <p className="text-2xl font-bold text-gray-900">{totalVisits.toLocaleString()}</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
                        <div className="p-3 bg-green-50 text-green-600 rounded-lg">
                            <Clock size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">오늘 방문자</p>
                            <p className="text-2xl font-bold text-gray-900">{todayVisits.toLocaleString()}</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
                        <div className="p-3 bg-purple-50 text-purple-600 rounded-lg">
                            <Users size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">고유 IP 수</p>
                            <p className="text-2xl font-bold text-gray-900">{uniqueIps.toLocaleString()}</p>
                        </div>
                    </div>
                </div>

                {/* Detailed Logs */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                        <h2 className="font-bold text-gray-900 flex items-center gap-2">
                            <Globe size={18} className="text-primary" />
                            최근 방문 기록 (최신순)
                        </h2>
                        <span className="text-xs text-gray-400">최대 1,000개까지 보관됩니다</span>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 text-xs uppercase text-gray-500 font-semibold">
                                <tr>
                                    <th className="px-6 py-4">시간</th>
                                    <th className="px-6 py-4">IP</th>
                                    <th className="px-6 py-4">페이지</th>
                                    <th className="px-6 py-4">유입 경로</th>
                                    <th className="px-6 py-4">기기/브라우저</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 text-sm">
                                {sortedStats.length > 0 ? (
                                    sortedStats.map((log, i) => (
                                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 text-gray-600 whitespace-nowrap">
                                                {new Date(log.timestamp).toLocaleString('ko-KR')}
                                            </td>
                                            <td className="px-6 py-4 font-mono text-gray-900">{log.ip}</td>
                                            <td className="px-6 py-4">
                                                <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                                                    {log.path}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-gray-500 truncate max-w-[150px]" title={log.referer}>
                                                {log.referer}
                                            </td>
                                            <td className="px-6 py-4 text-gray-400 truncate max-w-[200px]" title={log.userAgent}>
                                                {log.userAgent}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-12 text-center text-gray-400 italic">
                                            아직 기록된 방문 정보가 없습니다.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
}
