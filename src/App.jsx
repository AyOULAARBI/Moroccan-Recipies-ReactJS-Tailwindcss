import { useState } from 'react'
import Nav from './components/Nav'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='text-gray-600'>
      {/* Navigation bar */}
      <Nav />

      {/* Main section  */}
      <main>
        <div>
          <a href="#">Login</a>
          <a href="#">Sign Up</a>
        </div>

        <header>
          <h2 className='text-gray-900 text-5xl font-semibold'>Recipes</h2>
          <h3 className='text-gray-900 text-xl font-semibold'>For ninjas</h3>
        </header>

        <div>
          <h3 className='font-bold'>Latest Recipes</h3>
          <div className='flex'>
            {/* cards */}
            <Card />
            <Card />
            <Card />

          </div>
        </div>

          <h3 className='font-bold'>Most popular Recipes</h3>
          <div>
            {/* cards */}
            <Card/>
          </div>

          <div>
            <div>Load More</div>
          </div>
      </main>
    </div>
  )
}

export default App
