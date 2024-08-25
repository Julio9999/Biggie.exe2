'use client'
import { IoCaretForward, IoCaretBack } from "react-icons/io5";
import { Slide } from "./Slide"
import { StaticImageData } from "next/image";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import Autoplay from "embla-carousel-autoplay"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { SliderProps } from "@/interfaces";





export const Slider = ({ srcs }: SliderProps) => {

    const [showButtons, setShowButtons] = useState(false);


    return (
        <Carousel
            className="mx-auto max-w-full flex flex-col overflow-hidden"
            opts={{
                loop: true,
            }}
            plugins={[
                Autoplay({
                    delay: 2000
                })
            ]}
            onMouseEnter={() => setShowButtons(() => true)}
            onMouseLeave={() => setShowButtons(() => false)}
        >
            <CarouselContent className="border">
                {
                    srcs.map(src => (
                        <CarouselItem key={src.src} className="select-none">
                            <picture>
                                <img src={src.src} alt="img" />
                            </picture>
                        </CarouselItem>
                    ))
                }
            </CarouselContent>
            {
                <>
                    <CarouselPrevious
                        position={cn(showButtons ? "1rem" : "-2rem")}
                        className="ease-in duration-200 transition-all bg-gray-400   hover:bg-red-600 border-transparent"
                    >
                        <ChevronLeftIcon color="white" className="h-6 w-6" />
                    </CarouselPrevious>
                    <CarouselNext
                        position={cn(showButtons ? "1rem" : "-2rem")}
                        className="ease-in duration-200 transition-all bg-gray-400 hover:bg-red-600 border-transparent"
                    >
                        <ChevronRightIcon color="white" className="h-6 w-6" />
                    </CarouselNext>
                </>
            }
        </Carousel>
    )
}