import './App.css';
import colorData from './assets/color-data.json';
import { useState } from 'react';
import ColorList from './components/color/ColorList';
import AddColorForm from './components/color/AddColorForm';
import { v4 } from 'uuid';

function App() {
  const [colors, setColors] = useState(colorData.colors);
  return (
    <div className="App">
      <AddColorForm
        onNewColor={(title, color) => {
          const newColors = [
            ...colors,
            {
              id: v4(),
              rating: 0,
              title,
              color
            }
          ];
          console.log(newColors);
          setColors(newColors);
        }}
      />
      <ColorList colors={colors}
                 onRateColor={(id, rating) => {
                   const newColors = colors.map(color => color.id === id ? { ...color, rating } : color);
                   setColors(newColors);
                 }}
                 onRemoveColor={id => {
                   const newColors = colors.filter(color => color.id !== id);
                   setColors(newColors);
                 }}
      />
    </div>
  );
}

export default App;
