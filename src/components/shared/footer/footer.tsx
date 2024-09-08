import logo from "@/assets/logo-biggie-white.543df63.svg"
import { Separator } from "@/components/ui/separator"

export const Footer = () => {
    return (
        <footer className="bg-mainColor w-full" >
            <div className="pb-8 pt-4  text-white max-w-[1785px] w-full mx-auto">
                <section className="w-full flex gap-4 items-center flex-col justify-center lg:items-start lg:px-12">
                    <article className="w-24">
                        <picture>
                            <img alt="logo-biggie-white" className="w-full h-auto" src={logo.src} />
                        </picture>
                    </article>
                    <Separator className="w-60 h-0.5 lg:w-full " />
                    <section className="flex flex-col lg:flex-row w-full lg:justify-start lg:items-center">
                        <article className="flex flex-col justify-center gap-4 items-center px-6 lg:px-0 lg:flex-1">
                            <p className="text-base font-medium lg:text-start  lg:w-full">Direccion</p>
                            <p className="text-xs font-normal lg:text-start  lg:w-full">Casa Central: San Benigno Nro.880, e/ Ntra. Sra. del Carmen y Federación Rusa</p>
                            <p className="text-xs font-normal lg:text-start  lg:w-full">+595 21 729 0300</p>
                        </article>
                        <article className="flex flex-col justify-center gap-4 items-center px-6 lg:px-0 lg:flex-1">
                            <p className="text-base font-medium lg:text-start  lg:w-full">Sobre Nosotros</p>
                            <p className="text-xs font-normal lg:text-start  lg:w-full">Nuestra Historia</p>
                            <p className="text-xs font-normal lg:text-start  lg:w-full">Sucursales</p>
                            <p className="text-xs font-normal lg:text-start  lg:w-full">Términos y Condiciones</p>
                        </article>

                        <article className="flex flex-col justify-center gap-4 items-center px-6 lg:px-0 lg:flex-1">
                            <p className="text-base font-medium lg:text-start  lg:w-full">Contacto</p>
                            <p className="text-xs font-normal lg:text-start  lg:w-full">Bienes Raíces</p>
                            <p className="text-xs font-normal lg:text-start  lg:w-full">Trabajá con Nosotros</p>
                            <p className="text-xs font-normal lg:text-start  lg:w-full">Contáctanos</p>
                        </article>
                    </section>
                </section>
            </div>
        </footer>
    )
}