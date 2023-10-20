import Link from 'next/link'
import React from 'react'

export default function BtnSocial({url, text}) {
  return (
    <Link href={url} target='_blank' >
        <button className='rounded-full text-[16px] border border-[.5px] font-normal border-gray bg-transparent text-center py-[5px] px-[50px] w-fit flex justify-center items-center gap-x-[10px]  hover:shadow hover:shadow-gray transition-all duration-300  '>{text}</button>
    </Link>
  )
}
