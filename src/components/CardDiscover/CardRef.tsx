import React, { ReactElement } from 'react';

interface ALinkProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
}

const CardRef: React.FC<ALinkProps> = ({ className, children, onClick, href }): ReactElement => {
  return (
    <div className="mb-8">
      <a
        style={{ textDecorationColor: '#F1900E' }}
        onClick={onClick}
        className={`text-[#111111] py-4 underline hover:text-[#F1900E] uppercase decoration-2 font-bold ${className}`}
        href={href}
      >
        {children ? "Learn More" : ""}
      </a>
    </div>
  );
};

export default CardRef;