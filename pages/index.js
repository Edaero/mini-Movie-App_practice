import { useEffect, useState } from "react"
import Seo from "../components/Seo"

export default function Home() {
    const [movies, setMovies] = useState();
    // useEffect를 통해 영화 API를 가져올 url을 fetch해서 json으로 가져온다.
    useEffect(() => {
        (async () => {
            const {results} = await (
                await fetch(`/api/movies`)).json();
            setMovies(results);
        })();
    }, []);
    return (
        <div className="container">
            <Seo title="Home" />
            {/* movies가 없을 경우 Loading이 나오고, 있을 경우 영화가 나오도록 설계 */}
            {/* map을 돌릴 때는 항상 key를 설정해줘야한다. */}
            {!movies && <h4>Loading...</h4>}
            {movies?.map(movie => (
                <div className="movie" key={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
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