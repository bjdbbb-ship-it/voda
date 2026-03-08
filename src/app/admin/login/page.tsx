'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, User } from 'lucide-react';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const res = await fetch('/api/admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json();

            if (data.success) {
                router.push('/admin/dashboard');
            } else {
                setError(data.message || '로그인에 실패했습니다.');
            }
        } catch (err) {
            setError('서버 오류가 발생했습니다.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-primary p-4">
            <div className="max-w-md w-full bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl">
                <div className="text-center mb-8">
                    <h1 className="font-serif text-3xl text-secondary font-bold mb-2">관리자 로그인</h1>
                    <p className="text-secondary/60 text-sm">WhiskyVoda 관리자 계정으로 로그인하세요</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-secondary/80 text-sm font-medium mb-2">아이디</label>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary/40">
                                <User size={18} />
                            </span>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-10 pr-4 text-secondary placeholder:text-secondary/30 focus:outline-none focus:ring-2 focus:ring-secondary/50"
                                placeholder="아이디를 입력하세요"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-secondary/80 text-sm font-medium mb-2">비밀번호</label>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary/40">
                                <Lock size={18} />
                            </span>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-10 pr-4 text-secondary placeholder:text-secondary/30 focus:outline-none focus:ring-2 focus:ring-secondary/50"
                                placeholder="비밀번호를 입력하세요"
                                required
                            />
                        </div>
                    </div>

                    {error && (
                        <p className="text-red-400 text-sm text-center font-medium">{error}</p>
                    )}

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-secondary text-primary font-bold py-3 rounded-lg hover:bg-white transition-all duration-300 disabled:opacity-50"
                    >
                        {isLoading ? '로그인 중...' : '로그인'}
                    </button>
                </form>
            </div>
        </div>
    );
}
