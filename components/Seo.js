// NextJS가 제공하는 Head 컴포넌트
import Head from "next/head";
// Head 컴포넌트를 Seo.js에 개인화
export default function Seo({title}) {
    return (
    <Head>
        <title>{title} | Next Movies</title>
    </Head>
    );
}