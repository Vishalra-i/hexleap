import React, { useState } from 'react';

interface Props {
  darkMode: () => void,
  className : string
}

function Button(props: Props) {
  const { darkMode , className = ''} = props;
  const [buttonText, setButtonText] = useState("🌙"); // Default button text

  const handleDarkModeToggle = () => {
    darkMode(); 
    setButtonText(prevText => prevText ===  "🌙" ? "🌞" : "🌙");
  };

  return (
    <div className='m-0 p-0'>
  
        <button onClick={handleDarkModeToggle} className={` ${className} rounded-full text-2xl  bg-gray-500 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 mt-4 `}>
          {buttonText}
        </button>
     
    </div>
  )
}

export default Button;
