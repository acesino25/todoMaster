import TodoCountErase from './TodoCountErase'
import TodoFooter from './TodoFooter'
import TodoItem from './TodoItem'

const TodoList = ({list, filter, active, remaining, erase, eraseId, completed}) => {

    

  return (
    <div className='flex flex-col justify-center h-auto '>
        <div className="h-auto w-auto m-4 rounded-t-xl rounded-b-xl flex flex-col -mt-11 bg-white border
         dark:bg-slate-700 dark:border-none">
            
            {
                list.map((element)=>(<TodoItem element={element} eraseId={eraseId} completed={completed}></TodoItem>))
                
            }
            <TodoCountErase remaining={remaining} erase={erase}/>

        </div>
        <TodoFooter filter={filter} active={active}></TodoFooter>
    </div>
  )
}

export default TodoList