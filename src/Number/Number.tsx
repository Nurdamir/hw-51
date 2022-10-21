import React from 'react';

interface NumberProps extends React.PropsWithChildren{
  number: number
}

const Number: React.FC<NumberProps> = (props) => {
  return (
      <div className='number'>{props.number}</div>
  );
};

export default Number;