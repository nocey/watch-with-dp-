import Image from "next/image";
import React from "react";
import Overview from "./banner/Overview";
import Score from "./banner/Score";

export default function Film(content) {
  return (
    <div className="w-100 bg-dark mt-5 h-100" style={{}}>
      <div className=" film-bg position-relative d-flex flex-row justify-content-center align-items-center">
        <div className="bg-film position-absolute film-bg overflow-hidden">
          <img src="/img/game.jpg" className="w-100 position-absolute" style={{top:'-200%', zIndex:'1', }}></img>
        </div>
        <div className="col-2 mt-4 ">
          <Image
            src="/img/game.jpg"
            alt="Close Nav Bar"
            height="630"
            width="350"
          ></Image>
        </div>
        <div className="col-9 ms-2 d-flex flex-column justify-content-evenly align-items-start" style={{zIndex:'2',}}>
          <h2 style={{color:'#2F80ED'}}>Game Of Thronoes</h2>
          <Score score={55}></Score>
          <Overview content={"Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond."}></Overview>
        </div>
      </div>
      <div className='row mt-5'>
        <div className='col-12 bg-dark mt-5' >
          d
        </div>
      </div>
    </div>
  );
}
