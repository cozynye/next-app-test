import Link from "next/link";
import { useRouter } from "next/router";
import Seo from "../components/Seo";

export default function Home({ results }) {
  const router = useRouter();
  const onClick = (id, title) => {
    // router.push(
    //   {
    //   pathname:`/movies/${id}`,
    //   query:{
    //     title:`${title}`
    //   },
    // }, `/movies/${id}`) // query 숨기기
    router.push(`/movies/${title}/${id}`,

    )

  }

  return (
    <div className="container">
      {/* <Seo title="home"/> */}
      {!results && <h4>Loading ...</h4>}
      {results?.map((movie) =>
        <div onClick={() => onClick(movie.id, movie.original_title)} className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          {/* /<Link href={`/movies/${movie.id}`}className="movie" key={movie.id}> */}
          <Link
            href={`/movies/${movie.original_title}/${movie.id}`}
            //  href={
            //    {
            //     pathname:`/movies/${movie.id}`,
            //     query:{
            //       title:`${movie.original_title}`
            //     },
            //   }
            // } 
            // as={`/movies/${movie.id}`}
            className="movie" key={movie.id}>
            <a><h4>{movie.original_title}</h4></a>
          </Link>
        </div>

      )}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie{
          cursor : pointer;
        }
        .movie img {
          max-width: 100%;
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
  )
}

//getServerSideProps는 서버에서 실행된다. 이 함수에서 무엇을 return 하던지 이걸 props로써 page에게 주게 된다.
export async function getServerSideProps() {
  const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();

  return {
    props: {
      results,
    }
  }

}