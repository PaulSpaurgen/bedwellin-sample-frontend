import React, { useState } from 'react';
import Modal from '@atoms/Modal/Modal';
import Button from '@/atoms/Button';
import { FiSearch } from "react-icons/fi";
import { ModalUIhelpers } from './InternalComponents/ModalUIhelpers';

interface SearchModalProps {
  id: string;
}

const SearchModal: React.FC<SearchModalProps> = ({ id }) => {

  const [searchData, setSearchData] = useState({
    where: '',
    checkIn: '',
    checkOut: '',
    guests: 0,
  })

  const [showResults, setShowResults] = useState(false);

  const [currentFocusedTitle, setCurrentFocusedTitle] = useState("");


  const [guestsTypes, setGuestsTypes] = useState<Record<string, number>>({
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  })





  const staticDataProps = [

    {
      title: 'Where',
      placeholder: 'Search for a location',
      inputType: 'text',
      value: searchData.where,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setSearchData({ ...searchData, where: e.target.value }),
    },
    {
      title: 'Check-in',
      placeholder: 'Select a date',
      inputType: 'date',
      value: searchData.checkIn,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setSearchData({ ...searchData, checkIn: e.target.value }),
    },
    {
      title: 'Check-out',
      placeholder: 'Select a date',
      inputType: 'date',
      value: searchData.checkOut,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setSearchData({ ...searchData, checkOut: e.target.value }),
    },
    {
      title: 'Guests',
      placeholder: 'Select number of guests',
      inputType: 'number',
      value: searchData.guests,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setSearchData({ ...searchData, guests: parseInt(e.target.value) }),
    }
  ]



  const onClose = () => {
    const modal = document.getElementById(id) as HTMLDialogElement;
    if (modal) {
      modal.close();
    }
  }


  return (
    <Modal
      id={id}
      onClose={onClose}
      showCloseButton={false}
      closeOnOverlayClick={true}
      modalPosition="top"
      modalStyleClass="w-fit h-fit mt-2 rounded-[10px] max-w-fit mx-auto bg-transparent shadow-none"
    >
      <div className=" bg-secondary  px-8 py-4  flex gap-4 rounded-[10px] items-center">

        {
          staticDataProps.map((item, index) => (
            <button className={`flex flex-col gap-2 hover:bg-white transition-all duration-300 rounded-md p-2 ${currentFocusedTitle === item.title ? 'bg-white' : ''}`} key={item.title} onClick={() => {
              if (!showResults) {
                setShowResults(true);
              }
              setCurrentFocusedTitle(item.title);
            }}>
              <label htmlFor={item.title} className="text-xs font-normal">{item.title}</label>

              {
                item.inputType === 'text' ? (

                  <input type={item.inputType} placeholder={item.placeholder} value={item.value} onChange={item.onChange} className="bg-transparent border-none outline-none line-clamp-1 placeholder:text-xs placeholder:font-light placeholder:text-gray-500" />
                ) : (
                  <p className="text-xs font-light text-gray-500">{item.value || item.placeholder}</p>
                )
              }
            </button>
          ))
        }

        <Button
          variant="primary"
          icon={<FiSearch />}
          className="px-4 py-2 h-fit w-fit ml-4">
          Check Availability</Button>
      </div>

      {
        showResults && (
          <div className="px-8 py-4 mt-4 bg-white rounded-[10px]  transition-all duration-300 min-h-[300px]  max-h-[300px] overflow-y-auto">
            <ModalUIhelpers
              currentFocusedTitle={currentFocusedTitle}
              searchData={searchData}
              setSearchData={setSearchData}
              guestsTypes={guestsTypes}
              setGuestsTypes={setGuestsTypes}
            />
          </div>
        )
      }



    </Modal>


  );
};

export default SearchModal;
