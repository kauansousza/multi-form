import { useState } from "react";
import "./index.css";
import Multiform from "./components/Multiform";
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'

function App() {
  return (
    <div className="max-w-screen max-h-screen w-screen h-screen flex flex-col justify-center bg-gradient-to-r from-violet-600 via-purple-700 to-violet-900">
      <Multiform />
      <div className="flex items-center flex-col justify-center lg:w-2/3 xl:w-1/2 w-11/12">
      <footer className="py-4 max-h-screen absolute bottom-0 rounded-t-2xl bg-violet-200">
        <div className="container mx-auto px-4">
          <p className="text-sm text-violet-950 text-center">
            © 2023 Kauan Souza. Todos os direitos reservados. 
          </p>
          <div className="justify-center flex flex-row gap-2 mt-1">
          <a target="_blank" href="https://github.com/kauansousza"> <GitHubLogoIcon className="text-violet-950 w-7 h-7" /> </a>
          <a target="_blank" href="https://www.linkedin.com/in/kauansousa/"> <LinkedInLogoIcon className="text-violet-950 w-7 h-7" /> </a>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}

export default App;
