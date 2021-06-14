import Film from "../../components/Film/Film";
import Layout from "../../components/layout/layout";
import { useRouter } from "next/router";
import axios from "axios";

const FilmPage = (props) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout title="Game Of Thrones">
      <div className="container-fluid h1000">
        <div className="row justify-content-center align-items-center">
          <div className="col-10 mt-3">
            <Film
              name={props.a.title}
              score={props.a.vote_average}
              content={props.a.overview}
              img={props.a.poster_path}
            ></Film>
            <h1>{id}</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FilmPage;

export async function getStaticPaths(e) {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/popular?api_key=1817e292f51d003a69f5fad178683650&language=en-US&page=1",
  };
  var a = await axios(options)
    .then((data) => data)
    .catch((error) => error);

  const datas = a.data.results.map((e) => {
    return {
      params: { id: e.id.toString() },
    };
  });

  return {
    paths: datas,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  console.log(context.params.id);
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/"+context.params.id,
    params: {
      api_key: "1817e292f51d003a69f5fad178683650",
    },
  };
  var a = await axios(options)
    .then((data) => data)
    .catch((error) => error);
  return {
    props: {
      a: a.data,
    },
  };
}
