import { useQuery } from "@apollo/client";
import NewPost from "components/post/newPost";
import gql from "graphql-tag";
import Link from "next/link";
import Layout from "../components/layout/layout";
import Post from "../components/post/post";
import Search from "../components/search/search";

const IndexPage = () => {
  const POST = gql`
    query {
      getPosts {
        id
        body
        createdAt
        username
      }
    }
  `;



  const { loading, error, data } = useQuery(POST);

  if (loading) return "Loading...";
  if (error) {
    console.log(error);
    return <div style={{ color: "white" }}>{`Error! ${error.message}`}</div>;
  }

  console.log(data);
  return (
    <Layout title="Watch With Dpü">
      <div className="container-fluid ">
        <div className="row justify-content-around align-items-start ">
          <div className="col-7">
            <Post link="2" name="Naci Aytı" nick="nocey" />
            {
              data.getPosts.map( e => {
                return <NewPost link={e.id} name={e.username} nick={e.username} data={e.body} />
              })
             }
          </div>

          <Search />
        </div>
      </div>
      <div className="h1000"></div>
    </Layout>
  );
};

export default IndexPage;
