import React, { useEffect } from 'react'
import Moon from './Moon'
import FormNewTask from './formNewTask'
import IconSun from './IconSun'

const Header = ({toggleDark, dark, add}) => {

  useEffect(()=>{
    dark ? localStorage.theme = 'dark' : localStorage.theme = 'light';
    document.documentElement.classList.toggle('dark');
  },[dark])

  return (
    <div className='ml-4 mr-4 flex-col'>
        <div className='pt-5 flex justify-between'>
            <div className='uppercase'>
            <h1 className='text-white font-[500]
            tracking-[0.3em] text-3xl
            '>
                TODO</h1>
            </div>

            {
              dark ? <button onClick={()=>toggleDark()}><Moon></Moon></button> : <button onClick={()=>toggleDark()}><IconSun></IconSun></button>
            }
        </div>
        <FormNewTask add={add}></FormNewTask>
    </div>
  )
}

export default Header