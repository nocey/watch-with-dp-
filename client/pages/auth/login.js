import Layout from "components/layout/layout";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {loginAuth} from 'redux/action/authAction'

export default function login() {
  const [email, setEmail] = useState();
  const [ses, setSes] = useState();
  const [pass, setPass] = useState();
  const dispatch = useDispatch()


  useEffect(() => {
    setSes(sessionStorage.getItem('user'))
  })
  


  if (ses) {

    if (error) {
      return <Layout title="Watch With Dpü">{error.message}</Layout>;
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
        <form >
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
            onChange={() => dispatch(loginAuth(email,pass))}
          />
        </form>
      </div>
    </Layout>
  );
}
