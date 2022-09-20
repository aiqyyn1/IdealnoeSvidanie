import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { SelectComponent } from '../../components/common/select';
import { CITIES } from '../../constants';
import placesList from '../../places-list.json';
import Modal from '../../components/modals/welcome/Modal';

export default function () {
  const [city, setCity] = useState();
  const [showModal, setShowModal] = useState(false);
	const [modalFalse, setModalFalse] =useState(false);
  const handleCity = (event) => {
    const { value } = event.target;
    setCity(value);
  };
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
      localStorage.setItem('user', modalFalse );

    }, 2000);
	t();
  }, []);
const t=()=>{
	if (!modalFalse){
		setShowModal(false);
	}
}
  const onClose = () => {
    setShowModal(false);
  };

  console.log(city);
  return (
    <Box>
      <Box component='h1'>Идеальное Свидание</Box>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
      >
        <Box width='300px'>
          <SelectComponent
            isFullWidth
            label='Выберите ваш город'
            options={CITIES}
            value={city}
            onChange={handleCity}
          />
        </Box>
        <Box display='flex' justifyContent='center' margin='10px'>
          <input
            // onChange={(e) => handlelocale(e)}
            placeholder='от'
          ></input>

          <input
            // onChange={(e) => handleLocale1(e)}
            placeholder='до'
          ></input>
        </Box>
      </Box>
      {showModal && <Modal onClose={onClose}></Modal>}
    </Box>
  );
}
