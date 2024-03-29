import React from 'react'
interface Props{
    darkMode:()=>void
}
function Button(props:Props) {
    const {darkMode} = props
  return (
    <div className='m-0 p-0'>
            <button onClick={darkMode} className="absolute top-[-6px] right-24 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-2 px-4 rounded-md mt-4">
          Toggle Dark Mode
        </button>
    </div>
  )
}

export default Button