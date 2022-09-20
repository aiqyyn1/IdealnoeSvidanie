import React, { useRef } from 'react';
import { useEffect } from 'react';
import './modal.css';
export default function Modal({onClose}) {
  const ref=useRef();
  useEffect(() => {
    const check = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener('click', check);
    return () => {
      document.removeEventListener('click', check);
    };
  }, []);
  return (
    <div className='modal'>
      <div className='modal-content'>
        <div className='modal-title' ref={ref}>
          <strong>Modal Title</strong>
        </div>
        <div className='modal-body'>
          <strong>Welcome to the our site!i</strong>
     
        </div>
        <div className='modal-footer'>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
