import React from 'react';
import Icon from './Icon';
const ContactInfo = () => {
  return (
    <div className="mx-auto sm:m-7" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
      <div className="lg:py-5">
        <p className="text-center lg:text-start text-[18px] leading-[36px] text-[#808080] mb-[32px]">
          Let us know questions, suggestions, and by filling out the contact form below.
        </p>
        <div className="flex gap-8 justify-center">
          <Icon className="fa-brands fa-facebook" />
          <Icon className="fa-brands fa-twitter" />
          <Icon className="fa-brands fa-instagram" />
          <Icon className="fa-brands fa-google-plus" />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;