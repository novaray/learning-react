import React, { createContext, useContext, useState } from 'react';
import colorData from '../../assets/color-data.json';
import { v4 } from 'uuid';

const ColorContext = createContext();
export const useColors = () => useContext(ColorContext);

/**
 * setter를 직접 던지지 않고 상황에 맞는 api를 제공하듯이 state에 접근하는 방식에 제한을 둠.
 * 콘텍스트 소비자에게 콘텍스트를 노출할 필요 없음.
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
export default function ColorProvider ({children}) {
  const [colors, setColors] = useState(colorData.colors);

  const addColor = (title, color) =>
    setColors([...colors,
      {
        id: v4(),
        rating: 0,
        title,
        color
      }]);

  const rateColor = (id, rating) => setColors(
    colors.map(color => (color.id === id ? { ...color, rating } : color))
  );

  const removeColor = id => setColors(colors.filter(color => color.id !== id));

  return (
    <ColorContext.Provider value={{colors, addColor, rateColor, removeColor}}>
      {children}
    </ColorContext.Provider>
  )
}
