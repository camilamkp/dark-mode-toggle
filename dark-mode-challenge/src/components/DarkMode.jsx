import { useState } from 'react';

function DarkMode()
{
    const [ toggleMode, setToggleMode ] = useState( false );
    
  return (
    <div className={ `main-container ${ toggleMode && 'dark-mode' }` }>
        <button className='dark-mode-btn' 
        onClick={ () => setToggleMode(true) }>dark mode</button>

        <button className='light-mode-btn' 
        onClick={ () => setToggleMode(false) }>light mode</button>
    </div>
  )
}

export default DarkMode;
