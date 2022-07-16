import Seo from "../../components/Seo";
import { useRouter } from "next/router";

// NextJS에서는 js파일 이름에 [변수명]을 넣어주는 것으로 url에 변수를 넣을 수 있다.
// 파일 이름에 ...을 붙일 경우 Catch All을 사용할 수 있다. url뒤에 오는 변수를 담을 수 있다.
export default function Detail({params}) {
    const router = useRouter();
    const [title, id] = params || [];
    return <div>
        <Seo title={title} />
        <h4>{title}</h4>
    </div>;
}

export function getServerSideProps({params:{params}}) {
    return{
        props: {
            params,
        },
    }
}