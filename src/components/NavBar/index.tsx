import React from 'react';
import Button from '@atoms/Button';
import { FiSearch } from "react-icons/fi";
import ModalButton from '@atoms/Modal/ModalButton';
import SearchModal from './Modals/SearchModal';

const NavBar: React.FC = () => {
    return (
        <div className="fixed top-0 left-1/2 -translate-x-1/2 z-10 mt-4 overflow-hidden">
            <ModalButton modalId="search-modal" action="open" variant="outline" className='overflow-hidden' iconPosition="right" icon={<FiSearch />}  >
                <p className="text-black">Where do you want to go next?</p> 
            </ModalButton>
            <SearchModal id="search-modal" />
        </div>
    )


}

export default NavBar;
