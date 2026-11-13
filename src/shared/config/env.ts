import 'server-only';

/**
 * 서버 전용 환경 변수. 빌드/ISR 재생성 시점에만 읽는다.
 * 기존 CRA의 REACT_APP_* 이름도 이전 기간 동안 함께 읽어 배포 환경 전환을 쉽게 한다.
 */
const read = (key: string) => process.env[`FIREBASE_${key}`] ?? process.env[`REACT_APP_FIREBASE_${key}`];

export const firebaseEnv = {
  apiKey: read('API_KEY'),
  authDomain: read('AUTH_DOMAIN'),
  projectId: read('PROJECT_ID'),
  storageBucket: read('STORAGE_BUCKET'),
  messagingSenderId: read('MESSAGING_SENDER_ID'),
  appId: read('APP_ID'),
};

export const isFirebaseConfigured = Boolean(firebaseEnv.apiKey && firebaseEnv.projectId);

export const revalidateSecret = process.env.REVALIDATE_SECRET;
