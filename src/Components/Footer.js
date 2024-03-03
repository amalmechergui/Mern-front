import React from 'react'

const Footer = () => {
    const copyright = String.fromCodePoint(0x00A9);
    const year = '2024';
    const companyName = 'Auto_TN';
  return (
    <div className="copyright-container">
            <div className="copyright-content">
                <p>{`${copyright} ${year} ${companyName}`} All Rights Reserved.</p>
                <p>Designed with <span role="img" aria-label="heart">❤️</span> by Amal Mechergui</p>
            </div>
        </div>
  )
}

export default Footer