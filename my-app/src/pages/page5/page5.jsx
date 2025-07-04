import React from 'react'
import s1 from './suratUmar/s1.png'; 
import s2 from './suratUmar/s2.png'; 
import s3 from './suratUmar/s3.png'; 

const page5 = () => {
  return (
   <div className="max-w-[1300px] m-auto p-4 my-[50px]">
      <p className="text-[#737373] font-[500]">
        Главная / Каталог / Бытовая техника
      </p>
      <p className="text-[#444444] text-[24px] font-[500] text-center my-[30px]">
        Избранное
      </p>

      <div className="w-full flex items-center justify-between  p-4 rounded">
        <p className="text-[#737373] text-[18px] font-[500]">
          Количество товаров:{" "}
          <span className="text-[#333333] text-[20px] font-[700]">8 шт.</span>
        </p>

        <select className="bg-white border p-[10px] rounded-xl">
          <option value="">По популярности</option>
        </select>
      </div>

      <table className="w-full my-[50px] bg-white border border-gray-300">
        <thead className="bg-gray-100">
          <tr className="text-[14px] text-[#737373] font-[700] text-left">
            <th className="p-2 border">Фото</th>
            <th className="p-2 border">Название</th>
            <th className="p-2 border">Артикул</th>
            <th className="p-2 border">Кол-во</th>
            <th className="p-2 border">Партия</th>
            <th className="p-2 border">Цена</th>
            <th className="p-2 border">Количество</th>
            <th className="p-2 border">Итого</th>
            <th className="p-2 border">Изб-ное</th>
            <th className="p-2 border">Корзина</th>
          </tr>
        </thead>

        <tbody>
          <tr className="text-[14px] text-center">
            <td className="p-2 border">
              <img src={s1} alt="товар" className="w-16 h-12 object-contain" />
            </td>
            <td className="p-2 text-[#444444] font-[500] border text-left">
              Губка крупнопористая для мойки автомобиля (губка для мытья автомобиля)...
            </td>
            <td className="p-2 border text-[#444444] font-[700]">134544</td>
            <td className="p-2 border text-[#444444] font-[700]">13</td>
            <td className="p-2 border text-[#444444] font-[700]">1</td>
            <td className="p-2 border text-[#444444] font-[700]">155 ₽</td>
            <td className="p-2 border text-[#444444] font-[700]">
              <div className="flex items-center justify-center gap-2">
                <button className="w-6 h-6 bg-gray-200 text-black rounded">−</button>
                <span className="w-6 text-center">1</span>
                <button className="w-6 h-6 bg-gray-200 text-black rounded">+</button>
              </div>
            </td>
            <td className="p-2 border text-[#444444] font-[700]">155 ₽</td>
            <td className="p-2 border">
              <img src={s2} alt="избранное" className="w-5 h-5 mx-auto" />
            </td>
            <td className="p-2 border">
              <img src={s3} alt="корзина" className="w-5 h-5 mx-auto" />
            </td>
          </tr>
          <tr className="text-[14px] text-center">
            <td className="p-2 border">
              <img src={s1} alt="товар" className="w-16 h-12 object-contain" />
            </td>
            <td className="p-2 text-[#444444] font-[500] border text-left">
              Губка крупнопористая для мойки автомобиля (губка для мытья автомобиля)...
            </td>
            <td className="p-2 border text-[#444444] font-[700]">134544</td>
            <td className="p-2 border text-[#444444] font-[700]">13</td>
            <td className="p-2 border text-[#444444] font-[700]">1</td>
            <td className="p-2 border text-[#444444] font-[700]">155 ₽</td>
            <td className="p-2 border text-[#444444] font-[700]">
              <div className="flex items-center justify-center gap-2">
                <button className="w-6 h-6 bg-gray-200 text-black rounded">−</button>
                <span className="w-6 text-center">1</span>
                <button className="w-6 h-6 bg-gray-200 text-black rounded">+</button>
              </div>
            </td>
            <td className="p-2 border text-[#444444] font-[700]">155 ₽</td>
            <td className="p-2 border">
              <img src={s2} alt="избранное" className="w-5 h-5 mx-auto" />
            </td>
            <td className="p-2 border">
              <img src={s3} alt="корзина" className="w-5 h-5 mx-auto" />
            </td>
          </tr>
          <tr className="text-[14px] text-center">
            <td className="p-2 border">
              <img src={s1} alt="товар" className="w-16 h-12 object-contain" />
            </td>
            <td className="p-2 text-[#444444] font-[500] border text-left">
              Губка крупнопористая для мойки автомобиля (губка для мытья автомобиля)...
            </td>
            <td className="p-2 border text-[#444444] font-[700]">134544</td>
            <td className="p-2 border text-[#444444] font-[700]">13</td>
            <td className="p-2 border text-[#444444] font-[700]">1</td>
            <td className="p-2 border text-[#444444] font-[700]">155 ₽</td>
            <td className="p-2 border text-[#444444] font-[700]">
              <div className="flex items-center justify-center gap-2">
                <button className="w-6 h-6 bg-gray-200 text-black rounded">−</button>
                <span className="w-6 text-center">1</span>
                <button className="w-6 h-6 bg-gray-200 text-black rounded">+</button>
              </div>
            </td>
            <td className="p-2 border text-[#444444] font-[700]">155 ₽</td>
            <td className="p-2 border">
              <img src={s2} alt="избранное" className="w-5 h-5 mx-auto" />
            </td>
            <td className="p-2 border">
              <img src={s3} alt="корзина" className="w-5 h-5 mx-auto" />
            </td>
          </tr>
          <tr className="text-[14px] text-center">
            <td className="p-2 border">
              <img src={s1} alt="товар" className="w-16 h-12 object-contain" />
            </td>
            <td className="p-2 text-[#444444] font-[500] border text-left">
              Губка крупнопористая для мойки автомобиля (губка для мытья автомобиля)...
            </td>
            <td className="p-2 border text-[#444444] font-[700]">134544</td>
            <td className="p-2 border text-[#444444] font-[700]">13</td>
            <td className="p-2 border text-[#444444] font-[700]">1</td>
            <td className="p-2 border text-[#444444] font-[700]">155 ₽</td>
            <td className="p-2 border text-[#444444] font-[700]">
              <div className="flex items-center justify-center gap-2">
                <button className="w-6 h-6 bg-gray-200 text-black rounded">−</button>
                <span className="w-6 text-center">1</span>
                <button className="w-6 h-6 bg-gray-200 text-black rounded">+</button>
              </div>
            </td>
            <td className="p-2 border text-[#444444] font-[700]">155 ₽</td>
            <td className="p-2 border">
              <img src={s2} alt="избранное" className="w-5 h-5 mx-auto" />
            </td>
            <td className="p-2 border">
              <img src={s3} alt="корзина" className="w-5 h-5 mx-auto" />
            </td>
          </tr>
          <tr className="text-[14px] text-center">
            <td className="p-2 border">
              <img src={s1} alt="товар" className="w-16 h-12 object-contain" />
            </td>
            <td className="p-2 text-[#444444] font-[500] border text-left">
              Губка крупнопористая для мойки автомобиля (губка для мытья автомобиля)...
            </td>
            <td className="p-2 border text-[#444444] font-[700]">134544</td>
            <td className="p-2 border text-[#444444] font-[700]">13</td>
            <td className="p-2 border text-[#444444] font-[700]">1</td>
            <td className="p-2 border text-[#444444] font-[700]">155 ₽</td>
            <td className="p-2 border text-[#444444] font-[700]">
              <div className="flex items-center justify-center gap-2">
                <button className="w-6 h-6 bg-gray-200 text-black rounded">−</button>
                <span className="w-6 text-center">1</span>
                <button className="w-6 h-6 bg-gray-200 text-black rounded">+</button>
              </div>
            </td>
            <td className="p-2 border text-[#444444] font-[700]">155 ₽</td>
            <td className="p-2 border">
              <img src={s2} alt="избранное" className="w-5 h-5 mx-auto" />
            </td>
            <td className="p-2 border">
              <img src={s3} alt="корзина" className="w-5 h-5 mx-auto" />
            </td>
          </tr>
          <tr className="text-[14px] text-center">
            <td className="p-2 border">
              <img src={s1} alt="товар" className="w-16 h-12 object-contain" />
            </td>
            <td className="p-2 text-[#444444] font-[500] border text-left">
              Губка крупнопористая для мойки автомобиля (губка для мытья автомобиля)...
            </td>
            <td className="p-2 border text-[#444444] font-[700]">134544</td>
            <td className="p-2 border text-[#444444] font-[700]">13</td>
            <td className="p-2 border text-[#444444] font-[700]">1</td>
            <td className="p-2 border text-[#444444] font-[700]">155 ₽</td>
            <td className="p-2 border text-[#444444] font-[700]">
              <div className="flex items-center justify-center gap-2">
                <button className="w-6 h-6 bg-gray-200 text-black rounded">−</button>
                <span className="w-6 text-center">1</span>
                <button className="w-6 h-6 bg-gray-200 text-black rounded">+</button>
              </div>
            </td>
            <td className="p-2 border text-[#444444] font-[700]">155 ₽</td>
            <td className="p-2 border">
              <img src={s2} alt="избранное" className="w-5 h-5 mx-auto" />
            </td>
            <td className="p-2 border">
              <img src={s3} alt="корзина" className="w-5 h-5 mx-auto" />
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}

export default page5