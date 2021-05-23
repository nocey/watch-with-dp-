import React, { ReactNode, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import jwt from "jsonwebtoken";
import token from "middlewares/Token";
import { useDispatch, useSelector } from "react-redux";
import Auth from "./Auth";

const Layout = ({ children, title = "This is the default title" }) => {
  return (
    <div className="text-white bg-color-1">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header className="text-white bg-color-2">
        <nav className="mb-4">
          <div className="container-fluid">
            <div className="row justify-content-start align-items-center">
              <div className="col-3 col-lg-2 d-flex justify-content-end align-items-center m-2">
                <Link href="/">
                  <a>
                    <Image
                      src="/img/logo.png"
                      alt="Picture of the author"
                      width={120}
                      height={50}
                    />
                  </a>
                </Link>
              </div>
              <div className="col-12 col-lg-7 col-xl-7 d-flex justify-content-evenly align-items-center fs-5">
                <Link href="/">
                  <a className="text-color-1 fw-bold">Home</a>
                </Link>
                <Link href="/about">
                  <a className="text-color-1 fw-bold">About</a>
                </Link>
                <Link href="/users">
                  <a className="text-color-1 fw-bold">Users List</a>
                </Link>
                <Link href="/film">
                  <a className="text-color-1 fw-bold">Film</a>
                </Link>
                <a className="text-color-1 fw-bold" href="/api/users">
                  Users API
                </a>
              </div>
              <div className="col-xl-2 col-lg-2 col-1">
                <Auth />
              </div>
            </div>
          </div>
        </nav>
      </header>
      {children}
      <footer className="bg-dark"></footer>
    </div>
  );
};
export default Layout;
