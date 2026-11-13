/** Firestore `EngineeringNotes` 컬렉션 문서: 프로젝트별 주요 기여 이력 */
export interface EngineeringNote {
  id: string;
  /** 연결된 Project 문서 id (Firestore 필드명 `id`) */
  projectId: string;
  title: string;
  info: string;
  technology: string[];
  /** Firebase Storage 경로 */
  filePath: string;
  /** filePath를 서버에서 해석한 다운로드 URL. 해석에 실패하면 null */
  downloadUrl: string | null;
}
