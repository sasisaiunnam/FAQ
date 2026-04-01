import React,{useState,useEffect} from 'react'
import QuestionItem from './components/QuestionItems/index'

function App() {
  const [faqData,setFaqData] = useState([])

  useEffect(() => {
    let url = 'https://opentdb.com/api.php?amount=10'
    const response = fetch(url)
    const data = response.json()
    setFaqData(data)
  },[])

 

  return (
    <div>
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
       
        {faqData.map((item, index) => (
          <QuestionItem key={index} item={item} />
        ))}
      
    </div>
    </div>
  )
}

export default App
