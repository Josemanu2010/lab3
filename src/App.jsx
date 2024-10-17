import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UsersLogin from './components/UsersLogin'
import UserPost from './components/UserPost'
import UserSingle from './components/UserSingle'

function App() {

  return (
    <div className='w-[60%] m-auto p-[150px]'>
      <div className='mb-12'>
        <h1 className='font-bold text-3xl text-center'>Taller interceptors axios</h1>
      </div>
      <UsersLogin />
      <div className='flex justify-between'>
        <UserPost />
        <UserSingle />
      </div>

    </div>
  )
}

export default App
