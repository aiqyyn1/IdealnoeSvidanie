import React from 'react'
import { useEffect } from 'react';
export default function index() {
 
  const ref = useRef();
  
  useEffect(() => {
    const check = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        // onClose();
      }
    };
    document.addEventListener('click', check);
    return () => {
      document.removeEventListener('click', check);
    };
  }, []);
  return (
    <div className='modal'>
      <div className='modal-content' ref={ref}>
        <div className='modal-tigutle'>
          <strong>Modal Title</strong>
        </div>
        <div className='modal-body'>
          <strong>Welcome to the our site!i</strong>
          <br>s</br>
        </div>
        <div className='modal-footer'>
          <button>Close</button>
        </div>
      </div>
    </div>
  );
}