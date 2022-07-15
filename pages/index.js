import Seo from "../components/Seo"

// getServerSideProps에서 오는 return값을 home()에서 props로 가져온다.
export default function Home({results}) {
    return (
        <div className="container">
            <Seo title="Home" />
            {/* map을 돌릴 때는 항상 key를 설정해줘야한다. */}
            {results?.map(movie => (
                <div className="movie" key={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                    <h4>{movie.original_title}</h4>
                </div>
            ))}
            <style jsx> {`
                .container {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    padding: 20px;
                    gap: 10px;
                }
                .movie {
                    cursor: pointer;
                }
                .movie img {
                    max-width: 100%;
                    border-radius: 12px;
                    transition: transform 0.2s ease-in-out;
                    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
                }
                .movie:hover img {
                    transform: scale(1.05) translateY(-5px);
                }
                .movie h4 {
                    font-size: 18px;
                    text-align: center;
                }
            `}
            </style>
        </div>
    )
}

// server side rendering, loading을 넣지 않은 페이지에 쓴다.
// getServerSideProps의 이름은 변경하지 않는다.
// getServerSideProps안에 들어가는 코드는 client가 아니라 오직 server쪽에서만 작동한다.
// getServerSideProps를 통해 props를 pasge에 보낼 수 있다.
export async function getServerSideProps() {
    // fetch, 데이터베이스 요청, API 불러오기, API key 사용하기 등에 쓰인다.
    // url에 /api/movies 뿐만 아니라 전체 url을 작성해 준다.
    const {results} = await (await fetch(`http://localhost:3000/api/movies`)).json();
    return {
        props: {
            results,
        },
    };
}