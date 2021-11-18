import React from 'react'

import news from '~/assets/example.json'
import { Card } from '~/components'

function App() {
  return (
    <main className='px-4 pt-5 mx-auto max-w-2xl'>
      <ul className='grid grid-cols-2 gap-[18px]'>
        {news.map((article) => (
          <Card data={article} key={article.id} />
        ))}
      </ul>
    </main>
  )
}

export default App
