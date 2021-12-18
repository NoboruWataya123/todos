import Head from 'next/head'
import React from 'react'
import AddTodo from '../components/AddTodo/AddTodo'
import Header from '../components/Header/Header'
import Tab from '../components/Tab/Tab'
import Todo from '../components/Todo/Todo'

export default function active() {
    return (
        <div className="container h-screen">
      <Head>
        <title>Todo app</title>
        <meta name="description" content="Todo app lol" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex flex-col justify-center items-center h-screen w-screen font-body'>
      <Header />
      <div className='sm:w-3/4 md:w-3/4 xl:w-2/4 w-screen h-screen flex flex-col p-8'>
        <Tab />
        <AddTodo />
        <Todo todoStatus='active' />
      </div>
      </main>
    </div>
    )
}
