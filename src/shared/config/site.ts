/** 사이트 전역에서 쓰는 개발자 프로필 정보 (콘텐츠 원본: 기존 CRA 페이지) */
export const SITE = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://owlcoderd.netlify.app',
  owner: '임민혁',
  ownerEn: 'Lim Min Hyeok',
  handle: 'OWLCODERD',
  role: '프론트엔드 개발자',
  title: '임민혁 · OWLCODERD · Front-end Developer',
  description:
    '움직임과 흐름에 반응하는 인터랙티브 웹을 만드는 프론트엔드 개발자 임민혁(OWLCODERD)의 프로젝트, 기술 스택, 연락처를 소개합니다.',
  keywords: ['Front-end', 'developer', '프론트엔드 개발자', '웹 개발자', 'Publisher', 'Publishing', '포트폴리오', '웹 사이트'],
  email: 'kim461577@gmail.com',
  phone: '010 6343 4615',
  links: {
    resume: 'https://owlcoderd.notion.site/eec4489447c4429ab6fa963e5fc7b344',
    github: 'https://github.com/OWLCORDERD',
    gmail: 'https://mail.google.com/mail/?view=cm&fs=1&to=kim461577@gmail.com',
  },
  since: 2022,
} as const;

/** 메인 페이지 섹션 앵커. 내비게이션과 섹션 id가 같은 값을 참조한다. */
export const SECTION_ID = {
  work: 'work',
  about: 'about',
  stack: 'stack',
  contact: 'contact',
} as const;
