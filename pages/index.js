import Link from 'next/link'
import Layout from '../components/layout/layout'
import Post from '../components/post/post'
import Search from '../components/search/search'


const IndexPage = () => {
  return (
    <Layout title="Watch With Dpü">
      <div className="container-fluid ">
        <div className="row justify-content-around align-items-start ">
          <div className="col-7
          ">
          <Post link='2' name='Naci Aytı' nick='nocey'/>
          <Post link='2' name='Naci Aytı' nick='nocey'/>
          <Post link='2' name='Naci Aytı' nick='nocey'/>
          <Post link='2' name='Naci Aytı' nick='nocey'/>
          </div>
  
          <Search />
          
        </div>
      </div>
      <div className='h1000'>
  
      </div>
    </Layout>
  )
}

export default IndexPage
