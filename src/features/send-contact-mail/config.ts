/**
 * EmailJS 설정. EmailJS 공개 키는 브라우저에서 쓰도록 설계된 값이라 NEXT_PUBLIC_ 으로 노출된다.
 * 환경 변수가 없으면 기존 CRA 코드에 있던 값을 그대로 쓴다(이전 기간 동안의 호환).
 */
export const EMAILJS = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_k0hnyfp',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_5a2kqd9',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'UhbB3PcGFHDMDqlgt',
};
