import React, { useState, useEffect } from 'react'
import QuestionItem from './components/QuestionItems'

function App() {
  const [faqData, setFaqData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://opentdb.com/api.php?amount=10')
      const data = await response.json()
      setFaqData(data.results)
    }
    getData()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-3xl mx-auto">
        {faqData.map((item, index) => (
          <QuestionItem key={index} item={item} />
        ))}
      </div>
    </div>
  )
}

export default App