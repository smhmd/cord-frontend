import React from 'react'

import news from '~/assets/example.json'
import { Card } from '~/components'

function App() {
  return (
    <main>
      <ul className='cards'>
        {news.map((article) => (
          <Card data={article} key={article.id} />
        ))}
      </ul>
    </main>
  )
}

export default App
