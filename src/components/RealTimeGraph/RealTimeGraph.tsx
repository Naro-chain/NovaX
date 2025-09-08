import React, { useEffect, useState, useRef } from "react";
import "./RealTimeGraph.css";

interface DataPoint {
  time: number;
  value: number;
  volume: number;
}

const RealTimeGraph: React.FC = () => {
  const [data, setData] = useState<DataPoint[]>([]);
  const [currentPrice, setCurrentPrice] = useState(2.45);
  const [priceChange, setPriceChange] = useState(0);
  const [isPositive, setIsPositive] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  // Generate initial data
  useEffect(() => {
    const initialData: DataPoint[] = [];
    const now = Date.now();
    const basePrice = 2.45; // ETH base price
    
    for (let i = 0; i < 100; i++) {
      const time = now - (100 - i) * 1000; // 1 second intervals
      const randomChange = (Math.random() - 0.5) * 0.1; // ±0.05 ETH price change
      const value = basePrice + randomChange;
      const volume = Math.random() * 100 + 10;
      
      initialData.push({ time, value, volume });
    }
    
    setData(initialData);
  }, []);

  // Real-time data updates
  useEffect(() => {
    const updateData = () => {
      setData(prevData => {
        const newData = [...prevData];
        const now = Date.now();
        
        // Remove old data points (keep last 100)
        if (newData.length > 100) {
          newData.splice(0, newData.length - 100);
        }
        
        // Generate new data point
        const lastValue = newData[newData.length - 1]?.value || 2.45;
        const randomChange = (Math.random() - 0.5) * 0.08; // Smaller changes for smoother line
        const newValue = lastValue + randomChange;
        const volume = Math.random() * 100 + 10;
        
        newData.push({ time: now, value: newValue, volume });
        
        // Update current price and change
        setCurrentPrice(newValue);
        const change = newValue - 2.45; // Base ETH price
        setPriceChange(change);
        setIsPositive(change >= 0);
        
        return newData;
      });
    };

    const interval = setInterval(updateData, 1000); // Update every second
    
    return () => clearInterval(interval);
  }, []);

  // Canvas drawing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || data.length === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const drawGraph = () => {
      // Get the actual container size
      const container = canvas.parentElement;
      if (!container) return;
      
      const containerRect = container.getBoundingClientRect();
      const width = containerRect.width;
      const height = containerRect.height;

      // Set canvas size to match container
      canvas.width = width;
      canvas.height = height;

      ctx.clearRect(0, 0, width, height);

      const padding = Math.min(40, width * 0.05); // Responsive padding
      const graphWidth = width - 2 * padding;
      const graphHeight = height - 2 * padding;

      // Find min/max values
      const values = data.map(d => d.value);
      const minValue = Math.min(...values);
      const maxValue = Math.max(...values);
      const valueRange = maxValue - minValue || 1;

      // Draw grid lines
      ctx.strokeStyle = 'rgba(191, 201, 212, 0.1)';
      ctx.lineWidth = 1;
      
      // Horizontal grid lines
      for (let i = 0; i <= 5; i++) {
        const y = padding + (i * graphHeight) / 5;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(width - padding, y);
        ctx.stroke();
      }

      // Vertical grid lines
      for (let i = 0; i <= 10; i++) {
        const x = padding + (i * graphWidth) / 10;
        ctx.beginPath();
        ctx.moveTo(x, padding);
        ctx.lineTo(x, height - padding);
        ctx.stroke();
      }

      // Draw price line
      ctx.strokeStyle = isPositive ? '#00dea8' : '#ff5353';
      ctx.lineWidth = 2;
      ctx.beginPath();

      data.forEach((point, index) => {
        const x = padding + (index * graphWidth) / (data.length - 1);
        const y = padding + graphHeight - ((point.value - minValue) / valueRange) * graphHeight;
        
        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });

      ctx.stroke();

      // Draw gradient fill
      const gradient = ctx.createLinearGradient(0, padding, 0, height - padding);
      gradient.addColorStop(0, isPositive ? 'rgba(0, 222, 168, 0.1)' : 'rgba(255, 83, 83, 0.1)');
      gradient.addColorStop(1, 'rgba(0, 222, 168, 0.0)' || 'rgba(255, 83, 83, 0.0)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.moveTo(padding, height - padding);
      
      data.forEach((point, index) => {
        const x = padding + (index * graphWidth) / (data.length - 1);
        const y = padding + graphHeight - ((point.value - minValue) / valueRange) * graphHeight;
        ctx.lineTo(x, y);
      });
      
      ctx.lineTo(width - padding, height - padding);
      ctx.closePath();
      ctx.fill();

      // Draw current price indicator
      const lastPoint = data[data.length - 1];
      const lastX = width - padding;
      const lastY = padding + graphHeight - ((lastPoint.value - minValue) / valueRange) * graphHeight;
      
      ctx.fillStyle = isPositive ? '#00dea8' : '#ff5353';
      ctx.beginPath();
      ctx.arc(lastX, lastY, 4, 0, 2 * Math.PI);
      ctx.fill();

      // Draw price labels (only if there's enough space)
      if (width > 400) {
        ctx.fillStyle = '#bfc9d4';
        ctx.font = '12px Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
        ctx.textAlign = 'right';
        
        // Max price
        ctx.fillText(`${maxValue.toFixed(4)} ETH`, width - padding - 10, padding + 15);
        // Min price
        ctx.fillText(`${minValue.toFixed(4)} ETH`, width - padding - 10, height - padding - 5);
      }
    };

    drawGraph();
    animationRef.current = requestAnimationFrame(drawGraph);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [data, isPositive]);

  return (
    <div className="real-time-graph-container">
      <div className="graph-background">
        <div className="graph-overlay"></div>
      </div>
      
      <div className="graph-header">
        <div className="price-info">
          <div className="current-price">
            {currentPrice.toFixed(4)} ETH
          </div>
          <div className={`price-change ${isPositive ? 'positive' : 'negative'}`}>
            {isPositive ? '+' : ''}{priceChange.toFixed(4)} ETH ({Math.abs(priceChange / 2.45 * 100).toFixed(2)}%)
          </div>
        </div>
        <div className="graph-title">Real-Time ETH Chart</div>
      </div>

      <div className="graph-content">
        <canvas
          ref={canvasRef}
          className="price-chart"
        />
      </div>

      <div className="graph-footer">
        <div className="volume-info">
          <div className="volume-label">24h Volume</div>
          <div className="volume-value">{(Math.random() * 1000 + 500).toFixed(2)} ETH</div>
        </div>
        <div className="market-info">
          <div className="market-label">Market Cap</div>
          <div className="market-value">{(Math.random() * 100000 + 50000).toFixed(2)} ETH</div>
        </div>
      </div>
    </div>
  );
};

export default RealTimeGraph; 