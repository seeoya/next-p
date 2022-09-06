import Layout from "../components/Layout";
import "../styles/globals.css";

export default function _app({ Component, pageProps }) {
    return (
        <>
            <Layout>
                <Component {...pageProps} />
                <footer>푸터</footer>
            </Layout>
        </>
    );
}
