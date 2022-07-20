# mini-Movie-App_clone
- [노마드 코더 NextJS로 mini-Movie-App 클론 코딩](https://nomadcoders.co/nextjs-fundamentals/lobby)
- 20220720 완료
- 사용언어: HTML, CSS, JavaScript, React, nodeJS, NextJS
## 구현 기능 pages 폴더
> ### _app.js
- Layout에 페이지 파일들을 component와 pageProps로 받아와 렌더링
> ### index.js
- getServerSideProps를 사용해 서버 사이드 렌더링 구현
- 서버에서 영화 API를 활용해 영화들의 이미지, 제목 정보 구현
- router.push를 이용해 영화 이미지 클릭 시, 해당 영화 디테일 페이지로 이동할 수 있도록 함
> ### movies > [...params].js
- 파일 이름 앞에 ...을 붙여 URL뒤에 오는 변수를 Catch할 수 있게하였다.
- useState, useEffect를 사용해 영화 고유 id에 해당하는 API를 받아와 영화 이미지, 제목, 개봉일, 개요 정보 구현
- getServerSideProps를 사용해 서버 사이드 렌더링 구현, URL 뒤 해당 영화 제목, id가 올 수 있도록 구현
> ### about.js
- about 페이지
> ### 404.js
- 404 에러 페이지 구현
## 구현 기능 components 폴더 - style JSX 사용
> ### Layout.js
- children을 사용해 다른 component안에 component가 들어갈 수 있게 구현
- NavBar.js와 _app.js에서 받아오는 페이지들을 함께 렌더링
> ### NavBar.js
- Link를 이용해 클라이언트 사이드 네비게이션 구현
> ### Seo.js
- NextJS가 제공하는 Head 컴포넌트 사용
## 구현 기능 MINI-MOVIE-APP 폴더
> ### next.config.js
- rewrites를 사용해 API-KEY를 숨기고, 유저가 이용하는 URL변경
## 결과물 이미지
![image](https://user-images.githubusercontent.com/99079176/179985553-9e882c6c-39e7-43f3-9208-6ca319c10ea5.png)
![image](https://user-images.githubusercontent.com/99079176/179985610-0d753853-cfda-4cae-b350-1012c03be823.png)
