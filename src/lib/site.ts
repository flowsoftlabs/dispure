export const BASE = import.meta.env.BASE_URL;
export const link = (path = '') => `${BASE}${path.replace(/^\/+/, '')}`;
export const siteName = '디스푸레 공식노트';
export const formatDate = (date: Date) => new Intl.DateTimeFormat('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(date);
export const categories = [
  { slug: 'collection', label: '굿즈 컬렉션', description: '좋아하는 굿즈를 기록하고 모아보는 이야기' },
  { slug: 'favorite', label: '최애 생활', description: '캐릭터와 소중한 일정을 기록하는 법' },
  { slug: 'widgets', label: '홈 화면 꾸미기', description: '디스푸레 위젯으로 휴대폰 꾸미기' },
  { slug: 'development', label: '개발노트', description: 'FlowSoftLabs의 제작 이야기' },
  { slug: 'news', label: '소식 · 업데이트', description: '새로운 기능과 공지' },
] as const;
export const categoryName = (slug: string) => categories.find((item) => item.slug === slug)?.label ?? slug;
