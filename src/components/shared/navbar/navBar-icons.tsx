"use client"
import { CustomSearchInput, CustomToltip } from "@/components"
import clsx from "clsx"
import Link from "next/link"
import { useState } from "react"
import { IoMdHeartEmpty } from "react-icons/io"
import { IoBagHandleOutline, IoCartOutline, IoSearchSharp } from "react-icons/io5"
import { RiUserShared2Fill } from "react-icons/ri"
import logo from "@/assets/logo-biggie.svg"


export const NavBarIcons = () => {

    const [expanded, setIsExpanded] = useState(false);


    return (
        <>
            <div className="flex-1 w-full">
                <Link href={"/"} className="h-full w-full">
                    <picture className="w-full h-full">
                        <img src={logo?.src} className="w-full max-h-16 object-fill" alt="logo" />
                    </picture>
                </Link>
            </div>
            <div className="flex gap-1  items-center py-2 flex-1 justify-end">
                <CustomSearchInput className="hidden lg:flex" />
                <IoSearchSharp onClick={() => setIsExpanded((current) => !current)} size={25} className="lg:hidden hover:border-2" cursor="pointer" color='gray' />
                <div className={clsx("flex", {
                    "hidden": expanded
                })}>
                    <RiUserShared2Fill size={25} className="iconHover" cursor="pointer" color='gray' />
                    <CustomToltip text="Mis Favoritos">
                        <IoMdHeartEmpty size={25} className="hidden lg:block iconHover" cursor="pointer" color='gray' />
                    </CustomToltip>
                    <CustomToltip text="Mis Pedidos">
                        <IoBagHandleOutline size={25} className="hidden lg:block iconHover" cursor="pointer" color='gray' />
                    </CustomToltip>
                    <IoCartOutline size={25} color='gray' className="iconHover" cursor="pointer" />
                </div>
            </div>
        </>
    )
}