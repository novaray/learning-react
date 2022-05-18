import React from 'react';
import Color from './Color';
import { useColors } from './ColorProvider';

export default function ColorList() {
  // useColor hook을 통해 콘텍스트에 대한 참조를 아예 없앰.
  const { colors } = useColors();

  if (!colors.length) {
    return <div>표시할 색이 없습니다.</div>;
  }
  return (
    <div className='color-list'>
      {
        colors.map(color => <Color key={color.id} {...color} />)
      }
    </div>
  );
}
