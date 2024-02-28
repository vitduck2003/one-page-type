import React, { useEffect, useRef } from 'react';

interface MenuProps {
  onClose: () => void;
}

const Menu: React.FC<MenuProps> = ({ onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutsideMenu = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('click', handleClickOutsideMenu);

    return () => {
      document.removeEventListener('click', handleClickOutsideMenu);
    };
  }, [onClose]);

  return (
    <div id="menu" ref={menuRef} className="absolute bottom-0 lg:left-0 w-[300px] h-screen bg-black p-4 hidden">
      <ul className="text-red-500 space-y-4 text-center">
        <li>
          <a href="#" className="hover:text-red-700">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-red-700">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-red-700">
            Blog
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;