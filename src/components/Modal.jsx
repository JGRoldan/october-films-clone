'use client'
import { useState } from "react";

const Modal = ({paginaOficial}) => {

    const [isOpen, setIsOpen] = useState(true);

    const handleCloseModal = () => {
      setIsOpen(false);
    }  
    if(!isOpen) return null;

    return (
      <div className="absolute z-50 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4 text-center">
          <div className="fixed inset-0 bg-black opacity-80"></div>
          <div className="bg-white rounded-lg p-8 z-20">
            <div className="mb-3 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25" strokeWidth="1.5" stroke="#3b82f6" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>  
            </div>
            <p className="mb-4 text-slate-900">
                La siguiente página es un CLON realizado con fines prácticos. 
                <br/>
                La pagina oficial es <span className="underline decoration-indigo-500">{paginaOficial}</span>.
            </p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleCloseModal}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    );
};
  
export default Modal;