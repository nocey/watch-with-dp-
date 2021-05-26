import { useQuery } from "@apollo/client";
import axios from "axios";
import NewPost from "components/post/newPost";
import gql from "graphql-tag";
import Link from "next/link";
import Layout from "../components/layout/layout";
import Post from "../components/post/post";
import Search from "../components/search/search";

const IndexPage = (props) => {
  console.log(props);
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
  const PROFILE = gql`
    query {
      getUser {
        id
        email
        username
      }
    }
  `;
  var { loading, error, data } = useQuery(POST);
  const datas = data;
  var { loading, error, data } = useQuery(PROFILE);
  const profile = data;

  if (loading) return "Loading...";
  if (error) {
    console.log(error);
    return <div style={{ color: "white" }}>{`Error! ${error.message}`}</div>;
  }

  return (
    <Layout title="Watch With Dpü">
      <div className="container-fluid ">
        <div className="row justify-content-around align-items-start ">
          <div className="col-7">
            <Post
              link={profile.getUser.id}
              name={profile.getUser.username}
              nick={profile.getUser.username}
            />
            {props.a.data.getPosts.map((e, index) => {
              return (
                <NewPost
                  key={index}
                  link={e.id}
                  name={e.username}
                  nick={e.username}
                  data={e.body}
                />
              );
            })}
          </div>

          <Search />
        </div>
      </div>
      <div className="h1000"></div>
    </Layout>
  );
};

export async function getStaticProps(context) {
  console.log(context);

  var a = await axios({
    url: "http://localhost:4000/",
    method: "post",
    data: {
      query: `
      query {
        getPosts {
          id
          body
          createdAt
          username
        }
      }
        `,
    },
  }).then((result) => {
    return result.data;
  });

  return {
    props: {
      a: a,
    },
  };
}

export default IndexPage;
