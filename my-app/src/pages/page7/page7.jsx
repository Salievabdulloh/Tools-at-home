import React from 'react'
import { useTranslation } from 'react-i18next'
import img from "./map.png"


const page7 = () => {
  let { t } = useTranslation()
  return (
    <>
    <section className='md:w-[90%] m-auto'>
      <h1 className='text-center text-[25px]'>{t("page7.1")}</h1>
      <section className='px-[10px] md:w-[70%] flex-wrap md:h-[1700px]'>
        <aside className='flex flex-col gap-[20px]'>
          <h2 className='text-[20px]'>{t("page7.2")}</h2>
          <div className='flex gap-5 w-[100%]'>
            <button className='py-[10px] text-white text-[20px] rounded-[10px] w-[50%] bg-[#1CA342]'>{t("page7.3")}</button>
            <button className='py-[10px] text-[20px] rounded-[10px] text-black w-[50%] bg-white'>{t("page7.4")}</button>
          </div>
          <p className='text-[20px]'>{t("page7.9")}</p>
          <img src={img} alt="" />
        </aside>
        <aside className='flex flex-col gap-[10px] mt-[20px]'>
          <h2 className='text-[20px]'>{t("page7.10")}</h2>
          <article className='flex flex-col gap-[10px]'>
            <div className='flex flex-col gap-3'>
              <p className='text-[20px]'>{t("page7.11")}</p>
              <input type="text" className='bg-white border-[#A8A8A8] border-[1px] rounded-[5px] text-[20px] py-[10px] px-[10px] w-[100%]' />
            </div>
            <div className='flex flex-col gap-3'>
              <p className='text-[20px]'>{t("page7.13")}</p>
              <input type="text" className='bg-white border-[#A8A8A8] border-[1px] rounded-[5px] text-[20px] py-[10px] px-[10px] w-[100%]' />
            </div>
            <div className='flex flex-col gap-3'>
              <p className='text-[20px]'>{t("page7.14")}</p>
              <input type="text" className='bg-white border-[#A8A8A8] border-[1px] rounded-[5px] text-[20px] py-[10px] px-[10px] w-[100%]' />
            </div>
            <div className='flex flex-col gap-3'>
              <p className='text-[20px]'>{t("page7.12")}</p>
              <input type="text-area" className='bg-white border-[#A8A8A8] h-[100px] border-[1px] rounded-[5px] text-[20px] py-[10px] px-[10px] w-[100%]' />
            </div>
          </article>
        </aside>
        <aside className='flex flex-col gap-[20px]'>
          <h2 className='text-[20px]'>{t("page7.15")}</h2>
          <article className='flex flex-col gap-[10px] bg-white md:p-[20px]'>
            <div className='flex gap-[10px] md:gap-[20px] w-[100%]'>
              <input name='radio' className='w-[20px]' type="radio" />
              <p className='text-[17px] md:text-[20px]'>{t("page7.16")}</p>
            </div>
            <div className='flex gap-[10px] md:gap-[20px] w-[100%]'>
              <input name='radio' className='w-[20px]' type="radio" />
              <p className='text-[17px] md:text-[20px]'>{t("page7.17")}</p>
            </div>
            <div className='flex gap-[10px] md:gap-[20px] w-[100%]'>
              <input name='radio' className='w-[20px]' type="radio" />
              <p className='text-[17px] md:text-[20px]'>{t("page7.18")}</p>
            </div>
            <p className='text-[18px] md:text-[25px]'>{t("page7.19")}</p>
          </article>
        </aside>
      </section>
      <aside className='w-[100%] p-[10px] md:w-[70%]'>
        <div className='flex justify-between text-[20px]'>
          <p className='text-[#737373]'>{t("page7.5")}</p>
          <p>2680 ₽</p>
        </div>
        <div className='flex justify-between text-[20px]'>
          <p className='text-[#737373]'>{t("page7.6")}</p>
          <p>10 шт.</p>
        </div>
        <div className='flex gap-5 w-[100%]'>
          <button className='py-[10px] text-white text-[20px] rounded-[10px] w-[50%] bg-[#1CA342]'>{t("page7.8")}</button>
          <button className='py-[10px] text-[20px] rounded-[10px] text-black w-[50%] bg-white'>{t("page7.7")}</button>
        </div>
      </aside>
    </section>
    </>
  )
}

export default page7