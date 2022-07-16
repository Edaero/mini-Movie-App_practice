import { useRouter } from "next/router";

// NextJS에서는 js파일 이름에 [변수명]을 넣어주는 것으로 url에 변수를 넣을 수 있다.
export default function Detail() {
    const router = useRouter();
    return <div>
        {/* router.query.title은 유저가 홈페이지에서 상세페이지로 넘어올 때에만 존재한다. */}
        {/* 유저가 익명모드로 홈페이지를 거치지 않고 상세 페이지로 바로 접속하면 로딩이 발생한다. */}
        <h4>{router.query.title || "Loading..."}</h4>
    </div>;
}