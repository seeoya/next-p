import NavBar from "../components/NavBar";
// import "../styles/globals.css";

export default function _app({ Component, pageProps }) {
    return (
        <>
            <NavBar />
            <Component {...pageProps} />
            <span>Hello</span>
            <style jsx global>{`
                a {
                    color: white;
                    text-decoration: none;
                }
            `}</style>
        </>
    );
}
