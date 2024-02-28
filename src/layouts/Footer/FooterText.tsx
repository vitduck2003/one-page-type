import React from 'react';

interface TextProps {
  className?: string;
  content: string;
}

const Text: React.FC<TextProps> = ({ className, content }) => {
  return <p className={className}>{content}</p>;
};

export default Text;