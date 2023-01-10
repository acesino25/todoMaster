import React from 'react'

const TodoFooter = ({filter, active}) => {

return (
    <div className="bg-white rounded-xl mt-10 p-4 m-4 flex justify-center border
    dark:bg-slate-700">
        <button onClick={()=>{filter('all')}} className="mr-4"><h1 className={`font-[500] ${active == 'all' ? 'text-blue-500':'text-slate-200'}`}> All </h1></button>
        <button onClick={()=>{filter('active')}} className="mr-4"><h1 className={`font-[500] ${active == 'active' ? 'text-blue-500':'text-slate-200'}`}> Active </h1></button>
        <button onClick={()=>{filter('completed')}} className=""><h1 className={`font-[500] ${active == 'completed' ? 'text-blue-500':'text-slate-200'}`}> Completed </h1></button>
    </div>
  )
}

export default TodoFooter