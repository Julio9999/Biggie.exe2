"use client"
import { IoMdHeartEmpty } from "react-icons/io";
import { IoBagHandleOutline, IoCartOutline } from "react-icons/io5"
import { RiUserShared2Fill } from "react-icons/ri"
import { IoSearchSharp } from "react-icons/io5";
import logo from "@/assets/logo-biggie.svg"


import Link from "next/link"
import { CustomInput, CustomSearchInput, CustomToltip, MenuDrawer } from "@/components";

import { useState } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export const NavBar = () => {

  const [expanded, setIsExpanded] = useState(false);

  const pathName = usePathname();


  return (
    <div className="w-full bg-white">
      <div className="flex justify-between items-center gap-2 xl:gap-0 px-4 py-1">
        <div className="lg:flex-1">
          <div className={clsx("lg:hidden", {
            "hidden": expanded
          })}>
            <MenuDrawer />
          </div>
          <div className="hidden lg:block">
            <ul className='flex gap-3'>
              <li className="flex items-center">
                <Link href={'/'} 
                className={clsx("font-bold text-gray-600  text-sm", {
                  'text-mainColor': pathName == '/',
                })}
                >
                  Inicio
                </Link>
              </li>
              <li className="flex items-center">
                <Link href={'/search'} className={clsx("font-bold text-gray-600  text-sm", {
                  'text-mainColor': pathName == '/search',
                })}>
                  Buscar
                </Link>
              </li>
              <li className="flex items-center">
                <Link href={'/products'} className={clsx("font-bold text-gray-600 text-sm", {
                  'text-mainColor': pathName == '/products',
                })}>
                  Productos
                </Link>
              </li>
              <li className="flex items-center w-full">
                <Link href={"/facturas"} className="font-bold bg-mainColor rounded-xl w-fit text-white px-3 py-0.5 text-sm">
                  Facturas electrónicas
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={clsx("flex-1 w-full", {
          "hidden": expanded
        })}>
          <Link href={"/"} className="h-full w-full">
            <picture className="w-full h-full">
              <img src={logo?.src} className="w-full max-h-16 object-fill" alt="logo" />
            </picture>
          </Link>
        </div>
        <div className="flex gap-1  items-center py-2 flex-1 justify-end">
          <CustomSearchInput className={"hidden lg:flex"} />
          <CustomInput
            handleClick={() => setIsExpanded(() => false)}
            className={clsx(``, {
              "flex": expanded,
              "hidden": !expanded
            })}
          />
          <IoSearchSharp
            size={25}
            className={clsx("lg:hidden hover:border-2", {
              "hidden": expanded
            })}
            cursor="pointer"
            onClick={() => setIsExpanded(() => true)}
            color='gray'
          />
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
      </div>
    </div>
  )
}