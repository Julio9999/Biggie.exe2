"use client"
import clsx from "clsx"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdHome } from "react-icons/md"

export interface MenuDrawerItemProps {
    title: string;
    icon?: React.ReactNode;
    path?: string;
}

export const MenuDrawerItem = ({ title, icon, path }: MenuDrawerItemProps) => {

    const pathName = usePathname();
    const active = path === pathName;


    return (
        <Link href={path ?? '/'}>
            <div
                className={clsx(`flex items-center  gap-8 px-2 py-4 cursor-pointer  rounded-sm`, {
                    'bg-mainColorTransparent': active,
                    'hover:bg-mainColorTransparent': active,
                    'hover:bg-gray-100': !active
                })}
            >
                {icon}
                <span
                    className={clsx(" text-base font-normal", {
                        "text-mainColor": active
                    })}
                >{title}</span>
            </div>
        </Link>
    )
}