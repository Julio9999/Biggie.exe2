import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { IoMdMenu } from "react-icons/io"
import { MdHome } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { TbShoppingBagSearch } from "react-icons/tb";
import { IoMdPerson } from "react-icons/io";
import { MdOutlineNewspaper } from "react-icons/md";
import { PiQuotesFill } from "react-icons/pi";
import { FaMoneyBills } from "react-icons/fa6";
import { LiaMapMarkerAltSolid } from "react-icons/lia";
import { MenuDrawerItem, MenuDrawerItemProps } from "./menu-drawer-item";




export const MenuDrawer = () => {

    const menuItems: MenuDrawerItemProps[] = [
        {title: "Inicio", path:'/' ,icon: <MdHome className="text-mainColor" size={25} />},
        {title: "Buscar", path:'/search', icon: <IoSearchOutline className="text-mainColor" size={25} />},
        {title: "Productos", path: '/products' ,icon: <TbShoppingBagSearch className="text-mainColor" size={25} />},
        {title: "Mis datos", icon: <IoMdPerson className="text-mainColor" size={25} />},
        {title: "Facturas eléctronicas", icon: <MdOutlineNewspaper className="text-mainColor" size={25} />},
        {title: "Acerca de nosotros", icon:<PiQuotesFill className="text-mainColor" size={25} />},
        {title: "Bienes raíces", icon: <FaMoneyBills className="text-mainColor" size={25} />},
        {title: "Sucursales", icon: <LiaMapMarkerAltSolid className="text-mainColor" size={25} />},
    ]

    return (
        <div className="grid grid-cols-2 gap-2 p-0">
            <Sheet>
                <SheetTrigger asChild>
                    <span>
                        <IoMdMenu size={25} cursor="pointer" />
                    </span>
                </SheetTrigger>
                <SheetContent side={"left"} className="py-2 px-2 w-[260px]">
                    <SheetHeader className="mb-2.5">
                        <SheetTitle className="font-bold text-2xl">Menú</SheetTitle>
                    </SheetHeader>
                    <div className="flex flex-col gap-2">

                        {
                            menuItems.map(item => (
                                <MenuDrawerItem key={item.title} {...item} />
                            ))
                        }


                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}
