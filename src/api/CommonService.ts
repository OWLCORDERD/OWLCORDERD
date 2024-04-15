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
  info: string;
  bannerImg: string;
  type: string;
  useTech1: string;
  useTech2: string;
  useTech3: string;
  useTech4: string | undefined;
  useTech5: string | undefined;
  useTech6: string | undefined;
  main_Banner: string;
  main_Part1: string;
  main_Part2: string;
  main_Part3: string | undefined;
  sub_Part1: string;
  sub_Part2: string;
  sub_Part3: string | undefined;
  sub_Part4: string | undefined;
  figmaUrl: string;
  siteUrl: string;
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
      info: doc.data().info,
      bannerImg: doc.data().bannerImg,
      type: doc.data().type,
      useTech1: doc.data().useTech1,
      useTech2: doc.data().useTech2,
      useTech3: doc.data().useTech3,
      useTech4: doc.data().useTech4 ? doc.data().useTech4 : undefined,
      useTech5: doc.data().useTech5 ? doc.data().useTech5 : undefined,
      useTech6: doc.data().useTech6 ? doc.data().useTech6 : undefined,
      main_Banner: doc.data().main_Banner,
      main_Part1: doc.data().main_Part1,
      main_Part2: doc.data().main_Part2,
      main_Part3: doc.data().main_Part3 ? doc.data().main_Part3 : undefined,
      sub_Part1: doc.data().sub_Part1,
      sub_Part2: doc.data().sub_Part2,
      sub_Part3: doc.data().sub_Part3 ? doc.data().sub_Part3 : undefined,
      sub_Part4: doc.data().sub_Part4 ? doc.data().sub_Part4 : undefined,
      figmaUrl: doc.data().figmaUrl,
      siteUrl: doc.data().siteUrl,
    };

    projectData.push(docData);
  });

  return projectData;
}
