import React, { memo, useContext, useRef } from 'react';
import './style.css';
import CreateContextval from './Context';

var obj = [
  { name: 'Rachel Green', gender: 'Female', color: 'red' },
  { name: 'Ross Geller', gender: 'Male', color: 'green' },
  { name: 'Monica', gender: 'Female', color: 'orange' },
  { name: 'Joey', gender: 'Male', color: 'red' },
];
const Child = ({ name, type, status, clickhandler }) => {
  const useContextValue = useContext(CreateContextval);
  const refVal = useRef('');
  console.log('this is the context value-> ' + useContextValue);

  console.log('child component called.');
  return (
    <>
      <p className="avatar">This is the name : {name}</p>
      <p>This is the type : {type}</p>
      <p>This is the status : {status}</p>
      {obj.map((val, index) => (
        <div key={index}>
          <p style={{ color: val.color }}>{val.name}</p>
        </div>
      ))}
      <button onClick={(e) => clickhandler(e.target, refVal)}>
        Click Me!!
      </button>
      <br /> <br /> <br />
      <input ref={refVal} />
    </>
  );
};

export default memo(Child);
