import React from "react";
import * as Popover from "@radix-ui/react-popover";
import "@radix-ui/colors/violet.css";
import { CheckCircledIcon } from '@radix-ui/react-icons'

export default () => (
  <Popover.Root>
    <Popover.Trigger>
      {" "}
      <button
        className="font-Poppins bg-violet-300 w-auto px-2 h-7 rounded-lg text-black"
        type="button"
      >
        Enviar
      </button>
    </Popover.Trigger>
    <Popover.Anchor />
    <Popover.Portal className="">
      <Popover.Content
        side="right"
        className="font-Poppins rounded-md p-2 w-[20rem] h-16 leading-none text-violet11 text-violet-950 bg-violet-300 -translate-x-4 flex flex-row gap-4 justify-center items-center"
      >
        <CheckCircledIcon className="pl-2 text-violet-600 w-16 h-16"/>
        Formulário enviado, obrigado por compartilhar seu feedback!
        <Popover.Arrow className="fill-violet-300" />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);
