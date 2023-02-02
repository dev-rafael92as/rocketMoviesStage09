import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import { FiPlus } from "react-icons/fi"
import { MovieCard } from "../../components/MovieCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

export function Home() {
    const { setMoviePreviewPage, search } = useAuth()
    const [ movies, setMovies ] = useState([])

    useEffect(() => {
        async function fetchMovies() {
            const response = await api.get(`/movie_notes?title=${search}`)
            setMovies(response.data)
        }
        fetchMovies()
    },[search])

    return (
        <Container>
            <Header />
            <main>
                <div className="container-title-home">
                    <h1>Meus filmes</h1>
                    <Link to="/movieCreate">
                        <FiPlus />
                        Adicionar filme
                    </Link>
                </div>

                <section>
                    {movies.map((movie, index) => (
                        <MovieCard 
                            key={index} 
                            to={`/moviePreview?${movie.id}`} 
                            onClick={() => setMoviePreviewPage(movie)}
                            data={{
                                title: `${movie.title}`,
                                description: `${movie.description}`, 
                                review: `${movie.rating}`,
                                tags: movie.tags
                            }}
                        />
                    ))}
                    
                    </section>
            </main>
        </Container>
    )
}