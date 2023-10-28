import React from 'react'
import CardService from '../CardService'

export default async function ServicesHome() {
const datas = await import('/public/datas/services.json')
const services = datas.default
console.log(services)
  return (
    <section className='flex flex-col gap-50 '>
        <h2 className='text-[40px] md:text-[72px] !important'>Services</h2>
        <div className='grid grid-col md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-25 '>
            {services.map((service) => (
               <CardService key={service.id}  service={service} />
            ))}
        </div>
    </section>
  )
}
