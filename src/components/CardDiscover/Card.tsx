import React, { Fragment } from "react";
import CardDiscoverImage from "./CardImage";
import CardContentDiscover from "./CardContent";
import CardRef from "./CardRef";
import dataDiscover from "../../Data/discover";

const CardDiscover: React.FC = () => {
  return (
    <Fragment>
      {dataDiscover.map((discover, index) => (
        <div key={index} className="bg-white pb-4 w-fit lg:max-w-[340px]">
          <CardDiscoverImage urlImage={discover.imgUrl} />
          <CardContentDiscover title={discover.title} content={discover.desc} />
          <CardRef href="./home" children="Learn More" />
        </div>
      ))}
    </Fragment>
  );
};

export default CardDiscover;