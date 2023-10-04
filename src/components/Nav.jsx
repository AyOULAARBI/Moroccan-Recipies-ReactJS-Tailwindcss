import React from 'react'

export default function Nav() {
  return (
    <nav className='w-full p-3  mb-4 flex justify-between items-center'>
        <div>
            <h1 className='text-xl font-bold uppercase'>
                <a href="/">Morocan Recipes</a>
            </h1>
        </div>
        <ul className='w-full flex justify-around '>

          <li className='text-gray-700 font-bold'>
            <a href="#">
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Recepies</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Blog</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>

  )
}