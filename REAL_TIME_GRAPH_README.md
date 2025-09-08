# Real-Time Trading Graph Component

A beautiful, animated real-time graph component for cryptocurrency trading platforms with live price updates and modern UI design.

## Features

- **Real-Time Updates**: Price data updates every second with smooth animations
- **Beautiful Design**: Modern UI with gradient backgrounds and floating elements
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Optimized canvas rendering for smooth 60fps animations
- **Trading Background**: Suitable background image and effects for trading platforms
- **Interactive Elements**: Floating cards with market data and price alerts

## Components

### RealTimeGraph
The main component that displays the live price chart.

**Location**: `src/components/RealTimeGraph/RealTimeGraph.tsx`

**Features**:
- Canvas-based chart rendering
- Real-time price updates
- Color-coded price changes (green for positive, red for negative)
- Gradient fill under the price line
- Grid lines and price labels
- Floating market data cards

### RealTimeGraphDemo
A demo page showcasing the component with additional features.

**Location**: `src/pages/RealTimeGraphDemo/RealTimeGraphDemo.tsx`

**Access**: Navigate to `/real-time-graph-demo` in your browser

## Usage

### Basic Usage
```tsx
import RealTimeGraph from "components/RealTimeGraph/RealTimeGraph";

function MyComponent() {
  return (
    <div>
      <RealTimeGraph />
    </div>
  );
}
```

### Integration with Exchange Page
The component is automatically integrated into the Exchange page (`src/pages/Exchange/Exchange.js`) and will display when:
- User is not connected to a wallet
- No trading data is available
- No orders or positions exist

### Customization

#### Styling
The component uses CSS modules with the following main classes:
- `.real-time-graph-container`: Main container
- `.graph-background`: Background effects
- `.price-chart`: Canvas element
- `.floating-card`: Floating market data cards

#### Data Configuration
You can modify the data generation in the component:
- Base price: Currently set to 420.56
- Update frequency: Currently 1 second
- Price volatility: Adjust the random change range
- Data points: Currently keeps last 100 points

## Animations

The component includes several animations:

1. **Background Shift**: Subtle background movement
2. **Overlay Shimmer**: Light shimmer effect across the background
3. **Price Pulse**: Current price pulsing effect
4. **Change Glow**: Glowing effect on price change indicators
5. **Floating Cards**: Cards that float up and down
6. **Value Pulse**: Subtle pulsing of market values

## Responsive Design

The component is fully responsive with breakpoints:
- Desktop: Full height (600px)
- Tablet (≤1300px): Reduced height (500px)
- Mobile (≤1100px): Further reduced height (400px)
- Small mobile (≤480px): Minimal height with hidden floating cards

## Technical Details

### Canvas Rendering
- Uses HTML5 Canvas for smooth chart rendering
- RequestAnimationFrame for optimal performance
- Automatic canvas size adjustment

### Data Management
- React state for data points
- useEffect for real-time updates
- Automatic cleanup of old data points

### Performance Optimizations
- Efficient canvas drawing
- Minimal re-renders
- Optimized animations

## File Structure

```
src/
├── components/
│   └── RealTimeGraph/
│       ├── RealTimeGraph.tsx
│       └── RealTimeGraph.css
└── pages/
    └── RealTimeGraphDemo/
        ├── RealTimeGraphDemo.tsx
        └── RealTimeGraphDemo.css
```

## Browser Support

- Modern browsers with Canvas support
- ES6+ JavaScript features
- CSS Grid and Flexbox
- CSS animations and transforms

## Future Enhancements

Potential improvements:
- Real API integration for live price data
- Multiple timeframes (1m, 5m, 1h, 1d)
- Technical indicators (MA, RSI, etc.)
- Volume bars
- Price alerts functionality
- Export chart as image
- Dark/light theme toggle

## License

This component is part of the trading platform project and follows the same license terms. 