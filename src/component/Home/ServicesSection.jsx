import React from 'react'
import handyman from "../../assets/handyman.jpg"
const ServicesSection = () => {
  return (
    <>
     <section style={{backgroundImage:`url(${handyman})`}}  className={`relative w-full  bg-center`}>
      <div className='w-full bg-[#000000e6] h-full flex justify-center '>
      <div className="relative w-full py-8">
        <div className="text-center text-[var(--primary-color)] py-4 flex items-center justify-evenly">
          <div className='w-1/4 border border-[var(--primary-color)]'></div>
          <h2 className="text-4xl font-bold leading-tight">
            Our Services Include
          </h2>
          <div className='w-1/4 border border-[var(--primary-color)]'></div>
        </div>
        <section className="flex justify-evenly text-[var(--primary-color)] flex-col sm:flex-row p-6">
          <div className="w-full sm:w-1/4  h-72 overflow-hidden rounded-xl my-2 hover:scale-110 transform transition-transform duration-300">
             <a href="https://www.wix.com/demone2/home-remodeli-editor/kitchens" target="_self" className="w-full h-full hover:scale-110 transform transition-transform duration-300 flex items-center justify-center bg-center bg-cover bg-[url('https://static.wixstatic.com/media/74f558_993f041afc4045c69c824d6022d78ca0~mv2_d_4000_2667_s_4_2.jpeg/v1/fill/w_369,h_726,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/74f558_993f041afc4045c69c824d6022d78ca0~mv2_d_4000_2667_s_4_2.jpeg')]">
                          <div className=" w-full h-full text-3xl flex items-center justify-center bg-[var(--blur-bg)] hover:bg-transparent transform transition-bg duration-500 opacity-100 hover:opacity-0 transform transition-opacity duration-500">
                  <span>Kitchens</span>
              </div>
            
                </a>
          </div>
          <div className="w-full sm:w-1/4 h-72 overflow-hidden rounded-xl my-2 hover:scale-110 transform transition-transform duration-300">
             <a href="https://www.wix.com/demone2/home-remodeli-editor/kitchens" target="_self" className="w-full h-full hover:scale-110 transform transition-transform duration-300  flex items-center justify-center bg-center bg-cover bg-[url('https://static.wixstatic.com/media/74f558_4ef3f401e4a2400a8979c42d1a7ba1a7~mv2_d_5760_3840_s_4_2.jpeg/v1/fill/w_364,h_726,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/74f558_4ef3f401e4a2400a8979c42d1a7ba1a7~mv2_d_5760_3840_s_4_2.jpeg')]">
             <div className=" w-full h-full text-3xl flex items-center justify-center bg-[var(--blur-bg)] hover:bg-transparent transform transition-bg duration-500 opacity-100 hover:opacity-0 transform transition-opacity duration-500">
                  <span >Bedrooms</span>
              </div>
            
                </a>
          </div>
          <div className="w-full sm:w-1/4 h-72 overflow-hidden rounded-xl my-2 hover:scale-110 transform transition-transform duration-300">
             <a href="https://www.wix.com/demone2/home-remodeli-editor/kitchens" target="_self" className="w-full h-full hover:scale-110 transform transition-transform duration-300  flex items-center justify-center  bg-center bg-cover bg-[url('https://static.wixstatic.com/media/74f558_4ef3f401e4a2400a8979c42d1a7ba1a7~mv2_d_5760_3840_s_4_2.jpeg/v1/fill/w_364,h_726,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/74f558_4ef3f401e4a2400a8979c42d1a7ba1a7~mv2_d_5760_3840_s_4_2.jpeg')]">
             <div className=" w-full h-full text-3xl flex items-center justify-center bg-[var(--blur-bg)] hover:bg-transparent transform transition-bg duration-500 opacity-100 hover:opacity-0 transform transition-opacity duration-500">
                  <span>Interiors</span>
              </div>
            
                </a>
          </div>
         
        
        </section>
        <div className="flex justify-center sm:mt-8  sm:py-4">
          
          <a href="#" target="_self" className="bg-[var(--primary-color)] text-white px-6 py-3 rounded-full hover:bg-white hover:text-[var(--primary-color)] transform transition-bg duration-500">
            See All Services
          </a>
        </div>
      </div>
      </div>
    </section>
    </>
  )
}

export default ServicesSection
