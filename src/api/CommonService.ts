import { ProjectType, TechnologyType, advantageType } from 'types/data';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

/* Firestore Advantage 컬렉션 데이터 패칭 비동기 함수 */
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

/* Firestore Technology 컬렉션 데이터 패칭 비동기 함수 */
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

/* Firestore Project 컬렉션 데이터 패칭 비동기 함수 */
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
      useTech: doc.data().useTech,
      figmaUrl: doc.data().figmaUrl,
      siteUrl: doc.data().siteUrl,
      video: doc.data().video,
      images: doc.data().images,
    };

    projectData.push(docData);
  });

  return projectData;
}
