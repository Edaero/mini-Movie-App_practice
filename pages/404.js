import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div>
        <h1>!!! Invalid Path !!!</h1>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <style jsx>{`
        div {
          height: 800px;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 10px;
        }
        h1 {
          color: red;
          background-color: darkgray;
          padding: 5px;
          border-radius: 5px;
        }
        a {
          font-size: 40px;
          padding: 5px;
          border-radius: 5px;
          color: black;
          text-decoration: none;
        }
        a:hover {
          color: white;
          background-color: darkgray;
        }
      `}</style>
    </>
  );
}
