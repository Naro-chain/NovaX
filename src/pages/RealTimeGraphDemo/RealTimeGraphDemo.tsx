import React from "react";
import RealTimeGraph from "components/RealTimeGraph/RealTimeGraph";
import "./RealTimeGraphDemo.css";

const RealTimeGraphDemo: React.FC = () => {
  return (
    <div className="real-time-graph-demo">
      <div className="demo-header">
        <h1>Real-Time Trading Graph Demo</h1>
        <p>Live cryptocurrency price chart with animated data and trading background</p>
      </div>
      
      <div className="demo-content">
        <div className="graph-section">
          <h2>Live Price Chart</h2>
          <RealTimeGraph />
        </div>
        
        <div className="features-section">
          <h2>Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Real-Time Updates</h3>
              <p>Price data updates every second with smooth animations</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Beautiful Design</h3>
              <p>Modern UI with gradient backgrounds and floating elements</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Responsive</h3>
              <p>Fully responsive design that works on all devices</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Performance</h3>
              <p>Optimized canvas rendering for smooth 60fps animations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealTimeGraphDemo; 