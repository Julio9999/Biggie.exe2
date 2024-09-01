import { Sheet, SheetContent,SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import clsx from "clsx"
import { IoMdMenu } from "react-icons/io"
import { MdHome } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { TbShoppingBagSearch } from "react-icons/tb";
import { IoMdPerson } from "react-icons/io";
import { MdOutlineNewspaper } from "react-icons/md";
import { PiQuotesFill } from "react-icons/pi";
import { FaMoneyBills } from "react-icons/fa6";
import { LiaMapMarkerAltSolid } from "react-icons/lia";


export const MenuDrawer = () => {
    return (
        <div className="grid grid-cols-2 gap-2 p-0">
            <Sheet>
                <SheetTrigger asChild>
                    <IoMdMenu size={25} cursor="pointer" />
                </SheetTrigger>
                <SheetContent side={"left"} className="py-2 px-2 w-[260px]">
                    <SheetHeader className="mb-2.5">
                        <SheetTitle className="font-bold text-2xl">Menú</SheetTitle>
                    </SheetHeader>
                    <div className="flex flex-col gap-2">
                        <div
                            className={clsx(`flex items-center  gap-8 px-2 py-4 cursor-pointer  rounded-sm`, {
                                'bg-mainColorTransparent': true,
                                'hover:bg-mainColorTransparent': true,
                                'hover:bg-gray-100': false
                            })}
                        >
                            <MdHome className="text-mainColor" size={25} />
                            <span
                                className={clsx(" text-base font-normal", {
                                    "text-mainColor": true
                                })}
                            >Inicio</span>
                        </div>

                        <div
                            className={clsx(`flex items-center  gap-8 px-2 py-4 cursor-pointer  rounded-sm`, {
                                'bg-mainColorTransparent': false,
                                'hover:bg-mainColorTransparent': false,
                                'hover:bg-gray-100': true
                            })}
                        >
                            <IoSearchOutline className="text-mainColor" size={25} />
                            <span
                                className={clsx(" text-base font-normal", {
                                    "text-mainColor": false
                                })}
                            >Buscar</span>
                        </div>

                        <div
                            className={clsx(`flex items-center  gap-8 px-2 py-4 cursor-pointer  rounded-sm`, {
                                'bg-mainColorTransparent': false,
                                'hover:bg-mainColorTransparent': false,
                                'hover:bg-gray-100': true
                            })}
                        >
                            <TbShoppingBagSearch className="text-mainColor" size={25} />
                            <span
                                className={clsx(" text-base font-normal", {
                                    "text-mainColor": false
                                })}
                            >Productos</span>
                        </div>

                        <div
                            className={clsx(`flex items-center  gap-8 px-2 py-4 cursor-pointer  rounded-sm`, {
                                'bg-mainColorTransparent': false,
                                'hover:bg-mainColorTransparent': false,
                                'hover:bg-gray-100': true
                            })}
                        >
                            <IoMdPerson className="text-mainColor" size={25} />
                            <span
                                className={clsx(" text-base font-normal", {
                                    "text-mainColor": false
                                })}
                            >Mis datos</span>
                        </div>

                        <div
                            className={clsx(`flex items-center  gap-8 px-2 py-4 cursor-pointer rounded-sm`, {
                                'bg-mainColorTransparent': false,
                                'hover:bg-mainColorTransparent': false,
                                'hover:bg-gray-100': true
                            })}
                        >
                            <MdOutlineNewspaper  className="text-mainColor" size={25} />
                            <span
                                className={clsx(" text-base font-normal", {
                                    "text-mainColor": false
                                })}
                            >Facturas eléctronicas</span>
                        </div>

                        <div
                            className={clsx(`flex items-center  gap-8 px-2 py-4 cursor-pointer  rounded-sm`, {
                                'bg-mainColorTransparent': false,
                                'hover:bg-mainColorTransparent': false,
                                'hover:bg-gray-100': true
                            })}
                        >
                            <PiQuotesFill className="text-mainColor" size={25} />
                            <span
                                className={clsx(" text-base font-normal", {
                                    "text-mainColor": false
                                })}
                            >Acerca de nosotros</span>
                        </div>

                        <div
                            className={clsx(`flex items-center  gap-8 px-2 py-4 cursor-pointer  rounded-sm`, {
                                'bg-mainColorTransparent': false,
                                'hover:bg-mainColorTransparent': false,
                                'hover:bg-gray-100': true
                            })}
                        >
                            <FaMoneyBills className="text-mainColor" size={25} />
                            <span
                                className={clsx(" text-base font-normal", {
                                    "text-mainColor": false
                                })}
                            >Bienes raíces</span>
                        </div>

                        <div
                            className={clsx(`flex items-center  gap-8 px-2 py-4 cursor-pointer  rounded-sm`, {
                                'bg-mainColorTransparent': false,
                                'hover:bg-mainColorTransparent': false,
                                'hover:bg-gray-100': true
                            })}
                        >
                            <LiaMapMarkerAltSolid className="text-mainColor" size={25} />
                            <span
                                className={clsx(" text-base font-normal", {
                                    "text-mainColor": false
                                })}
                            >Sucursales</span>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}
