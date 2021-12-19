import React, { useEffect, useState } from 'react'
import TodoItem from '../TodoItem/TodoItem'

export default function AllTodo({data}: any) {
    const [status, setStatus] = useState('active');
    let todoClass = 'w-2/3 sm:w-5/6 p-2 text-lg font-medium';

    const handleCheckbox = (e: any) => {
        const id = e.target.id;
        const index = data.findIndex((item: any) => item.id === id);
        data[index].status = 'complete';
        setStatus('complete');
        todoClass += ' line-through';
    } 

    return (
        <div className='flex flex-col justify-center items-center w-full mt-8'>
            {data.map((todo: any) => (
                <TodoItem todo={todo} key={todo.id} status={todo.status} onChange={handleCheckbox} />
            ))}
        </div>
    )
}
