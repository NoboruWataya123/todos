import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import AddTodo from '../components/AddTodo/AddTodo'
import AllTodo from '../components/AllTodo/AllTodo'
import Header from '../components/Header/Header'
import Tab from '../components/Tab/Tab'
import Todo from '../components/Todo/Todo'
import TodoData from '../public/data.json'

const Home: NextPage = () => {
  const [data, setData] = useState(TodoData)
  const [task, setTasks] = useState(TodoData)

  return (
    <div className="container h-screen">
      <Head>
        <title>Todo app</title>
        <meta name="description" content="Todo app lol" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex flex-col justify-center items-center min-h-screen pb-4 w-full font-body'>
      <Header />
      <div className='sm:w-3/4 md:w-3/4 xl:w-2/4 w-screen h-screen flex flex-col p-8'>
        <Tab />
        <AddTodo onAdd={ 
          (name) => {
            const newTask = { id: (data.length + 1).toString(), name: name, status: "active" };
            setTasks([...task, newTask]);
          }
        } />
        <AllTodo data={data}/>
      </div>
      </main>
    </div>
  )
}

export default Home
