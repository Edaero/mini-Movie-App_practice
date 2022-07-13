/** @type {import('next').NextConfig} */

const API_KEY = "eaeaea96310ad18633d659d09d755f99"

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // API KEY를 숨기지 않는 redirect
  // redirection에 필요한 코드
  async redirects() {
    return [
      {
        // 주소 뒤에 별을 붙이면 뒤에 붙은 모든 걸 그대로 가져올 수 있다.
        // source를 찾아서 유저가 URL로 어디론가 이동한다면
        source: "/old-blog/:path*",
        // form이라는 destination에 보낸다
        destination: "/new-sexy-blog/:path*",
        // 여기서 이 redirection이 영구적인지 아닌지에 따라 검색엔진이 이 정보를 기억하는지 여부가 결정된다.
        permanent: false,
      }, // redirect를 추가하고 싶다면 뒤에 또 써주면 된다.
      {
        source: "/contact",
        destination: "/no-contact",
        permanent: false,
      },
    ];
  },
  // API KEY를 숨기는 rewrites
  // rewrites는 redirect시키기는 하지만 URL이 변하지 않는다.
  async rewrites() {
    return [
      {
        // source의 주소를 fetch 주소에 옮겨준다.
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      }
    ]
  }
};

module.exports = nextConfig