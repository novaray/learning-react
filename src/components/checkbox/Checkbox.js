import React, { useEffect, useState } from 'react';

export default function Checkbox() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    console.log(checked ? 'yes' : 'no');
    return () => console.log('마지막 사라질 때 호출된대매??? 시');
  }, []);

  return (
    <>
      <input
        type='checkbox'
        value={checked}
        onChange={() => setChecked(checked => !checked)}
      />
      {checked ? 'checked' : 'not checked'}
    </>
  );
};
