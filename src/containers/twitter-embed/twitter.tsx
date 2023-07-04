import React, {Suspense, useContext} from "react";
import "./twitter.css";
import Loading from "../loading/Loading";
import {TwitterTimelineEmbed} from "react-twitter-embed";
import {twitterDetails} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

const renderLoader = () => <Loading />;
const cantDisplayError =
  "<div className='centerContent'><h2>Can't load? Check privacy protection settings</h2></div>";

function timeOut() {
  setTimeout(function () {
    const twitterElement = document.getElementById("twitter") as HTMLElement;
    if (!twitterElement.innerHTML.includes("iframe")) {
      twitterElement.innerHTML = cantDisplayError;
    }
  }, 10000);
}
var widthScreen = window.screen.width;

export default function Twitter() {
  const {isDark} = useContext<any>(StyleContext);

  if (twitterDetails.userName) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="tw-main-div" id="twitter">
          <div className="centerContent">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName={twitterDetails.userName}
              options={{height: 400, width: {widthScreen}}}
              placeholder={renderLoader()}
              autoHeight={false}
              borderColor="#fff"
              key={isDark ? "1" : "2"}
              theme={isDark ? "dark" : "light"}
              noFooter={true}
              onLoad={() => timeOut()}
            />
          </div>
        </div>
      </Suspense>
    );
  } else {
    return null;
  }
}
