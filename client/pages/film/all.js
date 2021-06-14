import Film from "../../components/Film/Film";
import Layout from "../../components/layout/layout";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

const FilmPage = (props) => {
  const myLoader = ({ src, width, quality }) => {
    return `https://image.tmdb.org/t/p/w500/${src}`;
  };
  const router = useRouter();
  const { id } = router.query;
  console.log(props.a);
  return (
    <Layout title="All Films">
      <div className="row align-items-center justify-content-center">
        <div className='w-75 row'>
          {props.a.map((element) => {
            return (
              <div className="float-start m-2" style={{width: '18%'}}>
                {element.title}
                <Link href={element.id.toString()}>
                  <Image
                    loader={myLoader}
                    src={element.poster_path}
                    alt="Close Nav Bar"
                    height="2000"
                    width="1200"
                  ></Image>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default FilmPage;

export async function getStaticProps(context) {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/popular?api_key=1817e292f51d003a69f5fad178683650&language=en-US&page=1",
  };
  var a = await axios(options)
    .then((data) => data)
    .catch((error) => console.log(error));
  return {
    props: {
      a: a.data.results,
    },
  };
}
