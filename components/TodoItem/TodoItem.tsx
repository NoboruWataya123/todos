import React, { useState } from 'react'

export default function TodoItem({todo, check=false, status, onChange}) {
    
    let className = 'form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer';
    let todoClass = 'w-2/3 sm:w-5/6 p-2 text-lg font-medium';

    if (status === 'complete') {
        todoClass += ' line-through';
        check=true;
    }

    return (
        <div className='flex flex-row justify-start items-center w-full mt-4'>
            <input className={className} defaultChecked={check} type='checkbox' id={todo.id} onChange={onChange} />
            <label htmlFor={`${todo.id}`} className={todoClass}>{todo.name}</label>
        </div>  
    )
}
