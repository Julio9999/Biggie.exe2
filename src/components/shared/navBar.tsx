import { IoMdHeartEmpty } from "react-icons/io";
import { IoBagHandleOutline, IoCartOutline } from "react-icons/io5"
import { RiUserShared2Fill } from "react-icons/ri"
import { IoMdMenu } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import logo from "../../../public/assets/logo-biggie.svg"


import Link from "next/link"
import { FloatingInput, FloatingLabel } from "../ui/floating-label-input";
import { CustomSearchInput } from "../ui/custom-search-input";
import { CustomToltip } from "./custom-toltip";

export const NavBar = () => {
  return (
    <div className="w-full bg-white">
      <div className="flex justify-between items-center px-4 py-1">
        <div className="flex-1">
          <div className="lg:hidden">
            <IoMdMenu size={25} />
          </div>
          <div className="hidden lg:block">
            <ul className='flex gap-3'>
              <li className="flex items-center">
                <Link href={'/'} className="font-bold text-mainColor text-sm">
                  Inicio
                </Link>
              </li>
              <li className="flex items-center">
                <Link href={'/search'} className="font-bold text-gray-600 text-sm">
                  Buscar
                </Link>
              </li>
              <li className="flex items-center">
                <Link href={'/products'} className="font-bold text-gray-600 text-sm">
                  Productos
                </Link>
              </li>
              <li className="flex items-center">
                <Link href={"/facturas"} className="font-bold bg-mainColor rounded-xl text-white px-3 py-0.5 text-sm">
                  Facturas electrónicas
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 w-full">
          <Link href={"/"} className="h-full w-full">
            <picture className="w-full h-full">
              <img src={logo?.src} className="w-full max-h-16 object-fill" alt="logo" />
            </picture>
          </Link>
        </div>
        <div className="flex gap-1  items-center py-2 flex-1 justify-end">
          <CustomSearchInput className="hidden lg:flex" />
          <IoSearchSharp size={25} className="lg:hidden hover:border-2" cursor="pointer" color='gray' />
          <div className="flex">
            <RiUserShared2Fill size={25} className="iconHover" cursor="pointer" color='gray' />
            <CustomToltip text="Mis Favoritos">
              <IoMdHeartEmpty size={25} className="hidden lg:block iconHover" cursor="pointer" color='gray' />
            </CustomToltip>
            <CustomToltip text="Mis Pedidos">
              <IoBagHandleOutline size={25} className="hidden lg:block iconHover" cursor="pointer" color='gray' />
            </CustomToltip>
            <IoCartOutline size={25} color='gray' className="hidden lg:block iconHover" cursor="pointer" />
          </div>
        </div>
      </div>
    </div>
  )
}