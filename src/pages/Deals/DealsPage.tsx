import React from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "components/Footer/Footer";
import "./DealsPage.css";

interface Deal {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  link: string;
  discount?: string;
  isActive: boolean;
  terms: string[];
  validUntil?: string;
  category: string;
}

const allDeals: Deal[] = [
  {
    id: "welcome-bonus",
    title: "Welcome Bonus",
    description: "Get 50% off trading fees for your first week",
    longDescription: "New to NVX? Start your trading journey with a special welcome bonus! Enjoy 50% off all trading fees for your first week of trading. This exclusive offer is available to all new users who complete their first trade within 7 days of registration.",
    image: "/images/novax.png",
    link: "/deals/welcome-bonus",
    discount: "50% OFF",
    isActive: true,
    category: "New Users",
    validUntil: "2024-12-31",
    terms: [
      "Available to new users only",
      "Must complete first trade within 7 days of registration",
      "Discount applies to all trading fees",
      "Cannot be combined with other promotions",
      "Offer valid until December 31, 2024"
    ]
  },
  {
    id: "referral-rewards",
    title: "Referral Rewards",
    description: "Earn up to 30% commission on referrals",
    longDescription: "Invite friends to NVX and earn generous rewards! For every friend you refer who completes their first trade, you'll earn up to 30% commission on their trading fees. The more friends you refer, the more you earn!",
    image: "/images/robot.png",
    link: "/deals/referral-rewards",
    discount: "30% COMMISSION",
    isActive: true,
    category: "Referrals",
    terms: [
      "Earn 30% commission on referred users' trading fees",
      "Referred users must complete their first trade",
      "Commissions paid in NVX tokens",
      "No limit on number of referrals",
      "Referral rewards paid monthly"
    ]
  },
  {
    id: "staking-bonus",
    title: "Staking Bonus",
    description: "Extra rewards for staking NVX tokens",
    longDescription: "Stake your NVX tokens and earn bonus rewards! Lock your tokens for longer periods to earn higher bonus rates. This is a great way to maximize your earnings while supporting the NVX ecosystem.",
    image: "/images/staking-bonus.jpg",
    link: "/deals/staking-bonus",
    discount: "BONUS REWARDS",
    isActive: true,
    category: "Staking",
    terms: [
      "Minimum staking period: 30 days",
      "Bonus rates increase with longer lock periods",
      "Rewards paid in NVX tokens",
      "Early unstaking incurs penalties",
      "Bonus rates subject to change"
    ]
  },
  {
    id: "volume-discount",
    title: "Volume Discount",
    description: "Reduced fees for high-volume traders",
    longDescription: "Trade more, pay less! High-volume traders enjoy reduced trading fees based on their 30-day trading volume. The more you trade, the more you save on fees.",
    image: "/images/trading-volumn.png",
    link: "/deals/volume-discount",
    discount: "UP TO 40% OFF",
    isActive: true,
    category: "Trading",
    terms: [
      "Based on 30-day trading volume",
      "Tier 1: $10K+ volume = 10% discount",
      "Tier 2: $50K+ volume = 20% discount",
      "Tier 3: $100K+ volume = 30% discount",
      "Tier 4: $500K+ volume = 40% discount"
    ]
  }
];

export default function DealsPage() {
  const { dealId } = useParams<{ dealId: string }>();

  if (dealId) {
    const deal = allDeals.find(d => d.id === dealId);
    if (!deal) {
      return (
        <div className="DealsPage default-container page-layout">
          <div className="DealsPage-container">
            <div className="section-title-block">
              <h1>Deal Not Found</h1>
              <p>The deal you're looking for doesn't exist.</p>
              <Link to="/deals" className="back-to-deals">Back to All Deals</Link>
            </div>
          </div>
          <Footer />
        </div>
      );
    }

    return (
      <div className="DealsPage default-container page-layout">
        <div className="DealsPage-container">
          <div className="deal-detail">
            <div className="deal-header">
              <div className="deal-image-large">
                <img src={deal.image} alt={deal.title} />
                {deal.discount && (
                  <div className="deal-badge-large">
                    <span>{deal.discount}</span>
                  </div>
                )}
              </div>
              <div className="deal-info">
                <div className="deal-category">{deal.category}</div>
                <h1>{deal.title}</h1>
                <p className="deal-description">{deal.longDescription}</p>
                {deal.validUntil && (
                  <div className="deal-validity">
                    <strong>Valid until:</strong> {new Date(deal.validUntil).toLocaleDateString()}
                  </div>
                )}
                <button className="claim-deal-btn">Claim This Deal</button>
              </div>
            </div>
            
            <div className="deal-terms">
              <h2>Terms & Conditions</h2>
              <ul>
                {deal.terms.map((term, index) => (
                  <li key={index}>{term}</li>
                ))}
              </ul>
            </div>
            
            <div className="deal-actions">
              <Link to="/deals" className="back-to-deals">← Back to All Deals</Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="DealsPage default-container page-layout">
      <div className="DealsPage-container">
        <div className="section-title-block">
          <div className="section-title-content">
            <div className="Page-title">Special Deals & Offers</div>
            <div className="Page-description">
              Discover exclusive deals and promotions to maximize your trading experience
            </div>
          </div>
        </div>

        <div className="deals-grid">
          {allDeals.filter(deal => deal.isActive).map((deal) => (
            <Link key={deal.id} to={deal.link} className="deal-card">
              <div className="deal-card-image">
                <img src={deal.image} alt={deal.title} />
                {deal.discount && (
                  <div className="deal-card-badge">
                    <span>{deal.discount}</span>
                  </div>
                )}
              </div>
              <div className="deal-card-content">
                <div className="deal-card-category">{deal.category}</div>
                <h3>{deal.title}</h3>
                <p>{deal.description}</p>
                <div className="deal-card-action">
                  <span>Learn More →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
} 