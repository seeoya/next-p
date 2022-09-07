import Link from "next/link";
import { useRouter } from "next/router";
import Seo from "../components/Seo";

export default function Home({ results }) {
    // const [movies, setMovies] = useState();

    // useEffect(() => {
    //     (async () => {
    //         const { results } = await (await fetch(`/api/movies`)).json();
    //         setMovies(results);
    //     })();
    // }, []);

    const router = useRouter();
    const onClick = (id) => {
        router.push(`/movies/${id}`);
    };

    return (
        <div className="container">
            <Seo title="Home" />
            {/* {!movies && <h4>Loading...</h4>} */}
            {/* {movies?.map((movie) => ( */}
            {results?.map((movie) => (
                <div className="movie" onClick={() => onClick(movie.id)}>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} />
                    <h4>
                        <Link href={`/movies/${movie.id}`} key={movie.id}>
                            <a>{movie.original_title}</a>
                        </Link>
                    </h4>
                </div>
            ))}

            <style jsx>{`
                .container {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    padding: 20px;
                    gap: 20px;
                }
                .movie {
                    cursor: pointer;
                }
                .movie img {
                    width: 100%;
                    border-radius: 12px;
                    transition: transform 0.2s ease-in-out;
                    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
                }
                .movie:hover img {
                    transform: scale(1.05) translateY(-10px);
                }
                .movie h4 {
                    font-size: 18px;
                    text-align: center;
                }
            `}</style>
        </div>
    );
}

export async function getServerSideProps() {
    // run on the server
    const API_KEY = process.env.API_KEY;
    const { results } = await (await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)).json();
    return {
        props: {
            results
        }
    };
}
