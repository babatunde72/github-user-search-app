import { useState } from 'react'
import './App.css'
import Header from './components/Header/header'
import SearchUser from './components/SearchUser/SearchUser'

function App() {
  return (
    <div className='container mx-auto'>
      <Header />
      <SearchUser/>
    </div>
  )
}

export default App
