import React, { ReactElement } from 'react';

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ className, onClick, children, href }): ReactElement => {
  return (
    <button className={className} onClick={onClick}>
      <a href={href}>{children}</a>
    </button>
  );
};

export default Button;