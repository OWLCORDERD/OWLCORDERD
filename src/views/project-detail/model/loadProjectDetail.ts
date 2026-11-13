import 'server-only';
import type { EngineeringNote } from '@/entities/engineering-note';
import { getEngineeringNotesByProject } from '@/entities/engineering-note/server';
import type { Project } from '@/entities/project';
import { getProjectById, getProjects } from '@/entities/project/server';

export interface ProjectDetailData {
  project: Project;
  notes: EngineeringNote[];
}

/**
 * 상세 페이지 데이터 파이프라인.
 * 기존에는 목록에서 넘긴 router state에 의존해 새로고침·직접 접근 시 데이터가 사라졌다.
 * 이제 URL의 id만으로 서버에서 프로젝트와 기여 이력을 함께 불러온다.
 */
export async function loadProjectDetail(id: string): Promise<ProjectDetailData | null> {
  const project = await getProjectById(id);
  if (!project) return null;

  const notes = await getEngineeringNotesByProject(project.id);
  return { project, notes };
}

/** 빌드 시 미리 만들 상세 페이지 id 목록 */
export async function listProjectIds(): Promise<string[]> {
  const projects = await getProjects();
  return projects.map(project => project.id);
}
