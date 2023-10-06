import Card from "./Card"


function Main() {
  return (
    <main className='px-16 py-6'>
        <div>
          <a href="#">Login</a>
          <a href="#">Sign Up</a>
        </div>

        <header>
          <h2 className='text-gray-900 text-5xl font-semibold'>Recipes</h2>
          <h3 className='text-gray-900 text-xl font-semibold'>For foreigners</h3>
        </header>

        <div>
          <h3 className='font-bold mt-12 text-huge border-b border-gray-300'>Latest Recipes</h3>
          <div className='flex'>
            {/* cards */}
            <Card />
            <Card />
            <Card />

          </div>
        </div>

          <h3 className='font-bold mt-12  border-b border-gray-300'>Most popular Recipes</h3>
          <div>
            {/* cards */}
            <Card/>
          </div>

          <div>
            <div>Load More</div>
          </div>
      </main>
  )
}

export default Main