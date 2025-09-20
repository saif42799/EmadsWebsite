import React from "react";
import { Link } from "react-router";

function Gallery() {
    return (
        <div className="collections-Container">
            <div className="collections">
                <h1>COLLECTIONS</h1>
                <div className="collections-Names">
                    
                    <Link className="coll-Link" id="link-up" to={"/Tokyo"}><p>TOKYO, JAPAN</p></Link>
                    <Link className="coll-Link" id="link-down" to={"/Osaka"}><p>OSAKA, JAPAN</p></Link>
                    <Link className="coll-Link" id="link-up" to={"/Kyoto"}><p>KYOTO, JAPAN</p></Link>
                    <Link className="coll-Link" id="link-down" to={"/NewYork"}><p>NEW YORK, USA</p></Link>
                    <Link className="coll-Link" id="link-up" to={"/Muse"}><p>MUSE</p></Link>

                </div>

            </div>
        </div>

    )
}

export default Gallery