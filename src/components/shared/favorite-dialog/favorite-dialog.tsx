"use client"
import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FavoriteToltip } from "../favorite-toltip/favorite-toltip"

export const FavoriteDialog = () => {
    return (
        <div onClick={(e) => e.preventDefault()} className="">
        <Dialog>
            <DialogTrigger asChild>
                <div>
                    <FavoriteToltip />
                </div>
            </DialogTrigger>
            <DialogContent className="md:max-w-[400px] max-w-[280px] rounded-md">
                <DialogHeader className="text-center">
                    <DialogTitle className="text-xl font-medium  text-center">Agregar a favoritos</DialogTitle>
                    <DialogDescription className="text-lg font-normal text-center">
                        Por favor, inicie sesion para continuar
                    </DialogDescription>
                </DialogHeader>
                <div className="text-center">
                    <button className="bg-mainColor text-white text-sm font-medium tracking-widest px-6 py-2.5 rounded-full">INICIAR SESIÓN</button>
                </div>
                
                <DialogFooter className="justify-center items-center text-start flex-wrap sm:flex-nowrap md:text-center md:justify-center md:items-center flex flex-row gap-0.5 w-full  text-sm">
                    <span>¿Eres un cliente nuevo?</span>
                    <span className="text-mainColor">Registrate aqui</span>
                </DialogFooter>
            </DialogContent>
        </Dialog>
        </div>
    )
}