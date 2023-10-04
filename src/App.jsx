import { useState } from 'react'
import Nav from './components/Nav'
import Card from './components/Card'
import Main from './components/Main'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='text-gray-600'>

      {/* Navigation bar */}
      <Nav />

      {/* Main section  */}
      <Main />
      
    </div>
  )
}

export default App
