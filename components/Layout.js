import NavBar from "./NavBar"

// children은 NextJS가 만들어 놓은 prop이다. 하나의 component를 또 다른 component안에 넣을 때 쓴다.
export default function Layout({children}) {
    return (
        <>
        <NavBar />
        <div>{children}</div>
        </>
    )
}