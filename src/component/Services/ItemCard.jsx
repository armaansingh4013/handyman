import React from 'react'

const ItemCard = () => {
  return (
    <div className=' sm:w-1/2 lg:w-1/3  p-3 '>
      <div className='bg-gray-200 rounded-lg text-center h-60 overflow-hidden relative border-1 border-white shadow-lg shadow-slate-500'>
        <div className="w-full h-full bg-cover hover:scale-110 transition transition:transform transition:500 bg-[url('https://static.wixstatic.com/media/74f558_4ef3f401e4a2400a8979c42d1a7ba1a7~mv2_d_5760_3840_s_4_2.jpeg/v1/fill/w_364,h_726,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/74f558_4ef3f401e4a2400a8979c42d1a7ba1a7~mv2_d_5760_3840_s_4_2.jpeg')]"></div>
        <img src="https://static.wixstatic.com/media/74f558_4ef3f401e4a2400a8979c42d1a7ba1a7~mv2_d_5760_3840_s_4_2.jpeg/v1/fill/w_364,h_726,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/74f558_4ef3f401e4a2400a8979c42d1a7ba1a7~mv2_d_5760_3840_s_4_2.jpeg" alt="img"/>
        <p className='absolute bottom-0 w-full bg-gray-200 bg-opacity-75 py-1'>Heading here</p>
      </div>
    </div>
  )
}

export default ItemCard
