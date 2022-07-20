import Seo from "../../components/Seo";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// NextJS에서는 js파일 이름에 [변수명]을 넣어주는 것으로 url에 변수를 넣을 수 있다.
// 파일 이름에 ...을 붙일 경우 Catch All을 사용할 수 있다. url뒤에 오는 변수를 담을 수 있다.
export default function Detail({params}) {
    const router = useRouter();
    // || [] 이 추가된 이유는 HTML이 먼저 내려와 js가 다운되기 전 까진 빈 배열을 추가해 오류를 방지하기 위함이다.
    const [title, id] = params || [];
    const [detail, setDetail] = useState([]);
    const getMovie = async() => {
        const json = await(await fetch(
            `http://localhost:3000/api/movies/${params[1]}`
        )).json();
        setDetail(json);
    }
    useEffect(() => {
        getMovie();
    }, []);
    return <div>
        <div className="container">
            <Seo title={title} />
            <img src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`}></img><hr></hr>
            <h2>{title}<br></br><span>{detail.release_date}</span></h2>
            <p>{detail.overview}</p>
            <style jsx> {`
                    .container {
                        border: 1px solid lightgrey;
                        border-radius: 12px;
                        padding: 10px;
                        margin: auto;
                        text-align: center;
                    }
                    .container img {
                        max-width: 70%;
                        border-radius: 12px;
                    }
                    .container h2, p {
                        text-align: center;
                    }
                `}
            </style>
        </div>
    </div>
}

export async function getServerSideProps({params:{params}}) {
    return{
        props: {
            params,
        },
    }
}
