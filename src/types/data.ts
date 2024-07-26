/* firebase database 데이터 필드 타입 */

export interface advantageType {
  id: string;
  title: string;
  info: string;
  svgIcon: string;
}

export interface TechnologyType {
  id: string;
  title: string;
  info: string;
  svgIcon: string;
  type: string;
}

export interface ProjectType {
  id: number;
  title: string;
  subTitle: string;
  date: string;
  info: string;
  projectBanner: string;
  type: string;
  useTech: [];
  video: string;
  figmaUrl: string;
  siteUrl: string;
  images: [];
}
