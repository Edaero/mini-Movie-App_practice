// 네비게이션 바 만들기
import Link from "next/link"; // Link는 NextJS에서 클라이언트 사이드 네비게이션을 제공해준다.
import { useRouter } from "next/router";

export default function NavBar() {
    const router = useRouter();
    return (
        <nav>
            {/* public 폴더에 있는 vercel.svg파일을 가져옴 */}
            <img src="/vercel.svg" />
            <div>
                {/* Link태그는 href를 위해 사용하고, 나머지 속성들은 a태그에 넣어준다. */}
                <Link href="/">
                    <a className={router.pathname === "/" ? "active" : ""}>Home</a>
                </Link>
                <Link href="/about">
                    <a className={router.pathname === "/about" ? "active" : ""}>About</a>
                </Link>
            </div>
            {/* css를 적용하는 세 가지 방법 3 - styled JSX(NextJS 고유의 방식), 임포트가 필요없다.
                모든 방식은 컴포넌트 내로 한정된다.
                <styles jsx>{`css`}</styles> */}
            <style jsx>{`
                a {
                    text-decoration: none;
                }
                nav {
                    display: flex;
                    gap: 10px;
                    flex-direction: column;
                    align-items: center;
                    padding-top: 20px;
                    padding-bottom: 10px;
                    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
                        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px
                }
                img {
                    max-width: 100px;
                    margin-bottom: 5px;
                }
                nav a {
                    font-weight: 600;
                    font-size: 18px;
                }
                .active {
                    color: tomato;
                }
                nav div {
                    display: flex;
                    gap: 10px;
                }
            `}</style>
        </nav>
    )
}