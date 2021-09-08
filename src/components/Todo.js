import React, { useState } from 'react';

import {getKey} from "../lib/util";

import Input from './Input';

function Todo() {
  const [items, putItems] = React.useState(["Huyen",'Hoa','Hung','Long']);

　const handleAdd = text => {
    putItems([...items,　text]);
  };
  
  return (
    <div className="container">
        <div>学生一覧：[Huyen,Hoa,Hung,Long]</div>
        <div>追加する名前を入力してください。</div>
        <Input onAdd={handleAdd} />
        新しい一覧：
        <label>{JSON.stringify(items)}</label>
    </div>
  );
}

export default Todo;