"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, User, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-primary/95 backdrop-blur-sm py-4 shadow-lg border-b border-white/10"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="z-50">
                    <span className={cn(
                        "font-serif text-2xl md:text-3xl font-bold tracking-tight transition-colors",
                        isScrolled ? "text-secondary" : "text-white"
                    )}>
                        Whisky<span className="font-light italic">Voda</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    <Link
                        href="/"
                        className={cn(
                            "text-sm uppercase tracking-widest hover:text-secondary transition-colors",
                            isScrolled ? "text-white/80" : "text-white/90"
                        )}
                    >
                        매거진
                    </Link>
                    <Link
                        href="/quiz"
                        className={cn(
                            "text-sm uppercase tracking-widest hover:text-secondary transition-colors",
                            isScrolled ? "text-white/80" : "text-white/90"
                        )}
                    >
                        취향 분석
                    </Link>
                    <Link
                        href="/value"
                        className={cn(
                            "text-sm uppercase tracking-widest hover:text-secondary transition-colors",
                            isScrolled ? "text-white/80" : "text-white/90"
                        )}
                    >
                        가치 판단
                    </Link>
                    <a
                        href="https://vodabar.lovable.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                            "text-sm uppercase tracking-widest hover:text-secondary transition-colors font-medium text-secondary/90",
                            isScrolled ? "text-secondary" : "text-secondary"
                        )}
                    >
                        테이스팅 노트 작성
                    </a>
                </nav>

                {/* Actions */}
                <div className="hidden md:flex items-center space-x-6">
                    <button className={cn("hover:text-secondary transition-colors", isScrolled ? "text-white" : "text-white")}>
                        <Search className="w-5 h-5" />
                    </button>
                    <button className={cn("hover:text-secondary transition-colors", isScrolled ? "text-white" : "text-white")}>
                        <User className="w-5 h-5" />
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-secondary z-50"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-primary z-40 flex flex-col items-center justify-center space-y-8 animate-in fade-in duration-200">
                    <Link
                        href="/"
                        className="font-serif text-3xl text-secondary hover:text-white transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        매거진
                    </Link>
                    <Link
                        href="/quiz"
                        className="font-serif text-3xl text-secondary hover:text-white transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        취향 분석
                    </Link>
                    <Link
                        href="/value"
                        className="font-serif text-3xl text-secondary hover:text-white transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        가치 판단
                    </Link>
                    <a
                        href="https://vodabar.lovable.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-serif text-3xl text-secondary hover:text-white transition-colors border-t border-white/10 pt-8 w-full text-center"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        테이스팅 노트 작성
                    </a>
                </div>
            )}
        </header>
    );
}
