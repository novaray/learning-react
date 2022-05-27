import React, {useState, memo} from 'react';

const Cat = ({name, meow = f => f}) => {
  console.log(`rendering ${name}`);
  return <p onClick={() => meow(name)}>{name}</p>;
};

const PureCat = memo(Cat, ((prevProps, nextProps) =>
  prevProps.name === nextProps.name));

export default PureCat;
