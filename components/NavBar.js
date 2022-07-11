// 네비게시션 바 만들기
import Link from "next/link"; // Link는 NextJS에서 클라이언트 사이드 네비게이션을 제공해준다.
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
    const router = useRouter();

    return <nav>
        {/* Link태그는 href를 위해 사용하고, 나머지 속성들은 a태그에 넣어준다. */}
        <Link href="/">
            {/* css를 적용하는 세 가지 방법 1 - `${a}${b}` */}
            <a className={
                `${styles.link}
                ${router.pathname === "/" ? styles.active : ""}`
                }>Home</a>
        </Link>
        <Link href="/about">
            {/* css를 적용하는 세 가지 방법 2 - [a,b].join() */}
            {/* join()은 한 배열을 다른 한 문자열로 바꿔준다. ()안에는 배열 사이에 들어갈 내용 */}
            <a className={
                [styles.link, router.pathname === "/about" ? styles.active : ""].join(" ")
                }>About</a>
        </Link>
        <Link href="/ddedde">
            <a className={
                `${styles.link}
                ${router.pathname === "/ddedde" ? styles.active : ""}`}>DDEDDE</a>
        </Link>

        {/* css를 적용하는 세 가지 방법 3 - styled JSX(NextJS 고유의 방식), 임포트가 필요없다.
            모든 방식은 컴포넌트 내로 한정된다.
            <styles jsx>{`css`}</styles> */}
        <style jsx>{`
            nav {
                background-color: tomato;
            }
            a {
                text-decoration: none;
            }
        `}</style>
    </nav> 
}