import React from 'react'

type Props = {
  isOpen: boolean
  onClose: () => void
}

const ModalForm: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-gray-100 rounded-3xl p-8 w-full max-w-md relative shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold text-center mb-6">
          Напишите нам!
        </h2>
        <form className="flex flex-col gap-4">
          <div>
            <label className="text-sm text-gray-600">Ваше имя</label>
            <input
              required
              type="text"
              placeholder="Как зовут?"
              className="w-full mt-1 px-4 py-3 rounded-xl bg-[var(--light-pink)] text-[var(--pink)] outline-none"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Фамилия</label>
            <input
              required
              type="text"
              placeholder="Я сказал, фамилия твоя!"
              className="w-full mt-1 px-4 py-3 rounded-xl bg-[var(--light-pink)] text-[var(--pink)] outline-none"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Рейтинг паспорта</label>
            <input
              required
              type="number"
              placeholder="Не менее 100"
              className="w-full mt-1 px-4 py-3 rounded-xl bg-[var(--light-pink)] text-[var(--pink)] outline-none"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Почта</label>
            <input
              required
              type="email"
              placeholder="Введите e-mail"
              className="w-full mt-1 px-4 py-3 rounded-xl bg-[var(--light-pink)] text-[var(--pink)] outline-none"
            />
          </div>
          <label className="flex items-center gap-2 text-xs text-[var(--purple)]">
            <input type="checkbox" className="[var(--blue)]"/>
            Я даю согласие на обработку персональных данных
          </label>
          <button
            onClick={onClose}
            type="submit"
            className="cursor-pointer mt-4 py-4 rounded-full text-white text-lg font-medium bg-[var(--dark-blue)] shadow-md hover:opacity-90 transition"
          >
            Отправить заявку
          </button>
        </form>
      </div>
    </div>
  )
}

export default ModalForm