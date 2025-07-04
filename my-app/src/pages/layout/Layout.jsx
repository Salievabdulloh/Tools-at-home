import { Link, Outlet } from "react-router"
import { useTranslation } from "react-i18next"

const Layout = () => {
  let { t, i18n } = useTranslation()
  function language(lang) {
    i18n.changeLanguage(lang)
  }
  let i18next = localStorage.getItem('i18nextLng')
  return (
    <div>
      <header className="md:pt-[18px] px-5 py-[5px] md:py-0 md:px-25">
        <div className="flex pb-2 md:border-b-1 border-[#bbb] items-center justify-between">
          <img src="/logo.png" className="md:w-[182px] w-[93px]" />
          <select className="md:block hidden" value={i18next} onChange={(e) => language(e.target.value)}>
            <option value="ru">Russian</option>
            <option value="tj">Tajik</option>
            <option value="en">English</option>
          </select>
          <img src="/menu2.png" />
          <div className="hidden md:flex gap-10">
            <Link to={"/"}>{t("data.Home")}</Link >
            <Link to={"/page2"}>Page2</Link >
            <Link to={"/page3"}>Page3</Link >
            <Link to={"/page4"}>Page4</Link >
            <Link to={"/page5"}>Page5</Link >
            <Link to={"/page6"}>Page6</Link >
            <Link to={"/page7"}>Page7</Link >
            <Link to={"/page8"}>Page8</Link >
          </div>
        </div>
        <div className="hidden md:flex items-center justify-between py-[21px]">
          <button className="pl-5 gap-[10px] pr-[30px] flex items-center rounded-lg bg-[#1CA342] text-white py-[13px]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            Каталог</button>
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 left-4 absolute top-[11px]">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input type="text" className="border-1 border-[#bbb] py-[11px] pr-50 rounded-lg pl-12" placeholder="Поиск в БЫСТРОЙКА" />
          </div>
          <p className="font-medium text-[20px]">8 800 450 10 10</p>
          <button className="border-[#A8A8A8] border-1 py-1 px-4 rounded-md text-[#444444]">Заказать звонок</button>
          <img src="/cart.png" className="border-[#A8A8A8] border-1 p-3 rounded-full text-[#444444]" />
          <img src="/heart.png" className="border-[#A8A8A8] border-1 p-3 rounded-full text-[#444444]" />
        </div>
      </header>
      <main className="bg-[whitesmoke]">
        <Outlet />
      </main>
      <footer></footer>
    </div>
  )
}

export default Layout