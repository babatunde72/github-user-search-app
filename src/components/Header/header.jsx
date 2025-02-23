import React, { useEffect, useState } from 'react';
import Moon from '../icons/moon/moon';
import Sun from '../icons/sun/sun';

const Header = () => {
  const [theme, setUpTheme] = useState('dark');

  useEffect(()=> {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme)
  },[theme])

  const changeTheme = ()=> {
    setUpTheme((oldTheme) => (oldTheme === 'dark' ? 'light' : 'dark'))
  }
  return (
    <div className='flex mb-6 mt-24'>
      <h1>devfinder</h1>
      <button onClick={changeTheme} className='ml-auto'>
        {theme === 'light' ? (
          <>
          <span className='font-bold uppercase text-sm'>dark</span>
          <Moon className='ml-2 inline-block' />
          </>
        ) : (
          <>
          <span className='font-bold uppercase text-sm'>light</span>
          <Sun className= 'ml-2 inline-block' />
          </>
        )}
      </button>
    </div>
  )
}

export default Header