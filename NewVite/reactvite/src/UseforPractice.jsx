import React, { useState } from 'react';
// import './MenuBar.css'; // Import your CSS file for styling

const UseforPractice = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="menu-bar">
      <button onClick={toggleMenu}>Toggle Menu</button>

      {isMenuOpen && (
        <div className="menu">
          {/* Add your menu items or components here */}
          <p>Menu Item 1</p>
          <p>Menu Item 2</p>
          <p>Menu Item 3</p>
        </div>
      )}
    </div>
  );
};

export default UseforPractice;
