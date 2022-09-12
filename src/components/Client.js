import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React, { useEffect } from 'react';
import { useState } from 'react';
import lol from '../lol.json';
import kaganat from '../foto/kaganat.jpeg';
import lanzhou from '../foto/lanzhou.jpeg';
import json from '../lol.json'
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

console.log('https://restolife.kz/upload/information_system_6/8/7/8/item_8786/information_items_property_7525.jpg')
  useEffect(() => {
    const getData = async () => {
      const data = await fetch('http://localhost:3001/clint');
      const json = await data.json();
      setClient(json);
    };
    getData().catch((error) => console.log(error));
  }, []);
  const truebol = (event) => {
    setTrue(!true1);
  };

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
            .filter((k) => parseInt(k.ot) < parseInt(input1))
            // if (k.ot.length < inputlength && k.do.length < input1length) {
            //   return <h1>lol</h1>;
            //

            .map((filteredkafe, id) => {
              return (
                <div className='dox'>
                  <h1 key={id}>{filteredkafe.kafe}</h1>
                  <img src={filteredkafe.img} className='foto'></img>
                </div>
              );
            })}
     
        {/* {true1 &&
          client
            .filter((k) => {
              // if (k.ot.length < inputlength && k.do.length < input1length) {
              //   return <h1>lol</h1>;
              // }
              if (k.ot.length <= inputlength && k.do <= input1length) {
                return <h1>k</h1>;
              }
            })
            .map((filteredkafe, id) => {
              return (
                <div className='dox'>
                  <h1 key={id}>{filteredkafe.kafe}</h1>
                </div>
              );
            })} */}
      </div>
    </div>
  );
}
