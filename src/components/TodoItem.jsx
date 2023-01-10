import React from 'react'
import IconCheck from './IconCheck'
import IconCross from './IconCross'

const TodoItem = ({element, eraseId, completed}) => {
  return (
    <div className='flex justify-center gap-4 h-14 items-center bg-none p-4 border-b dark:border-slate-500' key={element.id}>
        <button 
            onClick={()=>completed(element.id)}
            className={`flex justify-center items-center rounded-full h-5 w-5 border-2 ${element.completed && 'bg-gradient-to-br from-sky-400 via-violet-200 to-violet-600'}`}>
            { element.completed && <IconCheck></IconCheck>}
        </button>
        <h1 className={`grow flex ${element.completed && 'line-through text-slate-300'} dark:text-slate-200 }`}>{element.title}</h1>
        <button 
        onClick={()=>{eraseId(element.id)}}
        className='flex-none'
        ><IconCross /></button>
    </div>
  )
}

export default TodoItem