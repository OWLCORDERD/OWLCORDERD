export type TechnologyCategory = 'develop' | 'design';

/** Firestore `Technology` 컬렉션 문서 */
export interface Technology {
  id: string;
  title: string;
  info: string;
  svgIcon: string;
  type: TechnologyCategory;
}

export const TECHNOLOGY_CATEGORIES: { value: TechnologyCategory; label: string }[] = [
  { value: 'develop', label: 'Develop' },
  { value: 'design', label: 'Design' },
];
