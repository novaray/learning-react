import React from 'react';
import { useInput } from '../../hooks/useInput';

/**
 * 명령형 코드. ref를 통해 DOM에 직접 접근하기 때문에 제어가 안되는 컴포넌트다.
 * 일반적으로 제어가 되는 컴포넌트로 만드는 것이 더 좋은 접근 방법.
 * @param onNewColor
 * @returns {JSX.Element}
 * @constructor
 */
/*
export default function AddColorForm({ onNewColor = f => f }) {
  const txtTitle = useRef();
  const hexColor = useRef();

  const submit = e => {
    e.preventDefault();
    const title = txtTitle.current.value;
    const color = hexColor.current.value;
    onNewColor(title, color);
    txtTitle.current.value = '';
    hexColor.current.value = '';
  };

  return (
    <form onSubmit={submit}>
      <input ref={txtTitle} type='text' placeholder='color title...' required />
      <input ref={hexColor} type='text' />
      <button>ADD</button>
    </form>
  )
}*/

/**
 * custom hook을 적용하기 전의 제어 가능한 컴포넌트.
 * @param onNewColor
 * @returns {JSX.Element}
 * @constructor
 */
/*
export default function AddColorForm({ onNewColor = f => f }) {
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('#000000');

  const submit = e => {
    e.preventDefault();
    onNewColor(title, color);
    setTitle('');
    setColor('');
  };

  return (
    <form onSubmit={submit}>
      <input
        value={title}
        onChange={event => setTitle(event.target.value)}
        type='text'
        placeholder='color title...'
        required
      />
      <input
        value={color}
        onChange={event => setColor(event.target.value)}
        type='color'
        required
      />
      <button>ADD</button>
    </form>
  )
}
*/

/**
 * custom hook을 활용해 재사용되는 로직 합침.
 * @param onNewColor
 * @returns {JSX.Element}
 * @constructor
 */
export default function AddColorForm({ onNewColor = f => f }) {
  const [titleProps, resetTitle] = useInput('');
  const [colorProps, resetColor] = useInput('#000000');

  const submit = e => {
    e.preventDefault();
    onNewColor(titleProps.value, colorProps.value);
    resetTitle();
    resetColor();
  };

  return (
    <form onSubmit={submit}>
      <input
        {...titleProps}
        type='text'
        placeholder='color title...'
        required
      />
      <input
        {...colorProps}
        type='color'
        required
      />
      <button>ADD</button>
    </form>
  )
}
