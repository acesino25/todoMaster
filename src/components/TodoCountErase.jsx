import React from 'react'

const TodoCountErase = ({remaining, erase}) => {
  return (
    <div className="bg- flex justify-between p-4 rounded-xl">
        <h2 className="text-slate-400 text-sm font-[200]">{remaining} Items left</h2>
        <button onClick={()=>erase()}><h2 className="text-slate-400 text-sm font-[500]">Clear completed</h2></button>
    </div>
  )
}

export default TodoCountErase