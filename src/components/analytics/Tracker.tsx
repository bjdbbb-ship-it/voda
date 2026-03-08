'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function Tracker() {
    const pathname = usePathname();

    useEffect(() => {
        // Admin pages track 안 함
        if (pathname.startsWith('/admin')) return;

        const trackVisit = async () => {
            try {
                await fetch('/api/stats/track', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        path: pathname,
                        referer: document.referrer || 'direct',
                    }),
                });
            } catch (error) {
                console.error('Tracking failed:', error);
            }
        };

        trackVisit();
    }, [pathname]);

    return null;
}
