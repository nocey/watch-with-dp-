import Film from '../../components/Film/Film';
import Layout from '../../components/layout/layout'
import {useRouter} from 'next/router';

const FilmPage = () => {
    const router = useRouter();
    const {id} = router.query;
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
}
    

export default FilmPage;


