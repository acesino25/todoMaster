import React from 'react'

const InputStyled = ({inputType, 
    inputClass, 
    inputPlaceholder, 
    inputName, 
    todo, 
    labelClass,
    selectOptions,
    inputChange}) => {

    inputType != null ? inputType = inputType : inputType = 'text';
    inputClass != null ? inputClass = inputClass : inputClass = '';
    inputPlaceholder != null ? inputPlaceholder = inputPlaceholder : inputPlaceholder = '';
    inputName != null ? inputName = inputName : inputName = '';
    todo != null ? todo = todo : todo = {};
    labelClass != null ? labelClass = labelClass : labelClass = '';


    switch (inputType) {
        case 'textarea':
            return (
                <>
                    <label htmlFor={inputName}
                        className={labelClass}>
                        {inputPlaceholder}:
                        <textarea
                            type={inputType}
                            className={inputClass}
                            placeholder={inputPlaceholder}
                            name={inputName}
                            value={todo.inputName}
                            onChange={(e) => inputChange({...todo, [e.target.name] : e.target.value})}
                        ></textarea>
                    </label>
                </>
              )

        case 'checkbox':
                return (
                    <>
                        <label htmlFor={inputName}
                            className={labelClass}>
                            {inputPlaceholder}:
                            <input 
                                type={inputType}
                                id={inputName}
                                name={inputName}
                                checked={todo.inputName}
                                onChange={(e)=>inputChange({...todo, [e.target.name]: e.target.checked})}
                                >
                            
                            </input>
                        </label>
                    </>
                  )

        case 'select':
            return (
                <>
                    <label htmlFor={inputName} className={labelClass}>
      {inputPlaceholder}:
      <select name={inputName} 
        value={todo.inputName} 
        onChange={(e)=> inputChange({...todo, [e.target.name] : e.target.value})}>
        {selectOptions.map((item) => (
          <option value={item.value}>{item.text}</option>
        ))}
      </select>
    </label>
                </>
              );
    
        default:
            return (
                <>
                    <label htmlFor={inputName} className={labelClass}>
                        {inputPlaceholder}:
                        <input
                            type={inputType}
                            className={inputClass}
                            placeholder={inputPlaceholder}
                            name={inputName}
                            value={todo.inputName}
                            onChange={(e)=> inputChange({...todo, [e.target.name] : e.target.value})} // La notación por [] corchete es válida para los objetos, cuando hay carácteres extraños, es perfectamente válido y es un simil de la notación por puntos
                        ></input>
                    </label>
                </>
              )
    }

  
}

export default InputStyled