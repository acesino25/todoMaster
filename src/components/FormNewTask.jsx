/* HECHO
CONTINUAR ACÁ
TE FALTA SETEAR EL VALOR DEL FORM CUANDO HAYA UN EVENTO ON CHANGE */




import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

const FormNewTask = ({add}) => {

    const formTask = useRef(null)
    const [form, setForm] = useState({
      taskName: "",
      error: false
    })

    const handleSubmit = (e) =>{
      e.preventDefault()

      const dataForm = new FormData(formTask.current);
      const dataObject = Object.fromEntries([...dataForm.entries()]);

      if(!dataObject.taskName.trim()){
        return alert("Debes ingresar un título válido")
      }

      add(form.taskName);
      console.log("Queu successfully updated");
      setForm({taskName: '', error: false});
    }

  return (
    <div>
        <div className="bg-white p-5 rounded-xl mt-10 dark:bg-slate-700">
            <form onSubmit={(e)=>handleSubmit(e)} ref={formTask} className="flex justify-between">
            <button className="flex justify-center items-center rounded-full h-5 w-5 border-2"></button>
                <input type="text" id="taskName"
                onChange={(e) => setForm({...form, [e.target.name] : e.target.value})}
                className="w-full ml-3 outline-none text-neutral-500 dark:bg-slate-700"
                name='taskName' 
                value={form.taskName} 
                placeholder='Create a new task'></input>
            </form>
        </div>

    </div>
  )
}

export default FormNewTask