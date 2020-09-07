import React, { useState } from "react";
import Portrait from "assets/portrait-full.JPEG";
import PortraitThumbnail from "assets/portrait-thumbnail.JPEG";
import "components/Image.css";

const Image = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const isFirefox = typeof InstallTrigger !== "undefined";

  return (
    <>
      <div className={"image-container" + (isFirefox ? "-firefox" : "")}>
        {props.isMe ? (
          <>
            <img
              className="image thumbnail"
              src={PortraitThumbnail}
              alt="Small me!"
              style={{ visibility: isLoaded ? "hidden" : "visible" }}
            />
            <img
              onLoad={() => {
                setIsLoaded(true);
              }}
              className="image full"
              src={Portrait}
              alt="Me!"
              style={{ opacity: isLoaded ? 1 : 0 }}
            />
          </>
        ) : null}
      </div>
    </>
  );
};

export default Image;
