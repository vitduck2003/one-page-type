import React from 'react';
import Menu from './Menu';

const Header: React.FC = () => {
  const handleMenuToggleClick = () => {
    const menu = document.getElementById('menu');
    if (menu) {
      menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
    }
  };

  return (
    <div>
      <header style={{ fontFamily: 'Oswald, sans-serif' }} className="mx-auto">
        <div className="flex justify-between items-center h-[80px]">
          <div className="lg:ml-[150px]">
            <p className="text-gray-400 text-[32px] ">logo</p>
          </div>
          <div className="lg:mr-[76px]">
            <img
              id="menuToggle"
              className="relative"
              width="25"
              height="25"
              src="https://img.icons8.com/ios/50/menu--v1.png"
              alt="menu--v1"
              onClick={handleMenuToggleClick}
            />
          </div>
        </div>
      </header>
      <Menu onClose={handleMenuToggleClick} />
    </div>
  );
};

export default Header;