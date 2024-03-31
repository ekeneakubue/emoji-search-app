import React, { useState } from "react";
import {FcSearch } from 'react-icons/fc'


const SearchForm = ({ setValueEmoji, toggleDarkMode, darkMode }) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);

    const handleSearch = e => {
        e.preventDefault();
        if(value === ''){
            setError(true);
            setTimeout(()=>setError(false), 2000);
            return;
        }
        setValueEmoji(value);
    }

    const allEmojis = () => {
        setValueEmoji('');
    }

    return (
        <section className='form'>
            <form onSubmit={handleSearch}>
                <input 
                    type="text" 
                    placeholder="Type Emoji you want to search..." 
                    onChange={e => setValue(e.target.value)}    
                />
                <button className='form-btn'>
                    <FcSearch  onClick={e => setValue(e.target.value)}/>
                </button>
                <div className="all-btn">
                    <button
                        type="button"
                        onClick={allEmojis}
                    >
                        All
                    </button>
                </div>
            
            </form>
            { error && <p className="error">Input is empy</p> }
        </section>
    );
}
 
export default SearchForm;