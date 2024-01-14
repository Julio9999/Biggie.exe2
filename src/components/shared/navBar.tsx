import { FaHeart } from "react-icons/fa"
import { IoBagHandleOutline, IoCartOutline } from "react-icons/io5"
import { RiUserShared2Fill } from "react-icons/ri"
import { LogoBiggie } from ".."
import Link from "next/link"

export const NavBar = () => {
  return (
    <div className='flex w-full font-bold py-3 px-12 items-center shadow-lg text-navbar-color-text'>
      <ul className='flex basis-1/4  gap-4 items-end justify-end'>
        <li>
          <Link href={'/'}>
            Inicio
          </Link>
        </li>
        <li>
          <Link href={'/search'}>
            Buscar
          </Link>
        </li>
        <li>
          <Link href={'/products'}>
            Productos
          </Link>
        </li>
        <Link href={"/facturas"}>
          <li className="bg-rojo-biggie text-white px-1 rounded-2xl">Facturas electrónicas</li>
        </Link>
      </ul>
      <ul className="text-center flex-grow flex items-center justify-center">
        <div className="w-[150px]">
          <Link href={"/"}>
            <LogoBiggie />
          </Link>
        </div>
      </ul>
      <ul className='flex basis-1/4 items-center gap-4'>
        <p>Buscar productos</p>
        <RiUserShared2Fill />
        <FaHeart />
        <IoBagHandleOutline />
        <IoCartOutline />
      </ul>
    </div>
  )
}