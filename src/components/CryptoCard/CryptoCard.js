import React from 'react';
import './CryptoCard.css';

const CryptoCard = ({ symbol, price, change24h, image, delay, className }) => {
  const formatPrice = (price) => {
    if (!price || price === 0) return '$0.00';
    
    if (price >= 1000) {
      return `$${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    } else if (price >= 1) {
      return `$${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 4 })}`;
    } else {
      return `$${price.toLocaleString('en-US', { minimumFractionDigits: 4, maximumFractionDigits: 6 })}`;
    }
  };

  const formatChange = (change) => {
    if (!change && change !== 0) return '+0.00%';
    
    const isPositive = change >= 0;
    const formattedChange = Math.abs(change).toFixed(2);
    return `${isPositive ? '+' : '-'}${formattedChange}%`;
  };

  const getChangeColor = (change) => {
    if (!change && change !== 0) return '#48CD4D';
    return change >= 0 ? '#48CD4D' : '#ff4444';
  };

  return (
    <div className={`col-12 col-sm-6 col-xl-3 animate ${className}`} data-aos="zoom-in" data-aos-delay={delay}>
      <div className="crypto-slide-wrapper">
        <article>
          <h6>
            <div className="d-flex align-items-center">
              {symbol}&nbsp;&nbsp; 
              <span 
                className="ml-2 price-change"
                style={{ color: getChangeColor(change24h) }}
              >
                {formatChange(change24h)}
              </span>
            </div>
            <span className="price-value">{formatPrice(price)}</span>
          </h6>
          <img src={image} alt={symbol} style={{ width: '100px' }} />
        </article>
      </div>
    </div>
  );
};

export default CryptoCard; 