import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

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
  useTech1: string;
  useTech2: string;
  useTech3: string;
  useTech4: string | undefined;
  useTech5: string | undefined;
  useTech6: string | undefined;
  video: string;
  figmaUrl: string;
  siteUrl: string;
  images: [];
}

export async function getAdvantage() {
  const querySnapShot = await getDocs(collection(db, 'Advantage'));

  if (querySnapShot.empty) {
    return [];
  }

  const advantageData: advantageType[] = [];

  querySnapShot.forEach(doc => {
    const docData = {
      id: doc.id,
      title: doc.data().title,
      info: doc.data().info,
      svgIcon: doc.data().svgIcon,
    };

    advantageData.push(docData);
  });

  return advantageData;
}

export async function getTechnology() {
  const querySnapShot = await getDocs(collection(db, 'Technology'));

  if (querySnapShot.empty) {
    return [];
  }

  const TechData: TechnologyType[] = [];

  querySnapShot.forEach(doc => {
    const docData = {
      id: doc.id,
      title: doc.data().title,
      info: doc.data().info,
      svgIcon: doc.data().svgIcon,
      type: doc.data().type,
    };

    TechData.push(docData);
  });

  return TechData;
}

export async function getProject() {
  const querySnapShot = await getDocs(collection(db, 'Project'));

  if (querySnapShot.empty) {
    return [];
  }

  const projectData: ProjectType[] = [];

  querySnapShot.forEach(doc => {
    const docData = {
      id: doc.data().id,
      title: doc.data().title,
      subTitle: doc.data().subTitle,
      date: doc.data().date,
      info: doc.data().info,
      projectBanner: doc.data().projectBanner,
      type: doc.data().type,
      useTech1: doc.data().useTech1,
      useTech2: doc.data().useTech2,
      useTech3: doc.data().useTech3,
      useTech4: doc.data().useTech4 ? doc.data().useTech4 : undefined,
      useTech5: doc.data().useTech5 ? doc.data().useTech5 : undefined,
      useTech6: doc.data().useTech6 ? doc.data().useTech6 : undefined,
      figmaUrl: doc.data().figmaUrl,
      siteUrl: doc.data().siteUrl,
      video: doc.data().video,
      images: doc.data().images,
    };

    projectData.push(docData);
  });

  return projectData;
}
