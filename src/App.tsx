

import Logo from './assets/image/logo.svg'
import Sphere from './assets/image/sphere.svg'
import mpImage1 from './assets/image/img-mp1.png'
import mpImage2 from './assets/image/img-mp2.png'
import mpImage3 from './assets/image/img-mp3.png'
import telegram from './assets/image/socials/TG.svg'
import vk from './assets/image/socials/vk.svg'
import max from './assets/image/socials/max.svg'

import { cards } from './data'
import { tags } from './data'
import ModalForm from './components/ModalForm'
import LoginForm from './components/LoginForm'
import { useState } from 'react'

  const App = () => {
      type ModalType = 'form' | 'login' | 'success' | null
      const [activeModal, setActiveModal] = useState<ModalType>(null)
      const duplicated = [...tags, ...tags];


  return (
    <>
<div className="min-h-screen flex flex-col">
    <main className="flex-1">
      <section className="w-full h-[1080px] bg-[var(--blue)] px-[150px] pt-[86px]">
        <nav className="flex items-center justify-between bg-white/20 rounded-2xl px-[32px] h-[100px] py-3 font-light"> 
          <div className="flex items-center gap-10">
            <div className="w-9 h-9 flex items-center justify-center">
              <img src={Logo} alt="Logo" />
            </div>

            <div className="flex gap-10 text-white text-[15px]">
              <a href="#" className='text-2xl'>О движении</a>
              <a href="#" className='text-2xl'>Направления</a>
              <a href="#" className='text-2xl'>Мероприятия</a>
              <a href="#" className='text-2xl'>Контакты</a>
            </div>
          </div>
          <button 
          className="bg-white text-[#4545F5] font-semibold rounded-full w-[130px] h-[56px] text-xl cursor-pointer hover:bg-[var(--pink)] transition"
            onClick={() => setActiveModal('login')}
          >
            Войти
          </button>
          <LoginForm
            isOpen={activeModal === 'login'}
            onClose={() => setActiveModal(null)}
          />
        </nav>
      <div className="flex items-center justify-between flex-1 px-6 py-16">
        <div className="max-w-lg">
          <h1 className="font-Wayward text-white leading-none tracking-tight text-[170px] text-nowrap">
            Будь среди
          </h1>
          <h1 className="font-Wayward text-black leading-none tracking-tight mb-8 text-[170px]">
            первых
          </h1>
          <p className="text-white/90 text-[36px] leading-relaxed mb-9">
            Развивайся, создавай проекты<br />
            и стань центром сообщества,<br />
            где создают и помогают!
          </p>
          <div className="flex gap-3">
            <button className="bg-white rounded-full px-7 py-3.5 text-2xl w-[360px] h-[67px] text-nowrap cursor-pointer hover:bg-gray-400 transitionп">
              Вступить в движение!
            </button>
            <button className="text-white border-2 border-white/70 rounded-full px-7 py-3.5 text-2xl w-[220px] cursor-pointer">
              Подробнее
            </button>
          </div>
        </div>
        <div className="hidden lg:block hidden">
          <img className='object-contain' src={Sphere} alt="sphere"  />
        </div>
      </div>
      </section>
      <section className="w-full min-h-[989px] bg-white px-[150px] pt-[73px] font-sans">
        <div className="mb-14">
          <h2 className="text-6xl font-Wayward text-black leading-tight">
            Что такое
          </h2>
          <h2 className="text-6xl font-Wayward text-[var(--blue)] leading-tight">
            движение первых?
          </h2>
        </div>
        <div className="flex justify-center">
        <div className="max-w-full mx-auto grid grid-cols-3 gap-64 ">
            {cards.map((card) => (
              <div
                key={card.title}
                className="bg-[#6060F0] rounded-3xl w-full h-[620px] min-h-full px-10 py-14 flex flex-col items-center text-center"
              >
                <div className="mb-6 flex items-center justify-center ">
                  <img className='h-60' src={card.icon} alt="card-icon" />
                </div>
                <h3 className="text-white text-2xl text-[48px] font-semibold mb-4">
                  {card.title}
                </h3>
                <p className="text-white/75 text-[24px] leading-relaxed">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full min-h-[820px] pt-[200px] px-[150px] font-sans overflow-hidden">

      <div className="grid grid-cols-[1fr_2fr_1fr] gap-4">

        <div className="rounded-3xl overflow-hidden h-[700px]">
          <img
            src={mpImage1}
            alt="Мероприятие 1"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col  gap-5 py-4">
            <h2
              className="text-6xl font-Wayward text-[#4545F5] tracking-wide uppercase"
            >
              Мероприятия
            </h2>
            <button className="border-2 bg-black text-white font-semibold rounded-full px-8 py-2.5 text-[36px] hover:bg-gray-400 hover:border-gray-400 hover:text-black transition-colors cursor-pointer">
              Вступить в движение!
            </button>
          </div>

          <div className="rounded-3xl overflow-hidden h-[340px] mt-39 ml-24 w-full">
            <img  
              src={mpImage2}
              alt="Мероприятие 3"
              className="w-[1600px] h-full object-cover"
            />
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden w-[380px] h-[340px]"  >
          <img
            src={mpImage3}
            alt="Мероприятие 2"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="w-full overflow-hidden py-6">
        <div className="flex gap-6 whitespace-nowrap animate-scroll">
          {duplicated.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-1 border border-[var(--pink)] text-xl rounded-full cursor-pointer hover:bg-blue-500 hover:text-white transition"
            >
              {tag}
            </span>
          ))}
        </div>

          <style jsx>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }

            .animate-scroll {
              animation: scroll 20s linear infinite;
            }
          `}</style>
        </div>
      </section>
      <section className="w-full bg-white px-[150px] pt-[128px] py-10 font-sans">
        <div className="bg-[#4545F5] rounded-3xl px-12 py-10 flex items-center justify-between">
          <div>
            <h2
              className="text-6xl font-Wayward text-white mb-3"
            >
              Хочешь вступить?
            </h2>
            <p className="text-white/80 text-2xl leading-relaxed">
              Заполни короткую форму<br />
              и расскажи о себе
            </p>
          </div>
          <button 
            className="bg-white text-black font-semibold rounded-full px-10 py-4 text-2xl whitespace-nowrap hover:bg-gray-100 transition-colors flex-shrink-0 cursor-pointer"
            onClick={() => setActiveModal('form')}
            >
            Оставить заявку
          </button>
          <ModalForm
            isOpen={activeModal === 'form'}
            onClose={() => setActiveModal(null)}
          />
        </div>
      </section>
    </main>
      <footer className="w-full bg-[var(--dark-blue)] px-16 py-12  font-sans ">

          <div className="flex gap-20">

            <div className="flex-shrink-0">
              <img className='w-16' src={Logo} alt="Logo" />
            </div>

            <div className="flex w-full justify-center gap-42">
              <div>
                <h3 className="text-white text-4xl font-semibold mb-5">Служба заботы</h3>
                <p className="text-white/60 text-sm mb-1">Для звонков по Самарской обл.</p>
                <p className="text-white font-bold text-base mb-4">+7 912 345 67 89</p>
                <p className="text-white/60 text-sm mb-1">Для звонков по России</p>
                <p className="text-white font-bold text-base">+7 912 345 67 89</p>
              </div>

              <div>
                <h3 className="text-white text-4xl font-semibold mb-5">Мы в соц.сетях</h3>

                <div className="flex gap-5 mb-5">
                  <a href="#" className="">
                    <img className='w-12 h-12' src={vk} alt="VK" />
                  </a>
                  <a href="#" className="">
                    <img className='w-12 h-12' src={telegram} alt="Telegram" />
                  </a>
                  <a href="#" className="">
                    <img className='w-12' src={max} alt="MAX" />
                  </a>
                </div>

                <p className="text-white/60 text-sm mb-1">Электронная почта</p>
                <a href="mailto:vtor@mail.ru" className="text-white font-bold text-base hover:text-white/80 transition-colors">
                  vtor@mail.ru
                </a>
              </div>

            </div>
          </div>
          <div className="mt-10 pt-6 flex gap-10 justify-center">
            <span className="text-white/40 text-sm">© 2026 Будь среди первых</span>
            <a href="#" className="text-white/40 text-sm hover:text-white/70 transition-colors">Политика конфиденциальности</a>
            <a href="#" className="text-white/40 text-sm hover:text-white/70 transition-colors">Согласие на обработку данных</a>
          </div>
        </footer>
        </div>
    </>
  )
}

export default App
