import React from 'react'

import news from '~/assets/example.json'

export const Card = ({ data }: Props) => {
  return (
    <li className='bg-white rounded-md rounded-tr-2xl border border-brand-gray-200 shadow-sm shadow-gray-50 hover:shadow-md hover:shadow-gray-200/40 transition hover:-translate-y-0.5 '>
      <a href={data.url} className='flex p-2 pr-4 space-x-2.5 space-x-reverse'>
        {/* order is switched as an accessibility decision -- headline should appear first in the DOM */}
        <div className='flex flex-col py-[3px] order-2 justify-between'>
          <span className='text-sm line-clamp-2' title={data.headline}>
            {data.headline}
          </span>
          <span
            // eslint-disable-next-line
            className='text-[8px] tracking-[0.24em] font-bold text-brand-purple uppercase'
            aria-hidden='true'>
            news
          </span>
        </div>
        <div className='flex-shrink-0'>
          {/* could use an alt tag */}
          <img
            role='presentation'
            className='object-cover rounded w-[130px] h-[80px]'
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
