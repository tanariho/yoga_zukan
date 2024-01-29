"use client"
import React, { createContext, useRef, useContext,  ReactNode} from 'react';
import { Toast } from 'primereact/toast';

interface ToastProviderProps {
  children: ReactNode;
}

//null! ⇨nullであるが、後でMutableRefObject<Toast | null>型の値に置き換えられる
const ToastContext = createContext<React.MutableRefObject<Toast | null>>(null!);

export const useToast = () => {
  return useContext(ToastContext);
};

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const toastRef = useRef<Toast>(null);

  return (
    <ToastContext.Provider value={toastRef}>
      <Toast ref={toastRef} />
      {children}
    </ToastContext.Provider>
  );
};
