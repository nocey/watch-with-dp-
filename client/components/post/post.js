import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { setContext } from "@apollo/client/link/context";

export default function Post({ link, name, nick }) {
  const [post, setPost] = useState();
  const [ses, setSes] = useState();
  const [postdata, setPostData] = useState();
  useEffect(() => {
  }, []);
  const CREATE_POST = gql`
    mutation createPost($body: String!) {
      createPost(body: $body) {
        id
        body
        username
        comments {
          body
          createdAt
          username
        }
        likes {
          id
          username
        }
      }
    }
  `;


  const [postCreate, { data, loading }] = useMutation(CREATE_POST);
  


  const formSubmit = (e) => {
    e.preventDefault();
    postCreate({
      variables: {
        body: post,
      },
    })
    console.log(e)
  };
  return (
    <div className="row post">
      <div className="col-1">
        <Link href={process.env.SITE_URL + `profile/${link}`}>
          <a>
            <div
              className="fs-1 rounded-circle bg-white text-dark text-center fw-bold d-inline-block"
              style={{ width: 60, height: 60 }}
            >
              <p className="text-color-1">{name.split("")[0]}</p>
            </div>
          </a>
        </Link>
      </div>
      <div className="col-3">
        <Link href={process.env.SITE_URL + `profile/${link}`}>
          <a className="text-color-1 ms-2">{name}</a>
        </Link>
        <Link href={process.env.SITE_URL + `profile/${link}`}>
          <a className="nick ms-2">@{nick}</a>
        </Link>
      </div>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-2">
          <div className="w-100">
            <Image
              className="w-100"
              src="/img/lord.jpg"
              alt="Picture of the author"
              width={1200}
              height={1600}
            />
          </div>
        </div>
        <div className="col-9 mb-4">
          <form className="" onSubmit={formSubmit}>
            <textarea
              className="text-area-post w-100  ps-3 pt-3"
              onChange={(e) => {
                setPost(e.target.value);
              }}
            ></textarea>
            <div className="">
              <input
                type="submit"
                className="btn bg-color-button text-white"
                placeholder="Gonder"
                value="Gonder"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
