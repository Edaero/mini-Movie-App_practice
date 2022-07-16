import { useRouter } from "next/router";

// NextJS에서는 js파일 이름에 [변수명]을 넣어주는 것으로 url에 변수를 넣을 수 있다.
export default function Detail() {
    const router = useRouter();
    console.log(router);
    return "detail";
}