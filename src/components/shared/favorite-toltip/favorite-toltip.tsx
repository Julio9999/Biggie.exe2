"use client"
import { CustomToltip } from "@/components"
import { FaRegHeart } from "react-icons/fa6"

export const FavoriteToltip = () => {
    return (
        <CustomToltip text={"Agregar a favoritos"}>
            <FaRegHeart
                className="text-mainColor w-full px-1 py-2  cursor-pointer hover:bg-mainColorTransparent hover:rounded-3xl box-content"
                size={25}
            />
        </CustomToltip>
    )

}