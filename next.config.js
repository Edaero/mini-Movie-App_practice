/** @type {import('next').NextConfig} */

const API_KEY = "eaeaea96310ad18633d659d09d755f99"

const nextConfig = {
  reactStrictMode: true,
  async redirects() {  // redirect 문법, API KEY를 숨기지 않는다.
    return [
      {
        // path는 임의의 id값이나 string 등 어떤 값이든 들어갈 수 있다.
        // path에 *을 붙이면 뒤에 붙는 모든 값이든 가져올 수 있다.
        source: "/old-blog/:path*", // source는 유저가 URL로 접근하는 주소
        destination: "/new-blog/:path*", // source로 접근하면 destination에 있는 주소로 변경해 보낸다.
        permanent: false, // redirection이 영구적인지 아닌지에 따라 검색엔진이 이 정보를 기억 여부를 결정
      },
      { // redirect를 추가하고 싶다면 뒤에 또 써주면 된다.
        source: "/bofore-contact/:path*",
        destination: "/after-contact/:path*",
        permanent: false,
      },
    ];
  },
  // rewrites를 사용하면 API KEY를 숨길 수 있다.
  async rewrites() { // rewrites는 redirect시키기는 하지만 URL이 변하지 않는다.
    return [
      {
        source: "/api/movies", // source의 주소를 fetch 주소에 옮겨준다.
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        // 영화 detail 페이지 마스킹
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ]
  }
};

module.exports = nextConfig