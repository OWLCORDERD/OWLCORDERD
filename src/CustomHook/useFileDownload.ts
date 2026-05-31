import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from 'api/firebase';

export const useFileDownload = async (url: string) => {
  const res = await getDownloadURL(ref(storage, url));

  return { res };
};
