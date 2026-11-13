import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  compiler: {
    // SSR 시 클래스명 해시를 서버/클라이언트에서 일치시키기 위한 SWC 변환
    styledComponents: true,
  },
  sassOptions: {
    // 전역 SCSS(_tokens, _animation)는 src/app/styles 기준으로 @use
    loadPaths: ['src/app/styles'],
  },
};

export default nextConfig;
