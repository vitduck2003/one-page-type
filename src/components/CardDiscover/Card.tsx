import React, { Fragment } from "react";
import CardDiscoverImage from "./CardImage";
import CardContentDiscover from "./CardContent";
import CardRef from "./CardRef";

// Define interface for data structure
interface DiscoverData {
  imgUrl: string;
  title: string;
  desc: string;
}

interface CardDiscoverProps {
  data: DiscoverData[];
}

const CardDiscover: React.FC<CardDiscoverProps> = ({ data }) => {
  return (
    <Fragment>
      {data.map((discover: DiscoverData, index: number) => (
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