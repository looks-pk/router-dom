import React from "react";
import Navbar from "./Navbar";

const Video = () =>{
    return(
        <>
        <Navbar/>
        <div className="vid">
            <iframe  width="560" height="315" src="https://www.youtube.com/embed/UNUfsBUUSGI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </>

    );
};

export default Video;