import 'server-only';

/** Firestore 문서 필드를 안전하게 문자열/문자열 배열/숫자로 꺼내는 헬퍼 */
export const str = (value: unknown): string => (typeof value === 'string' ? value : '');

export const strList = (value: unknown): string[] =>
  Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string') : [];

export const num = (value: unknown, fallback = 0): number => (typeof value === 'number' ? value : fallback);
