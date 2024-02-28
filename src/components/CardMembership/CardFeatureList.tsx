import React from 'react';

interface FeatureListProps {
  features: string[];
}

const FeatureList: React.FC<FeatureListProps> = ({ features }) => {
  return (
    <ul>
      {features.map((feature, index) => (
        <li key={index} className="m-2">{feature}</li>
      ))}
    </ul>
  );
};

export default FeatureList;