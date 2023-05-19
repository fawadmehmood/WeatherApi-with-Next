import React, { useState, useRef } from 'react';
import { Search as SearchIcon } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredSearchHistory, addSearch } from '../redux/searchHistorySlice';

import SuggestionList from './SuggestionList';

const SearchBox = ({ onSearchChange }) => {
    const [searchValue, setSearchValue] = useState('');
    const [inputFocused, setInputFocused] = useState(false);
    const [emptyInputError, setEmptyInputError] = useState(false);

    const dispatch = useDispatch();
 
    const formRef = useRef(null)


    const handleChange = (e) => {
        setEmptyInputError(false);
        setSearchValue(e.target.value);
        setInputFocused(true);
    };


    const handleSearch = (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        const city = formData.get('city');
        if (!city) {
            setEmptyInputError(true);
            return;
        }

        dispatch(addSearch(city));
        onSearchChange(city);
        setInputFocused(false);

    }

    const handleSuggestionClick = (suggestion) => {
        setSearchValue(suggestion);
        setInputFocused(false);
    };


    const handleInputFocus = () => {
        setInputFocused(true);
      };
      
    //   const handleInputBlur = () => {
    //     setInputFocused(false);
    //   };
    

    return (
        <>
            <form className='max-w-md w-full mx-auto pt-8 relative' ref={formRef} onSubmit={handleSearch}>
                <div className='relative'>
                    <input className='w-full pl-4 pr-12 py-2 rounded-full shadow-lg'
                        type="text"
                        name="city"
                        onChange={handleChange}
                        value={searchValue}
                        placeholder="Enter a city name"
                        onFocus={handleInputFocus} 
                        // onBlur={handleInputBlur}
                        autoComplete="off"
                    />
                    <button className='absolute top-2/4 -translate-x-2 -translate-y-2/4 right-0 p-2 text-white bg-violet-400  rounded-full ease-in-out duration-200 active:scale-100 hover:scale-105' type="submit"><SearchIcon /></button>
                </div>

                { searchValue.length > 0  && inputFocused &&
                <SuggestionList searchValue={searchValue} handleSuggestionClick={handleSuggestionClick} />
                }
                

                {emptyInputError && <p className='text-red-700 font-medium mt-2'>Please enter a city name.</p>}
            </form>
        </>
    );
};

export default SearchBox;
