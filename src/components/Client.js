import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React, { useEffect } from 'react';
import { useState } from 'react';

export default function () {
  const [input, setInput] = useState(null);
  const [input1, setInput1] = useState(null);
  const [client, setClient] = useState([]);
  const [inputlength, setInputlength] = useState(0);
  const [input1length, setInput1length] = useState(0);
  const [true1, setTrue] = useState(false);
  const handlelocale = (event) => {
    setInput(event.target.value);
    setInputlength(event.target.value.length);
  };
  const handleLocale1 = (event) => {
    setInput1(event.target.value);
    setInput1length(event.target.value.length);
  };
  useEffect(() => {
    fetch('  http://localhost:3001/clint')
      .then((res) => res.json())
      .then((res) => {
        setClient(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const truebol = (event) => {
    setTrue(!true1);
  };

  const lol = client.filter((e) => {
    if (e.ot.length < inputlength && e.do.length < input1length) {
      console.log('yes');
      return;
    }
    if (e.ot <= input && e.do <= input1) {
      console.log('yes');
      return;
    }
    console.log('no');
  });
  return (
    <div>
      <div>
        <h1>Идеальное Свидание </h1>
      </div>
      <div className='client'>
        <input
          onChange={(e) => handlelocale(e)}
          placeholder='от'
          className='ot'
        ></input>

        <input
          onChange={(e) => handleLocale1(e)}
          placeholder='до'
          className='do'
        ></input>
        <button onClick={truebol}> ok</button>
      </div>

      <div className='dex'>
        {true1 &&
          client
            .filter((k) => {
              // if (k.ot.length < inputlength && k.do.length < input1length) {
              //   return <h1>lol</h1>;
              // }
              if (k.ot <= input && k.do <= input1) {
                return <h1> lol</h1>;
              }
            })
            .map((filteredkafe, id) => {
              return (
                <div className='dox'>
                  <h1 key={id}>{filteredkafe.kafe}</h1>
                </div>
              );
            })}
      </div>
    </div>
  );
}
