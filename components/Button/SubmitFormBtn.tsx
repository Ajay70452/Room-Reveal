"use client"
import { FC, FormEvent, FormEventHandler } from "react"
import { useFormState, useFormStatus } from "react-dom";

interface SubmitFormBtnProps {
    children: React.ReactNode,
    actionHandler?: { (e: FormEvent<HTMLButtonElement>): void }
}


const SubmitFormBtn : FC<SubmitFormBtnProps> = ({children, actionHandler}) => {
  const formStatus = useFormStatus();
  console.log(formStatus)

  return (
    <button type="submit" aria-disabled={formStatus.pending} onSubmit={(e)=>{e.preventDefault();actionHandler?.(e)}} className="h-12 w-full bg-primary rounded-[14px] text-white text-lg font-semibold">
        {
            formStatus.pending ? "Sending..." : children
        }
    </button>
  )
}

export default SubmitFormBtn