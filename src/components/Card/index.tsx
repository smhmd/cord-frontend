import React from 'react'

import news from '~/assets/example.json'

export const Card = ({ data }: Props) => {
  return (
    <li className='card--outer'>
      <a href={data.url} className='card--inner'>
        {/* order is switched as an accessibility decision -- headline should appear first in the DOM */}
        <div className='card--inner-right'>
          <span className='card--inner-headline' title={data.headline}>
            {data.headline}
          </span>
          <span className='card--inner-tag' aria-hidden='true'>
            news
          </span>
        </div>
        <div className='card--inner-left'>
          {/* could use an alt tag */}
          <img
            role='presentation'
            className='card--inner-image'
            alt=''
            src={data.thumbnail}
          />
        </div>
      </a>
    </li>
  )
}

type ArrayType<T> = T extends (infer Item)[] ? Item : T

interface Props {
  data: ArrayType<typeof news>
}
