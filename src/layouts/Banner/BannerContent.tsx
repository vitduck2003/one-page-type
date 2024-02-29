import React from 'react';
import Button from './BannerButton';

const BannerContent: React.FC = () => {
  return (
    <div className="lg:relative text-white lg:left-[250px] p-4 sm:w-max">
      <div className=''>
        <h2 className="lg:text-[60px] lg:leading-tight font-bold lg:mb-8">
          Each program is a <br /> masterclass created by <br /> experts to elevate your <br /> emotional well-being
        </h2>
        <p className="lg:text-[20px] lg:leading-normal mb-8">
          Workout whenever, wherever and however you like – <br />
          indoors, outdoors and online. Enjoy the most flexible <br />
          sports and wellness offer in Europe!
        </p>
      </div>
      <div className="sm:mx-auto">
        <Button className="sm:text-center text-white bg-[#F1900E] hover:bg-[#ce964c] lg:w-[230px] sm:mb-4 p-3 rounded-[50px]" children=" Discover Locations" href=''>
        </Button>
      </div>
    </div>
  );
};

export default BannerContent;