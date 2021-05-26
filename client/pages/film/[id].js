import Film from "../../components/Film/Film";
import Layout from "../../components/layout/layout";
import { useRouter } from "next/router";
import axios from "axios";

const FilmPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout title="Game Of Thrones">
      <div className="container-fluid h1000">
        <div className="row justify-content-center align-items-center">
          <div className="col-10 mt-3">
            <Film></Film>

            <h1>{id}</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FilmPage;

export async function getStaticPaths(context) {
  console.log(context);
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/603",
    params: {
      api_key: "1817e292f51d003a69f5fad178683650",
    },
  };
  var a = await axios(options)
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

  return {
    props: {
      a: a,
    },

  };
}
