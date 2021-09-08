import React, { useState } from 'react';

function Input( { onAdd } ) {
  const [text, setText] = React.useState('');
  const [textChange, setTextChange] = React.useState('')

  const handleChange = e => setText(e.target.value);

  const handleClick = () => {
      onAdd(text);
      setTextChange(text);
      setText('');
  };

  return (
    <div>
      <input
        class="input"
        type="text"
        value={text}
        onChange={handleChange}
      />
      <button 
        class="button"
        type="click"
        onClick={handleClick}>
        確定
        </button>
      <div>
        追加する名前：
        {textChange}
      </div>
    </div>
  );
}

export default Input;