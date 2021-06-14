import Image from "next/image";
import React from "react";
import Overview from "./banner/Overview";
import Score from "./banner/Score";

export default function Film({ name, score, content, img }) {
  const myLoader = ({ src, width, quality }) => {
    return `https://image.tmdb.org/t/p/w500/${src}`
  }
  const image = `https://image.tmdb.org/t/p/w500/${img}`
  return (
    <div className="w-100 bg-dark mt-5 h-100" style={{}}>
      <div className=" film-bg position-relative d-flex flex-row justify-content-center align-items-center">
        <div className="bg-film position-absolute film-bg overflow-hidden">
          <img
            src={image}
            className="w-100 position-absolute"
            style={{ top: "-200%", zIndex: "1" }}
          ></img>
        </div>
        <div className="col-2 mt-4 ">
          <Image
            loader={myLoader}
            src={img}
            alt="Close Nav Bar"
            height="2000"
            width="1200"
          ></Image>
        </div>
        <div
          className="col-9 ms-2 d-flex flex-column justify-content-evenly align-items-start"
          style={{ zIndex: "2" }}
        >
          <h2 style={{ color: "#2F80ED" }}>{name}</h2>
          <Score score={score}></Score>
          <Overview content={content}></Overview>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12 bg-dark mt-5"></div>
      </div>
    </div>
  );
}
