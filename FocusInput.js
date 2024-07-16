import React, { useRef } from 'react';

const FocusInput = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
      <p>Nama: Aaron</p>
      <p>NIM: A11.2021.13668</p>
    </div>
  );
}

export default FocusInput;
