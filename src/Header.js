import React from 'react'

const Header = ({ logoUrl, altText }) => {
  return (
    <header className="header">
      <img src={logoUrl} alt={altText} className="logo" />
      <span className="logo-text">BitcoinSprinkles</span>
      {/* Add more elements here if needed */}
    </header>
  )
}

export default Header
