![header](https://capsule-render.vercel.app/api?type=Soft&color=fff&height=300&section=header&text=Hi%20There👋🏻%20I'M%20Lim%20Min%20Hyeok&fontSize=50&fontColor=000&animation=twinkling)

## 👨🏻‍💼 PROFILE SITE

https://owlcoderd.netlify.app
<br/>
<br/>

## DEVELOP TECHNOLOGY

#👨🏻‍💻 개발 언어
<br/>
<br/>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/> <img src="https://img.shields.io/badge/javaScript-F7DF1E?style=flat-square&logo=javaScript&logoColor=white"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/> <img src="https://img.shields.io/badge/styled-components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/> <img src="https://img.shields.io/badge/Webpack-8DD6F9?style=flat-square&logo=Webpack&logoColor=white"/>
<br/>
<br/>
#🛠️ 개발 라이브러리 및 프레임워크
<br/>
<br/>
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white"/> <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/> <img src="https://img.shields.io/badge/Vue.js-4FC08D?style=flat-square&logo=Vue.js&logoColor=white"/> <img src="https://img.shields.io/badge/Nuxt.js-00DC82?style=flat-square&logo=Nuxt.js&logoColor=white"/>
<br/>
<br/>
#🔑 데이터베이스 & 서버/스토리지
<br/>
<br/>
<img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=white"/> <img src="https://img.shields.io/badge/Amazon EC2-FF9900?style=flat-square&logo=Amazon EC2&logoColor=white"/> <img src="https://img.shields.io/badge/Firebase-DD2C00?style=flat-square&logo=Firebase&logoColor=white"/>
<br />
<br />
#👨🏻‍🎨 기획 시 활용하는 디자인 툴
<br/>
<br/>
<img src="https://img.shields.io/badge/Figma-F24E1E?style=flat&logo=Figma&logoColor=white"/> <img src="https://img.shields.io/badge/Adobe Photoshop-31A8FF?style=flat-square&logo=Adobe Photoshop&logoColor=white"/>

## 개발 환경 (v3, Next.js)

- Next.js 16 (App Router) · React 19 · styled-components 6 (SSR 레지스트리) · SCSS(전역 토큰·애니메이션만)
- 데이터: Firestore → 빌드/ISR 재생성 시점에 서버에서 조회 (1시간 주기, `/api/revalidate`로 즉시 갱신)
- TypeScript: `tsc`는 7.0(`@typescript/native` 별칭), Next·typescript-eslint는 TS 6 API(`typescript` 별칭)

```bash
cp .env.example .env.local   # 값 채우기
npm install
npm run dev                  # http://localhost:3001
npm run build && npm start
```

### 디렉터리 (FSD)

```
app/                    Next 라우팅 전용 (layout, page, Project/[id], api/revalidate, sitemap, robots)
src/app/                FSD app 레이어: 프로바이더, styled-components 레지스트리, 전역 스타일(_tokens, _animation)
src/views/              페이지 레이어(Next pages 디렉터리와 이름 충돌을 피해 views): 페이지 조립 + 데이터 파이프라인
src/widgets/            화면 블록: 헤더, 프로젝트 목록, 대표 사례, 소개, 기술 스택, 연락, 상세 개요·미리보기·기여 이력
src/features/           사용자 동작: 메일 문의 보내기, 기술 분류 전환
src/entities/           도메인: project, technology, strength(Advantage), engineering-note — 타입·Firestore 조회·UI
src/shared/             Firebase 클라이언트, ISR 캐시 헬퍼, 설정, 공통 UI
```

슬라이스마다 `index.ts`(클라이언트에서도 import 가능한 공개 API)와 `server.ts`(서버 전용 조회, `server-only`)를 나눠 둡니다.

### 데이터 즉시 갱신

Firestore를 수정한 뒤:

```bash
curl -X POST https://<도메인>/api/revalidate \
  -H "x-revalidate-secret: $REVALIDATE_SECRET" \
  -H "content-type: application/json" \
  -d '{"tags":["firestore:Project"]}'   # 본문 생략 시 전체 컬렉션
```

태그: `firestore:Project`, `firestore:Technology`, `firestore:Advantage`, `firestore:EngineeringNotes`
