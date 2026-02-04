import { Whisky } from "./data";

/**
 * 위스키 이름을 비교하기 좋게 정규화합니다.
 * - 소문자화
 * - "year old", "yr" 등의 표현 통일 및 제거
 * - 특수문자 제거 및 공백 정리
 */
export function normalizeWhiskyName(name: string): string {
    if (!name) return "";

    return name
        .toLowerCase()
        .replace(/year old/g, "")
        .replace(/years old/g, "")
        .replace(/\d+yr/g, (match) => match.replace("yr", ""))
        .replace(/['"&,.-]/g, "")
        .replace(/\s+/g, " ")
        .trim();
}

/**
 * 두 위스키 이름이 실질적으로 동일한지 확인합니다.
 */
export function isSameWhisky(name1: string, name2: string): boolean {
    return normalizeWhiskyName(name1) === normalizeWhiskyName(name2);
}

/**
 * 데이터베이스 내에 매칭되는 위스키가 있는지 확인합니다.
 */
export function findMatchingWhisky(name: string, database: Partial<Whisky>[]): Partial<Whisky> | undefined {
    const normalizedTarget = normalizeWhiskyName(name);
    return database.find(w => normalizeWhiskyName(w.name || "") === normalizedTarget);
}
