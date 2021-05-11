import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
// import { signIn, signOut, useSession } from 'next-auth/client'

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
              <div className="col-3 d-flex justify-content-end align-items-center m-2">
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
              <div className="col-md-4 col-lg-4 d-flex justify-content-evenly align-items-center fs-5">
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
              <div className="col-3">
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