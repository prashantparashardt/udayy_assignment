import React, { useState } from 'react'
import './Home.css'
function Home(props) {
    const [embedUrl1,setEmbedUrl1]=useState("");
    const [embedUrl2,setEmbedUrl2]=useState("");
    return (
      <div className="home">
        <div className="home_header">
          <div className="home_header_left">
            <h1>Welcome {props.user}</h1>
            
          </div>
          <div className="home_header_middle">
          <input 
              type="text"
              onChange={(e) => {
                setEmbedUrl1(e.target.value);
              }}
            />
              <input
              type="text"
              onChange={(e) => {
                setEmbedUrl2(e.target.value);
              }}
            />
            </div>
          <div className="home_header_right">
           
            <button type="submit" onClick={props.logout}>
              Logout
            </button>
          </div>
        </div>
        <div className="home_body">
          <div className="home_body_view_left">
            <iframe
              src={embedUrl1}
              title="W3Schools Free Online Web Tutorial1s"
            ></iframe>
          </div>
          <div className="home_body_view_left">
            <iframe
              src={embedUrl2}
              title="W3Schools Free Online Web Tutorials"
            ></iframe>
          </div>
        </div>
      </div>
    );
}

export default Home
