import { useMutation } from "@apollo/client";
import Layout from "components/layout/layout";
import jwt from "jsonwebtoken";
import gql from "graphql-tag";
import React, { useEffect, useState } from "react";

const LOGIN_USER = gql`
  mutation login($name: String!, $password: String!) {
    login(username: $name, password: $password) {
      email
      token
      id
      username
      createdAt
    }
  }
`;
export default function login() {
  const [email, setEmail] = useState();
  const [ses, setSes] = useState();
  const [pass, setPass] = useState();
  const [login, { loading, data }] = useMutation(LOGIN_USER);

  useEffect(() => {
    if (data) {
      sessionStorage.setItem("user", data.login.token);
    }
    const b = sessionStorage.getItem("user");

    setSes(sessionStorage.getItem("user"));
  }, []);

  const submitLogin = (e) => {
    e.preventDefault();
    login({
      variables: {
        name: email,
        password: pass,
      },
    });
  };

  if (ses) {
    var a, error;
    jwt.verify(ses, "naci12", function (err, decoded) {
      console.log(decoded); // bar
      console.log(err);
      error = err; // bar
      a = decoded;
    });

    if (error) {
      return <Layout title="Watch With Dpü">HATA ALDIK</Layout>;
    }

    return (
      <Layout title="Watch With Dpü">
        <h1>Zaten {a.username} olarak giris yaptiniz </h1>
      </Layout>
    );
  }

  return (
    <Layout title="Watch With Dpü">
      <div>
        <form onSubmit={submitLogin}>
          <div>
            <input
              type="text"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </div>
          <input
            type="password"
            onChange={(e) => {
              setPass(e.target.value);
            }}
          ></input>
          <input
            type="submit"
            className="btn bg-color-button text-white"
            placeholder="Gonder"
            value="Gonder"
          />
        </form>
        {data && data.login.email}
      </div>
    </Layout>
  );
}
