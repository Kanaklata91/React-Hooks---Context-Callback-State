import React, { useState, useCallback } from 'react';
import './style.css';
import Child from './Child';

import CreateContextval from './Context';

export default function App() {
  const [val, setValue] = useState(false);
  const [dep] = useState(false);

  const setVal = () => {
    setValue(!val);
  };

  const handleClick = useCallback(
    (val, highlight) => {
      console.log('function passed as callback from parent to child-> ' + val);
      console.log('this is the highlight= > ' + highlight.current.value);
      highlight.current.focus();
    },
    [dep]
  );

  // const handleClick = () => {
  //   console.log('function passed as callback from parent to child');
  // };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={setVal}>Click in Parent</button>

      <CreateContextval.Provider value="This is the new value to be passed as context">
        <Child
          name="This is child"
          type="Child Component"
          status="online"
          clickhandler={handleClick}
        ></Child>
      </CreateContextval.Provider>
    </div>
  );
}
