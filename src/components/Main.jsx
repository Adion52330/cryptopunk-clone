import React, { useState, useEffect } from "react";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";
import "./Main.css";

const Main = ({ punkListData, selectedPunk }) => {
  const [activePunk, setActivePunk] = useState(punkListData[0]);

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk]);
  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img
              src={activePunk.image_original_url}
              className="selectedPunk"
              alt=""
            />
          </div>
        </div>
        <div className="me">
          <div className="punkDetails" style={{ color: "#fff" }}>
            <div className="title">{activePunk.name}</div>
            <span className="itemNum">#{activePunk.token_id}</span>
          </div>
          <div className="owner">
            <div className="ownerImageContainer">
              <img src={activePunk.owner.profile_img_url} alt="" />
            </div>
            <div className="ownerDetails">
              <div className="ownerName">
                <div style={{ color: "white" }}>{activePunk.owner.address}</div>
                <div className="handle">@adion</div>
              </div>
              <div className="needs">
                <div className="ownerLink">
                  <img src={instagramLogo} alt="" />
                </div>
                <div className="ownerLink">
                  <img src={twitterLogo} alt="" />
                </div>
                <div className="ownerLink">
                  <img src={moreIcon} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
