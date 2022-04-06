import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import QueenGrid from './components/queens/QueenGrid'
import Search from './components/ui/Search'
import './App.css'

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(`http://www.nokeynoshade.party/api/queens/all`)

      //console.log(result.data)


        setItems(result.data)
        setIsLoading(false)
    }

    fetchItems()
  }, [query])

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <QueenGrid isLoading={isLoading} items={items} />
    </div>
  )
}

export default App
