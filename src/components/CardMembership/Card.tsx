import React, { Fragment } from 'react';
import FeatureList from './CardFeatureList';
import ButtonMemberShip from './CardButton';

interface MemberShipData {
  title: string;
  features: string[];
  buttonText: string;
}

interface CardMemberShipProps {
  data: MemberShipData[];
}

const CardMemberShip: React.FC<CardMemberShipProps> = ({ data }) => {
  return (
    <Fragment>
      {data.map((membership, index) => (
        <div key={index} className="bg-white md:w-full lg:p-[30px] lg:w-[340px]">
          <h3 className="text-[30px] font-bold my-4">{membership.title}</h3>
          <div className="my-8">
            <FeatureList features={membership.features} />
            <ButtonMemberShip buttonText={membership.buttonText} href='https://www.facebook.com/dinhvietducisme' />
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default CardMemberShip;