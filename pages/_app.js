import Layout from "../components/Layout";
import "../styles/globals.css"

export default function Myapp({Component, pageProps}) {
    return (
        // Layout에 어떤 것을 넣더라도 Layout의 children으로 보여지게 된다.
        // _app.js 파일에는 많은 global import가 들어가야하기 때문에 Layout에 작성하는 것
        <Layout>
            <Component {...pageProps} /> {/* =children */}
        </Layout>
    )
}