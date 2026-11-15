import 'server-only';

/**
 * 서버 전용 환경 변수. 빌드/ISR 재생성 시점에만 읽는다.
 * 기존 CRA/netlify 배포환경 REACT_APP_* 레거시 삭제
 *  vercel 배포 환경 FIREBASE_* 변경
 */
const read = (key: string) => process.env[`FIREBASE_${key}`]

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
