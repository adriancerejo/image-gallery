import React from "react";
import { FaHeart } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Picture = ({ source, firstName, lastName, likes, thumbnail }) => {
  return (
    <div className="tile">
      <div className="info">
        <div className="name">
          Uploaded By: {firstName} {lastName}
        </div>
        <div className="likes">
          <FaHeart /> {likes}
        </div>
      </div>
      {/* <img className="picture" src={source} alt='' /> */}
      <LazyLoadImage
        className="picture"
        alt=""
        effect="blur"
        placeholderSrc={thumbnail}
        src={source}
      />
    </div>
  );
};

export default Picture;
