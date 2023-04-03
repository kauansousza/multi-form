import React from "react";
import { useState } from "react";
import Popover from "./Popover";

const Multiform = () => {
  const [etapa, setEtapa] = useState(1);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const proximo = () => {
    setEtapa(etapa + 1);
  };

  const anterior = () => {
    setEtapa(etapa - 1);
  };

  const enviar = () => {
    alert("Formulário enviado");
  };

  return (
    <div className="flex items-center justify-center  font-Poppins">
      <div className="flex flex-col rounded-[2rem] justify-center items-center w-[40rem] h-[25rem] drop-shadow-xl bg-violet-600">
        <h1 className="font-Poppins text-4xl text-violet-100 font-bold tracking-widest pb-7">
          Formulário
        </h1>
        <hr className="w-96 h-1 mb-10"></hr>
        {etapa === 1 && (
          <div className="flex flex-col justify-items-start">
            <label
              className="pl-2 pb-1 text-violet-100 font-medium"
              htmlFor="nome"
            >
              Nome
            </label>
            <input
              className="px-3 py-1 rounded-2xl placeholder:text-sm placeholder:tracking-widest"
              type="text"
              placeholder="seu nome aqui"
              id="nome"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
            />
            <div className="flex pt-5 flex-row justify-center items-center gap-5">
              <span className="font-inter text-violet-100 cursor-default">
                Anterior
              </span>
              <button
                type="button"
                className="cursor-not-allowed rounded-lg bg-violet-300 w-7 h-7"
              >
                <img className="w-7 h-7 opacity-30" src="/left.svg" />
              </button>
              <button
                className="bg-violet-300 w-7 h-7 rounded-lg"
                type="button"
                onClick={proximo}
              >
                <img className="w-7 h-7" src="/right.svg" />
              </button>
              <span className="font-inter text-violet-100 cursor-default">
                Próximo
              </span>
            </div>
          </div>
        )}
        {etapa === 2 && (
          <div className="flex flex-col justify-items-start">
            <label
              className="pl-2 pb-1 text-violet-100 font-medium"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="px-3 py-1 rounded-2xl placeholder:text-sm placeholder:tracking-widest"
              type="email"
              placeholder="seu email aqui"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <div className="flex pt-5 flex-row justify-center items-center gap-5">
              <span className="font-inter text-violet-100 cursor-default">
                Anterior
              </span>
              <button
                type="button"
                className="rounded-lg bg-violet-300 w-7 h-7"
                onClick={anterior}
              >
                <img className="w-7 h-7" src="/left.svg" />
              </button>
              <button
                className="bg-violet-300 w-7 h-7 rounded-lg"
                type="button"
                onClick={proximo}
              >
                <img className="w-7 h-7" src="/right.svg" />
              </button>
              <span className="font-inter text-violet-100 cursor-default">
                Próximo
              </span>
            </div>
          </div>
        )}
        {etapa === 3 && (
          <div className="flex flex-col justify-items-start">
            <label
              className="pl-2 pb-1 text-violet-100 font-medium"
              htmlFor="message"
            >
              Feedback
            </label>
            <input
              className="w-auto px-3 py-1 pb-20 rounded-2xl placeholder:text-sm placeholder:tracking-widest"
              type="message"
              placeholder="seu feedback aqui"
              id="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
            <div className="flex pt-5 flex-row justify-center items-center gap-5">
              <span className="font-inter text-violet-100 cursor-default">
                Anterior
              </span>
              <button
                type="button"
                className="rounded-lg bg-violet-300 w-7 h-7"
                onClick={anterior}
              >
                <img className="w-7 h-7" src="/left.svg" />
              </button>
              <Popover />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Multiform;
