import React from 'react'
import { selectFilteredSearchHistory } from '../redux/searchHistorySlice';
import { useSelector, useDispatch } from 'react-redux';
import { clearSearchHistory } from '../redux/searchHistorySlice';

const SuggestionList = ({ searchValue, handleSuggestionClick }) => {
    const dispatch = useDispatch();

    const searchSuggestions = useSelector((state) =>
        selectFilteredSearchHistory(state, searchValue)
    );


    const handleClearClick = () => {
        dispatch(clearSearchHistory());
      };

    return (

        <ul className="bg-sky-300 shadow-md mt-2 rounded-md absolute left-0 right-0">
            {searchSuggestions.map((suggestion, index) => (
                <li
                    key={index}
                    className="py-2 px-4 hover:bg-sky-200 cursor-pointer"
                    onClick={() => handleSuggestionClick(suggestion)}

                >
                    {suggestion}
                </li>
            ))}

            {searchSuggestions.length > 0 && (
                <li
                    className="py-2 px-4 hover:bg-sky-200 cursor-pointer text-center text-blue-500"
                    onClick={handleClearClick}
                >
                    Clear
                </li>
            )}
        </ul>
    )
}

export default SuggestionList