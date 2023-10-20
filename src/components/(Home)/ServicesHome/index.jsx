import React from 'react'
import CardService from '../../CardService'

export default async function ServicesHome() {
const datas = await import('/public/datas/services.json')
const services = datas.default
console.log(services)
  return (
    <section className='flex flex-col gap-50'>
        <h2>Services</h2>
        <div className='flex flex-wrap gap-25 '>
            {services.map((service) => (
               <CardService key={service.id}  service={service} />
            ))}
        </div>
    </section>
  )
}
