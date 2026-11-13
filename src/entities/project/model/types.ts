/** Firestore `Project` 컬렉션 문서 */
export interface Project {
  id: string;
  index: number;
  title: string;
  subTitle: string;
  /** 개발 기간 (예: "2023.03 ~ 2023.05") */
  date: string;
  info: string;
  projectBanner: string;
  /** 프로젝트 유형 (외주, 개인 등) */
  type: string;
  useTech: string[];
  video: string;
  figmaUrl: string;
  siteUrl: string;
  images: string[];
}
