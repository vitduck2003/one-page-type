import React from 'react';
import BannerContent from './BannerContent';
import BannerImage from './BannerImage';

const Banner: React.FC = () => {
  return (
    <div>
      <div className="bg-img lg:py-[180px]">
        <BannerImage />
        <BannerContent />
      </div>
    </div>
  );
};

export default Banner;