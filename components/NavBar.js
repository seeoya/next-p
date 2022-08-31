import Link from "next/link";
import { useRouter } from "next/router";

function NavBar() {
    const router = useRouter();

    return (
        <nav>
            <Link href="/">
                <a style={{color: router.pathname == "/" ? "red" : "blue"}} className="link">Home</a>
            </Link>
            <Link href="/about">
                <a style={{color: router.pathname == "/about" ? "red" : "blue"}} className="link">About</a>
            </Link>
        </nav>
    );
}

export default NavBar;
