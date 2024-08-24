'use client'
import { IoSearchSharp } from "react-icons/io5"
import { FloatingInput, FloatingLabel } from "./floating-label-input"
import { useState } from "react";
import clsx from "clsx";

interface Props {
    className?: string;
}

export const CustomSearchInput = ({ className }: Props) => {

    const [focus, setFocus] = useState(false);

    return (
        <div className={clsx(`border rounded-3xl flex cursor-pointer items-center justify-center pr-4 ${className} max-w-[200px]`, {
            'outline outline-mainColor outline-2': focus
        })}
        >
            <div className="relative  inline-block w-[136px]">
                <FloatingInput
                    onFocus={() => setFocus(() => true)}
                    onBlur={() => setFocus(() => false)}
                    id="floating-customize"
                    className="shadow-none border-none w-full  focus-visible:ring-0 pl-4 caret-mainColor"
                />
                <FloatingLabel
                    htmlFor="floating-customize"
                    className={clsx("font-medium text-gray-400 p-0", {
                        'text-mainColor rounded-lg px-0': focus
                    })}>
                    Buscar Productos
                </FloatingLabel>
            </div>
            <div className="flex-1">
                <IoSearchSharp size={20}
                className={clsx('',{'text-mainColor': focus})}
                  />
            </div>
        </div>

    )
}