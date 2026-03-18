import React from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const LoginForm: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-[#EAEAEA] rounded-[40px] px-8 py-10 w-full max-w-md relative shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
          Напишите нам!
        </h2>

        <form className="flex flex-col gap-5">
          <div>
            <label className="text-sm text-gray-600 mb-1 block">
              Ваше имя
            </label>
            <input
              required
              type="text"
              placeholder="Как зовут?"
              className="w-full px-5 py-4 rounded-full bg-[#D9DFF2] placeholder:text-[#8EA2FF] outline-none focus:ring-2 focus:ring-[#7F7CEB]"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600 mb-1 block">
              Фамилия
            </label>
            <input
              required
              type="text"
              placeholder="Я сказал, фамилия твоя!"
              className="w-full px-5 py-4 rounded-full bg-[#D9DFF2] placeholder:text-[#8EA2FF] outline-none focus:ring-2 focus:ring-[#7F7CEB]"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600 mb-1 block">
              Рейтинг паспорта
            </label>
            <input
              required
              type="number"
              placeholder="Не менее 100"
              className="w-full px-5 py-4 rounded-full bg-[#D9DFF2] placeholder:text-[#8EA2FF] outline-none focus:ring-2 focus:ring-[#7F7CEB]"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600 mb-1 block">
              Почта
            </label>
            <input
              required
              type="email"
              placeholder="Введите e-mail"
              className="w-full px-5 py-4 rounded-full bg-[#D9DFF2] placeholder:text-[#8EA2FF] outline-none focus:ring-2 focus:ring-[#7F7CEB]"
            />
          </div>
          <label className="flex items-start gap-2 text-xs text-[#6C63FF] mt-2">
            <input type="checkbox" className="mt-1 accent-[#6C63FF]" />
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
  );
};

export default LoginForm