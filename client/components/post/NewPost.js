import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
export default function NewPost({ link, name, nick, data }) {
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
          <p>{data && data}</p>
        </div>
      </div>
    </div>
  );
}
