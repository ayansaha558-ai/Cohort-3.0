import React from 'react'
import NavBar from '../components/NavBar'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import ResultGrid from '../components/ResultGrid'

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-950 text-amber-50">
      <SearchBar/>
      <Tabs/>
      <ResultGrid/>
    </div>
  )
}

export default Home