import 'server-only';
import { getApp, getApps, initializeApp, type FirebaseApp } from 'firebase/app';
import { getFirestore, type Firestore } from 'firebase/firestore/lite';
import { getStorage, type FirebaseStorage } from 'firebase/storage';
import { firebaseEnv, isFirebaseConfigured } from '../config/env';

/**
 * 서버 전용 Firebase 클라이언트.
 * 한 번 읽고 끝나는 빌드/ISR 조회라 실시간 리스너가 없는 firestore/lite(REST)를 쓴다.
 */
function app(): FirebaseApp {
  return getApps().length ? getApp() : initializeApp(firebaseEnv);
}

export function firestore(): Firestore {
  return getFirestore(app());
}

export function storage(): FirebaseStorage {
  return getStorage(app());
}

export { isFirebaseConfigured };
