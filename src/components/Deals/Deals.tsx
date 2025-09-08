import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Deals.css";

interface Deal {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  discount?: string;
  isActive: boolean;
}

const deals: Deal[] = [
  {
    id: "1",
    title: "Welcome Bonus",
    description: "Get 50% off trading fees for your first week",
    image: "/images/novax.png",
    link: "/deals/welcome-bonus",
    discount: "50% OFF",
    isActive: true,
  },
  {
    id: "2",
    title: "Referral Rewards",
    description: "Earn up to 30% commission on referrals",
    image: "/images/robot.png",
    link: "/deals/referral-rewards",
    discount: "30% COMMISSION",
    isActive: true,
  },
  {
    id: "3",
    title: "Staking Bonus",
    description: "Extra rewards for staking NVX tokens",
    image: "/images/staking-bonus.jpg",
    link: "/deals/staking-bonus",
    discount: "BONUS REWARDS",
    isActive: true,
  },
];

export default function Deals() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDeal, setActiveDeal] = useState<Deal | null>(null);

  const handleDealClick = (deal: Deal) => {
    setActiveDeal(deal);
    setIsOpen(false);
  };

  return (
    <div className="deals-container">
      <div className="deals-trigger" onClick={() => setIsOpen(!isOpen)}>
        <span className="deals-label">Deals</span>
        <div className="deals-badge">
          <span className="deals-count">{deals.filter(d => d.isActive).length}</span>
        </div>
      </div>

      {isOpen && (
        <div className="deals-dropdown">
          <div className="deals-header">
            <h3>Active Deals</h3>
            <button className="deals-close" onClick={() => setIsOpen(false)}>
              ×
            </button>
          </div>
          <div className="deals-list">
            {deals.filter(deal => deal.isActive).map((deal) => (
              <Link
                key={deal.id}
                to={deal.link}
                className="deal-item"
                onClick={() => handleDealClick(deal)}
              >
                <div className="deal-image">
                  <img src={deal.image} alt={deal.title} />
                </div>
                <div className="deal-content">
                  <h4>{deal.title}</h4>
                  <p>{deal.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="deals-footer">
            <Link to="/deals" className="view-all-deals">
              View All Deals
            </Link>
          </div>
        </div>
      )}
    </div>
  );
} 